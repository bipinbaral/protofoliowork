"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { Briefcase, Folder, BookOpen, Quote, Mail, ArrowUpRight, LucideIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { id: "home", label: "Home", href: "/", isLogo: true, color: "from-purple-500 to-pink-500" },
  { id: "services", label: "Services", href: "/#services", icon: Briefcase, color: "from-blue-400 to-cyan-400" },
  { id: "projects", label: "Projects", href: "/#projects", icon: Folder, color: "from-amber-400 to-orange-500" },
  { id: "blog", label: "Blog", href: "/blog", icon: BookOpen, color: "from-violet-400 to-purple-500" },
  { id: "testimonials", label: "Testimonials", href: "/#testimonials", icon: Quote, color: "from-green-400 to-emerald-500" },
  { id: "contact", label: "Contact", href: "/#contact", icon: Mail, color: "from-rose-400 to-red-500" },
];

interface NavItemType {
  id: string;
  label: string;
  href: string;
  isLogo?: boolean;
  icon?: LucideIcon;
  color: string;
}

interface DockItemProps {
  item: NavItemType;
  mouseX: ReturnType<typeof useMotionValue<number>>;
  activeSection: string;
}

function DockItem({ item, mouseX, activeSection }: DockItemProps) {
  const ref = useRef<HTMLDivElement>(null);

  // Calculate distance from mouse to the center of the icon
  const distance = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  // Scale and translate based on distance
  const scaleSync = useTransform(distance, [-150, 0, 150], [1, 1.5, 1]);
  const scale = useSpring(scaleSync, { mass: 0.1, stiffness: 150, damping: 12 });
  const ySync = useTransform(distance, [-150, 0, 150], [0, -15, 0]);
  const y = useSpring(ySync, { mass: 0.1, stiffness: 150, damping: 12 });

  const isActive = activeSection === item.id;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative flex flex-col items-center">
      {/* Tooltip */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.8 }}
            className="absolute -top-12 px-3 py-1.5 bg-black/80 backdrop-blur-md text-white text-xs rounded-lg whitespace-nowrap border border-white/10 shadow-xl z-50 font-sans pointer-events-none hidden sm:block"
          >
            {item.label}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        ref={ref}
        style={{ scale, y }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Link
          href={item.href}
          scroll={true}
          className={`relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-2xl transition-colors duration-300 ${isActive ? "bg-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.2)]" : "bg-white/[0.03] hover:bg-white/[0.08]"
            }`}
        >
          {item.isLogo ? (
            <span className="font-satoshi text-lg sm:text-xl font-bold bg-gradient-to-br from-purple-500 to-pink-500 text-transparent bg-clip-text">
              B
            </span>
          ) : (
            item.icon && <item.icon className={`w-4 h-4 sm:w-5 sm:h-5 transition-colors duration-300 ${isActive ? 'text-white' : 'text-white/60'}`} />
          )}

          {/* Active Gradient Fill (Subtle) */}
          {isActive && (
            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.color} opacity-20 pointer-events-none`} />
          )}
        </Link>
      </motion.div>

      {/* Active Dot */}
      <div className="h-2 flex items-center mt-1">
        {isActive && <div className="w-1 h-1 rounded-full bg-white shadow-[0_0_5px_rgba(255,255,255,0.8)]" />}
      </div>
    </div>
  );
}

export const DockNavbar: React.FC = () => {
  const pathname = usePathname();
  const mouseX = useMotionValue(-9999);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    if (pathname !== "/") {
      if (pathname.startsWith("/blog")) {
        setActiveSection("blog");
      } else if (pathname.startsWith("/projects") || pathname.startsWith("/portfolio")) {
        setActiveSection("projects");
      } else {
        setActiveSection("");
      }
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    const handleScroll = () => {
      if (window.scrollY < 200) {
        setActiveSection("home");
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  return (
    <div className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-50 pointer-events-none w-full max-w-full px-4 sm:px-0 flex justify-center">
      <div className="pointer-events-auto flex items-end gap-1.5 sm:gap-2 p-2 sm:p-3 rounded-[1.5rem] bg-black/40 sm:bg-black/20 backdrop-blur-[40px] saturate-[200%] border border-white/10 shadow-2xl"
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(-9999)}
      >
        {navItems.map((item) => (
          <DockItem key={item.id} item={item} mouseX={mouseX} activeSection={activeSection} />
        ))}

        {/* Separator */}
        <div className="hidden sm:block w-[1px] h-10 bg-white/10 mx-2 self-center rounded-full" />

        {/* Contact Me CTA */}
        <div className="hidden sm:flex relative flex-col items-center">
          <a
            href="https://wa.me/9779843506305"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center gap-2 h-12 px-5 ml-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 transition-opacity"
          >
            <span className="font-sans font-medium text-sm text-white whitespace-nowrap">Contact Me</span>
            <ArrowUpRight className="w-4 h-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            {/* Glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 blur-md opacity-40 group-hover:opacity-60 transition-opacity -z-10" />
          </a>
          <div className="h-2 flex items-center mt-1" />
        </div>
      </div>
    </div>
  );
};

export default DockNavbar;

