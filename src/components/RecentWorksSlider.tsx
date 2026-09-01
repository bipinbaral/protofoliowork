"use client";

import React, { useRef, useState, useEffect } from "react";
import { Container } from "./ui/Container";
import { recentWorks } from "@/data/projects";
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { Lightbox } from "./ui/Lightbox";

export const RecentWorksSlider: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const handleScroll = () => {
    // Scroll handling is kept for future extensions if needed, but not required for wrap-around looping
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("resize", handleScroll);
    return () => window.removeEventListener("resize", handleScroll);
  }, []);

  const slide = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      // Scroll by roughly 2 cards at a time
      const scrollAmount = (320 + 24) * 2; 

      if (direction === 'left') {
        if (scrollLeft <= 0) {
          // Wrap around to end
          scrollRef.current.scrollTo({ left: scrollWidth, behavior: "smooth" });
        } else {
          scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        }
      } else {
        if (scrollLeft >= scrollWidth - clientWidth - 5) {
          // Wrap around to start
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
      }
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
          </div>

          {/* Slider Container */}
          <div className="relative w-full group">
            {/* Left Arrow (Floating) */}
            <button
              onClick={() => slide('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4 w-10 h-10 rounded-full border border-white/20 bg-black/50 backdrop-blur-md flex items-center justify-center text-white z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white/10"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Right Arrow (Floating) */}
            <button
              onClick={() => slide('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4 w-10 h-10 rounded-full border border-white/20 bg-black/50 backdrop-blur-md flex items-center justify-center text-white z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white/10"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            <div
              ref={scrollRef}
              onScroll={handleScroll}
              className="flex gap-6 overflow-x-auto pb-12 pt-4 snap-x snap-mandatory px-4 md:px-8"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {recentWorks.map((project, idx) => (
                <div
                  key={`${project.id}-${idx}`}
                  onClick={() => openLightbox(idx)}
                  className="snap-center shrink-0 w-[280px] md:w-[320px] flex flex-col group/card cursor-pointer"
                >
                  {/* Simplified Image Block Only */}
                  <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 shadow-lg">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105"
                    />
                    
                    {/* Darken Overlay on hover */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    {/* Expand icon appearing on hover */}
                    <div
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover/card:opacity-100 transition-all duration-300 scale-75 group-hover/card:scale-100 pointer-events-none z-30"
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
        </Container>
      </section>

      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        projects={recentWorks}
        currentIndex={lightboxIndex}
        onNavigate={setLightboxIndex}
      />
    </>
  );
};

export default RecentWorksSlider;
