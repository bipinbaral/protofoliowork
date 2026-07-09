"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Container } from "./ui/Container";
import { Button } from "./ui/Button";
import { MobileMenu } from "./MobileMenu";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "glass py-4 shadow-lg border-b border-white/5"
            : "bg-transparent py-6"
        }`}
      >
        <Container className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <span className="font-satoshi text-xl font-bold tracking-tight text-white">
              Bipin<span className="text-gold">.</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-sans text-sm text-white/70 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="secondary" href="#contact" className="!py-2.5 !px-5 text-xs">
              Contact Me
            </Button>
          </div>

          {/* Mobile hamburger menu */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex md:hidden p-2 text-white/80 hover:text-white focus:outline-none cursor-pointer"
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </Container>
      </motion.header>

      {/* Mobile menu container */}
      <AnimatePresence>
        {isOpen && (
          <MobileMenu
            navLinks={navLinks}
            onClose={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};
export default Navbar;
