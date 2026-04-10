'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Video,
  UtensilsCrossed,
  Dumbbell,
  MapPin,
  MessageCircle,
} from 'lucide-react';
import { MotionDiv } from '@/components/ui/motion-wrapper';

const features = [
  {
    title: 'AI Video Analysis',
    description:
      'Frame-by-frame technique breakdown with personalized coaching tips.',
    icon: Video,
    top: 80,
    content: (
      <div className="w-full max-w-xs">
        <div className="text-center mb-6">
          <div className="relative inline-flex items-center justify-center">
            <svg className="w-24 h-24" viewBox="0 0 120 120">
              <circle
                cx="60"
                cy="60"
                r="52"
                fill="none"
                stroke="rgba(255,255,255,0.06)"
                strokeWidth="5"
              />
              <circle
                cx="60"
                cy="60"
                r="52"
                fill="none"
                stroke="#00E676"
                strokeWidth="5"
                strokeLinecap="round"
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
                <div
                  className="h-full rounded-full bg-[#00E676]"
                  style={{ width: bar.pct }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: 'Smart Nutrition',
    description:
      'Snap a photo of your meal and AI identifies macros instantly.',
    icon: UtensilsCrossed,
    top: 100,
    content: (
      <div className="w-full max-w-xs space-y-4">
        <div className="flex items-center justify-between p-4 rounded-xl bg-white/[0.04] border border-white/[0.06]">
          <div>
            <p className="text-sm font-semibold text-white">
              Today&apos;s Calories
            </p>
            <p
              className="text-2xl font-bold text-[#00E676]"
              style={{ fontFamily: "'Clash Display', sans-serif" }}
            >
              1,842
            </p>
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
              <p className="text-[10px] text-white/40 uppercase tracking-wider mb-1">
                {macro.label}
              </p>
              <p className="text-sm font-bold text-white">{macro.val}</p>
              <div className="w-full h-1 rounded-full bg-white/[0.06] mt-1">
                <div
                  className="h-full rounded-full bg-[#00E676]/60"
                  style={{ width: macro.pct }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: 'Personalized Training',
    description: 'AI-generated daily drills based on your weak points.',
    icon: Dumbbell,
    top: 120,
    content: (
      <div className="w-full max-w-xs space-y-3">
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
              <p className="text-sm font-semibold text-white truncate">
                {drill.name}
              </p>
              <p className="text-xs text-white/40">
                {drill.duration} &middot; {drill.level}
              </p>
            </div>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-white/20 shrink-0"
              aria-hidden="true"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: 'Find Courts',
    description: 'Discover padel courts worldwide with real-time availability.',
    icon: MapPin,
    top: 140,
    content: (
      <div className="w-full max-w-xs">
        <div className="relative w-full h-40 rounded-xl bg-white/[0.04] border border-white/[0.06] overflow-hidden">
          {/* Map grid lines */}
          <div className="absolute inset-0 opacity-10">
            {[...Array(6)].map((_, i) => (
              <div
                key={`h-${i}`}
                className="absolute left-0 right-0 h-px bg-white/30"
                style={{ top: `${(i + 1) * 16.6}%` }}
              />
            ))}
            {[...Array(8)].map((_, i) => (
              <div
                key={`v-${i}`}
                className="absolute top-0 bottom-0 w-px bg-white/30"
                style={{ left: `${(i + 1) * 12.5}%` }}
              />
            ))}
          </div>
          {/* Map pins */}
          {[
            { x: '25%', y: '30%' },
            { x: '55%', y: '45%' },
            { x: '70%', y: '25%' },
            { x: '40%', y: '65%' },
            { x: '80%', y: '60%' },
          ].map((pin, i) => (
            <div
              key={i}
              className="absolute flex flex-col items-center"
              style={{ left: pin.x, top: pin.y }}
            >
              <div className="w-3 h-3 rounded-full bg-[#00E676] shadow-[0_0_8px_rgba(0,230,118,0.5)]" />
              <div className="w-px h-2 bg-[#00E676]/40" />
            </div>
          ))}
        </div>
        <div className="mt-3 flex items-center gap-2 text-xs text-white/40">
          <div className="w-2 h-2 rounded-full bg-[#00E676]" />
          <span>5 courts near you</span>
        </div>
      </div>
    ),
  },
  {
    title: 'AI Coach Chat',
    description:
      'Ask any padel question and get instant expert answers from AI.',
    icon: MessageCircle,
    top: 160,
    content: (
      <div className="w-full max-w-xs space-y-3">
        {/* Chat bubbles */}
        <div className="flex justify-end">
          <div className="max-w-[80%] px-4 py-2.5 rounded-2xl rounded-br-md bg-[#00E676]/15 border border-[#00E676]/20">
            <p className="text-sm text-white">
              How do I improve my bandeja?
            </p>
          </div>
        </div>
        <div className="flex justify-start">
          <div className="max-w-[85%] px-4 py-2.5 rounded-2xl rounded-bl-md bg-white/[0.04] border border-white/[0.06]">
            <p className="text-sm text-white/70">
              Focus on a continental grip and contact the ball at shoulder
              height. Keep your wrist firm and follow through toward your
              target.
            </p>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="max-w-[80%] px-4 py-2.5 rounded-2xl rounded-br-md bg-[#00E676]/15 border border-[#00E676]/20">
            <p className="text-sm text-white">Any drills for this?</p>
          </div>
        </div>
      </div>
    ),
  },
];

function FeatureCard({
  feature,
  index,
  total,
}: {
  feature: (typeof features)[number];
  index: number;
  total: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'start start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 1, 1]);
  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    [0.92, 1 - (total - 1 - index) * 0.015]
  );

  const Icon = feature.icon;
  const isLast = index === total - 1;

  return (
    <motion.div
      ref={cardRef}
      className="sticky w-full"
      style={{
        top: feature.top,
        y,
        opacity,
        scale,
        zIndex: index + 1,
      }}
    >
      <div
        className={`
          relative rounded-3xl p-8 sm:p-10
          bg-white/[0.04] border backdrop-blur-xl
          ${isLast ? 'border-[#00E676]/20 shadow-[0_0_40px_rgba(0,230,118,0.08)]' : 'border-white/[0.08]'}
        `}
        style={{
          boxShadow: `0 ${4 + index * 4}px ${20 + index * 10}px rgba(0,0,0,${0.2 + index * 0.05})`,
        }}
      >
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left: text */}
          <div className="flex-1 text-center lg:text-left">
            <div
              className={`
                inline-flex items-center justify-center w-14 h-14 rounded-xl mb-6
                ${isLast ? 'bg-[#00E676]/15 border border-[#00E676]/20' : 'bg-[#00E676]/10 border border-[#00E676]/15'}
              `}
            >
              <Icon
                size={26}
                className="text-[#00E676]"
                strokeWidth={1.5}
              />
            </div>
            <h3
              className="text-2xl sm:text-3xl font-semibold text-white mb-3"
              style={{ fontFamily: "'Clash Display', sans-serif" }}
            >
              {feature.title}
            </h3>
            <p className="text-base leading-relaxed text-white/40 max-w-md">
              {feature.description}
            </p>
          </div>

          {/* Right: mini UI mockup */}
          <div className="flex items-center justify-center shrink-0">
            {feature.content}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="relative bg-[#0A0A0A]"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="pt-32 pb-16 sticky top-0 z-10 bg-[#0A0A0A]">
          <MotionDiv className="max-w-lg">
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
              Five powerful tools working together, powered by the latest AI.
            </p>
          </MotionDiv>
        </div>

        {/* Stacking cards */}
        <div className="relative pb-32 flex flex-col gap-8">
          {features.map((feature, i) => (
            <FeatureCard
              key={feature.title}
              feature={feature}
              index={i}
              total={features.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
