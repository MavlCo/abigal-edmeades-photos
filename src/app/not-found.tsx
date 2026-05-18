import Image from "next/image";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-paper">
      {/* Soft blurred background image */}
      <div className="absolute inset-0 opacity-20">
        <Image
          src="/images/session-family-14.jpg"
          alt=""
          fill
          className="object-cover blur-sm"
          aria-hidden
        />
      </div>

      <div className="relative z-10 max-w-[600px] mx-auto px-6 text-center">
        <p className="eyebrow mb-5">404</p>
        <h1
          className="font-display text-[clamp(36px,6vw,68px)] font-semibold text-ink leading-[1.1] tracking-tight mb-4"
          style={{ fontFamily: "var(--font-fraunces-loaded, var(--font-display))" }}
        >
          Lost in the frame
        </h1>
        <p
          className="text-[17px] text-ink-dim leading-relaxed mb-10"
          style={{ fontFamily: "var(--font-inter-loaded, var(--font-body))" }}
        >
          This page is somewhere off-camera. It might have moved, been renamed,
          or never quite made it into frame.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/" variant="primary" size="md">
            Back to home
          </Button>
          <Button href="/portfolio" variant="secondary" size="md">
            See the portfolio
          </Button>
        </div>
      </div>
    </section>
  );
}
