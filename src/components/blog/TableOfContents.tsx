"use client";

import React, { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { TocHeading } from "@/lib/blog-types";

interface TableOfContentsProps {
  headings: TocHeading[];
  variant?: "mobile" | "desktop";
}

const SCROLL_OFFSET = 100;

function useReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return progress;
}

function TocList({
  headings,
  activeId,
  onNavigate,
}: {
  headings: TocHeading[];
  activeId: string;
  onNavigate: (id: string) => void;
}) {
  let sectionNumber = 0;

  return (
    <nav aria-label="Table of contents">
      <ul className="flex flex-col gap-0.5">
        {headings.map((heading) => {
          const isH2 = heading.level === 2;
          if (isH2) sectionNumber += 1;
          const number = isH2 ? sectionNumber : null;

          return (
            <li key={heading.id}>
              <a
                href={`#${heading.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(heading.id);
                }}
                className={`flex items-start gap-3 text-sm leading-snug transition-all duration-200 rounded-lg px-3 py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20 ${
                  heading.level === 3 ? "pl-9" : ""
                } ${
                  activeId === heading.id
                    ? "text-white bg-white/10 border-l-2 border-purple-400"
                    : "text-white/50 hover:text-white/80 border-l-2 border-transparent"
                }`}
              >
                {number !== null && (
                  <span
                    className={`shrink-0 w-6 h-6 rounded-md flex items-center justify-center text-[10px] font-mono font-bold ${
                      activeId === heading.id
                        ? "bg-purple-500/30 text-purple-200"
                        : "bg-white/5 text-white/40"
                    }`}
                  >
                    {String(number).padStart(2, "0")}
                  </span>
                )}
                {number === null && <span className="w-6 shrink-0" aria-hidden />}
                <span className="pt-0.5">{heading.text}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

function ProgressMeter({ progress }: { progress: number }) {
  return (
    <div className="mb-5">
      <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-white/40 mb-2">
        <span>Progress</span>
        <span>{Math.round(progress)}%</span>
      </div>
      <div className="h-1 rounded-full bg-white/10 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-[width] duration-150 ease-out rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}

export default function TableOfContents({
  headings,
  variant = "desktop",
}: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const progress = useReadingProgress();

  const h2Headings = headings.filter((h) => h.level === 2);

  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: `-${SCROLL_OFFSET}px 0px -60% 0px`,
        threshold: 0,
      }
    );

    const elements = headings
      .map((h) => document.getElementById(h.id))
      .filter(Boolean) as HTMLElement[];

    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, [headings]);

  const handleNavigate = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    const top =
      element.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET;
    window.scrollTo({ top, behavior: "smooth" });
    setMobileOpen(false);
    history.replaceState(null, "", `#${id}`);
  };

  if (headings.length === 0) return null;

  if (variant === "mobile") {
    return (
      <div className="xl:hidden mb-8">
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          className="w-full flex items-center justify-between px-4 py-3 rounded-2xl bg-white/[0.03] border border-white/10 text-white text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
        >
          <span>
            Table of Contents
            <span className="ml-2 text-white/40 font-mono text-xs">
              ({h2Headings.length} sections)
            </span>
          </span>
          <ChevronDown
            className={`w-4 h-4 text-white/60 transition-transform duration-300 ${
              mobileOpen ? "rotate-180" : ""
            }`}
          />
        </button>
        {mobileOpen && (
          <div className="mt-3 p-4 rounded-2xl bg-white/[0.03] border border-white/10">
            <ProgressMeter progress={progress} />
            <TocList
              headings={headings}
              activeId={activeId}
              onNavigate={handleNavigate}
            />
          </div>
        )}
      </div>
    );
  }

  return (
    <aside className="hidden xl:block w-56 shrink-0 sticky top-24 self-start z-10 max-h-[calc(100vh-6rem)] overflow-y-auto scrollbar-none pb-8">
      <p className="text-xs font-mono uppercase tracking-widest text-white/50 mb-4">
        Contents
      </p>
      <ProgressMeter progress={progress} />
      <TocList
        headings={headings}
        activeId={activeId}
        onNavigate={handleNavigate}
      />
      <p className="mt-4 text-[10px] font-mono text-white/30">
        {h2Headings.length} sections
      </p>
    </aside>
  );
}
