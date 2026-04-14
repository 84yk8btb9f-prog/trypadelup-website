"use client";

import { motion } from "motion/react";
import Image from "next/image";
import PhoneFrame from "@/components/mockups/phone-frame";

const screens = [
  { src: "/screenshots/raw/home.png", label: "Dashboard" },
  { src: "/screenshots/raw/analyze.png", label: "AI Analysis" },
  { src: "/screenshots/raw/social.png", label: "Court Finder" },
  { src: "/screenshots/raw/insights.png", label: "Insights" },
];

export default function ScreenshotsSection() {
  return (
    <section className="bg-[#050505] py-24">
      <motion.h2
        className="mb-16 px-6 text-center text-3xl font-bold text-white sm:text-4xl lg:text-5xl font-heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        Everything you need.{" "}
        <span className="gradient-text">One app.</span>
      </motion.h2>

      <div className="flex gap-6 overflow-x-auto px-6 pb-4 sm:gap-8 sm:px-10 lg:grid lg:grid-cols-4 lg:overflow-visible lg:pb-0 lg:px-16 xl:px-24">
        {screens.map((screen, i) => (
          <motion.div
            key={screen.label}
            className="flex-shrink-0 flex flex-col items-center gap-4 w-52 sm:w-60 lg:w-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
          >
            <PhoneFrame>
              <div className="absolute inset-0">
                <Image src={screen.src} alt={screen.label} fill className="object-cover object-top" />
              </div>
            </PhoneFrame>
            <span className="text-sm font-medium text-white/40">{screen.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
