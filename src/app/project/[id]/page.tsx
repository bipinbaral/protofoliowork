import React from "react";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Container } from "@/components/ui/Container";
import { ProjectGallery } from "@/components/ProjectGallery";

interface ProjectPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  // Generate some dummy variants for scrolling based on the current project
  // In a real app, this would come from a database or extended data file.
  const variants = [
    { id: 1, title: "Variant 1: Front View", image: project.image },
    { id: 2, title: "Variant 2: Detail View", image: project.image },
    { id: 3, title: "Variant 3: Lifestyle Context", image: project.image },
    { id: 4, title: "Variant 4: Packaging Details", image: project.image },
    { id: 5, title: "Variant 5: Branding Concept", image: project.image },
    { id: 6, title: "Variant 6: Typography", image: project.image },
  ];
  return (
    <>
      <Navbar />
      <main className="flex-1 w-full bg-background min-h-screen pt-32 pb-24">
        <Container>
          <div className="max-w-4xl mx-auto flex flex-col gap-12">
            {/* Header */}
            <div className="text-center">
              <span className="text-sm font-mono uppercase tracking-widest text-gold mb-4 block">
                {project.category}
              </span>
              <h1 className="font-satoshi text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                {project.title}
              </h1>
              <p className="text-white/60 text-lg max-w-2xl mx-auto">
                Scroll down to see more variants and detailed shots of this project.
              </p>
            </div>

            {/* Variants Scrolling Section */}
            <ProjectGallery variants={variants} />
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
