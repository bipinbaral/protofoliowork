"use client";

import React from "react";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { Container } from "./ui/Container";
import { Button } from "./ui/Button";
import { FaArrowRight, FaEye } from "react-icons/fa";
import { AnimatedWrapper } from "./ui/AnimatedWrapper";
import Marquee from "./ui/Marquee";

const logos = [
  { src: "/scrolling-logos/dream-study.png", alt: "Dream Study", href: "#" },
  { src: "/scrolling-logos/evani.png", alt: "Evani", href: "https://evanieducation.com/" },
  { src: "/scrolling-logos/future-ready-nepal.png", alt: "Future Ready Nepal", href: "#" },
  { src: "/scrolling-logos/lhotse.png", alt: "Lhotse", href: "https://www.lhotse.com.au/" },
  { src: "/scrolling-logos/moneyto-logo.png", alt: "MoneyTO", href: "#" },
  { src: "/scrolling-logos/Ratomasi.png", alt: "Ratomasi", href: "https://www.ratomasi.com/" },
  { src: "/scrolling-logos/sagarmatha-engineering-college.png", alt: "Sagarmatha Engineering College", href: "https://sagarmatha.edu.np/" },
  { src: "/scrolling-logos/idyfy.png", alt: "Idyfy", href: "#" },
  { src: "/scrolling-logos/pinak.png", alt: "Pinak", href: "https://www.pinakinterior.com.np/" },
  { src: "/scrolling-logos/smart-city-international.png", alt: "Smart City International", href: "https://smartcityinternational.edu.np/" },
  { src: "/scrolling-logos/jhapa-supercup.png", alt: "Jhapa Supercup", href: "#" },
  { src: "/scrolling-logos/gauko-achar.png", alt: "Gauko Achar", href: "#" },
];

export const Hero: React.FC = () => {

  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-24 sm:pt-36 pb-32 overflow-hidden bg-transparent">
      {/* Decorative gradient background glow */}
      <div className="absolute top-[-20%] left-[50%] -translate-x-[50%] w-[60%] aspect-square rounded-full bg-white/[0.02] blur-[150px] pointer-events-none" />

      <Container className="flex-1 flex flex-col justify-center items-center text-center">
        <AnimatedWrapper type="slideUp" delay={0.1} className="flex flex-col items-center w-full">
          {/* Keyword-Rich Primary H1 */}
          <h1 className="text-[10px] sm:text-xs uppercase font-mono tracking-[0.2em] sm:tracking-[0.25em] text-white/70 border border-white/10 px-3 sm:px-4 py-1.5 rounded-full bg-white/5 mb-6 sm:mb-8 select-none font-normal">
            Graphic Designer, UI/UX &amp; Web Developer in Kathmandu, Nepal
          </h1>

          {/* Sub-Headline – fluid clamp */}
          <h2
            className="font-satoshi font-bold tracking-tight text-white leading-[1.1] max-w-5xl"
            style={{ fontSize: "clamp(2.2rem, 5vw, 8rem)" }}
          >
            Design &amp; Build <br />
            Creative Products
          </h2>

          {/* Subheading */}
          <p className="mt-5 sm:mt-8 text-sm sm:text-lg md:text-xl text-white/60 leading-relaxed max-w-3xl font-sans font-light px-2 sm:px-0">
            Hi, I&apos;m Bipin Baral I craft high-impact brand identities, intuitive digital products, and high-performance websites for clients across Nepal and globally.
          </p>

          {/* Actions */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center w-full max-w-sm sm:max-w-none px-4 sm:px-0">
            <Button variant="accent" href="#contact" className="w-full sm:w-auto px-8">
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
        <div className="relative w-full py-2 sm:py-3 bg-white backdrop-blur-md">
          <Marquee pauseOnHover={true} className="[--duration:40s]" repeat={2}>
            {logos.map((logo, i) => (
              <a key={`logo-${i}`} href={logo.href} target="_blank" rel="noopener noreferrer" className="relative shrink-0 h-8 sm:h-10 w-24 sm:w-28 mx-4 sm:mx-6 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 block">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 112px, 128px"
                />
              </a>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};
export default Hero;

