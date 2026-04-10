"use client";

import { motion } from "motion/react";
import { Marquee } from "@/components/ui/marquee";
import { NumberTicker } from "@/components/ui/number-ticker";

function StarIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="#FFB800" aria-hidden="true">
      <path d="M8 1.3L9.8 5.1L14 5.7L11 8.6L11.7 12.7L8 10.8L4.3 12.7L5 8.6L2 5.7L6.2 5.1L8 1.3Z" />
    </svg>
  );
}

const reviews = [
  {
    quote: "Fixed my bandeja in two weeks. The frame-by-frame breakdown showed exactly where my elbow was dropping.",
    name: "Carlos M.",
    city: "Madrid",
  },
  {
    quote: "The nutrition tracking saves me 10 minutes a day. Just snap a photo and it gets the macros right every time.",
    name: "Sofia K.",
    city: "Athens",
  },
  {
    quote: "Like having a personal coach in my pocket. The AI training plans pushed my level from 3.5 to 5.0 in three months.",
    name: "Luca R.",
    city: "Milan",
  },
  {
    quote: "Best investment for my padel game. The video analysis catches things I never noticed about my technique.",
    name: "Ana P.",
    city: "Barcelona",
  },
  {
    quote: "Finally an app that understands padel specifically. The court finder helped me discover 3 new clubs near me.",
    name: "Thomas B.",
    city: "Stockholm",
  },
  {
    quote: "The AI coach answers questions better than most YouTube tutorials. It's like texting a pro player.",
    name: "Maria F.",
    city: "Lisbon",
  },
];

const firstRow = reviews.slice(0, 3);
const secondRow = reviews.slice(3);

function ReviewCard({ quote, name, city }: (typeof reviews)[0]) {
  return (
    <div className="glass-card w-[350px] flex-shrink-0 rounded-2xl p-6">
      <div className="mb-3 flex gap-0.5">
        {Array.from({ length: 5 }).map((_, j) => (
          <StarIcon key={j} />
        ))}
      </div>
      <p className="mb-4 text-[15px] leading-relaxed text-white/55">
        &ldquo;{quote}&rdquo;
      </p>
      <p className="text-sm text-white/25">
        {name}, {city}
      </p>
    </div>
  );
}

const stats = [
  { label: "Players", value: 8000, suffix: "+" },
  { label: "Countries", value: 40, suffix: "+" },
  { label: "App Store", value: 4.9, suffix: "", decimalPlaces: 1 },
];

export default function SocialProofSection() {
  return (
    <section id="testimonials" className="bg-[#050505] py-24">
      {/* Stats */}
      <motion.div
        className="mx-auto mb-16 flex max-w-2xl flex-wrap items-center justify-center gap-4 px-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="glass-card flex min-w-[140px] flex-col items-center gap-1 rounded-2xl px-8 py-5"
          >
            <span className="text-3xl font-bold text-white font-heading tabular-nums">
              <NumberTicker
                value={stat.value}
                decimalPlaces={stat.decimalPlaces ?? 0}
              />
              {stat.suffix}
            </span>
            <span className="text-xs text-white/30">{stat.label}</span>
          </div>
        ))}
      </motion.div>

      {/* Header */}
      <motion.div
        className="mb-12 text-center px-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <h2 className="mb-3 text-4xl font-bold text-white sm:text-5xl lg:text-6xl font-heading">
          Players who see their mistakes{" "}
          <span className="gradient-text">fix them faster.</span>
        </h2>
        <p className="text-base text-white/30">
          Join 8,000+ players improving their game with real feedback.
        </p>
      </motion.div>

      {/* Marquee rows */}
      <div className="relative">
        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-[#050505] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-[#050505] to-transparent" />

        <Marquee pauseOnHover className="mb-4 [--duration:35s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.name} {...review} />
          ))}
        </Marquee>

        <Marquee reverse pauseOnHover className="[--duration:35s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.name} {...review} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
