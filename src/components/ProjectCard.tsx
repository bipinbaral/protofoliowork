"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.a
      href={project.link || `/project/${project.id}`}
      target={project.link ? "_blank" : undefined}
      rel={project.link ? "noopener noreferrer" : undefined}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col group cursor-pointer mb-8 break-inside-avoid"
    >
      {/* Image Block */}
      <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden mb-4 border border-white/10">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Darken Overlay on hover */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        {/* External Link top-left */}
        <div
          className="absolute top-4 left-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-2 group-hover:translate-y-0 border border-white/20 hover:bg-white/40 z-30"
        >
          <ArrowUpRight className="w-5 h-5" />
        </div>

        {/* Year Badge top-right */}
        {project.year && (
          <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white/90 font-sans font-semibold text-sm z-20">
            {project.year}
          </div>
        )}
      </div>

      {/* Text Block */}
      <div className="flex flex-col px-1">
        <h3 className="font-sans text-lg font-bold text-white mb-1">
          {project.title}
        </h3>
        <span className="text-white/50 font-sans text-sm mb-4">
          {project.category}
        </span>
        
        {/* Tech Tags */}
        {project.tags && project.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.tags.map(tag => (
              <span 
                key={tag} 
                className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-white/70 text-xs font-sans"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.a>
  );
};
export default ProjectCard;
