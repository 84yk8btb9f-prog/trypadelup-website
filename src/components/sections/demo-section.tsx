'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Step = 'select' | 'analyzing' | 'result';

const shotTypes = [
  { name: 'Bandeja', emoji: '🎾' },
  { name: 'Smash', emoji: '💥' },
  { name: 'Serve', emoji: '🏓' },
];

const results: Record<
  string,
  { score: number; bars: { label: string; pct: number }[]; tips: string[] }
> = {
  Bandeja: {
    score: 7.5,
    bars: [
      { label: 'Grip', pct: 80 },
      { label: 'Stance', pct: 60 },
      { label: 'Swing', pct: 70 },
      { label: 'Position', pct: 90 },
    ],
    tips: [
      'Open your racket face more at contact',
      'Keep your elbow higher through the swing',
      'Step into the ball with your front foot',
    ],
  },
  Smash: {
    score: 8.2,
    bars: [
      { label: 'Grip', pct: 90 },
      { label: 'Stance', pct: 70 },
      { label: 'Swing', pct: 80 },
      { label: 'Position', pct: 80 },
    ],
    tips: [
      'Start your swing from behind your head',
      'Snap your wrist at the point of contact',
      'Follow through across your body',
    ],
  },
  Serve: {
    score: 6.8,
    bars: [
      { label: 'Grip', pct: 70 },
      { label: 'Stance', pct: 50 },
      { label: 'Swing', pct: 70 },
      { label: 'Position', pct: 80 },
    ],
    tips: [
      'Toss the ball slightly in front',
      'Keep a continental grip',
      'Pronate your forearm on contact',
    ],
  },
};

const stepVariants = {
  enter: { opacity: 0, y: 16, scale: 0.98 },
  center: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -16, scale: 0.98 },
};

function SelectStep({ onSelect }: { onSelect: (shot: string) => void }) {
  return (
    <motion.div
      key="select"
      variants={stepVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
      className="flex-1 flex flex-col"
    >
      <p className="text-xs text-white/40 mb-1">step 1</p>
      <h4 className="text-base font-semibold text-white mb-5 font-heading">
        Pick a shot
      </h4>
      <div className="flex flex-col gap-2.5">
        {shotTypes.map((shot) => (
          <button
            key={shot.name}
            onClick={() => onSelect(shot.name)}
            className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.04] border border-white/[0.07] hover:border-[#00E676]/25 transition-all text-left group cursor-pointer"
          >
            <span className="text-xl">{shot.emoji}</span>
            <span className="text-sm font-medium text-white group-hover:text-[#00E676] transition-colors">
              {shot.name}
            </span>
            <svg
              width="14" height="14" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="2"
              className="text-white/15 ml-auto" aria-hidden="true"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        ))}
      </div>
    </motion.div>
  );
}

function AnalyzingStep({ shotName }: { shotName: string }) {
  return (
    <motion.div
      key="analyzing"
      variants={stepVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
      className="flex-1 flex flex-col items-center justify-center"
    >
      <div className="relative w-20 h-20 mb-5">
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-white/[0.06]"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1.2, ease: 'linear' }}
        />
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#00E676]"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="w-2.5 h-2.5 rounded-full bg-[#00E676]"
            animate={{ scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ repeat: Infinity, duration: 1.2 }}
          />
        </div>
      </div>
      <p className="text-base font-semibold text-white mb-1 font-heading">
        Analyzing {shotName}
      </p>
      <p className="text-xs text-white/35">Reviewing technique</p>
    </motion.div>
  );
}

function ResultStep({ shotName, onRetry }: { shotName: string; onRetry: () => void }) {
  const result = results[shotName];
  const circumference = 2 * Math.PI * 38;
  const dashArray = (result.score / 10) * circumference;

  return (
    <motion.div
      key="result"
      variants={stepVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
      className="flex-1 flex flex-col"
    >
      <p className="text-xs text-white/40 mb-3">result</p>

      <div className="flex justify-center mb-4">
        <div className="relative inline-flex items-center justify-center">
          <svg className="w-16 h-16" viewBox="0 0 96 96">
            <circle cx="48" cy="48" r="38" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="3.5" />
            <motion.circle
              cx="48" cy="48" r="38" fill="none"
              stroke="#00E676" strokeWidth="3.5" strokeLinecap="round"
              strokeDasharray={`${dashArray} ${circumference}`}
              transform="rotate(-90 48 48)"
              initial={{ strokeDasharray: `0 ${circumference}` }}
              animate={{ strokeDasharray: `${dashArray} ${circumference}` }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            />
          </svg>
          <motion.span
            className="absolute text-xl font-bold text-white font-heading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {result.score}
          </motion.span>
        </div>
      </div>

      <div className="space-y-2 mb-4">
        {result.bars.map((bar, i) => (
          <div key={bar.label}>
            <div className="flex justify-between text-[10px] mb-0.5">
              <span className="text-white/40">{bar.label}</span>
              <span className="text-[#00E676]/80">{bar.pct}%</span>
            </div>
            <div className="w-full h-1 rounded-full bg-white/[0.06]">
              <motion.div
                className="h-full rounded-full bg-[#00E676]"
                initial={{ width: 0 }}
                animate={{ width: `${bar.pct}%` }}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.08, ease: 'easeOut' }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-1.5 mb-4">
        {result.tips.map((tip) => (
          <div key={tip} className="flex items-start gap-1.5 text-[11px] text-white/40">
            <span className="text-[#00E676] mt-px shrink-0">&#x2192;</span>
            <span>{tip}</span>
          </div>
        ))}
      </div>

      <button
        onClick={onRetry}
        className="mt-auto w-full py-2.5 rounded-xl bg-[#00E676]/10 border border-[#00E676]/15 text-[#00E676] text-xs font-semibold hover:bg-[#00E676]/15 transition-colors cursor-pointer"
      >
        Try Again
      </button>
    </motion.div>
  );
}

export default function DemoSection() {
  const [step, setStep] = useState<Step>('select');
  const [selectedShot, setSelectedShot] = useState('Bandeja');

  const handleSelect = useCallback((shot: string) => {
    setSelectedShot(shot);
    setStep('analyzing');
    setTimeout(() => setStep('result'), 2000);
  }, []);

  const handleRetry = useCallback(() => {
    setStep('select');
  }, []);

  return (
    <section className="pt-16 pb-24 px-6 sm:px-10 bg-[#0A0A0A] relative overflow-hidden">
      <div className="max-w-5xl mx-auto flex justify-center">
        <div className="flex flex-col items-center">
          <p className="text-xs text-white/25 mb-6 tracking-wide">try it</p>

          {/* Phone frame - clean and tight */}
          <div className="relative w-[260px] sm:w-[290px]">
            <div className="rounded-[36px] border border-white/[0.08] bg-[#111] p-2.5">
              {/* Notch */}
              <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-20 h-5 bg-[#111] rounded-b-xl z-20 flex items-center justify-center">
                <div className="w-10 h-3.5 rounded-full bg-black/80" />
              </div>
              {/* Screen */}
              <div className="rounded-[26px] bg-[#0A0A0A] overflow-hidden min-h-[420px] sm:min-h-[460px] relative flex flex-col">
                <div className="h-9 shrink-0" />
                <div className="flex-1 flex flex-col px-4 pb-4">
                  <AnimatePresence mode="wait">
                    {step === 'select' && <SelectStep onSelect={handleSelect} />}
                    {step === 'analyzing' && <AnalyzingStep shotName={selectedShot} />}
                    {step === 'result' && <ResultStep shotName={selectedShot} onRetry={handleRetry} />}
                  </AnimatePresence>
                </div>
              </div>
            </div>
            {/* Home bar */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 rounded-full bg-white/15" />
          </div>
        </div>
      </div>
    </section>
  );
}
