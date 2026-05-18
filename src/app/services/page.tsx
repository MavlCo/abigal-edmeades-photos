"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { Check, ArrowRight, ExternalLink } from "lucide-react";
import Button from "@/components/ui/Button";
import FadeUp from "@/components/ui/FadeUp";
import CTABanner from "@/components/sections/home/CTABanner";
import { motion } from "framer-motion";

const tabs = [
  { id: "families", label: "Families" },
  { id: "events", label: "Events" },
  { id: "business", label: "Business" },
];

const familyPackages = [
  {
    name: "Mini Session",
    duration: "30 min",
    images: "15 edited images",
    price: "$350",
    features: [
      "1 location",
      "15 fully edited images",
      "Private ShootProof gallery",
      "Print release included",
    ],
    cta: "Book a Mini",
    featured: false,
  },
  {
    name: "Standard Session",
    duration: "90 min",
    images: "40 edited images",
    price: "$550",
    features: [
      "Up to 2 locations",
      "40 fully edited images",
      "Private ShootProof gallery",
      "Print release included",
      "Style consultation call",
    ],
    cta: "Book Standard",
    featured: true,
  },
  {
    name: "Extended Family Day",
    duration: "Half day",
    images: "80+ edited images",
    price: "$850",
    features: [
      "Multiple locations",
      "80+ fully edited images",
      "Private ShootProof gallery",
      "Print release + digital files",
      "Style & planning consultation",
      "Timeline planning",
    ],
    cta: "Book Extended",
    featured: false,
  },
];

const eventPackages = [
  {
    name: "Half-Day Event",
    duration: "Up to 4 hours",
    startingFrom: "Starting from $650",
    description:
      "Ceremonies, community gatherings, and smaller private celebrations. Full coverage of the event arc.",
    features: ["Up to 4 hours coverage", "60+ edited images", "Private gallery delivery", "Commercial print rights"],
    image: "/images/session-event-1.jpg",
  },
  {
    name: "Full-Day Event",
    duration: "Up to 8 hours",
    startingFrom: "Starting from $1,100",
    description:
      "Full-day corporate events, large celebrations, and multi-part occasions needing comprehensive coverage.",
    features: ["Up to 8 hours coverage", "120+ edited images", "Priority turnaround (7 days)", "Commercial print rights"],
    image: "/images/session-event-3.jpg",
  },
];

const businessPackages = [
  {
    name: "3-Hour Session",
    hours: "2 hrs shooting · 1 hr editing",
    price: "$450 NZD",
  },
  {
    name: "4.5-Hour Session",
    hours: "3 hrs shooting · 1.5 hrs editing",
    price: "$650 NZD",
  },
  {
    name: "6-Hour Session",
    hours: "4 hrs shooting · 2 hrs editing",
    price: "$850 NZD",
  },
];

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState("families");
  const sectionRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (id: string) => {
    setActiveTab(id);
    const el = document.getElementById(id);
    if (el) {
      const offset = 100;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-paper">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
          <FadeUp>
            <p className="eyebrow mb-4">Transparent pricing, no surprises</p>
            <h1
              className="font-display text-[clamp(36px,5vw,64px)] font-semibold text-ink leading-[1.1] tracking-tight mb-5 max-w-[600px]"
              style={{ fontFamily: "var(--font-fraunces-loaded, var(--font-display))" }}
            >
              Sessions,{" "}
              <em style={{ fontStyle: "italic" }}>sittings,</em> and stories
            </h1>
            <p
              className="text-[17px] text-ink-dim leading-relaxed max-w-[540px]"
              style={{ fontFamily: "var(--font-inter-loaded, var(--font-body))" }}
            >
              Three distinct tracks — families, events, and businesses — each priced
              clearly with no hidden fees. Not sure which fits? The booking form has
              a spot for that.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Sticky tabs */}
      <div className="sticky top-16 lg:top-20 z-30 bg-paper/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
          <div className="flex gap-6 lg:gap-10 overflow-x-auto scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => scrollToSection(tab.id)}
                className={`py-4 text-[14px] font-semibold whitespace-nowrap border-b-2 transition-all ${
                  activeTab === tab.id
                    ? "border-terracotta text-ink"
                    : "border-transparent text-ink-dim hover:text-ink"
                }`}
                style={{ fontFamily: "var(--font-inter-loaded, var(--font-body))" }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Families */}
      <section id="families" className="section-gap bg-paper" ref={sectionRef}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
          <FadeUp className="mb-12">
            <p className="eyebrow mb-3">For Families</p>
            <h2
              className="font-display text-[clamp(28px,3.5vw,44px)] font-medium text-ink leading-[1.15] tracking-tight mb-4"
              style={{ fontFamily: "var(--font-fraunces-loaded, var(--font-display))" }}
            >
              Lifestyle sessions that feel like{" "}
              <em style={{ fontStyle: "italic" }}>a morning, not a shoot</em>
            </h2>
            <p
              className="text-[16px] text-ink-dim leading-relaxed max-w-[520px]"
              style={{ fontFamily: "var(--font-inter-loaded, var(--font-body))" }}
            >
              Newborns, milestones, seasonal minis, or just because. All sessions
              are in natural light — outdoors, at home, wherever you&apos;re most yourselves.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {familyPackages.map((pkg, i) => (
              <FadeUp key={pkg.name} delay={i * 0.1}>
                <div
                  className={`flex flex-col h-full border p-6 lg:p-8 ${
                    pkg.featured
                      ? "border-terracotta bg-elevated"
                      : "border-border bg-surface"
                  }`}
                >
                  {pkg.featured && (
                    <span
                      className="eyebrow text-terracotta mb-3 block"
                    >
                      Most popular
                    </span>
                  )}
                  <h3
                    className="font-display text-[22px] font-medium text-ink mb-1"
                    style={{ fontFamily: "var(--font-fraunces-loaded, var(--font-display))" }}
                  >
                    {pkg.name}
                  </h3>
                  <p
                    className="text-[13px] text-ink-muted mb-4"
                    style={{ fontFamily: "var(--font-inter-loaded, var(--font-body))" }}
                  >
                    {pkg.duration} · {pkg.images}
                  </p>
                  <p
                    className="text-[36px] font-semibold text-ink mb-6"
                    style={{ fontFamily: "var(--font-fraunces-loaded, var(--font-display))" }}
                  >
                    {pkg.price}
                  </p>
                  <ul className="flex flex-col gap-2.5 mb-8 flex-1">
                    {pkg.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2.5 text-[14px] text-ink-dim"
                        style={{ fontFamily: "var(--font-inter-loaded, var(--font-body))" }}
                      >
                        <Check size={14} className="text-terracotta mt-0.5 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Button href="/contact" variant={pkg.featured ? "primary" : "secondary"} fullWidth>
                    {pkg.cta}
                  </Button>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Events */}
      <section id="events" className="section-gap bg-elevated border-t border-border">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
          <FadeUp className="mb-12">
            <p className="eyebrow mb-3">For Events</p>
            <h2
              className="font-display text-[clamp(28px,3.5vw,44px)] font-medium text-ink leading-[1.15] tracking-tight mb-4"
              style={{ fontFamily: "var(--font-fraunces-loaded, var(--font-display))" }}
            >
              Every celebration deserves a{" "}
              <em style={{ fontStyle: "italic" }}>record that does it justice</em>
            </h2>
          </FadeUp>

          <div className="flex flex-col gap-6">
            {eventPackages.map((pkg, i) => (
              <FadeUp key={pkg.name} delay={i * 0.1}>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 bg-surface border border-border overflow-hidden">
                  <div className="img-zoom overflow-hidden aspect-[16/9] lg:aspect-auto lg:col-span-4 bg-elevated">
                    <Image
                      src={pkg.image}
                      alt={pkg.name}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 lg:p-8 lg:col-span-8 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <h3
                          className="font-display text-[24px] font-medium text-ink"
                          style={{ fontFamily: "var(--font-fraunces-loaded, var(--font-display))" }}
                        >
                          {pkg.name}
                        </h3>
                        <span
                          className="text-[20px] font-semibold text-ink shrink-0"
                          style={{ fontFamily: "var(--font-fraunces-loaded, var(--font-display))" }}
                        >
                          {pkg.startingFrom}
                        </span>
                      </div>
                      <p
                        className="text-[15px] text-ink-dim leading-relaxed mb-4"
                        style={{ fontFamily: "var(--font-inter-loaded, var(--font-body))" }}
                      >
                        {pkg.description}
                      </p>
                      <ul className="flex flex-wrap gap-x-6 gap-y-2 mb-6">
                        {pkg.features.map((f) => (
                          <li
                            key={f}
                            className="flex items-center gap-1.5 text-[13px] text-ink-dim"
                            style={{ fontFamily: "var(--font-inter-loaded, var(--font-body))" }}
                          >
                            <Check size={12} className="text-terracotta shrink-0" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex gap-3">
                      <Button href="/contact" variant="primary" size="sm">
                        Book this
                      </Button>
                      <Button href="/contact" variant="secondary" size="sm" withArrow>
                        Custom quote
                      </Button>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={0.2} className="mt-6 text-center">
            <p
              className="text-[14px] text-ink-muted"
              style={{ fontFamily: "var(--font-inter-loaded, var(--font-body))" }}
            >
              Need something custom — multi-day or ongoing coverage?{" "}
              <a href="/contact" className="text-terracotta hover:underline">
                Get in touch for a tailored quote →
              </a>
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Business */}
      <section id="business" className="section-gap bg-paper border-t border-border">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
          <FadeUp className="mb-12">
            <p className="eyebrow mb-3">For Businesses</p>
            <h2
              className="font-display text-[clamp(28px,3.5vw,44px)] font-medium text-ink leading-[1.15] tracking-tight mb-4"
              style={{ fontFamily: "var(--font-fraunces-loaded, var(--font-display))" }}
            >
              Images that make people stop scrolling{" "}
              <em style={{ fontStyle: "italic" }}>and start trusting</em>
            </h2>
            <p
              className="text-[16px] text-ink-dim leading-relaxed max-w-[520px] mb-8"
              style={{ fontFamily: "var(--font-inter-loaded, var(--font-body))" }}
            >
              Commercial product, brand, and content photography. Available directly
              or through our partnership with{" "}
              <a
                href="https://digitalpie.co.nz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-terracotta inline-flex items-center gap-1 hover:underline"
              >
                Digital Pie <ExternalLink size={11} />
              </a>
              .
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {businessPackages.map((pkg, i) => (
              <FadeUp key={pkg.name} delay={i * 0.1}>
                <div className="border border-border bg-surface p-6 lg:p-8">
                  <h3
                    className="font-display text-[20px] font-medium text-ink mb-1"
                    style={{ fontFamily: "var(--font-fraunces-loaded, var(--font-display))" }}
                  >
                    {pkg.name}
                  </h3>
                  <p
                    className="text-[13px] text-ink-muted mb-4"
                    style={{ fontFamily: "var(--font-inter-loaded, var(--font-body))" }}
                  >
                    {pkg.hours}
                  </p>
                  <p
                    className="text-[32px] font-semibold text-ink mb-6"
                    style={{ fontFamily: "var(--font-fraunces-loaded, var(--font-display))" }}
                  >
                    {pkg.price}
                  </p>
                  <Button href="/contact" variant="secondary" fullWidth size="sm">
                    Enquire
                  </Button>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp>
            <div className="border border-border bg-elevated p-6 lg:p-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5">
              <div>
                <h4
                  className="font-display text-[18px] font-medium text-ink mb-1"
                  style={{ fontFamily: "var(--font-fraunces-loaded, var(--font-display))" }}
                >
                  Digital Pie partnership
                </h4>
                <p
                  className="text-[14px] text-ink-dim max-w-[520px]"
                  style={{ fontFamily: "var(--font-inter-loaded, var(--font-body))" }}
                >
                  Working with Digital Pie on a web project? Business photography is
                  available through their packages at no commission — you own all images outright.
                </p>
              </div>
              <a
                href="https://digitalpie.co.nz/photography"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[14px] font-semibold text-terracotta whitespace-nowrap hover:gap-3 transition-all"
                style={{ fontFamily: "var(--font-inter-loaded, var(--font-body))" }}
              >
                Visit Digital Pie <ArrowRight size={14} />
              </a>
            </div>
          </FadeUp>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
