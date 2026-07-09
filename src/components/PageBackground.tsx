"use client";

import React from "react";

export const PageBackground: React.FC = () => {
  return (
    <div
      className="fixed inset-0 z-0 overflow-hidden pointer-events-none"
      style={{
        background:
          "radial-gradient(ellipse at top, #06152d 0%, #031021 15%, #020b18 35%, #01050f 65%, #000308 100%)",
      }}
    >
      {/* Top Left Glow */}
      <div className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full bg-blue-600/10 blur-[180px]" />

      {/* Bottom Right Glow */}
      <div className="absolute -bottom-52 -right-40 w-[650px] h-[650px] rounded-full bg-sky-500/10 blur-[180px]" />

      {/* Center Glow */}
      <div className="absolute left-1/2 top-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/5 blur-[220px]" />

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