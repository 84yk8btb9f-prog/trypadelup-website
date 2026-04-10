'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MotionDiv } from '@/components/ui/motion-wrapper';

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
  enter: { opacity: 0, y: 20, scale: 0.98 },
  center: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -20, scale: 0.98 },
};

function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative mx-auto w-[280px] sm:w-[320px]">
      {/* Phone outer frame */}
      <div className="rounded-[40px] border-2 border-white/[0.12] bg-[#111111] p-3 shadow-[0_0_40px_rgba(0,230,118,0.04)]">
        {/* Notch */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#111111] rounded-b-2xl z-20 flex items-center justify-center">
          <div className="w-12 h-4 rounded-full bg-black/80 border border-white/[0.06]" />
        </div>

        {/* Screen */}
        <div className="rounded-[28px] bg-[#0A0A0A] overflow-hidden min-h-[440px] sm:min-h-[480px] relative flex flex-col">
          {/* Status bar spacer */}
          <div className="h-10 shrink-0" />

          {/* Content */}
          <div className="flex-1 flex flex-col px-5 pb-5">{children}</div>
        </div>
      </div>

      {/* Home indicator */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-28 h-1 rounded-full bg-white/20" />
    </div>
  );
}

function SelectStep({ onSelect }: { onSelect: (shot: string) => void }) {
  return (
    <motion.div
      key="select"
      variants={stepVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.35, ease: [0.25, 0.4, 0.25, 1] }}
      className="flex-1 flex flex-col"
    >
      <p className="text-xs text-white/50 uppercase tracking-widest mb-1">
        Step 1
      </p>
      <h4 className="text-lg font-semibold text-white mb-6 font-heading">
        Select a shot type
      </h4>
      <div className="flex flex-col gap-3">
        {shotTypes.map((shot) => (
          <button
            key={shot.name}
            onClick={() => onSelect(shot.name)}
            className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.04] border border-white/[0.08] hover:border-[#00E676]/30 hover:bg-[#00E676]/[0.04] transition-all duration-200 text-left group cursor-pointer"
          >
            <span className="text-2xl">{shot.emoji}</span>
            <span className="text-base font-medium text-white group-hover:text-[#00E676] transition-colors">
              {shot.name}
            </span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-white/20 ml-auto group-hover:text-[#00E676]/60 transition-colors"
              aria-hidden="true"
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
      transition={{ duration: 0.35, ease: [0.25, 0.4, 0.25, 1] }}
      className="flex-1 flex flex-col items-center justify-center"
    >
      <p className="text-xs text-white/50 uppercase tracking-widest mb-4">
        Step 2
      </p>
      {/* Spinner */}
      <div className="relative w-24 h-24 mb-6">
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
            className="w-3 h-3 rounded-full bg-[#00E676]"
            animate={{ scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ repeat: Infinity, duration: 1.2 }}
          />
        </div>
      </div>
      <p className="text-lg font-semibold text-white mb-1 font-heading">
        Analyzing {shotName}...
      </p>
      <p className="text-sm text-white/40">AI is reviewing your technique</p>
    </motion.div>
  );
}

function ResultStep({
  shotName,
  onRetry,
}: {
  shotName: string;
  onRetry: () => void;
}) {
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
      transition={{ duration: 0.35, ease: [0.25, 0.4, 0.25, 1] }}
      className="flex-1 flex flex-col"
    >
      <p className="text-xs text-white/50 uppercase tracking-widest mb-4">
        Result
      </p>

      {/* Score circle */}
      <div className="flex justify-center mb-5">
        <div className="relative inline-flex items-center justify-center">
          <svg className="w-20 h-20" viewBox="0 0 96 96">
            <circle
              cx="48"
              cy="48"
              r="38"
              fill="none"
              stroke="rgba(255,255,255,0.06)"
              strokeWidth="4"
            />
            <motion.circle
              cx="48"
              cy="48"
              r="38"
              fill="none"
              stroke="#00E676"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray={`${dashArray} ${circumference}`}
              transform="rotate(-90 48 48)"
              initial={{ strokeDasharray: `0 ${circumference}` }}
              animate={{
                strokeDasharray: `${dashArray} ${circumference}`,
              }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            />
          </svg>
          <motion.span
            className="absolute text-2xl font-bold text-white font-heading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {result.score}
          </motion.span>
        </div>
      </div>

      {/* Bars */}
      <div className="space-y-2.5 mb-5">
        {result.bars.map((bar, i) => (
          <div key={bar.label}>
            <div className="flex justify-between text-xs mb-0.5">
              <span className="text-white/50">{bar.label}</span>
              <span className="text-[#00E676]">{bar.pct}%</span>
            </div>
            <div className="w-full h-1.5 rounded-full bg-white/[0.06]">
              <motion.div
                className="h-full rounded-full bg-[#00E676]"
                initial={{ width: 0 }}
                animate={{ width: `${bar.pct}%` }}
                transition={{
                  duration: 0.6,
                  delay: 0.2 + i * 0.1,
                  ease: 'easeOut',
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Tips */}
      <div className="space-y-2 mb-5">
        {result.tips.map((tip) => (
          <div
            key={tip}
            className="flex items-start gap-2 text-xs text-white/50"
          >
            <span className="text-[#00E676] mt-0.5 shrink-0">&#x2192;</span>
            <span>{tip}</span>
          </div>
        ))}
      </div>

      <button
        onClick={onRetry}
        className="mt-auto w-full py-3 rounded-2xl bg-[#00E676]/10 border border-[#00E676]/20 text-[#00E676] text-sm font-semibold hover:bg-[#00E676]/15 transition-colors cursor-pointer"
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
    <section className="py-32 px-4 bg-[#0A0A0A] relative overflow-hidden">
      {/* Gradient divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00E676]/10 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <MotionDiv className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] mb-4 text-[#00E676]">
            Interactive Demo
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 font-heading">
            See it in action
          </h2>
          <p className="text-lg text-white/50 max-w-md mx-auto">
            Try the AI analysis flow yourself. Select a shot and watch the
            breakdown.
          </p>
        </MotionDiv>

        <MotionDiv delay={0.2} className="flex justify-center">
          <PhoneFrame>
            <AnimatePresence mode="wait">
              {step === 'select' && (
                <SelectStep onSelect={handleSelect} />
              )}
              {step === 'analyzing' && (
                <AnalyzingStep shotName={selectedShot} />
              )}
              {step === 'result' && (
                <ResultStep
                  shotName={selectedShot}
                  onRetry={handleRetry}
                />
              )}
            </AnimatePresence>
          </PhoneFrame>
        </MotionDiv>
      </div>
    </section>
  );
}
