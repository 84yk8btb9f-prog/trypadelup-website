"use client";

import { motion } from "motion/react";
import { BorderBeam } from "@/components/ui/border-beam";
import { ShimmerButton } from "@/components/ui/shimmer-button";

const APP_STORE_URL = "https://apps.apple.com/app/padelup/id0000000000";

export default function PricingSection() {
  return (
    <section id="pricing" className="bg-[#050505] py-24 px-6 sm:px-10">
      <div className="mx-auto max-w-3xl">
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl font-heading">
            One app. Everything you need to improve.
          </h2>
          <p className="mt-4 text-base text-white/35">
            Video analysis, training plans, nutrition tracking, AI coaching,
            match scoring, court finder, and social features — all in one place.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {/* Monthly */}
          <motion.div
            className="glass-card flex flex-col items-center gap-5 rounded-3xl p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="text-center">
              <h3 className="text-xl font-semibold text-white font-heading">
                Monthly
              </h3>
              <p className="mt-2 text-3xl font-bold text-white font-heading">
                $9.99
                <span className="text-base font-normal text-white/35">/mo</span>
              </p>
            </div>
            <a
              href={APP_STORE_URL}
              className="w-full rounded-full border border-white/[0.08] py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-white/[0.04]"
            >
              Start free trial
            </a>
          </motion.div>

          {/* Yearly — recommended */}
          <motion.div
            className="relative flex flex-col items-center gap-5 overflow-hidden rounded-3xl border border-[#00E676]/15 bg-[#00E676]/[0.02] p-8"
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

            <span className="absolute right-6 top-0 rounded-b-lg bg-[#00E676] px-3 py-1 text-[11px] font-bold text-[#050505]">
              SAVE 58%
            </span>

            <div className="text-center">
              <h3 className="text-xl font-semibold text-white font-heading">
                Yearly
              </h3>
              <p className="mt-2 text-3xl font-bold text-white font-heading">
                $4.17
                <span className="text-base font-normal text-white/35">/mo</span>
              </p>
              <p className="mt-1 text-xs text-white/25">billed $49.99/yr</p>
            </div>
            <a href={APP_STORE_URL} className="w-full">
              <ShimmerButton
                shimmerColor="#00E676"
                background="rgba(0, 230, 118, 0.12)"
                className="w-full py-3 text-sm font-semibold"
              >
                <span className="text-white">Start free trial</span>
              </ShimmerButton>
            </a>
          </motion.div>
        </div>

        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-sm text-white/20">
            Unlimited analysis / AI training / Nutrition / Courts / AI coach
          </p>
          <p className="mt-3 text-sm text-white/30">
            3-day free trial. Cancel anytime. No credit card until you&apos;re sure.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
