import Link from "next/link";
import { getAllCategories } from "@/data/portfolio";
import { Container } from "@/components/ui/Container";

export const metadata = {
  title: "Portfolio | Bipin Baral",
  description: "Explore my latest design and branding projects.",
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
