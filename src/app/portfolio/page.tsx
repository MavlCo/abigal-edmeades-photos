"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import FadeUp from "@/components/ui/FadeUp";

const categories = ["All", "Families", "Events", "Business", "Personal"];

const images = [
  { id: 1,  src: "/images/session-family-1.jpg",   alt: "Family session",           category: "Families", caption: "The Williams Family · Mount Maunganui", col: "lg:col-span-2 lg:row-span-2" },
  { id: 2,  src: "/images/session-family-4.jpg",   alt: "Family laughing together", category: "Families", caption: "The Chen Family · Tauranga" },
  { id: 3,  src: "/images/session-event-1.jpg",    alt: "Event photography",        category: "Events",   caption: "Bay Arts Festival" },
  { id: 4,  src: "/images/session-business-1.jpg", alt: "Business team shoot",      category: "Business", caption: "Artisans Roofing NZ" },
  { id: 5,  src: "/images/mothers-day-4.jpg",      alt: "Mother's Day mini session",category: "Families", caption: "Mother's Day Minis · Tauranga", col: "lg:col-span-2" },
  { id: 6,  src: "/images/session-couple-1.jpg",   alt: "Couple portrait",          category: "Personal", caption: "Valentine's portrait session" },
  { id: 7,  src: "/images/session-event-2.jpg",    alt: "Event moment",             category: "Events",   caption: "Community event · Bay of Plenty" },
  { id: 8,  src: "/images/session-family-17.jpg",  alt: "Summer family session",    category: "Families", caption: "Summer evening session" },
  { id: 9,  src: "/images/session-family-14.jpg",  alt: "Quiet family moment",      category: "Families", caption: "Quiet moments · Tauranga" },
  { id: 10, src: "/images/session-family-7.jpg",   alt: "Family holiday session",   category: "Families", caption: "Family holiday · Bay of Plenty", col: "lg:col-span-2" },
  { id: 11, src: "/images/session-newborn-1.jpg",  alt: "Newborn session",          category: "Families", caption: "Newborn session · Tauranga" },
  { id: 12, src: "/images/session-business-2.jpg", alt: "Campaign shoot",           category: "Business", caption: "Summer campaign shoot" },
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = activeCategory === "All"
    ? images
    : images.filter((img) => img.category === activeCategory);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () => setLightboxIndex((i) => (i !== null ? (i - 1 + filtered.length) % filtered.length : null));
  const nextImage = () => setLightboxIndex((i) => (i !== null ? (i + 1) % filtered.length : null));

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-12 bg-paper">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
          <FadeUp>
            <p className="eyebrow mb-3">A body of work</p>
            <h1
              className="font-display text-[clamp(36px,5vw,64px)] font-semibold text-ink leading-[1.1] tracking-tight mb-4"
              style={{ fontFamily: "var(--font-fraunces-loaded, var(--font-display))" }}
            >
              Portfolio
            </h1>
            <p
              className="text-[16px] text-ink-dim max-w-[480px] leading-relaxed"
              style={{ fontFamily: "var(--font-inter-loaded, var(--font-body))" }}
            >
              Families, events, and businesses across Tauranga and the Bay of Plenty.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Filter chips */}
      <div className="sticky top-16 lg:top-20 z-20 bg-paper/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-16 py-3 flex gap-2 overflow-x-auto scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 text-[13px] font-medium transition-all whitespace-nowrap ${
                activeCategory === cat
                  ? "bg-ink text-cta-fg"
                  : "bg-elevated text-ink-dim hover:bg-border"
              }`}
              style={{
                fontFamily: "var(--font-inter-loaded, var(--font-body))",
                borderRadius: "9999px",
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <section className="py-10 lg:py-14 bg-paper">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-3"
            layout
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((img, index) => (
                <motion.button
                  key={img.id}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`group relative overflow-hidden bg-elevated img-zoom cursor-pointer ${img.col ?? ""}`}
                  onClick={() => openLightbox(index)}
                  aria-label={`Open ${img.alt} in lightbox`}
                >
                  <div className="aspect-square">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={600}
                      height={600}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-ink/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-start justify-end p-4">
                    <ZoomIn size={16} className="text-cta-fg/80 mb-1" />
                    <p
                      className="text-[12px] text-cta-fg/90 leading-snug"
                      style={{ fontFamily: "var(--font-inter-loaded, var(--font-body))" }}
                    >
                      {img.caption}
                    </p>
                  </div>
                </motion.button>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            className="fixed inset-0 z-[100] bg-ink/95 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <div
              className="absolute top-5 left-1/2 -translate-x-1/2 text-[13px] text-cta-fg/60"
              style={{ fontFamily: "var(--font-inter-loaded, var(--font-body))" }}
            >
              {lightboxIndex + 1} / {filtered.length}
            </div>
            <button className="absolute top-4 right-4 p-2 text-cta-fg/70 hover:text-cta-fg transition-colors" onClick={closeLightbox} aria-label="Close">
              <X size={22} />
            </button>
            <button className="absolute left-3 md:left-6 p-3 text-cta-fg/70 hover:text-cta-fg transition-colors" onClick={(e) => { e.stopPropagation(); prevImage(); }} aria-label="Previous">
              <ChevronLeft size={28} />
            </button>
            <AnimatePresence mode="wait">
              <motion.div
                key={lightboxIndex}
                className="max-w-[90vw] max-h-[85vh] flex flex-col items-center"
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.18 }}
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={filtered[lightboxIndex].src}
                  alt={filtered[lightboxIndex].alt}
                  width={1400}
                  height={900}
                  className="max-h-[78vh] w-auto object-contain"
                />
                <p
                  className="mt-3 text-[13px] text-cta-fg/60"
                  style={{ fontFamily: "var(--font-inter-loaded, var(--font-body))" }}
                >
                  {filtered[lightboxIndex].caption}
                </p>
              </motion.div>
            </AnimatePresence>
            <button className="absolute right-3 md:right-6 p-3 text-cta-fg/70 hover:text-cta-fg transition-colors" onClick={(e) => { e.stopPropagation(); nextImage(); }} aria-label="Next">
              <ChevronRight size={28} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
