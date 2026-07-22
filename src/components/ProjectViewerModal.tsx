"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { DetailedProject } from "@/data/projects";

interface ProjectViewerModalProps {
  project: DetailedProject | null;
  onClose: () => void;
}

export const ProjectViewerModal: React.FC<ProjectViewerModalProps> = ({ project, onClose }) => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Close modal when pressing Escape if lightbox is closed
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (lightboxIndex !== null) {
          setLightboxIndex(null);
        } else {
          onClose();
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, onClose]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [project]);

  const handlePrev = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    if (!project?.galleryImages) return;
    setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : project.galleryImages!.length - 1));
  }, [project]);

  const handleNext = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    if (!project?.galleryImages) return;
    setLightboxIndex((prev) => (prev !== null && prev < project.galleryImages!.length - 1 ? prev + 1 : 0));
  }, [project]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;
    
    const handleLightboxKeys = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : (project?.galleryImages?.length || 1) - 1));
      } else if (e.key === "ArrowRight") {
        setLightboxIndex((prev) => (prev !== null && prev < (project?.galleryImages?.length || 1) - 1 ? prev + 1 : 0));
      }
    };
    
    window.addEventListener("keydown", handleLightboxKeys);
    return () => window.removeEventListener("keydown", handleLightboxKeys);
  }, [lightboxIndex, project]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex flex-col bg-black/90 backdrop-blur-xl overflow-y-auto"
      >
        {/* Header / Close Button */}
        <div className="sticky top-0 z-10 flex items-center justify-between p-6 bg-gradient-to-b from-black/80 to-transparent pointer-events-none">
          <h2 className="text-white/80 font-sans font-bold text-xl drop-shadow-md pointer-events-auto">
            {project.title}
          </h2>
          <button
            onClick={onClose}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors pointer-events-auto border border-white/10"
            aria-label="Close project viewer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Gallery Scroll Content */}
        <div className="flex-1 w-full max-w-5xl mx-auto px-4 pb-24 pt-12 flex flex-col gap-8">
          {project.galleryImages?.length ? (
            project.galleryImages.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="w-full relative rounded-2xl overflow-hidden cursor-zoom-in border border-white/5 shadow-2xl"
                onClick={() => setLightboxIndex(idx)}
              >
                <img
                  src={img}
                  alt={`${project.title} presentation ${idx + 1}`}
                  className="w-full h-auto object-contain"
                  loading={idx < 2 ? "eager" : "lazy"}
                />
              </motion.div>
            ))
          ) : (
            <div className="flex-1 flex items-center justify-center text-white/50">
              No gallery images available for this project.
            </div>
          )}
        </div>

        {/* Fullscreen Lightbox Overlay */}
        <AnimatePresence>
          {lightboxIndex !== null && project.galleryImages && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[60] bg-black flex items-center justify-center"
              onClick={() => setLightboxIndex(null)}
            >
              <button
                onClick={(e) => { e.stopPropagation(); setLightboxIndex(null); }}
                className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="absolute top-6 left-6 px-4 py-2 rounded-full bg-white/10 text-white font-mono text-sm tracking-widest backdrop-blur-md">
                {lightboxIndex + 1} / {project.galleryImages.length}
              </div>

              <button
                onClick={handlePrev}
                className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 flex items-center justify-center rounded-full bg-black/50 hover:bg-white/20 text-white backdrop-blur-md transition-colors z-10 border border-white/10"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>

              <motion.img
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                src={project.galleryImages[lightboxIndex]}
                alt={`Lightbox view ${lightboxIndex + 1}`}
                className="max-w-[90vw] max-h-[90vh] object-contain cursor-zoom-out drop-shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />

              <button
                onClick={handleNext}
                className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 flex items-center justify-center rounded-full bg-black/50 hover:bg-white/20 text-white backdrop-blur-md transition-colors z-10 border border-white/10"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
};
