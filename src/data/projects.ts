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
    image: "/images/Logos.jpg", // We will use a generic or placeholder if not provided
    link: "pinakinterior.com.np",
    year: "2020",
    caseStudy: {
      companyBackground: "Pinak Interior was founded in 2020 by a team of visionary architects with deep roots in the Australian tertiary sector. Their mission simplifies the long timeline process of building from its foundation to installation for mainstream consumers in Southeast Asia. Within two years of their finding, over 3,400 students through successful applications, building a reputation for transparency and results-driven counselling.",
      logoStory: "The UoM primary mark is built around the Southern Cross constellation - a visual tie that navigate explorers toward the Southern Hemisphere. We abstracted the constellation into a minimal path with five nodes in a line that strongly connects, suggesting a journey with clear direction. The geometry is precise but organic, evoking the coolness of pure corporate works while maintaining authority.",
      designChallenge: "UoM's target audience spans multiple cultural contexts: India, Nepal, Bangladesh, Vietnam, and the Philippines. The visual identity had to feel premium and internationally relevant, while offering very simple visual cues to help millions navigating extensive stakeholder workflows and iterative testing with representative users from each country.",
      designProcess: {
        discovery: ["1 Week", "Stakeholder interviews, competitor audit, and audience research across five key geographies", "Stakeholder interviews", "Competitor brand mapping", "Quantitative surveys (India, Sri Lanka, Vietnam)"],
        strategy: ["2 Weeks", "Brand positioning, tone of voice, and visual identity definition", "Brand architecture guide", "Value proposition matrix", "Tone of voice definition"],
        identityDesign: ["3 Weeks", "Logo development, typography selection, and color system formulation", "Concept sketches", "Digital vector refinements", "Color and type testing"]
      },
      colorPalette: [
        { name: "Primary", hex: "#FF6B35", purpose: "Main Brand Color" },
        { name: "Secondary", hex: "#1F2232", purpose: "Deep Navy" },
        { name: "Neutral", hex: "#F5F5F5", purpose: "Off White" },
        { name: "Accent 1", hex: "#8D8177", purpose: "Warm Gray" },
        { name: "Accent 2", hex: "#FFC2A6", purpose: "Soft Orange" }
      ],
      typography: [
        { name: "Neue Haas Grotesk", type: "Primary Typeface", sample: "Aa" },
        { name: "Garamond Premier Pro", type: "Secondary Typeface", sample: "Aa" }
      ],
      logoVariations: [
        { id: "1", image: "/images/Logos.jpg", type: "Standard Dark" },
        { id: "2", image: "/images/Logos.jpg", type: "Standard Light" },
        { id: "3", image: "/images/Logos.jpg", type: "Monochrome" }
      ],
      brandMockups: [
        { title: "Business cards (two-sided, letterpress finish)" },
        { title: "A4 letterhead and compliment slip" },
        { title: "Email signature with branch logos" }
      ],
      finalDeliverables: [
        "Brand Strategy Document (24pp)",
        "Logo Suite (SVG, EPS, PNG, JPGS formats)",
        "Colour & Typography Guide",
        "Primary Brand Guidelines",
        "Stationery System (ready-for-print)",
        "Social Media Templates (Figma + 12 templates)",
        "Website Design (UI/UX for 12 screens)"
      ]
    },
    galleryImages: [
      "/images/Logos.jpg",
      "/images/Posters.jpg",
      "/images/Thumbnail.jpg",
      "/images/Videos.jpg",
      "/images/printmedia.jpg",
      "/images/uiux.png"
    ],
    tools: ["Illustrator", "Photoshop", "Figma"],
    deliverables: ["Logo Design", "Brand Identity", "Stationery", "UI/UX"]
  },
  {
    id: "altiscalelab-branding",
    title: "Altiscale Lab",
    category: "Logo, Branding",
    image: "/images/branding/altiscalelab/logowithbranding.jpg",
    link: "Build Smarter",
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
    link: "example.com",
    year: "2023",
    galleryImages: ["/images/Posters.jpg"]
  },
  {
    id: "poster-sample-2",
    title: "Sample Poster Project 2",
    category: "Design",
    image: "/images/Posters.jpg",
    link: "example.com",
    year: "2023",
    galleryImages: ["/images/Posters.jpg"]
  },
  {
    id: "poster-sample-3",
    title: "Sample Poster Project 3",
    category: "Design",
    image: "/images/Posters.jpg",
    link: "example.com",
    year: "2023",
    galleryImages: ["/images/Posters.jpg"]
  }
];

export const collectionPrintMedia: DetailedProject[] = [
  {
    id: "graphic-social-media",
    title: "Social Media & Packaging",
    category: "Social Media, Packaging",
    image: "/images/graphics design/social media/socialmedia4.png",
    link: "example.com",
    year: "2024",
    tools: ["Illustrator", "Photoshop"],
    galleryImages: [
      "/images/graphics design/social media/socialmedia1.png",
      "/images/graphics design/social media/socialmedia2.jpg",
      "/images/graphics design/social media/socialmedia3.png",
      "/images/graphics design/social media/socialmedia5.jpg",
      "/images/graphics design/social media/socialmedia6.jpg",
      "/images/graphics design/social media/socialmedia7.png",
      "/images/graphics design/social media/socialmedia8.jpg"
    ]
  },
  {
    id: "graphic-print-media",
    title: "Print Media",
    category: "Flex, T-shirts, Packging, Bags, Brochure, Flyers, Posters, Letterhead",
    image: "/images/graphics design/print design/print3.jpg",
    link: "example.com",
    year: "2024",
    tools: ["InDesign", "Illustrator", "Photoshop"],
    galleryImages: [
      "/images/graphics design/print design/print1.jpg",
      "/images/graphics design/print design/print4.jpg"
    ]
  },
  {
    id: "graphic-thumbnail",
    title: "Thumbnail Design",
    category: "Youtube Thumbnails",
    image: "/images/graphics design/thumbnail/thumbnail02.jpg",
    link: "example.com",
    year: "2024",
    tools: ["Photoshop"],
    galleryImages: [
      "/images/graphics design/thumbnail/thumbnail02.jpg"
    ]
  }
];

export const collectionPathStudyInUSA: DetailedProject[] = [
  {
    id: "path-sample-1",
    title: "Sample Path Study Project 1",
    category: "Education",
    image: "/images/Path Study in USA.jpg",
    link: "example.com",
    year: "2024",
    galleryImages: ["/images/Path Study in USA.jpg"]
  },
  {
    id: "path-sample-2",
    title: "Sample Path Study Project 2",
    category: "Education",
    image: "/images/Path Study in USA.jpg",
    link: "example.com",
    year: "2024",
    galleryImages: ["/images/Path Study in USA.jpg"]
  },
  {
    id: "path-sample-3",
    title: "Sample Path Study Project 3",
    category: "Education",
    image: "/images/Path Study in USA.jpg",
    link: "example.com",
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
    link: "example.com",
    year: "2023",
    tools: ["Figma", "Figma Make AI"]
  },
  {
    id: "uiux-dashboard",
    title: "Dashboard Design",
    category: "Graphs, Chart, Summary, Listing",
    image: "/images/uiux/second/Dashboard.jpg",
    link: "example.com",
    year: "2023",
    tools: ["Figma", "Figma Make AI"]
  },
  {
    id: "uiux-sample-3",
    title: "Blog Content Page",
    category: "Blogs Section, Table of content, Comments, About Author",
    image: "/images/uiux/third/blogcontent.jpg",
    link: "example.com",
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
    link: "example.com",
    year: "2022",
    galleryImages: ["/images/Diploma Bachelor Masters AUS.jpg"]
  },
  {
    id: "aus-sample-2",
    title: "Sample AUS Program Project 2",
    category: "Education",
    image: "/images/Diploma Bachelor Masters AUS.jpg",
    link: "example.com",
    year: "2022",
    galleryImages: ["/images/Diploma Bachelor Masters AUS.jpg"]
  },
  {
    id: "aus-sample-3",
    title: "Sample AUS Program Project 3",
    category: "Education",
    image: "/images/Diploma Bachelor Masters AUS.jpg",
    link: "example.com",
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

export const categoryCollections: Record<string, DetailedProject[]> = {
  "web-design": collectionWebDesign,
  "logo-design": collectionLogoDesign,
  "poster-designs": collectionPosterDesigns,
  "print-media": collectionPrintMedia,
  "path-study-in-usa": collectionPathStudyInUSA,
  "uiux-design": collectionUIUXDesign,
  "programs-in-aus": collectionProgramsInAus,
  "videos": collectionVideos,
};

export const projects: Project[] = [
  {
    id: "logo-design",
    title: "Brand Identity",
    category: "Branding",
    image: "/images/Branding.png",
    link: "/projects/brand-identity",
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
      gallery: ["/images/Logos.jpg", "/images/uiux.png", "/images/printmedia.jpg"],
      brandingImages: ["/images/Logos.jpg"],
      logoDesigns: ["/images/Logos.jpg"],
    }
  },
  {
    id: "web-design",
    title: "Web",
    category: "Web Development",
    image: "/images/webdevelopment.png",
    link: "/projects/webdevelopment",
    year: "2023",
    tags: ["Web", "Frontend"],
    isCollection: true,
    details: {
      description: "A sleek, high-performance web experience crafted for optimal user engagement and accessibility.",
      services: ["UI/UX Design", "Frontend Development", "Prototyping"],
      tools: ["Figma", "React", "Tailwind CSS"],
      gallery: ["/images/uiux.png", "/images/Path Study in USA.jpg", "/images/Logos.jpg"],
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
      gallery: ["/images/printmedia.jpg", "/images/Posters.jpg", "/images/Logos.jpg"],
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
