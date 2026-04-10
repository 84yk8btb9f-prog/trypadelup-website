import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FeaturesSection from "@/components/sections/features-section";
import SocialProofSection from "@/components/sections/social-proof-section";
import PricingSection from "@/components/sections/pricing-section";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 overflow-hidden">
        {/* Hero */}
        <section
          className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 pt-16"
          style={{ backgroundColor: "#0b0f14" }}
        >
          {/* Glow orb */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none animate-glow-pulse"
            style={{
              background:
                "radial-gradient(circle, rgba(57, 255, 125, 0.08) 0%, rgba(57, 255, 125, 0.03) 40%, transparent 70%)",
            }}
          />

          <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-6 animate-fade-in-up">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase"
              style={{
                backgroundColor: "rgba(57, 255, 125, 0.1)",
                border: "1px solid rgba(57, 255, 125, 0.2)",
                color: "#39ff7d",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: "#39ff7d" }}
              />
              Now available on iOS
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-tight text-white">
              Train Smarter.{" "}
              <span
                className="block"
                style={{
                  color: "#39ff7d",
                  textShadow: "0 0 40px rgba(57, 255, 125, 0.4)",
                }}
              >
                Play Better.
              </span>
            </h1>

            {/* Subtitle */}
            <p
              className="max-w-2xl text-lg sm:text-xl leading-relaxed"
              style={{ color: "rgba(240, 244, 248, 0.65)" }}
            >
              AI-powered padel coaching — analyze your technique, track
              nutrition, and level up your game.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
              <a
                href="#"
                className="flex items-center gap-3 px-7 py-3.5 rounded-full font-semibold text-base transition-all"
                style={{
                  backgroundColor: "#39ff7d",
                  color: "#0b0f14",
                  boxShadow: "0 0 40px rgba(57, 255, 125, 0.35)",
                }}
              >
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                Download on the App Store
              </a>

              <a
                href="#features"
                className="flex items-center gap-2 px-6 py-3.5 rounded-full font-medium text-base transition-all"
                style={{
                  color: "rgba(240, 244, 248, 0.7)",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                }}
              >
                Learn More ↓
              </a>
            </div>

            {/* Social proof mini */}
            <div
              className="flex items-center gap-3 mt-4 text-sm"
              style={{ color: "rgba(240, 244, 248, 0.45)" }}
            >
              <div className="flex -space-x-1">
                {["C", "S", "A", "M", "L"].map((letter, i) => (
                  <div
                    key={i}
                    className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold border-2"
                    style={{
                      backgroundColor: `hsl(${i * 60 + 140}, 60%, 25%)`,
                      borderColor: "#0b0f14",
                      color: "#39ff7d",
                    }}
                  >
                    {letter}
                  </div>
                ))}
              </div>
              <span>Loved by 8,000+ padel players worldwide</span>
            </div>
          </div>

          {/* Scroll indicator */}
          <div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in"
            style={{ color: "rgba(240, 244, 248, 0.3)" }}
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <div className="w-px h-8 bg-current opacity-40" />
          </div>
        </section>

        <FeaturesSection />
        <SocialProofSection />
        <PricingSection />

        {/* Final CTA */}
        <section
          className="relative py-24 px-4 text-center overflow-hidden"
          style={{ backgroundColor: "#0b0f14" }}
        >
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(57, 255, 125, 0.06) 0%, transparent 70%)",
            }}
          />
          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center gap-6">
            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
              Ready to level up your padel game?
            </h2>
            <p style={{ color: "rgba(240, 244, 248, 0.6)" }}>
              Join thousands of padel players using AI to improve faster.
            </p>
            <a
              href="#"
              className="flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-lg transition-all mt-2"
              style={{
                backgroundColor: "#39ff7d",
                color: "#0b0f14",
                boxShadow: "0 0 50px rgba(57, 255, 125, 0.4)",
              }}
            >
              <svg
                width="22"
                height="22"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              Download on the App Store
            </a>
            <p
              className="text-sm"
              style={{ color: "rgba(240, 244, 248, 0.4)" }}
            >
              Available on iOS · Free to download · 3-day free trial
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
