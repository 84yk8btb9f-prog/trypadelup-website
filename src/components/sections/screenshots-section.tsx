"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import PhoneFrame from "@/components/mockups/phone-frame";

const screens = [
  {
    src: "/screenshots/raw/home.png",
    label: "Dashboard",
    description:
      "Track your XP, drills completed, and recent analyses all in one place. See your level, streaks, and personalized focus areas at a glance.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" />
      </svg>
    ),
  },
  {
    src: "/screenshots/raw/analyze.png",
    label: "AI Analysis",
    description:
      "Upload any shot and get a frame-by-frame AI breakdown. Scores for grip, stance, swing path, body position, and racket angle with actionable tips.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
      </svg>
    ),
  },
  {
    src: "/screenshots/raw/social.png",
    label: "Court Finder",
    description:
      "Find padel courts near you, check availability, and connect with players in your area. Never miss a game again.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    src: "/screenshots/raw/insights.png",
    label: "Insights",
    description:
      "Visualize your improvement over time. Weekly trends, shot-type breakdowns, and progress tracking to keep you motivated.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" /><path d="m19 9-5 5-4-4-3 3" />
      </svg>
    ),
  },
];

export default function ScreenshotsSection() {
  const [active, setActive] = useState(0);
  const current = screens[active];

  return (
    <section className="bg-[#050505] py-24">
      <motion.h2
        className="mb-14 px-6 text-center text-3xl font-bold text-white sm:text-4xl lg:text-5xl font-heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        Everything you need.{" "}
        <span className="gradient-text">One app.</span>
      </motion.h2>

      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-start lg:gap-16">
          {/* Phone mockup */}
          <div className="relative flex-shrink-0">
            <div className="pointer-events-none absolute -inset-8 rounded-full bg-[#00E676]/[0.06] blur-3xl" />
            <div className="relative w-56 sm:w-64">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <PhoneFrame>
                    <div className="absolute inset-0">
                      <Image
                        src={current.src}
                        alt={current.label}
                        fill
                        className="object-cover object-top"
                      />
                    </div>
                  </PhoneFrame>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Tabs + description */}
          <div className="flex flex-1 flex-col items-center lg:items-start lg:pt-8">
            {/* Tab buttons */}
            <div className="mb-8 flex flex-wrap justify-center gap-2 lg:justify-start">
              {screens.map((screen, i) => (
                <button
                  key={screen.label}
                  onClick={() => setActive(i)}
                  className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                    active === i
                      ? "bg-[#00E676]/10 text-[#00E676] border border-[#00E676]/20"
                      : "text-white/40 hover:text-white/60 border border-transparent"
                  }`}
                >
                  {screen.icon}
                  {screen.label}
                </button>
              ))}
            </div>

            {/* Description */}
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="text-center lg:text-left"
              >
                <h3 className="mb-3 text-2xl font-bold text-white font-heading sm:text-3xl">
                  {current.label}
                </h3>
                <p className="max-w-md text-base leading-relaxed text-white/40">
                  {current.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
