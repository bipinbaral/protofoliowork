import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { categoryCollections, projects } from "@/data/projects";
import DockNavbar from "@/components/DockNavbar";
import PageBackground from "@/components/PageBackground";
import Footer from "@/components/Footer";
import { Container } from "@/components/ui/Container";
import AnimatedWrapper from "@/components/ui/AnimatedWrapper";

import { Metadata } from "next";

interface ProjectPageProps {
  params: Promise<{
    category: string;
    id: string;
  }>;
}

export async function generateStaticParams() {
  const params: { category: string; id: string }[] = [];
  Object.entries(categoryCollections).forEach(([categoryKey, items]) => {
    items.forEach((item) => {
      params.push({ category: categoryKey, id: item.id });
    });
  });
  return params;
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { category, id } = await params;
  const activeCollection = categoryCollections[category] || [];
  let project = activeCollection.find((p) => p.id === id);
  if (!project) project = projects.find((p) => p.id === id) as any;

  if (!project) return { title: "Project | Bipin Creates (Bipin Baral)" };

  const url = `https://www.baralbipin.com.np/projects/${category}/${id}`;

  return {
    title: `${project.title} — Case Study | Bipin Creates (Bipin Baral)`,
    description: project.caseStudy?.companyBackground?.slice(0, 160) ||
      `View the ${project.title} project by Bipin Creates (Bipin Baral) — graphic designer, UI/UX expert & web developer in Kathmandu, Nepal.`,
    openGraph: {
      title: `${project.title} | Bipin Creates (Bipin Baral)`,
      description: project.caseStudy?.companyBackground?.slice(0, 160) ||
        `View the ${project.title} project by Bipin Creates (Bipin Baral).`,
      url,
      images: [
        {
          url: project.image,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Bipin Creates (Bipin Baral)`,
      description: project.caseStudy?.companyBackground?.slice(0, 160) ||
        `View the ${project.title} project by Bipin Creates (Bipin Baral).`,
      images: [project.image],
    },
    alternates: {
      canonical: url,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { category, id } = await params;
  
  // Find project in the specific collection first, otherwise check main projects
  const activeCollection = categoryCollections[category] || [];
  let project = activeCollection.find((p) => p.id === id);
  if (!project) {
    project = projects.find((p) => p.id === id) as any;
  }

  if (!project) {
    notFound();
  }

  const { caseStudy } = project;

  return (
    <>
      {/* Bottom Dock Navbar */}
      <DockNavbar />

      {/* Deep Space Background */}
      <PageBackground />

      <main className="relative z-10 flex-1 flex flex-col w-full bg-transparent overflow-x-hidden pt-32 pb-24">
        <Container>
          <div className="max-w-4xl mx-auto flex flex-col gap-16">
            
            {/* Navigation Header */}
            <Link 
              href={`/projects/${category}`}
              className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors w-fit text-sm font-medium"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Collection
            </Link>

            {/* Hero Banner Section */}
            <div className="flex items-center gap-6 pb-8 border-b border-white/10">
              <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-3xl overflow-hidden border border-white/10 bg-white/5 p-4 flex-shrink-0">
                <img src={project.image} alt="Logo" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col">
                <h1 className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
                  {project.title}
                </h1>
                <p className="text-white/60 text-lg mb-4">
                  {project.category}
                </p>
                <div className="flex flex-wrap gap-4 text-xs font-mono text-white/70 uppercase tracking-widest">
                  <div className="flex flex-col">
                    <span className="text-white/60">Background</span>
                    <span className="text-white/60 mt-1">Branding</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white/60">Challenge</span>
                    <span className="text-white/60 mt-1">Process</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white/60">Palette</span>
                    <span className="text-white/60 mt-1">Typography</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white/60">Variations</span>
                    <span className="text-white/60 mt-1">Deliverables</span>
                  </div>
                </div>
              </div>
            </div>

            {/* If there's no case study and no gallery images */}
            {!caseStudy && (!project.galleryImages || project.galleryImages.length === 0) && (
              <AnimatedWrapper type="fadeIn">
                <div className="text-center text-white/50 py-12">
                  Detailed case study is not available for this project yet.
                </div>
              </AnimatedWrapper>
            )}

            {caseStudy && (
              <div className="flex flex-col gap-16">
                {/* Company Background */}
                {caseStudy.companyBackground && (
                  <AnimatedWrapper type="slideUp" delay={0.1}>
                    <section className="flex flex-col gap-4">
                      <div className="flex items-center justify-between">
                        <h2 className="text-xl font-bold text-white">Company Background</h2>
                      </div>
                      <p className="text-white/70 leading-relaxed text-sm sm:text-base">
                        {caseStudy.companyBackground}
                      </p>
                    </section>
                  </AnimatedWrapper>
                )}

                {/* Logo Story */}
                {caseStudy.logoStory && (
                  <AnimatedWrapper type="slideUp" delay={0.2}>
                    <section className="flex flex-col gap-4">
                      <div className="flex items-center justify-between">
                        <h2 className="text-xl font-bold text-white">Logo Story</h2>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-6 items-center">
                        <div className="w-full sm:w-1/3 aspect-square rounded-2xl border border-white/10 bg-white/5 p-8 flex items-center justify-center">
                           <img src={project.image} alt="Logo Mark" className="max-w-full max-h-full" />
                        </div>
                        <p className="text-white/70 leading-relaxed text-sm sm:text-base sm:w-2/3">
                          {caseStudy.logoStory}
                        </p>
                      </div>
                    </section>
                  </AnimatedWrapper>
                )}

                {/* Design Challenge */}
                {caseStudy.designChallenge && (
                  <AnimatedWrapper type="slideUp" delay={0.2}>
                    <section className="flex flex-col gap-4">
                      <div className="flex items-center justify-between">
                        <h2 className="text-xl font-bold text-white">Design Challenge</h2>
                      </div>
                      <div className="p-6 rounded-2xl bg-white/5 border border-white/10 shadow-lg">
                        <p className="text-white/70 leading-relaxed text-sm sm:text-base">
                          {caseStudy.designChallenge}
                        </p>
                      </div>
                    </section>
                  </AnimatedWrapper>
                )}

                {/* Design Process */}
                {caseStudy.designProcess && (
                  <AnimatedWrapper type="slideUp" delay={0.2}>
                    <section className="flex flex-col gap-4">
                      <div className="flex items-center justify-between">
                        <h2 className="text-xl font-bold text-white">Design Process</h2>
                      </div>
                      <div className="flex flex-col gap-8 pl-4 border-l border-white/20 relative">
                        {caseStudy.designProcess.discovery && (
                          <div className="relative pl-6">
                            <div className="absolute w-3 h-3 bg-red-500/20 border border-red-500/50 rounded-full -left-[1.35rem] top-1.5" />
                            <h3 className="text-white font-bold mb-1 flex items-center gap-3">
                              Discovery <span className="text-xs font-mono text-white/50 px-2 py-0.5 rounded-full bg-white/10">{caseStudy.designProcess.discovery[0]}</span>
                            </h3>
                            <p className="text-white/70 text-sm mb-3">{caseStudy.designProcess.discovery[1]}</p>
                            <div className="flex flex-wrap gap-2">
                              {caseStudy.designProcess.discovery.slice(2).map(t => (
                                <span key={t} className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-white/60 text-xs">{t}</span>
                              ))}
                            </div>
                          </div>
                        )}
                        
                        {caseStudy.designProcess.strategy && (
                          <div className="relative pl-6">
                            <div className="absolute w-3 h-3 bg-red-500/20 border border-red-500/50 rounded-full -left-[1.35rem] top-1.5" />
                            <h3 className="text-white font-bold mb-1 flex items-center gap-3">
                              Strategy <span className="text-xs font-mono text-white/50 px-2 py-0.5 rounded-full bg-white/10">{caseStudy.designProcess.strategy[0]}</span>
                            </h3>
                            <p className="text-white/70 text-sm mb-3">{caseStudy.designProcess.strategy[1]}</p>
                            <div className="flex flex-wrap gap-2">
                              {caseStudy.designProcess.strategy.slice(2).map(t => (
                                <span key={t} className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-white/60 text-xs">{t}</span>
                              ))}
                            </div>
                          </div>
                        )}

                        {caseStudy.designProcess.identityDesign && (
                          <div className="relative pl-6">
                            <div className="absolute w-3 h-3 bg-red-500 border border-red-500 rounded-full -left-[1.35rem] top-1.5" />
                            <h3 className="text-white font-bold mb-1 flex items-center gap-3">
                              Identity Design <span className="text-xs font-mono text-white/50 px-2 py-0.5 rounded-full bg-white/10">{caseStudy.designProcess.identityDesign[0]}</span>
                            </h3>
                            <p className="text-white/70 text-sm mb-3">{caseStudy.designProcess.identityDesign[1]}</p>
                            <div className="flex flex-wrap gap-2">
                              {caseStudy.designProcess.identityDesign.slice(2).map(t => (
                                <span key={t} className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-white/60 text-xs">{t}</span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </section>
                  </AnimatedWrapper>
                )}

                {/* Color Palette */}
                {caseStudy.colorPalette && (
                  <AnimatedWrapper type="slideUp" delay={0.2}>
                    <section className="flex flex-col gap-4">
                      <div className="flex items-center justify-between">
                        <h2 className="text-xl font-bold text-white">Color Palette</h2>
                      </div>
                      <div className="flex flex-wrap gap-4">
                        {caseStudy.colorPalette.map(color => (
                          <div key={color.hex} className="flex flex-col gap-3 group">
                            <div className="w-20 h-24 rounded-2xl shadow-lg border border-white/10 group-hover:scale-105 transition-transform" style={{ backgroundColor: color.hex }} />
                            <div className="flex flex-col gap-1">
                              <span className="text-xs font-bold text-white">{color.name}</span>
                              <span className="text-[10px] text-white/60 font-mono">{color.hex}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </section>
                  </AnimatedWrapper>
                )}

                {/* Typography */}
                {caseStudy.typography && (
                  <AnimatedWrapper type="slideUp" delay={0.2}>
                    <section className="flex flex-col gap-4">
                      <div className="flex items-center justify-between">
                        <h2 className="text-xl font-bold text-white">Typography</h2>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {caseStudy.typography.map(typo => (
                          <div key={typo.name} className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col gap-6 shadow-lg">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-bold text-white">{typo.name}</span>
                              <span className="text-xs font-mono px-2 py-1 bg-white/10 rounded text-white/70">{typo.type}</span>
                            </div>
                            <div className="text-5xl font-light text-white/90">
                              {typo.sample}
                            </div>
                            <div className="text-xs text-white/50">
                              Regular, Medium, Semibold, Bold
                            </div>
                          </div>
                        ))}
                      </div>
                    </section>
                  </AnimatedWrapper>
                )}

                {/* Logo Variations */}
                {caseStudy.logoVariations && (
                  <AnimatedWrapper type="slideUp" delay={0.2}>
                    <section className="flex flex-col gap-4">
                      <div className="flex items-center justify-between">
                        <h2 className="text-xl font-bold text-white">Logo Variations</h2>
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        {caseStudy.logoVariations.map((v, i) => (
                          <div key={i} className={`aspect-[4/3] rounded-2xl border border-white/10 p-6 flex items-center justify-center hover:scale-[1.02] transition-transform ${i === 2 ? 'bg-[#FF6B35]' : (i === 1 ? 'bg-[#F5F5F5]' : 'bg-[#1F2232]')}`}>
                            <img src={v.image} className="w-1/2 opacity-90 mix-blend-luminosity" alt="Logo variation" />
                          </div>
                        ))}
                      </div>
                    </section>
                  </AnimatedWrapper>
                )}

                {/* Final Deliverables */}
                {caseStudy.finalDeliverables && (
                  <AnimatedWrapper type="slideUp" delay={0.2}>
                    <section className="flex flex-col gap-4">
                      <div className="flex items-center justify-between">
                        <h2 className="text-xl font-bold text-white">Final Deliverables</h2>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {caseStudy.finalDeliverables.map((item, i) => (
                          <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                             <div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center text-white/70 text-xs font-mono">
                               ZIP
                             </div>
                             <span className="text-sm text-white/90">{item}</span>
                          </div>
                        ))}
                      </div>
                    </section>
                  </AnimatedWrapper>
                )}
              </div>
            )}

            {/* Gallery Images */}
            {project.galleryImages && project.galleryImages.length > 0 && (
              <AnimatedWrapper type="slideUp" delay={0.3}>
                <section className="flex flex-col gap-6 pt-8 border-t border-white/10">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold text-white">Project Gallery</h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {project.galleryImages.map((img, i) => (
                      <div key={i} className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
                        <img src={img} alt={`${project.title} gallery image ${i + 1}`} className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500" />
                      </div>
                    ))}
                  </div>
                </section>
              </AnimatedWrapper>
            )}

          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
