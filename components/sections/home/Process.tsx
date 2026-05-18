import { MessageCircle, CalendarDays, ImageIcon } from "lucide-react";
import FadeUp from "@/components/ui/FadeUp";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Get in touch",
    description:
      "Fill in the short booking form — your session type, preferred dates, and what you're hoping to capture. I'll reply within 24 hours.",
  },
  {
    number: "02",
    icon: CalendarDays,
    title: "Plan together",
    description:
      "We'll talk through the details: location, timing, what to wear, what to bring. Every session is shaped around you.",
  },
  {
    number: "03",
    icon: ImageIcon,
    title: "Capture and deliver",
    description:
      "On the day, just be yourselves. Edited images delivered within two weeks via your private ShootProof gallery.",
  },
];

export default function Process() {
  return (
    <section className="section-gap bg-paper border-t border-border">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
        <FadeUp className="mb-12 lg:mb-16">
          <p className="eyebrow mb-3">How it works</p>
          <h2
            className="font-display text-[clamp(28px,3.5vw,44px)] font-medium text-ink leading-[1.15] tracking-tight max-w-[420px]"
            style={{ fontFamily: "var(--font-fraunces-loaded, var(--font-display))" }}
          >
            Simple from the first message
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <FadeUp key={step.number} delay={i * 0.12}>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <span
                      className="text-[11px] font-semibold tracking-widest text-terracotta"
                      style={{ fontFamily: "var(--font-inter-loaded, var(--font-body))" }}
                    >
                      {step.number}
                    </span>
                    <div className="h-px flex-1 bg-border" />
                  </div>
                  <div className="w-10 h-10 flex items-center justify-center border border-border">
                    <Icon size={18} className="text-terracotta" strokeWidth={1.5} />
                  </div>
                  <h3
                    className="font-display text-[22px] font-medium text-ink leading-snug"
                    style={{ fontFamily: "var(--font-fraunces-loaded, var(--font-display))" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-[15px] text-ink-dim leading-relaxed"
                    style={{ fontFamily: "var(--font-inter-loaded, var(--font-body))" }}
                  >
                    {step.description}
                  </p>
                </div>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}
