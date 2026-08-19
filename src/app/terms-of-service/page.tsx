import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";
import DockNavbar from "@/components/DockNavbar";
import PageBackground from "@/components/PageBackground";
import Footer from "@/components/Footer";
import { Container } from "@/components/ui/Container";
import { SITE_URL, SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Terms of Service | ${SITE_NAME}`,
  description: `Terms of service and client project agreements for ${SITE_NAME} in Kathmandu, Nepal.`,
  alternates: {
    canonical: `${SITE_URL}/terms-of-service`,
  },
  openGraph: {
    title: `Terms of Service | ${SITE_NAME}`,
    description: `Terms of service and client project agreements for ${SITE_NAME} in Kathmandu, Nepal.`,
    url: `${SITE_URL}/terms-of-service`,
    siteName: SITE_NAME,
    type: "website",
    images: ["/images/work-with-bipin.png"],
  },
};

export default function TermsOfServicePage() {
  return (
    <>
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

          <header className="max-w-3xl mb-12">
            <span className="inline-block text-xs font-mono uppercase tracking-[0.2em] text-white/50 mb-3">
              CLIENT AGREEMENT
            </span>
            <h1 className="font-satoshi text-4xl sm:text-5xl font-bold text-white mb-4">
              Terms of Service
            </h1>
            <p className="text-white/60 text-base">
              Last updated: August 2026
            </p>
          </header>

          <article className="max-w-3xl space-y-8 text-white/80 font-sans text-base leading-relaxed">
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white font-satoshi flex items-center gap-2">
                <FileText className="w-5 h-5 text-amber-400" />
                1. Project Scope &amp; Proposals
              </h2>
              <p>
                All design, UI/UX, branding, and web development projects undertaken by Bipin Creates (Bipin Baral) are governed by a mutually agreed proposal outlining deliverable milestones, timeline expectations, and pricing.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white font-satoshi">
                2. Intellectual Property &amp; Ownership
              </h2>
              <p>
                Upon final project completion and full receipt of agreed payment, full ownership rights for custom final logos, brand designs, UI components, and code are transferred to the client. Bipin Creates retains the right to display completed work in portfolios and promotional materials unless a non-disclosure agreement (NDA) is requested prior to project kickoff.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white font-satoshi">
                3. Payment Terms &amp; Schedules
              </h2>
              <p>
                Standard project billing typically involves a 50% upfront deposit prior to work commencement, with the remaining balance due upon milestone completion or final deliverable approval before master file release.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white font-satoshi">
                4. Revision Policy
              </h2>
              <p>
                Each project scope includes standard revision rounds (typically 2-3 rounds) to refine chosen concepts. Additional out-of-scope feature requests or major design pivot requests after approval are billed at agreed hourly or fixed add-on rates.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white font-satoshi">
                5. Contact &amp; Questions
              </h2>
              <p>
                For any contract or service inquiry, reach out directly at:
              </p>
              <p className="font-mono text-sm text-amber-400">
                Email: bipincreates03@gmail.com | Phone: +977 9843506305
              </p>
            </section>
          </article>
        </Container>
      </main>

      <Footer />
    </>
  );
}
