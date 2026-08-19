import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, HelpCircle, CheckCircle2 } from "lucide-react";
import DockNavbar from "@/components/DockNavbar";
import PageBackground from "@/components/PageBackground";
import Footer from "@/components/Footer";
import { Container } from "@/components/ui/Container";
import { SITE_URL, SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Frequently Asked Questions | ${SITE_NAME}`,
  description: `Common questions about pricing ranges, project timelines, revision policies, payment processes, and design deliverables by ${SITE_NAME} in Kathmandu, Nepal.`,
  alternates: {
    canonical: `${SITE_URL}/faq`,
  },
  openGraph: {
    title: `Frequently Asked Questions | ${SITE_NAME}`,
    description: `Common questions about pricing ranges, project timelines, revision policies, payment processes, and design deliverables by ${SITE_NAME}.`,
    url: `${SITE_URL}/faq`,
    siteName: SITE_NAME,
    type: "website",
    images: ["/images/work-with-bipin.png"],
  },
};

const faqItems = [
  {
    question: "What design & web development services do you offer?",
    answer: "I specialize in complete Brand Identity Design (logos, typography, color systems), UI/UX Product Design (wireframes, interactive Figma prototypes), High-Performance Web Development (Next.js, React, Tailwind CSS, WordPress), Packaging & Label Design, Graphic Design (social media kits, print media), and Motion Graphics & Video Editing."
  },
  {
    question: "What are your typical project pricing ranges?",
    answer: "Pricing depends on project scope, deliverables, and timeline. Brand identity packages typically start from standard startup rates up to full visual systems. Web development projects range based on page count and custom functionality. I provide a detailed, transparent proposal after our initial consultation call with zero hidden fees."
  },
  {
    question: "How long does a standard project take to complete?",
    answer: "Logo & brand identity projects generally take 2 to 3 weeks. Full custom Next.js websites take 2 to 4 weeks depending on CMS integration and page volume. Single graphic assets or social media kits can be delivered within 24 to 48 hours."
  },
  {
    question: "What is your client revision policy?",
    answer: "Every project contract includes 2 to 3 structured revision rounds. During revision rounds, we refine the chosen concept's layout, color palette, typography, or spacing until it perfectly matches your vision. Further out-of-scope revisions are billed at clear add-on rates."
  },
  {
    question: "How does your payment process work?",
    answer: "Work begins after a 50% initial deposit and signed agreement. The remaining 50% balance is due upon final project sign-off before master vector files, website domain launches, or source code repositories are handed over."
  },
  {
    question: "What deliverables are included at each service tier?",
    answer: "For branding: vector AI, EPS, SVG, transparent PNGs, and a PDF brand guideline book. For web development: clean Next.js/React source code, live Vercel/Cloudflare deployment, CMS access, and mobile responsiveness. For packaging: 100% press-ready CMYK dielines and 3D mockups."
  },
  {
    question: "Do you work with international clients outside Nepal?",
    answer: "Yes! While I am based in Kathmandu, Nepal, I regularly work with agency partners, startups, and business owners across Australia, USA, Europe, and Asia. Communication is seamless via email, WhatsApp, and Google Meet."
  },
  {
    question: "Will my website be mobile-responsive and search engine optimized (SEO)?",
    answer: "Absolutely. Every website built by Bipin Creates (Bipin Baral) is 100% responsive across mobile, tablet, and desktop screens, and includes built-in technical SEO, meta tags, schema markup (JSON-LD), and sub-second loading performance."
  }
];

export default function FAQPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <DockNavbar />
      <PageBackground />

      <main className="relative z-10 flex-1 flex flex-col w-full bg-transparent overflow-x-hidden pt-32 pb-24">
        <Container>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm font-medium mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>

          <header className="max-w-3xl mb-16">
            <span className="inline-block text-xs font-mono uppercase tracking-[0.2em] text-white/50 mb-3">
              HELP &amp; CLIENT INFO
            </span>
            <h1 className="font-satoshi text-4xl sm:text-5xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-white/70 text-lg font-sans font-light leading-relaxed">
              Everything you need to know about working with Bipin Creates (Bipin Baral) — from pricing and process to timelines and deliverables.
            </p>
          </header>

          <div className="max-w-4xl space-y-8">
            {faqItems.map((faq, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-md space-y-3"
              >
                <h2 className="font-satoshi text-2xl font-bold text-white flex items-start gap-3">
                  <HelpCircle className="w-6 h-6 text-purple-400 shrink-0 mt-0.5" />
                  <span>{faq.question}</span>
                </h2>
                <p className="text-white/75 font-sans text-base leading-relaxed pl-9">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </main>

      <Footer />
    </>
  );
}
