"use client";

import React from "react";
import { DotMatrix } from "@/components/ui/dot-matrix";

export const PageBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-[#030014]">
      {/* Glowing radial gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] aspect-square rounded-full bg-purple-600/20 blur-[120px]" />
      <div className="absolute top-[40%] right-[-10%] w-[30%] aspect-square rounded-full bg-blue-600/20 blur-[100px]" />
      <div className="absolute bottom-[-10%] left-[20%] w-[50%] aspect-square rounded-full bg-pink-600/15 blur-[150px]" />

      {/* Large ghosted "BIPIN" wordmark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center opacity-[0.02]">
        <h1 className="text-[25vw] font-bold font-satoshi tracking-tighter text-white select-none whitespace-nowrap">
          BIPIN
        </h1>
      </div>

      {/* Overlaying Dot Matrix */}
      <DotMatrix
        dotColor="#6366f1"
        glowColor="#8b5cf6"
        dotSize={1.5}
        spacing={30}
        waveSpeed={3}
      >
        <></>
      </DotMatrix>
    </div>
  );
};

export default PageBackground;
