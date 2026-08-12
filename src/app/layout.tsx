import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

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
  title: "Bipin Baral — Graphic Designer, UI/UX & Web Developer in Nepal",
  description: "Bipin Baral is a Graphic Designer, UI/UX Expert, and Web Developer in Nepal. Specializing in premium brand identities, logos, and high-performance web development.",
  metadataBase: new URL("https://baralbipin.com.np"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Bipin Baral — Graphic Designer, UI/UX & Web Developer in Nepal",
    description: "Graphic Designer and Web Developer in Nepal crafting premium brand identities and digital experiences.",
    url: "https://baralbipin.com.np",
    siteName: "Bipin Baral",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/Logos.jpg",
        width: 1200,
        height: 630,
        alt: "Bipin Baral — Graphic Designer and Web Developer in Nepal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bipin Baral — Graphic Designer, UI/UX & Web Developer in Nepal",
    description: "Graphic Designer and Web Developer in Nepal crafting premium brand identities and digital experiences.",
    images: ["/images/Logos.jpg"],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${jakarta.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://framerusercontent.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://framerusercontent.com" />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground scroll-smooth">
        <CustomCursor />
        {children}
        <BackToTop className="xl:hidden" />
      </body>
    </html>
  );
}
