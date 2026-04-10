'use client';

import { Star } from 'lucide-react';
import { MotionDiv } from '@/components/ui/motion-wrapper';

const featured = {
  quote:
    'The AI analysis is like having a personal coach in your pocket. I improved more in one month than I did in a year of lessons.',
  name: 'Carlos M.',
  location: 'Madrid, Spain',
  initials: 'CM',
};

const sideTestimonials = [
  {
    quote:
      'PadelUp helped me fix my bandeja in just 2 weeks. The AI video analysis is incredibly accurate.',
    name: 'Sofia K.',
    location: 'Athens, Greece',
    initials: 'SK',
  },
  {
    quote:
      'I was skeptical about AI coaching but the frame-by-frame breakdown of my smash completely changed my game.',
    name: 'Marco R.',
    location: 'Milan, Italy',
    initials: 'MR',
  },
  {
    quote:
      'The training plans are perfectly tailored. I went from beginner to winning club tournaments in 4 months.',
    name: 'Laura B.',
    location: 'Barcelona, Spain',
    initials: 'LB',
  },
];

function SmallCard({
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
    <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/[0.08] backdrop-blur-xl flex flex-col gap-4">
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={12} fill="#00E676" color="#00E676" />
        ))}
      </div>
      <p className="text-sm leading-relaxed text-white/70 flex-1">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="flex items-center gap-3 mt-1">
        <div className="w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold bg-white/[0.06] border border-white/[0.08] text-white/50">
          {initials}
        </div>
        <div>
          <p className="text-sm font-semibold text-white">{name}</p>
          <p className="text-xs text-white/40">{location}</p>
        </div>
      </div>
    </div>
  );
}

export default function SocialProofSection() {
  return (
    <section id="testimonials" className="py-32 px-4 bg-[#0A0A0A] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="max-w-5xl mx-auto">
        {/* Featured testimonial */}
        <MotionDiv className="text-center mb-20">
          {/* Large green quote mark */}
          <div className="mb-8">
            <span
              className="text-[120px] sm:text-[160px] leading-none font-bold text-[#00E676]/15 select-none"
              style={{ fontFamily: "'Clash Display', sans-serif" }}
              aria-hidden="true"
            >
              &ldquo;
            </span>
          </div>

          <blockquote
            className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-medium text-white leading-snug max-w-4xl mx-auto -mt-24"
            style={{ fontFamily: "'Clash Display', sans-serif" }}
          >
            {featured.quote}
          </blockquote>

          <div className="flex items-center justify-center gap-3 mt-10">
            <div className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold bg-[#00E676]/15 border border-[#00E676]/20 text-[#00E676]">
              {featured.initials}
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold text-white">{featured.name}</p>
              <p className="text-xs text-white/40">{featured.location}</p>
            </div>
          </div>
        </MotionDiv>

        {/* Trust badge */}
        <MotionDiv delay={0.1} className="flex items-center justify-center gap-4 mb-14">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} fill="#00E676" color="#00E676" />
            ))}
          </div>
          <span className="text-sm font-medium text-white/60">
            4.9 &middot; 8,000+ players
          </span>
        </MotionDiv>

        {/* Smaller testimonial cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {sideTestimonials.map((t, i) => (
            <MotionDiv key={t.name} delay={0.15 + i * 0.1}>
              <SmallCard {...t} />
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
}
