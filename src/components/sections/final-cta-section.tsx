const APP_STORE_URL = "https://apps.apple.com/app/padelup/id0000000000";

export default function FinalCta() {
  return (
    <section className="relative py-32 px-4 text-center overflow-hidden bg-[#0A0A0A] noise-bg">
      {/* Gradient orbs */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(0,245,212,0.08)_0%,transparent_70%)]" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[400px] rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(255,77,148,0.06)_0%,transparent_70%)]" />

      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center gap-6">
        <h2
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
          style={{ fontFamily: "'Clash Display', sans-serif" }}
        >
          Ready to level up
          <br />
          <span className="gradient-text-ai">your padel game?</span>
        </h2>
        <p className="text-lg text-white/60 max-w-lg">
          Join thousands of padel players using AI to improve faster.
        </p>
        <a
          href={APP_STORE_URL}
          className="flex items-center gap-3 px-10 py-4 rounded-full font-semibold text-lg bg-teal text-[#0A0A0A] animate-pulse-glow hover:scale-[1.02] transition-transform mt-4"
        >
          <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
          </svg>
          Download on the App Store
        </a>
        <p className="text-sm text-white/40">
          Available on iOS &middot; Free to download &middot; 3-day free trial
        </p>
      </div>
    </section>
  );
}
