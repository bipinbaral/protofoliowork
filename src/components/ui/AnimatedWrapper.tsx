"use client";

import React from "react";
import { motion, HTMLMotionProps, Variants } from "framer-motion";

type AnimationType = "fadeIn" | "slideUp" | "slideDown" | "slideLeft" | "slideRight" | "scaleReveal" | "stagger";

interface AnimatedWrapperProps extends Omit<HTMLMotionProps<"div">, "ref"> {
  children: React.ReactNode;
  type?: AnimationType;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

export const AnimatedWrapper: React.FC<AnimatedWrapperProps> = ({
  children,
  type = "slideUp",
  delay = 0,
  duration = 0.6,
  className = "",
  once = true,
  ...props
}) => {
  const getVariants = (): Variants => {
    switch (type) {
      case "fadeIn":
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        };
      case "slideUp":
        return {
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 },
        };
      case "slideDown":
        return {
          hidden: { opacity: 0, y: -30 },
          visible: { opacity: 1, y: 0 },
        };
      case "slideLeft":
        return {
          hidden: { opacity: 0, x: 30 },
          visible: { opacity: 1, x: 0 },
        };
      case "slideRight":
        return {
          hidden: { opacity: 0, x: -30 },
          visible: { opacity: 1, x: 0 },
        };
      case "scaleReveal":
        return {
          hidden: { opacity: 0, scale: 0.95 },
          visible: { opacity: 1, scale: 1 },
        };
      case "stagger":
        return {
          hidden: {},
          visible: {
            transition: {
              staggerChildren: delay || 0.1,
            },
          },
        };
      default:
        return {};
    }
  };

  const variants = getVariants();

  if (type === "stagger") {
    return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once }}
        variants={variants}
        className={className}
        {...props}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
      variants={variants}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1], // premium custom easing
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};
export default AnimatedWrapper;
