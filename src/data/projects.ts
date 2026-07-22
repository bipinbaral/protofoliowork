export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  link?: string;
  year?: string;
  tags?: string[];
  isCollection?: boolean;
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
    ]
  },
  {
    id: "harbour-learning",
    title: "Harbour Learning",
    category: "International Education",
    image: "/images/Logos.jpg",
    link: "Where global ambitions find a home",
    year: "2023",
  },
  {
    id: "southern-cross-academy",
    title: "Southern Cross Academy",
    category: "Vocational Education",
    image: "/images/Logos.jpg",
    link: "Skills that travel the world",
    year: "2024",
  },
  {
    id: "pacific-gateway",
    title: "Pacific Gateway Institute",
    category: "Higher Education",
    image: "/images/Logos.jpg",
    link: "Gateway to the Pacific Rim",
    year: "2023",
  }
];

export const projects: Project[] = [
  {
    id: "logo-design",
    title: "Logo Design",
    category: "Destination",
    image: "/images/Logos.jpg",
    link: "/projects/logo-design",
    year: "2023",
    tags: ["Branding", "Layout"],
    isCollection: true,
  },
  {
    id: "2",
    title: "Poster Designs",
    category: "Programs",
    image: "/images/Posters.jpg",
    year: "2023",
    tags: ["UI/UX", "Web"],
  },
  {
    id: "3",
    title: "Print Media",
    category: "Test Prep",
    image: "/images/printmedia.jpg",
    year: "2024",
    tags: ["Print", "Social Media"],
  },
  {
    id: "4",
    title: "Path Study in USA",
    category: "Destination",
    image: "/images/Path Study in USA.jpg",
    year: "2024",
    tags: ["Identity", "Digital"],
  },
  {
    id: "5",
    title: "UI/UX Design",
    category: "Destination",
    image: "/images/uiux.png",
    year: "2022",
    tags: ["Strategy", "Design"],
  },
  {
    id: "6",
    title: "Programs in AUS",
    category: "Programs",
    image: "/images/Diploma Bachelor Masters AUS.jpg",
    year: "2022",
    tags: ["Illustration", "Ad"],
  },
];
