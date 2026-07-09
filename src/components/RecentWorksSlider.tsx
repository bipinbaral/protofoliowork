"use client";

import React, { useRef, useState, useEffect } from "react";
import { Container } from "./ui/Container";
import { projects } from "@/data/projects";
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { Lightbox } from "./ui/Lightbox";

export const RecentWorksSlider: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("resize", handleScroll);
    return () => window.removeEventListener("resize", handleScroll);
  }, []);

  const slide = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      // 4 cards * 320px + 4 gaps * 24px (gap-6)
      const scrollAmount = (320 * 4) + (24 * 4);
      const amount = direction === 'left' ? -scrollAmount : scrollAmount;
      scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <section className="bg-transparent py-16 overflow-hidden">
        <Container>
          {/* Header with Nav Controls */}
          <div className="flex justify-between items-end mb-8">
            <div className="flex flex-col gap-1">
              <span className="text-white/50 text-xs font-semibold uppercase tracking-[0.15em]">Portfolio</span>
              <h2 className="text-3xl font-bold text-white">Recent Work</h2>
            </div>
            <div className="hidden md:flex gap-3">
              <button
                onClick={() => slide('left')}
                disabled={!canScrollLeft}
                className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 ${
                  canScrollLeft
                    ? "border-white/20 bg-white/5 hover:bg-white/10 text-white cursor-pointer"
                    : "border-white/5 bg-transparent text-white/20 cursor-not-allowed"
                }`}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => slide('right')}
                disabled={!canScrollRight}
                className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 ${
                  canScrollRight
                    ? "border-white/20 bg-white/5 hover:bg-white/10 text-white cursor-pointer"
                    : "border-white/5 bg-transparent text-white/20 cursor-not-allowed"
                }`}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </Container>

        {/* Slider Container */}
        <div className="relative w-full">
          {/* Left Edge Fade */}
          <div 
            className={`absolute top-0 left-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#030014] to-transparent pointer-events-none transition-opacity duration-500 z-20 ${
              canScrollLeft ? 'opacity-100' : 'opacity-0'
            }`} 
          />
          
          {/* Right Edge Fade */}
          <div 
            className={`absolute top-0 right-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#030014] to-transparent pointer-events-none transition-opacity duration-500 z-20 ${
              canScrollRight ? 'opacity-100' : 'opacity-0'
            }`} 
          />

          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-6 overflow-x-auto px-4 sm:px-6 md:px-8 pb-12 pt-4 snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {projects.map((project, idx) => (
              <div
                key={`${project.id}-${idx}`}
                onClick={() => openLightbox(idx)}
                className="snap-center shrink-0 w-[calc(100vw-4rem)] sm:w-[300px] md:w-[320px] flex flex-col group cursor-pointer"
              >
                {/* Simplified Image Block Only */}
                <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 shadow-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Darken Overlay on hover */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* Expand icon appearing on hover */}
                  <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100 pointer-events-none z-30"
                  >
                    <Maximize2 className="w-5 h-5" />
                  </div>

                  {/* Year Badge top-right */}
                  {project.year && (
                    <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white/90 font-sans font-semibold text-sm z-20">
                      {project.year}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        projects={projects}
        currentIndex={lightboxIndex}
        onNavigate={setLightboxIndex}
      />
    </>
  );
};

export default RecentWorksSlider;
