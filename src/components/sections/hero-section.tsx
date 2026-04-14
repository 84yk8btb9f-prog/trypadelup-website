"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { ShimmerButton } from "@/components/ui/shimmer-button";

const APP_STORE_URL = "https://apps.apple.com/app/padelup/id0000000000";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#050505] px-6 pb-20 pt-28 sm:px-10 lg:px-16">

      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-16 lg:flex-row lg:items-center lg:gap-20">

        {/* Left: copy */}
        <div className="flex-1 text-center lg:text-left">

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-[#00E676]/20 bg-[#00E676]/[0.06] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#00E676]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#00E676] animate-pulse" />
              AI Padel Coaching
            </span>
          </motion.div>

          <motion.h1
            className="mt-6 font-heading font-bold leading-[0.9] tracking-tight text-white"
            style={{ fontSize: "clamp(3rem, 5.5vw, 5.5rem)" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            Most players
            <br />
            play often.
            <br />
            <span className="gradient-text">Few get better.</span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-md text-base leading-relaxed text-white/40 sm:text-lg lg:max-w-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
          >
            Frame-by-frame video analysis, a training plan built around your weaknesses, and an AI coach available 24/7.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col items-center gap-5 lg:items-start"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.38, ease: "easeOut" }}
          >
            <a href={APP_STORE_URL}>
              <ShimmerButton
                shimmerColor="#00E676"
                background="rgba(0, 230, 118, 0.1)"
                className="px-10 py-4 text-base font-semibold"
              >
                <span className="text-white">Start your free trial</span>
              </ShimmerButton>
            </a>
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {[
                  { initial: "C", color: "bg-blue-500" },
                  { initial: "S", color: "bg-purple-500" },
                  { initial: "L", color: "bg-emerald-500" },
                  { initial: "A", color: "bg-amber-500" },
                ].map((a) => (
                  <div
                    key={a.initial}
                    className={`flex h-7 w-7 items-center justify-center rounded-full border-2 border-[#050505] ${a.color} text-[10px] font-bold text-white`}
                  >
                    {a.initial}
                  </div>
                ))}
              </div>
              <span className="text-sm text-white/30">
                <span className="text-white/50">8,000+ players</span> across 40+ countries
              </span>
            </div>
          </motion.div>
        </div>

        {/* Right: 3-phone fan */}
        <div className="relative flex-shrink-0 flex items-end justify-center" style={{ width: "420px", height: "520px" }}>
          {/* Green glow */}
          <div className="pointer-events-none absolute bottom-0 left-1/2 h-64 w-[500px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(0,230,118,0.18)_0%,transparent_70%)] blur-3xl" />

          {/* Left phone */}
          <motion.div
            className="absolute bottom-0"
            initial={{ opacity: 0, x: 0, rotate: 0 }}
            animate={{ opacity: 0.65, x: -110, rotate: -10 }}
            transition={{ duration: 1.1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image src="/screenshots/cropped/training.png" alt="" width={700} height={1420} className="w-44 sm:w-48 lg:w-52 drop-shadow-2xl" />
          </motion.div>

          {/* Center phone */}
          <motion.div
            className="relative z-10"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image src="/screenshots/cropped/analyze.png" alt="PadelUp AI analysis" width={700} height={1420} priority className="w-52 sm:w-56 lg:w-64 drop-shadow-2xl" />
          </motion.div>

          {/* Right phone */}
          <motion.div
            className="absolute bottom-0"
            initial={{ opacity: 0, x: 0, rotate: 0 }}
            animate={{ opacity: 0.65, x: 110, rotate: 10 }}
            transition={{ duration: 1.1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image src="/screenshots/cropped/nutrition.png" alt="" width={700} height={1420} className="w-44 sm:w-48 lg:w-52 drop-shadow-2xl" />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
