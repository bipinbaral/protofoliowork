"use client";

import React, { useEffect, useState, useRef } from "react";
import { Container } from "./ui/Container";
import { stats } from "@/data/testimonials";
import { useInView } from "framer-motion";

const AnimatedCounter = ({ endValue, suffix }: { endValue: number, suffix: string }) => {
  // Initialize with real endValue so server-rendered HTML contains real numbers
  const [count, setCount] = useState(endValue);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = endValue / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= endValue) {
          setCount(endValue);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, endValue]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
};

export const Stats: React.FC = () => {
  return (
    <div className="w-full mt-20 pt-12">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {stats.map((stat, i) => {
            // Parse target number and suffix (e.g., "180+" -> 180, "+")
            const match = stat.value.match(/(\d+)(.*)/);
            const num = match ? parseInt(match[1], 10) : 0;
            const suffix = match ? match[2] : "";

            return (
              <div
                key={i}
                className="flex flex-col items-center p-6 rounded-2xl border border-white/[0.02] bg-white/[0.005] hover:bg-white/[0.015] transition-all duration-300"
              >
                <span className="font-satoshi text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-2 text-gold">
                  {num > 0 ? <AnimatedCounter endValue={num} suffix={suffix} /> : stat.value}
                </span>
                <span className="font-mono text-xs uppercase tracking-wider text-white/70 max-w-[200px]">
                  {stat.label}
                </span>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};
export default Stats;
