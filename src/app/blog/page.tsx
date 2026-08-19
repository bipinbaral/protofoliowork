import React from "react";
import { Metadata } from "next";
import DockNavbar from "@/components/DockNavbar";
import PageBackground from "@/components/PageBackground";
import Footer from "@/components/Footer";
import { Container } from "@/components/ui/Container";
import AnimatedWrapper from "@/components/ui/AnimatedWrapper";
import BlogIndex from "@/components/blog/BlogIndex";
import { getAllPosts, getAllCategories } from "@/lib/blog";
import { SITE_URL, SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Blog | ${SITE_NAME}`,
  description:
    "Design insights, branding strategies, and UI/UX best practices from Bipin Creates (Bipin Baral) — graphic designer, UI/UX expert, and web developer in Kathmandu, Nepal.",
  openGraph: {
    title: `Blog | ${SITE_NAME}`,
    description:
      "Design insights, branding strategies, and UI/UX best practices from Bipin Creates (Bipin Baral).",
    url: `${SITE_URL}/blog`,
    siteName: SITE_NAME,
    type: "website",
    images: [
      {
        url: "/images/work-with-bipin.png",
        width: 1200,
        height: 630,
        alt: "Bipin Creates Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Blog | ${SITE_NAME}`,
    description:
      "Design insights, branding strategies, and UI/UX best practices.",
  },
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
};

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = getAllCategories();

  return (
    <>
      <DockNavbar />
      <PageBackground />

      <main className="relative z-10 flex-1 flex flex-col w-full bg-transparent overflow-x-hidden pt-32 pb-24">
        <Container>
          <AnimatedWrapper type="slideUp">
            <header className="max-w-3xl mb-12">
              <span className="inline-block text-xs font-mono uppercase tracking-[0.2em] text-white/50 mb-4">
                Blog
              </span>
              <h1 className="font-satoshi text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-4">
                Insights &amp; Ideas
              </h1>
              <p className="text-white/60 text-lg leading-relaxed">
                Thoughts on design, branding, and building premium digital
                experiences—written for clarity, not clicks.
              </p>
            </header>
          </AnimatedWrapper>

          <BlogIndex posts={posts} categories={categories} />
        </Container>
      </main>

      <Footer />
    </>
  );
}
