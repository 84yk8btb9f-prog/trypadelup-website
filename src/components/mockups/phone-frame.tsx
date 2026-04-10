export default function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-[260px] sm:w-[280px] lg:w-[300px]">
      <div className="rounded-[2.5rem] border border-white/20 bg-[#111] p-2.5 shadow-2xl">
        {/* Dynamic Island */}
        <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-20 h-5 bg-[#111] rounded-b-xl z-20 flex items-center justify-center">
          <div className="w-10 h-3.5 rounded-full bg-black/80" />
        </div>
        {/* Screen */}
        <div className="rounded-[2rem] bg-[#0A0A0A] overflow-hidden aspect-[9/19.5] relative flex flex-col p-5 pt-10">
          {children}
        </div>
      </div>
      {/* Home bar */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 rounded-full bg-white/15" />
    </div>
  );
}
