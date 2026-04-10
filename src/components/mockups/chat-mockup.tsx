const messages = [
  {
    role: "user" as const,
    text: "How do I improve my bandeja?",
  },
  {
    role: "ai" as const,
    text: "Focus on three key areas: keep your elbow high, open the racket face at contact, and step forward with your front foot. This gives you more control and depth on the shot.",
  },
  {
    role: "user" as const,
    text: "What about the grip?",
  },
];

export default function MockupChat() {
  return (
    <div className="w-full flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <div className="w-6 h-6 rounded-full bg-[#00E676]/20 flex items-center justify-center">
          <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M8 2L10 6L14 6.5L11 9.5L12 14L8 11.5L4 14L5 9.5L2 6.5L6 6L8 2Z" fill="#00E676" />
          </svg>
        </div>
        <span className="text-[10px] text-white/60 font-medium">AI Coach</span>
      </div>

      {/* Messages */}
      <div className="flex-1 space-y-3">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[85%] px-3 py-2 rounded-2xl ${
                msg.role === "user"
                  ? "bg-[#00E676] text-[#0A0A0A] rounded-br-md"
                  : "bg-white/[0.05] border border-white/[0.08] text-white/70 rounded-bl-md"
              }`}
            >
              <p className="text-[10px] leading-relaxed">{msg.text}</p>
            </div>
          </div>
        ))}

        {/* Typing indicator */}
        <div className="flex justify-start">
          <div className="bg-white/[0.05] border border-white/[0.08] rounded-2xl rounded-bl-md px-4 py-2.5 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-white/30 animate-[typing_1.4s_ease-in-out_infinite]" />
            <span className="w-1.5 h-1.5 rounded-full bg-white/30 animate-[typing_1.4s_ease-in-out_0.2s_infinite]" />
            <span className="w-1.5 h-1.5 rounded-full bg-white/30 animate-[typing_1.4s_ease-in-out_0.4s_infinite]" />
          </div>
        </div>
      </div>

      {/* Input bar */}
      <div className="mt-auto pt-3">
        <div className="flex items-center gap-2 px-3 py-2.5 rounded-2xl bg-white/[0.04] border border-white/[0.08]">
          <span className="text-[9px] text-white/25 flex-1">
            Ask your AI coach...
          </span>
          <div className="w-5 h-5 rounded-full bg-[#00E676]/20 flex items-center justify-center flex-shrink-0">
            <svg width="8" height="8" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M2 10L10 6L2 2V5L7 6L2 7V10Z" fill="#00E676" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
