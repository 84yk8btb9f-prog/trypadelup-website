"use client";

import AnimatedCounter from "@/components/animated-counter";
import { Star } from "lucide-react";

const APP_STORE_URL = "https://apps.apple.com/app/padelup/id0000000000";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center px-4 pt-20 pb-16 overflow-hidden bg-[#0A0A0A]">
      {/* Background orbs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none animate-glow-pulse bg-[radial-gradient(circle,rgba(0,245,212,0.08)_0%,rgba(0,245,212,0.02)_40%,transparent_70%)]" />
      <div className="absolute top-1/3 right-[-10%] w-[500px] h-[500px] rounded-full pointer-events-none animate-glow-pulse bg-[radial-gradient(circle,rgba(255,77,148,0.08)_0%,transparent_70%)]" style={{ animationDelay: "2s" }} />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-6 items-center">
        {/* Left: Text — 7 columns */}
        <div className="lg:col-span-7 flex flex-col gap-6 text-center lg:text-left">
          {/* Embedded testimonial — social proof in hero */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.08] mx-auto lg:mx-0 w-fit">
            <div className="flex -space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={12} fill="#00E676" color="#00E676" />
              ))}
            </div>
            <span className="text-xs text-white/60">
              &ldquo;Improved more in a month than a year of lessons&rdquo;
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[0.95]"
            style={{ fontFamily: "'Clash Display', sans-serif" }}
          >
            <span className="text-white">Your </span>
            <span className="gradient-text-ai">AI</span>
            <br />
            <span className="text-white">Padel Coach</span>
          </h1>

          {/* Subtitle */}
          <p className="max-w-lg text-lg sm:text-xl leading-relaxed text-white/60 mx-auto lg:mx-0">
            Upload your game, get AI-powered technique analysis, and improve faster than ever. Your pocket coach for every shot.
          </p>

          {/* Dual CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-2 justify-center lg:justify-start">
            <a
              href={APP_STORE_URL}
              className="flex items-center gap-3 px-7 py-3.5 rounded-full font-semibold text-base bg-teal text-[#0A0A0A] shadow-[0_0_40px_rgba(0,245,212,0.35)] hover:scale-[1.02] transition-all"
            >
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              Download on App Store
            </a>

            <a
              href="#how-it-works"
              className="flex items-center gap-2 px-6 py-3.5 rounded-full font-medium text-base text-white/70 border border-white/12 hover:bg-white/5 transition-all"
            >
              See How It Works
            </a>
          </div>

          {/* Trust bar */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 sm:gap-8 mt-4">
            <div className="flex flex-col items-center lg:items-start">
              <span className="text-xl sm:text-2xl font-bold text-white">
                <AnimatedCounter end={8000} suffix="+" />
              </span>
              <span className="text-xs uppercase tracking-wider mt-1 text-white/45">
                Active Players
              </span>
            </div>
            <div className="hidden sm:block w-px h-10 bg-white/10" />
            <div className="flex flex-col items-center lg:items-start">
              <span className="text-xl sm:text-2xl font-bold text-teal">4.9</span>
              <span className="text-xs uppercase tracking-wider mt-1 text-white/45">
                App Store Rating
              </span>
            </div>
            <div className="hidden sm:block w-px h-10 bg-white/10" />
            <div className="flex flex-col items-center lg:items-start">
              <span className="text-xl sm:text-2xl font-bold text-white">
                <AnimatedCounter end={50000} suffix="+" />
              </span>
              <span className="text-xs uppercase tracking-wider mt-1 text-white/45">
                Analyses Done
              </span>
            </div>
          </div>
        </div>

        {/* Right: Phone Mockup — 5 columns, rotated with magenta glow */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative animate-float">
            {/* Magenta glow behind phone */}
            <div className="absolute -inset-16 -z-10 rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(255,77,148,0.15)_0%,transparent_70%)]" />
            {/* Teal glow offset */}
            <div className="absolute -inset-20 -z-10 rounded-full pointer-events-none bg-[radial-gradient(circle_at_30%_70%,rgba(0,245,212,0.08)_0%,transparent_60%)]" />

            <div
              className="relative w-[240px] h-[480px] sm:w-[270px] sm:h-[540px] rounded-[40px] sm:rounded-[44px] overflow-hidden border-[3px] border-white/12 shadow-[0_0_80px_rgba(255,77,148,0.12),0_30px_60px_rgba(0,0,0,0.5),inset_0_0_0_1px_rgba(255,255,255,0.06)]"
              style={{ transform: "rotate(5deg)" }}
            >
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[110px] h-[30px] sm:w-[120px] sm:h-[32px] rounded-b-2xl z-10 bg-[#0A0A0A]" />
              {/* Screen bg */}
              <div className="absolute inset-0 bg-[linear-gradient(160deg,#0d1a18_0%,#0A0A0A_50%,#110d15_100%)]" />
              {/* Screen content */}
              <div className="absolute inset-0 flex flex-col items-center pt-12 px-5 gap-3">
                {/* Score circle */}
                <div className="relative w-16 h-16 rounded-full flex items-center justify-center mt-2 border-[3px] border-teal shadow-[0_0_25px_rgba(0,245,212,0.2)]">
                  <div className="text-center">
                    <span className="text-xl font-bold text-teal">7.5</span>
                    <span className="block text-[8px] uppercase tracking-wider text-white/50">Score</span>
                  </div>
                </div>
                {/* Technique bars */}
                <div className="w-full mt-2 flex flex-col gap-2">
                  {[
                    { label: "Grip", score: "8/10", pct: "80%", color: "#00E676" },
                    { label: "Stance", score: "6/10", pct: "60%", color: "#00E676" },
                    { label: "Swing", score: "7/10", pct: "70%", color: "#00E676" },
                    { label: "Position", score: "9/10", pct: "90%", color: "#00E676" },
                  ].map((bar) => (
                    <div key={bar.label}>
                      <div className="flex justify-between text-[9px] mb-0.5">
                        <span className="text-white/70">{bar.label}</span>
                        <span style={{ color: bar.color }}>{bar.score}</span>
                      </div>
                      <div className="w-full h-1.5 rounded-full bg-white/[0.08]">
                        <div className="h-full rounded-full" style={{ width: bar.pct, background: bar.color }} />
                      </div>
                    </div>
                  ))}
                </div>
                {/* Tips */}
                <div className="w-full mt-2 p-3 rounded-xl bg-white/[0.04] border border-white/[0.06]">
                  <p className="text-[9px] font-semibold mb-1 text-teal">Top Tips</p>
                  <p className="text-[8px] leading-relaxed text-white/60">
                    1. Widen base for stability<br />
                    2. Follow through higher<br />
                    3. Keep wrist firm at contact
                  </p>
                </div>
                {/* Bottom nav */}
                <div className="absolute bottom-4 left-4 right-4 flex justify-around items-center py-2 rounded-2xl bg-white/[0.04] border border-white/[0.06]">
                  {["H", "V", "D", "U"].map((letter, i) => (
                    <span
                      key={letter}
                      className={`text-[9px] font-semibold ${i === 1 ? "text-teal" : "text-white/30"}`}
                    >
                      {letter}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-8 bg-current opacity-40" />
      </div>
    </section>
  );
}
