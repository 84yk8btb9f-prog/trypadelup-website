"use client";

import { motion } from "motion/react";
import { BorderBeam } from "@/components/ui/border-beam";

const APP_STORE_URL = "https://apps.apple.com/app/padelup/id0000000000";

const monthlyFeatures = [
  "Unlimited Video Analysis",
  "Personalized Training Plans",
  "AI Nutrition Tracking",
  "24/7 AI Coach Chat",
];

const yearlyFeatures = [
  "Everything in Monthly",
  "Priority Analysis Processing",
  "Early access to new features",
];

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="flex-shrink-0 mt-0.5">
      <path d="M3.5 8L6.5 11L12.5 5" stroke="#00E676" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function PricingSection() {
  return (
    <section id="pricing" className="bg-[#050505] py-24 px-6 sm:px-10">
      <div className="mx-auto max-w-3xl">
        <motion.h2
          className="mb-14 text-center text-3xl font-bold text-white sm:text-4xl lg:text-5xl font-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          One app. Everything you need to improve.
        </motion.h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {/* Monthly */}
          <motion.div
            className="glass-card flex flex-col rounded-2xl p-7"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-white font-heading">Monthly</h3>
              <p className="mt-1 text-sm text-white/30">Flexibility to pay as you go.</p>
            </div>

            <div className="mb-6 flex items-baseline">
              <span className="text-4xl font-bold text-white font-heading">$9.99</span>
              <span className="ml-1 text-sm text-white/30">/mo</span>
            </div>

            <ul className="mb-8 space-y-3 flex-1">
              {monthlyFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5">
                  <CheckIcon />
                  <span className="text-sm text-white/50">{feature}</span>
                </li>
              ))}
            </ul>

            <a
              href={APP_STORE_URL}
              className="w-full rounded-xl bg-white/[0.06] border border-white/[0.08] py-3.5 text-center text-sm font-semibold text-white transition-colors hover:bg-white/[0.1]"
            >
              Start Monthly Plan
            </a>

            <p className="mt-3 flex items-center justify-center gap-1.5 text-xs text-white/25">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#00E676]/60 animate-pulse" />
              3 people subscribed in the last 24 hours
            </p>
          </motion.div>

          {/* Yearly */}
          <motion.div
            className="relative flex flex-col overflow-hidden rounded-2xl border border-[#00E676]/15 bg-[#00E676]/[0.02] p-7"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <BorderBeam
              colorFrom="#00E676"
              colorTo="#69F0AE"
              size={200}
              duration={8}
              borderWidth={1}
            />

            <span className="absolute right-5 top-0 rounded-b-lg bg-[#00E676] px-3 py-1 text-[10px] font-bold text-[#050505]">
              SAVE 58%
            </span>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-white font-heading">Yearly</h3>
              <p className="mt-1 text-sm text-white/30">Commit to your game. Best value.</p>
            </div>

            <div className="mb-1 flex items-baseline">
              <span className="text-4xl font-bold text-white font-heading">$4.17</span>
              <span className="ml-1 text-sm text-white/30">/mo</span>
            </div>
            <p className="mb-6 text-xs text-white/20">Billed $49.99 annually</p>

            <ul className="mb-8 space-y-3 flex-1">
              {yearlyFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5">
                  <CheckIcon />
                  <span className="text-sm text-white/50">{feature}</span>
                </li>
              ))}
            </ul>

            <a
              href={APP_STORE_URL}
              className="w-full rounded-xl bg-[#00E676] py-3.5 text-center text-sm font-semibold text-[#050505] transition-all hover:shadow-[0_0_24px_rgba(0,230,118,0.2)]"
            >
              Start Yearly Plan
            </a>

            <p className="mt-3 flex items-center justify-center gap-1.5 text-xs text-white/25">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#00E676]/60 animate-pulse" />
              4 people subscribed in the last 24 hours
            </p>
          </motion.div>
        </div>

        <motion.p
          className="mt-8 text-center text-sm text-white/25"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          3-day free trial. Cancel anytime. No credit card until you&apos;re sure.
        </motion.p>
      </div>
    </section>
  );
}
