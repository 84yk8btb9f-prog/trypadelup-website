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
    title: "Upload a shot. See exactly what to fix.",
    description:
      "Record your bandeja, vibora, smash, or any of 8 shot types. Our AI extracts key frames, scores your technique across 5 dimensions, and gives you 3\u20135 specific tips you can apply in your next session. No vague advice \u2014 just \u201Cyour elbow drops 15\u00B0 on contact, here\u2019s the drill to fix it.\u201D",
    bullets: [
      "8 shot types analyzed frame-by-frame",
      "0\u201310 score across stance, grip, swing, position, racket angle",
      "Actionable tips with matched drills",
    ],
    mockup: <MockupAnalysis />,
  },
  {
    title: "Your weak spots become your training plan.",
    description:
      "Every analysis feeds your personalized 7-day training plan. Bad footwork? You\u2019ll get split-step drills. Weak volleys? Wall return sessions. Each drill has a timer, instructions, and difficulty rating \u2014 so you improve what matters most, not what\u2019s easiest.",
    bullets: [
      "Plans adapt to your analysis scores",
      "Technique, footwork, positioning, fitness, tactics",
      "Streak tracking and XP to keep you consistent",
    ],
    mockup: <MockupTraining />,
    reversed: true,
  },
  {
    title: "Snap your meal. Know your macros.",
    description:
      "Take a photo of your plate \u2014 our AI estimates calories, protein, carbs, and fat instantly. No searching databases or weighing food. Track daily intake, monitor weekly trends, and fuel your body for match day.",
    bullets: [
      "Photo-to-macros in seconds",
      "Daily targets and weekly trend charts",
      "Hydration tracking built in",
    ],
    mockup: <MockupNutrition />,
  },
  {
    title: "Ask anything about padel. Get a real answer.",
    description:
      "\u201CHow do I return a deep lob?\u201D \u201CWhat\u2019s the best formation for mixed doubles?\u201D \u201CShould I use a continental grip for my vibora?\u201D Get expert-level answers instantly \u2014 not generic fitness chatbot responses, but padel-specific coaching from an AI trained on the sport.",
    bullets: [
      "Technique, strategy, rules, equipment advice",
      "Remembers your conversation history",
      "Available 24/7 \u2014 no booking required",
    ],
    mockup: <MockupChat />,
    reversed: true,
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="bg-[#050505]">
      {/* Section label */}
      <div className="mx-auto max-w-7xl px-6 pt-8 text-center sm:px-10 lg:px-16">
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#00E676]/60">
          How it works
        </span>
      </div>

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
