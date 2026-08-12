"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface BackToTopProps {
  className?: string;
  variant?: "floating" | "static";
}

export const BackToTop: React.FC<BackToTopProps> = ({ 
  className = "", 
  variant = "floating" 
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const baseClasses = "z-50 flex items-center justify-center rounded-full bg-amber-500 hover:bg-amber-400 text-neutral-900 shadow-lg shadow-amber-500/20 backdrop-blur-sm border border-amber-400/50 transition-colors duration-300 group focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-[#080811]";
  
  const floatingClasses = "fixed bottom-24 right-4 w-10 h-10 sm:bottom-28 sm:right-6 sm:w-12 sm:h-12";
  const staticClasses = "w-full h-12 mt-6 gap-2 font-medium text-sm";

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20, scale: variant === "floating" ? 0.8 : 1 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: variant === "floating" ? 0.8 : 1 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          className={`${baseClasses} ${variant === "floating" ? floatingClasses : staticClasses} ${className}`}
          aria-label="Back to top"
        >
          {variant === "static" && <span>Back to Top</span>}
          <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
