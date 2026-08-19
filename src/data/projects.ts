export interface ProjectDetails {
  description?: string;
  services?: string[];
  tools?: string[];
  colorPalette?: { name: string; hex: string; }[];
  gallery?: string[];
  brandingImages?: string[];
  logoDesigns?: string[];
  externalLinks?: { label: string; url: string }[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  link?: string;
  year?: string;
  tags?: string[];
  isCollection?: boolean;
  details?: ProjectDetails;
  facebookReelUrl?: string;
  videoUrl?: string;
}

export interface CaseStudyData {
  companyBackground?: string;
  logoStory?: string;
  designChallenge?: string;
  designProcess?: {
    discovery?: string[];
    strategy?: string[];
    identityDesign?: string[];
  };
  colorPalette?: { name: string; hex: string; purpose?: string }[];
  typography?: { name: string; type: string; sample: string }[];
  logoVariations?: { id: string; image: string; type: string }[];
  brandMockups?: { title: string; image?: string }[];
  finalDeliverables?: string[];
}

export interface DetailedProject extends Project {
  caseStudy?: CaseStudyData;
  galleryImages?: string[];
  tools?: string[];
  deliverables?: string[];
}

export const collectionLogoDesign: DetailedProject[] = [
  {
    id: "pinak-interior",
    title: "Pinak Interior and Construction",
    category: "Construction Company",
    image: "/images/branding/pinak/pinaklogo-with-branding.jpg",
    link: "https://www.pinakinterior.com.np/",
    year: "2020",
    tools: ["Illustrator"]
  },
  {
    id: "altiscale-lab",
    title: "Altiscale Lab",
    category: "Logo, Branding",
    image: "/images/branding/altiscalelab/logowithbranding.jpg",
    link: "https://altiscalelabs.com/",
    year: "2026",
    tools: ["Illustrator"],
  },
  {
    id: "lhotse-aus",
    title: "Lhotse Aus",
    category: "Logo, Branding",
    image: "/images/branding/lhotseaus/lhotselogowithbranding.jpg",
    link: "https://www.lhotse.com.au/",
    year: "2026",
    tools: ["Illustrator"],
  }
];

export const collectionPosterDesigns: DetailedProject[] = [
  {
    id: "poster-sample-1",
    title: "Sample Poster Project 1",
    category: "Design",
    image: "/images/Posters.jpg",
    link: "",
    year: "2023",
    galleryImages: ["/images/Posters.jpg"]
  },
  {
    id: "poster-sample-2",
    title: "Sample Poster Project 2",
    category: "Design",
    image: "/images/Posters.jpg",
    link: "",
    year: "2023",
    galleryImages: ["/images/Posters.jpg"]
  },
  {
    id: "poster-sample-3",
    title: "Sample Poster Project 3",
    category: "Design",
    image: "/images/Posters.jpg",
    link: "",
    year: "2023",
    galleryImages: ["/images/Posters.jpg"]
  }
];

export const collectionPrintMedia: DetailedProject[] = [
  {
    id: "graphic-social-media",
    title: "Social Media & Packaging",
    category: "Social Media, Packaging",
    image: "/images/graphics-design/social-media/socialmedia4.png",
    link: "",
    year: "2024",
    tools: ["Illustrator", "Photoshop"],
    galleryImages: [
      "/images/graphics-design/social-media/socialmedia1.png",
      "/images/graphics-design/social-media/socialmedia2.jpg",
      "/images/graphics-design/social-media/socialmedia3.png",
      "/images/graphics-design/social-media/socialmedia5.jpg",
      "/images/graphics-design/social-media/socialmedia6.jpg",
      "/images/graphics-design/social-media/socialmedia7.png",
      "/images/graphics-design/social-media/socialmedia8.jpg"
    ]
  },
  {
    id: "graphic-print-media",
    title: "Print Media",
    category: "Flex, T-shirts, Packging, Bags, Brochure, Flyers, Posters, Letterhead",
    image: "/images/graphics-design/print-design/print3.jpg",
    link: "",
    year: "2024",
    tools: ["InDesign", "Illustrator", "Photoshop"],
    galleryImages: [
      "/images/graphics-design/print-design/print1.jpg",
      "/images/graphics-design/print-design/print4.jpg"
    ]
  },
  {
    id: "graphic-thumbnail",
    title: "Thumbnail Design",
    category: "Youtube Thumbnails",
    image: "/images/graphics-design/thumbnail/thumbnail02.jpg",
    link: "",
    year: "2024",
    tools: ["Photoshop"],
    galleryImages: [
      "/images/graphics-design/thumbnail/thumbnail02.jpg"
    ]
  }
];

export const collectionPathStudyInUSA: DetailedProject[] = [
  {
    id: "path-sample-1",
    title: "Sample Path Study Project 1",
    category: "Education",
    image: "/images/Path Study in USA.jpg",
    link: "",
    year: "2024",
    galleryImages: ["/images/Path Study in USA.jpg"]
  },
  {
    id: "path-sample-2",
    title: "Sample Path Study Project 2",
    category: "Education",
    image: "/images/Path Study in USA.jpg",
    link: "",
    year: "2024",
    galleryImages: ["/images/Path Study in USA.jpg"]
  },
  {
    id: "path-sample-3",
    title: "Sample Path Study Project 3",
    category: "Education",
    image: "/images/Path Study in USA.jpg",
    link: "",
    year: "2024",
    galleryImages: ["/images/Path Study in USA.jpg"]
  }
];

export const collectionUIUXDesign: DetailedProject[] = [
  {
    id: "uiux-packages",
    title: "Landing Page",
    category: "Hero Section, Cards, FAQs, Footer",
    image: "/images/uiux/first/Packages.jpg",
    link: "",
    year: "2023",
    tools: ["Figma", "Figma Make AI"]
  },
  {
    id: "uiux-dashboard",
    title: "Dashboard Design",
    category: "Graphs, Chart, Summary, Listing",
    image: "/images/uiux/second/Dashboard.jpg",
    link: "",
    year: "2023",
    tools: ["Figma", "Figma Make AI"]
  },
  {
    id: "uiux-sample-3",
    title: "Blog Content Page",
    category: "Blogs Section, Table of content, Comments, About Author",
    image: "/images/uiux/third/blogcontent.jpg",
    link: "",
    year: "2026",
    tools: ["Figma"]
  }
];

export const collectionProgramsInAus: DetailedProject[] = [
  {
    id: "aus-sample-1",
    title: "Sample AUS Program Project 1",
    category: "Education",
    image: "/images/Diploma Bachelor Masters AUS.jpg",
    link: "",
    year: "2022",
    galleryImages: ["/images/Diploma Bachelor Masters AUS.jpg"]
  },
  {
    id: "aus-sample-2",
    title: "Sample AUS Program Project 2",
    category: "Education",
    image: "/images/Diploma Bachelor Masters AUS.jpg",
    link: "",
    year: "2022",
    galleryImages: ["/images/Diploma Bachelor Masters AUS.jpg"]
  },
  {
    id: "aus-sample-3",
    title: "Sample AUS Program Project 3",
    category: "Education",
    image: "/images/Diploma Bachelor Masters AUS.jpg",
    link: "",
    year: "2022",
    galleryImages: ["/images/Diploma Bachelor Masters AUS.jpg"]
  }
];

export const collectionWebDesign: DetailedProject[] = [
  {
    id: "prerana-gyan-batika",
    title: "Prerana Gyan Batika",
    category: "Fullstack Development",
    image: "/images/webdevelopment/preranagyanbatika.png",
    link: "https://preranagyanbatika.vercel.app/",
    year: "2026",
    tools: ["Next.js", "TypeScript"]
  },
  {
    id: "altiscalelab",
    title: "Altiscale Lab",
    category: "Frontend Development",
    image: "/images/webdevelopment/altiscalelabs.png",
    link: "https://altiscalelabs.com/",
    year: "2026",
    tools: ["WordPress", "JavaScript", "PHP"]
  },
  {
    id: "chautariresort",
    title: "Chautari Resort",
    category: "Fullstack Development",
    image: "/images/webdevelopment/chautari resort.png",
    link: "https://chautari-psi.vercel.app/",
    year: "2026",
    tools: ["Next.js", "TypeScript", "Tailwind CSS"]
  }
];

export const collectionVideos: DetailedProject[] = [
  {
    id: "reel-fb-1",
    title: "Ai audio with caption",
    category: "Facebook Reel",
    image: "/images/videoediting.png",
    link: "https://www.facebook.com/reel/1320266946530657",
    facebookReelUrl: "https://www.facebook.com/reel/1320266946530657",
    year: "2026",
    tools: ["Video Editing"]
  },
  {
    id: "reel-fb-2",
    title: "Green screen with stock footages",
    category: "Facebook Reel",
    image: "/images/videoediting.png",
    link: "https://www.facebook.com/reel/1003153962532973",
    facebookReelUrl: "https://www.facebook.com/reel/1003153962532973",
    year: "2026",
    tools: ["Video Editing"]
  },
  {
    id: "reel-fb-3",
    title: "AI video generation",
    category: "Facebook Reel",
    image: "/images/videoediting.png",
    link: "https://www.facebook.com/reel/853401697707176",
    facebookReelUrl: "https://www.facebook.com/reel/853401697707176",
    year: "2026",
    tools: ["Video Editing"]
  },
  {
    id: "reel-fb-4",
    title: "Green screen footage",
    category: "Facebook Reel",
    image: "/images/videoediting.png",
    link: "https://www.facebook.com/reel/1077523584654138",
    facebookReelUrl: "https://www.facebook.com/reel/1077523584654138",
    year: "2026",
    tools: ["Video Editing"]
  },
  {
    id: "reel-fb-5",
    title: "Video transition",
    category: "Facebook Reel",
    image: "/images/videoediting.png",
    link: "https://www.facebook.com/reel/1313117007072167",
    facebookReelUrl: "https://www.facebook.com/reel/1313117007072167",
    year: "2024",
    tools: ["Video Editing"]
  }
];

export const collectionMotionDesign: DetailedProject[] = [
  {
    id: "motion-design-logo-animation",
    title: "Logo Animation",
    category: "Motion Design",
    image: "/images/motiongraphics.png",
    link: "/images/motiondesign/02logo-animation.mp4",
    videoUrl: "/images/motiondesign/02logo-animation.mp4",
    year: "2024",
    tools: ["After Effects", "Illustrator"]
  }
];

export const categoryCollections: Record<string, DetailedProject[]> = {
  "web-design": collectionWebDesign,
  "logo-design": collectionLogoDesign,
  "poster-designs": collectionPosterDesigns,
  "print-media": collectionPrintMedia,
  "path-study-in-usa": collectionPathStudyInUSA,
  "uiux-design": collectionUIUXDesign,
  "programs-in-aus": collectionProgramsInAus,
  "videos": collectionVideos,
  "motion-design": collectionMotionDesign,
};

export const projects: Project[] = [
  {
    id: "logo-design",
    title: "Brand Identity",
    category: "Branding",
    image: "/images/Branding.png",
    link: "/projects/logo-design",
    year: "2023",
    tags: ["Logo"],
    isCollection: true,
    details: {
      description: "A comprehensive brand identity design focusing on modern aesthetics and timeless appeal.",
      services: ["Brand Strategy", "Logo Design", "Visual Identity"],
      tools: ["Illustrator", "Photoshop", "Figma"],
      colorPalette: [
        { name: "Primary", hex: "#1A1A1A" },
        { name: "Accent", hex: "#FF5733" },
        { name: "Neutral", hex: "#F4F4F4" }
      ],
      gallery: ["/images/branding/pinak/pinaklogo-with-branding.jpg", "/images/branding/altiscalelab/logowithbranding.jpg", "/images/branding/lhotseaus/lhotselogowithbranding.jpg"],
      brandingImages: ["/images/branding/pinak/pinaklogo-with-branding.jpg", "/images/branding/altiscalelab/logowithbranding.jpg", "/images/branding/lhotseaus/lhotselogowithbranding.jpg"],
      logoDesigns: ["/images/branding/pinak/pinaklogo-with-branding.jpg", "/images/branding/altiscalelab/logowithbranding.jpg", "/images/branding/lhotseaus/lhotselogowithbranding.jpg"],
    }
  },
  {
    id: "web-design",
    title: "Web",
    category: "Web Development",
    image: "/images/webdevelopment.png",
    link: "/projects/web-design",
    year: "2023",
    tags: ["Web", "Frontend"],
    isCollection: true,
    details: {
      description: "A sleek, high-performance web experience crafted for optimal user engagement and accessibility.",
      services: ["UI/UX Design", "Frontend Development", "Prototyping"],
      tools: ["Figma", "React", "Tailwind CSS"],
      gallery: ["/images/uiux.png", "/images/Path Study in USA.jpg"],
      brandingImages: ["/images/uiux.png"],
    }
  },
  {
    id: "print-media",
    title: "Graphic Design",
    category: "Graphics",
    image: "/images/graphicss.png",
    link: "/projects/print-media",
    year: "2024",
    tags: ["Posters", "Socaial Media"],
    isCollection: true,
    details: {
      description: "Bold and visually striking graphic design assets tailored for both print media and digital campaigns.",
      services: ["Print Design", "Social Media Graphics", "Illustration"],
      tools: ["Illustrator", "InDesign", "Photoshop"],
      gallery: ["/images/printmedia.jpg", "/images/Posters.jpg"],
      brandingImages: ["/images/printmedia.jpg"],
    }
  },
  {
    id: "videos",
    title: "Videos",
    category: "Video Editing",
    image: "/images/videoediting.png",
    link: "/projects/videos",
    year: "2024",
    tags: ["Video", "Ads", "Reels"],
    isCollection: true,
    details: {
      description: "Dynamic video editing and motion graphics designed to capture attention and tell compelling stories.",
      services: ["Video Editing", "Color Grading", "Sound Design"],
      tools: ["Premiere Pro", "After Effects", "DaVinci Resolve"],
      gallery: ["/images/Path Study in USA.jpg", "/images/Diploma Bachelor Masters AUS.jpg"],
    }
  },
  {
    id: "uiux-design",
    title: "UI/UX Design",
    category: "UI/UX",
    image: "/images/uiuxx.png",
    link: "/projects/uiux-design",
    year: "2022",
    tags: ["UI/UX", "Web"],
    isCollection: true,
    details: {
      description: "Intuitive user interfaces built with a user-centric approach, balancing aesthetics with functionality.",
      services: ["User Research", "Wireframing", "UI Design"],
      tools: ["Figma", "Framer", "Sketch"],
      gallery: ["/images/uiux.png", "/images/printmedia.jpg"],
    }
  },
  {
    id: "motion-design",
    title: "Motion Design",
    category: "Motion Design",
    image: "/images/motiongraphics.png",
    link: "/projects/motion-design",
    year: "2022",
    tags: ["Motion Design", "Animation"],
    isCollection: true,
    details: {
      description: "Fluid motion design that brings static assets to life, enhancing the overall brand experience.",
      services: ["2D Animation", "Motion Graphics", "Lottie Animations"],
      tools: ["After Effects", "Illustrator", "Cinema 4D"],
      gallery: ["/images/Diploma Bachelor Masters AUS.jpg", "/images/uiux.png"],
    }
  },
];
