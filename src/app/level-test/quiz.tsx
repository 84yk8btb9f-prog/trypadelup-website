"use client";

import { useState } from "react";
import AppStoreBadge from "@/components/app-store-badge";
import { APP_STORE_URL } from "@/lib/config";

const QUESTIONS = [
  {
    q: "How long have you been playing padel?",
    options: [
      { label: "Just started — first few sessions", score: 0 },
      { label: "Less than 6 months", score: 1 },
      { label: "6 months to 2 years", score: 2 },
      { label: "More than 2 years", score: 3 },
    ],
  },
  {
    q: "How often do you get on court?",
    options: [
      { label: "Less than once a week", score: 0 },
      { label: "Once a week", score: 1 },
      { label: "2–3 times a week", score: 2 },
      { label: "4+ times a week", score: 3 },
    ],
  },
  {
    q: "Can you sustain a 10+ shot forehand rally?",
    options: [
      { label: "Not yet", score: 0 },
      { label: "Sometimes", score: 1 },
      { label: "Yes, consistently", score: 2 },
      { label: "Yes — and I control pace and placement", score: 3 },
    ],
  },
  {
    q: "How is your backhand?",
    options: [
      { label: "Still learning it", score: 0 },
      { label: "Basic, mostly defensive", score: 1 },
      { label: "Solid — goes where I aim", score: 2 },
      { label: "Strong — I use it as a weapon", score: 3 },
    ],
  },
  {
    q: "Can you play balls off the back glass (cristal)?",
    options: [
      { label: "I avoid it completely", score: 0 },
      { label: "I try, but often miss", score: 1 },
      { label: "Yes, to reset points defensively", score: 2 },
      { label: "Yes — I use it to win points", score: 3 },
    ],
  },
  {
    q: "Overhead shots — smash or bandeja?",
    options: [
      { label: "Not yet", score: 0 },
      { label: "Basic smash only", score: 1 },
      { label: "Bandeja in training, rarely in matches", score: 2 },
      { label: "Bandeja and víbora regularly in matches", score: 3 },
    ],
  },
  {
    q: "How do you play at the net?",
    options: [
      { label: "I avoid the net", score: 0 },
      { label: "Basic volleys, many errors", score: 1 },
      { label: "Comfortable, consistent volleys", score: 2 },
      { label: "I control points from the net", score: 3 },
    ],
  },
  {
    q: "How tactically do you play in a match?",
    options: [
      { label: "I focus on just getting the ball back", score: 0 },
      { label: "I target the weaker player", score: 1 },
      { label: "I vary pace, direction, and use lobs", score: 2 },
      { label: "I play structured patterns to win points", score: 3 },
    ],
  },
  {
    q: "How is your serve?",
    options: [
      { label: "I just try to get it in", score: 0 },
      { label: "Consistent but basic", score: 1 },
      { label: "Placed, with some variation", score: 2 },
      { label: "Aggressive and strategic", score: 3 },
    ],
  },
  {
    q: "What level do you compete at?",
    options: [
      { label: "Social or fun play only", score: 0 },
      { label: "Friendly club competitions", score: 1 },
      { label: "Club leagues or local tournaments", score: 2 },
      { label: "Regional or national level", score: 3 },
    ],
  },
];

type LevelResult = {
  level: string;
  label: string;
  description: string;
  focus: string;
};

function getResult(score: number): LevelResult {
  if (score <= 5)
    return {
      level: "1.0–1.5",
      label: "Beginner",
      description:
        "You're at the start of your padel journey. Right now it's about getting comfortable on court, learning the basic shots, and understanding how the walls change the game.",
      focus: "Grip, stance, and basic forehand/backhand consistency",
    };
  if (score <= 10)
    return {
      level: "2.0–2.5",
      label: "Developing",
      description:
        "You can sustain rallies and know the fundamentals. The next step is building consistency and starting to use the back glass intentionally rather than by accident.",
      focus: "Back-glass play, backhand consistency, net introduction",
    };
  if (score <= 15)
    return {
      level: "3.0–3.5",
      label: "Intermediate",
      description:
        "You play regularly and have solid core shots. The gap to the next level is mostly tactical — learning to control points, not just react to them.",
      focus: "Bandeja technique, court positioning, tactical variation",
    };
  if (score <= 20)
    return {
      level: "4.0–4.5",
      label: "Advanced recreational",
      description:
        "You play competitive social padel confidently. Your technique is solid across most shots — the work now is refinement and consistency under pressure.",
      focus: "Víbora, match patterns, net dominance",
    };
  if (score <= 25)
    return {
      level: "5.0–5.5",
      label: "Competitive",
      description:
        "You play at a strong competitive level. Marginal improvements in consistency and shot selection make the difference between winning and losing tight matches.",
      focus: "Shot-specific consistency, opponent analysis, tournament tactics",
    };
  return {
    level: "6.0+",
    label: "Elite",
    description:
      "You play at a semi-professional or elite level. Your technical base is advanced — improvement comes from marginal gains, physical conditioning, and high-level tactical work.",
    focus: "Technical refinement, physical performance, high-level match prep",
  };
}

export default function LevelQuiz() {
  const [step, setStep] = useState(-1);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selected, setSelected] = useState<number | null>(null);
  const [transitioning, setTransitioning] = useState(false);

  const total = QUESTIONS.length;

  function handleSelect(score: number) {
    if (transitioning) return;
    setSelected(score);
    setTransitioning(true);
    setTimeout(() => {
      setAnswers((prev) => [...prev, score]);
      setSelected(null);
      setTransitioning(false);
      setStep((s) => s + 1);
    }, 300);
  }

  function restart() {
    setStep(-1);
    setAnswers([]);
    setSelected(null);
  }

  // Intro
  if (step === -1) {
    return (
      <div className="flex flex-col items-center text-center py-16 px-6">
        <span className="mb-5 inline-flex gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#00E676]">
          <span>Free</span>
          <span className="text-white/20">·</span>
          <span>2 minutes</span>
          <span className="text-white/20">·</span>
          <span>10 questions</span>
        </span>
        <h1
          className="font-heading font-bold text-white leading-[0.95] tracking-tight mb-6"
          style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)" }}
        >
          What&apos;s your
          <br />
          padel level?
        </h1>
        <p className="text-white/45 text-base sm:text-lg max-w-sm mb-10 leading-relaxed">
          Answer 10 questions about your experience, technique, and tactics. Get
          your level on the 1–7 scale used by Playtomic and the FIP.
        </p>
        <button
          onClick={() => setStep(0)}
          className="rounded-full bg-[#00E676] px-10 py-4 text-base font-semibold text-[#050505] hover:bg-[#00ff84] transition-colors duration-200"
        >
          Start the test
        </button>
      </div>
    );
  }

  // Result
  if (step >= total) {
    const score = answers.reduce((a, b) => a + b, 0);
    const result = getResult(score);
    return (
      <div className="flex flex-col items-center text-center py-12 px-6">
        <span className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#00E676]">
          Your result
        </span>
        <div className="mb-4 inline-flex items-center justify-center rounded-2xl border border-[#00E676]/30 bg-[#00E676]/[0.06] px-10 py-5">
          <span className="font-heading text-5xl sm:text-6xl font-bold text-[#00E676]">
            {result.level}
          </span>
        </div>
        <p className="text-2xl font-semibold text-white font-heading mb-6">
          {result.label}
        </p>
        <p className="text-white/55 max-w-md text-base leading-relaxed mb-6">
          {result.description}
        </p>
        <div className="rounded-xl border border-white/[0.07] bg-white/[0.02] px-6 py-5 mb-10 text-left max-w-md w-full">
          <p className="text-xs uppercase tracking-[0.18em] text-[#00E676] mb-2 font-semibold">
            Focus area for your level
          </p>
          <p className="text-sm text-white/65 leading-relaxed">{result.focus}</p>
        </div>
        <p className="text-sm text-white/35 mb-4 max-w-xs">
          PadelUp analyses your actual shots and builds a training plan around
          exactly these areas.
        </p>
        <AppStoreBadge href={APP_STORE_URL} height="h-12" />
        <button
          onClick={restart}
          className="mt-6 text-sm text-white/25 hover:text-white/50 underline-offset-4 hover:underline transition-colors"
        >
          Retake the test
        </button>
      </div>
    );
  }

  // Question
  const q = QUESTIONS[step];
  const progress = (step / total) * 100;

  return (
    <div className="px-6 py-10">
      <div className="mb-10">
        <div className="flex justify-between text-xs text-white/30 mb-2.5">
          <span>
            {step + 1} / {total}
          </span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="h-[2px] w-full rounded-full bg-white/[0.06]">
          <div
            className="h-[2px] rounded-full bg-[#00E676] transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <p className="font-heading text-2xl sm:text-3xl font-semibold text-white mb-8 leading-snug">
        {q.q}
      </p>

      <div className="space-y-3">
        {q.options.map((opt, i) => (
          <button
            key={i}
            onClick={() => handleSelect(opt.score)}
            disabled={transitioning}
            className={`w-full text-left rounded-xl border px-5 py-4 text-sm font-medium transition-all duration-200 cursor-pointer ${
              selected === opt.score
                ? "border-[#00E676] bg-[#00E676]/10 text-white"
                : "border-white/[0.07] bg-white/[0.02] text-white/65 hover:border-white/[0.15] hover:text-white"
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}
