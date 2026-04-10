'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { MotionDiv } from '@/components/ui/motion-wrapper';
import { cn } from '@/lib/utils';

const APP_STORE_URL = 'https://apps.apple.com/app/padelup/id0000000000';

const allFeatures = [
  'Unlimited AI Analysis',
  'Personalized Training',
  'Nutrition Tracking',
  'AI Coach Chat',
  'Courts Map',
];

function PricingCard({
  plan,
  price,
  period,
  subtext,
  badge,
  highlight,
}: {
  plan: string;
  price: string;
  period: string;
  subtext: string;
  badge?: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={cn(
        'relative p-8 rounded-2xl flex flex-col gap-6 backdrop-blur-xl transition-all duration-300',
        highlight
          ? 'bg-[#00E676]/[0.05] border border-[#00E676]/25 shadow-[0_0_20px_rgba(0,230,118,0.08)]'
          : 'bg-white/[0.04] border border-white/[0.08]'
      )}
    >
      {badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#00E676] text-[#0A0A0A]">
          {badge}
        </div>
      )}

      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2 justify-between">
          <span
            className={cn(
              'text-sm font-semibold uppercase tracking-wide',
              highlight ? 'text-[#00E676]' : 'text-white/50'
            )}
          >
            {plan}
          </span>
          {highlight && (
            <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-[#00E676]/15 text-[#00E676]">
              SAVE 58%
            </span>
          )}
        </div>
        <div className="flex items-end gap-1">
          <span className="text-5xl font-bold text-white font-heading">
            {price}
          </span>
          <span className="text-base mb-2 text-white/50">/{period}</span>
        </div>
        <p className="text-sm text-white/50">{subtext}</p>
      </div>

      <div className="text-xs font-semibold text-center py-2 rounded-lg bg-[#00E676]/10 text-[#00E676] border border-[#00E676]/15">
        3-day free trial included
      </div>

      {/* Features list */}
      <div className="flex flex-col gap-2.5">
        {allFeatures.map((feature) => (
          <div key={feature} className="flex items-center gap-2.5 text-sm">
            <div className="w-5 h-5 rounded-full bg-[#00E676]/10 flex items-center justify-center shrink-0">
              <Check size={11} className="text-[#00E676]" strokeWidth={2.5} />
            </div>
            <span className="text-white/60">{feature}</span>
          </div>
        ))}
      </div>

      <a
        href={APP_STORE_URL}
        className={cn(
          'w-full py-3.5 rounded-full font-semibold text-center text-sm transition-all',
          highlight
            ? 'bg-[#00E676] text-[#0A0A0A] shadow-[0_0_20px_rgba(0,230,118,0.08)] hover:shadow-[0_0_30px_rgba(0,230,118,0.15)]'
            : 'bg-white/[0.06] text-white border border-white/[0.1] hover:bg-white/[0.1]'
        )}
      >
        Start free trial
      </a>
    </div>
  );
}

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(true);

  return (
    <section id="pricing" className="py-24 px-4 bg-[#0A0A0A] relative">
      {/* Gradient divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00E676]/10 to-transparent" />

      <div className="max-w-3xl mx-auto">
        <MotionDiv className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] mb-4 text-[#00E676]">
            Pricing
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 font-heading">
            Simple, transparent pricing
          </h2>
          <p className="text-white/50 mb-8">
            Start with a 3-day free trial. Cancel anytime.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-3 p-1.5 rounded-full bg-white/[0.04] border border-white/[0.08]">
            <button
              onClick={() => setIsYearly(false)}
              className={cn(
                'relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300',
                !isYearly ? 'text-[#0A0A0A]' : 'text-white/50 hover:text-white/70'
              )}
            >
              {!isYearly && (
                <motion.div
                  layoutId="pricing-toggle"
                  className="absolute inset-0 bg-[#00E676] rounded-full"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                />
              )}
              <span className="relative z-10">Monthly</span>
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={cn(
                'relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300',
                isYearly ? 'text-[#0A0A0A]' : 'text-white/50 hover:text-white/70'
              )}
            >
              {isYearly && (
                <motion.div
                  layoutId="pricing-toggle"
                  className="absolute inset-0 bg-[#00E676] rounded-full"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                />
              )}
              <span className="relative z-10">Yearly</span>
            </button>
          </div>
        </MotionDiv>

        <MotionDiv delay={0.15}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <PricingCard
              plan="Monthly"
              price="$9.99"
              period="mo"
              subtext="Full access to all features"
            />
            <PricingCard
              plan="Yearly"
              price="$49.99"
              period="yr"
              subtext="$4.17/mo — billed annually"
              badge="Most Popular"
              highlight
            />
          </div>
        </MotionDiv>

        <p className="text-center text-xs mt-8 text-white/30">
          Billed through the Apple App Store. Cancel anytime.
        </p>
      </div>
    </section>
  );
}
