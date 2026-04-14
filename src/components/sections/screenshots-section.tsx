"use client";

import { useRef, useState, useEffect } from "react";
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
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" /><path d="m19 9-5 5-4-4-3 3" />
      </svg>
    ),
  },
];

export default function ScreenshotsSection() {
  const [active, setActive] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const idx = sectionRefs.current.indexOf(entry.target as HTMLDivElement);
            if (idx !== -1) setActive(idx);
          }
        }
      },
      { threshold: 0.6, rootMargin: "-20% 0px -20% 0px" }
    );

    for (const ref of sectionRefs.current) {
      if (ref) observer.observe(ref);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-[#050505] py-24">
      <motion.h2
        className="mb-20 px-6 text-center text-3xl font-bold text-white sm:text-4xl lg:text-5xl font-heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        Everything you need.{" "}
        <span className="gradient-text">One app.</span>
      </motion.h2>

      {/* Mobile: stacked layout */}
      <div className="lg:hidden">
        <div className="mx-auto max-w-sm px-6">
          {screens.map((screen, i) => (
            <motion.div
              key={screen.label}
              className="mb-16 last:mb-0"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#00E676]/10 text-[#00E676]">
                  {screen.icon}
                </div>
                <h3 className="text-xl font-bold text-white font-heading">{screen.label}</h3>
              </div>
              <p className="mb-6 text-sm leading-relaxed text-white/40">{screen.description}</p>
              <div className="mx-auto w-48">
                <PhoneFrame>
                  <div className="absolute inset-0">
                    <Image src={screen.src} alt={screen.label} fill className="object-cover object-top" />
                  </div>
                </PhoneFrame>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Desktop: sticky scroll layout */}
      <div ref={containerRef} className="relative mx-auto hidden max-w-6xl px-6 lg:block lg:px-16">
        <div className="flex gap-20">
          {/* Left — scrolling text cards */}
          <div className="flex-1">
            {screens.map((screen, i) => (
              <div
                key={screen.label}
                ref={(el) => { sectionRefs.current[i] = el; }}
                className={`flex min-h-[50vh] flex-col justify-center ${i === 0 ? "pt-4" : ""}`}
              >
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <div className="mb-4 flex items-center gap-3">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl transition-colors duration-300 ${
                      active === i ? "bg-[#00E676]/10 text-[#00E676]" : "bg-white/[0.04] text-white/30"
                    }`}>
                      {screen.icon}
                    </div>
                    <h3 className={`text-2xl font-bold font-heading transition-colors duration-300 ${
                      active === i ? "text-white" : "text-white/30"
                    }`}>
                      {screen.label}
                    </h3>
                  </div>
                  <p className={`max-w-md text-base leading-relaxed transition-colors duration-300 ${
                    active === i ? "text-white/50" : "text-white/20"
                  }`}>
                    {screen.description}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>

          {/* Right — sticky phone */}
          <div className="relative w-72 flex-shrink-0">
            <div className="sticky top-32">
              <div className="pointer-events-none absolute -inset-10 rounded-full bg-[#00E676]/[0.06] blur-3xl" />
              <div className="relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, y: 20, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.97 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <PhoneFrame>
                      <div className="absolute inset-0">
                        <Image
                          src={screens[active].src}
                          alt={screens[active].label}
                          fill
                          className="object-cover object-top"
                        />
                      </div>
                    </PhoneFrame>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
