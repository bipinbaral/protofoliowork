import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { BlogPostMeta } from "@/lib/blog-types";

interface ArticleNavigationProps {
  prev: BlogPostMeta | null;
  next: BlogPostMeta | null;
}

export default function ArticleNavigation({ prev, next }: ArticleNavigationProps) {
  if (!prev && !next) return null;

  return (
    <nav
      className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-12 border-t border-white/10"
      aria-label="Article navigation"
    >
      {prev ? (
        <Link
          href={`/blog/${prev.slug}`}
          className="group flex flex-col gap-2 p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.06] hover:border-white/15 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
        >
          <span className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-white/50">
            <ArrowLeft className="w-3.5 h-3.5" />
            Previous
          </span>
          <span className="font-satoshi text-sm font-semibold text-white group-hover:text-purple-300 transition-colors line-clamp-2">
            {prev.title}
          </span>
        </Link>
      ) : (
        <div />
      )}

      {next ? (
        <Link
          href={`/blog/${next.slug}`}
          className="group flex flex-col gap-2 p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.06] hover:border-white/15 transition-all duration-300 text-right sm:col-start-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
        >
          <span className="inline-flex items-center justify-end gap-1.5 text-xs font-mono uppercase tracking-widest text-white/50">
            Next
            <ArrowRight className="w-3.5 h-3.5" />
          </span>
          <span className="font-satoshi text-sm font-semibold text-white group-hover:text-purple-300 transition-colors line-clamp-2">
            {next.title}
          </span>
        </Link>
      ) : null}
    </nav>
  );
}
