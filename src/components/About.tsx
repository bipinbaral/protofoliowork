"use client";

import React from "react";
import Image from "next/image";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";
import { AnimatedWrapper } from "./ui/AnimatedWrapper";

export const About: React.FC = () => {
  const skills = [
    "Product Design",
    "Brand Identity Design",
    "UX Design",
    "Branding",
    "Packaging Design",
  ];

  const tools = [
    "Figma",
    "Photoshop",
    "Illustrator",
    "After Effects",
    "Premiere Pro",
    "Framer",
    "WordPress",
    "Next.js",
    "AI Tools",
  ];

  return (
    <section id="about-me" className="section-padding bg-transparent border-t border-white/5">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Profile Image */}
          <div className="lg:col-span-5 w-full flex justify-center">
            <AnimatedWrapper type="scaleReveal" delay={0.1} className="relative w-full max-w-[320px] sm:max-w-[380px] lg:max-w-none aspect-[3/4] rounded-3xl overflow-hidden border border-white/10 group bg-zinc-900 shadow-2xl">
              <Image
                src="/images/bipin.jpg"
                alt="Bipin - Brand Identity & Package Designer"
                fill
                priority
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 768px) 90vw, (max-width: 1024px) 400px, 500px"
              />
              {/* Overlay shadow for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />
            </AnimatedWrapper>
          </div>

          {/* About Details */}
          <div className="lg:col-span-7 flex flex-col justify-center h-full">
            <SectionHeading
              label="Meet Bipin"
              title="Creative designer crafting identities"
              className="!mb-6"
            />

            <AnimatedWrapper type="slideUp" delay={0.2}>
              <p className="font-sans text-sm sm:text-base lg:text-lg text-white/70 leading-relaxed font-light mb-6 sm:mb-8">
                I&apos;m Bipin, a passionate Brand Identity &amp; Package Designer. I specialize in crafting bold visual identities and packaging that captivate and inspire, blending creativity with strategy to elevate brands.
              </p>

              {/* Skills Tags */}
              <div className="mb-6 sm:mb-8">
                <h4 className="text-xs uppercase font-mono tracking-wider text-white/70 mb-3">Expertise</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-full text-xs font-sans font-medium text-white/80 bg-white/5 border border-white/5 hover:border-white/10 hover:bg-white/10 transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tools Tags */}
              <div className="mb-8 sm:mb-10">
                <h4 className="text-xs uppercase font-mono tracking-wider text-white/70 mb-3">Tools</h4>
                <div className="flex flex-wrap gap-2">
                  {tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1.5 rounded-full text-xs font-mono text-gold bg-gold/5 border border-gold/10 hover:bg-gold/10 transition-all duration-200 cursor-default"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

            </AnimatedWrapper>
          </div>

        </div>
      </Container>
    </section>
  );
};
export default About;

