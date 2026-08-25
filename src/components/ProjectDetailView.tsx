import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DetailedProject } from "@/data/projects";
import { X, ArrowLeft, ArrowRight, ChevronRight } from "lucide-react";

interface ProjectDetailViewProps {
  activeProject: DetailedProject;
  collection: DetailedProject[];
  onSelect: (project: DetailedProject) => void;
  onBack: () => void;
}

export const ProjectDetailView: React.FC<ProjectDetailViewProps> = ({
  activeProject,
  collection,
  onSelect,
  onBack,
}) => {
  const overlayRef = useRef<HTMLDivElement>(null);

  // Prevent body scroll and handle ESC key
  useEffect(() => {
    document.body.style.overflow = "hidden";
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onBack();
      }
    };
    
    window.addEventListener("keydown", handleKeyDown);
    
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onBack]);

  // Scroll to top when active project changes
  useEffect(() => {
    if (overlayRef.current) {
      overlayRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [activeProject.id]);

  // Combine cover image and gallery images for the full list (deduplicated)
  const allImages = Array.from(
    new Set([activeProject.image, ...(activeProject.galleryImages || [])])
  ).filter(Boolean);

  // Navigation Logic
  const currentIndex = collection.findIndex(p => p.id === activeProject.id);
  const prevProject = currentIndex > 0 ? collection[currentIndex - 1] : null;
  const nextProject = currentIndex < collection.length - 1 ? collection[currentIndex + 1] : null;

  const similarProjects = collection.filter((p) => p.id !== activeProject.id).slice(0, 6);

  return (
    <AnimatePresence>
      <motion.div
        key="project-detail-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        ref={overlayRef}
        className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-xl overflow-y-auto overflow-x-hidden"
        onClick={onBack} // Click outside to close
      >
        {/* Mobile Sticky Close Button (Top Right) */}
        <div className="xl:hidden fixed top-6 right-6 z-[120]">
          <button
            onClick={onBack}
            className="flex items-center justify-center w-12 h-12 rounded-full bg-black/80 backdrop-blur-md border border-white/10 text-white/70 hover:text-white transition-all duration-300 shadow-2xl"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Outer Layout Container */}
        <div className="w-full min-h-screen py-8 md:py-12 px-4 md:px-[12%] lg:px-[15%] flex justify-center max-w-[2000px] mx-auto relative">
          
          {/* Main Canvas */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside canvas
            className="w-full max-w-[1400px] bg-[#0a0a0a] border border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col relative"
          >
            
            {/* Minimal Header */}
            <div className="px-6 py-8 md:px-12 md:py-12 flex flex-col bg-[#050505]">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-satoshi font-bold text-white mb-2">
                {activeProject.title}
              </h2>
              <span className="text-white/50 text-lg md:text-xl font-light">
                {activeProject.category}
              </span>
            </div>

            {/* Images (1px spacing) */}
            <div className="flex flex-col gap-[1px] bg-white/10 w-full">
              {allImages.map((img, idx) => (
                <div key={idx} className="w-full bg-[#0a0a0a]">
                  <img 
                    src={img} 
                    alt={`${activeProject.title} image ${idx + 1}`}
                    loading="lazy"
                    className="w-full h-auto object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Similar Projects Carousel */}
            {similarProjects.length > 0 && (
              <div className="px-6 py-8 md:px-12 md:py-12 border-t border-white/5 bg-[#0a0a0a] flex flex-col gap-6 overflow-hidden">
                <h2 className="text-2xl font-satoshi font-bold text-white">Similar Projects</h2>
                <div className="flex overflow-x-auto gap-6 hide-scrollbar pb-2 -mx-6 px-6 md:-mx-12 md:px-12">
                  {similarProjects.map((proj) => (
                    <motion.div
                      key={proj.id}
                      whileHover={{ y: -5 }}
                      onClick={() => onSelect(proj)}
                      className="group cursor-pointer flex-shrink-0 w-72 sm:w-80 flex flex-col gap-3"
                    >
                      <div className="w-full aspect-[16/9] rounded-xl overflow-hidden bg-white/5 border border-white/10 relative">
                        <img 
                          src={proj.image} 
                          alt={proj.title} 
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                          <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 w-12 h-12 rounded-full bg-white text-black flex items-center justify-center">
                            <ChevronRight className="w-6 h-6" />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-satoshi font-bold text-lg text-white group-hover:text-white/80 transition-colors">
                          {proj.title}
                        </span>
                        <span className="text-white/40 text-sm">{proj.category}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Navigation Footer */}
            <div className="px-6 py-8 md:px-12 md:py-12 border-t border-white/5 bg-[#050505] flex flex-col sm:flex-row justify-between items-center gap-6">
              {/* Previous */}
              <div className="w-full sm:w-1/3 flex justify-start">
                {prevProject ? (
                  <button onClick={() => onSelect(prevProject)} className="group flex items-center gap-3 text-white/50 hover:text-white transition-colors">
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    <div className="flex flex-col items-start text-left">
                      <span className="text-xs uppercase tracking-widest text-white/30">Previous</span>
                      <span className="font-medium truncate max-w-[120px] md:max-w-[160px]">{prevProject.title}</span>
                    </div>
                  </button>
                ) : (
                  <div className="hidden sm:block" />
                )}
              </div>

              {/* Back to All */}
              <div className="w-full sm:w-1/3 flex justify-center border-y border-white/5 sm:border-y-0 py-4 sm:py-0">
                <button onClick={onBack} className="text-white/60 hover:text-white font-medium underline underline-offset-4 decoration-white/10 hover:decoration-white/40 transition-all">
                  Back to All Projects
                </button>
              </div>

              {/* Next */}
              <div className="w-full sm:w-1/3 flex justify-end">
                {nextProject ? (
                  <button onClick={() => onSelect(nextProject)} className="group flex items-center gap-3 text-white/50 hover:text-white transition-colors">
                    <div className="flex flex-col items-end text-right">
                      <span className="text-xs uppercase tracking-widest text-white/30">Next</span>
                      <span className="font-medium truncate max-w-[120px] md:max-w-[160px]">{nextProject.title}</span>
                    </div>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                ) : (
                  <div className="hidden sm:block" />
                )}
              </div>
            </div>

            {/* Mobile Tools Used (Shown only on small screens where right panel is hidden) */}
            {activeProject.tools && activeProject.tools.length > 0 && (
              <div className="xl:hidden px-6 py-8 border-t border-white/5 bg-[#050505] flex flex-col gap-4">
                <h4 className="text-white/30 text-xs font-bold uppercase tracking-widest">Tools Used</h4>
                <div className="flex flex-wrap gap-2">
                  {activeProject.tools.map(tool => (
                    <span key={tool} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-white/80 text-sm">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Sticky Sidebar (Right Margin on Desktop, placed inside canvas relative container) */}
            <div className="hidden xl:block absolute left-full top-0 ml-8 w-48 h-full pointer-events-none z-[120]">
              <div className="sticky top-12 flex flex-col gap-6 pointer-events-auto items-start">
                
                {/* Close Button */}
                <button
                  onClick={onBack}
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-black/60 hover:bg-white/10 border border-white/10 text-white/70 hover:text-white transition-all duration-300 shadow-2xl backdrop-blur-md"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Tools Used Panel */}
                {activeProject.tools && activeProject.tools.length > 0 && (
                  <div className="flex flex-col gap-4 w-full">
                    <h4 className="text-white/30 text-xs font-bold uppercase tracking-widest">Tools Used</h4>
                    <div className="flex flex-col gap-2">
                      {activeProject.tools.map(tool => (
                        <div key={tool} className="px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white/80 text-sm shadow-lg backdrop-blur-md">
                          {tool}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

          </motion.div>
        </div>
      </motion.div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </AnimatePresence>
  );
};

export default ProjectDetailView;
