'use client';

import { useEffect, useState } from 'react';

const APP_STORE_URL = 'https://apps.apple.com/app/padelup/id0000000000';

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="relative min-h-screen flex items-end lg:items-center px-6 sm:px-10 lg:px-16 pt-24 pb-20 lg:pb-0 overflow-hidden bg-[#0A0A0A]">
      {/* Subtle gradient blob - just one, asymmetric */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(0,230,118,0.05)_0%,transparent_70%)]" />

      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-start lg:items-center gap-12 lg:gap-0">
        {/* Left: Copy */}
        <div className="flex-1 max-w-2xl">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.92] tracking-tight font-heading text-white">
            Your padel.
            <br />
            <span className="text-[#00E676]">Analyzed by AI.</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-white/50 max-w-md leading-relaxed">
            Upload a clip. Get a score. Improve every session.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-start gap-4">
            <a
              href={APP_STORE_URL}
              className="px-8 py-4 rounded-full font-semibold text-base bg-[#00E676] text-[#0A0A0A] hover:brightness-110 transition-all"
            >
              Start free trial
            </a>
          </div>

          <p className="mt-6 text-sm text-white/30">
            4.9&#9733; from 8,000+ players
          </p>
        </div>

        {/* Right: Phone mockup, rotated */}
        <div className="flex-shrink-0 lg:ml-auto relative">
          <div
            className={`
              relative w-[260px] sm:w-[280px] lg:w-[300px]
              rotate-3 transition-all duration-700
              ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
            `}
          >
            {/* Phone shell */}
            <div className="rounded-[36px] border border-white/10 bg-[#111] p-2.5 shadow-2xl">
              {/* Notch */}
              <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-20 h-5 bg-[#111] rounded-b-xl z-20 flex items-center justify-center">
                <div className="w-10 h-3.5 rounded-full bg-black/80" />
              </div>
              {/* Screen */}
              <div className="rounded-[26px] bg-[#0A0A0A] overflow-hidden aspect-[9/19.5] relative flex flex-col items-center justify-center p-6">
                {/* Fake app UI */}
                <div className="w-full space-y-5">
                  <div className="text-center">
                    <div className="relative inline-flex items-center justify-center">
                      <svg className="w-20 h-20" viewBox="0 0 96 96">
                        <circle cx="48" cy="48" r="38" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="4" />
                        <circle
                          cx="48" cy="48" r="38" fill="none"
                          stroke="#00E676" strokeWidth="4" strokeLinecap="round"
                          strokeDasharray="179 239"
                          transform="rotate(-90 48 48)"
                        />
                      </svg>
                      <span className="absolute text-2xl font-bold text-white font-heading">7.5</span>
                    </div>
                  </div>
                  <div className="space-y-2.5">
                    {[
                      { label: 'Grip', w: '80%' },
                      { label: 'Stance', w: '60%' },
                      { label: 'Swing', w: '70%' },
                      { label: 'Position', w: '90%' },
                    ].map((b) => (
                      <div key={b.label}>
                        <div className="flex justify-between text-[10px] mb-0.5">
                          <span className="text-white/40">{b.label}</span>
                        </div>
                        <div className="w-full h-1 rounded-full bg-white/[0.06]">
                          <div className="h-full rounded-full bg-[#00E676]" style={{ width: b.w }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* Home bar */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 rounded-full bg-white/15" />
          </div>
        </div>
      </div>
    </section>
  );
}
