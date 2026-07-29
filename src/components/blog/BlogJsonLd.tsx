import React from "react";
import { BlogPost } from "@/lib/blog-types";

interface BlogJsonLdProps {
  post: BlogPost;
  url: string;
}

export default function BlogJsonLd({ post, url }: BlogJsonLdProps) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: `https://bipinbaral.com${post.featuredImage}`,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      "@type": "Person",
      name: post.author,
      url: "https://bipinbaral.com",
    },
    publisher: {
      "@type": "Person",
      name: "Bipin Baral",
      url: "https://bipinbaral.com",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    articleSection: post.category,
    wordCount: post.content.trim().split(/\s+/).length,
    timeRequired: `PT${post.readingTime}M`,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://bipinbaral.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://bipinbaral.com/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: url,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
