const macros = [
  { label: "Protein", current: 82, target: 150, color: "#00E676" },
  { label: "Carbs", current: 145, target: 250, color: "#4FC3F7" },
  { label: "Fat", current: 38, target: 70, color: "#FFB74D" },
];

const meals = [
  { name: "Eggs & Avocado Toast", time: "Breakfast", kcal: 420 },
  { name: "Grilled Chicken Salad", time: "Lunch", kcal: 580 },
  { name: "Protein Shake", time: "Snack", kcal: 180 },
];

export default function MockupNutrition() {
  const consumed = 1450;
  const target = 2200;
  const progress = consumed / target;

  return (
    <div className="w-full space-y-4">
      {/* Calorie ring */}
      <div className="flex justify-center">
        <div className="relative inline-flex items-center justify-center">
          <svg className="w-20 h-20" viewBox="0 0 96 96">
            <circle
              cx="48"
              cy="48"
              r="38"
              fill="none"
              stroke="rgba(255,255,255,0.06)"
              strokeWidth="5"
            />
            <circle
              cx="48"
              cy="48"
              r="38"
              fill="none"
              stroke="#00E676"
              strokeWidth="5"
              strokeLinecap="round"
              strokeDasharray={`${progress * 239} 239`}
              transform="rotate(-90 48 48)"
            />
          </svg>
          <div className="absolute flex flex-col items-center">
            <span className="text-sm font-bold text-white font-heading leading-none">
              1,450
            </span>
            <span className="text-[8px] text-white/30">/ 2,200 kcal</span>
          </div>
        </div>
      </div>

      {/* Macro bars */}
      <div className="space-y-2">
        {macros.map((m) => (
          <div key={m.label}>
            <div className="flex justify-between text-[10px] mb-0.5">
              <span className="text-white/50">{m.label}</span>
              <span className="text-white/35">
                {m.current}/{m.target}g
              </span>
            </div>
            <div className="w-full h-1.5 rounded-full bg-white/[0.06]">
              <div
                className="h-full rounded-full"
                style={{
                  width: `${(m.current / m.target) * 100}%`,
                  backgroundColor: m.color,
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Hydration */}
      <div className="pt-1">
        <p className="text-[10px] text-white/30 mb-1.5">Hydration</p>
        <div className="flex gap-1.5">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full ${
                i < 5 ? "bg-[#4FC3F7]" : "bg-white/[0.08]"
              }`}
            />
          ))}
          <span className="text-[9px] text-white/30 ml-1">5/8</span>
        </div>
      </div>

      {/* Meals */}
      <div className="space-y-2 pt-1">
        <p className="text-[10px] text-white/30">Today&apos;s meals</p>
        {meals.map((meal) => (
          <div
            key={meal.name}
            className="flex items-center justify-between px-3 py-2 rounded-xl bg-white/[0.04] border border-white/[0.06]"
          >
            <div>
              <p className="text-[10px] text-white/70 font-medium">
                {meal.name}
              </p>
              <p className="text-[8px] text-white/30">{meal.time}</p>
            </div>
            <span className="text-[9px] text-white/40">{meal.kcal} kcal</span>
          </div>
        ))}
      </div>
    </div>
  );
}
