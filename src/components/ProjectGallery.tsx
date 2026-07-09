"use client";

import React, { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface Variant {
  id: number;
  title: string;
  image: string;
}

interface ProjectGalleryProps {
  variants: Variant[];
}

export function ProjectGallery({ variants }: ProjectGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);
  
  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev !== null && prev < variants.length - 1 ? prev + 1 : prev));
  };
  
  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : prev));
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
        {variants.map((variant, index) => (
          <div 
            key={variant.id} 
            className="flex flex-col gap-3 group cursor-pointer" 
            onClick={() => openLightbox(index)}
          >
            <div className="w-full aspect-[4/3] relative rounded-2xl overflow-hidden border border-white/5 bg-zinc-900">
              <img
                src={variant.image}
                alt={variant.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <h3 className="text-lg font-satoshi font-semibold text-white/90 px-1 text-center">
              {variant.title}
            </h3>
          </div>
        ))}
      </div>

      {/* Lightbox / Fullscreen Slider */}
      {selectedIndex !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 sm:p-8 backdrop-blur-md"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white z-50 bg-white/10 hover:bg-white/20 transition-colors p-2 rounded-full"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <X size={24} />
          </button>
          
          {/* Previous button */}
          <button 
            className="absolute left-4 sm:left-8 text-white/70 hover:text-white z-50 bg-white/10 hover:bg-white/20 transition-colors p-3 rounded-full disabled:opacity-30 disabled:hover:bg-white/10"
            onClick={prevSlide}
            disabled={selectedIndex === 0}
            aria-label="Previous image"
          >
            <ChevronLeft size={32} />
          </button>

          {/* Main image container */}
          <div 
            className="relative w-full max-w-6xl h-full max-h-[85vh] flex items-center justify-center" 
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={variants[selectedIndex].image}
              alt={variants[selectedIndex].title}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />
          </div>

          {/* Next button */}
          <button 
            className="absolute right-4 sm:right-8 text-white/70 hover:text-white z-50 bg-white/10 hover:bg-white/20 transition-colors p-3 rounded-full disabled:opacity-30 disabled:hover:bg-white/10"
            onClick={nextSlide}
            disabled={selectedIndex === variants.length - 1}
            aria-label="Next image"
          >
            <ChevronRight size={32} />
          </button>
          
          {/* Bottom Info */}
          <div className="absolute bottom-6 left-0 right-0 text-center z-50 flex flex-col items-center gap-1" onClick={(e) => e.stopPropagation()}>
            <span className="text-white/90 font-satoshi font-medium text-lg">
              {variants[selectedIndex].title}
            </span>
            <span className="text-white/50 text-sm font-mono">
              {selectedIndex + 1} / {variants.length}
            </span>
          </div>
        </div>
      )}
    </>
  );
}
