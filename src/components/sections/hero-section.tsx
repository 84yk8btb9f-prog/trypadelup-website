"use client";

import { useEffect, useState } from "react";
import PhoneFrame from "@/components/mockups/phone-frame";
import MockupAnalysis from "@/components/mockups/analysis-mockup";

const APP_STORE_URL = "https://apps.apple.com/app/padelup/id0000000000";

function StarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="#FFB800" aria-hidden="true">
      <path d="M8 1.3L9.8 5.1L14 5.7L11 8.6L11.7 12.7L8 10.8L4.3 12.7L5 8.6L2 5.7L6.2 5.1L8 1.3Z" />
    </svg>
  );
}

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="relative min-h-screen flex items-center px-6 sm:px-10 lg:px-16 pt-24 pb-20 overflow-hidden bg-[#0A0A0A]">
      {/* Subtle gradient blob */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(0,230,118,0.04)_0%,transparent_70%)]" />

      <div className="relative z-10 max-w-6xl mx-auto w-full flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
        {/* Left: Copy */}
        <div className="flex-1 max-w-xl">
          <h1
            className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[0.92] tracking-tight font-heading text-white opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]"
          >
            Your padel.
            <br />
            <span className="text-[#00E676]">Analyzed by AI.</span>
          </h1>

          <p
            className="mt-6 text-lg sm:text-xl text-white/50 max-w-md leading-relaxed opacity-0 animate-[fadeInUp_0.6s_ease-out_0.08s_forwards]"
          >
            Upload a clip of your shot. Get frame-by-frame technique analysis
            with a score, personalized tips, and drills to improve.
          </p>

          <div
            className="mt-8 opacity-0 animate-[fadeInUp_0.6s_ease-out_0.16s_forwards]"
          >
            <a
              href={APP_STORE_URL}
              className="inline-flex px-8 py-4 rounded-full font-semibold text-base bg-[#00E676] text-[#0A0A0A] hover:brightness-110 transition-all"
            >
              Start free trial
            </a>
          </div>

          <div
            className="mt-6 flex items-center gap-3 opacity-0 animate-[fadeInUp_0.6s_ease-out_0.24s_forwards]"
          >
            <p className="text-sm text-white/35">
              Trusted by 8,000+ padel players
            </p>
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} />
              ))}
            </div>
          </div>
        </div>

        {/* Right: Phone mockup */}
        <div className="flex-shrink-0 relative">
          <div
            className={`
              rotate-3 transition-all duration-700
              drop-shadow-[0_20px_50px_rgba(0,230,118,0.12)]
              ${mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}
            `}
          >
            <PhoneFrame>
              <MockupAnalysis />
            </PhoneFrame>
          </div>
        </div>
      </div>
    </section>
  );
}
