"use client";

import React, { useState } from "react";
import { Container } from "./ui/Container";
import { 
  Send, 
  CheckCircle2,
  ArrowUp,
  Sparkles
} from "lucide-react";

export const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
    }
  };

  const handleScrollTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const exploreLinks = [
    { label: "Home", href: "#" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Services", href: "#services" },
    { label: "Experience", href: "#experience" },
  ];

  const connectLinks = [
    { label: "Process", href: "#services" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Tech Stack", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
    { label: "Licenses", href: "#" },
  ];

  return (
    <footer className="relative w-full bg-gradient-to-b from-[#080811] via-[#06060c] to-[#040407] border-t border-white/10 overflow-hidden">
      {/* Subtle top glow to blend seamlessly with the section above */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-amber-500/30 to-transparent pointer-events-none" />

      <Container className="pt-16 lg:pt-24 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand & Connect Section (lg:col-span-5) */}
          <div className="lg:col-span-5 flex flex-col items-start pr-0 lg:pr-8">
            {/* Logo & Brand Name */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 via-yellow-400 to-amber-300 flex items-center justify-center font-satoshi font-bold text-xl text-neutral-900 shadow-lg shadow-amber-500/20">
                B
              </div>
              <span className="font-satoshi font-bold text-2xl text-white tracking-tight">
                Bipin Baral
              </span>
            </div>

            {/* Tagline */}
            <p className="text-white/60 text-base leading-relaxed mb-6 max-w-md">
              Crafting impactful Graphics, UI/UX, Website, and Motion Designs that elevate brands and digital experiences.
            </p>

            {/* Contact Info */}
            <div className="flex flex-col gap-2 mb-8">
              <a href="mailto:bipincreates03@gmail.com" className="text-white/60 hover:text-white transition-colors text-sm">
                bipincreates03@gmail.com
              </a>
              <a href="https://wa.me/9779843506305" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors text-sm">
                WhatsApp: +977 9843506305
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {/* GitHub */}
              <a
                href="https://github.com/bipinbaral"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-11 h-11 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-white/60 hover:text-neutral-200 hover:border-neutral-600 hover:bg-white/10 hover:-translate-y-1.5 transition-all duration-300 shadow-sm"
              >
                <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>
              {/* Facebook */}
              <a
                href="https://facebook.com/bipincreates"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-11 h-11 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-white/60 hover:text-[#1877F2] hover:border-[#1877F2]/40 hover:bg-[#1877F2]/10 hover:-translate-y-1.5 transition-all duration-300 shadow-sm"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/bipinbaral/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-11 h-11 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-white/60 hover:text-[#0A66C2] hover:border-[#0A66C2]/40 hover:bg-[#0A66C2]/10 hover:-translate-y-1.5 transition-all duration-300 shadow-sm"
              >
                <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="https://www.instagram.com/bipinlogs"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-11 h-11 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-white/60 hover:text-[#E4405F] hover:border-[#E4405F]/40 hover:bg-[#E4405F]/10 hover:-translate-y-1.5 transition-all duration-300 shadow-sm"
              >
                <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Nav Links (lg:col-span-4) */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8">
            {/* Explore */}
            <div>
              <h4 className="font-satoshi font-semibold text-sm tracking-wider uppercase text-white/90 mb-5">
                Explore
              </h4>
              <ul className="space-y-3">
                {exploreLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="group relative inline-block text-sm text-white/60 hover:text-white transition-colors duration-200"
                    >
                      <span>{link.label}</span>
                      <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gradient-to-r from-amber-400 to-yellow-300 transition-all duration-300 ease-out group-hover:w-full" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect / Company */}
            <div>
              <h4 className="font-satoshi font-semibold text-sm tracking-wider uppercase text-white/90 mb-5">
                Connect
              </h4>
              <ul className="space-y-3">
                {connectLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="group relative inline-block text-sm text-white/60 hover:text-white transition-colors duration-200"
                    >
                      <span>{link.label}</span>
                      <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gradient-to-r from-amber-400 to-yellow-300 transition-all duration-300 ease-out group-hover:w-full" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter (lg:col-span-3) */}
          <div className="lg:col-span-3 flex flex-col justify-start">
            <h4 className="font-satoshi font-semibold text-sm tracking-wider uppercase text-white/90 mb-5">
              Stay in the loop
            </h4>
            <p className="text-white/60 text-sm mb-5 leading-relaxed">
              Get the latest design insights and project updates delivered to your inbox.
            </p>

            {isSubscribed ? (
              <div className="rounded-xl bg-emerald-500/10 border border-emerald-500/30 p-4 flex items-center gap-3 text-emerald-400 text-sm font-medium animate-fadeIn shadow-lg shadow-emerald-500/10">
                <CheckCircle2 className="w-5 h-5 shrink-0" />
                <span>You&apos;re subscribed!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-white/40 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all duration-200"
                />
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-neutral-900 font-semibold text-sm transition-all duration-200 shadow-md shadow-amber-500/20 active:scale-[0.98]"
                >
                  <span>Subscribe</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Strip: Copyright, Legal, Looping Marquee */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left: Copyright & Legal */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-sm text-white/50">
            <span>&copy; {new Date().getFullYear()} Bipin Baral. All rights reserved.</span>
            <div className="hidden sm:flex items-center gap-4">
              <span className="text-white/20">â€¢</span>
              {legalLinks.slice(0, 2).map((link) => (
                <a key={link.label} href={link.href} className="hover:text-white transition-colors">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right: Looping Marquee Ticker & Back to top */}
          <div className="flex items-center gap-8">
            <div className="hidden md:block relative max-w-[200px] overflow-hidden mask-gradient">
              <div className="animate-marquee-infinite text-xs font-mono font-medium tracking-widest text-white/70 uppercase whitespace-nowrap select-none">
                <span className="mx-3 flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-amber-400 inline" /> DESIGN
                  <span className="text-amber-500/50">â€¢</span> DEVELOP
                </span>
                <span className="mx-3 flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-amber-400 inline" /> DESIGN
                  <span className="text-amber-500/50">â€¢</span> DEVELOP
                </span>
                <span className="mx-3 flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-amber-400 inline" /> DESIGN
                  <span className="text-amber-500/50">â€¢</span> DEVELOP
                </span>
              </div>
            </div>

            <a
              href="#"
              onClick={handleScrollTop}
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/[0.05] border border-white/10 hover:bg-white/10 hover:border-white/20 text-white transition-all duration-300 group"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>

        </div>
      </Container>
    </footer>
  );
};

export default Footer;
