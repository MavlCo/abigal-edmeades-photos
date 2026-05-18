"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import Button from "@/components/ui/Button";

const row1 = [
  { src: "/images/session-family-1.jpg",   alt: "Family session" },
  { src: "/images/session-family-4.jpg",   alt: "Family laughing" },
  { src: "/images/session-event-1.jpg",    alt: "Event photography" },
  { src: "/images/session-business-1.jpg", alt: "Business shoot" },
  { src: "/images/session-family-7.jpg",   alt: "Family holiday session" },
  { src: "/images/mothers-day-4.jpg",      alt: "Mother's Day mini session" },
];

const row2 = [
  { src: "/images/session-couple-1.jpg",   alt: "Couple portrait" },
  { src: "/images/session-family-17.jpg",  alt: "Summer family session" },
  { src: "/images/session-family-21.jpg",  alt: "Candid family moment" },
  { src: "/images/session-family-8.jpg",   alt: "Family holiday" },
  { src: "/images/session-event-2.jpg",    alt: "Event moment" },
  { src: "/images/session-business-2.jpg", alt: "Campaign shoot" },
];

const row3 = [
  { src: "/images/session-family-20.jpg",  alt: "In-between moment" },
  { src: "/images/session-family-18.jpg",  alt: "Dancing with mum" },
  { src: "/images/session-family-9.jpg",   alt: "Family session" },
  { src: "/images/mothers-day-11.jpg",     alt: "Mother's Day session" },
  { src: "/images/session-family-14.jpg",  alt: "Quiet moment" },
  { src: "/images/session-newborn-1.jpg",  alt: "Newborn session" },
];

type MarqueeImage = { src: string; alt: string };

function MarqueeStrip({
  images,
  direction = "left",
  speed = 35,
  imgWidth = 260,
  imgHeight = 160,
}: {
  images: MarqueeImage[];
  direction?: "left" | "right";
  speed?: number;
  imgWidth?: number;
  imgHeight?: number;
}) {
  const doubled = [...images, ...images];
  return (
    <div className="overflow-hidden w-full">
      <motion.div
        className="flex"
        style={{ width: "max-content", gap: "10px" }}
        animate={{ x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ duration: speed, ease: "linear", repeat: Infinity, repeatType: "loop" }}
      >
        {doubled.map((img, i) => (
          <div key={i} className="shrink-0 overflow-hidden" style={{ width: `${imgWidth}px`, height: `${imgHeight}px` }}>
            <Image src={img.src} alt={img.alt} width={imgWidth} height={imgHeight} className="w-full h-full object-cover" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

function DarkPanel({ mobile = false }: { mobile?: boolean }) {
  return (
    <motion.div
      className={`relative flex flex-col justify-center gap-3 overflow-hidden ${
        mobile ? "w-full h-[280px]" : "hidden lg:flex lg:w-[56%] lg:shrink-0"
      }`}
      style={{ backgroundColor: "var(--color-ink)" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: mobile ? 0.5 : 0.15 }}
    >
      {!mobile && (
        <div className="absolute top-0 left-0 bottom-0 w-20 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, var(--color-ink), transparent)" }} />
      )}
      <div className="absolute top-0 left-0 right-0 z-10 pointer-events-none"
        style={{ height: mobile ? "80px" : "112px", background: "linear-gradient(to bottom, var(--color-ink), transparent)" }} />
      <div className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none"
        style={{ height: mobile ? "80px" : "112px", background: "linear-gradient(to top, var(--color-ink), transparent)" }} />
      <div className="absolute top-0 right-0 bottom-0 w-12 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, var(--color-ink), transparent)" }} />
      {mobile && (
        <div className="absolute top-0 left-0 bottom-0 w-12 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, var(--color-ink), transparent)" }} />
      )}

      <MarqueeStrip images={row1} direction="left"  speed={34} imgWidth={mobile ? 200 : 260} imgHeight={mobile ? 120 : 160} />
      <MarqueeStrip images={row2} direction="right" speed={28} imgWidth={mobile ? 200 : 260} imgHeight={mobile ? 120 : 160} />
      {!mobile && <MarqueeStrip images={row3} direction="left" speed={44} imgWidth={260} imgHeight={160} />}

      <div className="absolute inset-0 z-[5] pointer-events-none" style={{ backgroundColor: "rgba(26,26,26,0.18)" }} />

      <div className="absolute bottom-4 right-5 z-20 opacity-25">
        <Image
          src="/logos/logo.png"
          alt="Abigal Edmeades Photos"
          width={100}
          height={30}
          className="h-7 w-auto object-contain brightness-0 invert"
        />
      </div>
    </motion.div>
  );
}

const panelVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};
const itemVariant = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section className="flex flex-col lg:flex-row min-h-screen overflow-hidden">
      <div className="flex flex-col justify-center bg-paper px-6 pt-28 pb-10 lg:w-[44%] lg:shrink-0 lg:px-16 lg:py-0 lg:min-h-screen">
        <motion.div variants={panelVariants} initial="hidden" animate="visible" className="w-full max-w-[440px]">
          <motion.div variants={itemVariant} className="flex items-center gap-1.5 mb-6">
            <MapPin size={12} className="text-terracotta" />
            <span className="eyebrow" style={{ color: "var(--color-terracotta)" }}>Tauranga, New Zealand</span>
          </motion.div>

          <motion.h1
            variants={itemVariant}
            className="text-[clamp(36px,4.5vw,64px)] font-semibold text-ink leading-[1.08] tracking-[-0.02em] mb-5"
            style={{ fontFamily: "var(--font-fraunces-loaded, var(--font-display))" }}
          >
            Capturing people{" "}
            <em className="text-terracotta" style={{ fontStyle: "italic" }}>doing what they love</em>
          </motion.h1>

          <motion.p variants={itemVariant} className="text-[16px] text-ink-dim leading-relaxed mb-8"
            style={{ fontFamily: "var(--font-inter-loaded, var(--font-body))" }}>
            Family, event, and business photography by Abigal Edmeades —
            based in Tauranga, available across the Bay of Plenty.
          </motion.p>

          <motion.div variants={itemVariant} className="flex flex-wrap gap-3 mb-10">
            <Button href="/contact" variant="primary" size="md">Book a Session</Button>
            <Link href="/portfolio"
              className="inline-flex items-center gap-2 text-[14px] font-semibold text-ink border border-border hover:border-ink px-7 py-3.5 transition-all group"
              style={{ fontFamily: "var(--font-inter-loaded, var(--font-body))" }}>
              View Work
              <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </motion.div>

          <motion.div variants={itemVariant} className="flex items-center gap-5 pt-6 border-t border-border">
            {[{ label: "Families", value: "50+" }, { label: "Events", value: "30+" }, { label: "Businesses", value: "40+" }].map((stat) => (
              <div key={stat.label} className="flex flex-col gap-0.5">
                <span className="text-[20px] font-semibold text-ink leading-none"
                  style={{ fontFamily: "var(--font-fraunces-loaded, var(--font-display))" }}>{stat.value}</span>
                <span className="text-[11px] text-ink-muted uppercase tracking-widest"
                  style={{ fontFamily: "var(--font-inter-loaded, var(--font-body))" }}>{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <DarkPanel mobile={false} />
      <DarkPanel mobile={true} />
    </section>
  );
}
