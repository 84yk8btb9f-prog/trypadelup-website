'use client';

import { Video, UtensilsCrossed, Dumbbell } from 'lucide-react';
import { AnimatedCardStack } from '@/components/ui/animated-card-stack';
import { MotionDiv } from '@/components/ui/motion-wrapper';

const featureCards = [
  {
    id: 1,
    title: 'AI Video Analysis',
    description: 'Frame-by-frame technique breakdown with personalized coaching tips.',
    icon: <Video size={20} strokeWidth={1.5} />,
    content: (
      <div className="w-full max-w-xs">
        {/* Mini technique score UI */}
        <div className="text-center mb-6">
          <div className="relative inline-flex items-center justify-center">
            <svg className="w-24 h-24" viewBox="0 0 120 120">
              <circle cx="60" cy="60" r="52" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="5" />
              <circle
                cx="60" cy="60" r="52" fill="none"
                stroke="#00E676" strokeWidth="5" strokeLinecap="round"
                strokeDasharray="245 327"
                transform="rotate(-90 60 60)"
              />
            </svg>
            <span
              className="absolute text-3xl font-bold text-white"
              style={{ fontFamily: "'Clash Display', sans-serif" }}
            >
              7.5
            </span>
          </div>
        </div>
        <div className="space-y-3">
          {[
            { label: 'Grip', pct: '80%' },
            { label: 'Stance', pct: '60%' },
            { label: 'Swing', pct: '70%' },
            { label: 'Position', pct: '90%' },
          ].map((bar) => (
            <div key={bar.label}>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-white/50">{bar.label}</span>
                <span className="text-[#00E676]">{bar.pct}</span>
              </div>
              <div className="w-full h-1.5 rounded-full bg-white/[0.06]">
                <div className="h-full rounded-full bg-[#00E676]" style={{ width: bar.pct }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 2,
    title: 'Smart Nutrition',
    description: 'Snap a photo of your meal and AI identifies macros instantly.',
    icon: <UtensilsCrossed size={20} strokeWidth={1.5} />,
    content: (
      <div className="w-full max-w-xs space-y-4">
        {/* Mini meal tracking UI */}
        <div className="flex items-center justify-between p-4 rounded-xl bg-white/[0.04] border border-white/[0.06]">
          <div>
            <p className="text-sm font-semibold text-white">Today&apos;s Calories</p>
            <p className="text-2xl font-bold text-[#00E676]" style={{ fontFamily: "'Clash Display', sans-serif" }}>1,842</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-white/40">Target</p>
            <p className="text-sm text-white/60">2,200</p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: 'Protein', val: '128g', pct: '75%' },
            { label: 'Carbs', val: '210g', pct: '65%' },
            { label: 'Fat', val: '52g', pct: '55%' },
          ].map((macro) => (
            <div key={macro.label} className="text-center">
              <p className="text-[10px] text-white/40 uppercase tracking-wider mb-1">{macro.label}</p>
              <p className="text-sm font-bold text-white">{macro.val}</p>
              <div className="w-full h-1 rounded-full bg-white/[0.06] mt-1">
                <div className="h-full rounded-full bg-[#00E676]/60" style={{ width: macro.pct }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 3,
    title: 'Training Plans',
    description: 'AI-generated daily drills based on your weak points.',
    icon: <Dumbbell size={20} strokeWidth={1.5} />,
    content: (
      <div className="w-full max-w-xs space-y-3">
        {/* Mini drill cards */}
        {[
          { name: 'Bandeja Drill', duration: '15 min', level: 'Intermediate' },
          { name: 'Volley Precision', duration: '10 min', level: 'Beginner' },
          { name: 'Smash Power', duration: '12 min', level: 'Advanced' },
        ].map((drill, i) => (
          <div
            key={drill.name}
            className="flex items-center gap-4 p-3.5 rounded-xl bg-white/[0.04] border border-white/[0.06]"
          >
            <div className="w-10 h-10 rounded-lg bg-[#00E676]/10 flex items-center justify-center text-[#00E676] text-sm font-bold shrink-0">
              {i + 1}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-white truncate">{drill.name}</p>
              <p className="text-xs text-white/40">{drill.duration} &middot; {drill.level}</p>
            </div>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white/20 shrink-0" aria-hidden="true">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </div>
        ))}
      </div>
    ),
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-32 px-4 bg-[#0A0A0A] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="max-w-6xl mx-auto">
        <MotionDiv className="mb-16 max-w-lg">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] mb-4 text-[#00E676]">
            Features
          </p>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4"
            style={{ fontFamily: "'Clash Display', sans-serif" }}
          >
            Everything you need to dominate
          </h2>
          <p className="text-lg text-white/40">
            Three powerful tools working together, powered by the latest AI.
          </p>
        </MotionDiv>

        <MotionDiv delay={0.2}>
          <AnimatedCardStack cards={featureCards} autoPlayInterval={5000} />
        </MotionDiv>
      </div>
    </section>
  );
}
