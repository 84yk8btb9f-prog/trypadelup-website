import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import HeroSection from "@/components/sections/hero-section";
import AppRevealSection from "@/components/sections/app-reveal-section";
import HowItWorksSection from "@/components/sections/how-it-works-section";
import FeaturesSection from "@/components/sections/features-section";
import DemoSection from "@/components/sections/demo-section";
import SocialProofSection from "@/components/sections/social-proof-section";
import PricingSection from "@/components/sections/pricing-section";
import FaqSection from "@/components/sections/faq-section";
import FinalCta from "@/components/sections/final-cta-section";
import StickyMobileCta from "@/components/sticky-mobile-cta";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <AppRevealSection />
        <HowItWorksSection />
        <FeaturesSection />
        <DemoSection />
        <SocialProofSection />
        <PricingSection />
        <FaqSection />
        <FinalCta />
      </main>
      <Footer />
      <StickyMobileCta />
    </>
  );
}
