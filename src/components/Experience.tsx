"use client";

import React from "react";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";
import { AnimatedWrapper } from "./ui/AnimatedWrapper";
import { experience } from "@/data/experience";
import { Briefcase } from "lucide-react";

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="section-padding bg-transparent border-t border-white/5">
      <Container>
        {/* Section Header */}
        <SectionHeading
          label="My Journey"
          title="Work Experience"
          subtitle="A timeline of my professional career as a brand and packaging designer."
          align="center"
          className="text-center"
        />

        {/* Timeline Layout */}
        <div className="relative max-w-3xl mx-auto mt-12 sm:mt-16 pl-8 sm:pl-0">
          
          {/* Vertical line – left on mobile, centered on desktop */}
          <div className="absolute left-3 sm:left-1/2 top-0 bottom-0 w-0.5 bg-white/10 -translate-x-[0.5px]" />

          <AnimatedWrapper type="stagger" delay={0.1} className="space-y-12">
            {experience.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col sm:flex-row items-start sm:items-center ${
                    isEven ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  
                  {/* Circle Indicator on the line */}
                  <div className="absolute left-3 sm:left-1/2 top-3 sm:top-1/2 -translate-x-1/2 sm:-translate-y-1/2 w-3.5 h-3.5 rounded-full border-2 border-gold bg-black z-10 shadow-[0_0_8px_#ffd700]" />

                  {/* Empty spacer column (desktop) */}
                  <div className="hidden sm:block w-1/2" />

                  {/* Timeline Card */}
                  <AnimatedWrapper
                    type={isEven ? "slideLeft" : "slideRight"}
                    delay={index * 0.1}
                    className="w-full sm:w-1/2 sm:px-8"
                  >
                    <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all duration-300 relative group">
                      
                      {/* Accent corner bar */}
                      <div className="absolute top-0 left-0 w-1.5 h-0 bg-gold rounded-tl-2xl rounded-bl-2xl group-hover:h-full transition-all duration-300" />
                      
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-white/5 text-white/70 group-hover:text-gold transition-colors">
                          <Briefcase className="w-4 h-4" />
                        </div>
                        <span className="font-mono text-xs text-gold/80 bg-gold/5 border border-gold/15 px-3 py-1 rounded-full">
                          {item.period}
                        </span>
                      </div>

                      <h3 className="font-satoshi text-xl font-bold text-white mb-1 group-hover:text-gold transition-colors">
                        {item.role}
                      </h3>
                      <p className="font-sans text-sm text-white/50">
                        {item.company}
                      </p>
                    </div>
                  </AnimatedWrapper>
                  
                </div>
              );
            })}
          </AnimatedWrapper>
        </div>
      </Container>
    </section>
  );
};
export default Experience;
