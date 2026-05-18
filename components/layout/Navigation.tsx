"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Button from "@/components/ui/Button";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Journal", href: "/journal" },
  { label: "FAQ", href: "/faq" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setDrawerOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [drawerOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-paper/90 backdrop-blur-md border-b border-border shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-6 lg:px-16 h-16 lg:h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" aria-label="Abigal Edmeades Photos — Home">
            <Image
              src="/logos/logo.png"
              alt="Abigal Edmeades Photos"
              width={200}
              height={60}
              className="h-14 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[14px] font-medium transition-colors link-underline ${
                  pathname === link.href
                    ? "text-terracotta"
                    : "text-ink-dim hover:text-ink"
                }`}
                style={{ fontFamily: "var(--font-inter-loaded, var(--font-body))" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button href="/contact" variant="primary" size="sm">
              Book a Session
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 text-ink"
            onClick={() => setDrawerOpen(true)}
            aria-label="Open navigation menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {drawerOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-ink/40 z-50 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setDrawerOpen(false)}
            />
            <motion.aside
              className="fixed top-0 right-0 h-full w-[min(340px,90vw)] bg-paper z-50 flex flex-col lg:hidden shadow-2xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
            >
              {/* Terracotta accent rule */}
              <div className="h-1 bg-terracotta w-full" />

              <div className="flex items-center justify-between px-6 py-5">
                <Image
                  src="/logos/logo.png"
                  alt="Abigal Edmeades Photos"
                  width={160}
                  height={48}
                  className="h-11 w-auto object-contain"
                />
                <button
                  onClick={() => setDrawerOpen(false)}
                  className="p-2 text-ink-dim"
                  aria-label="Close navigation menu"
                >
                  <X size={20} />
                </button>
              </div>

              <nav className="flex-1 px-6 py-4 flex flex-col gap-1" aria-label="Mobile navigation">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 + 0.1 }}
                  >
                    <Link
                      href={link.href}
                      className={`block py-3 text-[28px] font-medium leading-none transition-colors ${
                        pathname === link.href
                          ? "text-terracotta"
                          : "text-ink hover:text-terracotta"
                      }`}
                      style={{ fontFamily: "var(--font-fraunces-loaded, var(--font-display))" }}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="px-6 pb-8 pt-4">
                <Button href="/contact" variant="primary" size="lg" fullWidth>
                  Book a Session
                </Button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
