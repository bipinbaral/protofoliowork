"use client";

import React, { useState } from "react";
import { Container } from "./ui/Container";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "./ui/SectionHeading";
import { FaBehance, FaCalendarAlt } from "react-icons/fa";
import { AnimatedWrapper } from "./ui/AnimatedWrapper";
import { ProjectCard } from "./ProjectCard";
import { projects, Project, categoryCollections, DetailedProject } from "@/data/projects";
import { Button } from "./ui/Button";
import Stats from "./Stats";
import ProjectDetailView from "./ProjectDetailView";

export const PortfolioGrid: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeSubProject, setActiveSubProject] = useState<DetailedProject | null>(null);

  const categories = ["All", ...Array.from(new Set(projects.map(p => p.category)))];

  let displayProjects: any[] = [];
  if (activeCategory === "All") {
    displayProjects = projects;
  } else {
    const matched = projects.filter(p => p.category === activeCategory);
    matched.forEach(p => {
      if (p.isCollection && categoryCollections[p.id]) {
        displayProjects.push(...categoryCollections[p.id]);
      } else {
        displayProjects.push(p);
      }
    });
  }

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

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === cat
                  ? "bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                  : "bg-white/5 text-white/70 border border-white/10 hover:bg-white/10 hover:text-white"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid with CSS Columns */}
        <motion.div layout className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          <AnimatePresence mode="popLayout">
            {displayProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard
                  project={project}
                  index={idx}
                  onClick={activeCategory === "All" ? () => setActiveCategory(project.category) : () => setActiveSubProject(project as DetailedProject)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

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
      
      {/* Immersive Overlay Viewer */}
      {activeSubProject && (
        <ProjectDetailView 
          activeProject={activeSubProject}
          collection={displayProjects}
          onSelect={(p) => setActiveSubProject(p)}
          onBack={() => setActiveSubProject(null)}
        />
      )}
    </section>
  );
};
export default PortfolioGrid;
