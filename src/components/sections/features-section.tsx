"use client";

import { motion } from "motion/react";
import Image from "next/image";

interface FeatureBlockProps {
  label: string;
  title: string;
  description: string;
  bullets: string[];
  mockup: string;
  reversed?: boolean;
  index: number;
}

function FeatureBlock({
  label,
  title,
  description,
  bullets,
  mockup,
  reversed,
  index,
}: FeatureBlockProps) {
  return (
    <div className={index === 0 ? "py-32" : "py-24"}>
      {index > 0 && (
        <div className="mx-auto mb-24 h-px max-w-md bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      )}

      <div
        className={`mx-auto flex max-w-7xl flex-col items-center gap-16 px-6 sm:px-10 lg:gap-24 lg:px-16 ${
          reversed ? "lg:flex-row-reverse" : "lg:flex-row"
        }`}
      >
        {/* Text */}
        <div className="flex-1 max-w-lg">
          <motion.span
            className="mb-3 block text-xs font-semibold uppercase tracking-[0.2em] text-[#00E676]"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {label}
          </motion.span>

          <motion.h3
            className="mb-5 text-3xl font-bold text-white sm:text-4xl lg:text-5xl font-heading"
            initial={{ opacity: 0, x: reversed ? 40 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
          >
            {title}
          </motion.h3>

          <motion.p
            className="mb-8 text-base leading-relaxed text-white/40"
            initial={{ opacity: 0, x: reversed ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            {description}
          </motion.p>

          <ul className="space-y-3">
            {bullets.map((bullet, i) => (
              <motion.li
                key={bullet}
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: reversed ? 20 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.5,
                  delay: 0.2 + i * 0.08,
                  ease: "easeOut",
                }}
              >
                <div className="h-2 w-2 flex-shrink-0 rounded-full bg-[#00E676]" />
                <span className="text-sm text-white/50">{bullet}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Phone mockup */}
        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, x: reversed ? -60 : 60, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.4, 0.25, 1] }}
          style={{ perspective: "1000px" }}
        >
          <div
            style={{
              transform: `rotateY(${reversed ? 4 : -4}deg)`,
              transformStyle: "preserve-3d",
            }}
          >
            <Image
              src={mockup as string}
              alt=""
              width={700}
              height={1420}
              className="w-64 sm:w-72 lg:w-80 xl:w-96 drop-shadow-2xl"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

const features = [
  {
    label: "AI Video Analysis",
    title: "Upload a shot. See exactly what to fix.",
    description:
      "Don\u2019t guess what went wrong with that smash. Upload a quick clip and let our vision AI break it down frame-by-frame, just like a pro coach would.",
    bullets: [
      "8 shot types analyzed frame-by-frame",
      "0\u201310 score across stance, grip, swing, position, racket angle",
      "Actionable tips with matched drills",
    ],
    mockup: "/screenshots/cropped/analyze.png",
  },
  {
    label: "Personalized Plans",
    title: "Your weak spots become your training plan.",
    description:
      "Stop doing generic drills. Based on your video analysis, PadelUp generates a structured 7-day curriculum designed specifically to fix your flaws.",
    bullets: [
      "Plans adapt to your analysis scores",
      "Technique, footwork, positioning, fitness, tactics",
      "Streak tracking and XP to keep you consistent",
    ],
    mockup: "/screenshots/cropped/training.png",
    reversed: true,
  },
  {
    label: "AI Nutrition",
    title: "Snap your meal. Know your macros.",
    description:
      "Fueling for a 3-set match shouldn\u2019t require a spreadsheet. Take a photo of your plate, and our AI calculates calories, protein, carbs, and fats instantly.",
    bullets: [
      "Photo-to-macros in seconds",
      "Daily targets and weekly trend charts",
      "Hydration tracking built in",
    ],
    mockup: "/screenshots/cropped/nutrition.png",
  },
  {
    label: "24/7 Expert Chat",
    title: "Ask anything about padel. Get a real answer.",
    description:
      "Tired of generic fitness AI? Our model is trained exclusively on professional padel matches, coaching manuals, and equipment specs.",
    bullets: [
      "Technique, strategy, rules, equipment advice",
      "Remembers your conversation history",
      "Available 24/7 \u2014 no booking required",
    ],
    mockup: "/screenshots/cropped/chat.png",
    reversed: true,
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="bg-[#050505]">
      {features.map((feature, i) => (
        <FeatureBlock key={feature.title} {...feature} index={i} />
      ))}
    </section>
  );
}
