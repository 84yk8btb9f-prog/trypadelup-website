"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import PhoneFrame from "@/components/mockups/phone-frame";

const screens = [
  {
    src: "/screenshots/raw/home.png",
    label: "Dashboard",
    description: "Track your XP, drills completed, and recent analyses all in one place. See your level, streaks, and personalized focus areas at a glance.",
  },
  {
    src: "/screenshots/raw/analyze.png",
    label: "AI Analysis",
    description: "Upload any shot and get a frame-by-frame AI breakdown. Scores for grip, stance, swing path, body position, and racket angle with actionable tips.",
  },
  {
    src: "/screenshots/raw/social.png",
    label: "Court Finder",
    description: "Find padel courts near you, check availability, and connect with players in your area. Never miss a game again.",
  },
  {
    src: "/screenshots/raw/insights.png",
    label: "Insights",
    description: "Visualize your improvement over time. Weekly trends, shot-type breakdowns, and progress tracking to keep you motivated.",
  },
];

function FlipCard({ src, label, description, index }: {
  src: string;
  label: string;
  description: string;
  index: number;
}) {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      className="flex-shrink-0 flex flex-col items-center gap-4 w-52 sm:w-60 lg:w-auto cursor-pointer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      onClick={() => setFlipped(!flipped)}
    >
      <div className="relative w-full" style={{ perspective: "1000px" }}>
        <div
          className="relative w-full transition-transform duration-500"
          style={{
            transformStyle: "preserve-3d",
            transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >
          {/* Front — phone mockup */}
          <div style={{ backfaceVisibility: "hidden" }}>
            <PhoneFrame>
              <div className="absolute inset-0">
                <Image src={src} alt={label} fill className="object-cover object-top" />
              </div>
            </PhoneFrame>
          </div>

          {/* Back — info card */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center rounded-[2.5rem] border border-white/[0.08] bg-[#0a0a0a] p-6"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#00E676]/10">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00E676" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>
            <h4 className="mb-2 text-lg font-bold text-white font-heading">{label}</h4>
            <p className="text-center text-xs leading-relaxed text-white/40">{description}</p>
            <span className="mt-4 text-[10px] uppercase tracking-widest text-white/20">Tap to flip back</span>
          </div>
        </div>
      </div>
      <span className="text-sm font-medium text-white/40">{label}</span>
    </motion.div>
  );
}

export default function ScreenshotsSection() {
  return (
    <section className="bg-[#050505] py-24">
      <motion.h2
        className="mb-4 px-6 text-center text-3xl font-bold text-white sm:text-4xl lg:text-5xl font-heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        Everything you need.{" "}
        <span className="gradient-text">One app.</span>
      </motion.h2>
      <p className="mb-16 text-center text-sm text-white/30">Tap a screen to learn more</p>

      <div className="flex gap-6 overflow-x-auto px-6 pb-4 sm:gap-8 sm:px-10 lg:grid lg:grid-cols-4 lg:overflow-visible lg:pb-0 lg:px-16 xl:px-24">
        {screens.map((screen, i) => (
          <FlipCard key={screen.label} {...screen} index={i} />
        ))}
      </div>
    </section>
  );
}
