import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import FadeUp from "@/components/ui/FadeUp";
import CTABanner from "@/components/sections/home/CTABanner";

const articles: Record<string, { title: string; excerpt: string; date: string; readTime: string; image: string; body: string[] }> = {
  "sun-drenched-family-session-mount-maunganui": {
    title: "Behind a sun-drenched family session in Mount Maunganui",
    excerpt: "An overcast morning that turned golden by 8am. Three kids, bare feet on warm sand, and a mum who cried happy tears when she saw the first frame.",
    date: "14 May 2026",
    readTime: "5 min read",
    image: "/images/session-family-7.jpg",
    body: [
      "We started at 7:15am. The sky was the kind of flat grey that makes photographers nervous — the kind that suggests you've picked the wrong day. By 7:45am it had turned gold.",
      "The Williams family arrived at the base of the Mount with three kids under seven, a thermos of coffee, and the loose, slightly chaotic energy of a family that spends a lot of time outdoors together. Exactly the right energy for this kind of session.",
      "I don't direct much at the start. I find it's better to let families find their rhythm for the first fifteen minutes — the kids explore, the parents relax, and the images from that period are usually some of the best of the day.",
      "The brief was simple: 'something that feels like a morning at the beach, because that's what we actually do.' No formal portraits, no matching outfits (though they landed on complementary warm tones naturally), no 'everyone look at the camera' shots. Just the morning.",
      "By the end of the session we had over 400 frames. The final gallery delivered 47 images. Every one of them earns its place.",
      "When Sarah saw the first image in her gallery preview, she called me. She was crying happy tears. That's the whole job, really.",
    ],
  },
  "what-to-wear-business-portraits": {
    title: "What to wear for your business portraits",
    excerpt: "The images that do the most work show you in your actual environment, in clothes you'd actually wear.",
    date: "6 May 2026",
    readTime: "4 min read",
    image: "/images/session-business-2.jpg",
    body: [
      "The most common mistake people make before a business portrait session is over-thinking it. They buy something new, something 'professional', something that doesn't quite feel like them. Those are usually the sessions where the images look fine but don't feel like the person.",
      "Here's the advice I give every client before we meet: wear something you'd wear to an important meeting. Not a gala. A meeting. Something you'd feel confident in, not stiff.",
      "Avoid heavy patterns — particularly checks and fine stripes, which can create visual noise on camera. Avoid stark white if we're shooting in a bright environment. And avoid anything with prominent logos unless the brand is part of the story you're telling.",
      "The location matters as much as the clothes. Your actual workspace — your studio, your shopfront, your café — tells a story that a blank wall never will. It signals confidence. It says: this is where the work happens.",
      "Bring two options. We often shoot both and decide in post which reads better against the environment. One more formal, one slightly more relaxed. It gives us range without eating into session time.",
    ],
  },
  "mothers-day-minis-story": {
    title: "The Mother's Day Minis story",
    excerpt: "Twelve families, two hours at the beach, and one of the best days I've had behind a camera.",
    date: "29 Apr 2026",
    readTime: "3 min read",
    image: "/images/mothers-day-4.jpg",
    body: [
      "Mini sessions were something I was resistant to for a long time. The logistics feel complicated — multiple families, tight time slots, a schedule that depends on everyone being on time. They are not the relaxed, unstructured sessions I usually prefer.",
      "Then a client asked if I'd consider running Mother's Day minis, and I said yes, mostly because I trusted her taste.",
      "We ran twelve slots across two hours on a Saturday morning in early May at Pilot Bay. Each family got 20 minutes. Twenty minutes is not a lot — but it's enough when you know what you're doing and the families arrive ready.",
      "The brief for every slot was identical: a mum and her kids. No partners, no grandparents. Just that specific relationship, in that morning light.",
      "By the third slot I was in a rhythm. By the sixth I was genuinely emotional. By the twelfth I was convinced this is one of the best formats I've shot.",
      "The galleries went out within a week. The response was immediate. We're doing it again in October.",
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = articles[slug];
  return {
    title: article?.title ?? "Journal",
    description: article?.excerpt,
  };
}

export default async function JournalArticle({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles[slug];

  if (!article) {
    return (
      <section className="pt-32 pb-20 bg-paper min-h-screen">
        <div className="max-w-[720px] mx-auto px-6 text-center">
          <h1
            className="font-display text-[36px] font-medium text-ink mb-4"
            style={{ fontFamily: "var(--font-fraunces-loaded, var(--font-display))" }}
          >
            Article not found
          </h1>
          <Link href="/journal" className="text-terracotta hover:underline" style={{ fontFamily: "var(--font-inter-loaded, var(--font-body))" }}>
            ← Back to Journal
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Hero image */}
      <div className="relative w-full h-[55vh] min-h-[360px] max-h-[560px] pt-16 overflow-hidden">
        <Image
          src={article.image}
          alt={article.title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-paper via-transparent to-transparent" />
      </div>

      {/* Article */}
      <article className="bg-paper pb-20">
        <div className="max-w-[720px] mx-auto px-6 lg:px-8">
          {/* Back link */}
          <FadeUp>
            <Link
              href="/journal"
              className="inline-flex items-center gap-1.5 text-[13px] text-ink-muted hover:text-terracotta transition-colors pt-8 pb-6 block"
              style={{ fontFamily: "var(--font-inter-loaded, var(--font-body))" }}
            >
              <ArrowLeft size={13} /> Back to Journal
            </Link>
          </FadeUp>

          <FadeUp delay={0.05}>
            <div className="flex items-center gap-4 mb-5">
              <span className="flex items-center gap-1.5 text-[12px] text-ink-muted" style={{ fontFamily: "var(--font-inter-loaded, var(--font-body))" }}>
                <Calendar size={11} /> {article.date}
              </span>
              <span className="flex items-center gap-1.5 text-[12px] text-ink-muted" style={{ fontFamily: "var(--font-inter-loaded, var(--font-body))" }}>
                <Clock size={11} /> {article.readTime}
              </span>
            </div>
            <h1
              className="font-display text-[clamp(28px,4vw,48px)] font-medium text-ink leading-[1.2] tracking-tight mb-6"
              style={{ fontFamily: "var(--font-fraunces-loaded, var(--font-display))" }}
            >
              {article.title}
            </h1>
            <p
              className="text-[18px] font-medium text-ink-dim leading-relaxed mb-8 pb-8 border-b border-border"
              style={{ fontFamily: "var(--font-inter-loaded, var(--font-body))" }}
            >
              {article.excerpt}
            </p>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="flex flex-col gap-5">
              {article.body.map((para, i) => (
                <p
                  key={i}
                  className="text-[17px] text-ink-dim leading-[1.75]"
                  style={{ fontFamily: "var(--font-inter-loaded, var(--font-body))" }}
                >
                  {para}
                </p>
              ))}
            </div>
          </FadeUp>
        </div>
      </article>

      <CTABanner />
    </>
  );
}
