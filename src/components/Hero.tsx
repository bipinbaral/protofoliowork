"use client";

import React from "react";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { Container } from "./ui/Container";
import { Button } from "./ui/Button";
import { AnimatedWrapper } from "./ui/AnimatedWrapper";
import { DotMatrix } from "@/components/ui/dot-matrix";

const logos = [
  { src: "https://framerusercontent.com/images/otv1rEDn2X7h8TFtKPCksQmAEKQ.svg", alt: "Client 1" },
  { src: "https://framerusercontent.com/images/rrRoFs4icQtustYbIGm5r5DXREI.svg", alt: "Client 2" },
  { src: "https://framerusercontent.com/images/hhTRf8RciR9bakkAgIckAkEiQM.svg", alt: "Client 3" },
  { src: "https://framerusercontent.com/images/1ph1389RD4RtUDEfqVhWbujyF7s.svg", alt: "Client 4" },
  { src: "https://framerusercontent.com/images/Yn3MOOL9rTXhK9U8MLvSnEoNP8.svg", alt: "Client 5" },
];

export const Hero: React.FC = () => {

  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-36 pb-32 overflow-hidden bg-transparent">
      {/* Decorative gradient background glow */}
      <div className="absolute top-[-20%] left-[50%] -translate-x-[50%] w-[60%] aspect-square rounded-full bg-white/[0.02] blur-[150px] pointer-events-none" />

      <Container className="flex-1 flex flex-col justify-center items-center text-center">
        <AnimatedWrapper type="slideUp" delay={0.1} className="flex flex-col items-center">
          {/* Top Label */}
          <span className="text-xs uppercase font-mono tracking-[0.25em] text-white/50 border border-white/10 px-4 py-1.5 rounded-full bg-white/5 mb-8 select-none">
            Crafting Unique Brand Identities
          </span>

          {/* Headline */}
          <h1 className="font-satoshi text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.05] max-w-5xl">
            Design & Build<br className="hidden sm:inline" />
            Creative Products
          </h1>

          {/* Subheading */}
          <p className="mt-8 text-base sm:text-lg md:text-xl text-white/60 leading-relaxed max-w-2xl font-sans font-light">
            Elevate your brand with custom identity and package design. Showcase your story through bold visuals and strategic design solutions.
          </p>

          {/* Actions */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Button variant="primary" href="#contact" className="w-full sm:w-auto px-8">
              Get Started Now
            </Button>
            <Button variant="secondary" href="#projects" className="w-full sm:w-auto px-8">
              See Projects
            </Button>
          </div>
        </AnimatedWrapper>
      </Container>

      {/* Bottom Marquee & Scroll Indicator */}
      <div className="w-full mt-12 flex flex-col items-center gap-12">
        {/* Scroll down indicator */}
        <AnimatedWrapper type="fadeIn" delay={0.5} className="flex flex-col items-center gap-2 text-white/40 hover:text-white transition-colors duration-300">
          <a href="#projects" className="flex flex-col items-center gap-1 group">
            <span className="text-[10px] uppercase font-mono tracking-widest">Scroll Down</span>
            <span className="text-[10px] font-sans text-white/30 group-hover:text-white/60 transition-colors">to see projects</span>
            <ArrowDown className="w-3.5 h-3.5 mt-1 animate-bounce text-gold" />
          </a>
        </AnimatedWrapper>

        {/* Client Marquee */}
        <div className="relative w-full overflow-hidden py-6 bg-white backdrop-blur-md">
          <div className="flex w-[200%] animate-marquee">
            {/* First Set of Logos */}
            <div className="flex justify-around items-center w-1/2">
              {logos.map((logo, i) => (
                <div key={`logo-1-${i}`} className="relative h-6 w-24 grayscale invert opacity-45 hover:opacity-100 transition-opacity duration-300">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    className="object-contain"
                    sizes="96px"
                  />
                </div>
              ))}
            </div>

            {/* Second Set of Logos (for seamless looping) */}
            <div className="flex justify-around items-center w-1/2">
              {logos.map((logo, i) => (
                <div key={`logo-2-${i}`} className="relative h-6 w-24 grayscale invert opacity-45 hover:opacity-100 transition-opacity duration-300">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    className="object-contain"
                    sizes="96px"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
