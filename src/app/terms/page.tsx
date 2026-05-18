import type { Metadata } from "next";

export const metadata: Metadata = { title: "Terms & Conditions" };

export default function TermsPage() {
  return (
    <section className="pt-32 pb-20 bg-paper min-h-screen">
      <div className="max-w-[720px] mx-auto px-6 lg:px-8">
        <p className="eyebrow mb-3">Legal</p>
        <h1
          className="font-display text-[36px] font-medium text-ink mb-8"
          style={{ fontFamily: "var(--font-fraunces-loaded, var(--font-display))" }}
        >
          Terms & Conditions
        </h1>
        <div
          className="flex flex-col gap-5 text-[15px] text-ink-dim leading-relaxed"
          style={{ fontFamily: "var(--font-inter-loaded, var(--font-body))" }}
        >
          <p>Last updated: May 2026</p>
          <p>
            A 50% non-refundable deposit is required to confirm all bookings. The remaining
            balance is due seven days before the session date. Cancellations with less than
            48 hours notice forfeit the deposit.
          </p>
          <p>
            Abigal Edmeades retains copyright of all images produced. Clients receive a
            personal-use licence for all delivered images. Commercial clients receive
            commercial rights as specified in their contract.
          </p>
          <p>
            Rescheduling for weather is available once per session at no charge. Subsequent
            reschedules may incur a rebooking fee.
          </p>
          <p>
            For full terms, please contact us at hello@abigaledmeadesphotos.com.
          </p>
        </div>
      </div>
    </section>
  );
}
