export default function MockupAnalysisHistory() {
  const shots = [
    { name: "Bandeja", score: 7.2, date: "Today, 14:30", tag: "Fix Elbow", tagColor: "green" },
    { name: "Vibora", score: 5.8, date: "Yesterday", tag: "Low Score", tagColor: "yellow" },
  ];

  return (
    <div className="w-full space-y-4">
      {/* Header */}
      <h3 className="text-xs font-semibold text-white font-heading">Shot History</h3>

      {/* Shot list */}
      <div className="space-y-2.5">
        {shots.map((shot) => (
          <div
            key={shot.name}
            className="flex items-center gap-3 rounded-xl bg-white/[0.04] border border-white/[0.07] p-3"
          >
            {/* Play icon */}
            <div className="w-8 h-8 rounded-lg bg-white/[0.06] flex items-center justify-center flex-shrink-0">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M3 1.5L10 6L3 10.5V1.5Z" fill="white" fillOpacity="0.5" />
              </svg>
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <p className="text-[11px] font-medium text-white">{shot.name}</p>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-[8px] text-white/30">{shot.date}</span>
                <span
                  className={`text-[7px] px-1.5 py-0.5 rounded-full font-medium ${
                    shot.tagColor === "green"
                      ? "bg-[#00E676]/15 text-[#00E676]"
                      : "bg-yellow-500/15 text-yellow-400"
                  }`}
                >
                  {shot.tag}
                </span>
              </div>
            </div>

            {/* Score */}
            <span className="text-lg font-bold text-[#00E676] font-heading">{shot.score}</span>
          </div>
        ))}
      </div>

      {/* Upload button */}
      <button className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#00E676] py-3 text-[11px] font-semibold text-[#050505]">
        <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M8 3V13M3 8H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
        Upload New Clip
      </button>
    </div>
  );
}
