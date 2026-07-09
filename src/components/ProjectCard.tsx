"use client";

import React, { useState, useEffect } from "react";
import { ArrowUpRight, Heart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [isLiked, setIsLiked] = useState(false);
  // Deterministic random-looking number based on index to avoid SSR hydration mismatch
  const initialLikes = 124 + (index * 13) + (project.title.length * 3);
  const [likeCount, setLikeCount] = useState(initialLikes);

  useEffect(() => {
    const savedLikes = localStorage.getItem(`project-likes-${project.id}`);
    if (savedLikes) {
      setLikeCount(parseInt(savedLikes, 10));
    }
  }, [project.id]);

  const handleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!isLiked) {
      setIsLiked(true);
      const newCount = likeCount + 1;
      setLikeCount(newCount);
      localStorage.setItem(`project-likes-${project.id}`, newCount.toString());
    } else {
      setIsLiked(false);
      const newCount = likeCount - 1;
      setLikeCount(newCount);
      localStorage.setItem(`project-likes-${project.id}`, newCount.toString());
    }
  };

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
        <div className="flex items-start justify-between mb-1">
          <div className="flex flex-col">
            <h3 className="font-sans text-lg font-bold text-white">
              {project.title}
            </h3>
            <span className="text-white/50 font-sans text-sm mb-4 mt-1">
              {project.category}
            </span>
          </div>
          
          <div className="flex flex-col items-center">
            <button 
              onClick={handleLike}
              className="relative group/like p-2 -mr-2 rounded-full hover:bg-white/10 transition-colors z-20 focus:outline-none"
              aria-label="Like project"
            >
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-black/90 text-white text-[10px] rounded opacity-0 group-hover/like:opacity-100 transition-opacity pointer-events-none whitespace-nowrap backdrop-blur-md border border-white/10 font-sans shadow-lg">
                {isLiked ? "Unlike" : "Like"}
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={isLiked ? "liked" : "unliked"}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Heart 
                    className={`w-5 h-5 transition-colors ${isLiked ? "fill-red-500 text-red-500" : "text-white/70 hover:text-white"}`} 
                  />
                </motion.div>
              </AnimatePresence>
            </button>
            <span className="text-white/50 text-xs font-sans -mr-2 mt-[-4px]">
              {likeCount}
            </span>
          </div>
        </div>
        
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

