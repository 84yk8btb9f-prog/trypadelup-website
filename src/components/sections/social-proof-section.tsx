"use client";

import { motion } from "motion/react";
import { NumberTicker } from "@/components/ui/number-ticker";

// Honest, sourced stats about padel as a sport — not fabricated product metrics.
// Sources: International Padel Federation (FIP), Playtomic State of Padel reports.
const sportStats = [
  { label: "Players worldwide", value: 30, suffix: "M+" },
  { label: "Countries playing", value: 110, suffix: "+" },
  { label: "Fastest-growing racket sport", value: 1, suffix: "", isRank: true },
];

const differentiators = [
  {
    title: "Trained on pro-match data",
    body: "The vision model was trained on thousands of professional padel clips — so the scoring framework reflects how the top 0.1% actually moves, not a generic racket-sport heuristic.",
  },
  {
    title: "Padel-specific, not tennis-ported",
    body: "Bandeja, víbora, glass play, wall reads — every shot type is scored against padel-native criteria. Tools built for tennis don't know what a good bandeja looks like.",
  },
  {
    title: "Built by players, for players",
    body: "Every drill, every score threshold, every piece of feedback was designed with coaches who train at the professional level. No generic AI fitness content.",
  },
];

export default function SocialProofSection() {
  return (
    <section id="testimonials" className="bg-[#050505] py-24">
      {/* Sport-level stats */}
      <motion.div
        className="mx-auto mb-20 flex max-w-3xl flex-wrap items-stretch justify-center gap-5 px-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {sportStats.map((stat) => (
          <div
            key={stat.label}
            className="glass-card flex flex-1 min-w-[180px] flex-col items-center justify-center gap-1.5 rounded-2xl px-8 py-7"
          >
            <span className="flex items-baseline gap-1 text-4xl font-bold text-white font-heading tabular-nums">
              {stat.isRank ? (
                <span className="text-4xl">#</span>
              ) : null}
              <NumberTicker value={stat.value} />
              {stat.suffix}
            </span>
            <span className="text-xs text-[#00E676]/70 text-center">
              {stat.label}
            </span>
          </div>
        ))}
      </motion.div>

      {/* Why PadelUp — honest differentiation, not fake testimonials */}
      <motion.div
        className="mx-auto max-w-3xl px-6 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl font-heading">
          Padel is exploding. The coaching hasn&apos;t caught up.
        </h2>
        <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/50 sm:text-lg">
          Most players never get frame-by-frame feedback. Private coaching runs
          $60–100/hour. YouTube tutorials don&apos;t know your swing. PadelUp
          closes that gap.
        </p>
      </motion.div>

      {/* Differentiators */}
      <div className="mx-auto mt-16 max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {differentiators.map((d, i) => (
            <motion.div
              key={d.title}
              className="glass-card rounded-2xl p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <h3 className="mb-3 text-base font-semibold text-white">
                {d.title}
              </h3>
              <p className="text-sm leading-relaxed text-white/55">{d.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
