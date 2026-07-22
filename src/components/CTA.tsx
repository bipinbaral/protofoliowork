"use client";

import React from "react";
import { Container } from "./ui/Container";
import { ArrowUpRight, FileText, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export const CTA: React.FC = () => {
  return (
    <section id="contact" className="relative pt-12 pb-0 bg-transparent overflow-hidden">
      <Container>
        {/* Full-width dark gradient card with rounded top corners */}
        <div className="relative rounded-t-[2rem] sm:rounded-t-[2.5rem] border-t border-x border-white/10 bg-gradient-to-b from-[#0e0a1f] via-[#0d0d1a] to-[#080811] p-8 sm:p-14 lg:p-20 overflow-hidden shadow-2xl">
          
          {/* Floating background purple/blue/pink orbs */}
          <div className="absolute -top-24 left-1/4 w-72 h-72 rounded-full bg-purple-600/30 blur-[90px] pointer-events-none animate-orb-1" />
          <div className="absolute top-1/3 -right-16 w-80 h-80 rounded-full bg-sky-500/25 blur-[100px] pointer-events-none animate-orb-2" />
          <div className="absolute -bottom-20 left-1/3 w-96 h-96 rounded-full bg-pink-500/20 blur-[110px] pointer-events-none animate-orb-3" />
          
          {/* Ambient Grid overlay pattern for depth */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

          {/* Banner Content */}
          <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
            
            {/* "Open to opportunities" pulsing badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.06] backdrop-blur-md border border-white/15 mb-8 shadow-inner select-none"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
              </span>
              <span className="text-xs font-mono font-medium tracking-wide uppercase text-emerald-300">
                Open for Work
              </span>
            </motion.div>

            {/* Two CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
            >
              {/* Start a Project (solid violet) */}
              <a
                href="mailto:bipincreates03@gmail.com?subject=Let's%20Start%20a%20Project"
                className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-medium text-sm transition-all duration-300 shadow-[0_0_25px_rgba(124,58,237,0.4)] hover:shadow-[0_0_35px_rgba(139,92,246,0.6)] hover:scale-[1.03] active:scale-[0.98]"
              >
                <Sparkles className="w-4 h-4 text-violet-200 group-hover:rotate-12 transition-transform duration-300" />
                <span>Start a Project</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              {/* View Resume (frosted glass) */}
              <a
                href="https://drive.google.com/file/d/1vN5b82Y_31hL5g8"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-white/10 hover:bg-white/15 text-white font-medium text-sm border border-white/20 hover:border-white/35 backdrop-blur-md transition-all duration-300 shadow-lg hover:scale-[1.03] active:scale-[0.98]"
              >
                <FileText className="w-4 h-4 text-white/80 group-hover:text-white transition-colors duration-300" />
                <span>View Resume</span>
                <ArrowUpRight className="w-4 h-4 text-white/60 transition-transform duration-300 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </motion.div>

          </div>
        </div>
      </Container>
    </section>
  );
};

export default CTA;
