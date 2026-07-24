import React from "react";
import dynamic from "next/dynamic";
import DockNavbar from "@/components/DockNavbar";
import PageBackground from "@/components/PageBackground";
import Hero from "@/components/Hero";
import PortfolioGrid from "@/components/PortfolioGrid";

// Dynamic imports for below-the-fold components
const About = dynamic(() => import("@/components/About"));
const Services = dynamic(() => import("@/components/Services"));
const Experience = dynamic(() => import("@/components/Experience"));
const Testimonials = dynamic(() => import("@/components/Testimonials"));
const CTA = dynamic(() => import("@/components/CTA"));
const Footer = dynamic(() => import("@/components/Footer"));
const RecentWorksSlider = dynamic(() => import("@/components/RecentWorksSlider"));

export default function Home() {
  return (
    <>
      {/* Bottom Dock Navbar */}
      <DockNavbar />

      {/* Deep Space Background */}
      <PageBackground />

      <main className="relative z-10 flex-1 flex flex-col w-full bg-transparent overflow-x-hidden">
        {/* Hero Section */}
        <Hero />

        {/* Recent Works / Projects */}
        <PortfolioGrid />

        {/* About Section */}
        <About />

        {/* Recent Works Slider */}
        <RecentWorksSlider />

        {/* Design Services */}
        <Services />

        {/* Work History / Experience */}
        <Experience />

        {/* Client Reviews / Testimonials */}
        <Testimonials />

        {/* Available For Work / CTA */}
        <CTA />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
