"use client";

import React from "react";
import { CalendarDays, ArrowUpRight } from "lucide-react";
import BackToTop from "../BackToTop";

interface BookNowSidebarProps {
  variant?: "mobile" | "desktop";
}

function BookNowCard() {
  return (
    <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-[#1a1033]/80 to-[#0d0d0d]/90 p-6 overflow-hidden">
      <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-purple-500/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-8 -left-8 w-24 h-24 rounded-full bg-pink-500/15 blur-2xl pointer-events-none" />

      <div className="relative">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4">
          <CalendarDays className="w-5 h-5 text-white" />
        </div>

        <h3 className="font-satoshi text-lg font-bold text-white mb-2">
          Book a Session
        </h3>
        <p className="text-white/60 text-sm leading-relaxed mb-6">
          Ready to bring your brand to life? Schedule a free consultation
          and let&apos;s discuss your project.
        </p>

        <a
          href="https://wa.me/9779843506305"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-center gap-2 w-full py-3 px-5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 transition-opacity text-white text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
        >
          Book Now
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>

        <p className="mt-4 text-[10px] text-white/40 text-center font-mono">
          Free 30-min discovery call
        </p>
      </div>
    </div>
  );
}

export default function BookNowSidebar({ variant = "desktop" }: BookNowSidebarProps) {
  if (variant === "mobile") {
    return (
      <div className="xl:hidden my-10">
        <BookNowCard />
      </div>
    );
  }

  return (
    <aside className="hidden xl:block w-72 shrink-0 sticky top-24 self-start z-10">
      <BookNowCard />
      <BackToTop variant="static" />
    </aside>
  );
}
