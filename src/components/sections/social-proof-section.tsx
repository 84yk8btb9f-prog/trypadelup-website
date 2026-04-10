export default function SocialProofSection() {
  const quotes = [
    { text: 'Fixed my bandeja in two weeks. Score went from 4 to 8.', name: 'Carlos', city: 'Madrid' },
    { text: 'Like having a coach watch every frame of my game.', name: 'Sofia', city: 'Athens' },
    { text: 'The nutrition tracking alone is worth the subscription.', name: 'Luca', city: 'Milan' },
  ];

  return (
    <section id="testimonials" className="pt-20 pb-16 px-6 sm:px-10 bg-[#0A0A0A] relative">
      <div className="max-w-5xl mx-auto">
        {/* Big number */}
        <h2 className="text-6xl sm:text-7xl lg:text-[120px] font-bold text-white font-heading leading-none tracking-tight">
          8,247
        </h2>
        <p className="text-lg sm:text-xl text-white/40 mt-2 mb-16">players and counting</p>

        {/* Quotes row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
          {quotes.map((q, i) => (
            <div
              key={q.name}
              className={`
                ${i > 0 ? 'md:border-l md:border-white/[0.08] md:pl-8' : ''}
                ${i < quotes.length - 1 ? 'md:pr-8' : ''}
              `}
            >
              <p className="text-base sm:text-lg text-white/60 italic leading-relaxed mb-3">
                &ldquo;{q.text}&rdquo;
              </p>
              <p className="text-sm text-white/30">
                &mdash; {q.name}, {q.city}
              </p>
            </div>
          ))}
        </div>

        {/* App Store rating */}
        <p className="mt-14 text-sm text-white/25">
          4.9 &#9733;&#9733;&#9733;&#9733;&#9733; on the App Store
        </p>
      </div>
    </section>
  );
}
