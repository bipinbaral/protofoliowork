"use client";

import React, { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { Project } from "@/data/projects";

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  projects: Project[];
  currentIndex: number;
  onNavigate: (index: number) => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  isOpen,
  onClose,
  projects,
  currentIndex,
  onNavigate,
}) => {
  const currentProject = projects[currentIndex];

  const handlePrevious = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (currentIndex > 0) {
      onNavigate(currentIndex - 1);
    }
  }, [currentIndex, onNavigate]);

  const handleNext = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (currentIndex < projects.length - 1) {
      onNavigate(currentIndex + 1);
    }
  }, [currentIndex, onNavigate, projects.length]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrevious();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden"; // Prevent background scrolling

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose, handlePrevious, handleNext]);

  return (
    <AnimatePresence>
      {isOpen && currentProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl"
          onClick={onClose}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Controls */}
          <div className="absolute inset-y-0 left-4 md:left-12 flex items-center z-50 pointer-events-none">
            {currentIndex > 0 && (
              <button
                onClick={handlePrevious}
                className="pointer-events-auto w-14 h-14 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-colors"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
            )}
          </div>

          <div className="absolute inset-y-0 right-4 md:right-12 flex items-center z-50 pointer-events-none">
            {currentIndex < projects.length - 1 && (
              <button
                onClick={handleNext}
                className="pointer-events-auto w-14 h-14 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-colors"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            )}
          </div>

          {/* Main Image Container */}
          <div
            className="relative w-full max-w-6xl max-h-[85vh] flex items-center justify-center px-4 md:px-24"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.div
              key={currentProject.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative w-full h-full flex flex-col items-center"
            >
              <img
                src={currentProject.image}
                alt={currentProject.title}
                className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl"
              />
              
              {/* Project Info Overlay / Below Image */}
              <div className="mt-6 flex flex-col sm:flex-row items-center justify-between w-full max-w-4xl text-center sm:text-left gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">{currentProject.title}</h3>
                  <p className="text-white/60 text-sm uppercase tracking-widest">{currentProject.category}</p>
                </div>
                
                {currentProject.link && (
                  <a
                    href={currentProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/20"
                  >
                    View Casestudy <ArrowUpRight className="w-4 h-4" />
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
