"use client";

import { motion } from "motion/react";
import Image from "next/image";
import PhoneFrame from "@/components/mockups/phone-frame";
import AppStoreBadge from "@/components/app-store-badge";

const APP_STORE_URL = "https://apps.apple.com/app/padelup/id0000000000";

function RawScreenshot({ src, alt = "" }: { src: string; alt?: string }) {
  return (
    <PhoneFrame>
      <div className="absolute inset-0">
        <Image src={src} alt={alt} fill className="object-cover object-top" />
      </div>
    </PhoneFrame>
  );
}

const avatars = [
  { src: "https://i.pravatar.cc/56?img=12", alt: "Player" },
  { src: "https://i.pravatar.cc/56?img=47", alt: "Player" },
  { src: "https://i.pravatar.cc/56?img=33", alt: "Player" },
  { src: "https://i.pravatar.cc/56?img=16", alt: "Player" },
];

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#050505] px-5 pb-16 pt-24 sm:px-10 sm:pb-20 sm:pt-28 lg:px-16">

      <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 lg:flex-row lg:items-center lg:gap-20">

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
            style={{ fontSize: "clamp(2.6rem, 6vw, 5.5rem)" }}
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
            className="mx-auto mt-6 max-w-sm text-base leading-relaxed text-white/40 sm:text-lg lg:mx-0 lg:max-w-sm"
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
            <AppStoreBadge href={APP_STORE_URL} height="h-12 sm:h-14" />
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {avatars.map((a, i) => (
                  <Image
                    key={i}
                    src={a.src}
                    alt={a.alt}
                    width={28}
                    height={28}
                    className="rounded-full border-2 border-[#050505] object-cover"
                    unoptimized
                  />
                ))}
              </div>
              <span className="text-sm text-white/30">
                <span className="text-white/50">8,000+ players</span> across 40+ countries
              </span>
            </div>
          </motion.div>
        </div>

        {/* Right: 3-phone fan — centered */}
        <div
          className="relative mx-auto flex-shrink-0 lg:mx-0"
          style={{ height: "440px", width: "420px", maxWidth: "100%" }}
        >
          {/* Green glow */}
          <div className="pointer-events-none absolute bottom-0 left-1/2 h-60 w-full -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(0,230,118,0.15)_0%,transparent_70%)] blur-3xl" />

          {/* Left phone — analysis result */}
          <motion.div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 hidden sm:block origin-bottom"
            initial={{ opacity: 0, x: 0, rotate: 0 }}
            animate={{ opacity: 0.7, x: -120, rotate: -10 }}
            transition={{ duration: 1.1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="w-36 lg:w-44">
              <RawScreenshot src="/screenshots/raw/analyze.png" />
            </div>
          </motion.div>

          {/* Center phone — home */}
          <motion.div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="w-52 sm:w-56 lg:w-64">
              <RawScreenshot src="/screenshots/raw/home.png" alt="PadelUp home screen" />
            </div>
          </motion.div>

          {/* Right phone — training */}
          <motion.div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 hidden sm:block origin-bottom"
            initial={{ opacity: 0, x: 0, rotate: 0 }}
            animate={{ opacity: 0.7, x: 120, rotate: 10 }}
            transition={{ duration: 1.1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="w-36 lg:w-44">
              <RawScreenshot src="/screenshots/raw/training.png" />
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
