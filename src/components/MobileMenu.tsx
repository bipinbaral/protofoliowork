"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/Button";

interface NavLink {
  label: string;
  href: string;
}

interface MobileMenuProps {
  navLinks: NavLink[];
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ navLinks, onClose }) => {
  const containerVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.08,
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="fixed inset-x-0 top-[70px] z-45 glass flex flex-col p-6 border-b border-white/10 md:hidden bg-[#0d0d0dd9]"
    >
      <div className="flex flex-col gap-4">
        {navLinks.map((link) => (
          <motion.a
            key={link.label}
            variants={itemVariants}
            href={link.href}
            onClick={onClose}
            className="font-sans text-lg text-white/80 hover:text-white py-2 border-b border-white/5"
          >
            {link.label}
          </motion.a>
        ))}
        <motion.div variants={itemVariants} className="pt-4 flex flex-col">
          <Button variant="secondary" href="#contact" onClick={onClose} className="w-full">
            Get Template
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};
export default MobileMenu;
