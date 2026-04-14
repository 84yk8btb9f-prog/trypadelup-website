"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const faqs = [
  {
    question: "How does the AI video analysis work?",
    answer: "Upload a short clip of any padel shot. Our vision AI breaks it down frame-by-frame, scoring your technique across stance, grip, swing path, body position, and racket angle on a 0\u201310 scale. You get specific tips and matched drills to fix what it finds.",
  },
  {
    question: "Is PadelUp only for beginners?",
    answer: "No \u2014 PadelUp works for every level. Beginners get foundational technique feedback. Intermediate players identify and fix specific weak spots. Advanced players use it for marginal gains and maintaining consistency across all shot types.",
  },
  {
    question: "How accurate is the nutrition tracking?",
    answer: "Our AI recognizes thousands of foods from a single photo and estimates macros (calories, protein, carbs, fat) within 5\u201310% accuracy. You can always adjust portions manually for precision.",
  },
  {
    question: "Does the free trial require a credit card?",
    answer: "No. You get a full 3-day free trial with access to every feature. No credit card required until you decide to subscribe.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer: "Yes. Cancel anytime through the App Store. Your access continues until the end of your current billing period \u2014 no penalties, no hidden fees.",
  },
  {
    question: "What devices are supported?",
    answer: "PadelUp is available on iPhone and iPad running iOS 16 or later. An Android version is coming soon \u2014 join the waitlist to get notified.",
  },
  {
    question: "How is this different from a private coach?",
    answer: "A private coach costs $60\u2013100/hour and sees you once a week. PadelUp analyzes every shot, every session, and is available 24/7. It doesn\u2019t replace a coach \u2014 it gives you expert-level feedback between sessions.",
  },
  {
    question: "Is my video data private?",
    answer: "Yes. Your videos are encrypted in transit and at rest. They\u2019re used solely for your analysis and are never shared with third parties. You can delete your data at any time from the app settings.",
  },
];

function FaqItem({ question, answer, isOpen, onToggle }: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-white/[0.06]">
      <button
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="text-base font-medium text-white/80 sm:text-lg">{question}</span>
        <span
          className={`flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-white/10 transition-transform duration-300 ${
            isOpen ? "rotate-45 bg-[#00E676]/10 border-[#00E676]/30" : ""
          }`}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M6 2.5V9.5" stroke={isOpen ? "#00E676" : "rgba(255,255,255,0.4)"} strokeWidth="1.5" strokeLinecap="round" />
            <path d="M2.5 6H9.5" stroke={isOpen ? "#00E676" : "rgba(255,255,255,0.4)"} strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm leading-relaxed text-white/40">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-[#050505] py-24">
      <div className="mx-auto max-w-3xl px-6">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.2em] text-[#00E676]">
            FAQ
          </span>
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl font-heading">
            Got questions?
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {faqs.map((faq, i) => (
            <FaqItem
              key={i}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
