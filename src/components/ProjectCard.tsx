"use client";

import React, { useState, useEffect } from "react";
import { Heart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/data/projects";
import Image from "next/image";

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick?: (e: React.MouseEvent) => void;
  aspectRatio?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, onClick, aspectRatio = "aspect-[16/10]" }) => {
  const [isLiked, setIsLiked] = useState(false);
  // Deterministic random-looking number based on index to avoid SSR hydration mismatch
  const initialLikes = 124 + (index * 13) + (project.title.length * 3);
  const [likeCount, setLikeCount] = useState(initialLikes);

  // Facebook SDK integration
  useEffect(() => {
    if (project.facebookReelUrl) {
      if (!(window as any).FB) {
        const script = document.createElement("script");
        script.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v19.0";
        script.async = true;
        script.defer = true;
        script.crossOrigin = "anonymous";
        document.body.appendChild(script);

        script.onload = () => {
          if ((window as any).FB) {
            (window as any).FB.XFBML.parse();
          }
        };
      } else {
        (window as any).FB.XFBML.parse();
      }
    }
  }, [project.facebookReelUrl]);

  useEffect(() => {
    const savedLikes = localStorage.getItem(`project-likes-${project.id}`);
    if (savedLikes) {
      const parsed = parseInt(savedLikes, 10);
      requestAnimationFrame(() => {
        setLikeCount(parsed);
      });
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

  const isExternal = Boolean(project.link && (project.link.startsWith('http://') || project.link.startsWith('https://')));
  const isValidLink = Boolean(project.link && (isExternal || project.link.startsWith('/') || project.link.startsWith('#')));
  const href = isValidLink ? project.link! : `#`;

  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      e.preventDefault();
      onClick(e);
    }
  };

  const content = (
    <>
      {/* Image Block */}
      <div className={`relative w-full ${aspectRatio} rounded-2xl overflow-hidden mb-4 border border-white/10`}>
        {project.facebookReelUrl ? (
          <div className="w-full h-full absolute inset-0 z-10 bg-black flex flex-col items-center justify-center overflow-hidden">
            <div className="flex w-full h-full items-center justify-center [&>span]:!flex [&>span]:!justify-center [&>span]:!items-center [&>span]:!w-full [&>span>iframe]:!mx-auto">
              <div 
                className="fb-video" 
                data-href={project.facebookReelUrl} 
                data-width="auto" 
                data-show-text="false"
              >
                <blockquote cite={project.facebookReelUrl} className="fb-xfbml-parse-ignore flex flex-col items-center justify-center w-full h-full text-center p-6">
                  <a 
                    href={project.facebookReelUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="px-6 py-3 bg-[#1877F2] text-white rounded-full font-sans font-semibold text-sm hover:bg-[#1877F2]/90 transition-colors shadow-lg shadow-[#1877F2]/20"
                  >
                    Watch on Facebook
                  </a>
                </blockquote>
              </div>
            </div>
          </div>
        ) : (
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
        )}
        
        {/* Darken Overlay on hover */}
        {!project.facebookReelUrl && (
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        )}

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
          <div className="flex flex-col w-full pr-4">
            <div className="flex items-center justify-between w-full">
              <h3 className="font-sans text-lg font-bold text-white relative z-20">
                {isValidLink ? (
                  <a href={href} target={isExternal ? "_blank" : undefined} rel={isExternal ? "noopener noreferrer" : undefined} onClick={(e) => e.stopPropagation()} className="hover:underline transition-colors">
                    {project.title}
                  </a>
                ) : (
                  project.title
                )}
              </h3>
              {project.year && (
                <span className="text-white/70 text-xs font-mono">
                  {project.year}
                </span>
              )}
            </div>
            <span className="text-white/50 font-sans text-sm mt-1">
              {project.category}
            </span>

          </div>

          <div className="flex flex-col items-center shrink-0">
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
          <div className="flex flex-wrap gap-2 mt-4">
            {project.tags.map(tag => (
              <span
                key={tag}
                className="px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 bg-white/5 text-white/70 border border-white/10 hover:bg-white/10 hover:text-white"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </>
  );

  const motionProps = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    className: "flex flex-col group cursor-pointer mb-8 break-inside-avoid",
  };

  if (onClick) {
    return (
      <motion.div
        {...motionProps}
        onClick={handleClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onClick(e as any);
          }
        }}
      >
        {content}
      </motion.div>
    );
  }

  if (project.facebookReelUrl) {
    return (
      <motion.div {...motionProps}>
        {content}
      </motion.div>
    );
  }

  return (
    <motion.a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      onClick={handleClick}
      {...motionProps}
    >
      {content}
    </motion.a>
  );
};
export default ProjectCard;

