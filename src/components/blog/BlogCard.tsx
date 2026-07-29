"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock, Calendar } from "lucide-react";
import { BlogPostMeta } from "@/lib/blog-types";
import { formatDate } from "@/lib/blog-utils";

interface BlogCardProps {
  post: BlogPostMeta;
  index?: number;
}

export default function BlogCard({ post, index = 0 }: BlogCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group flex flex-col h-full rounded-2xl bg-white/[0.03] border border-white/10 overflow-hidden hover:bg-white/[0.06] hover:border-white/15 transition-all duration-300"
    >
      <Link
        href={`/blog/${post.slug}`}
        className="relative aspect-[16/9] overflow-hidden block"
        tabIndex={-1}
        aria-hidden
      >
        <Image
          src={post.featuredImage}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </Link>

      <div className="flex flex-col flex-1 p-6 gap-4">
        <span className="inline-flex w-fit px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest text-white/70 bg-white/10 border border-white/10">
          {post.category}
        </span>

        <div className="flex flex-col gap-2 flex-1">
          <Link href={`/blog/${post.slug}`}>
            <h2 className="font-satoshi text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300 line-clamp-2">
              {post.title}
            </h2>
          </Link>
          <p className="text-white/60 text-sm leading-relaxed line-clamp-3">
            {post.description}
          </p>
        </div>

        <div className="flex items-center gap-4 text-xs text-white/50 font-mono">
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" aria-hidden />
            <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" aria-hidden />
            {post.readingTime} min read
          </span>
        </div>

        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors group/btn w-fit focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20 rounded-lg"
        >
          Read Article
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
        </Link>
      </div>
    </motion.article>
  );
}
