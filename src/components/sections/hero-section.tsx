"use client";

import Image from "next/image";
import PhoneFrame from "@/components/mockups/phone-frame";
import AppStoreBadge from "@/components/app-store-badge";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { motion } from "motion/react";

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

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#050505] px-5 pb-16 pt-24 sm:px-10 sm:pb-20 sm:pt-28 lg:px-16">
      {/* Subtle radial light effects */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[2] isolate hidden opacity-50 contain-strict lg:block"
      >
        <div className="absolute left-0 top-0 h-[80rem] w-[35rem] -translate-y-[350px] -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(145,100%,60%,.08)_0,hsla(145,100%,40%,.02)_50%,hsla(145,100%,30%,0)_80%)]" />
        <div className="absolute left-0 top-0 h-[80rem] w-56 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(145,100%,60%,.06)_0,hsla(145,100%,30%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
      </div>

      <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 lg:flex-row lg:items-center lg:gap-20">
        {/* Left: copy */}
        <div className="flex-1 text-center lg:text-left">
          <AnimatedGroup variants={transitionVariants}>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#00E676]/20 bg-[#00E676]/[0.06] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#00E676]">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#00E676]" />
              AI Padel Coaching
            </span>

            <h1
              className="mt-6 font-heading font-bold leading-[0.9] tracking-tight text-white"
              style={{ fontSize: "clamp(2.6rem, 6vw, 5.5rem)" }}
            >
              Most players
              <br />
              play often.
              <br />
              <span className="gradient-text">Few get better.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-sm text-base leading-relaxed text-white/40 sm:text-lg lg:mx-0 lg:max-w-sm">
              Frame-by-frame video analysis, a training plan built around your
              weaknesses, and an AI coach available 24/7.
            </p>
          </AnimatedGroup>

          <AnimatedGroup
            variants={{
              container: {
                visible: {
                  transition: {
                    staggerChildren: 0.05,
                    delayChildren: 0.75,
                  },
                },
              },
              ...transitionVariants,
            }}
            className="mt-8 flex flex-col items-center gap-5 lg:items-start"
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
                <span className="text-white/50">8,000+ players</span> across
                40+ countries
              </span>
            </div>
          </AnimatedGroup>
        </div>

        {/* Right: 3-phone fan — centered */}
        <AnimatedGroup
          variants={{
            container: {
              visible: {
                transition: {
                  staggerChildren: 0.15,
                  delayChildren: 0.5,
                },
              },
            },
            ...transitionVariants,
          }}
          className="relative mx-auto flex-shrink-0 lg:mx-0"
        >
          <div
            className="relative"
            style={{ height: "440px", width: "420px", maxWidth: "100%" }}
          >
            {/* Green glow */}
            <div className="pointer-events-none absolute bottom-0 left-1/2 h-60 w-full -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(0,230,118,0.15)_0%,transparent_70%)] blur-3xl" />

            {/* Left phone — analysis result */}
            <motion.div
              className="absolute bottom-0 left-1/2 hidden -translate-x-1/2 origin-bottom sm:block"
              initial={{ opacity: 0, x: 0, rotate: 0 }}
              animate={{ opacity: 0.7, x: -120, rotate: -10 }}
              transition={{
                duration: 1.1,
                delay: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="w-36 lg:w-44">
                <RawScreenshot src="/screenshots/raw/analyze.png" />
              </div>
            </motion.div>

            {/* Center phone — home */}
            <motion.div
              className="absolute bottom-0 left-1/2 z-10 -translate-x-1/2"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="w-52 sm:w-56 lg:w-64">
                <RawScreenshot
                  src="/screenshots/raw/home.png"
                  alt="PadelUp home screen"
                />
              </div>
            </motion.div>

            {/* Right phone — training */}
            <motion.div
              className="absolute bottom-0 left-1/2 hidden -translate-x-1/2 origin-bottom sm:block"
              initial={{ opacity: 0, x: 0, rotate: 0 }}
              animate={{ opacity: 0.7, x: 120, rotate: 10 }}
              transition={{
                duration: 1.1,
                delay: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="w-36 lg:w-44">
                <RawScreenshot src="/screenshots/raw/training.png" />
              </div>
            </motion.div>
          </div>
        </AnimatedGroup>
      </div>
    </section>
  );
}
