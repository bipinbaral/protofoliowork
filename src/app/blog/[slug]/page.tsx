import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import DockNavbar from "@/components/DockNavbar";
import PageBackground from "@/components/PageBackground";
import Footer from "@/components/Footer";
import { Container } from "@/components/ui/Container";
import AnimatedWrapper from "@/components/ui/AnimatedWrapper";
import BlogContent from "@/components/blog/BlogContent";
import TableOfContents from "@/components/blog/TableOfContents";
import ShareButtons from "@/components/blog/ShareButtons";
import RelatedArticles from "@/components/blog/RelatedArticles";
import ArticleNavigation from "@/components/blog/ArticleNavigation";
import BlogJsonLd from "@/components/blog/BlogJsonLd";
import ReadingProgressBar from "@/components/blog/ReadingProgressBar";
import ArticleHero from "@/components/blog/ArticleHero";
import BookNowSidebar from "@/components/blog/BookNowSidebar";
import CommentSection from "@/components/blog/CommentSection";
import {
  getPostBySlug,
  getAllPosts,
  getRelatedPosts,
  getAdjacentPosts,
} from "@/lib/blog";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) return { title: "Article | Bipin Creates (Bipin Baral)" };

  const url = `https://www.baralbipin.com.np/blog/${slug}`;

  return {
    title: `${post.title} | Bipin Creates (Bipin Baral)`,
    description: post.description,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author],
      section: post.category,
      images: [
        {
          url: post.featuredImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.featuredImage],
    },
    alternates: {
      canonical: url,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  const related = getRelatedPosts(slug, post.category, 3);
  const { prev, next } = getAdjacentPosts(slug);
  const articleUrl = `https://www.baralbipin.com.np/blog/${slug}`;

  return (
    <>
      <BlogJsonLd post={post} url={articleUrl} />
      <ReadingProgressBar />
      <DockNavbar />
      <PageBackground />

      <main className="relative z-10 flex-1 flex flex-col w-full bg-transparent pb-24">
        <ArticleHero
          title={post.title}
          description={post.description}
          category={post.category}
          author={post.author}
          publishedAt={post.publishedAt}
          readingTime={post.readingTime}
          featuredImage={post.featuredImage}
          articleUrl={articleUrl}
        />

        <Container className="pt-12">
          <div className="max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 xl:grid-cols-[13rem_minmax(0,1fr)_17rem] xl:gap-10 2xl:gap-14 items-start">
              <TableOfContents headings={post.headings} variant="desktop" />

              <article className="w-full min-w-0 max-w-[800px] mx-auto xl:max-w-none xl:mx-0 overflow-x-hidden">
                <TableOfContents headings={post.headings} variant="mobile" />

                <AnimatedWrapper type="fadeIn" delay={0.1} className="w-full">
                  <BlogContent content={post.content} />
                </AnimatedWrapper>

                <div className="mt-12 pt-8 border-t border-white/10 flex items-center justify-between gap-4 flex-wrap">
                  <p className="text-sm text-white/50">
                    Enjoyed this article? Share it with someone who might find it
                    useful.
                  </p>
                  <ShareButtons title={post.title} url={articleUrl} />
                </div>

                <BookNowSidebar variant="mobile" />
                <CommentSection slug={slug} />
                <ArticleNavigation prev={prev} next={next} />
              </article>

              <BookNowSidebar variant="desktop" />
            </div>
            
            <RelatedArticles posts={related} />
          </div>
        </Container>
      </main>

      <Footer />
    </>
  );
}
