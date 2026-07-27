"use client";

import React from "react";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { Container } from "./ui/Container";
import { Button } from "./ui/Button";
import { FaArrowRight, FaEye } from "react-icons/fa";
import { AnimatedWrapper } from "./ui/AnimatedWrapper";

const logos = [
  { src: "/scrolling%20logos/Dream%20Study.png", alt: "Dream Study", href: "#" },
  { src: "/scrolling%20logos/Evani.png", alt: "Evani", href: "https://evanieducation.com/" },
  { src: "/scrolling%20logos/Future%20Ready%20nepal.png", alt: "Future Ready Nepal", href: "#" },
  { src: "/scrolling%20logos/Lhotse.png", alt: "Lhotse", href: "https://www.lhotse.com.au/" },
  { src: "/scrolling%20logos/MoneyTO%20logo.png", alt: "MoneyTO", href: "#" },
  { src: "/scrolling%20logos/Ratomasi.png", alt: "Ratomasi", href: "https://www.ratomasi.com/" },
  { src: "/scrolling%20logos/Sagarmatha%20Engineering%20College.png", alt: "Sagarmatha Engineering College", href: "https://sagarmatha.edu.np/" },
  { src: "/scrolling%20logos/idyfy.png", alt: "Idyfy", href: "#" },
  { src: "/scrolling%20logos/pinak.png", alt: "Pinak", href: "https://www.pinakinterior.com.np/" },
  { src: "/scrolling%20logos/smart%20city%20internationall.png", alt: "Smart City International", href: "https://smartcityinternational.edu.np/" },
  { src: "/scrolling%20logos/Jhapa%20Supercup.png", alt: "Jhapa Supercup", href: "#" },
  { src: "/scrolling%20logos/gauko%20achar.png", alt: "Gauko Achar", href: "#" },
];

export const Hero: React.FC = () => {

  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-24 sm:pt-36 pb-32 overflow-hidden bg-transparent">
      {/* Decorative gradient background glow */}
      <div className="absolute top-[-20%] left-[50%] -translate-x-[50%] w-[60%] aspect-square rounded-full bg-white/[0.02] blur-[150px] pointer-events-none" />

      <Container className="flex-1 flex flex-col justify-center items-center text-center">
        <AnimatedWrapper type="slideUp" delay={0.1} className="flex flex-col items-center w-full">
          {/* Top Label */}
          <span className="text-[10px] sm:text-xs uppercase font-mono tracking-[0.2em] sm:tracking-[0.25em] text-white/50 border border-white/10 px-3 sm:px-4 py-1.5 rounded-full bg-white/5 mb-6 sm:mb-8 select-none">
            Crafting Unique Brand Identities
          </span>

          {/* Headline â€“ fluid clamp */}
          <h1
            className="font-satoshi font-bold tracking-tight text-white leading-[1.05] max-w-5xl"
            style={{ fontSize: "clamp(2.2rem, 8vw, 6rem)" }}
          >
            Design &amp; Build<br className="hidden sm:inline" />
            Creative Products
          </h1>

          {/* Subheading */}
          <p className="mt-5 sm:mt-8 text-sm sm:text-lg md:text-xl text-white/60 leading-relaxed max-w-2xl font-sans font-light px-2 sm:px-0">
            Elevate your brand with custom identity and package design. Showcase your story through bold visuals and strategic design solutions.
          </p>

          {/* Actions */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center w-full max-w-sm sm:max-w-none px-4 sm:px-0">
            <Button variant="primary" href="#contact" className="w-full sm:w-auto px-8">
              <span className="flex items-center gap-2"><FaArrowRight className="w-4 h-4" /> Get Started Now</span>
            </Button>
            <Button variant="secondary" href="#projects" className="w-full sm:w-auto px-8">
              <span className="flex items-center gap-2"><FaEye className="w-4 h-4" /> See Projects</span>
            </Button>
          </div>
        </AnimatedWrapper>
      </Container>

      {/* Bottom Marquee & Scroll Indicator */}
      <div className="w-full mt-10 sm:mt-12 flex flex-col items-center gap-8 sm:gap-12">
        {/* Scroll down indicator */}
        <AnimatedWrapper type="fadeIn" delay={0.5} className="flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors duration-300">
          <a href="#projects" className="flex flex-col items-center gap-1 group">
            <span className="text-[10px] uppercase font-mono tracking-widest">Scroll Down</span>
            <span className="text-[10px] font-sans text-white/60 group-hover:text-white/60 transition-colors">to see projects</span>
            <ArrowDown className="w-3.5 h-3.5 mt-1 animate-bounce text-gold" />
          </a>
        </AnimatedWrapper>

        {/* Client Marquee */}
        <div className="relative w-full overflow-hidden py-4 sm:py-6 bg-white backdrop-blur-md">
          <div className="flex w-max animate-marquee">
            {/* First Set of Logos */}
            <div className="flex items-center shrink-0 px-2 sm:px-4">
              {logos.map((logo, i) => (
                <a key={`logo-1-${i}`} href={logo.href} target="_blank" rel="noopener noreferrer" className="relative shrink-0 h-10 sm:h-12 w-28 sm:w-32 mx-4 sm:mx-6 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 112px, 128px"
                  />
                </a>
              ))}
            </div>

            {/* Second Set of Logos (for seamless looping) */}
            <div className="flex items-center shrink-0 px-2 sm:px-4">
              {logos.map((logo, i) => (
                <a key={`logo-2-${i}`} href={logo.href} target="_blank" rel="noopener noreferrer" className="relative shrink-0 h-10 sm:h-12 w-28 sm:w-32 mx-4 sm:mx-6 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 112px, 128px"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;

