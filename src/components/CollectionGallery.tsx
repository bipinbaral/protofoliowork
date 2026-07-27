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

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-4">
        {projects.map((project, idx) => (
          <ProjectCard
            key={project.id}
            project={{...project, link: `/projects/${category}/${project.id}`}} // Fallback link
            index={idx}
            onClick={(e) => {
              e.preventDefault();
              setSelectedProject(project);
            }}
          />
        ))}
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
