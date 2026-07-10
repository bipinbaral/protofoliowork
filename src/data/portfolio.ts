export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface PortfolioProject {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  year: string;
  client?: string;
  galleries: {
    categoryName: string;
    images: GalleryImage[];
  }[];
}

export interface PortfolioCategory {
  id: string;
  title: string;
  slug: string;
  description: string;
  projects: PortfolioProject[];
}

export const portfolioData: PortfolioCategory[] = [
  {
    id: "cat-1",
    title: "Brand Identity",
    slug: "brand-identity",
    description: "Complete branding and identity design projects.",
    projects: [
      {
        id: "proj-1",
        title: "Study in Australia",
        description: "A comprehensive brand identity for a student placement agency.",
        thumbnail: "/images/Aus.jpg",
        year: "2023",
        galleries: [
          {
            categoryName: "Logos",
            images: [
              { id: "img-1", src: "/images/Aus.jpg", alt: "Logo Design 1" },
            ],
          },
          {
            categoryName: "Mockups",
            images: [
              { id: "img-2", src: "/images/Diploma Bachelor Masters AUS.jpg", alt: "Mockup 1" },
            ],
          },
        ],
      },
      {
        id: "proj-2",
        title: "IELTS Preparation",
        description: "Branding and social media kit for IELTS test prep.",
        thumbnail: "/images/IELTS.jpg",
        year: "2024",
        galleries: [
          {
            categoryName: "Stationery",
            images: [
              { id: "img-3", src: "/images/IELTS.jpg", alt: "Stationery Design" },
            ],
          },
        ],
      }
    ],
  },
  {
    id: "cat-2",
    title: "Digital Marketing",
    slug: "digital-marketing",
    description: "Social media and digital campaign creatives.",
    projects: [
      {
        id: "proj-3",
        title: "Path Study in USA",
        description: "Digital campaign for USA study programs.",
        thumbnail: "/images/Path Study in USA.jpg",
        year: "2024",
        galleries: [
          {
            categoryName: "Social Media",
            images: [
              { id: "img-4", src: "/images/Path Study in USA.jpg", alt: "Social Media Post 1" },
            ],
          },
        ],
      },
    ],
  },
];

export function getAllCategories() {
  return portfolioData;
}

export function getCategoryBySlug(slug: string) {
  return portfolioData.find((cat) => cat.slug === slug);
}

export function getProjectById(categorySlug: string, projectId: string) {
  const category = getCategoryBySlug(categorySlug);
  return category?.projects.find((proj) => proj.id === projectId);
}
