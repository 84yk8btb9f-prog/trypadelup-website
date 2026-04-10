export default function MockupChat() {
  return (
    <div className="w-full flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <div className="w-7 h-7 rounded-full bg-[#00E676]/20 flex items-center justify-center">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M8 2L10 6L14 6.5L11 9.5L12 14L8 11.5L4 14L5 9.5L2 6.5L6 6L8 2Z" fill="#00E676" />
          </svg>
        </div>
        <div>
          <span className="text-[11px] font-semibold text-white">Coach AI</span>
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00E676]" />
            <span className="text-[8px] text-white/30">Always online</span>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 space-y-3">
        {/* User message */}
        <div className="flex justify-end">
          <div className="max-w-[85%] px-3 py-2 rounded-2xl bg-[#00E676] text-[#0A0A0A] rounded-br-md">
            <p className="text-[10px] leading-relaxed font-medium">
              What&apos;s the best tactic against players who lob constantly?
            </p>
          </div>
        </div>

        {/* AI response */}
        <div className="flex justify-start">
          <div className="max-w-[90%] px-3 py-2.5 rounded-2xl bg-white/[0.05] border border-white/[0.08] text-white/70 rounded-bl-md">
            <p className="text-[10px] leading-relaxed mb-2">
              Against lobbers, patience is key. Here are 3 tactical adjustments:
            </p>
            <div className="space-y-1.5 text-[9px] text-white/55 leading-relaxed">
              <p>
                1. Let deep lobs bounce off the glass (besa) instead of forcing difficult smashes.
              </p>
              <p>
                2. Hit your bandejas slower and deeper into corners to prevent easy counters.
              </p>
              <p>
                3. Only face the net when you&apos;ve pushed them completely out of position.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Input bar */}
      <div className="mt-auto pt-3">
        <div className="flex items-center gap-2 px-3 py-2.5 rounded-2xl bg-white/[0.04] border border-white/[0.08]">
          <span className="text-[9px] text-white/25 flex-1">Ask anything...</span>
          <div className="w-6 h-6 rounded-full bg-[#00E676] flex items-center justify-center flex-shrink-0">
            <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M2 10L10 6L2 2V5L7 6L2 7V10Z" fill="#050505" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
