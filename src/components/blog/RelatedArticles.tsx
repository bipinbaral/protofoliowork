import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BlogPostMeta } from "@/lib/blog-types";
import { formatDate } from "@/lib/blog-utils";

interface RelatedArticlesProps {
  posts: BlogPostMeta[];
}

export default function RelatedArticles({ posts }: RelatedArticlesProps) {
  if (posts.length === 0) return null;

  return (
    <section className="mt-16 pt-12 border-t border-white/10" aria-labelledby="related-heading">
      <h2 id="related-heading" className="font-satoshi text-2xl font-bold text-white mb-8">
        Related Articles
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex flex-col rounded-2xl bg-white/[0.03] border border-white/10 overflow-hidden hover:bg-white/[0.06] hover:border-white/15 transition-all duration-300"
          >
            <div className="relative aspect-[16/9] overflow-hidden">
              <Image
                src={post.featuredImage}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="p-5 flex flex-col gap-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-white/50">
                {post.category}
              </span>
              <h3 className="font-satoshi text-base font-semibold text-white group-hover:text-purple-300 transition-colors line-clamp-2">
                {post.title}
              </h3>
              <time
                dateTime={post.publishedAt}
                className="text-xs text-white/40 font-mono"
              >
                {formatDate(post.publishedAt)}
              </time>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
