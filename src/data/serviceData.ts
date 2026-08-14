export interface ServiceDetail {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1Title: string;
  shortDesc: string;
  intro: string;
  benefits: string[];
  deliverables: string[];
  portfolioExamples: {
    title: string;
    category: string;
    image: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const servicesData: ServiceDetail[] = [
  {
    slug: "brand-identity-design",
    title: "Brand Identity Design",
    metaTitle: "Brand Identity Design in Nepal | Bipin Creates (Bipin Baral)",
    metaDescription: "Professional logo design and brand identity services in Kathmandu, Nepal by Bipin Creates (Bipin Baral). Crafting memorable visual systems for growing businesses.",
    h1Title: "Brand Identity Design Services in Kathmandu, Nepal",
    shortDesc: "Complete brand visual systems, custom logo design, color palettes, and brand guidelines that set your business apart.",
    intro: "A great brand identity is more than just a logo—it is the visual foundation of your business reputation. At Bipin Creates (Bipin Baral), I help startups, local businesses, and international agencies in Nepal craft cohesive, memorable brand identities that resonate with target audiences and communicate trust.",
    benefits: [
      "Distinct visual presence that separates you from competitors",
      "Consistent brand assets across print, web, and social media",
      "Comprehensive style guide for effortless future design work",
      "Scalable vector assets ready for embroidery, signages, and digital use"
    ],
    deliverables: [
      "Primary & Secondary Logo Variations",
      "Typography Scale & Color Palette Hex Codes",
      "Brand Guidelines Document (PDF)",
      "Social Media Avatar & Header Templates",
      "Vector Source Files (.AI, .EPS, .SVG, .PNG)"
    ],
    portfolioExamples: [
      {
        title: "Pinak Interior & Construction",
        category: "Construction & Interior",
        image: "/images/branding/pinak/pinaklogo-with-branding.jpg",
        description: "Modern architectural logo mark and brand guidelines for a premier interior construction firm in Nepal."
      },
      {
        title: "Altiscale Lab",
        category: "Tech & Software",
        image: "/images/branding/altiscalelab/logowithbranding.jpg",
        description: "Geometric, future-ready brand identity system for a software development lab."
      },
      {
        title: "Lhotse Aus Placement",
        category: "Educational Consultancy",
        image: "/images/branding/lhotseaus/lhotselogowithbranding.jpg",
        description: "Trustworthy educational placement agency branding designed for international student outreach."
      }
    ],
    faqs: [
      {
        question: "How long does a full brand identity project take?",
        answer: "A standard brand identity project typically takes 2 to 4 weeks depending on the scope of deliverables and feedback timelines."
      },
      {
        question: "What source files will I receive upon project completion?",
        answer: "You will receive full master files including vector AI, EPS, SVG, high-resolution PNGs with transparent backgrounds, and PDF brand guidelines."
      },
      {
        question: "Can you refresh or update an existing logo?",
        answer: "Yes! I specialize in modernizing legacy brand logos while retaining their core heritage and brand recognition."
      },
      {
        question: "How many logo design concepts do you provide?",
        answer: "I usually present 2 to 3 distinct visual directions during the initial review, refining your chosen direction until perfection."
      }
    ]
  },
  {
    slug: "web-development",
    title: "Web Development",
    metaTitle: "Web Development Services in Nepal | Bipin Creates (Bipin Baral)",
    metaDescription: "Custom Next.js, React, & WordPress web development services in Kathmandu, Nepal by Bipin Creates (Bipin Baral). Fast, mobile-responsive, SEO-optimized websites.",
    h1Title: "High-Performance Web Development Services in Nepal",
    shortDesc: "Building lightning-fast, mobile-friendly websites with Next.js, React, and modern web tools engineered for high search rankings.",
    intro: "Your website is your primary digital storefront. Bipin Creates (Bipin Baral) builds modern, high-speed, SEO-optimized web applications and marketing sites for businesses in Nepal and worldwide. Using modern technologies like Next.js, React, Tailwind CSS, and headless CMS solutions, I ensure your site loads instantly and converts visitors into clients.",
    benefits: [
      "Sub-second page load times for superior user experience",
      "Built-in Technical SEO and Schema markup for high Google rankings",
      "100% responsive design tailored for smartphones, tablets, and desktops",
      "Clean, maintainable code with zero unnecessary bloat"
    ],
    deliverables: [
      "Custom Next.js / React Frontend Development",
      "CMS Integration for Easy Content Updates",
      "On-Page SEO Optimization & Schema Setup",
      "Analytics & Lead Form Integration",
      "Deployment to Vercel / Cloudflare with SSL"
    ],
    portfolioExamples: [
      {
        title: "Prerana Gyan Batika",
        category: "Educational Web App",
        image: "/images/webdevelopment/preranagyanbatika.png",
        description: "Full-stack educational platform built with Next.js and TypeScript."
      },
      {
        title: "Altiscale Lab Platform",
        category: "Corporate Website",
        image: "/images/webdevelopment/altiscalelabs.png",
        description: "Clean, responsive corporate web presence for a software engineering startup."
      },
      {
        title: "Chautari Resort Website",
        category: "Resort & Hospitality Web App",
        image: "/images/webdevelopment/chautari resort.png",
        description: "Modern, responsive resort website and booking platform built with Next.js."
      }
    ],
    faqs: [
      {
        question: "What technology stack do you use for web development?",
        answer: "I specialize in Next.js, React, TypeScript, Tailwind CSS, Node.js, and WordPress depending on the project requirement."
      },
      {
        question: "Will my website be search engine optimized (SEO)?",
        answer: "Yes! Every website I build includes on-page SEO best practices, meta tags, canonical links, structured data (JSON-LD), and fast loading speed."
      },
      {
        question: "Do you provide hosting setup and domain configuration?",
        answer: "Yes, I handle complete deployment setup including SSL certificates, domain DNS configuration, and cloud hosting setup."
      },
      {
        question: "Can I update content on my site after launch?",
        answer: "Absolutely. I integrate user-friendly content management systems (CMS) so you can easily update text, blog posts, and media."
      }
    ]
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    metaTitle: "UI/UX Design Services in Nepal | Bipin Creates (Bipin Baral)",
    metaDescription: "Intuitive UI/UX design, wireframing, & interactive prototyping in Kathmandu, Nepal by Bipin Creates (Bipin Baral). Figma expert creating web & mobile interfaces.",
    h1Title: "UI/UX & Digital Product Design Services in Kathmandu, Nepal",
    shortDesc: "User-centered interface design, interactive Figma prototypes, and seamless user journeys for web and mobile applications.",
    intro: "Beautiful design is useless if users cannot navigate it effortlessly. Bipin Creates (Bipin Baral) designs pixel-perfect UI/UX interfaces that align business goals with user needs. From wireframes to fully interactive Figma design systems, I turn complex web and mobile app ideas into clean, engaging user experiences.",
    benefits: [
      "Reduced user friction and higher landing page conversion rates",
      "Interactive Figma prototypes for investor pitches and user testing",
      "Comprehensive design tokens and component libraries for easy developer handoff",
      "Accessibility-first color contrast and typography scaling"
    ],
    deliverables: [
      "User Research & Journey Mapping",
      "Low-Fidelity & High-Fidelity Wireframes",
      "Interactive Figma Prototypes",
      "Reusable Component Design System",
      "Developer Hand-off Documentation & Assets"
    ],
    portfolioExamples: [
      {
        title: "SaaS Landing Page System",
        category: "UI/UX Design",
        image: "/images/uiux/first/Packages.jpg",
        description: "Conversion-optimized landing page structure featuring hero section, pricing grid, and FAQs."
      },
      {
        title: "Analytics Dashboard UI",
        category: "Web Application",
        image: "/images/uiux/second/Dashboard.jpg",
        description: "Dark-mode data visualization dashboard with intuitive charts and activity summaries."
      },
      {
        title: "Blog & Content Hub",
        category: "Content Experience",
        image: "/images/uiux/third/blogcontent.jpg",
        description: "Reader-focused editorial layout with floating table of contents and engagement blocks."
      }
    ],
    faqs: [
      {
        question: "What design tools do you use for UI/UX?",
        answer: "I rely primarily on Figma for interface design, component libraries, and interactive prototyping."
      },
      {
        question: "Do you design for mobile screens as well?",
        answer: "Yes! Every UI/UX project includes responsive layouts tailored for mobile, tablet, and desktop breakpoints."
      },
      {
        question: "How do you hand off designs to developers?",
        answer: "I provide organized Figma files with clear component styles, layout auto-layouts, exported SVG/PNG assets, and code specs."
      },
      {
        question: "Can you redesign our existing app UI?",
        answer: "Yes, I conduct UX audits on existing platforms and redesign them to improve user retention, visual appeal, and ease of use."
      }
    ]
  },
  {
    slug: "packaging-design",
    title: "Packaging Design",
    metaTitle: "Packaging & Label Design in Nepal | Bipin Creates (Bipin Baral)",
    metaDescription: "Print-ready packaging design & product label creation in Kathmandu, Nepal by Bipin Creates (Bipin Baral). Box, bag, and bottle packaging solutions.",
    h1Title: "Custom Product Packaging & Label Design Services in Nepal",
    shortDesc: "High-impact product packaging, retail boxes, pouch bags, and bottle label designs tailored for print production.",
    intro: "Packaging is your product's handshake on retail shelves and unboxing videos. Bipin Creates (Bipin Baral) creates packaging and label designs that grab immediate buyer attention. Combining structural dielines with striking typography and color theory, I deliver print-ready files tailored for local printers in Nepal and international manufacturing standards.",
    benefits: [
      "Eye-catching shelf appeal that stands out from competitor products",
      "Accurate print dielines with bleeds, trim marks, and color swatches",
      "Photorealistic 3D mockups for online store previews and marketing",
      "Compliance-friendly layout for nutrition facts, barcodes, and ingredients"
    ],
    deliverables: [
      "Print-Ready Dieline Files (Vector AI, PDF, EPS)",
      "High-Resolution 3D Product Mockup Renders",
      "Bar-code & QR Code Placement Integration",
      "Multiple Color/Flavor Variant Layouts",
      "CMYK Color Calibration for Print Press"
    ],
    portfolioExamples: [
      {
        title: "Print & Social Packaging Kit",
        category: "Packaging & Print",
        image: "/images/graphics-design/social-media/socialmedia4.png",
        description: "Branded box and pouch packaging artwork crafted for consumer products."
      },
      {
        title: "Retail Merchandise Print",
        category: "Print Media",
        image: "/images/graphics-design/print-design/print3.jpg",
        description: "Custom bag, T-shirt, and box prints for corporate promotions."
      },
      {
        title: "Product Label Design",
        category: "Label Design",
        image: "/images/graphics-design/social-media/socialmedia5.jpg",
        description: "Vibrant product bottle label with clean typography and barcode placement."
      }
    ],
    faqs: [
      {
        question: "Will the packaging file be ready for my printing vendor?",
        answer: "Yes! You will receive 100% press-ready vector files with correct CMYK colors, exact dieline specs, bleeds, and outlines."
      },
      {
        question: "Do I need to supply the dieline template?",
        answer: "If your printer provides a template, I will design directly onto it. If not, I can create custom standard dielines for your box or label size."
      },
      {
        question: "Can you create 3D realistic previews of the packaging?",
        answer: "Yes, I provide photorealistic 3D mockups so you can see exactly how your product will look before committing to bulk printing."
      },
      {
        question: "How do you handle multiple flavor or size variations?",
        answer: "I establish a core master packaging design and then create consistent variant layouts for different colors, scents, or sizes."
      }
    ]
  },
  {
    slug: "graphic-design",
    title: "Graphic Design",
    metaTitle: "Graphic Design Services in Nepal | Bipin Creates (Bipin Baral)",
    metaDescription: "Creative graphic design for social media, print ads, brochures, & banners in Kathmandu, Nepal by Bipin Creates (Bipin Baral).",
    h1Title: "Professional Graphic Design Services in Kathmandu, Nepal",
    shortDesc: "Versatile graphic design solutions spanning digital social media kits, advertising banners, brochures, posters, and YouTube thumbnails.",
    intro: "In a visual-first digital landscape, strong graphics are essential to hold audience attention. Bipin Creates (Bipin Baral) offers full-spectrum graphic design services across digital marketing and traditional print media in Nepal. Whether you need daily social media creatives, corporate brochures, or high-converting YouTube thumbnails, I deliver graphics engineered to perform.",
    benefits: [
      "Consistent brand aesthetic across all marketing channels",
      "Fast turnaround for time-sensitive marketing campaigns",
      "High-resolution graphics tailored to exact platform pixel ratios",
      "Engaging visuals designed to boost social media clicks and sales"
    ],
    deliverables: [
      "Social Media Posts & Carousel Kits (Instagram/FB/LinkedIn)",
      "Print Media Assets (Brochures, Flyers, Posters, Flex Banners)",
      "YouTube Thumbnails & Display Ad Creatives",
      "Corporate Letterheads & Business Cards",
      "Editable Source Files (.PSD, .AI)"
    ],
    portfolioExamples: [
      {
        title: "Social Media Campaign Creatives",
        category: "Digital Marketing",
        image: "/images/graphics-design/social-media/socialmedia1.png",
        description: "Engaging social media ad banners designed for educational & corporate clients."
      },
      {
        title: "Print Media & Brochure Design",
        category: "Print Design",
        image: "/images/graphics-design/print-design/print1.jpg",
        description: "Professional multi-page corporate brochure and flyer layouts."
      },
      {
        title: "Custom YouTube Thumbnail Kit",
        category: "Digital Media",
        image: "/images/graphics-design/thumbnail/thumbnail02.jpg",
        description: "High-CTR YouTube thumbnail designs with bold text overlays and focal imagery."
      }
    ],
    faqs: [
      {
        question: "Do you offer monthly retainers for social media graphic design?",
        answer: "Yes! I offer dedicated monthly design packages for businesses needing ongoing social media graphics and marketing banners."
      },
      {
        question: "What file formats do you deliver?",
        answer: "I deliver web-optimized JPG/PNG for digital use, print-ready PDF/CMYK files for printing, and source PSD/AI files."
      },
      {
        question: "What is your typical turnaround time for graphics?",
        answer: "Single social media posts or thumbnails are usually completed within 24-48 hours. Larger brochure projects take 3-5 business days."
      },
      {
        question: "Can you follow our established brand guidelines?",
        answer: "Absolutely. I adhere strictly to your existing brand colors, fonts, and style guides to maintain 100% brand consistency."
      }
    ]
  },
  {
    slug: "motion-graphics",
    title: "Motion Graphics",
    metaTitle: "Motion Graphics & Video Editing in Nepal | Bipin Creates (Bipin Baral)",
    metaDescription: "Logo animation, 2D motion graphics, & Facebook Reel editing in Kathmandu, Nepal by Bipin Creates (Bipin Baral).",
    h1Title: "Motion Graphics & Video Editing Services in Nepal",
    shortDesc: "Animated logo reveals, dynamic 2D motion graphics, promotional video ads, and engaging vertical video editing for Reels & Shorts.",
    intro: "Video and motion graphics generate up to 80% higher engagement than static visuals. Bipin Creates (Bipin Baral) brings your brand assets to life through seamless 2D motion design, animated logo reveals, and fast-paced video editing in After Effects and Premiere Pro. Perfect for social media ads, product launches, and brand intros in Nepal and internationally.",
    benefits: [
      "Captivating animated motion that stops user scrolling instantly",
      "Professional audio synchronization, sound design, and AI voiceover matching",
      "Optimized vertical videos for TikTok, Reels, and YouTube Shorts",
      "Fluid logo animations to elevate YouTube videos and presentation intros"
    ],
    deliverables: [
      "2D Animated Logo Intros & Outros",
      "Social Media Reel & Short Video Editing",
      "Green Screen Keying & Lower-Third Animations",
      "Sound Design & Motion Typography Overlay",
      "Full HD / 4K MP4 Video Exports"
    ],
    portfolioExamples: [
      {
        title: "Logo Animation Reveal",
        category: "Motion Design",
        image: "/images/motiongraphics.png",
        description: "Dynamic logo build animation with sleek sound effects created in After Effects."
      },
      {
        title: "Social Media Reel Editing",
        category: "Video Editing",
        image: "/images/videoediting.png",
        description: "Fast-paced vertical reel editing with AI captions, sound transitions, and overlay graphics."
      },
      {
        title: "Green Screen Promo Edit",
        category: "Commercial Ad",
        image: "/images/videoediting.png",
        description: "Green screen spokesperson editing combined with stock footage background overlays."
      }
    ],
    faqs: [
      {
        question: "What software do you use for motion graphics and video editing?",
        answer: "I use Adobe After Effects for motion graphics and animation, and Premiere Pro / DaVinci Resolve for video editing and color grading."
      },
      {
        question: "Can you animate my existing logo file?",
        answer: "Yes! As long as you have a vector (.AI, .EPS, or .SVG) version of your logo, I can split it into layers and animate it."
      },
      {
        question: "Do you include background music and captions?",
        answer: "Yes, I handle royalty-free background music selection, sound effects, and animated subtitle/caption generation."
      },
      {
        question: "In what video aspect ratios can you deliver?",
        answer: "I deliver in 16:9 for YouTube/Web, 9:16 for Reels/Shorts/TikTok, and 1:1 for Instagram feeds."
      }
    ]
  }
];

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return servicesData.find((s) => s.slug === slug);
}
