export default function MockupNutrition() {
  const progress = 1850 / 2400;

  return (
    <div className="w-full space-y-4">
      {/* Header */}
      <div className="text-center">
        <h3 className="text-xs font-semibold text-white font-heading">Today&apos;s Fuel</h3>
        <p className="text-[9px] text-white/30">1,850 / 2,400 kcal</p>
      </div>

      {/* Calorie ring */}
      <div className="flex justify-center">
        <div className="relative inline-flex items-center justify-center">
          <svg className="w-24 h-24" viewBox="0 0 96 96">
            <circle cx="48" cy="48" r="38" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="6" />
            <circle
              cx="48"
              cy="48"
              r="38"
              fill="none"
              stroke="#00E676"
              strokeWidth="6"
              strokeLinecap="round"
              strokeDasharray={`${progress * 239} 239`}
              transform="rotate(-90 48 48)"
            />
          </svg>
          <div className="absolute flex flex-col items-center">
            <span className="text-xl font-bold text-white font-heading leading-none">550</span>
            <span className="text-[8px] text-white/30">cal</span>
          </div>
        </div>
      </div>

      {/* Macros */}
      <div className="flex justify-center gap-4">
        {[
          { label: "Protein", value: "120g" },
          { label: "Carbs", value: "210g" },
          { label: "Fat", value: "45g" },
        ].map((m) => (
          <div key={m.label} className="text-center">
            <p className="text-[8px] text-white/30">{m.label}</p>
            <p className="text-sm font-bold text-[#00E676] font-heading">{m.value}</p>
          </div>
        ))}
      </div>

      {/* Recent meal */}
      <div className="flex items-center gap-3 rounded-xl bg-white/[0.04] border border-white/[0.07] p-3">
        <div className="w-7 h-7 rounded-lg bg-white/[0.06] flex items-center justify-center flex-shrink-0">
          <span className="text-[10px]">🥗</span>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[10px] font-medium text-white/70">Grilled Chicken Salad</p>
          <p className="text-[8px] text-white/30">450 kcal &middot; Logged 11m ago</p>
        </div>
      </div>

      {/* Camera button */}
      <div className="flex justify-center pt-1">
        <div className="w-10 h-10 rounded-full bg-[#00E676] flex items-center justify-center">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"
              stroke="#050505"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="12" cy="13" r="4" stroke="#050505" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}
