"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Clock, Calendar, User } from "lucide-react";
import ShareButtons from "./ShareButtons";
import { formatDate } from "@/lib/blog-utils";

interface ArticleHeroProps {
  title: string;
  description: string;
  category: string;
  author: string;
  publishedAt: string;
  readingTime: number;
  featuredImage: string;
  articleUrl: string;
}

export default function ArticleHero({
  title,
  description,
  category,
  author,
  publishedAt,
  readingTime,
  featuredImage,
  articleUrl,
}: ArticleHeroProps) {
  return (
    <section className="relative w-full h-[75vh] min-h-[480px] max-h-[900px] overflow-hidden">
      <Image
        src={featuredImage}
        alt={title}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/70 to-[#0d0d0d]/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0d]/80 via-transparent to-[#0d0d0d]/40" />

      <div className="relative z-10 h-full flex flex-col justify-end px-4 sm:px-6 lg:px-8 pb-10 sm:pb-14">
        <div className="max-w-[1280px] mx-auto w-full">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm font-medium mb-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20 rounded-lg"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden />
            Back to Blog
          </Link>

          <div className="flex flex-wrap items-center justify-between gap-4 mb-5">
            <span className="inline-flex px-3 py-1.5 rounded-full text-[10px] font-mono uppercase tracking-widest text-white bg-white/10 border border-white/20 backdrop-blur-sm">
              {category}
            </span>
            <ShareButtons
              title={title}
              url={articleUrl}
              variant="hero"
            />
          </div>

          <h1 className="font-satoshi text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-4 max-w-4xl">
            {title}
          </h1>

          <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-2xl mb-6">
            {description}
          </p>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-white/60 font-mono">
            <span className="inline-flex items-center gap-1.5">
              <User className="w-3.5 h-3.5" aria-hidden />
              {author}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" aria-hidden />
              <time dateTime={publishedAt}>{formatDate(publishedAt)}</time>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" aria-hidden />
              {readingTime} min read
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
