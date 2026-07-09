export interface Service {
  id: string;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    id: "brand-identity",
    title: "Brand Identity",
    description: "Crafting unique, memorable brand identities that resonate with your audience — from logos to visual systems — ensuring every touchpoint reflects your brand's essence.",
  },
  {
    id: "package-design",
    title: "Package Design",
    description: "Designing sleek, impactful packaging that not only looks stunning but also connects with your ideal customers — turning first impressions into lasting brand loyalty.",
  },
  {
    id: "graphics-design",
    title: "Graphics Design",
    description: "Creating visually compelling graphics that communicate your message clearly and beautifully across all mediums, both digital and print.",
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    description: "Designing intuitive and engaging user experiences that are as beautiful as they are functional, ensuring your digital products are a joy to use.",
  },
  {
    id: "motion-graphics",
    title: "Motion Graphics",
    description: "Bringing static designs to life with dynamic motion graphics and animations that capture attention and tell your brand's story effectively.",
  },
  {
    id: "website-design",
    title: "Website Design",
    description: "Building stunning, responsive, and performant websites that serve as the perfect digital storefront for your brand.",
  },
];

export const secondaryServices: string[] = [
  "Rebranding",
  "Copywriting",
  "Social Media Management",
  "Content Strategy",
  "Project Management",
  "AI Design Tools",
  "Creative Direction",
  "Web Optimization"
]

export const tools: string[] = [
  "Figma",
  "Photoshop",
  "Illustrator",
  "After Effects",
  "Premiere Pro",
  "Framer",
  "WordPress",
  "Next.js",
  "AI Tools",
];
