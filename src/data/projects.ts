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
    title: "Logo Design",
    category: "Destination",
    image: "/images/Logos.jpg",
    link: "https://www.behance.net/",
    year: "2023",
    tags: ["Branding", "Layout"],
  },
  {
    id: "2",
    title: "Poster Designs",
    category: "Programs",
    image: "/images/Posters.jpg"
    ,
    link: "https://www.behance.net/",
    year: "2023",
    tags: ["UI/UX", "Web"],
  },
  {
    id: "3",
    title: "Print Media",
    category: "Test Prep",
    image: "/images/printmedia.jpg",
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
    title: "UI/UX Design",
    category: "Destination",
    image: "/images/uiux.png",
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
