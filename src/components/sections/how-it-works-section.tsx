'use client';

import { motion } from 'framer-motion';
import { Video, Cpu, TrendingUp } from 'lucide-react';
import { MotionDiv } from '@/components/ui/motion-wrapper';

const steps = [
  {
    icon: Video,
    number: '01',
    title: 'Record',
    description: 'Capture your padel match or training session with your phone camera. Any angle, any court.',
  },
  {
    icon: Cpu,
    number: '02',
    title: 'Analyze',
    description: 'Our AI breaks down your technique frame-by-frame with precision scoring and actionable feedback.',
  },
  {
    icon: TrendingUp,
    number: '03',
    title: 'Improve',
    description: 'Follow personalized drills, track your progress, and level up your game week over week.',
  },
];

export default function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="py-32 px-4 bg-[#0A0A0A] relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="max-w-6xl mx-auto">
        <MotionDiv className="text-center mb-20">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] mb-4 text-[#00E676]">
            How it works
          </p>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white"
            style={{ fontFamily: "'Clash Display', sans-serif" }}
          >
            Three steps to a better game
          </h2>
        </MotionDiv>

        {/* Desktop: horizontal cards */}
        <div className="hidden lg:grid grid-cols-3 gap-8 relative">
          {/* Connecting gradient line */}
          <div className="absolute top-[100px] left-[15%] right-[15%] h-px bg-gradient-to-r from-[#00E676]/20 via-[#00E676]/10 to-[#00E676]/20" />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <MotionDiv key={step.title} delay={i * 0.15}>
                <div className="relative p-8 rounded-2xl bg-white/[0.04] border border-white/[0.08] backdrop-blur-xl group hover:-translate-y-1 transition-transform duration-300">
                  {/* Large faded number */}
                  <span
                    className="absolute top-4 right-6 text-[100px] font-bold leading-none text-white/[0.03] pointer-events-none select-none"
                    style={{ fontFamily: "'Clash Display', sans-serif" }}
                  >
                    {step.number}
                  </span>

                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-[#00E676]/10 border border-[#00E676]/15 mb-6">
                      <Icon size={26} className="text-[#00E676]" strokeWidth={1.5} />
                    </div>
                    <h3
                      className="text-2xl font-semibold text-white mb-3"
                      style={{ fontFamily: "'Clash Display', sans-serif" }}
                    >
                      {step.title}
                    </h3>
                    <p className="text-base leading-relaxed text-white/40">
                      {step.description}
                    </p>
                  </div>
                </div>
              </MotionDiv>
            );
          })}
        </div>

        {/* Mobile: stacked */}
        <div className="lg:hidden flex flex-col gap-6">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <MotionDiv key={step.title} delay={i * 0.1}>
                <div className="relative flex items-start gap-5 p-6 rounded-2xl bg-white/[0.04] border border-white/[0.08] backdrop-blur-xl">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#00E676]/10 shrink-0">
                    <Icon size={22} className="text-[#00E676]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold text-[#00E676]/60">{step.number}</span>
                      <h3
                        className="text-lg font-semibold text-white"
                        style={{ fontFamily: "'Clash Display', sans-serif" }}
                      >
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-sm leading-relaxed text-white/40">
                      {step.description}
                    </p>
                  </div>
                </div>
              </MotionDiv>
            );
          })}
        </div>
      </div>
    </section>
  );
}
