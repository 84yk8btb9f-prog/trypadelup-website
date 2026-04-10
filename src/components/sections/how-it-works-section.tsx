"use client";

import { useEffect, useRef } from "react";
import { Video, Cpu, BarChart3, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Video,
    number: "01",
    title: "Record Your Game",
    description:
      "Capture your padel match or training session with your phone camera.",
  },
  {
    icon: Cpu,
    number: "02",
    title: "AI Analyzes Every Frame",
    description:
      "Our AI breaks down your technique frame-by-frame with precision feedback.",
  },
  {
    icon: BarChart3,
    number: "03",
    title: "Get Your Score & Tips",
    description:
      "Receive technique scores, heatmaps, and personalized improvement tips.",
  },
  {
    icon: TrendingUp,
    number: "04",
    title: "Train & Improve",
    description:
      "Follow personalized drills and track your progress over time.",
  },
];

function StepCard({
  icon: Icon,
  number,
  title,
  description,
  delay,
}: {
  icon: typeof Video;
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
          backgroundColor: "rgba(0, 245, 212, 0.1)",
          border: "1px solid rgba(0, 245, 212, 0.2)",
        }}
      >
        <Icon size={28} color="#00f5d4" strokeWidth={1.5} />
        <span
          className="absolute -top-2 -right-2 w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center"
          style={{ backgroundColor: "#00f5d4", color: "#0a0a0a" }}
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
      id="how-it-works"
      className="py-24 px-4"
      style={{
        backgroundColor: "#0a0a0a",
        borderTop: "1px solid rgba(255, 255, 255, 0.04)",
      }}
    >
      <div className="max-w-5xl mx-auto">
        <div ref={headingRef} className="scroll-reveal text-center mb-16">
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#00f5d4" }}
          >
            How it works
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Four steps to a better game
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-6 relative">
          {/* Connector line (desktop only) */}
          <div
            className="hidden lg:block absolute top-8 left-[calc(12.5%+40px)] right-[calc(12.5%+40px)] h-px"
            style={{ background: "linear-gradient(90deg, rgba(0, 245, 212, 0.3), rgba(255, 77, 148, 0.2), rgba(0, 245, 212, 0.3))" }}
          />
          {steps.map((step, i) => (
            <StepCard key={step.title} {...step} delay={i * 120} />
          ))}
        </div>
      </div>
    </section>
  );
}
