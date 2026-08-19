import { Metadata } from "next";
import Link from "next/link";
import { getAllCategories } from "@/data/portfolio";
import { Container } from "@/components/ui/Container";
import { SITE_URL, SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Portfolio | ${SITE_NAME}`,
  description: `Explore graphic design, branding, UI/UX, and web development projects by ${SITE_NAME} in Kathmandu, Nepal.`,
  alternates: {
    canonical: `${SITE_URL}/portfolio`,
  },
  openGraph: {
    title: `Portfolio | ${SITE_NAME}`,
    description: `Explore graphic design, branding, UI/UX, and web development projects by ${SITE_NAME}.`,
    url: `${SITE_URL}/portfolio`,
    siteName: SITE_NAME,
    type: "website",
    images: ["/images/work-with-bipin.png"],
  },
};

export default function PortfolioPage() {
  const categories = getAllCategories();

  return (
    <div className="pt-32 pb-16 min-h-screen">
      <Container>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Portfolio</h1>
        <p className="text-white/60 text-lg mb-12 max-w-2xl">
          Browse through my design categories.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <Link key={cat.id} href={`/portfolio/${cat.slug}`} className="block group">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors">
                <h2 className="text-2xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  {cat.title}
                </h2>
                <p className="text-white/50">{cat.description}</p>
                <div className="mt-6 text-sm font-medium text-white/70 uppercase tracking-wider">
                  {cat.projects.length} Projects
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}
