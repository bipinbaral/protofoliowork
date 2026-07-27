"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-[60] transition-colors duration-500 ${
        isScrolled ? "bg-black/40 backdrop-blur-md border-b border-white/10 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="group flex items-center gap-2 relative">
          <span className="font-satoshi text-2xl font-bold bg-gradient-to-br from-white to-white/60 text-transparent bg-clip-text group-hover:from-purple-400 group-hover:to-pink-500 transition-all duration-300">
            Bipin Baral
          </span>
        </Link>

        <a
          href="https://wa.me/9779843506305"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:flex items-center justify-center px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 hover:border-white/30 transition-all text-white text-sm font-medium backdrop-blur-sm"
        >
          Let's Talk
        </a>
      </div>
    </motion.header>
  );
};
export default Header;
