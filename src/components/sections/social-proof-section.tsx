"use client";

import { useEffect, useRef } from "react";

const testimonials = [
  {
    quote:
      "PadelUp helped me fix my bandeja in just 2 weeks! The AI video analysis is incredibly accurate.",
    name: "Carlos M.",
    location: "Madrid",
    initials: "CM",
  },
  {
    quote:
      "The AI analysis is like having a personal coach in your pocket. I've improved more in a month than I did in a year.",
    name: "Sofia K.",
    location: "Athens",
    initials: "SK",
  },
  {
    quote:
      "Best padel app out there. The nutrition tracking is a game changer — I finally understand my macros.",
    name: "Alex P.",
    location: "London",
    initials: "AP",
  },
];

function TestimonialCard({
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
      className="scroll-reveal p-6 rounded-2xl flex flex-col gap-4"
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.04)",
        border: "1px solid rgba(255, 255, 255, 0.08)",
        backdropFilter: "blur(8px)",
      }}
    >
      {/* Stars */}
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            width="14"
            height="14"
            fill="#39ff7d"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ))}
      </div>

      <p
        className="text-sm leading-relaxed flex-1"
        style={{ color: "rgba(240, 244, 248, 0.8)" }}
      >
        &ldquo;{quote}&rdquo;
      </p>

      <div className="flex items-center gap-3 mt-2">
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold"
          style={{ backgroundColor: "rgba(57, 255, 125, 0.15)", color: "#39ff7d" }}
        >
          {initials}
        </div>
        <div>
          <p className="text-sm font-semibold text-white">{name}</p>
          <p
            className="text-xs"
            style={{ color: "rgba(240, 244, 248, 0.45)" }}
          >
            {location}
          </p>
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
    <section
      className="py-24 px-4"
      style={{
        backgroundColor: "#0b0f14",
        borderTop: "1px solid rgba(255, 255, 255, 0.04)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div ref={headingRef} className="scroll-reveal text-center mb-12">
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#39ff7d" }}
          >
            Social proof
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Loved by 8,000+ padel players worldwide
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  width="18"
                  height="18"
                  fill="#39ff7d"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <span
              className="text-base font-semibold"
              style={{ color: "rgba(240, 244, 248, 0.8)" }}
            >
              4.9 rating
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} {...t} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}
