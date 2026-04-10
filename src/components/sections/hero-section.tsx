"use client";

import AnimatedCounter from "@/components/animated-counter";

export default function HeroSection() {
  return (
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

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center gap-8 animate-fade-in-up">
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
            className="w-1.5 h-1.5 rounded-full animate-pulse"
            style={{ backgroundColor: "#39ff7d" }}
          />
          Now available on iOS
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-tight text-white">
          Your AI{" "}
          <span
            style={{
              color: "#39ff7d",
              textShadow: "0 0 40px rgba(57, 255, 125, 0.4)",
            }}
          >
            Padel Coach
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className="max-w-2xl text-lg sm:text-xl leading-relaxed"
          style={{ color: "rgba(240, 244, 248, 0.65)" }}
        >
          Upload your game, get AI-powered technique analysis, and improve
          faster than ever. Your pocket coach for every shot.
        </p>

        {/* Dual CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
          <a
            href="#"
            className="flex items-center gap-3 px-7 py-3.5 rounded-full font-semibold text-base transition-all hover:scale-[1.02]"
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
            className="flex items-center gap-2 px-6 py-3.5 rounded-full font-medium text-base transition-all hover:bg-white/5"
            style={{
              color: "rgba(240, 244, 248, 0.7)",
              border: "1px solid rgba(255, 255, 255, 0.12)",
            }}
          >
            See How It Works
          </a>
        </div>

        {/* Phone Mockup */}
        <div className="relative mt-8 mb-4">
          {/* Phone frame */}
          <div
            className="relative w-[220px] h-[440px] sm:w-[260px] sm:h-[520px] rounded-[36px] sm:rounded-[44px] overflow-hidden"
            style={{
              border: "3px solid rgba(255, 255, 255, 0.12)",
              boxShadow:
                "0 0 60px rgba(57, 255, 125, 0.12), 0 25px 50px rgba(0,0,0,0.5), inset 0 0 0 1px rgba(255,255,255,0.06)",
            }}
          >
            {/* Notch */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-[100px] h-[28px] sm:w-[120px] sm:h-[32px] rounded-b-2xl z-10"
              style={{ backgroundColor: "#0b0f14" }}
            />
            {/* Screen gradient placeholder */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(160deg, #0f1a14 0%, #0b1a10 30%, #0d1f12 50%, #0b0f14 100%)",
              }}
            />
            {/* Screen content mockup */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-lg font-bold"
                style={{ backgroundColor: "rgba(57, 255, 125, 0.15)", color: "#39ff7d" }}
              >
                P
              </div>
              <div
                className="w-full h-2 rounded-full"
                style={{ backgroundColor: "rgba(57, 255, 125, 0.12)" }}
              />
              <div
                className="w-3/4 h-2 rounded-full"
                style={{ backgroundColor: "rgba(57, 255, 125, 0.08)" }}
              />
              <div className="mt-4 grid grid-cols-2 gap-2 w-full">
                {[1, 2, 3, 4].map((n) => (
                  <div
                    key={n}
                    className="h-14 rounded-lg"
                    style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}
                  />
                ))}
              </div>
              <div
                className="mt-3 w-full h-8 rounded-full"
                style={{ backgroundColor: "rgba(57, 255, 125, 0.15)" }}
              />
            </div>
          </div>

          {/* Decorative glow behind phone */}
          <div
            className="absolute -inset-8 -z-10 rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(57, 255, 125, 0.08) 0%, transparent 70%)",
            }}
          />
        </div>

        {/* Animated stat counters */}
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 mt-2">
          <div className="flex flex-col items-center">
            <span className="text-2xl sm:text-3xl font-bold text-white">
              <AnimatedCounter end={8000} suffix="+" />
            </span>
            <span
              className="text-xs uppercase tracking-wider mt-1"
              style={{ color: "rgba(240, 244, 248, 0.45)" }}
            >
              Active Players
            </span>
          </div>
          <div
            className="hidden sm:block w-px h-10"
            style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
          />
          <div className="flex flex-col items-center">
            <span className="text-2xl sm:text-3xl font-bold text-white">
              <AnimatedCounter end={50000} suffix="+" />
            </span>
            <span
              className="text-xs uppercase tracking-wider mt-1"
              style={{ color: "rgba(240, 244, 248, 0.45)" }}
            >
              Videos Analyzed
            </span>
          </div>
          <div
            className="hidden sm:block w-px h-10"
            style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
          />
          <div className="flex flex-col items-center">
            <span
              className="text-2xl sm:text-3xl font-bold"
              style={{ color: "#39ff7d" }}
            >
              4.9
            </span>
            <span
              className="text-xs uppercase tracking-wider mt-1"
              style={{ color: "rgba(240, 244, 248, 0.45)" }}
            >
              App Store Rating
            </span>
          </div>
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
  );
}
