export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  link: string;
  year?: string;
  tags?: string[];
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Study in Australia",
    category: "Destination",
    image: "/images/Aus.jpg",
    link: "https://www.behance.net/",
    year: "2023",
    tags: ["Branding", "Layout"],
  },
  {
    id: "2",
    title: "Diploma Bachelor Masters",
    category: "Programs",
    image: "/images/Diploma Bachelor Masters AUS.jpg",
    link: "https://www.behance.net/",
    year: "2023",
    tags: ["UI/UX", "Web"],
  },
  {
    id: "3",
    title: "IELTS Preparation",
    category: "Test Prep",
    image: "/images/IELTS.jpg",
    link: "https://www.behance.net/",
    year: "2024",
    tags: ["Print", "Social Media"],
  },
  {
    id: "4",
    title: "Path Study in USA",
    category: "Destination",
    image: "/images/Path Study in USA.jpg",
    link: "https://www.behance.net/",
    year: "2024",
    tags: ["Identity", "Digital"],
  },
  {
    id: "5",
    title: "Study in Australia 2",
    category: "Destination",
    image: "/images/Aus.jpg",
    link: "https://www.behance.net/",
    year: "2022",
    tags: ["Strategy", "Design"],
  },
  {
    id: "6",
    title: "Programs in AUS",
    category: "Programs",
    image: "/images/Diploma Bachelor Masters AUS.jpg",
    link: "https://www.behance.net/",
    year: "2022",
    tags: ["Illustration", "Ad"],
  },
];
