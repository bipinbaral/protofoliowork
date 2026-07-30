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
    id: "packaging-design",
    title: "Packaging Design",
    description: "Creating packaging that stands out on the shelves and tells your brand's story, combining aesthetics with functionality.",
  },
  {
    id: "graphics-design",
    title: "Graphics Design",
    description: "Creating visuals that communicate your message clearly and beautifully across all mediums, both digital and print.",
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
    id: "web-development",
    title: "Web Development",
    description: "Creating stunning, fast, and scalable web applications that turn your ideas into reality.",
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
