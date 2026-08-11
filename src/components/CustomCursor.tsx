"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import useCanvasCursor from "@/hooks/useCanvasCursor";

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [hoverText, setHoverText] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  // Initialize the canvas cursor effect
  useCanvasCursor();

  useEffect(() => {
    // Only show on non-touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setIsVisible(true);

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest("a, button, [data-cursor]");
      if (link) {
        setIsHovering(true);
        const cursorText = (link as HTMLElement).dataset.cursor || "";
        setHoverText(cursorText);
      } else {
        setIsHovering(false);
        setHoverText("");
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseover", onMouseOver);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver);
    };
  }, []);

  return (
    <>
      {/* Canvas for trailing cursor effect */}
      <canvas className="pointer-events-none fixed inset-0 z-[9997]" id="canvas" />

      {isVisible && (
        <>
          {/* Dot */}
          <motion.div
            className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
            animate={{ x: position.x - 4, y: position.y - 4 }}
            transition={{ type: "spring", stiffness: 700, damping: 28, mass: 0.3 }}
          />

          {/* Ring */}
          <motion.div
            className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998] border border-white/40 mix-blend-difference flex items-center justify-center overflow-hidden"
            animate={{
              x: position.x - (isHovering ? 36 : 18),
              y: position.y - (isHovering ? 36 : 18),
              width: isHovering ? 72 : 36,
              height: isHovering ? 72 : 36,
              backgroundColor: isHovering ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0)",
              backdropFilter: isHovering ? "blur(4px)" : "none",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30, mass: 0.5 }}
          >
            {hoverText && (
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-white text-[9px] font-mono uppercase tracking-widest text-center leading-tight px-1"
              >
                {hoverText}
              </motion.span>
            )}
          </motion.div>
        </>
      )}
    </>
  );
};

export default CustomCursor;
