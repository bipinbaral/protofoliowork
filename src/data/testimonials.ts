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
    name: "Bijaya Kharel",
    role: "Pinak Interior & Construction",
    quote: "Bipin bhai has been amazing to work with. He handled our logo design, social media marketing, Meta Ads, and Reels editing with great creativity and professionalism. Highly recommended!",
    rating: 5.0,
    profile: "/images/testimonials/bijayakharel.jpg",
  },
  {
    id: "2",
    name: "Saraswati Arts",
    role: "Printing Press",
    quote: "We worked with Bipin for over 1.5 years on print designs, flex, banners, and client handling. His creativity, responsibility, and ability to understand client needs made the experience excellent.",
    rating: 5.0,
    profile: "/images/testimonials/saraswatiarts.jpg",
  },
  {
    id: "3",
    name: "Prerana Gyan Batika",
    role: "Montessori School",
    quote: "Bipin developed our fully functional, responsive website with a clean and modern design. He understood our requirements perfectly and delivered a smooth experience across devices.",
    rating: 4.8,
    profile: "/images/testimonials/preranagyanbatika.png",
  },
  {
    id: "4",
    name: "Sunil Thapa",
    role: "Kenzo Tea Cafe",
    quote: "Bipin handled our logo, product designs, menus, banners, flex, 3D boards, and light boards. His creative approach and attention to detail really helped strengthen our brand.",
    rating: 5.0,
    profile: "/images/testimonials/sunil thappa.jpg",
  },
  {
    id: "5",
    name: "Dipak Kamat",
    role: "Evani Educational Consultancy",
    quote: "I worked with Bipin sir for over 2 years on graphic design, educational campaigns, and visa congratulation posts. He is creative, reliable, and always delivers quality work on time.",
    rating: 4.9,
    profile: "/images/testimonials/dipakkamat.jpg",
  },
];

export const stats: Stat[] = [
  {
    value: "300+",
    label: "Projects completed",
  },
  {
    value: "97%",
    label: "Client satisfaction",
  },
  {
    value: "5+",
    label: "Years of experience",
  },
];
