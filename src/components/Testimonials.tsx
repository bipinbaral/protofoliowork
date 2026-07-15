"use client";

import React, { useRef } from "react";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";
import { testimonials } from "@/data/testimonials";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export const Testimonials: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const slide = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const scrollAmount = 400 + 24; // card width + gap

      if (direction === 'left') {
        if (scrollLeft <= 0) {
          scrollRef.current.scrollTo({ left: scrollWidth, behavior: "smooth" });
        } else {
          scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        }
      } else {
        if (scrollLeft >= scrollWidth - clientWidth - 5) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
      }
    }
  };
  return (
    <section id="testimonials" className="section-padding bg-transparent border-t border-white/5 overflow-hidden">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 sm:mb-16 gap-4 sm:gap-6">
          <SectionHeading
            label="Reviews"
            title="Client Reviews"
            subtitle="Real feedback from clients who trusted my design expertise to elevate their brands successfully."
            className="!mb-0"
          />
        </div>

        {/* Testimonials Marquee */}
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
            className="flex gap-6 overflow-x-auto pb-8 pt-4 snap-x snap-mandatory px-4 md:px-8"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
          {testimonials.map((t, idx) => (
            <div
              key={`${t.id}-${idx}`}
              className="snap-center shrink-0 flex flex-col p-6 sm:p-8 rounded-3xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all duration-300 relative group w-[calc(100vw-3rem)] sm:w-[350px] md:w-[400px] max-w-[400px]"
            >
              {/* Rating Star Group */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
                <span className="font-mono text-xs text-white/55 ml-2">({t.rating.toFixed(1)})</span>
              </div>

              {/* Quote */}
              <p className="font-sans text-base text-white/80 leading-relaxed font-light mb-8 italic flex-1">
                {t.quote}
              </p>

              {/* Client Info with Profile */}
              <div className="border-t border-white/5 pt-6 flex items-center gap-4">
                <img
                  src={t.profile}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border border-white/10"
                />
                <div className="flex flex-col">
                  <span className="font-satoshi text-lg font-bold text-white group-hover:text-gold transition-colors duration-200">
                    {t.name}
                  </span>
                  <span className="font-sans text-xs text-white/50 mt-1">
                    {t.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
      </Container>
    </section>
  );
};
export default Testimonials;
