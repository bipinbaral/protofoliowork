import React from "react";
import { BlogPost } from "@/lib/blog-types";
import { SITE_URL, SITE_NAME } from "@/lib/constants";

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
      : `${SITE_URL}${post.featuredImage}`,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      "@type": "Person",
      name: "Bipin Baral",
      alternateName: "Bipin Creates",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Person",
      name: "Bipin Creates",
      alternateName: "Bipin Baral",
      url: SITE_URL,
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
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${SITE_URL}/blog`,
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
