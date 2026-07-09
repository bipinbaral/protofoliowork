"use client";

import React from "react";
import { Container } from "./ui/Container";
import { Button } from "./ui/Button";
import { AnimatedWrapper } from "./ui/AnimatedWrapper";
import { Mail, Calendar } from "lucide-react";

export const CTA: React.FC = () => {
  return (
    <section id="contact" className="section-padding relative overflow-hidden bg-transparent">
      {/* Decorative glows */}
      <div className="absolute bottom-[-30%] left-10 w-[50%] aspect-square rounded-full bg-white/[0.01] blur-[150px] pointer-events-none" />
      <div className="absolute top-[-30%] right-10 w-[50%] aspect-square rounded-full bg-white/[0.01] blur-[150px] pointer-events-none" />

      <Container>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <AnimatedWrapper type="slideUp" delay={0.1} className="flex flex-col items-center">
            
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-4.5 py-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 mb-8 select-none">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400">
                Available For Work
              </span>
            </div>

            {/* Main Headline */}
            <h2
              className="font-satoshi font-bold tracking-tight text-white leading-[1.1] mb-8 sm:mb-10 max-w-3xl px-2 sm:px-0"
              style={{ fontSize: "clamp(1.75rem, 5vw, 4.5rem)" }}
            >
              Curious about what we can create together? Let&apos;s bring something extraordinary to life!
            </h2>

            {/* CTA Action Controls */}
            <div className="flex flex-col gap-6 sm:gap-8 items-center justify-center mb-10 sm:mb-12 w-full max-w-sm sm:max-w-none px-4 sm:px-0">
              <Button variant="accent" href="https://wa.me/9843506305" className="w-full sm:w-auto px-10 py-4 group relative overflow-hidden transition-all duration-300">
                <span className="flex items-center gap-2 transition-transform duration-300 group-hover:-translate-y-12">
                  <Calendar className="w-4 h-4 text-background" /> Book a Free Call
                </span>
                <span className="flex items-center gap-2 absolute inset-0 justify-center translate-y-12 transition-transform duration-300 group-hover:translate-y-0 text-background font-medium">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437-9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.052 0C5.495 0 .16 5.333.158 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.332 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg> 9843506305
                </span>
              </Button>

              <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-4">
                {/* Behance */}
                <a href="https://behance.net/bipincreates" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors p-2 min-w-[44px] min-h-[44px] flex items-center justify-center">
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.546-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988H0V3.005h7.126c1.544 0 4.009.283 5.36 1.64 1.365 1.377 1.353 3.489-.01 5.044-1.182 1.35-3.004 1.456-3.804 1.488 1.838.164 4.397 1.156 4.397 4.145 0 3.037-2.617 4.666-6.603 4.666zm-3.966-5.88h3.332c1.788 0 3.197-.577 3.197-2.585 0-2.46-2.195-2.261-3.235-2.261H2.5v4.846zm0-7.391v4.992h3.181c1.196 0 2.76-.23 2.76-2.238 0-2.316-2.128-2.754-3.568-2.754H2.5z"/></svg>
                </a>
                <span className="w-px h-6 bg-white/10"></span>
                {/* X / Twitter */}
                <a href="https://x.com/" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors p-2 min-w-[44px] min-h-[44px] flex items-center justify-center">
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
                <span className="w-px h-6 bg-white/10"></span>
                {/* Email */}
                <a href="mailto:bipincreates03@gmail.com" className="text-white/50 hover:text-white transition-colors p-2 min-w-[44px] min-h-[44px] flex items-center justify-center">
                  <Mail className="w-6 h-6" />
                </a>
                <span className="w-px h-6 bg-white/10"></span>
                {/* Dribbble */}
                <a href="https://dribbble.com/" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors p-2 min-w-[44px] min-h-[44px] flex items-center justify-center">
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.392-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.926 2.166 6.29 2.166 1.42 0 2.77-.31 4.006-.816zm-10.677-2.76c.25-.422 2.816-4.525 8.282-6.672-.347-.796-.73-1.58-1.13-2.344-6.674 2.01-11.233 2.015-11.456 2.012-.046.613-.07 1.23-.07 1.86 0 2.16.71 4.15 1.905 5.764zm-.85-8.48c.196 0 4.29-.02 10.364-2.11-.326-.64-.672-1.27-1.04-1.88-5.34.88-9.45 2.59-9.84 2.76.22-1.26.75-2.42 1.51-3.41zm10.23-4.103c-1.85-.75-3.92-1.16-6.07-1.16-1.54 0-3.01.29-4.36.81 4.6 1.79 9.51 1.05 9.8 1.01-.29-1.25-.66-2.45-1.12-3.56zm1.38 4.09c.33.02 4.35.34 7.6-1.85-.92-1.82-2.4-3.3-4.17-4.27-.4.99-.85 2.17-1.34 3.49-.6.18-1.4.4-2.09.63zm.97 4.14c4.13-.57 7.02-.15 7.33-.11-.4-2.31-1.63-4.33-3.38-5.74-3.4 1.94-7.23 1.72-7.55 1.7.35.73.68 1.47.98 2.22.84-.11 1.7-.17 2.62-.07z"/></svg>
                </a>
              </div>
            </div>

          </AnimatedWrapper>
        </div>
      </Container>
    </section>
  );
};
export default CTA;
