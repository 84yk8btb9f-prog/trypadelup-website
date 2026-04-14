"use client";

import { motion } from "motion/react";
import Image from "next/image";

const screens = [
  { src: "/screenshots/analyze.png", label: "Video Analysis" },
  { src: "/screenshots/training.png", label: "Training Plans" },
  { src: "/screenshots/nutrition.png", label: "AI Nutrition" },
  { src: "/screenshots/chat.png", label: "AI Coach Chat" },
];

export default function ScreenshotsSection() {
  return (
    <section className="bg-[#050505] py-24">
      <motion.h2
        className="mb-14 px-6 text-center text-3xl font-bold text-white sm:text-4xl lg:text-5xl font-heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
      >
        Four features.{" "}
        <span className="gradient-text">One app.</span>
      </motion.h2>

      {/* Scrollable row on mobile, grid on desktop */}
      <div className="flex gap-4 overflow-x-auto px-6 pb-4 sm:gap-6 sm:px-10 lg:grid lg:grid-cols-4 lg:overflow-visible lg:pb-0 lg:px-16 xl:px-24">
        {screens.map((screen, i) => (
          <motion.div
            key={screen.label}
            className="flex-shrink-0 flex flex-col items-center gap-4 w-[280px] sm:w-[320px] lg:w-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
          >
            <Image
              src={screen.src}
              alt={screen.label}
              width={960}
              height={720}
              className="w-full rounded-xl"
            />
            <span className="text-sm font-medium text-white/40">{screen.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
