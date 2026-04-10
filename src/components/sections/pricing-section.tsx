const APP_STORE_URL = "https://apps.apple.com/app/padelup/id0000000000";

export default function PricingSection() {
  return (
    <section id="pricing" className="py-16 px-6 sm:px-10 bg-[#0A0A0A]">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white font-heading mb-12 text-center opacity-0 animate-[fadeInUp_0.6s_ease-out_0.1s_forwards]">
          Simple pricing
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          {/* Monthly */}
          <div className="flex flex-col items-center gap-4 p-8 rounded-2xl border border-white/[0.07] opacity-0 animate-[fadeInUp_0.6s_ease-out_0.15s_forwards]">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-white font-heading">
                Monthly
              </h3>
              <p className="text-3xl font-bold text-white font-heading mt-1">
                $9.99
                <span className="text-base font-normal text-white/40">
                  /mo
                </span>
              </p>
            </div>
            <a
              href={APP_STORE_URL}
              className="w-full py-3 rounded-full text-sm font-semibold text-center text-white border border-white/[0.12] hover:bg-white/[0.05] transition-colors"
            >
              Start free trial
            </a>
          </div>

          {/* Yearly */}
          <div className="relative flex flex-col items-center gap-4 p-8 rounded-2xl border border-[#00E676]/20 bg-[#00E676]/[0.03] opacity-0 animate-[fadeInUp_0.6s_ease-out_0.2s_forwards]">
            <span className="absolute -top-3 right-6 px-3 py-0.5 rounded-full text-[11px] font-bold bg-[#00E676] text-[#0A0A0A]">
              save 58%
            </span>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-white font-heading">
                Yearly
              </h3>
              <p className="text-3xl font-bold text-white font-heading mt-1">
                $4.17
                <span className="text-base font-normal text-white/40">
                  /mo
                </span>
              </p>
              <p className="text-xs text-white/30 mt-1">billed $49.99/yr</p>
            </div>
            <a
              href={APP_STORE_URL}
              className="w-full py-3 rounded-full text-sm font-semibold text-center bg-[#00E676] text-[#0A0A0A] hover:brightness-110 transition-all"
            >
              Start free trial
            </a>
          </div>
        </div>

        <p className="text-center text-sm text-white/20 mt-8">
          Unlimited analysis / AI training / Nutrition / Courts / AI coach
        </p>

        <p className="text-center text-sm text-white/30 mt-3">
          3-day free trial. Cancel anytime.
        </p>
      </div>
    </section>
  );
}
