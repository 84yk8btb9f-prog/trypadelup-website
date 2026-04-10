"use client";

import { useEffect, useRef } from "react";
import { Check } from "lucide-react";

const APP_STORE_URL = "https://apps.apple.com/app/padelup/id0000000000";

const allFeatures = [
  "Unlimited AI video analysis",
  "Personalized training plans",
  "Nutrition tracking & meal calendar",
  "AI Coach chat",
  "Social features & court discovery",
];

function PricingCard({
  plan,
  price,
  period,
  subtext,
  badge,
  highlight,
  delay,
}: {
  plan: string;
  price: string;
  period: string;
  subtext: string;
  badge?: string;
  highlight?: boolean;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add("visible"), delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`scroll-reveal relative p-7 rounded-2xl flex flex-col gap-6 backdrop-blur-lg ${
        highlight
          ? "bg-teal/[0.07] border border-teal/35 shadow-[0_0_50px_rgba(0,245,212,0.1)]"
          : "bg-white/[0.04] border border-white/[0.08]"
      }`}
    >
      {badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-magenta text-white">
          {badge}
        </div>
      )}

      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2 justify-between">
          <span
            className={`text-sm font-semibold uppercase tracking-wide ${
              highlight ? "text-teal" : "text-white/60"
            }`}
          >
            {plan}
          </span>
          {highlight && (
            <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-magenta/20 text-magenta">
              SAVE 58%
            </span>
          )}
        </div>
        <div className="flex items-end gap-1">
          <span
            className="text-5xl font-bold text-white"
            style={{ fontFamily: "'Clash Display', sans-serif" }}
          >
            {price}
          </span>
          <span className="text-base mb-2 text-white/50">/{period}</span>
        </div>
        <p className="text-sm text-white/50">{subtext}</p>
      </div>

      <div className="text-xs font-semibold text-center py-1.5 rounded-lg bg-teal/10 text-teal border border-teal/15">
        3-day free trial included
      </div>

      <a
        href={APP_STORE_URL}
        className={`w-full py-3.5 rounded-full font-semibold text-center text-sm transition-all ${
          highlight
            ? "bg-teal text-[#0A0A0A] shadow-[0_0_25px_rgba(0,245,212,0.3)] hover:shadow-[0_0_40px_rgba(0,245,212,0.5)]"
            : "bg-white/[0.08] text-[#f0f4f8] border border-white/12 hover:bg-white/12"
        }`}
      >
        Start free trial
      </a>
    </div>
  );
}

export default function PricingSection() {
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = headingRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="pricing" className="py-28 px-4 bg-[#0A0A0A] relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

      <div className="max-w-3xl mx-auto">
        <div ref={headingRef} className="scroll-reveal text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] mb-3 text-teal">
            Pricing
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "'Clash Display', sans-serif" }}
          >
            Simple, transparent pricing
          </h2>
          <p className="text-white/60">
            Start with a 3-day free trial. No commitment required.
          </p>
        </div>

        {/* Shared features — shown once */}
        <div className="mb-10 p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
          <p className="text-sm font-semibold text-white/80 mb-4 uppercase tracking-wider">Both plans include</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {allFeatures.map((feature) => (
              <div key={feature} className="flex items-center gap-2.5 text-sm">
                <div className="w-5 h-5 rounded-full bg-teal/15 flex items-center justify-center shrink-0">
                  <Check size={12} className="text-teal" strokeWidth={2.5} />
                </div>
                <span className="text-white/75">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Price cards — focused on price only */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <PricingCard
            plan="Monthly"
            price="$9.99"
            period="mo"
            subtext="Full access to all features"
            delay={0}
          />
          <PricingCard
            plan="Yearly"
            price="$49.99"
            period="yr"
            subtext="$4.17/mo — billed annually"
            badge="Most Popular"
            highlight
            delay={100}
          />
        </div>

        <p className="text-center text-xs mt-6 text-white/35">
          Billed through the Apple App Store. Cancel anytime.
        </p>
      </div>
    </section>
  );
}
