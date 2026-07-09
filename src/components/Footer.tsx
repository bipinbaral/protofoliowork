"use client";

import React from "react";
import { Container } from "./ui/Container";
import { ArrowUp } from "lucide-react";

export const Footer: React.FC = () => {
  const socialLinks = [
    { label: "Facebook", href: "https://www.facebook.com/bipincreates" },
    { label: "Dribbble", href: "https://dribbble.com/" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/bipinbaral/" },
    { label: "Instagram", href: "https://instagram.com/bipincreates1" },
  ];

  const handleScrollTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-transparent border-t border-white/5 py-12">
      <Container className="flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Side: Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-2 font-sans text-xs text-white/45">
          <span>All rights reserved, &copy; {new Date().getFullYear()}</span>
          <span className="hidden sm:inline text-white/10">•</span>
          <span>
            Designed by Bipin Creates
          </span>
        </div>

        {/* Center: Social Links */}
        <div className="flex flex-wrap items-center justify-center gap-6">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-xs text-white/55 hover:text-white transition-colors duration-200"
            >
              {social.label}
            </a>
          ))}
        </div>

        {/* Right Side: Back to Top */}
        <a
          href="#"
          onClick={handleScrollTop}
          className="flex items-center gap-1.5 font-sans text-xs text-white/55 hover:text-white transition-all duration-200 group"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 text-gold" />
        </a>

      </Container>
    </footer>
  );
};
export default Footer;
