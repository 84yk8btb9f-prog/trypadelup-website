'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const features = [
  {
    num: '01',
    title: 'Video Analysis',
    description: 'Upload any clip and get frame-by-frame technique scoring in seconds.',
    top: 80,
  },
  {
    num: '02',
    title: 'Nutrition',
    description: 'Snap your meal, get instant macros. No manual logging.',
    top: 100,
  },
  {
    num: '03',
    title: 'Training',
    description: 'Daily drills built around your weak spots. Adapts as you improve.',
    top: 120,
  },
  {
    num: '04',
    title: 'AI Coach',
    description: 'Ask anything about padel. Get answers from an expert, instantly.',
    top: 140,
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
      <div className="relative rounded-2xl p-8 sm:p-10 bg-white/[0.03] border border-white/[0.07]">
        <div className="flex items-start gap-6 sm:gap-10">
          {/* Big number */}
          <span className="text-6xl sm:text-7xl lg:text-8xl font-bold text-white/[0.05] font-heading leading-none select-none shrink-0">
            {feature.num}
          </span>
          {/* Text */}
          <div className="pt-2 sm:pt-4">
            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2 font-heading">
              {feature.title}
            </h3>
            <p className="text-base text-white/45 leading-relaxed max-w-lg">
              {feature.description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function FeaturesSection() {
  return (
    <section id="features" className="relative bg-[#0A0A0A]">
      <div className="max-w-4xl mx-auto px-6 sm:px-10">
        {/* Header - left-aligned, no uppercase label */}
        <div className="pt-28 pb-14 sticky top-0 z-10 bg-[#0A0A0A]">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-heading">
            Everything in one app.
          </h2>
        </div>

        {/* Stacking cards */}
        <div className="relative pb-28 flex flex-col gap-6">
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
