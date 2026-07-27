import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import DockNavbar from "@/components/DockNavbar";
import PageBackground from "@/components/PageBackground";
import Footer from "@/components/Footer";
import { Container } from "@/components/ui/Container";
import { categoryCollections, projects } from "@/data/projects";
import { CollectionGallery } from "@/components/CollectionGallery";

interface CollectionPageProps {
  params: Promise<{
    category: string;
  }>;
}

export default async function CollectionPage({ params }: CollectionPageProps) {
  const { category } = await params;

  const activeCollection = categoryCollections[category];

  if (!activeCollection) {
    notFound();
  }

  const collectionInfo = projects.find((p) => p.id === category);

  return (
    <>
      {/* Bottom Dock Navbar */}
      <DockNavbar />

      {/* Deep Space Background */}
      <PageBackground />

      <main className="relative z-10 flex-1 flex flex-col w-full bg-transparent overflow-x-hidden pt-32 pb-24">
        <Container>
          <div className="flex flex-col gap-12">
            {/* Header */}
            <div className="flex flex-col gap-4">
              <Link 
                href="/#projects" 
                className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors w-fit text-sm font-medium"
              >
                <ArrowLeft className="w-4 h-4" /> All Projects
              </Link>
              
              <div className="mt-4">
                <span className="text-xs font-mono uppercase tracking-widest text-white/70 mb-3 block">
                  COLLECTION
                </span>
                <h1 className="font-sans text-4xl sm:text-5xl font-bold text-white mb-4">
                  {collectionInfo?.title || "Logo Design"}
                </h1>
                <p className="text-white/60 text-lg max-w-2xl mb-8">
                  {collectionInfo?.title || "Logo design"} projects for this category
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {collectionInfo?.tags?.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/70 text-sm font-sans backdrop-blur-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Grid with Client-Side Modal */}
            <CollectionGallery projects={activeCollection} category={category} />
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
