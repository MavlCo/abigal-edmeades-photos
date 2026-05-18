import Image from "next/image";
import Link from "next/link";
import { Instagram, Facebook, Mail, MapPin } from "lucide-react";

const siteLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services & Pricing", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Journal", href: "/journal" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-elevated border-t border-border">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-16 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {/* Column 1 — Brand */}
          <div>
            <Link href="/" aria-label="Abigal Edmeades Photos — Home" className="inline-block mb-4">
              <Image
                src="/logos/logo.png"
                alt="Abigal Edmeades Photos"
                width={180}
                height={54}
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p
              className="text-[15px] text-ink-dim leading-relaxed mb-4 max-w-[240px]"
              style={{ fontFamily: "var(--font-inter-loaded, var(--font-body))" }}
            >
              Capturing people doing what they love and being with those they love.
            </p>
            <div className="flex items-center gap-1.5 text-ink-muted text-sm">
              <MapPin size={14} className="text-terracotta shrink-0" />
              <span style={{ fontFamily: "var(--font-inter-loaded, var(--font-body))" }}>
                Tauranga, Bay of Plenty, NZ
              </span>
            </div>
          </div>

          {/* Column 2 — Sitemap */}
          <div>
            <p
              className="eyebrow mb-5"
            >
              Pages
            </p>
            <ul className="flex flex-col gap-2.5">
              {siteLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[14px] text-ink-dim hover:text-terracotta transition-colors link-underline"
                    style={{ fontFamily: "var(--font-inter-loaded, var(--font-body))" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Social & contact */}
          <div>
            <p className="eyebrow mb-5">Connect</p>
            <div className="flex flex-col gap-3 mb-6">
              <a
                href="https://www.instagram.com/aedmeadesphotos"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[14px] text-ink-dim hover:text-terracotta transition-colors group"
                style={{ fontFamily: "var(--font-inter-loaded, var(--font-body))" }}
              >
                <Instagram size={16} className="group-hover:text-terracotta transition-colors" />
                @aedmeadesphotos
              </a>
              <a
                href="https://www.facebook.com/p/AE-Photos-61556205532140"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[14px] text-ink-dim hover:text-terracotta transition-colors group"
                style={{ fontFamily: "var(--font-inter-loaded, var(--font-body))" }}
              >
                <Facebook size={16} className="group-hover:text-terracotta transition-colors" />
                AE Photos
              </a>
              <a
                href="mailto:hello@abigaledmeadesphotos.com"
                className="flex items-center gap-3 text-[14px] text-ink-dim hover:text-terracotta transition-colors group"
                style={{ fontFamily: "var(--font-inter-loaded, var(--font-body))" }}
              >
                <Mail size={16} className="group-hover:text-terracotta transition-colors" />
                hello@abigaledmeadesphotos.com
              </a>
            </div>
            <p
              className="text-[12px] text-ink-muted leading-relaxed"
              style={{ fontFamily: "var(--font-inter-loaded, var(--font-body))" }}
            >
              Client galleries available through ShootProof.
              Digital Pie partnership for commercial work.
            </p>
          </div>
        </div>

        {/* Bottom rule */}
        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p
            className="text-[12px] text-ink-muted"
            style={{ fontFamily: "var(--font-inter-loaded, var(--font-body))" }}
          >
            © {new Date().getFullYear()} Abigal Edmeades Photos. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link
              href="/privacy"
              className="text-[12px] text-ink-muted hover:text-terracotta transition-colors"
              style={{ fontFamily: "var(--font-inter-loaded, var(--font-body))" }}
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-[12px] text-ink-muted hover:text-terracotta transition-colors"
              style={{ fontFamily: "var(--font-inter-loaded, var(--font-body))" }}
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
