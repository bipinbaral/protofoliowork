"use client";

import React from "react";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";
import { testimonials } from "@/data/testimonials";
import { Star } from "lucide-react";
import Marquee from "./ui/Marquee";

export const Testimonials: React.FC = () => {
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
        <div className="relative w-full">
          {/* Gradient Edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 sm:w-1/3 bg-gradient-to-r from-background to-transparent z-20"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 sm:w-1/3 bg-gradient-to-l from-background to-transparent z-20"></div>
          
          <Marquee pauseOnHover={true} className="[--duration:50s] py-4" repeat={3}>
            {testimonials.map((t, idx) => (
              <div
                key={`${t.id}-${idx}`}
                className="shrink-0 flex flex-col p-6 sm:p-8 rounded-3xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all duration-300 relative group w-[280px] sm:w-[350px] md:w-[400px]"
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
                  "{t.quote}"
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
          </Marquee>
        </div>
      </Container>
    </section>
  );
};
export default Testimonials;
