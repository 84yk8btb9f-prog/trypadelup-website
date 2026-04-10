import dynamic from "next/dynamic";
import Navbar from "@/components/navbar";
import HeroSection from "@/components/sections/hero-section";
import StickyMobileCta from "@/components/sticky-mobile-cta";

const FeaturesSection = dynamic(() => import("@/components/sections/features-section"));
const DemoSection = dynamic(() => import("@/components/sections/demo-section"));
const SocialProofSection = dynamic(() => import("@/components/sections/social-proof-section"));
const PricingSection = dynamic(() => import("@/components/sections/pricing-section"));
const FinalCta = dynamic(() => import("@/components/sections/final-cta-section"));

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <DemoSection />
        <SocialProofSection />
        <PricingSection />
      </main>
      <FinalCta />
      <StickyMobileCta />
    </>
  );
}
