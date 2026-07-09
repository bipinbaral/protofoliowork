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
  title: "Portfolite – Framer Portfolio Template",
  description: "Portfolite is a sleek and professionally designed portfolio template recreated in Next.js, built to help creatives and professionals showcase their work effortlessly. With its modern aesthetics and seamless functionality.",
  metadataBase: new URL("https://portfolite.framer.website/"),
  openGraph: {
    title: "Portfolite – Framer Portfolio Template",
    description: "Portfolite is a sleek and professionally designed portfolio template recreated in Next.js, built to help creatives and professionals showcase their work effortlessly.",
    url: "https://portfolite.framer.website/",
    siteName: "Portfolite",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://framerusercontent.com/images/95dUNcvR4MKvuWP9eFVbpV8No0.png",
        width: 1200,
        height: 630,
        alt: "Portfolite – Framer Portfolio Template Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolite – Framer Portfolio Template",
    description: "Portfolite is a sleek and professionally designed portfolio template recreated in Next.js, built to help creatives and professionals showcase their work effortlessly.",
    images: ["https://framerusercontent.com/images/95dUNcvR4MKvuWP9eFVbpV8No0.png"],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jakarta.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://framerusercontent.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://framerusercontent.com" />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground scroll-smooth">
        {children}
      </body>
    </html>
  );
}
