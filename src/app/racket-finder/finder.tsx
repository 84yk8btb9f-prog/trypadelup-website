"use client";

import { useState } from "react";

type Shape = "round" | "teardrop" | "diamond";
type Hardness = "soft" | "medium" | "hard";

const QUESTIONS = [
  {
    q: "What's your padel level?",
    options: [
      { label: "Beginner — first 6 months", weights: { shape: { round: 3, teardrop: 0, diamond: 0 }, hardness: { soft: 3, medium: 0, hard: 0 } } },
      { label: "Developing — 6 months to 2 years", weights: { shape: { round: 2, teardrop: 1, diamond: 0 }, hardness: { soft: 2, medium: 1, hard: 0 } } },
      { label: "Intermediate — 2+ years, plays weekly", weights: { shape: { round: 0, teardrop: 3, diamond: 1 }, hardness: { soft: 1, medium: 2, hard: 0 } } },
      { label: "Advanced — competitive, strong technique", weights: { shape: { round: 0, teardrop: 1, diamond: 3 }, hardness: { soft: 0, medium: 1, hard: 3 } } },
    ],
  },
  {
    q: "How would you describe your playing style?",
    options: [
      { label: "Defender — consistency, retrieval, long rallies", weights: { shape: { round: 3, teardrop: 1, diamond: 0 }, hardness: { soft: 2, medium: 1, hard: 0 } } },
      { label: "All-court — mix of attack and defence", weights: { shape: { round: 1, teardrop: 3, diamond: 1 }, hardness: { soft: 1, medium: 2, hard: 1 } } },
      { label: "Aggressive — attack first, finish at the net", weights: { shape: { round: 0, teardrop: 1, diamond: 3 }, hardness: { soft: 0, medium: 1, hard: 3 } } },
    ],
  },
  {
    q: "What matters more in a racket?",
    options: [
      { label: "Maximum control", weights: { shape: { round: 3, teardrop: 1, diamond: 0 }, hardness: { soft: 3, medium: 1, hard: 0 } } },
      { label: "Balanced control + power", weights: { shape: { round: 1, teardrop: 3, diamond: 1 }, hardness: { soft: 1, medium: 3, hard: 1 } } },
      { label: "Maximum power", weights: { shape: { round: 0, teardrop: 1, diamond: 3 }, hardness: { soft: 0, medium: 1, hard: 3 } } },
    ],
  },
  {
    q: "What's your typical contact point on overheads?",
    options: [
      { label: "Lower — chest height (volleys, lower bandejas)", weights: { shape: { round: 3, teardrop: 1, diamond: 0 }, hardness: { soft: 1, medium: 1, hard: 0 } } },
      { label: "Middle — head height", weights: { shape: { round: 1, teardrop: 3, diamond: 1 }, hardness: { soft: 1, medium: 2, hard: 1 } } },
      { label: "Higher — above the head (full smashes)", weights: { shape: { round: 0, teardrop: 1, diamond: 3 }, hardness: { soft: 0, medium: 1, hard: 2 } } },
    ],
  },
  {
    q: "What's your budget?",
    options: [
      { label: "Under €100", weights: { shape: { round: 0, teardrop: 0, diamond: 0 }, hardness: { soft: 0, medium: 0, hard: 0 } }, budget: "under-100" },
      { label: "€100–200", weights: { shape: { round: 0, teardrop: 0, diamond: 0 }, hardness: { soft: 0, medium: 0, hard: 0 } }, budget: "100-200" },
      { label: "€200+", weights: { shape: { round: 0, teardrop: 0, diamond: 0 }, hardness: { soft: 0, medium: 0, hard: 0 } }, budget: "200-plus" },
    ],
  },
];

type ShapeResult = {
  shape: Shape;
  hardness: Hardness;
  description: string;
  examples: { budget: string; rackets: string[] }[];
  whyItFits: string;
};

const SHAPE_DESCRIPTIONS: Record<Shape, string> = {
  round: "Round shape with a large central sweet spot. Forgives mishits and prioritises control over power.",
  teardrop: "Teardrop shape — balanced sweet spot between centre and top. Versatile across most shot types.",
  diamond: "Diamond shape with a sweet spot near the top. Maximum power on smashes; demands strong technique.",
};

const HARDNESS_DESCRIPTIONS: Record<Hardness, string> = {
  soft: "Soft EVA core — more rebound, easier power without strong technique, more forgiving on mishits.",
  medium: "Medium EVA core — balanced feel between control and power.",
  hard: "Hard EVA core — less rebound, more control, requires faster swing speeds.",
};

const RACKET_RECS: Record<string, Record<string, string[]>> = {
  round: {
    "under-100": ["Kuikma PR 560 (Decathlon)", "Head Evo Sanyo", "Bullpadel Flow"],
    "100-200": ["Nox ML10", "Adidas Adipower CTRL", "Babolat Reflex"],
    "200-plus": ["Nox ML10 Pro", "Adidas Adipower CTRL Team", "Star Vie R 9.0"],
  },
  teardrop: {
    "under-100": ["Kuikma PR 590", "Head Spark Pro", "Bullpadel Vibora Comfort"],
    "100-200": ["Babolat Air Veron", "Bullpadel Vertex 04 Control", "Adidas Adipower Multiweight"],
    "200-plus": ["Nox AT10 Genius 18K", "Babolat Counter Veron", "Star Vie Astrum"],
  },
  diamond: {
    "under-100": ["Kuikma PR 990 Hard", "Head Speed Pro Lite"],
    "100-200": ["Adidas Metalbone Soft", "Bullpadel Vertex 04", "Nox AT10 Genius"],
    "200-plus": ["Bullpadel Hack 03", "Adidas Metalbone HRD", "Star Vie Brava Soft"],
  },
};

function getResult(answers: { weights: typeof QUESTIONS[number]["options"][number]["weights"]; budget?: string }[]): ShapeResult {
  const shapeScores: Record<Shape, number> = { round: 0, teardrop: 0, diamond: 0 };
  const hardnessScores: Record<Hardness, number> = { soft: 0, medium: 0, hard: 0 };
  let budget = "100-200";

  for (const a of answers) {
    if (a.weights) {
      shapeScores.round += a.weights.shape.round;
      shapeScores.teardrop += a.weights.shape.teardrop;
      shapeScores.diamond += a.weights.shape.diamond;
      hardnessScores.soft += a.weights.hardness.soft;
      hardnessScores.medium += a.weights.hardness.medium;
      hardnessScores.hard += a.weights.hardness.hard;
    }
    if (a.budget) budget = a.budget;
  }

  const shape = (Object.entries(shapeScores).sort((a, b) => b[1] - a[1])[0][0]) as Shape;
  const hardness = (Object.entries(hardnessScores).sort((a, b) => b[1] - a[1])[0][0]) as Hardness;

  const examples = [{ budget, rackets: RACKET_RECS[shape][budget] || RACKET_RECS[shape]["100-200"] }];

  const whyItFits = `Based on your level, style, and preferences, you scored highest for a ${shape}-shape racket with ${hardness} EVA core. ${SHAPE_DESCRIPTIONS[shape]} ${HARDNESS_DESCRIPTIONS[hardness]}`;

  return {
    shape,
    hardness,
    description: SHAPE_DESCRIPTIONS[shape],
    examples,
    whyItFits,
  };
}

export default function RacketFinder() {
  const [step, setStep] = useState(-1);
  const [answers, setAnswers] = useState<typeof QUESTIONS[number]["options"][number][]>([]);
  const [selected, setSelected] = useState<number | null>(null);
  const [transitioning, setTransitioning] = useState(false);

  const total = QUESTIONS.length;

  function handleSelect(idx: number) {
    if (transitioning) return;
    setSelected(idx);
    setTransitioning(true);
    setTimeout(() => {
      const opt = QUESTIONS[step].options[idx];
      setAnswers((prev) => [...prev, opt]);
      setSelected(null);
      setTransitioning(false);
      setStep((s) => s + 1);
    }, 280);
  }

  function restart() {
    setStep(-1);
    setAnswers([]);
    setSelected(null);
  }

  if (step === -1) {
    return (
      <div className="flex flex-col items-center text-center py-16 px-6">
        <span className="mb-5 inline-flex gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#00E676]">
          <span>Free</span>
          <span className="text-white/20">·</span>
          <span>2 minutes</span>
          <span className="text-white/20">·</span>
          <span>5 questions</span>
        </span>
        <h1
          className="font-heading font-bold text-white leading-[0.95] tracking-tight mb-6"
          style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)" }}
        >
          Find your padel
          <br />
          racket
        </h1>
        <p className="text-white/45 text-base sm:text-lg max-w-sm mb-10 leading-relaxed">
          Answer 5 questions about your level and style. Get a racket
          recommendation based on shape, balance, and hardness — not on who
          endorses what.
        </p>
        <button
          onClick={() => setStep(0)}
          className="rounded-full bg-[#00E676] px-10 py-4 text-base font-semibold text-[#050505] hover:bg-[#00ff84] transition-colors duration-200"
        >
          Start
        </button>
      </div>
    );
  }

  if (step >= total) {
    const result = getResult(answers);
    const recs = result.examples[0];
    return (
      <div className="flex flex-col items-center text-center py-12 px-6">
        <span className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#00E676]">
          Your match
        </span>
        <div className="mb-4 inline-flex flex-col items-center justify-center rounded-2xl border border-[#00E676]/30 bg-[#00E676]/[0.06] px-10 py-5">
          <span className="font-heading text-4xl sm:text-5xl font-bold text-[#00E676] capitalize">
            {result.shape}
          </span>
          <span className="text-sm uppercase tracking-[0.18em] text-white/50 mt-2">
            {result.hardness} EVA
          </span>
        </div>
        <p className="text-white/55 max-w-md text-base leading-relaxed mb-8">
          {result.whyItFits}
        </p>
        <div className="rounded-xl border border-white/[0.07] bg-white/[0.02] px-6 py-5 mb-8 text-left max-w-md w-full">
          <p className="text-xs uppercase tracking-[0.18em] text-[#00E676] mb-3 font-semibold">
            Recommended rackets in your budget
          </p>
          <ul className="space-y-2">
            {recs.rackets.map((r) => (
              <li key={r} className="flex items-start gap-3 text-sm text-white/75">
                <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-[#00E676]" />
                <span>{r}</span>
              </li>
            ))}
          </ul>
        </div>
        <p className="text-sm text-white/35 mb-4 max-w-xs">
          Try the racket before buying when possible. Most stores have demo
          programmes.
        </p>
        <button
          onClick={restart}
          className="text-sm text-white/30 hover:text-white/60 underline-offset-4 hover:underline transition-colors"
        >
          Retake the quiz
        </button>
      </div>
    );
  }

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
            onClick={() => handleSelect(i)}
            disabled={transitioning}
            className={`w-full text-left rounded-xl border px-5 py-4 text-sm font-medium transition-all duration-200 cursor-pointer ${
              selected === i
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
