"use client";

import React, { useEffect, useRef } from "react";

export const PageBackground: React.FC = () => {
  const orb1Ref = useRef<HTMLDivElement>(null);
  const orb2Ref = useRef<HTMLDivElement>(null);
  const orb3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let rafId: number;
    let currentX = 0;
    let currentY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (e: MouseEvent) => {
      // Normalize to -1..1
      targetX = (e.clientX / window.innerWidth - 0.5) * 2;
      targetY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    const animate = () => {
      // Smooth lerp
      currentX += (targetX - currentX) * 0.05;
      currentY += (targetY - currentY) * 0.05;

      if (orb1Ref.current) {
        orb1Ref.current.style.transform = `translate(${currentX * -40}px, ${currentY * -40}px)`;
      }
      if (orb2Ref.current) {
        orb2Ref.current.style.transform = `translate(${currentX * 30}px, ${currentY * 30}px)`;
      }
      if (orb3Ref.current) {
        orb3Ref.current.style.transform = `translate(${currentX * 20}px, ${currentY * 20}px) translate(-50%, -50%)`;
      }
      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMouseMove);
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-0 overflow-hidden pointer-events-none"
      style={{
        background:
          "radial-gradient(ellipse at top, #06152d 0%, #031021 15%, #020b18 35%, #01050f 65%, #000308 100%)",
      }}
    >
      {/* Top Left Glow — moves opposite to mouse */}
      <div
        ref={orb1Ref}
        className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full bg-blue-600/10 blur-[180px] transition-transform"
        style={{ willChange: "transform" }}
      />

      {/* Bottom Right Glow — moves with mouse */}
      <div
        ref={orb2Ref}
        className="absolute -bottom-52 -right-40 w-[650px] h-[650px] rounded-full bg-sky-500/10 blur-[180px]"
        style={{ willChange: "transform" }}
      />

      {/* Center Glow — subtle drift */}
      <div
        ref={orb3Ref}
        className="absolute left-1/2 top-1/2 w-[800px] h-[800px] rounded-full bg-indigo-500/5 blur-[220px]"
        style={{ willChange: "transform" }}
      />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0"
        style={{
          opacity: 0.2,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Noise Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          mixBlendMode: "overlay",
        }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle, transparent 30%, rgba(0,0,0,0.35) 75%, rgba(0,0,0,0.8) 100%)",
        }}
      />
    </div>
  );
};

export default PageBackground;
