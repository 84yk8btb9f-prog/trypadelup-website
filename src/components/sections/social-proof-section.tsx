function StarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="#FFB800" aria-hidden="true">
      <path d="M8 1.3L9.8 5.1L14 5.7L11 8.6L11.7 12.7L8 10.8L4.3 12.7L5 8.6L2 5.7L6.2 5.1L8 1.3Z" />
    </svg>
  );
}

const reviews = [
  {
    quote: "Fixed my bandeja in two weeks. The frame-by-frame breakdown showed exactly where my elbow was dropping.",
    name: "Carlos M.",
    city: "Madrid",
  },
  {
    quote: "The nutrition tracking saves me 10 minutes a day. Just snap a photo and it gets the macros right every time.",
    name: "Sofia K.",
    city: "Athens",
  },
  {
    quote: "Like having a personal coach in my pocket. The AI training plans pushed my level from 3.5 to 5.0 in three months.",
    name: "Luca R.",
    city: "Milan",
  },
];

export default function SocialProofSection() {
  return (
    <section id="testimonials" className="py-20 px-6 sm:px-10 bg-[#0A0A0A]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-heading mb-4 text-center opacity-0 animate-[fadeInUp_0.6s_ease-out_0.1s_forwards]">
          Trusted by 8,000+ players
        </h2>
        <p className="text-base text-white/35 text-center mb-16 opacity-0 animate-[fadeInUp_0.6s_ease-out_0.18s_forwards]">
          Join players across 40+ countries improving their game every day.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <div
              key={review.name}
              className="p-6 rounded-2xl border border-white/[0.06] opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]"
              style={{ animationDelay: `${0.2 + i * 0.1}s` }}
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <StarIcon key={j} />
                ))}
              </div>
              <p className="text-base text-white/55 leading-relaxed mb-4">
                &ldquo;{review.quote}&rdquo;
              </p>
              <p className="text-sm text-white/30">
                -- {review.name}, {review.city}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
