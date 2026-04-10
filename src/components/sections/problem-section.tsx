"use client";

import { motion } from "motion/react";

export default function ProblemSection() {
  return (
    <section className="relative bg-[#050505] px-6 py-24 sm:px-10 sm:py-32">
      {/* Subtle top divider */}
      <div className="mx-auto mb-16 h-px max-w-xs bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="mx-auto max-w-3xl">
        <motion.h2
          className="mb-8 text-center text-3xl font-bold leading-snug text-white sm:text-4xl lg:text-5xl font-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
        >
          You play 3 times a week.{" "}
          <span className="text-white/40">
            Your level hasn&apos;t changed in months.
          </span>
        </motion.h2>

        <motion.div
          className="space-y-5 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
        >
          <p className="text-lg leading-relaxed text-white/40">
            You watch YouTube tutorials. You ask friends for tips. You play more
            games hoping something clicks. But here&apos;s the truth:{" "}
            <span className="text-white/70">
              you can&apos;t coach what you can&apos;t see.
            </span>
          </p>
          <p className="text-lg leading-relaxed text-white/40">
            Every player has blind spots — a dropped elbow, a late split step,
            a closed racket face. Without real feedback, you repeat the same
            mistakes every session.
          </p>
          <p className="text-lg leading-relaxed text-white/40">
            A private coach costs{" "}
            <span className="text-white/60">$60–100/hour</span> and sees you
            once a week. PadelUp watches{" "}
            <span className="text-[#00E676]/80">every shot, every session</span>
            , and builds your path to the next level.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
