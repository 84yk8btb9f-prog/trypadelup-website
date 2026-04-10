'use client';

import { Star } from 'lucide-react';
import { MotionDiv } from '@/components/ui/motion-wrapper';

const testimonials = [
  {
    quote: 'Fixed my bandeja in 2 weeks. Score went from 4 to 8.',
    name: 'Carlos',
    location: 'Madrid',
    initials: 'CM',
  },
  {
    quote: 'Like having a coach watch every frame of my game.',
    name: 'Sofia',
    location: 'Athens',
    initials: 'SK',
  },
];

function TestimonialCard({
  quote,
  name,
  location,
  initials,
}: {
  quote: string;
  name: string;
  location: string;
  initials: string;
}) {
  return (
    <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.04] border border-white/[0.08] backdrop-blur-xl flex flex-col gap-5">
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={14} fill="#00E676" color="#00E676" />
        ))}
      </div>
      <p className="text-base sm:text-lg leading-relaxed text-white/70 flex-1">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="flex items-center gap-3 mt-1">
        <div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold bg-[#00E676]/10 border border-[#00E676]/15 text-[#00E676]">
          {initials}
        </div>
        <div>
          <p className="text-sm font-semibold text-white">{name}</p>
          <p className="text-xs text-white/50">{location}</p>
        </div>
      </div>
    </div>
  );
}

export default function SocialProofSection() {
  return (
    <section id="testimonials" className="py-24 px-4 bg-[#0A0A0A] relative overflow-hidden">
      {/* Gradient divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00E676]/10 to-transparent" />

      <div className="max-w-4xl mx-auto">
        <MotionDiv className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] mb-4 text-[#00E676]">
            Players
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 font-heading">
            Trusted by 8,000+ players
          </h2>

          {/* Trust badge */}
          <div className="flex items-center justify-center gap-3">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill="#00E676" color="#00E676" />
              ))}
            </div>
            <span className="text-sm font-medium text-white/60">
              4.9 on the App Store
            </span>
          </div>
        </MotionDiv>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {testimonials.map((t, i) => (
            <MotionDiv key={t.name} delay={0.1 + i * 0.1}>
              <TestimonialCard {...t} />
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
}
