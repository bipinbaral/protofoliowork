"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

type ButtonVariant = "primary" | "secondary" | "accent" | "ghost";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "ref"> {
  variant?: ButtonVariant;
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  className = "",
  href,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-jakarta font-medium text-sm transition-all duration-300 rounded-full select-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/20 min-h-[44px]";
  
  const variants = {
    primary:
      "bg-foreground text-background hover:bg-[#eaeaea] px-6 py-3 shadow-lg",
    secondary:
      "bg-transparent text-foreground border border-white/15 hover:bg-white/5 hover:border-white/25 px-6 py-3",
    accent:
      "bg-gradient-to-r from-yellow-400 to-amber-500 text-black hover:opacity-90 px-6 py-3 font-bold shadow-[0_0_15px_rgba(255,215,0,0.3)]",
    ghost:
      "bg-transparent text-foreground hover:bg-white/5 px-4 py-2",
  };

  const buttonContent = (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );

  if (href) {
    return (
      <a href={href} className="inline-block" target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined}>
        {buttonContent}
      </a>
    );
  }

  return buttonContent;
};
export default Button;
