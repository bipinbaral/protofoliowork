import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, CheckCircle2, HelpCircle, ArrowUpRight } from "lucide-react";
import DockNavbar from "@/components/DockNavbar";
import PageBackground from "@/components/PageBackground";
import Footer from "@/components/Footer";
import { Container } from "@/components/ui/Container";
import AnimatedWrapper from "@/components/ui/AnimatedWrapper";
import { Button } from "@/components/ui/Button";
import { getServiceBySlug, servicesData } from "@/data/serviceData";
import { SITE_URL, SITE_NAME } from "@/lib/constants";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return servicesData.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return { title: `Service | ${SITE_NAME}` };
  }

  const url = `${SITE_URL}/services/${slug}`;

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url,
      siteName: SITE_NAME,
      type: "website",
      images: [
        {
          url: "/images/work-with-bipin.png",
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: service.metaTitle,
      description: service.metaDescription,
      images: ["/images/work-with-bipin.png"],
    },
    alternates: {
      canonical: url,
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
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
          {/* Back Navigation */}
          <Link
            href="/#services"
            className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm font-medium mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> All Services
          </Link>

          {/* Hero Section */}
          <AnimatedWrapper type="slideUp" className="max-w-4xl mb-16">
            <span className="inline-block text-xs font-mono uppercase tracking-[0.25em] text-white/50 border border-white/10 px-4 py-1.5 rounded-full bg-white/5 mb-6">
              SERVICE OFFERING
            </span>
            <h1 className="font-satoshi text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-6 leading-tight">
              {service.h1Title}
            </h1>
            <p className="text-white/70 text-lg sm:text-xl leading-relaxed font-sans font-light">
              {service.intro}
            </p>
          </AnimatedWrapper>

          {/* Benefits & Deliverables Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {/* Why Work With Me */}
            <AnimatedWrapper type="fadeIn" delay={0.1} className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
              <h2 className="font-satoshi text-2xl font-bold text-white mb-6">
                Key Advantages
              </h2>
              <ul className="space-y-4">
                {service.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/80 font-sans text-base">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </AnimatedWrapper>

            {/* Deliverables */}
            <AnimatedWrapper type="fadeIn" delay={0.2} className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
              <h2 className="font-satoshi text-2xl font-bold text-white mb-6">
                What You Get
              </h2>
              <ul className="space-y-4">
                {service.deliverables.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/80 font-sans text-base">
                    <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </AnimatedWrapper>
          </div>

          {/* Portfolio Examples */}
          <section className="mb-20">
            <div className="mb-10">
              <span className="text-xs font-mono uppercase tracking-widest text-white/50 block mb-2">
                PORTFOLIO SHOWCASE
              </span>
              <h2 className="font-satoshi text-3xl sm:text-4xl font-bold text-white">
                Featured {service.title} Work
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {service.portfolioExamples.map((item, idx) => (
                <div
                  key={idx}
                  className="group rounded-2xl overflow-hidden bg-white/[0.03] border border-white/10 flex flex-col"
                >
                  <div className="relative w-full aspect-[16/10] overflow-hidden bg-black/40">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-xs font-mono text-white/50 uppercase block mb-2">
                        {item.category}
                      </span>
                      <h3 className="font-sans text-xl font-bold text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-white/60 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-20 max-w-4xl">
            <div className="mb-10 flex items-center gap-3">
              <HelpCircle className="w-8 h-8 text-purple-400" />
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-white/50 block mb-1">
                  GOT QUESTIONS?
                </span>
                <h2 className="font-satoshi text-3xl sm:text-4xl font-bold text-white">
                  Frequently Asked Questions
                </h2>
              </div>
            </div>

            <div className="space-y-6">
              {service.faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md"
                >
                  <h3 className="font-sans text-lg font-bold text-white mb-3 flex items-start gap-2">
                    <span className="text-purple-400">Q:</span> {faq.question}
                  </h3>
                  <p className="text-white/70 text-base leading-relaxed pl-6 font-sans">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Box */}
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-purple-950/40 via-black to-pink-950/40 border border-white/15 text-center flex flex-col items-center">
            <h2 className="font-satoshi text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Start Your {service.title} Project?
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mb-8">
              Let&apos;s discuss your vision and create compelling designs tailored to your business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="accent" href="/#contact">
                <span className="flex items-center gap-2">
                  Get a Free Consultation <ArrowUpRight className="w-4 h-4" />
                </span>
              </Button>
              <Button variant="secondary" href="https://wa.me/9779843506305">
                Message on WhatsApp
              </Button>
            </div>
          </div>
        </Container>
      </main>

      <Footer />
    </>
  );
}
