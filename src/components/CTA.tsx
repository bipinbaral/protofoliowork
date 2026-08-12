"use client";

import React, { useState, useEffect } from "react";
import { Container } from "./ui/Container";
import { ArrowUpRight, FileText, Sparkles, X, Copy, CheckCircle2, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const CTA: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [copied, setCopied] = useState(false);

  const email = "bipincreates03@gmail.com";
  const subject = encodeURIComponent("Project Inquiry from [Company Name]");
  const bodyText = `Hello Bipin,

I hope you're doing well.

I'd love to discuss a project with you. Here are the details:

Company / Brand:
Project Type: (Logo Design / Branding / UI/UX / Website / Development / Motion Graphics / Other)

Project Brief:
(Please describe your project, goals, and any references.)

Budget (Optional):
Timeline (Optional):

Looking forward to hearing from you.

Best Regards,

[Your Name]`;
  const body = encodeURIComponent(bodyText);
  const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;

  const handleStartProject = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = mailtoLink;
    
    const timer = setTimeout(() => {
      if (!document.hidden) {
        setShowModal(true);
      }
    }, 1500);

    const handleVisibilityChange = () => {
      if (document.hidden) {
        clearTimeout(timer);
      }
    };
    
    document.addEventListener("visibilitychange", handleVisibilityChange);
    
    setTimeout(() => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    }, 2000);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
              {/* Start a Project (whatsapp green) */}
              <a
                href={mailtoLink}
                onClick={handleStartProject}
                className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-medium text-sm transition-all duration-300 shadow-[0_0_25px_rgba(37,211,102,0.4)] hover:shadow-[0_0_35px_rgba(37,211,102,0.6)] hover:scale-[1.03] active:scale-[0.98]"
              >
                <Sparkles className="w-4 h-4 text-white/90 group-hover:rotate-12 transition-transform duration-300" />
                <span>Start a Project</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              {/* View Resume (frosted glass) */}
              <a
                href="https://drive.google.com/file/d/10IAFTYA3X-RZHH0BmGbzn_cXozm_n6uY/view?usp=sharing"
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

      {/* Fallback Modal */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-md bg-[#0e0a1f] border border-white/10 rounded-2xl p-6 shadow-2xl flex flex-col gap-6"
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-satoshi font-bold text-white">Contact Info</h3>
                <p className="text-sm text-white/60">It looks like a default email client isn't set up on this browser. You can reach out directly via email or WhatsApp.</p>
              </div>
              
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between p-4 rounded-xl bg-white/[0.03] border border-white/10">
                  <span className="text-sm text-white/90">{email}</span>
                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-medium transition-colors"
                  >
                    {copied ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    {copied ? "Copied" : "Copy Email"}
                  </button>
                </div>

                <a
                  href="https://wa.me/9779843506305"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-medium text-sm transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  Contact on WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CTA;
