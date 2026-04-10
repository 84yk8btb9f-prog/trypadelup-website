export default function MockupTraining() {
  return (
    <div className="w-full space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[9px] text-white/30">Week 3 Plan</p>
          <h3 className="text-sm font-bold text-white font-heading">Fix the Bandeja</h3>
        </div>
        <span className="rounded-full bg-[#00E676] px-2.5 py-1 text-[9px] font-bold text-[#050505]">
          Day 3
        </span>
      </div>

      {/* Weekly Progress */}
      <div className="rounded-xl bg-white/[0.04] border border-white/[0.07] p-3">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[9px] text-white/50">Weekly Progress</span>
          <span className="text-[9px] text-white/40">2/7 Sessions</span>
        </div>
        <div className="w-full h-1.5 rounded-full bg-white/[0.06]">
          <div className="h-full rounded-full bg-[#00E676]" style={{ width: "28.5%" }} />
        </div>
      </div>

      {/* Today's Drills */}
      <div className="space-y-2">
        <p className="text-[10px] text-white/40 font-medium">Today&apos;s Drills</p>

        {/* Drill 1 - completed */}
        <div className="flex items-center gap-3 rounded-xl bg-white/[0.04] border border-[#00E676]/20 p-3">
          <div className="w-5 h-5 rounded bg-[#00E676]/20 flex items-center justify-center flex-shrink-0">
            <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M2.5 6L5 8.5L9.5 3.5" stroke="#00E676" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[10px] font-semibold text-[#00E676]">Shadow Swings</p>
            <p className="text-[8px] text-white/30">5 mins &middot; Focus: Elbow Height</p>
          </div>
        </div>

        {/* Drill 2 */}
        <div className="flex items-center gap-3 rounded-xl bg-white/[0.04] border border-white/[0.07] p-3">
          <div className="w-5 h-5 rounded bg-white/[0.06] flex items-center justify-center flex-shrink-0">
            <div className="w-2 h-2 rounded-sm bg-white/20" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[10px] font-medium text-white/70">Basket Feed: Targets</p>
            <p className="text-[8px] text-white/30">15 mins &middot; 60 balls</p>
          </div>
        </div>

        {/* Drill 3 */}
        <div className="flex items-center gap-3 rounded-xl bg-white/[0.04] border border-white/[0.07] p-3">
          <div className="w-5 h-5 rounded bg-white/[0.06] flex items-center justify-center flex-shrink-0">
            <div className="w-2 h-2 rounded-sm bg-white/20" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[10px] font-medium text-white/70">Live Ball Defense</p>
            <p className="text-[8px] text-white/30">20 mins &middot; Tactics</p>
          </div>
        </div>
      </div>
    </div>
  );
}
