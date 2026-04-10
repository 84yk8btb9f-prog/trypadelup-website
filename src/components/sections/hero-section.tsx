'use client';

import { AnimatedGroup } from '@/components/ui/animated-group';
import { ElegantShape } from '@/components/ui/elegant-shapes';
import { Video, Cpu, TrendingUp } from 'lucide-react';

const APP_STORE_URL = 'https://apps.apple.com/app/padelup/id0000000000';

const steps = [
  { icon: Video, title: 'Record', desc: 'Capture your match with any phone' },
  { icon: Cpu, title: 'Analyze', desc: 'AI breaks down every frame' },
  { icon: TrendingUp, title: 'Improve', desc: 'Follow drills, level up weekly' },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-20 pb-16 overflow-hidden bg-[#0A0A0A]">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(0,230,118,0.07)_0%,rgba(0,230,118,0.02)_40%,transparent_70%)]" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(0,230,118,0.04)_0%,transparent_70%)]" />

      {/* Floating elegant shapes */}
      <ElegantShape
        className="top-[15%] left-[5%] hidden lg:block"
        width={380}
        height={90}
        rotate={12}
        delay={0.3}
        gradient="from-[#00E676]/[0.06]"
      />
      <ElegantShape
        className="top-[10%] right-[10%] hidden lg:block"
        width={300}
        height={70}
        rotate={-8}
        delay={0.6}
        gradient="from-[#00E676]/[0.08]"
      />
      <ElegantShape
        className="bottom-[20%] left-[15%] hidden lg:block"
        width={250}
        height={60}
        rotate={20}
        delay={0.9}
        gradient="from-[#00E676]/[0.05]"
      />
      <ElegantShape
        className="bottom-[30%] right-[5%] hidden lg:block"
        width={340}
        height={80}
        rotate={-15}
        delay={1.2}
        gradient="from-[#00E676]/[0.07]"
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        <AnimatedGroup
          preset="blur-slide"
          className="flex flex-col items-center gap-8"
          variants={{
            container: {
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
            },
          }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#00E676] animate-pulse" />
            <span className="text-sm font-medium text-white/60 tracking-wide">AI-Powered Padel Coach</span>
          </div>

          {/* Headline */}
          <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-[9rem] font-bold tracking-tight leading-[0.9] font-heading">
            <span className="bg-gradient-to-b from-white to-white/80 bg-clip-text text-transparent">
              Elevate Your
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#00E676] to-[#00E676]/70 bg-clip-text text-transparent">
              Padel Game
            </span>
          </h1>

          {/* Subtitle */}
          <p className="max-w-xl text-lg sm:text-xl leading-relaxed text-white/50">
            Upload your game footage. Get AI-powered technique analysis.
            Improve faster than ever before.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
            <a
              href={APP_STORE_URL}
              className="flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-base bg-[#00E676] text-[#0A0A0A] shadow-[0_0_20px_rgba(0,230,118,0.08)] hover:shadow-[0_0_40px_rgba(0,230,118,0.15)] hover:-translate-y-px transition-all"
            >
              Start Free Trial
            </a>
            <a
              href="#features"
              className="flex items-center gap-2 px-8 py-4 rounded-full font-medium text-base text-white/60 border border-white/[0.1] hover:bg-white/[0.04] hover:text-white/80 transition-all"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
              See Features
            </a>
          </div>

          {/* Mini how-it-works — 3 steps inline */}
          <div className="grid grid-cols-3 gap-4 sm:gap-6 mt-4 pt-8 border-t border-white/[0.06] max-w-lg w-full">
            {steps.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.title} className="flex flex-col items-center gap-2 text-center">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#00E676]/10 border border-[#00E676]/15">
                    <Icon size={18} className="text-[#00E676]" strokeWidth={1.5} />
                  </div>
                  <p className="text-sm font-semibold text-white">{s.title}</p>
                  <p className="text-xs text-white/50 leading-snug hidden sm:block">{s.desc}</p>
                </div>
              );
            })}
          </div>
        </AnimatedGroup>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20">
        <span className="text-xs uppercase tracking-[0.25em]">Scroll</span>
        <div className="w-px h-8 bg-current opacity-40" />
      </div>
    </section>
  );
}
