"use client";

import { motion } from "motion/react";
import Image from "next/image";
import PhoneFrame from "@/components/mockups/phone-frame";

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
            {/* Apple App Store badge */}
            <a href={APP_STORE_URL} aria-label="Download on the App Store">
              <svg width="180" height="54" viewBox="0 0 180 54" fill="none" xmlns="http://www.w3.org/2000/svg" role="img">
                <rect width="180" height="54" rx="10" fill="black"/>
                <rect x="0.5" y="0.5" width="179" height="53" rx="9.5" stroke="white" strokeOpacity="0.3"/>
                {/* Apple logo */}
                <path d="M36.5 17.2c-1.4 0-2.8.6-3.8 1.6-.9 1-1.4 2.3-1.3 3.7 1.4.1 2.8-.5 3.8-1.5.9-1 1.4-2.3 1.3-3.8zm3.3 18.8c-1.3 0-2.4-.8-3.1-.8s-1.9.8-3.2.8c-1.6 0-3.1-.9-4-2.4-1.8-3.1-.5-7.7 1.3-10.2.9-1.2 2-2.5 3.5-2.5 1.4 0 2.2.8 3.3.8 1.1 0 1.8-.8 3.4-.8 1.4 0 2.4 1.1 3.1 2.1-2.7 1.5-2.3 5.4.4 6.5-.5 1.4-1.2 2.8-2.2 3.9-.7.9-1.5 1.6-2.5 1.6z" fill="white"/>
                {/* "Download on the" text */}
                <text x="56" y="23" fontFamily="-apple-system, BlinkMacSystemFont, sans-serif" fontSize="11" fill="white" opacity="0.9">Download on the</text>
                {/* "App Store" text */}
                <text x="56" y="40" fontFamily="-apple-system, BlinkMacSystemFont, sans-serif" fontSize="20" fontWeight="600" fill="white">App Store</text>
              </svg>
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
        <div className="relative flex-shrink-0 flex items-end justify-center" style={{ width: "580px", height: "620px" }}>
          {/* Green glow */}
          <div className="pointer-events-none absolute bottom-0 left-1/2 h-72 w-[600px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(0,230,118,0.15)_0%,transparent_70%)] blur-3xl" />

          {/* Left phone — analysis result */}
          <motion.div
            className="absolute bottom-0"
            initial={{ opacity: 0, x: 0, rotate: 0 }}
            animate={{ opacity: 0.7, x: -155, rotate: -10 }}
            transition={{ duration: 1.1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="w-44 sm:w-48 lg:w-52">
              <RawScreenshot src="/screenshots/raw/analyze.png" />
            </div>
          </motion.div>

          {/* Center phone — home */}
          <motion.div
            className="relative z-10"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="w-56 sm:w-60 lg:w-72">
              <RawScreenshot src="/screenshots/raw/home.png" alt="PadelUp home screen" />
            </div>
          </motion.div>

          {/* Right phone — training */}
          <motion.div
            className="absolute bottom-0"
            initial={{ opacity: 0, x: 0, rotate: 0 }}
            animate={{ opacity: 0.7, x: 155, rotate: 10 }}
            transition={{ duration: 1.1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="w-44 sm:w-48 lg:w-52">
              <RawScreenshot src="/screenshots/raw/training.png" />
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
