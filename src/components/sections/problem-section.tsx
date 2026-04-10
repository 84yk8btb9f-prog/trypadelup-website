"use client";

import { motion } from "motion/react";

const problems = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
          stroke="#00E676"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="12" r="3" stroke="#00E676" strokeWidth="1.5" />
      </svg>
    ),
    text: (
      <>
        You watch YouTube tutorials. You ask friends for tips. You play more games hoping something
        clicks. But here&apos;s the truth:{" "}
        <strong className="text-white/70">you can&apos;t coach what you can&apos;t see.</strong>
      </>
    ),
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="#00E676" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    text: (
      <>
        Every player has blind spots — a dropped elbow, a late split step, a closed racket face.
        Without real feedback,{" "}
        <strong className="text-white/70">you repeat the same mistakes every session.</strong>
      </>
    ),
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <line x1="12" y1="1" x2="12" y2="23" stroke="#00E676" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" stroke="#00E676" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    text: (
      <>
        A private coach costs <span className="text-white/60">$60&ndash;100/hour</span> and sees
        you once a week. PadelUp watches every shot, every session, and{" "}
        <strong className="text-white/70">builds your path to the next level.</strong>
      </>
    ),
  },
];

export default function ProblemSection() {
  return (
    <section className="relative bg-[#050505] px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <motion.h2
          className="mb-14 text-center text-3xl font-bold leading-snug text-white sm:text-4xl lg:text-5xl font-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
        >
          You play 3 times a week.{" "}
          <span className="text-[#00E676]/50">
            Your level hasn&apos;t changed in months.
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {problems.map((problem, i) => (
            <motion.div
              key={i}
              className="glass-card rounded-2xl p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#00E676]/[0.08]">
                {problem.icon}
              </div>
              <p className="text-sm leading-relaxed text-white/40">{problem.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
