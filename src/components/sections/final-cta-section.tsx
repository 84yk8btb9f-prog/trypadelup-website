'use client';

import { motion } from 'framer-motion';
import { MotionDiv } from '@/components/ui/motion-wrapper';

const APP_STORE_URL = 'https://apps.apple.com/app/padelup/id0000000000';

export default function FinalCta() {
  return (
    <section className="relative py-32 sm:py-40 px-4 text-center overflow-hidden bg-[#0A0A0A] noise-bg">
      {/* Gradient orbs */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(0,230,118,0.06)_0%,transparent_70%)]" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(0,230,118,0.03)_0%,transparent_70%)]" />

      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center gap-8">
        <MotionDiv className="flex flex-col items-center gap-8">
          <h2
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[0.95]"
            style={{ fontFamily: "'Clash Display', sans-serif" }}
          >
            Ready to play
            <br />
            <span className="bg-gradient-to-r from-[#00E676] to-[#00E676]/60 bg-clip-text text-transparent">
              smarter?
            </span>
          </h2>

          <p className="text-lg text-white/40 max-w-lg">
            Start your free trial today — cancel anytime.
          </p>

          <motion.a
            href={APP_STORE_URL}
            className="flex items-center gap-3 px-10 py-4 rounded-full font-semibold text-lg bg-[#00E676] text-[#0A0A0A] shadow-[0_0_30px_rgba(0,230,118,0.15)] hover:shadow-[0_0_60px_rgba(0,230,118,0.3)] transition-shadow"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            animate={{
              boxShadow: [
                '0 0 30px rgba(0,230,118,0.15)',
                '0 0 50px rgba(0,230,118,0.25)',
                '0 0 30px rgba(0,230,118,0.15)',
              ],
            }}
            transition={{
              boxShadow: { duration: 2.5, repeat: Infinity, ease: 'easeInOut' },
            }}
          >
            Start Free Trial
          </motion.a>

          <p className="text-sm text-white/30">
            Available on iOS &middot; Free to download &middot; 3-day free trial
          </p>
        </MotionDiv>
      </div>
    </section>
  );
}
