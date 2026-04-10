"use client";

import { motion } from "motion/react";
import { Particles } from "@/components/ui/particles";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import PhoneFrame from "@/components/mockups/phone-frame";
import MockupAnalysis from "@/components/mockups/analysis-mockup";

const APP_STORE_URL = "https://apps.apple.com/app/padelup/id0000000000";

const fadeUp = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#050505] px-6 pb-20 pt-24 sm:px-10 lg:px-16">
      {/* Particles background */}
      <Particles
        className="absolute inset-0"
        quantity={80}
        color="#00E676"
        size={0.4}
        staticity={30}
        ease={80}
      />

      {/* Gradient blobs */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-[800px] w-[800px] rounded-full bg-[radial-gradient(circle,rgba(0,230,118,0.06)_0%,transparent_60%)]" />
      <div className="pointer-events-none absolute -bottom-60 -left-40 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(0,230,118,0.03)_0%,transparent_60%)]" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center gap-16 lg:flex-row lg:gap-24">
        {/* Left: Copy */}
        <div className="flex-1 max-w-2xl">
          {/* Badge */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-[#00E676]/20 bg-[#00E676]/[0.06] px-4 py-1.5 text-xs font-medium tracking-wide text-[#00E676]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#00E676] animate-pulse" />
              AI-Powered Padel Coaching
            </span>
          </motion.div>

          <motion.h1
            className="text-5xl font-bold leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-8xl font-heading"
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.12 }}
          >
            <motion.span
              className="block"
              variants={fadeUp}
              transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
            >
              Most players play often.
            </motion.span>
            <motion.span
              className="block gradient-text"
              variants={fadeUp}
              transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
            >
              Few play smart.
            </motion.span>
          </motion.h1>

          <motion.p
            className="mt-8 max-w-lg text-lg leading-relaxed text-white/45 sm:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
          >
            PadelUp sees what you can&apos;t — frame-by-frame analysis of your
            technique, a training plan built around your weaknesses, and an AI
            coach that knows padel inside out. Stop guessing. Start improving.
          </motion.p>

          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
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

          <motion.p
            className="mt-8 text-sm text-white/25"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.65 }}
          >
            Loved by 8,000+ players across 40+ countries
          </motion.p>
        </div>

        {/* Right: Phone mockup with 3D tilt */}
        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, y: 40, rotateY: -8 }}
          animate={{ opacity: 1, y: 0, rotateY: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
          style={{ perspective: "1200px" }}
        >
          <motion.div
            whileHover={{ rotateY: -5, rotateX: 3, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <PhoneFrame>
              <MockupAnalysis />
            </PhoneFrame>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
