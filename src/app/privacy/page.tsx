import type { Metadata } from "next";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <section className="pt-32 pb-20 bg-paper min-h-screen">
      <div className="max-w-[720px] mx-auto px-6 lg:px-8">
        <p className="eyebrow mb-3">Legal</p>
        <h1
          className="font-display text-[36px] font-medium text-ink mb-8"
          style={{ fontFamily: "var(--font-fraunces-loaded, var(--font-display))" }}
        >
          Privacy Policy
        </h1>
        <div
          className="flex flex-col gap-5 text-[15px] text-ink-dim leading-relaxed"
          style={{ fontFamily: "var(--font-inter-loaded, var(--font-body))" }}
        >
          <p>Last updated: May 2026</p>
          <p>
            Abigal Edmeades Photos collects personal information — including name, email, and phone
            — only for the purposes of responding to booking enquiries and managing client
            relationships. We do not sell or share your personal information with third parties.
          </p>
          <p>
            Images from your session are stored securely and shared only via your private
            ShootProof gallery. Portfolio use of your images requires explicit written permission.
          </p>
          <p>
            For questions about your data, contact us at hello@abigaledmeadesphotos.com.
          </p>
        </div>
      </div>
    </section>
  );
}
