"use client";

import { motion } from "motion/react";
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
    quote: "Fixed my bandeja in two weeks. The frame-by-frame breakdown showed exactly where my elbow was dropping. Unbelievable tool.",
    name: "Carlos M.",
    city: "Madrid, Spain",
    initial: "C",
    color: "bg-blue-500",
  },
  {
    quote: "The nutrition tracking saves me 10 minutes a day. Just snap a photo and it gets the macros right every time. Fueling properly now.",
    name: "Sofia K.",
    city: "Athens, Greece",
    initial: "S",
    color: "bg-purple-500",
  },
  {
    quote: "Like having a personal coach in my pocket. The AI training plans pushed my level from 3.5 to 5.0 in three months. Highly recommend.",
    name: "Luca R.",
    city: "Milan, Italy",
    initial: "L",
    color: "bg-emerald-500",
  },
  {
    quote: "Best investment for my padel game. The video analysis catches things I never noticed about my technique even after years of playing.",
    name: "Ana P.",
    city: "Barcelona, Spain",
    initial: "A",
    color: "bg-amber-500",
  },
];

const stats = [
  { label: "Active Players", value: 8000, suffix: "+" },
  { label: "Countries", value: 40, suffix: "+" },
  { label: "App Store Rating", value: 4.9, suffix: "", decimalPlaces: 1, star: true },
];

export default function SocialProofSection() {
  return (
    <section id="testimonials" className="bg-[#050505] py-24">
      {/* Stats */}
      <motion.div
        className="mx-auto mb-16 flex max-w-3xl flex-wrap items-stretch justify-center gap-5 px-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="glass-card flex flex-1 min-w-[180px] flex-col items-center justify-center gap-1.5 rounded-2xl px-8 py-7"
          >
            <span className="flex items-center gap-1.5 text-4xl font-bold text-white font-heading tabular-nums">
              <NumberTicker
                value={stat.value}
                decimalPlaces={stat.decimalPlaces ?? 0}
              />
              {stat.suffix}
              {stat.star && (
                <svg width="20" height="20" viewBox="0 0 16 16" fill="#FFB800" aria-hidden="true">
                  <path d="M8 1.3L9.8 5.1L14 5.7L11 8.6L11.7 12.7L8 10.8L4.3 12.7L5 8.6L2 5.7L6.2 5.1L8 1.3Z" />
                </svg>
              )}
            </span>
            <span className="text-xs text-[#00E676]/60">{stat.label}</span>
          </div>
        ))}
      </motion.div>

      {/* Header */}
      <motion.h2
        className="mb-12 text-center text-3xl font-bold text-white sm:text-4xl lg:text-5xl font-heading px-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Players who see their mistakes fix them faster.
      </motion.h2>

      {/* Testimonial cards */}
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              className="glass-card rounded-2xl p-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="mb-3 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <StarIcon key={j} />
                ))}
              </div>
              <p className="mb-5 text-sm leading-relaxed text-white/50">
                &ldquo;{review.quote}&rdquo;
              </p>
              <div className="flex items-center gap-2.5">
                <div
                  className={`flex h-7 w-7 items-center justify-center rounded-full ${review.color} text-[11px] font-bold text-white`}
                >
                  {review.initial}
                </div>
                <div>
                  <p className="text-xs font-medium text-white/70">{review.name}</p>
                  <p className="text-[10px] text-white/25">{review.city}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
