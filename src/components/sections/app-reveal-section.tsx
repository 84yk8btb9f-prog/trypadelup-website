'use client';

import { ContainerScroll } from '@/components/ui/container-scroll-animation';
import TechniqueScore from '@/components/technique-score';

export default function AppRevealSection() {
  return (
    <section id="app-reveal" className="relative bg-[#0A0A0A] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <ContainerScroll
        titleComponent={
          <div className="mb-8">
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[0.95] mb-4"
              style={{ fontFamily: "'Clash Display', sans-serif" }}
            >
              See Your Technique
              <br />
              <span className="bg-gradient-to-r from-[#00E676] to-[#00E676]/60 bg-clip-text text-transparent">
                Through AI Eyes
              </span>
            </h2>
            <p className="text-lg text-white/40 max-w-lg mx-auto">
              Frame-by-frame analysis that a human coach would miss
            </p>
          </div>
        }
      >
        <div className="w-full h-full bg-gradient-to-br from-[#0d1a16] via-[#0A0A0A] to-[#0A0A0A] flex items-center justify-center p-4 md:p-10">
          <div className="w-full max-w-lg">
            <TechniqueScore />
          </div>
        </div>
      </ContainerScroll>
    </section>
  );
}
