"use client";

import React, { useRef } from "react";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";
import { testimonials } from "@/data/testimonials";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export const Testimonials: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };
  return (
    <section id="testimonials" className="section-padding bg-transparent border-t border-white/5 overflow-hidden">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <SectionHeading
            label="Reviews"
            title="Client Reviews"
            subtitle="Real feedback from clients who trusted my design expertise to elevate their brands successfully."
            className="!mb-0"
          />
          <div className="hidden md:flex gap-4 pb-2">
            <button onClick={scrollLeft} className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button onClick={scrollRight} className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </Container>

      {/* Testimonials Marquee */}
      <div className="relative w-full overflow-hidden flex">
        {/* Gradient fades for edges */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto px-4 sm:px-6 md:px-8 pb-8 pt-4 snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {testimonials.map((t, idx) => (
            <div
              key={`${t.id}-${idx}`}
              className="snap-center shrink-0 flex flex-col p-8 rounded-3xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all duration-300 relative group w-[350px] md:w-[400px]"
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
    </section>
  );
};
export default Testimonials;
