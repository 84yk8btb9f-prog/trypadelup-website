export default function PhoneFrame({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative w-full ${className}`}>
      {/* Glow behind phone */}
      <div className="pointer-events-none absolute inset-0 -m-4 sm:-m-8 rounded-full bg-[radial-gradient(circle,rgba(0,230,118,0.08)_0%,transparent_70%)] blur-2xl" />

      <div className="relative rounded-[3rem] border border-white/15 bg-gradient-to-b from-[#1c1c1e] to-[#111] p-[6px] shadow-2xl">
        {/* Reflective highlight */}
        <div className="pointer-events-none absolute inset-0 rounded-[3rem] bg-gradient-to-br from-white/[0.08] via-transparent to-transparent" />

        {/* Side buttons */}
        <div className="absolute -left-[2px] top-[100px] h-8 w-[3px] rounded-l-sm bg-[#2a2a2a]" />
        <div className="absolute -left-[2px] top-[140px] h-12 w-[3px] rounded-l-sm bg-[#2a2a2a]" />
        <div className="absolute -left-[2px] top-[160px] h-12 w-[3px] rounded-l-sm bg-[#2a2a2a]" />
        <div className="absolute -right-[2px] top-[120px] h-16 w-[3px] rounded-r-sm bg-[#2a2a2a]" />

        {/* Dynamic Island */}
        <div className="absolute left-1/2 top-[14px] z-20 flex -translate-x-1/2 items-center justify-center">
          <div className="h-[22px] w-[90px] rounded-full bg-black shadow-inner" />
        </div>

        {/* Screen */}
        <div className="relative flex aspect-[9/19.5] flex-col overflow-hidden rounded-[2.6rem] bg-[#050505] p-5 pt-12">
          {children}
        </div>
      </div>

      {/* Home indicator */}
      <div className="absolute bottom-[10px] left-1/2 z-10 h-[4px] w-[100px] -translate-x-1/2 rounded-full bg-white/20" />
    </div>
  );
}
