import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SITE_URL, SITE_NAME } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bipin Creates (Bipin Baral) — Graphics, UI/UX Designer & Web Developer in Nepal",
  description: "Bipin Creates (Bipin Baral) is a Graphic Designer, UI/UX Expert, and Web Developer in Kathmandu, Nepal. Specializing in premium brand identities, logos, and high-performance web development.",
  metadataBase: new URL(SITE_URL),
  icons: {
    icon: [
      { url: "/images/logo-bipin-creates.png", type: "image/png" },
      { url: "/icon.png", type: "image/png" },
    ],
    shortcut: "/images/logo-bipin-creates.png",
    apple: "/images/logo-bipin-creates.png",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Bipin Creates (Bipin Baral) — Graphic Designer, UI/UX & Web Developer in Kathmandu, Nepal",
    description: "Graphic Designer and Web Developer in Kathmandu, Nepal crafting premium brand identities and digital experiences.",
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/work-with-bipin.png",
        width: 1200,
        height: 630,
        alt: "Work with Bipin Creates (Bipin Baral) — Graphic Designer & Web Developer in Nepal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bipin Creates (Bipin Baral) — Graphic Designer, UI/UX & Web Developer in Kathmandu, Nepal",
    description: "Graphic Designer and Web Developer in Kathmandu, Nepal crafting premium brand identities and digital experiences.",
    images: ["/images/work-with-bipin.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

import CustomCursor from "@/components/CustomCursor";
import BackToTop from "@/components/BackToTop";
import { Analytics } from "@vercel/analytics/next";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Bipin Baral",
    alternateName: "Bipin Creates",
    jobTitle: "Graphic Designer, UI/UX Designer & Web Developer",
    url: "https://www.baralbipin.com.np",
    image: "https://www.baralbipin.com.np/images/logo-bipin-creates.png",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kathmandu",
      addressCountry: "NP",
    },
    sameAs: [
      "https://facebook.com/bipincreates",
      "https://www.instagram.com/bipinlogs",
      "https://github.com/bipinbaral",
      "https://www.linkedin.com/in/bipinbaral/",
      "https://www.behance.net/bipinbaral",
      "https://wa.me/9779843506305",
    ],
  };

  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${jakarta.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://framerusercontent.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://framerusercontent.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground scroll-smooth">
        <CustomCursor />
        {children}
        <Analytics />
        <BackToTop className="xl:hidden" />
        <Analytics />
      </body>
    </html>
  );
}
