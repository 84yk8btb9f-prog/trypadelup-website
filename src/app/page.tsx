import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FeaturesSection from "@/components/sections/features-section";
import HowItWorksSection from "@/components/sections/how-it-works-section";
import SocialProofSection from "@/components/sections/social-proof-section";
import PricingSection from "@/components/sections/pricing-section";
import FaqSection from "@/components/sections/faq-section";
import StickyMobileCta from "@/components/sticky-mobile-cta";
import HeroSection from "@/components/sections/hero-section";
import FinalCta from "@/components/sections/final-cta-section";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 overflow-hidden">
        <HeroSection />
        <HowItWorksSection />
        <FeaturesSection />
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
