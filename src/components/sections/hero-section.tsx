"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { ShimmerButton } from "@/components/ui/shimmer-button";

const APP_STORE_URL = "https://apps.apple.com/app/padelup/id0000000000";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#050505] px-6 pb-24 pt-28 text-center">

      {/* Badge */}
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

      {/* Headline */}
      <motion.h1
        className="mt-7 font-heading font-bold leading-[0.92] tracking-tight text-white"
        style={{ fontSize: "clamp(2.8rem, 7vw, 6.5rem)" }}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.12, ease: "easeOut" }}
      >
        Most players play often.
        <br />
        <span className="gradient-text">Few get better.</span>
      </motion.h1>

      {/* Sub */}
      <motion.p
        className="mt-7 max-w-md text-base leading-relaxed text-white/40 sm:text-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.26, ease: "easeOut" }}
      >
        Frame-by-frame video analysis, a training plan built around your weaknesses, and an AI coach that knows padel inside out.
      </motion.p>

      {/* CTA */}
      <motion.div
        className="mt-8"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.38, ease: "easeOut" }}
      >
        <a href={APP_STORE_URL}>
          <ShimmerButton
            shimmerColor="#00E676"
            background="rgba(0, 230, 118, 0.1)"
            className="px-8 py-4 text-base font-semibold"
          >
            <span className="text-white">Start your free trial</span>
          </ShimmerButton>
        </a>
      </motion.div>

      {/* Social proof */}
      <motion.div
        className="mt-8 flex items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.52, duration: 0.6 }}
      >
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
          Loved by <span className="text-white/50">8,000+ players</span> across 40+ countries
        </span>
      </motion.div>

      {/* Phone mockup */}
      <motion.div
        className="relative mt-20"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Glow */}
        <div className="pointer-events-none absolute -bottom-16 left-1/2 h-64 w-[500px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(0,230,118,0.15)_0%,transparent_70%)] blur-3xl" />
        <Image
          src="/screenshots/cropped/analyze.png"
          alt="PadelUp AI video analysis"
          width={700}
          height={1420}
          priority
          className="relative w-56 sm:w-64 lg:w-72 drop-shadow-2xl"
        />
      </motion.div>
    </section>
  );
}
