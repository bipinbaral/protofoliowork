"use client";

import React from "react";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";
import { FaBehance, FaCalendarAlt } from "react-icons/fa";
import { AnimatedWrapper } from "./ui/AnimatedWrapper";
import { ProjectCard } from "./ProjectCard";
import { projects } from "@/data/projects";
import { Button } from "./ui/Button";
import Stats from "./Stats";

export const PortfolioGrid: React.FC = () => {

  return (
    <section id="projects" className="section-padding bg-transparent border-t border-white/5">
      <Container>
        {/* Header */}
        <div className="flex flex-col justify-center text-center mb-16 gap-6">
          <SectionHeading
            label="Portfolio"
            title="All Projects"
            subtitle="A showcase of my recent work and creative projects."
            className="!mb-0"
          />
        </div>

        {/* Masonry Grid with CSS Columns */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {projects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={idx}
            />
          ))}
        </div>

        {/* Footer actions inside section */}
        <AnimatedWrapper type="slideUp" delay={0.2} className="mt-12 sm:mt-16 flex flex-col sm:flex-row items-center justify-center gap-4 px-4 sm:px-0">
          <Button variant="secondary" href="https://www.behance.net/" className="w-full sm:w-auto px-8 py-3.5 sm:py-3 min-h-[44px]">
            <span className="flex items-center gap-2"><FaBehance className="w-4 h-4" /> All Projects</span>
          </Button>
          <Button variant="accent" href="#contact" className="w-full sm:w-auto px-8 py-3.5 sm:py-3 min-h-[44px]">
            <span className="flex items-center gap-2"><FaCalendarAlt className="w-4 h-4 text-background" /> Book a Free Call</span>
          </Button>
        </AnimatedWrapper>

        {/* Animated Stats inside the grid section */}
        <Stats />
      </Container>
    </section>
  );
};
export default PortfolioGrid;
