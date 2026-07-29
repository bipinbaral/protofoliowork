"use client";

import React, { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { BlogPostMeta } from "@/lib/blog-types";
import BlogCard from "./BlogCard";

interface BlogIndexProps {
  posts: BlogPostMeta[];
  categories: string[];
}

export default function BlogIndex({ posts, categories }: BlogIndexProps) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory =
        !activeCategory || post.category === activeCategory;
      const searchLower = query.toLowerCase();
      const matchesSearch =
        !query ||
        post.title.toLowerCase().includes(searchLower) ||
        post.description.toLowerCase().includes(searchLower) ||
        post.category.toLowerCase().includes(searchLower);
      return matchesCategory && matchesSearch;
    });
  }, [posts, query, activeCategory]);

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-6">
        <div className="relative max-w-xl">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 pointer-events-none"
            aria-hidden
          />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search articles..."
            aria-label="Search blog articles"
            className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white/[0.03] border border-white/10 text-white placeholder-white/40 text-sm focus:outline-none focus:border-white/25 focus:ring-1 focus:ring-white/10 transition-all"
          />
        </div>

        <div
          className="flex flex-wrap gap-2"
          role="group"
          aria-label="Filter by category"
        >
          <button
            type="button"
            onClick={() => setActiveCategory(null)}
            aria-pressed={activeCategory === null}
            className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300 ${
              activeCategory === null
                ? "bg-white/10 text-white border border-white/20"
                : "bg-white/[0.03] text-white/50 border border-white/10 hover:bg-white/[0.06] hover:text-white/70"
            }`}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory === category}
              className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300 ${
                activeCategory === category
                  ? "bg-white/10 text-white border border-white/20"
                  : "bg-white/[0.03] text-white/50 border border-white/10 hover:bg-white/[0.06] hover:text-white/70"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredPosts.map((post, index) => (
            <BlogCard key={post.slug} post={post} index={index} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 text-white/50">
          <p className="text-lg mb-2">No articles found</p>
          <p className="text-sm">Try adjusting your search or filter.</p>
        </div>
      )}
    </div>
  );
}
