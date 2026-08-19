import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import DockNavbar from "@/components/DockNavbar";
import PageBackground from "@/components/PageBackground";
import Footer from "@/components/Footer";
import { Container } from "@/components/ui/Container";
import { SITE_URL, SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Privacy Policy | ${SITE_NAME}`,
  description: `Privacy policy for ${SITE_NAME} portfolio and client services in Kathmandu, Nepal.`,
  alternates: {
    canonical: `${SITE_URL}/privacy-policy`,
  },
  openGraph: {
    title: `Privacy Policy | ${SITE_NAME}`,
    description: `Privacy policy for ${SITE_NAME} portfolio and client services in Kathmandu, Nepal.`,
    url: `${SITE_URL}/privacy-policy`,
    siteName: SITE_NAME,
    type: "website",
    images: ["/images/work-with-bipin.png"],
  },
};

export default function PrivacyPolicyPage() {
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
              LEGAL INFORMATION
            </span>
            <h1 className="font-satoshi text-4xl sm:text-5xl font-bold text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-white/60 text-base">
              Last updated: August 2026
            </p>
          </header>

          <article className="max-w-3xl space-y-8 text-white/80 font-sans text-base leading-relaxed">
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white font-satoshi flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                1. Overview &amp; Data Collection
              </h2>
              <p>
                Bipin Creates (Bipin Baral) respects your privacy. When you contact me via website forms, email, or WhatsApp, or subscribe to the newsletter, I collect only the necessary information required to communicate with you and deliver requested graphic design, UI/UX, or web development services.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white font-satoshi">
                2. How Your Data Is Used
              </h2>
              <p>
                Your personal details (such as name, email address, phone number, or project brief details) are strictly used for project communication, invoicing, and delivering services. I do not sell, rent, or trade your personal data to third parties under any circumstances.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white font-satoshi">
                3. Newsletter Subscription
              </h2>
              <p>
                If you opt in to the email subscription form in the footer, your email address is stored securely to send occasional design insights, case studies, or service updates. You may unsubscribe at any time by replying or using the unsubscribe link.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white font-satoshi">
                4. Cookies &amp; Analytics
              </h2>
              <p>
                This portfolio website uses standard, non-intrusive performance analytics to measure website traffic and improve user experience. No sensitive user tracking or ad profiling cookies are deployed.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white font-satoshi">
                5. Contact Information
              </h2>
              <p>
                If you have any questions regarding this Privacy Policy, please contact me directly at:
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
