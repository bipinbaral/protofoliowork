import "server-only";

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import {
  BlogPost,
  BlogPostMeta,
  TocHeading,
} from "@/lib/blog-types";

export type { BlogPost, BlogPostMeta, TocHeading } from "@/lib/blog-types";

const BLOG_DIR = path.join(process.cwd(), "src/content/blog");

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

function calculateReadingTime(content: string): number {
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}

function extractHeadings(content: string): TocHeading[] {
  const headings: TocHeading[] = [];
  const lines = content.split("\n");

  for (const line of lines) {
    const match = line.match(/^(#{2,3})\s+(.+)$/);
    if (!match) continue;

    const level = match[1].length as 2 | 3;
    const text = match[2].replace(/\*\*|__/g, "").trim();
    headings.push({ id: slugify(text), text, level });
  }

  return headings;
}

function parsePost(filename: string): BlogPost {
  const slug = filename.replace(/\.md$/, "");
  const raw = fs.readFileSync(path.join(BLOG_DIR, filename), "utf-8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title,
    description: data.description,
    category: data.category,
    author: data.author ?? "Bipin Baral",
    publishedAt: data.publishedAt,
    featuredImage: data.featuredImage ?? `/blog/${slug}.svg`,
    readingTime: calculateReadingTime(content),
    content,
    headings: extractHeadings(content),
  };
}

export function getAllPosts(): BlogPostMeta[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".md"))
    .map(parsePost)
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    )
    .map(({ content, headings, ...meta }) => meta);
}

export function getPostBySlug(slug: string): BlogPost | null {
  if (!fs.existsSync(BLOG_DIR)) return null;

  const filename = `${slug}.md`;
  if (!fs.existsSync(path.join(BLOG_DIR, filename))) return null;

  return parsePost(filename);
}

export function getAllCategories(): string[] {
  const posts = getAllPosts();
  return [...new Set(posts.map((p) => p.category))].sort();
}

export function getRelatedPosts(
  slug: string,
  category: string,
  limit = 3
): BlogPostMeta[] {
  return getAllPosts()
    .filter((p) => p.slug !== slug && p.category === category)
    .slice(0, limit);
}

export function getAdjacentPosts(slug: string): {
  prev: BlogPostMeta | null;
  next: BlogPostMeta | null;
} {
  const posts = getAllPosts();
  const index = posts.findIndex((p) => p.slug === slug);

  return {
    prev: index > 0 ? posts[index - 1] : null,
    next: index < posts.length - 1 ? posts[index + 1] : null,
  };
}
