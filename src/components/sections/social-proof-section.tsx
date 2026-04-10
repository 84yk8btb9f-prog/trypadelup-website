"use client";

import { useEffect, useRef } from "react";
import { Star, Quote } from "lucide-react";

const featured = {
  quote:
    "The AI analysis is like having a personal coach in your pocket. I've improved more in a month than I did in a year of lessons.",
  name: "Sofia K.",
  location: "Athens, Greece",
  initials: "SK",
};

const sideTestimonials = [
  {
    quote:
      "PadelUp helped me fix my bandeja in just 2 weeks! The AI video analysis is incredibly accurate.",
    name: "Carlos M.",
    location: "Madrid, Spain",
    initials: "CM",
  },
  {
    quote:
      "I was skeptical about AI coaching but the frame-by-frame breakdown of my smash completely changed my game.",
    name: "Marco R.",
    location: "Milan, Italy",
    initials: "MR",
  },
];

const bottomTestimonials = [
  {
    quote:
      "Best padel app out there. The nutrition tracking is a game changer — I finally understand my macros.",
    name: "Alex P.",
    location: "London, UK",
    initials: "AP",
  },
  {
    quote:
      "The training plans are perfectly tailored. I went from beginner to winning club tournaments in 4 months.",
    name: "Laura B.",
    location: "Barcelona, Spain",
    initials: "LB",
  },
  {
    quote:
      "Love the court finder feature. Found 3 new padel courts near me that I didn't even know existed!",
    name: "David H.",
    location: "Dubai, UAE",
    initials: "DH",
  },
];

function SmallCard({
  quote,
  name,
  location,
  initials,
  delay,
}: {
  quote: string;
  name: string;
  location: string;
  initials: string;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add("visible"), delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className="scroll-reveal p-5 rounded-2xl bg-white/[0.04] border border-white/[0.08] backdrop-blur-lg flex flex-col gap-3"
    >
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={12} fill="#00f5d4" color="#00f5d4" />
        ))}
      </div>
      <p className="text-sm leading-relaxed text-white/80 flex-1">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="flex items-center gap-3 mt-1">
        <div className="w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold bg-white/[0.08] border border-white/10 text-white/60">
          {initials}
        </div>
        <div>
          <p className="text-sm font-semibold text-white">{name}</p>
          <p className="text-xs text-white/45">{location}</p>
        </div>
      </div>
    </div>
  );
}

export default function SocialProofSection() {
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = headingRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="testimonials" className="py-28 px-4 bg-[#050505] relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

      <div className="max-w-6xl mx-auto">
        <div ref={headingRef} className="scroll-reveal mb-12 max-w-lg">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] mb-3 text-magenta">
            Testimonials
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "'Clash Display', sans-serif" }}
          >
            Loved by 8,000+ padel players worldwide
          </h2>
          <div className="flex items-center gap-3">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="#00f5d4" color="#00f5d4" />
              ))}
            </div>
            <span className="text-base font-semibold text-white/80">4.9 rating on the App Store</span>
          </div>
        </div>

        {/* Editorial layout: featured left, stacked right */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-6">
          {/* Featured large quote — 3 cols */}
          <div className="lg:col-span-3 p-8 sm:p-10 rounded-2xl bg-white/[0.04] border border-teal/20 backdrop-blur-lg flex flex-col justify-between relative overflow-hidden">
            <Quote size={64} className="text-teal/20 absolute top-6 left-6" />
            <div className="relative z-10">
              <p
                className="text-xl sm:text-2xl lg:text-3xl font-medium text-white leading-relaxed mb-8"
                style={{ fontFamily: "'Clash Display', sans-serif" }}
              >
                &ldquo;{featured.quote}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold bg-gradient-to-br from-teal/30 to-magenta/20 border-2 border-white/10 text-teal">
                  {featured.initials}
                </div>
                <div>
                  <p className="text-base font-semibold text-white">{featured.name}</p>
                  <p className="text-sm text-white/45">{featured.location}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Two stacked cards — 2 cols */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {sideTestimonials.map((t, i) => (
              <SmallCard key={t.name} {...t} delay={i * 100} />
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {bottomTestimonials.map((t, i) => (
            <SmallCard key={t.name} {...t} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}
