const techniques = [
  { label: "Grip", score: 8 },
  { label: "Stance", score: 6 },
  { label: "Swing Path", score: 7 },
  { label: "Racket Angle", score: 9 },
  { label: "Body Position", score: 8 },
];

const tips = [
  "Keep your wrist firm during the bandeja follow-through",
  "Lower your center of gravity before split-stepping",
  "Open the racket face slightly earlier on volleys",
];

export default function MockupAnalysis() {
  return (
    <div className="w-full space-y-5">
      {/* Score ring */}
      <div className="flex justify-center">
        <div className="relative inline-flex items-center justify-center">
          <svg className="w-24 h-24" viewBox="0 0 96 96">
            <circle
              cx="48"
              cy="48"
              r="38"
              fill="none"
              stroke="rgba(255,255,255,0.06)"
              strokeWidth="4"
            />
            <circle
              cx="48"
              cy="48"
              r="38"
              fill="none"
              stroke="#00E676"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray={`${(7.5 / 10) * 239} 239`}
              transform="rotate(-90 48 48)"
            />
          </svg>
          <div className="absolute flex items-baseline">
            <span className="text-2xl font-bold text-white font-heading">
              7.5
            </span>
            <span className="text-[10px] text-white/40 ml-0.5">/10</span>
          </div>
        </div>
      </div>

      {/* Technique bars */}
      <div className="space-y-2.5">
        {techniques.map((t) => (
          <div key={t.label}>
            <div className="flex justify-between text-[10px] mb-1">
              <span className="text-white/50">{t.label}</span>
              <span className="text-white/40">
                {t.score}/10
              </span>
            </div>
            <div className="w-full h-1.5 rounded-full bg-white/[0.06]">
              <div
                className="h-full rounded-full bg-[#00E676]"
                style={{ width: `${t.score * 10}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Tips */}
      <div className="space-y-2 pt-2">
        <p className="text-[10px] text-white/30 font-medium">Tips</p>
        {tips.map((tip) => (
          <div key={tip} className="flex items-start gap-2">
            <div className="w-3.5 h-3.5 rounded-full bg-[#00E676]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg
                width="8"
                height="8"
                viewBox="0 0 12 12"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M2.5 6L5 8.5L9.5 3.5"
                  stroke="#00E676"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p className="text-[9px] text-white/45 leading-snug">{tip}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
