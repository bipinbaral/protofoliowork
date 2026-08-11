"use client";

import React, { useState } from "react";
import { DetailedProject } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectViewerModal } from "@/components/ProjectViewerModal";

interface CollectionGalleryProps {
  projects: DetailedProject[];
  category: string;
}

export const CollectionGallery: React.FC<CollectionGalleryProps> = ({ projects, category }) => {
  const [selectedProject, setSelectedProject] = useState<DetailedProject | null>(null);

  const isVideos = category === 'videos';
  const gridClass = isVideos
    ? "flex flex-wrap justify-center gap-6 mt-4 [&>*]:w-[calc(50%-12px)] md:[&>*]:w-[calc(33.333%-16px)] lg:[&>*]:w-[calc(25%-18px)] xl:[&>*]:w-[calc(20%-19.2px)]"
    : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-4";

  return (
    <>
      <div className={gridClass}>
        {projects.map((project, idx) => {
          const hasExternalLink = project.link && project.link.startsWith('http');

          return (
            <ProjectCard
              key={project.id}
              project={{ ...project, link: project.link || `/projects/${category}/${project.id}` }}
              index={idx}
              aspectRatio={isVideos ? "aspect-[9/16]" : "aspect-[16/10]"}
              onClick={hasExternalLink ? undefined : (e) => {
                e.preventDefault();
                setSelectedProject(project);
              }}
            />
          );
        })}
      </div>

      {selectedProject && (
        <ProjectViewerModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
};
