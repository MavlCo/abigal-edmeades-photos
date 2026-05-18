import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import FadeUp from "@/components/ui/FadeUp";

export default function MeetAbigal() {
  return (
    <section className="section-gap bg-paper">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-center">
          <FadeUp className="lg:col-span-2">
            <div className="img-zoom overflow-hidden aspect-[4/5] bg-elevated">
              <Image src="/images/mothers-day-10.jpg" alt="Abigal Edmeades, Tauranga photographer"
                width={560} height={700} className="w-full h-full object-cover object-top" />
            </div>
          </FadeUp>

          <FadeUp delay={0.15} className="lg:col-span-3">
            <p className="eyebrow mb-4">Meet Abigal</p>
            <h2 className="font-display text-[clamp(28px,3.5vw,44px)] font-medium text-ink leading-[1.2] tracking-tight mb-6"
              style={{ fontFamily: "var(--font-fraunces-loaded, var(--font-display))" }}>
              From a marketing desk in Canada to a{" "}
              <em style={{ fontStyle: "italic" }}>camera in Tauranga</em>
            </h2>
            <div className="flex flex-col gap-4 text-[16px] text-ink-dim leading-relaxed mb-8"
              style={{ fontFamily: "var(--font-inter-loaded, var(--font-body))" }}>
              <p>
                I moved from Canada to New Zealand in 2019 and spent years in marketing,
                working with businesses who deserved better imagery than they had. Frustrated
                with the gap between the work I knew was possible and what was being delivered,
                I picked up a camera and started learning seriously.
              </p>
              <p>
                That frustration became a business — and a genuine passion. Now I work with
                families, events, and businesses across Tauranga, bringing the same strategic
                eye I honed in marketing to every frame.
              </p>
              <p>
                I love seeing your passion — for those you are with, for what you do, for where
                you are. These moments are worth having forever.
              </p>
            </div>
            <Link href="/about"
              className="inline-flex items-center gap-2 text-[14px] font-semibold text-terracotta hover:gap-3 transition-all"
              style={{ fontFamily: "var(--font-inter-loaded, var(--font-body))" }}>
              Read the full story <ArrowRight size={14} />
            </Link>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
