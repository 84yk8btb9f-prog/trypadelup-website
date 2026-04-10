"use client";

import { useEffect, useRef } from "react";
import { Video, Cpu, BarChart3, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Video,
    number: "01",
    title: "Record Your Game",
    description: "Capture your padel match or training session with your phone camera.",
  },
  {
    icon: Cpu,
    number: "02",
    title: "AI Analyzes Every Frame",
    description: "Our AI breaks down your technique frame-by-frame with precision feedback.",
  },
  {
    icon: BarChart3,
    number: "03",
    title: "Get Your Score & Tips",
    description: "Receive technique scores, heatmaps, and personalized improvement tips.",
  },
  {
    icon: TrendingUp,
    number: "04",
    title: "Train & Improve",
    description: "Follow personalized drills and track your progress over time.",
  },
];

export default function HowItWorksSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const cards = el.querySelectorAll(".step-card");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.1 }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="how-it-works"
      className="py-28 px-4 bg-[#050505] relative overflow-hidden"
    >
      {/* Diagonal top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

      <div className="max-w-6xl mx-auto" ref={sectionRef}>
        {/* Header — left-aligned for asymmetry */}
        <div className="mb-16 max-w-lg">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] mb-3 text-magenta">
            How it works
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white"
            style={{ fontFamily: "'Clash Display', sans-serif" }}
          >
            Four steps to a better game
          </h2>
        </div>

        {/* Horizontal timeline — desktop */}
        <div className="hidden lg:block relative">
          {/* Connecting gradient line */}
          <div className="absolute top-[60px] left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-teal via-magenta to-teal opacity-30" />

          <div className="grid grid-cols-4 gap-6">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.title}
                  className="step-card scroll-reveal relative flex flex-col items-start gap-5"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  {/* Large faded number */}
                  <span
                    className="absolute -top-6 -left-1 text-[80px] font-bold leading-none text-white/[0.03] pointer-events-none select-none"
                    style={{ fontFamily: "'Clash Display', sans-serif" }}
                  >
                    {step.number}
                  </span>

                  {/* Icon circle on the timeline */}
                  <div className="relative z-10 w-[52px] h-[52px] rounded-xl flex items-center justify-center bg-white/[0.06] border border-white/[0.1]">
                    <Icon size={24} className="text-teal" strokeWidth={1.5} />
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full text-[10px] font-bold flex items-center justify-center bg-teal text-[#050505]">
                      {step.number}
                    </span>
                  </div>

                  <h3
                    className="text-lg font-semibold text-white"
                    style={{ fontFamily: "'Clash Display', sans-serif" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/60">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile/tablet — stacked cards */}
        <div className="lg:hidden flex flex-col gap-8">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className="step-card scroll-reveal relative flex items-start gap-5"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {/* Left: number + icon */}
                <div className="relative shrink-0">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-white/[0.06] border border-white/[0.1]">
                    <Icon size={24} className="text-teal" strokeWidth={1.5} />
                  </div>
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full text-[10px] font-bold flex items-center justify-center bg-teal text-[#050505]">
                    {step.number}
                  </span>
                  {/* Vertical connector */}
                  {i < steps.length - 1 && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-px h-8 bg-gradient-to-b from-teal/30 to-transparent" />
                  )}
                </div>

                {/* Right: text */}
                <div>
                  <h3
                    className="text-lg font-semibold text-white mb-1"
                    style={{ fontFamily: "'Clash Display', sans-serif" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/60">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
