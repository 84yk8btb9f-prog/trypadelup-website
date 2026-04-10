export default function MockupAnalysis() {
  return (
    <div className="w-full space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M10 12L6 8L10 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="text-xs font-semibold text-white font-heading">Bandeja Analysis</span>
        </div>
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <circle cx="4" cy="8" r="1" fill="white" fillOpacity="0.4" />
          <circle cx="8" cy="8" r="1" fill="white" fillOpacity="0.4" />
          <circle cx="12" cy="8" r="1" fill="white" fillOpacity="0.4" />
        </svg>
      </div>

      {/* Stick figure player */}
      <div className="relative flex justify-center py-2">
        <svg width="120" height="140" viewBox="0 0 120 140" fill="none" aria-hidden="true">
          {/* Body */}
          <circle cx="60" cy="20" r="8" stroke="#00E676" strokeWidth="2" />
          <line x1="60" y1="28" x2="60" y2="72" stroke="#00E676" strokeWidth="2" />
          {/* Left arm - raised with racket */}
          <line x1="60" y1="42" x2="38" y2="28" stroke="#00E676" strokeWidth="2" />
          <line x1="38" y1="28" x2="30" y2="14" stroke="#00E676" strokeWidth="2" />
          {/* Right arm */}
          <line x1="60" y1="42" x2="82" y2="55" stroke="#00E676" strokeWidth="2" />
          {/* Left leg */}
          <line x1="60" y1="72" x2="42" y2="105" stroke="#00E676" strokeWidth="2" />
          <line x1="42" y1="105" x2="35" y2="130" stroke="#00E676" strokeWidth="2" />
          {/* Right leg */}
          <line x1="60" y1="72" x2="78" y2="105" stroke="#00E676" strokeWidth="2" />
          <line x1="78" y1="105" x2="85" y2="130" stroke="#00E676" strokeWidth="2" />
          {/* Joint dots */}
          <circle cx="38" cy="28" r="3" fill="#00E676" />
          <circle cx="82" cy="55" r="3" fill="#00E676" />
          <circle cx="42" cy="105" r="3" fill="#00E676" />
          <circle cx="78" cy="105" r="3" fill="#00E676" />
        </svg>

        {/* Elbow annotation */}
        <div className="absolute right-2 top-6 flex items-center gap-1.5">
          <div className="rounded-md bg-red-500/20 border border-red-500/40 px-2 py-0.5">
            <span className="text-[8px] font-medium text-red-400">Elbow too low</span>
          </div>
        </div>
      </div>

      {/* Technique Score */}
      <div className="rounded-xl bg-white/[0.04] border border-white/[0.08] p-3">
        <div className="flex items-center justify-between mb-3">
          <div>
            <p className="text-[10px] font-semibold text-white">Technique Score</p>
            <p className="text-[8px] text-white/30">Based on 5 dimensions</p>
          </div>
          <div className="flex items-baseline">
            <span className="text-2xl font-bold text-[#00E676] font-heading">7.2</span>
            <span className="text-[10px] text-white/30">/10</span>
          </div>
        </div>

        {/* Dimension bars */}
        <div className="space-y-2">
          <div>
            <div className="flex justify-between text-[8px] mb-0.5">
              <span className="text-white/40">Position</span>
            </div>
            <div className="w-full h-1.5 rounded-full bg-white/[0.06]">
              <div className="h-full rounded-full bg-[#00E676]" style={{ width: "75%" }} />
            </div>
          </div>
          <div>
            <div className="flex justify-between text-[8px] mb-0.5">
              <span className="text-white/40">Swing</span>
            </div>
            <div className="w-full h-1.5 rounded-full bg-white/[0.06]">
              <div className="h-full rounded-full bg-[#00E676]" style={{ width: "65%" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
