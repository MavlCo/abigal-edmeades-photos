"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FadeUp from "@/components/ui/FadeUp";

const tracks = [
  {
    label: "For Families",
    tagline: "Lifestyle sessions that feel like a morning, not a shoot.",
    href: "/services#families",
    image: "/images/session-family-7.jpg",
    imageAlt: "Family session during golden hour",
  },
  {
    label: "For Events",
    tagline: "Every celebration deserves a record that does it justice.",
    href: "/services#events",
    image: "/images/session-event-1.jpg",
    imageAlt: "Event photography moment",
  },
  {
    label: "For Businesses",
    tagline: "Images that make people stop scrolling and start trusting.",
    href: "/services#business",
    image: "/images/session-business-1.jpg",
    imageAlt: "Business team photography session",
  },
];

export default function ThreeTrack() {
  return (
    <section className="section-gap bg-paper">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
        <FadeUp className="mb-12 lg:mb-16">
          <p className="eyebrow mb-3">What we can capture together</p>
          <h2 className="font-display text-[clamp(32px,4vw,48px)] font-medium text-ink leading-[1.15] tracking-tight max-w-[420px]"
            style={{ fontFamily: "var(--font-fraunces-loaded, var(--font-display))" }}>
            Three ways I can <em style={{ fontStyle: "italic" }}>help you</em>
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {tracks.map((track, i) => (
            <motion.div key={track.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.12 }}>
              <Link href={track.href} className="group block">
                <div className="img-zoom aspect-[4/5] mb-5 overflow-hidden bg-elevated">
                  <Image src={track.image} alt={track.imageAlt} width={600} height={750} className="w-full h-full object-cover" />
                </div>
                <p className="eyebrow mb-2">{track.label}</p>
                <p className="text-[16px] text-ink-dim leading-snug mb-3"
                  style={{ fontFamily: "var(--font-inter-loaded, var(--font-body))" }}>{track.tagline}</p>
                <span className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-terracotta group-hover:gap-3 transition-all"
                  style={{ fontFamily: "var(--font-inter-loaded, var(--font-body))" }}>
                  Explore <ArrowRight size={14} />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
