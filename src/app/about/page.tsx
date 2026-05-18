import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Camera, Heart, Users } from "lucide-react";
import Button from "@/components/ui/Button";
import FadeUp from "@/components/ui/FadeUp";
import CTABanner from "@/components/sections/home/CTABanner";

export const metadata: Metadata = {
  title: "About Abigal",
  description: "From Canada to Tauranga — meet Abigal Edmeades, photographer and former marketer who turned frustration into a craft.",
};

const behindScenes = [
  { src: "/images/session-business-1.jpg", alt: "Business team photography session" },
  { src: "/images/session-event-1.jpg",    alt: "Event photography at work" },
  { src: "/images/session-family-19.jpg",  alt: "Candid family moment" },
  { src: "/images/mothers-day-6.jpg",      alt: "Mother's Day mini session" },
];

const values = [
  { icon: Camera, title: "Craft over shortcuts", text: "Every image is considered — light, moment, composition. The goal is not volume, it's the handful of frames that make you stop breathing for a second." },
  { icon: Heart,  title: "People first",          text: "I came to photography through caring deeply about how people are represented. The best images come from people who feel safe, not posed." },
  { icon: Users,  title: "A business eye",         text: "Years in marketing taught me that great imagery changes how a business is perceived. I bring that strategic lens to every commercial shoot." },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative pt-20 overflow-hidden">
        <div className="relative h-[60vh] min-h-[400px] max-h-[640px]">
          <Image src="/images/mothers-day-4.jpg" alt="Abigal Edmeades, Tauranga photographer"
            fill priority className="object-cover object-top" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" />
          <div className="absolute bottom-8 left-6 lg:left-16">
            <FadeUp>
              <p className="eyebrow text-cta-fg/70 mb-2">The person behind the lens</p>
              <h1 className="font-display text-[clamp(36px,5vw,64px)] font-semibold text-cta-fg leading-[1.1] tracking-tight"
                style={{ fontFamily: "var(--font-fraunces-loaded, var(--font-display))" }}>
                Abigal Edmeades
              </h1>
            </FadeUp>
          </div>
        </div>
      </section>

      <section className="section-gap bg-paper">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <FadeUp className="lg:col-span-7">
              <p className="eyebrow mb-4">From Canada to Tauranga</p>
              <h2 className="font-display text-[clamp(26px,3vw,38px)] font-medium text-ink leading-[1.2] tracking-tight mb-6"
                style={{ fontFamily: "var(--font-fraunces-loaded, var(--font-display))" }}>
                The frustration that started everything
              </h2>
              <div className="flex flex-col gap-5 text-[16px] text-ink-dim leading-relaxed"
                style={{ fontFamily: "var(--font-inter-loaded, var(--font-body))" }}>
                <p>I moved from Canada to New Zealand in 2019 looking for a change of pace and a new landscape to call home. For a while I worked in marketing — writing briefs, running campaigns, and watching businesses struggle to represent themselves visually.</p>
                <p>The images I had to work with were often generic, uninspired, or just plain wrong for the brief. I could see what was needed, but the photography wasn&apos;t delivering it. That gap bothered me enough that I bought a camera and started learning — properly, obsessively.</p>
                <p>What started as problem-solving became craft. And craft became a business. Today I work with families, events, and businesses across Tauranga, and I bring the same strategic thinking I developed in marketing to every frame I make.</p>
              </div>
            </FadeUp>
            <FadeUp delay={0.2} className="lg:col-span-5">
              <div className="img-zoom overflow-hidden aspect-[4/5] bg-elevated">
                <Image src="/images/session-family-16.jpg" alt="A quiet family moment"
                  width={560} height={700} className="w-full h-full object-cover" />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <section className="section-gap bg-elevated">
        <div className="max-w-[860px] mx-auto px-6 lg:px-16 text-center">
          <FadeUp>
            <span className="text-[80px] leading-none text-terracotta block mb-2 -mt-4"
              style={{ fontFamily: "var(--font-fraunces-loaded, var(--font-display))" }} aria-hidden>&ldquo;</span>
            <blockquote className="font-display text-[clamp(22px,3vw,36px)] font-medium italic text-ink leading-[1.35] tracking-tight"
              style={{ fontFamily: "var(--font-fraunces-loaded, var(--font-display))" }}>
              I love seeing your passion — for those you are with, for what you do, for where you are.
              I love capturing the moments <span className="text-terracotta">YOU love.</span> These moments are worth having forever.
            </blockquote>
            <p className="mt-6 text-[14px] text-ink-muted" style={{ fontFamily: "var(--font-inter-loaded, var(--font-body))" }}>— Abigal Edmeades</p>
          </FadeUp>
        </div>
      </section>

      <section className="section-gap bg-paper">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
          <FadeUp className="mb-12">
            <p className="eyebrow mb-3">How I approach the work</p>
            <h2 className="font-display text-[clamp(26px,3vw,38px)] font-medium text-ink leading-[1.2] tracking-tight"
              style={{ fontFamily: "var(--font-fraunces-loaded, var(--font-display))" }}>Three things I believe in</h2>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <FadeUp key={v.title} delay={i * 0.12}>
                  <div className="flex flex-col gap-4">
                    <div className="w-10 h-10 border border-border flex items-center justify-center">
                      <Icon size={18} className="text-terracotta" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-display text-[20px] font-medium text-ink"
                      style={{ fontFamily: "var(--font-fraunces-loaded, var(--font-display))" }}>{v.title}</h3>
                    <p className="text-[15px] text-ink-dim leading-relaxed"
                      style={{ fontFamily: "var(--font-inter-loaded, var(--font-body))" }}>{v.text}</p>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-gap bg-elevated">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
          <FadeUp className="mb-10">
            <p className="eyebrow mb-3">Behind the camera</p>
            <h2 className="font-display text-[clamp(24px,3vw,36px)] font-medium text-ink leading-[1.2] tracking-tight"
              style={{ fontFamily: "var(--font-fraunces-loaded, var(--font-display))" }}>The work between the shots</h2>
          </FadeUp>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {behindScenes.map((img, i) => (
              <FadeUp key={i} delay={i * 0.08}>
                <div className="img-zoom overflow-hidden aspect-square bg-surface">
                  <Image src={img.src} alt={img.alt} width={400} height={400} className="w-full h-full object-cover" />
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="section-gap bg-paper border-t border-border">
        <div className="max-w-[760px] mx-auto px-6 lg:px-16 text-center">
          <FadeUp>
            <p className="eyebrow mb-4">What clients say</p>
            <div className="border border-border p-8 lg:p-12">
              <p className="text-[16px] text-ink-muted italic leading-relaxed mb-4"
                style={{ fontFamily: "var(--font-fraunces-loaded, var(--font-display))" }}>
                Recent clients are sharing their experiences — check back soon for testimonials,
                or follow along on Instagram to see sessions as they happen.
              </p>
              <Link href="https://www.instagram.com/aedmeadesphotos" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-terracotta"
                style={{ fontFamily: "var(--font-inter-loaded, var(--font-body))" }}>
                Follow on Instagram <ArrowRight size={13} />
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
