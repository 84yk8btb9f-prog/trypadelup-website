const drills = [
  { title: "Bandeja Shadow Drill", category: "Technique", duration: "15 min", status: "done" as const },
  { title: "Wall Volley Returns", category: "Volleys", duration: "12 min", status: "done" as const },
  { title: "Split Step Timing", category: "Footwork", duration: "10 min", status: "next" as const },
  { title: "Cross Court Placement", category: "Strategy", duration: "20 min", status: "locked" as const },
];

const streakDots = [
  [1, 1, 0, 1, 1, 1, 0],
  [1, 1, 1, 0, 1, 1, 1],
  [0, 1, 1, 1, 1, 0, 1],
  [1, 1, 1, 1, 1, 0, 0],
];

export default function MockupTraining() {
  return (
    <div className="w-full space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-xs font-semibold text-white font-heading">
          Today&apos;s Training
        </h3>
        <span className="text-[10px] text-white/40">2/4 completed</span>
      </div>

      {/* Drill cards */}
      <div className="space-y-2">
        {drills.map((drill) => (
          <div
            key={drill.title}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl border ${
              drill.status === "locked"
                ? "bg-white/[0.02] border-white/[0.04] opacity-50"
                : "bg-white/[0.04] border-white/[0.07]"
            }`}
          >
            {/* Status icon */}
            <div className="flex-shrink-0">
              {drill.status === "done" ? (
                <div className="w-5 h-5 rounded-full bg-[#00E676]/20 flex items-center justify-center">
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path d="M2.5 6L5 8.5L9.5 3.5" stroke="#00E676" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              ) : drill.status === "next" ? (
                <div className="w-5 h-5 rounded-full border-2 border-[#00E676] flex items-center justify-center">
                  <svg width="8" height="8" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path d="M4 2.5L9 6L4 9.5V2.5Z" fill="#00E676" />
                  </svg>
                </div>
              ) : (
                <div className="w-5 h-5 rounded-full bg-white/[0.06] flex items-center justify-center">
                  <svg width="8" height="8" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <rect x="4" y="2" width="1.5" height="5" rx="0.5" fill="rgba(255,255,255,0.25)" />
                    <circle cx="4.75" cy="9" r="0.75" fill="rgba(255,255,255,0.25)" />
                  </svg>
                </div>
              )}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <p className={`text-[10px] font-medium ${drill.status === "locked" ? "text-white/30" : "text-white/70"}`}>
                {drill.title}
              </p>
              <p className="text-[8px] text-white/25">{drill.category}</p>
            </div>

            {/* Duration */}
            <span className="text-[9px] text-white/30 flex-shrink-0">
              {drill.duration}
            </span>
          </div>
        ))}
      </div>

      {/* Streak */}
      <div className="pt-2 px-1">
        <div className="flex items-center gap-2 mb-2">
          <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M8 1C8 1 3 6 3 10C3 12.76 5.24 15 8 15C10.76 15 13 12.76 13 10C13 6 8 1 8 1Z" fill="#FF6B35" />
            <path d="M8 7C8 7 6 9.5 6 11C6 12.1 6.9 13 8 13C9.1 13 10 12.1 10 11C10 9.5 8 7 8 7Z" fill="#FFB74D" />
          </svg>
          <span className="text-[10px] text-white/60 font-medium">
            5 day streak
          </span>
        </div>
        <div className="grid grid-cols-7 gap-1">
          {streakDots.flat().map((active, i) => (
            <div
              key={i}
              className={`w-2.5 h-2.5 rounded-sm ${
                active ? "bg-[#00E676]/60" : "bg-white/[0.06]"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
