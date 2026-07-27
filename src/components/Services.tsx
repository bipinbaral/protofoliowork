"use client";

import React from "react";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";
import { AnimatedWrapper } from "./ui/AnimatedWrapper";
import { Button } from "./ui/Button";
import { FaCalendarAlt, FaEye } from "react-icons/fa";
import { services, secondaryServices } from "@/data/services";
import { Award, Box, PenTool, Layout, Video, Globe } from "lucide-react";

export const Services: React.FC = () => {
  // Map icons to services
  const getIcon = (id: string) => {
    switch (id) {
      case "brand-identity":
        return <Award className="w-6 h-6 text-gold" />;
      case "package-design":
        return <Box className="w-6 h-6 text-gold" />;
      case "graphics-design":
        return <PenTool className="w-6 h-6 text-gold" />;
      case "ui-ux-design":
        return <Layout className="w-6 h-6 text-gold" />;
      case "motion-graphics":
        return <Video className="w-6 h-6 text-gold" />;
      case "website-design":
        return <Globe className="w-6 h-6 text-gold" />;
      default:
        return <Award className="w-6 h-6 text-gold" />;
    }
  };

  return (
    <section id="services" className="section-padding bg-transparent border-t border-white/5">
      <Container>
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-8">
            <SectionHeading
              label="Design services"
              title="Services"
              subtitle="Helping businesses standout with brand identity packaging that captivates and converts effectively."
              className="!mb-0"
            />
          </div>
          <div className="lg:col-span-4 flex flex-col sm:flex-row gap-4 lg:justify-end">
            <Button variant="primary" href="#contact" className="w-full sm:w-auto px-8 py-3.5 sm:py-3 min-h-[44px]">
              <span className="flex items-center gap-2"><FaCalendarAlt className="w-4 h-4 text-background" /> Book a Free Call</span>
            </Button>
            <Button variant="secondary" href="#projects" className="w-full sm:w-auto px-8 py-3.5 sm:py-3 min-h-[44px]">
              <span className="flex items-center gap-2"><FaEye className="w-4 h-4" /> See Projects</span>
            </Button>
          </div>
        </div>

        {/* Core Services Grid */}
        <AnimatedWrapper type="stagger" delay={0.08} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {services.map((service, i) => (
            <AnimatedWrapper
              key={service.id}
              type="slideUp"
              delay={i * 0.05}
              className="flex flex-col p-6 sm:p-8 rounded-3xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] hover:border-white/10 transition-all duration-300 group"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white/5 border border-white/5 group-hover:border-gold/20 group-hover:bg-gold/5 transition-colors duration-300 mb-6">
                {getIcon(service.id)}
              </div>
              <h3 className="font-satoshi text-2xl font-bold text-white mb-3 group-hover:text-gold transition-colors duration-300">
                {service.title}
              </h3>
              <p className="font-sans text-sm text-white/60 leading-relaxed font-light flex-1">
                {service.description}
              </p>
            </AnimatedWrapper>
          ))}
        </AnimatedWrapper>

        {/* Secondary Capabilities List */}
        <div className="border-t border-white/5 pt-12">
          <AnimatedWrapper type="slideUp" delay={0.2} className="flex flex-col items-center">
            <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-white/35 mb-6">
              Secondary Capabilities & Extras
            </span>
            <div className="flex flex-wrap justify-center gap-2 max-w-4xl">
              {secondaryServices.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-full text-xs font-sans text-white/55 bg-white/[0.01] border border-white/5 hover:border-white/10 hover:text-white transition-all duration-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </AnimatedWrapper>
        </div>


      </Container>
    </section>
  );
};
export default Services;
