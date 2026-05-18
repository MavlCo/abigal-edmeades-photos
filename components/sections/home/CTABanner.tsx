import Button from "@/components/ui/Button";
import FadeUp from "@/components/ui/FadeUp";

export default function CTABanner() {
  return (
    <section
      className="relative py-20 lg:py-28 overflow-hidden"
      style={{ backgroundColor: "var(--color-olive)" }}
    >
      {/* Subtle grain overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px",
        }}
      />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-16 text-center">
        <FadeUp>
          <p
            className="text-[12px] font-medium tracking-[0.1em] uppercase mb-4"
            style={{
              fontFamily: "var(--font-inter-loaded, var(--font-body))",
              color: "rgba(250,250,247,0.65)",
            }}
          >
            Ready when you are
          </p>
          <h2
            className="font-display text-[clamp(32px,5vw,56px)] font-medium leading-[1.1] tracking-tight mb-5"
            style={{
              fontFamily: "var(--font-fraunces-loaded, var(--font-display))",
              color: "var(--color-paper)",
            }}
          >
            Ready to capture{" "}
            <em style={{ fontStyle: "italic" }}>the moment?</em>
          </h2>
          <p
            className="text-[17px] leading-relaxed mb-9 max-w-[440px] mx-auto"
            style={{
              fontFamily: "var(--font-inter-loaded, var(--font-body))",
              color: "rgba(250,250,247,0.75)",
            }}
          >
            Sessions fill up fast — especially around school holidays and the
            golden-hour months. Reach out and let&apos;s plan something together.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button href="/contact" variant="primary" size="lg">
              Book a Session
            </Button>
            <Button href="/services" variant="secondary" size="lg" className="!text-paper !border-paper/40 hover:!border-paper">
              View Pricing
            </Button>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
