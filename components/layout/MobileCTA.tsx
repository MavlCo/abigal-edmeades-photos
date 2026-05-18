"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileCTA() {
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastScrollY.current + 10) {
        setVisible(false);
      } else if (currentY < lastScrollY.current - 10) {
        setVisible(true);
      }
      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Hide on contact page (no need for CTA there)
  if (pathname === "/contact") return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 lg:hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.25 }}
          style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
        >
          <Link
            href="/contact"
            className="flex items-center gap-2 bg-cta text-cta-fg text-[14px] font-semibold px-6 py-3.5 shadow-lg hover:bg-ink-dim active:scale-95 transition-all"
            style={{
              fontFamily: "var(--font-inter-loaded, var(--font-body))",
              boxShadow: "0 4px 24px rgba(26, 26, 26, 0.18)",
            }}
          >
            Book a Session
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
