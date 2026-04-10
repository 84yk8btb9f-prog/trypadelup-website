'use client';

import { MotionDiv } from '@/components/ui/motion-wrapper';

const APP_STORE_URL = 'https://apps.apple.com/app/padelup/id0000000000';

export default function FinalCta() {
  return (
    <section className="relative py-20 sm:py-24 px-4 text-center overflow-hidden bg-[#0A0A0A]">
      {/* Gradient divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00E676]/10 to-transparent" />

      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(0,230,118,0.04)_0%,transparent_70%)]" />

      <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center gap-6">
        <MotionDiv className="flex flex-col items-center gap-6">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[0.95] font-heading">
            Ready to play{' '}
            <span className="bg-gradient-to-r from-[#00E676] to-[#00E676]/60 bg-clip-text text-transparent">
              smarter?
            </span>
          </h2>

          <a
            href={APP_STORE_URL}
            className="flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-base bg-[#00E676] text-[#0A0A0A] shadow-[0_0_20px_rgba(0,230,118,0.08)] hover:shadow-[0_0_30px_rgba(0,230,118,0.15)] hover:-translate-y-px transition-all"
          >
            Start Free Trial
          </a>

          <p className="text-sm text-white/40">
            Available on iOS &middot; 3-day free trial
          </p>
        </MotionDiv>
      </div>
    </section>
  );
}
