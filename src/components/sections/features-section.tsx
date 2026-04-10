"use client";

import { motion } from "motion/react";
import PhoneFrame from "@/components/mockups/phone-frame";
import MockupAnalysis from "@/components/mockups/analysis-mockup";
import MockupNutrition from "@/components/mockups/nutrition-mockup";
import MockupTraining from "@/components/mockups/training-mockup";
import MockupChat from "@/components/mockups/chat-mockup";

interface FeatureBlockProps {
  title: string;
  description: string;
  bullets: string[];
  mockup: React.ReactNode;
  reversed?: boolean;
  index: number;
}

function FeatureBlock({
  title,
  description,
  bullets,
  mockup,
  reversed,
  index,
}: FeatureBlockProps) {
  return (
    <div className={index === 0 ? "py-32" : "py-24"}>
      {/* Divider */}
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
          <motion.h3
            className="mb-5 text-4xl font-bold text-white sm:text-5xl font-heading"
            initial={{ opacity: 0, x: reversed ? 40 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
          >
            {title}
          </motion.h3>

          <motion.p
            className="mb-8 text-lg leading-relaxed text-white/45"
            initial={{ opacity: 0, x: reversed ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            {description}
          </motion.p>

          <ul className="space-y-4">
            {bullets.map((bullet, i) => (
              <motion.li
                key={bullet}
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: reversed ? 20 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.5,
                  delay: 0.2 + i * 0.08,
                  ease: "easeOut",
                }}
              >
                <div className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#00E676]" />
                <span className="text-base text-white/55">{bullet}</span>
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
            <PhoneFrame>{mockup}</PhoneFrame>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

const features = [
  {
    title: "Frame-by-frame technique analysis",
    description:
      "Our AI watches every frame of your shot and scores your technique across five dimensions. See exactly where you lose points and get actionable tips to fix it.",
    bullets: [
      "Grip, stance, swing path scoring",
      "Personalized coaching tips",
      "Track progress over time",
    ],
    mockup: <MockupAnalysis />,
  },
  {
    title: "Nutrition tracking, simplified",
    description:
      "Snap a photo of your meal and get instant calorie and macro estimates. No more manual logging or guessing portions.",
    bullets: [
      "Instant calorie and macro estimates",
      "Daily and weekly tracking",
      "Meal calendar history",
    ],
    mockup: <MockupNutrition />,
    reversed: true,
  },
  {
    title: "Training plans that adapt to you",
    description:
      "Get daily drills tailored to your weak spots. Each plan adjusts based on your analysis scores and completed sessions.",
    bullets: [
      "Based on your analysis scores",
      "Daily drills with timers",
      "Streak tracking and XP",
    ],
    mockup: <MockupTraining />,
  },
  {
    title: "Your personal padel coach",
    description:
      "Ask any padel question and get expert-level answers instantly. From technique tweaks to strategy for your next tournament.",
    bullets: [
      "Technique advice on demand",
      "Strategy and rules",
      "Equipment recommendations",
    ],
    mockup: <MockupChat />,
    reversed: true,
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="bg-[#050505]">
      {features.map((feature, i) => (
        <FeatureBlock
          key={feature.title}
          {...feature}
          index={i}
        />
      ))}
    </section>
  );
}
