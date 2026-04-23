import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Navbar from "@/components/navbar";
import { BASE_URL } from "@/lib/config";

export const metadata: Metadata = {
  alternates: { canonical: BASE_URL },
};
import HeroSection from "@/components/sections/hero-section";
import StickyMobileCta from "@/components/sticky-mobile-cta";

const ScreenshotsSection = dynamic(() => import("@/components/sections/screenshots-section"));
const ProblemSection = dynamic(() => import("@/components/sections/problem-section"));
const FeaturesSection = dynamic(() => import("@/components/sections/features-section"));
const SocialProofSection = dynamic(() => import("@/components/sections/social-proof-section"));
const PricingSection = dynamic(() => import("@/components/sections/pricing-section"));
const FaqSection = dynamic(() => import("@/components/sections/faq-section"));
const FinalCta = dynamic(() => import("@/components/sections/final-cta-section"));

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 overflow-x-clip">
        <HeroSection />
        <ScreenshotsSection />
        <ProblemSection />
        <FeaturesSection />
        <SocialProofSection />
        <PricingSection />
        <FaqSection />
      </main>
      <FinalCta />
      <StickyMobileCta />
    </>
  );
}
