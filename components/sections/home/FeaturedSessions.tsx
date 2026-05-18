"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import FadeUp from "@/components/ui/FadeUp";

const sessions = [
  {
    id: 1,
    name: "The Williams Family",
    type: "Family · Mount Maunganui",
    caption: "An overcast morning that turned golden. Three kids, bare feet, and a soundtrack of laughing.",
    image: "/images/session-family-17.jpg",
  },
  {
    id: 2,
    name: "Artisans Roofing NZ",
    type: "Business · Brand Portraits",
    caption: "Their team in their actual workspace, not a blank backdrop. Real work, real people.",
    image: "/images/session-business-1.jpg",
  },
  {
    id: 3,
    name: "Mother's Day Minis",
    type: "Event · Tauranga",
    caption: "Twelve families, two hours at the beach, and one of the best days behind a camera.",
    image: "/images/mothers-day-4.jpg",
  },
];

const galleryImages = [
  { src: "/images/session-family-1.jpg",  alt: "Family session",        className: "col-span-2 row-span-2" },
  { src: "/images/session-event-1.jpg",   alt: "Event photography",     className: "col-span-1 row-span-1" },
  { src: "/images/session-business-1.jpg",alt: "Business portrait",     className: "col-span-1 row-span-1" },
  { src: "/images/session-family-4.jpg",  alt: "Family laughing",       className: "col-span-2 row-span-1" },
];

export default function FeaturedSessions() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="section-gap bg-elevated">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
        <FadeUp className="mb-12 lg:mb-14">
          <p className="eyebrow mb-3">Recent work</p>
          <h2 className="font-display text-[clamp(28px,3.5vw,44px)] font-medium text-ink leading-[1.15] tracking-tight"
            style={{ fontFamily: "var(--font-fraunces-loaded, var(--font-display))" }}>
            Moments worth having forever
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <FadeUp delay={0.1}>
            <div className="grid grid-cols-3 grid-rows-3 gap-2 aspect-[1/1]">
              {galleryImages.map((img, i) => (
                <div key={i} className={`${img.className} img-zoom overflow-hidden bg-surface`}>
                  <Image src={img.src} alt={img.alt} width={600} height={600} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </FadeUp>

          <FadeUp delay={0.2} className="flex flex-col">
            <div className="flex flex-col gap-1 mb-8">
              {sessions.map((s, i) => (
                <button key={s.id} onClick={() => setActiveIndex(i)}
                  className={`group text-left py-4 border-b border-border transition-colors ${i === activeIndex ? "border-terracotta" : "hover:border-ink-muted"}`}>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className={`text-[16px] font-semibold transition-colors mb-0.5 ${i === activeIndex ? "text-ink" : "text-ink-dim"}`}
                        style={{ fontFamily: "var(--font-inter-loaded, var(--font-body))" }}>{s.name}</p>
                      <p className="eyebrow" style={{ color: "var(--color-terracotta)" }}>{s.type}</p>
                    </div>
                    <ArrowRight size={16} className={`mt-1 shrink-0 transition-all ${i === activeIndex ? "text-terracotta" : "text-ink-muted opacity-0 group-hover:opacity-100"}`} />
                  </div>
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div key={activeIndex} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.3 }} className="mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-px bg-terracotta mt-3 shrink-0" />
                  <p className="text-[17px] text-ink-dim leading-relaxed italic"
                    style={{ fontFamily: "var(--font-fraunces-loaded, var(--font-display))" }}>
                    {sessions[activeIndex].caption}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            <Link href="/portfolio"
              className="inline-flex items-center gap-2 text-[14px] font-semibold text-terracotta hover:gap-3 transition-all self-start"
              style={{ fontFamily: "var(--font-inter-loaded, var(--font-body))" }}>
              See the full portfolio <ArrowRight size={14} />
            </Link>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
