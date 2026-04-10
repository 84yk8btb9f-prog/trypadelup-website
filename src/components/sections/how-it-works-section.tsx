"use client";

import { useEffect, useRef } from "react";
import { Upload, ScanSearch, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Upload,
    number: "01",
    title: "Upload",
    description:
      "Record a short clip of your padel game and upload it to the app.",
  },
  {
    icon: ScanSearch,
    number: "02",
    title: "Analyze",
    description:
      "Our AI breaks down your technique frame-by-frame with precision feedback.",
  },
  {
    icon: TrendingUp,
    number: "03",
    title: "Improve",
    description:
      "Get personalized drills and tips to fix your weaknesses and level up.",
  },
];

function StepCard({
  icon: Icon,
  number,
  title,
  description,
  delay,
}: {
  icon: typeof Upload;
  number: string;
  title: string;
  description: string;
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
    <div ref={ref} className="scroll-reveal relative flex flex-col items-center text-center gap-4">
      <div
        className="relative w-16 h-16 rounded-2xl flex items-center justify-center"
        style={{
          backgroundColor: "rgba(57, 255, 125, 0.1)",
          border: "1px solid rgba(57, 255, 125, 0.2)",
        }}
      >
        <Icon size={28} color="#39ff7d" strokeWidth={1.5} />
        <span
          className="absolute -top-2 -right-2 w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center"
          style={{ backgroundColor: "#39ff7d", color: "#0b0f14" }}
        >
          {number}
        </span>
      </div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p
        className="text-sm leading-relaxed max-w-xs"
        style={{ color: "rgba(240, 244, 248, 0.6)" }}
      >
        {description}
      </p>
    </div>
  );
}

export default function HowItWorksSection() {
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
      className="py-24 px-4"
      style={{
        backgroundColor: "#0b0f14",
        borderTop: "1px solid rgba(255, 255, 255, 0.04)",
      }}
    >
      <div className="max-w-4xl mx-auto">
        <div ref={headingRef} className="scroll-reveal text-center mb-16">
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#39ff7d" }}
          >
            How it works
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Three steps to a better game
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative">
          {/* Connector lines (desktop only) */}
          <div
            className="hidden md:block absolute top-8 left-[calc(16.67%+32px)] right-[calc(16.67%+32px)] h-px"
            style={{ backgroundColor: "rgba(57, 255, 125, 0.15)" }}
          />
          {steps.map((step, i) => (
            <StepCard key={step.title} {...step} delay={i * 150} />
          ))}
        </div>
      </div>
    </section>
  );
}
