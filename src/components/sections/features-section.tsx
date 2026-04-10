"use client";

import { useEffect, useRef } from "react";

const features = [
  {
    icon: "🎥",
    title: "AI Shot Analysis",
    description:
      "Upload a clip and get frame-by-frame technique analysis with personalized tips. Fix your bandeja, smash, and volleys faster than ever.",
    accent: "teal",
  },
  {
    icon: "📊",
    title: "Technique Scoring",
    description:
      "Get scored 1-10 on grip, stance, swing path, contact point, and positioning with detailed breakdowns.",
    accent: "teal",
  },
  {
    icon: "🏋️",
    title: "Personalized Drills",
    description:
      "AI-generated daily training plans based on your weak points. Progress at your own pace with structured routines.",
    accent: "teal",
  },
  {
    icon: "🍽️",
    title: "Nutrition Tracking",
    description:
      "Snap a photo of your meal and AI identifies macros instantly. Track daily calories with a meal calendar built for athletes.",
    accent: "magenta",
  },
  {
    icon: "🗺️",
    title: "Find Courts",
    description:
      "Discover padel and tennis courts worldwide on an interactive map. Add your own and earn XP.",
    accent: "magenta",
  },
  {
    icon: "🤖",
    title: "AI Coach Chat",
    description:
      "Ask any padel question and get instant expert answers. Strategy, technique, gear recommendations, and more.",
    accent: "magenta",
  },
];

function FeatureCard({
  icon,
  title,
  description,
  accent,
  delay,
}: {
  icon: string;
  title: string;
  description: string;
  accent: string;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isMagenta = accent === "magenta";
  const accentColor = isMagenta ? "#ff4d94" : "#00f5d4";
  const accentRgba = isMagenta ? "rgba(255, 77, 148," : "rgba(0, 245, 212,";

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
      className="scroll-reveal p-6 rounded-2xl flex flex-col gap-4 transition-all duration-300"
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.04)",
        border: "1px solid rgba(255, 255, 255, 0.08)",
        backdropFilter: "blur(8px)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.border = `1px solid ${accentRgba} 0.2)`;
        e.currentTarget.style.boxShadow = `0 0 30px ${accentRgba} 0.08)`;
        e.currentTarget.style.transform = "translateY(-4px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.border = "1px solid rgba(255, 255, 255, 0.08)";
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
        style={{ backgroundColor: `${accentRgba} 0.1)` }}
      >
        {icon}
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p
          className="text-sm leading-relaxed"
          style={{ color: "rgba(240, 244, 248, 0.6)" }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

export default function FeaturesSection() {
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
      id="features"
      className="py-24 px-4"
      style={{ backgroundColor: "#0a0a0a" }}
    >
      <div className="max-w-6xl mx-auto">
        <div ref={headingRef} className="scroll-reveal text-center mb-16">
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#00f5d4" }}
          >
            Features
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Everything you need to dominate the court
          </h2>
          <p
            className="text-lg max-w-xl mx-auto"
            style={{ color: "rgba(240, 244, 248, 0.6)" }}
          >
            Six powerful tools working together in one app, powered by the
            latest AI.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} {...feature} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}
