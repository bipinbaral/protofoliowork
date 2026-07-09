export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
  profile: string;
}

export interface Stat {
  value: string;
  label: string;
  targetValue?: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Richards Johnson",
    role: "Creative Director & Lead Designer",
    quote: "Working with Bipin was a seamless experience. His ability to merge creativity with functionality resulted in designs that not only looked stunning but also drove meaningful engagement. Highly recommended!",
    rating: 5.0,
    profile: "https://i.pravatar.cc/150?u=richards",
  },
  {
    id: "2",
    name: "June Lee",
    role: "CEO of GreenRoots",
    quote: "Bipin's strategic approach to design brought our brand vision to life. The packaging and brand elements he developed elevated our aesthetic and aligned perfectly with our sustainability values.",
    rating: 5.0,
    profile: "https://i.pravatar.cc/150?u=june",
  },
  {
    id: "3",
    name: "Jona Carter",
    role: "Founder of EcoLux",
    quote: "Every project Bipin touches turns into a perfect blend of design and purpose. He crafted packaging that reflected our eco-friendly mission while making our products stand out on the shelves.",
    rating: 5.0,
    profile: "https://i.pravatar.cc/150?u=jona",
  },
  {
    id: "4",
    name: "Sofia Toms",
    role: "Founder at GreenK Studios",
    quote: "Bipin's designs speak for themselves — bold, strategic, and impactful. He took the time to understand our brand, delivering packaging concepts that resonated with our target audience and boosted our product's visibility.",
    rating: 5.0,
    profile: "https://i.pravatar.cc/150?u=sofia",
  },
];

export const stats: Stat[] = [
  {
    value: "180+",
    label: "Projects completed",
  },
  {
    value: "96%",
    label: "Client satisfaction",
  },
  {
    value: "5+",
    label: "Years of experience",
  },
];
