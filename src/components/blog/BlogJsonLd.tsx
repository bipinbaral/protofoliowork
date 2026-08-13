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
    image: post.featuredImage.startsWith("http")
      ? post.featuredImage
      : `https://www.baralbipin.com.np${post.featuredImage}`,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      "@type": "Person",
      name: "Bipin Baral",
      alternateName: "Bipin Creates",
      url: "https://www.baralbipin.com.np",
    },
    publisher: {
      "@type": "Person",
      name: "Bipin Creates",
      alternateName: "Bipin Baral",
      url: "https://www.baralbipin.com.np",
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
        item: "https://www.baralbipin.com.np",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://www.baralbipin.com.np/blog",
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
