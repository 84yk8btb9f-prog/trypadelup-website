"use client";

import { useEffect, useRef } from "react";

const featureList = [
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
      className="scroll-reveal relative p-7 rounded-2xl flex flex-col gap-6"
      style={{
        backgroundColor: highlight
          ? "rgba(57, 255, 125, 0.07)"
          : "rgba(255, 255, 255, 0.04)",
        border: highlight
          ? "1px solid rgba(57, 255, 125, 0.35)"
          : "1px solid rgba(255, 255, 255, 0.08)",
        backdropFilter: "blur(8px)",
        boxShadow: highlight ? "0 0 50px rgba(57, 255, 125, 0.1)" : "none",
      }}
    >
      {badge && (
        <div
          className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
          style={{
            backgroundColor: "#39ff7d",
            color: "#0b0f14",
          }}
        >
          {badge}
        </div>
      )}

      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2 justify-between">
          <span
            className="text-sm font-semibold uppercase tracking-wide"
            style={{ color: highlight ? "#39ff7d" : "rgba(240, 244, 248, 0.6)" }}
          >
            {plan}
          </span>
          {highlight && (
            <span
              className="text-xs font-bold px-2 py-0.5 rounded"
              style={{
                backgroundColor: "rgba(57, 255, 125, 0.15)",
                color: "#39ff7d",
              }}
            >
              SAVE 58%
            </span>
          )}
        </div>
        <div className="flex items-end gap-1">
          <span className="text-5xl font-bold text-white">{price}</span>
          <span
            className="text-base mb-2"
            style={{ color: "rgba(240, 244, 248, 0.5)" }}
          >
            /{period}
          </span>
        </div>
        <p
          className="text-sm"
          style={{ color: "rgba(240, 244, 248, 0.5)" }}
        >
          {subtext}
        </p>
      </div>

      <div
        className="text-xs font-semibold text-center py-1.5 rounded-lg"
        style={{
          backgroundColor: "rgba(57, 255, 125, 0.1)",
          color: "#39ff7d",
          border: "1px solid rgba(57, 255, 125, 0.15)",
        }}
      >
        3-day free trial included
      </div>

      <a
        href="#"
        className="w-full py-3 rounded-full font-semibold text-center text-sm transition-all"
        style={
          highlight
            ? {
                backgroundColor: "#39ff7d",
                color: "#0b0f14",
                boxShadow: "0 0 25px rgba(57, 255, 125, 0.3)",
              }
            : {
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                color: "#f0f4f8",
                border: "1px solid rgba(255, 255, 255, 0.12)",
              }
        }
      >
        Start free trial
      </a>

      <ul className="flex flex-col gap-3">
        {featureList.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm">
            <svg
              width="16"
              height="16"
              fill="none"
              viewBox="0 0 24 24"
              className="mt-0.5 shrink-0"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10" fill="rgba(57, 255, 125, 0.15)" />
              <path
                d="M8 12l3 3 5-5"
                stroke="#39ff7d"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span style={{ color: "rgba(240, 244, 248, 0.75)" }}>
              {feature}
            </span>
          </li>
        ))}
      </ul>
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
    <section
      id="pricing"
      className="py-24 px-4"
      style={{
        backgroundColor: "#0b0f14",
        borderTop: "1px solid rgba(255, 255, 255, 0.04)",
      }}
    >
      <div className="max-w-3xl mx-auto">
        <div ref={headingRef} className="scroll-reveal text-center mb-12">
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#39ff7d" }}
          >
            Pricing
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Simple, transparent pricing
          </h2>
          <p style={{ color: "rgba(240, 244, 248, 0.6)" }}>
            Start with a 3-day free trial. No commitment required.
          </p>
        </div>

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

        <p
          className="text-center text-xs mt-6"
          style={{ color: "rgba(240, 244, 248, 0.35)" }}
        >
          Billed through the Apple App Store. Cancel anytime.
        </p>
      </div>
    </section>
  );
}
