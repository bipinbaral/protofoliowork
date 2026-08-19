import { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";
import { servicesData } from "@/data/serviceData";
import { categoryCollections } from "@/data/projects";
import { SITE_URL } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();

  const blogEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const serviceEntries: MetadataRoute.Sitemap = servicesData.map((service) => ({
    url: `${SITE_URL}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  const projectCategoryEntries: MetadataRoute.Sitemap = Object.keys(categoryCollections).map((category) => ({
    url: `${SITE_URL}/projects/${category}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // Dynamic project detail entries: only include if they have a real case study (not noindexed)
  const projectDetailEntries: MetadataRoute.Sitemap = [];
  Object.entries(categoryCollections).forEach(([categoryKey, items]) => {
    items.forEach((item) => {
      const hasRealCaseStudy = Boolean(
        item.caseStudy && (
          item.caseStudy.companyBackground ||
          item.caseStudy.logoStory ||
          item.caseStudy.designChallenge ||
          item.caseStudy.designProcess
        )
      );
      if (hasRealCaseStudy) {
        projectDetailEntries.push({
          url: `${SITE_URL}/projects/${categoryKey}/${item.id}`,
          lastModified: new Date(),
          changeFrequency: "monthly",
          priority: 0.7,
        });
      }
    });
  });

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/faq`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/terms-of-service`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];

  return [
    ...staticPages,
    ...serviceEntries,
    ...projectCategoryEntries,
    ...projectDetailEntries,
    ...blogEntries,
  ];
}
