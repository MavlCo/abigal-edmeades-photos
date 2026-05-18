import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import MobileCTA from "@/components/layout/MobileCTA";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces-loaded",
  display: "swap",
  axes: ["SOFT", "WONK", "opsz"],
  weight: "variable",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter-loaded",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Abigal Edmeades Photos — Tauranga Photographer",
    template: "%s — Abigal Edmeades Photos",
  },
  description:
    "Tauranga family, event, and business photography by Abigal Edmeades. Capturing people doing what they love and being with those they love.",
  keywords: [
    "photographer Tauranga",
    "family photographer NZ",
    "event photography Bay of Plenty",
    "business portrait photographer",
    "Abigal Edmeades",
  ],
  openGraph: {
    type: "website",
    locale: "en_NZ",
    url: "https://www.abigaledmeadesphotos.com",
    siteName: "Abigal Edmeades Photos",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-NZ" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="bg-paper text-ink antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
        <MobileCTA />
      </body>
    </html>
  );
}
