"use client";

import { useEffect, useRef, useState } from "react";
import { Lightbulb } from "lucide-react";

const techniques = [
  { label: "Grip", score: 8 },
  { label: "Stance", score: 6 },
  { label: "Swing", score: 7 },
  { label: "Position", score: 9 },
];

const tips = [
  "Widen your stance for better balance",
  "Follow through on your swing path",
  "Keep racket face higher at contact",
];

export default function TechniqueScore({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [triggered, setTriggered] = useState(false);
  const [overallScore, setOverallScore] = useState(0);
  const [barWidths, setBarWidths] = useState(techniques.map(() => 0));
  const [showTips, setShowTips] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered) {
          setTriggered(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [triggered]);

  // Animate overall score from 0 to 7.5
  useEffect(() => {
    if (!triggered) return;
    const target = 7.5;
    const duration = 1500;
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setOverallScore(parseFloat((eased * target).toFixed(1)));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [triggered]);

  // Stagger bar fills
  useEffect(() => {
    if (!triggered) return;

    techniques.forEach((tech, i) => {
      const delay = 400 + i * 300;
      setTimeout(() => {
        const duration = 800;
        const startTime = performance.now();
        const animate = (now: number) => {
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setBarWidths((prev) => {
            const next = [...prev];
            next[i] = eased * tech.score * 10;
            return next;
          });
          if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
      }, delay);
    });

    // Show tips after bars fill
    setTimeout(() => setShowTips(true), 2200);
  }, [triggered]);

  return (
    <div
      ref={ref}
      className={`relative rounded-2xl overflow-hidden bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/10 backdrop-blur-xl ${className}`}
    >
      <div className="p-6 sm:p-8">
        {/* Overall Score */}
        <div className="text-center mb-6">
          <p className="text-xs uppercase tracking-[0.2em] text-white/50 mb-2 font-sans">
            Overall Score
          </p>
          <div className="relative inline-flex items-center justify-center">
            <svg className="w-28 h-28" viewBox="0 0 120 120">
              <circle cx="60" cy="60" r="52" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="6" />
              <circle
                cx="60"
                cy="60"
                r="52"
                fill="none"
                stroke="url(#scoreGradient)"
                strokeWidth="6"
                strokeLinecap="round"
                strokeDasharray={`${(overallScore / 10) * 327} 327`}
                transform="rotate(-90 60 60)"
                className="transition-all duration-100"
              />
              <defs>
                <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00E676" />
                  <stop offset="100%" stopColor="#00E676" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-4xl font-bold text-white tabular-nums font-heading">
                {overallScore}
              </span>
              <span className="text-xs text-white/50">/10</span>
            </div>
          </div>
        </div>

        {/* Technique Bars */}
        <div className="space-y-4">
          {techniques.map((tech, i) => (
            <div key={tech.label}>
              <div className="flex justify-between items-center mb-1.5">
                <span className="text-sm font-medium text-white/70">{tech.label}</span>
                <span className="text-sm font-bold tabular-nums text-[#00E676]">
                  {triggered ? tech.score : 0}
                </span>
              </div>
              <div className="w-full h-2 rounded-full bg-white/[0.08]">
                <div
                  className="h-full rounded-full bg-[#00E676] transition-all duration-100"
                  style={{
                    width: `${barWidths[i]}%`,
                    boxShadow: barWidths[i] > 0 ? '0 0 12px rgba(0,230,118,0.25)' : 'none',
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Tips */}
        <div
          className={`mt-6 p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] transition-all duration-500 ${
            showTips ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          <div className="flex items-center gap-2 mb-2">
            <Lightbulb size={14} className="text-[#00E676]" />
            <p className="text-xs font-semibold text-[#00E676] uppercase tracking-wider">AI Tips</p>
          </div>
          <ul className="space-y-1.5">
            {tips.map((tip) => (
              <li key={tip} className="text-sm text-white/60 flex items-start gap-2">
                <span className="text-[#00E676] mt-0.5 shrink-0">&#8226;</span>
                {tip}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
