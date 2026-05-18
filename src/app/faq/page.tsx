"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import Link from "next/link";
import FadeUp from "@/components/ui/FadeUp";

type FAQ = { q: string; a: string };
type Section = { heading: string; items: FAQ[] };

const faqs: Section[] = [
  {
    heading: "Booking & pricing",
    items: [
      {
        q: "How far in advance should I book?",
        a: "For families and portraits, 4–6 weeks is comfortable for most of the year. Peak periods — school holidays, the summer golden-hour months of January–March, and Mother's Day — book out 8–10 weeks in advance. Events and commercial shoots are best booked as early as possible, especially for specific dates.",
      },
      {
        q: "Is pricing negotiable?",
        a: "The packages are priced to reflect the time, skill, and editing that goes into each session. I don't negotiate package prices down, but I'm happy to work with you on scope — for example, adjusting session length or image count to fit a budget that's close but not quite there.",
      },
      {
        q: "What does the session price include?",
        a: "All session prices include my time, on-location setup, full editing of the included images, and a private ShootProof delivery gallery. A print release is also included so you can print your favourites anywhere you like. Travel outside Tauranga city centre may attract a small travel fee for distances over 30km.",
      },
      {
        q: "Do you offer payment plans for larger packages?",
        a: "Yes — for the Extended Family Day session and all event packages, I offer a 50/50 split: 50% deposit at booking to hold the date, and the remaining 50% due one week before the session.",
      },
    ],
  },
  {
    heading: "On the day",
    items: [
      {
        q: "What should we wear?",
        a: "Wear something you'd genuinely wear on a nice weekend. Avoid heavy logos, neon colours, or matching outfits that feel forced — you want to look like yourselves, not like a catalogue. Complementary tones work much better than exact matching. When in doubt, lean into neutrals, earth tones, and natural fabrics. I send a style guide after booking.",
      },
      {
        q: "Do you travel outside Tauranga?",
        a: "Yes — I cover the wider Bay of Plenty regularly, including Rotorua, Whakatāne, and Taupō. For destinations outside the Bay, travel costs are discussed at booking. I'm also happy to travel further for the right project.",
      },
      {
        q: "What happens if the weather is bad?",
        a: "New Zealand weather is famously unpredictable. For outdoor family sessions, we'll monitor conditions together and can reschedule at no cost if it's unsafe or would genuinely compromise the images. A little cloud is often beautiful — it softens the light. We don't reschedule for overcast alone.",
      },
      {
        q: "Do I need to direct my family, or will you?",
        a: "I'll direct — gently. The goal is natural movement and real laughter, not stiff poses. I'll give you activities and prompts, and the best frames almost always come from the bits in between. Your only job is to show up and be present.",
      },
    ],
  },
  {
    heading: "After the session",
    items: [
      {
        q: "How long until I get my images?",
        a: "Standard delivery is within 14 days of the session. For event and commercial work, I offer a priority 7-day turnaround available on request. You'll receive a notification when your gallery is ready, and it stays live for 60 days.",
      },
      {
        q: "Can I order prints through you?",
        a: "Your ShootProof gallery has a built-in print ordering store. I partner with a professional lab for prints, canvases, and albums — everything is colour-calibrated and archival quality. You can also download the full-resolution files and print independently.",
      },
      {
        q: "How many images will I receive?",
        a: "The number is listed in each package. I don't release unedited images — every delivered image is a finished, fully-edited frame. I'd rather deliver 40 images that are all genuinely good than 200 where most are unusable.",
      },
      {
        q: "Do you retain the copyright?",
        a: "Yes — copyright stays with me as the photographer, as is standard in the industry. You receive a broad personal use licence: printing, sharing, framing, using on personal social media. Commercial clients receive commercial rights as part of the package. If you need specific usage terms for editorial or advertising purposes, we can discuss that at booking.",
      },
    ],
  },
];

function AccordionItem({ q, a, index }: FAQ & { index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <FadeUp delay={index * 0.04}>
      <div className="border-b border-border">
        <button
          className="w-full flex items-start justify-between gap-4 py-5 text-left"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
        >
          <span
            className="text-[17px] font-medium text-ink leading-snug"
            style={{ fontFamily: "var(--font-fraunces-loaded, var(--font-display))" }}
          >
            {q}
          </span>
          <ChevronDown
            size={18}
            className={`text-terracotta shrink-0 mt-0.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          />
        </button>
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              style={{ overflow: "hidden" }}
            >
              <p
                className="text-[15px] text-ink-dim leading-relaxed pb-5 pr-8"
                style={{ fontFamily: "var(--font-inter-loaded, var(--font-body))" }}
              >
                {a}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </FadeUp>
  );
}

export default function FAQPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-14 bg-paper">
        <div className="max-w-[760px] mx-auto px-6 lg:px-8">
          <FadeUp>
            <p className="eyebrow mb-3">Got a question?</p>
            <h1
              className="font-display text-[clamp(36px,5vw,60px)] font-semibold text-ink leading-[1.1] tracking-tight mb-4"
              style={{ fontFamily: "var(--font-fraunces-loaded, var(--font-display))" }}
            >
              FAQ
            </h1>
            <p
              className="text-[16px] text-ink-dim leading-relaxed"
              style={{ fontFamily: "var(--font-inter-loaded, var(--font-body))" }}
            >
              Everything most people want to know before booking. Still have a question?
              The contact form takes 90 seconds.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* FAQ sections */}
      <section className="pb-20 bg-paper">
        <div className="max-w-[760px] mx-auto px-6 lg:px-8">
          {faqs.map((section) => (
            <div key={section.heading} className="mb-14">
              <FadeUp>
                <h2
                  className="font-display text-[13px] font-medium tracking-widest uppercase text-terracotta mb-6 pb-3 border-b border-border"
                  style={{ fontFamily: "var(--font-inter-loaded, var(--font-body))" }}
                >
                  {section.heading}
                </h2>
              </FadeUp>
              {section.items.map((item, i) => (
                <AccordionItem key={item.q} {...item} index={i} />
              ))}
            </div>
          ))}

          {/* Footer CTA */}
          <FadeUp>
            <div className="border border-border p-6 lg:p-8 text-center mt-8">
              <p
                className="font-display text-[20px] font-medium text-ink mb-2"
                style={{ fontFamily: "var(--font-fraunces-loaded, var(--font-display))" }}
              >
                Didn&apos;t see your question?
              </p>
              <p
                className="text-[15px] text-ink-dim mb-5"
                style={{ fontFamily: "var(--font-inter-loaded, var(--font-body))" }}
              >
                Send me a message and I&apos;ll reply within 24 hours.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-terracotta hover:gap-2.5 transition-all"
                style={{ fontFamily: "var(--font-inter-loaded, var(--font-body))" }}
              >
                Get in touch <ArrowRight size={13} />
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
