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
  {
    id: "cat-3",
    title: "UI/UX Design",
    slug: "uiux-design",
    description: "User interfaces, web applications, mobile apps, and case studies.",
    projects: [
      {
        id: "proj-uiux-1",
        title: "Landing Page",
        description: "Conversion-optimized landing page structure and components.",
        thumbnail: "/images/uiux/first/cover image.jpg",
        year: "2023",
        galleries: [
          {
            categoryName: "Landing Page",
            images: [
              { id: "img-uiux-1-1", src: "/images/uiux/first/Packages.jpg", alt: "Landing Page UI" },
            ],
          },
        ],
      },
      {
        id: "proj-uiux-2",
        title: "Dashboard Design",
        description: "Dark-mode data visualization dashboard with intuitive charts.",
        thumbnail: "/images/uiux/second/cover image.png",
        year: "2023",
        galleries: [
          {
            categoryName: "Dashboard",
            images: [
              { id: "img-uiux-2-1", src: "/images/uiux/second/Dashboard.jpg", alt: "Dashboard UI" },
            ],
          },
        ],
      },
      {
        id: "proj-uiux-3",
        title: "Blog Content Page",
        description: "Reader-focused editorial layout with floating table of contents.",
        thumbnail: "/images/uiux/third/blogcontent.jpg",
        year: "2026",
        galleries: [
          {
            categoryName: "Blog Content",
            images: [
              { id: "img-uiux-3-1", src: "/images/uiux/third/blogcontent.jpg", alt: "Blog Content Design" },
            ],
          },
        ],
      },
      {
        id: "proj-4",
        title: "Splito - Expense Management App",
        description: "AI-powered mobile expense management application with rich data visualization.",
        thumbnail: "/images/uiux/fourth/Cover 01.jpg",
        year: "2026",
        galleries: [
          {
            categoryName: "App Screens",
            images: [
              { id: "img-uiux-4-1", src: "/images/uiux/fourth/Overview 02.jpg", alt: "Overview Screen" },
              { id: "img-uiux-4-2", src: "/images/uiux/fourth/Activity 03.jpg", alt: "Activity Screen" },
              { id: "img-uiux-4-3", src: "/images/uiux/fourth/Insights 04.jpg", alt: "Insights Screen" },
              { id: "img-uiux-4-4", src: "/images/uiux/fourth/Setting 05.jpg", alt: "Settings Screen" },
            ],
          },
        ],
      },
      {
        id: "proj-5",
        title: "Splito Product Design Case Study",
        description: "Comprehensive end-to-end UI/UX product design case study.",
        thumbnail: "/images/uiux/fifth/Case Study Design.svg",
        year: "2026",
        galleries: [
          {
            categoryName: "Case Study",
            images: [
              { id: "img-uiux-5-1", src: "/images/uiux/fifth/Case Study Design.svg", alt: "Splito Case Study Design" },
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
