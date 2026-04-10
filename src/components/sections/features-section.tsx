"use client";

import { useEffect, useRef } from "react";
import { Video, BarChart3, Dumbbell, UtensilsCrossed, Map, Bot } from "lucide-react";
import TechniqueScore from "@/components/technique-score";

const features = [
  {
    icon: Video,
    title: "AI Shot Analysis",
    description:
      "Upload a clip and get frame-by-frame technique analysis with personalized tips. Fix your bandeja, smash, and volleys faster than ever.",
    accent: "teal" as const,
  },
  {
    icon: BarChart3,
    title: "Technique Scoring",
    description:
      "Get scored 1-10 on grip, stance, swing path, contact point, and positioning with detailed breakdowns.",
    accent: "teal" as const,
  },
  {
    icon: Dumbbell,
    title: "Personalized Drills",
    description:
      "AI-generated daily training plans based on your weak points. Progress at your own pace with structured routines.",
    accent: "teal" as const,
  },
  {
    icon: UtensilsCrossed,
    title: "Nutrition Tracking",
    description:
      "Snap a photo of your meal and AI identifies macros instantly. Track daily calories with a meal calendar built for athletes.",
    accent: "magenta" as const,
  },
  {
    icon: Map,
    title: "Find Courts",
    description:
      "Discover padel and tennis courts worldwide on an interactive map. Add your own and earn XP.",
    accent: "magenta" as const,
  },
  {
    icon: Bot,
    title: "AI Coach Chat",
    description:
      "Ask any padel question and get instant expert answers. Strategy, technique, gear recommendations, and more.",
    accent: "magenta" as const,
  },
];

function FeatureCard({
  icon: Icon,
  title,
  description,
  accent,
  delay,
}: {
  icon: typeof Video;
  title: string;
  description: string;
  accent: "teal" | "magenta";
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isMagenta = accent === "magenta";
  const accentColor = isMagenta ? "#00E676" : "#00E676";

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
      className="scroll-reveal group p-6 rounded-2xl flex flex-col gap-4 bg-white/[0.04] backdrop-blur-lg transition-all duration-300 hover:-translate-y-1"
      style={{
        border: `1px solid ${isMagenta ? "rgba(255,77,148,0.15)" : "rgba(255,255,255,0.08)"}`,
      }}
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center"
        style={{ backgroundColor: isMagenta ? "rgba(255,77,148,0.1)" : "rgba(0,245,212,0.1)" }}
      >
        <Icon size={24} color={accentColor} strokeWidth={1.5} />
      </div>
      <div className="flex flex-col gap-2">
        <h3
          className="text-lg font-semibold text-white"
          style={{ fontFamily: "'Clash Display', sans-serif" }}
        >
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-white/60">{description}</p>
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
    <section id="features" className="py-28 px-4 bg-[#0A0A0A] relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div ref={headingRef} className="scroll-reveal mb-16 max-w-lg">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] mb-3 text-teal">
            Features
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "'Clash Display', sans-serif" }}
          >
            Everything you need to dominate the court
          </h2>
          <p className="text-lg text-white/60">
            Six powerful tools working together in one app, powered by the latest AI.
          </p>
        </div>

        {/* Hero feature — full width: AI Analysis with animated score */}
        <div className="mb-6 grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          <div className="p-8 rounded-2xl bg-white/[0.04] border border-teal/20 backdrop-blur-lg flex flex-col justify-center">
            <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-teal/10 mb-5">
              <Video size={28} className="text-teal" strokeWidth={1.5} />
            </div>
            <h3
              className="text-2xl sm:text-3xl font-bold text-white mb-3"
              style={{ fontFamily: "'Clash Display', sans-serif" }}
            >
              AI Shot Analysis
            </h3>
            <p className="text-base leading-relaxed text-white/60 mb-4">
              Upload a clip and get frame-by-frame technique analysis with personalized tips.
              Fix your bandeja, smash, and volleys faster than ever. This is like having a
              professional coach watching every shot.
            </p>
            <div className="flex items-center gap-2 text-sm text-cream font-medium">
              <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
              Live AI analysis in seconds
            </div>
          </div>

          {/* Animated technique score — the product demo */}
          <TechniqueScore />
        </div>

        {/* Remaining 5 features in tighter grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.slice(1).map((feature, i) => (
            <FeatureCard key={feature.title} {...feature} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}
