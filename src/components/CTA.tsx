"use client";

import React from "react";
import { Container } from "./ui/Container";
import { Button } from "./ui/Button";
import { AnimatedWrapper } from "./ui/AnimatedWrapper";
import { FaCalendarAlt, FaWhatsapp, FaBehance, FaEnvelope, FaDribbble } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const CTA: React.FC = () => {
  return (
    <section id="contact" className="section-padding relative overflow-hidden bg-transparent">
      {/* Decorative glows */}
      <div className="absolute bottom-[-30%] left-10 w-[50%] aspect-square rounded-full bg-white/[0.01] blur-[150px] pointer-events-none" />
      <div className="absolute top-[-30%] right-10 w-[50%] aspect-square rounded-full bg-white/[0.01] blur-[150px] pointer-events-none" />

      <Container>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <AnimatedWrapper type="slideUp" delay={0.1} className="flex flex-col items-center">
            
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-4.5 py-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 mb-8 select-none">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400">
                Available For Work
              </span>
            </div>

            {/* Main Headline */}
            <h2
              className="font-satoshi font-bold tracking-tight text-white leading-[1.1] mb-8 sm:mb-10 max-w-3xl px-2 sm:px-0"
              style={{ fontSize: "clamp(1.75rem, 5vw, 4.5rem)" }}
            >
              Curious about what we can create together? Let&apos;s bring something extraordinary to life!
            </h2>

            {/* CTA Action Controls */}
            <div className="flex flex-col gap-6 sm:gap-8 items-center justify-center mb-10 sm:mb-12 w-full max-w-sm sm:max-w-none px-4 sm:px-0">
              <Button variant="accent" href="https://wa.me/9843506305" className="w-full sm:w-auto px-10 py-4 group relative overflow-hidden transition-all duration-300">
                <span className="flex items-center gap-2 transition-transform duration-300 group-hover:-translate-y-12">
                  <FaCalendarAlt className="w-4 h-4 text-background" /> Book a Free Call
                </span>
                <span className="flex items-center gap-2 absolute inset-0 justify-center translate-y-12 transition-transform duration-300 group-hover:translate-y-0 text-background font-medium">
                  <FaWhatsapp className="w-5 h-5" /> 9843506305
                </span>
              </Button>

              <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-4">
                {/* Behance */}
                <a href="https://behance.net/bipincreates" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors p-2 min-w-[44px] min-h-[44px] flex items-center justify-center">
                  <FaBehance className="w-6 h-6" />
                </a>
                <span className="w-px h-6 bg-white/10"></span>
                {/* X / Twitter */}
                <a href="https://x.com/" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors p-2 min-w-[44px] min-h-[44px] flex items-center justify-center">
                  <FaXTwitter className="w-5 h-5" />
                </a>
                <span className="w-px h-6 bg-white/10"></span>
                {/* Email */}
                <a href="mailto:bipincreates03@gmail.com" className="text-white/50 hover:text-white transition-colors p-2 min-w-[44px] min-h-[44px] flex items-center justify-center">
                  <FaEnvelope className="w-6 h-6" />
                </a>
                <span className="w-px h-6 bg-white/10"></span>
                {/* Dribbble */}
                <a href="https://dribbble.com/" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors p-2 min-w-[44px] min-h-[44px] flex items-center justify-center">
                  <FaDribbble className="w-6 h-6" />
                </a>
              </div>
            </div>

          </AnimatedWrapper>
        </div>
      </Container>
    </section>
  );
};
export default CTA;
