import type { Metadata } from "next";
import Hero from "@/components/sections/home/Hero";
import ThreeTrack from "@/components/sections/home/ThreeTrack";
import FeaturedSessions from "@/components/sections/home/FeaturedSessions";
import MeetAbigal from "@/components/sections/home/MeetAbigal";
import Process from "@/components/sections/home/Process";
import CTABanner from "@/components/sections/home/CTABanner";

export const metadata: Metadata = {
  title: "Tauranga Photographer — Family, Event & Business",
  description:
    "Abigal Edmeades Photos — Tauranga photographer specialising in family, event, and business photography. Capturing people doing what they love.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ThreeTrack />
      <FeaturedSessions />
      <MeetAbigal />
      <Process />
      <CTABanner />
    </>
  );
}
