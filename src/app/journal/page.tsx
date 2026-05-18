import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import FadeUp from "@/components/ui/FadeUp";

export const metadata: Metadata = {
  title: "Journal",
  description: "Behind the sessions, style guides, and stories from the field — the Abigal Edmeades Photos journal.",
};

const posts = [
  {
    slug: "sun-drenched-family-session-mount-maunganui",
    title: "Behind a sun-drenched family session in Mount Maunganui",
    excerpt:
      "An overcast morning that turned golden by 8am. Three kids, bare feet on warm sand, and a mum who cried happy tears when she saw the first frame. Here's how it came together.",
    category: "Behind the Sessions",
    date: "14 May 2026",
    readTime: "5 min read",
    image: "/images/session-family-7.jpg",
    featured: true,
  },
  {
    slug: "what-to-wear-business-portraits",
    title: "What to wear for your business portraits",
    excerpt:
      "The images that do the most work show you in your actual environment, in clothes you'd actually wear. Here's the advice I give every client before a commercial shoot.",
    category: "Style Guide",
    date: "6 May 2026",
    readTime: "4 min read",
    image: "/images/session-business-2.jpg",
  },
  {
    slug: "mothers-day-minis-story",
    title: "The Mother&apos;s Day Minis story",
    excerpt:
      "Twelve families, two hours at the beach, and one of the best days I've had behind a camera. A look at how mini sessions work — and why they're worth it.",
    category: "Session Stories",
    date: "29 Apr 2026",
    readTime: "3 min read",
    image: "/images/mothers-day-4.jpg",
  },
];

const categoryColors: Record<string, string> = {
  "Behind the Sessions": "bg-terracotta/10 text-terracotta",
  "Style Guide": "bg-olive/10 text-olive",
  "Session Stories": "bg-ink/10 text-ink-dim",
};

export default function JournalPage() {
  const [featured, ...rest] = posts;

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-12 bg-paper">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
          <FadeUp>
            <p className="eyebrow mb-3">Stories from the field</p>
            <h1
              className="font-display text-[clamp(36px,5vw,64px)] font-semibold text-ink leading-[1.1] tracking-tight"
              style={{ fontFamily: "var(--font-fraunces-loaded, var(--font-display))" }}
            >
              Journal
            </h1>
          </FadeUp>
        </div>
      </section>

      {/* Featured post */}
      <section className="pb-12 bg-paper">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
          <FadeUp>
            <Link href={`/journal/${featured.slug}`} className="group grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 border border-border">
              <div className="img-zoom overflow-hidden aspect-[16/9] lg:aspect-auto lg:col-span-7 bg-elevated">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  width={1000}
                  height={600}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="p-6 lg:p-10 lg:col-span-5 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className={`text-[11px] font-medium px-2.5 py-1 ${categoryColors[featured.category] ?? ""}`}
                    style={{
                      fontFamily: "var(--font-inter-loaded, var(--font-body))",
                      borderRadius: "9999px",
                    }}
                  >
                    {featured.category}
                  </span>
                  <span
                    className="text-[12px] text-ink-muted flex items-center gap-1"
                    style={{ fontFamily: "var(--font-inter-loaded, var(--font-body))" }}
                  >
                    <Clock size={11} /> {featured.readTime}
                  </span>
                </div>
                <h2
                  className="font-display text-[clamp(22px,2.5vw,32px)] font-medium text-ink leading-[1.2] tracking-tight mb-4 group-hover:text-terracotta transition-colors"
                  style={{ fontFamily: "var(--font-fraunces-loaded, var(--font-display))" }}
                >
                  {featured.title}
                </h2>
                <p
                  className="text-[15px] text-ink-dim leading-relaxed mb-6"
                  style={{ fontFamily: "var(--font-inter-loaded, var(--font-body))" }}
                >
                  {featured.excerpt}
                </p>
                <div className="flex items-center gap-2 text-[13px] text-ink-muted">
                  <span style={{ fontFamily: "var(--font-inter-loaded, var(--font-body))" }}>
                    {featured.date}
                  </span>
                  <span>·</span>
                  <span
                    className="inline-flex items-center gap-1 text-terracotta font-semibold group-hover:gap-2 transition-all"
                    style={{ fontFamily: "var(--font-inter-loaded, var(--font-body))" }}
                  >
                    Read <ArrowRight size={12} />
                  </span>
                </div>
              </div>
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* Secondary posts grid */}
      <section className="section-gap bg-elevated border-t border-border">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {rest.map((post, i) => (
              <FadeUp key={post.slug} delay={i * 0.1}>
                <Link href={`/journal/${post.slug}`} className="group flex flex-col">
                  <div className="img-zoom overflow-hidden aspect-[3/2] bg-surface mb-5">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={700}
                      height={467}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className={`text-[11px] font-medium px-2.5 py-1 ${categoryColors[post.category] ?? ""}`}
                      style={{
                        fontFamily: "var(--font-inter-loaded, var(--font-body))",
                        borderRadius: "9999px",
                      }}
                    >
                      {post.category}
                    </span>
                    <span
                      className="text-[12px] text-ink-muted"
                      style={{ fontFamily: "var(--font-inter-loaded, var(--font-body))" }}
                    >
                      {post.date}
                    </span>
                  </div>
                  <h3
                    className="font-display text-[22px] font-medium text-ink leading-[1.25] tracking-tight mb-2 group-hover:text-terracotta transition-colors"
                    style={{ fontFamily: "var(--font-fraunces-loaded, var(--font-display))" }}
                  >
                    {post.title}
                  </h3>
                  <p
                    className="text-[14px] text-ink-dim leading-relaxed mb-3 line-clamp-2"
                    style={{ fontFamily: "var(--font-inter-loaded, var(--font-body))" }}
                  >
                    {post.excerpt}
                  </p>
                  <span
                    className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-terracotta group-hover:gap-2.5 transition-all mt-auto"
                    style={{ fontFamily: "var(--font-inter-loaded, var(--font-body))" }}
                  >
                    Read <ArrowRight size={12} />
                  </span>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
