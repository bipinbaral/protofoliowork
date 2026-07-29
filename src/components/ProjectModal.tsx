"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight } from "lucide-react";
import { Project } from "@/data/projects";
import Image from "next/image";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [project]);

  // Handle escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-5xl max-h-full overflow-y-auto bg-[#121212] rounded-3xl shadow-2xl border border-white/10 scrollbar-none"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 p-2 bg-black/50 hover:bg-white/10 backdrop-blur-md rounded-full transition-colors border border-white/10"
              aria-label="Close modal"
            >
              <X className="w-5 h-5 text-white/80" />
            </button>

            {/* Header Image */}
            <div className="relative w-full h-[30vh] sm:h-[40vh] md:h-[50vh] bg-black shrink-0">
              <Image
                src={project.image}
                alt={project.title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Content Area */}
            <div className="px-6 py-8 sm:px-12 sm:py-12 flex flex-col gap-12 shrink-0">
              {/* Header Info */}
              <div className="flex flex-col md:flex-row justify-between items-start gap-8">
                <div className="max-w-2xl">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-sm font-mono text-white/50 uppercase tracking-widest">{project.category}</span>
                    {project.year && (
                      <>
                        <span className="w-1 h-1 rounded-full bg-white/20" />
                        <span className="text-sm font-mono text-white/50">{project.year}</span>
                      </>
                    )}
                  </div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-satoshi font-bold text-white mb-6">
                    {project.title}
                  </h2>
                  {project.details?.description && (
                    <p className="text-lg text-white/70 leading-relaxed font-light">
                      {project.details.description}
                    </p>
                  )}
                </div>

                {/* External Link */}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-semibold text-sm hover:bg-white/90 transition-colors shrink-0"
                  >
                    Visit Project
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                )}
              </div>

              {/* Meta Details: Services & Tools */}
              {(project.details?.services || project.details?.tools) && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 py-8 border-y border-white/10">
                  {project.details.services && (
                    <div>
                      <h4 className="text-sm uppercase font-mono tracking-widest text-white/40 mb-4">Services</h4>
                      <ul className="flex flex-col gap-2">
                        {project.details.services.map((service, i) => (
                          <li key={i} className="text-white/80 font-medium">{service}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {project.details.tools && (
                    <div>
                      <h4 className="text-sm uppercase font-mono tracking-widest text-white/40 mb-4">Tools & Tech</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.details.tools.map((tool, i) => (
                          <span key={i} className="px-3 py-1.5 rounded-full text-xs font-medium text-white/70 bg-white/5 border border-white/10">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Color Palette */}
              {project.details?.colorPalette && project.details.colorPalette.length > 0 && (
                <div>
                  <h4 className="text-sm uppercase font-mono tracking-widest text-white/40 mb-6">Color Palette</h4>
                  <div className="flex flex-wrap gap-4 sm:gap-6">
                    {project.details.colorPalette.map((color, i) => (
                      <div key={i} className="flex flex-col items-center gap-3">
                        <div 
                          className="w-16 h-16 sm:w-20 sm:h-20 rounded-full shadow-lg border border-white/10" 
                          style={{ backgroundColor: color.hex }}
                        />
                        <div className="text-center">
                          <p className="text-white/90 text-sm font-medium">{color.name}</p>
                          <p className="text-white/50 text-xs font-mono uppercase">{color.hex}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Gallery */}
              {project.details?.gallery && project.details.gallery.length > 0 && (
                <div>
                  <h4 className="text-sm uppercase font-mono tracking-widest text-white/40 mb-6">Gallery</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    {project.details.gallery.map((img, i) => (
                      <div key={i} className={`relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 ${i === 0 ? 'sm:col-span-2 aspect-[21/9]' : 'aspect-video'}`}>
                        <Image
                          src={img}
                          alt={`${project.title} gallery image ${i + 1}`}
                          fill
                          className="object-cover transition-transform duration-700 hover:scale-105"
                          sizes="(max-width: 1024px) 100vw, 1024px"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
