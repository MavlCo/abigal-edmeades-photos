"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Instagram, ArrowRight, Check, ChevronRight } from "lucide-react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import FadeUp from "@/components/ui/FadeUp";

const sessionTypes = ["Family", "Event", "Business", "Other"];

type FormData = {
  sessionType: string;
  preferredDate: string;
  location: string;
  partySize: string;
  budget: string;
  details: string;
  name: string;
  email: string;
  phone: string;
  referral: string;
};

export default function ContactPage() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<FormData>({
    sessionType: "",
    preferredDate: "",
    location: "",
    partySize: "",
    budget: "",
    details: "",
    name: "",
    email: "",
    phone: "",
    referral: "",
  });

  const update = (field: keyof FormData, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="min-h-screen bg-paper pt-32 flex items-center">
        <div className="max-w-[640px] mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="w-14 h-14 bg-elevated border border-border flex items-center justify-center mx-auto mb-6">
              <Check size={22} className="text-terracotta" />
            </div>
            <h2
              className="font-display text-[clamp(28px,4vw,44px)] font-medium text-ink leading-[1.2] tracking-tight mb-4"
              style={{ fontFamily: "var(--font-fraunces-loaded, var(--font-display))" }}
            >
              Thanks,{" "}
              <em style={{ fontStyle: "italic" }}>{form.name.split(" ")[0]}</em>
            </h2>
            <p
              className="text-[16px] text-ink-dim leading-relaxed mb-8"
              style={{ fontFamily: "var(--font-inter-loaded, var(--font-body))" }}
            >
              I&apos;ll be in touch within 24 hours — usually same day. In the meantime,
              have a look at recent sessions on Instagram.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button href="/portfolio" variant="primary">
                Browse the portfolio
              </Button>
              <a
                href="https://www.instagram.com/aedmeadesphotos"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-ink text-ink text-[14px] font-semibold px-7 py-3.5 hover:border-terracotta hover:text-terracotta transition-all"
                style={{ fontFamily: "var(--font-inter-loaded, var(--font-body))" }}
              >
                <Instagram size={15} />
                Follow on Instagram
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="pt-28 pb-20 bg-paper min-h-screen">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left — reassurance */}
          <FadeUp className="lg:col-span-5 lg:pt-4">
            <p className="eyebrow mb-4">Let&apos;s plan your session</p>
            <h1
              className="font-display text-[clamp(30px,4vw,50px)] font-medium text-ink leading-[1.15] tracking-tight mb-5"
              style={{ fontFamily: "var(--font-fraunces-loaded, var(--font-display))" }}
            >
              Tell me what you&apos;re{" "}
              <em style={{ fontStyle: "italic" }}>hoping to capture</em>
            </h1>
            <p
              className="text-[16px] text-ink-dim leading-relaxed mb-6"
              style={{ fontFamily: "var(--font-inter-loaded, var(--font-body))" }}
            >
              Fill in the short form and I&apos;ll reply within 24 hours — usually same
              day. No commitment, no invoice until we&apos;ve talked through the details together.
            </p>

            <div className="flex flex-col gap-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 border border-border flex items-center justify-center shrink-0 mt-0.5">
                  <Check size={14} className="text-terracotta" />
                </div>
                <p
                  className="text-[14px] text-ink-dim leading-snug"
                  style={{ fontFamily: "var(--font-inter-loaded, var(--font-body))" }}
                >
                  Reply within 24 hours, usually same day
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 border border-border flex items-center justify-center shrink-0 mt-0.5">
                  <Check size={14} className="text-terracotta" />
                </div>
                <p
                  className="text-[14px] text-ink-dim leading-snug"
                  style={{ fontFamily: "var(--font-inter-loaded, var(--font-body))" }}
                >
                  No commitment until you&apos;re ready to confirm
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 border border-border flex items-center justify-center shrink-0 mt-0.5">
                  <Check size={14} className="text-terracotta" />
                </div>
                <p
                  className="text-[14px] text-ink-dim leading-snug"
                  style={{ fontFamily: "var(--font-inter-loaded, var(--font-body))" }}
                >
                  Serving Tauranga and surrounding Bay of Plenty
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3 pt-6 border-t border-border">
              <a
                href="mailto:hello@abigaledmeadesphotos.com"
                className="flex items-center gap-2.5 text-[14px] text-ink-dim hover:text-terracotta transition-colors"
                style={{ fontFamily: "var(--font-inter-loaded, var(--font-body))" }}
              >
                <Mail size={15} className="text-terracotta" />
                hello@abigaledmeadesphotos.com
              </a>
              <a
                href="https://www.instagram.com/aedmeadesphotos"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-[14px] text-ink-dim hover:text-terracotta transition-colors"
                style={{ fontFamily: "var(--font-inter-loaded, var(--font-body))" }}
              >
                <Instagram size={15} className="text-terracotta" />
                @aedmeadesphotos
              </a>
            </div>

            <div className="mt-5">
              <Link
                href="/faq"
                className="text-[13px] text-ink-muted hover:text-terracotta transition-colors inline-flex items-center gap-1"
                style={{ fontFamily: "var(--font-inter-loaded, var(--font-body))" }}
              >
                Prefer to read FAQs first? <ArrowRight size={12} />
              </Link>
            </div>
          </FadeUp>

          {/* Right — form */}
          <FadeUp delay={0.15} className="lg:col-span-7">
            {/* Progress indicator */}
            <div className="flex items-center gap-2 mb-8">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center gap-2">
                  <div
                    className={`w-7 h-7 flex items-center justify-center text-[12px] font-semibold transition-all ${
                      s < step
                        ? "bg-terracotta text-cta-fg"
                        : s === step
                        ? "bg-ink text-cta-fg"
                        : "bg-elevated text-ink-muted border border-border"
                    }`}
                    style={{ fontFamily: "var(--font-inter-loaded, var(--font-body))" }}
                  >
                    {s < step ? <Check size={12} /> : s}
                  </div>
                  {s < 3 && (
                    <div
                      className={`h-px w-8 transition-all ${
                        s < step ? "bg-terracotta" : "bg-border"
                      }`}
                    />
                  )}
                </div>
              ))}
              <span
                className="ml-3 text-[12px] text-ink-muted"
                style={{ fontFamily: "var(--font-inter-loaded, var(--font-body))" }}
              >
                Step {step} of 3
              </span>
            </div>

            <form onSubmit={handleSubmit}>
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.25 }}
                    className="flex flex-col gap-6"
                  >
                    <div>
                      <p
                        className="eyebrow mb-4"
                      >
                        What kind of session?
                      </p>
                      <div className="grid grid-cols-2 gap-3">
                        {sessionTypes.map((type) => (
                          <button
                            key={type}
                            type="button"
                            onClick={() => update("sessionType", type)}
                            className={`p-4 border text-left transition-all ${
                              form.sessionType === type
                                ? "border-terracotta bg-elevated"
                                : "border-border bg-surface hover:border-ink-muted"
                            }`}
                          >
                            <span
                              className="text-[15px] font-medium text-ink block"
                              style={{ fontFamily: "var(--font-fraunces-loaded, var(--font-display))" }}
                            >
                              {type}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <Button
                        type="button"
                        onClick={() => setStep(2)}
                        disabled={!form.sessionType}
                        withArrow
                      >
                        Next step
                      </Button>
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.25 }}
                    className="flex flex-col gap-5"
                  >
                    <p className="eyebrow mb-1">Project details</p>

                    {[
                      { label: "Preferred date(s)", field: "preferredDate" as const, type: "text", placeholder: "e.g. Late June, any Saturday" },
                      { label: "Location preference", field: "location" as const, type: "text", placeholder: "e.g. Mount Maunganui beach, our home" },
                      { label: "Party size", field: "partySize" as const, type: "text", placeholder: "e.g. Family of 4" },
                      { label: "Budget range (NZD)", field: "budget" as const, type: "text", placeholder: "e.g. $400–$600" },
                    ].map((f) => (
                      <div key={f.field} className="flex flex-col gap-1.5">
                        <label
                          className="eyebrow text-ink-dim"
                          style={{ color: "var(--color-ink-dim)" }}
                        >
                          {f.label}
                        </label>
                        <input
                          type={f.type}
                          value={form[f.field]}
                          onChange={(e) => update(f.field, e.target.value)}
                          placeholder={f.placeholder}
                          className="w-full bg-transparent border-b border-border focus:border-ink outline-none py-2.5 text-[16px] text-ink placeholder:text-ink-muted transition-colors"
                          style={{ fontFamily: "var(--font-inter-loaded, var(--font-body))" }}
                        />
                      </div>
                    ))}

                    <div className="flex flex-col gap-1.5">
                      <label className="eyebrow text-ink-dim" style={{ color: "var(--color-ink-dim)" }}>
                        What are you hoping to capture?
                      </label>
                      <textarea
                        value={form.details}
                        onChange={(e) => update("details", e.target.value)}
                        placeholder="2–3 sentences is perfect. Tell me the vibe, the occasion, what matters most."
                        rows={3}
                        className="w-full bg-transparent border-b border-border focus:border-ink outline-none py-2.5 text-[16px] text-ink placeholder:text-ink-muted resize-none transition-colors"
                        style={{ fontFamily: "var(--font-inter-loaded, var(--font-body))" }}
                      />
                    </div>

                    <div className="flex justify-between items-center pt-2">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="text-[13px] text-ink-muted hover:text-ink transition-colors flex items-center gap-1"
                        style={{ fontFamily: "var(--font-inter-loaded, var(--font-body))" }}
                      >
                        ← Back
                      </button>
                      <Button type="button" onClick={() => setStep(3)} withArrow>
                        Next step
                      </Button>
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.25 }}
                    className="flex flex-col gap-5"
                  >
                    <p className="eyebrow mb-1">Your details</p>

                    {[
                      { label: "Full name *", field: "name" as const, type: "text", required: true },
                      { label: "Email address *", field: "email" as const, type: "email", required: true },
                      { label: "Phone (optional)", field: "phone" as const, type: "tel", required: false },
                      { label: "How did you hear about me?", field: "referral" as const, type: "text", required: false },
                    ].map((f) => (
                      <div key={f.field} className="flex flex-col gap-1.5">
                        <label className="eyebrow text-ink-dim" style={{ color: "var(--color-ink-dim)" }}>
                          {f.label}
                        </label>
                        <input
                          type={f.type}
                          required={f.required}
                          value={form[f.field]}
                          onChange={(e) => update(f.field, e.target.value)}
                          className="w-full bg-transparent border-b border-border focus:border-ink outline-none py-2.5 text-[16px] text-ink placeholder:text-ink-muted transition-colors"
                          style={{ fontFamily: "var(--font-inter-loaded, var(--font-body))" }}
                        />
                      </div>
                    ))}

                    <div className="flex justify-between items-center pt-2">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="text-[13px] text-ink-muted hover:text-ink transition-colors flex items-center gap-1"
                        style={{ fontFamily: "var(--font-inter-loaded, var(--font-body))" }}
                      >
                        ← Back
                      </button>
                      <Button type="submit">
                        Send enquiry
                      </Button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
