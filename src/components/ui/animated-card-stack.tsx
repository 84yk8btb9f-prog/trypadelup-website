'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

type Card = {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  content: React.ReactNode;
};

type AnimatedCardStackProps = {
  cards: Card[];
  autoPlayInterval?: number;
  className?: string;
};

function AnimatedCardStack({ cards, autoPlayInterval = 4000, className }: AnimatedCardStackProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % cards.length);
  }, [cards.length]);

  useEffect(() => {
    const interval = setInterval(next, autoPlayInterval);
    return () => clearInterval(interval);
  }, [next, autoPlayInterval]);

  return (
    <div className={cn('grid grid-cols-1 lg:grid-cols-2 gap-8 items-center', className)}>
      {/* Card display */}
      <div className="relative h-[400px] md:h-[480px]">
        <AnimatePresence mode="popLayout">
          {cards.map((card, i) => {
            const isActive = i === activeIndex;
            const offset = ((i - activeIndex + cards.length) % cards.length);
            if (offset > 2) return null;

            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, scale: 0.9, y: 40 }}
                animate={{
                  opacity: isActive ? 1 : 0.4 - offset * 0.15,
                  scale: 1 - offset * 0.05,
                  y: offset * 20,
                  zIndex: cards.length - offset,
                }}
                exit={{ opacity: 0, scale: 0.9, y: -40 }}
                transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                className="absolute inset-0 rounded-2xl overflow-hidden bg-white/[0.04] border border-white/[0.08] backdrop-blur-xl"
                onClick={() => setActiveIndex(i)}
                style={{ cursor: isActive ? 'default' : 'pointer' }}
              >
                <div className="p-8 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#00E676]/10 flex items-center justify-center text-[#00E676]">
                      {card.icon}
                    </div>
                    <h3
                      className="text-xl font-semibold text-white"
                      style={{ fontFamily: "'Clash Display', sans-serif" }}
                    >
                      {card.title}
                    </h3>
                  </div>
                  <p className="text-sm text-white/50 mb-6">{card.description}</p>
                  <div className="flex-1 flex items-center justify-center">
                    {card.content}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Navigation dots + labels */}
      <div className="flex flex-col gap-4">
        {cards.map((card, i) => (
          <button
            key={card.id}
            onClick={() => setActiveIndex(i)}
            className={cn(
              'flex items-start gap-4 p-4 rounded-xl text-left transition-all duration-300',
              i === activeIndex
                ? 'bg-white/[0.04] border border-white/[0.08]'
                : 'opacity-40 hover:opacity-70'
            )}
          >
            <div
              className={cn(
                'w-8 h-8 rounded-lg flex items-center justify-center shrink-0 text-sm font-bold transition-colors',
                i === activeIndex
                  ? 'bg-[#00E676] text-[#0A0A0A]'
                  : 'bg-white/[0.06] text-white/40'
              )}
            >
              {i + 1}
            </div>
            <div>
              <p
                className="text-base font-semibold text-white"
                style={{ fontFamily: "'Clash Display', sans-serif" }}
              >
                {card.title}
              </p>
              <p className="text-sm text-white/40 mt-0.5">{card.description}</p>
            </div>
            {i === activeIndex && (
              <motion.div
                className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#00E676]/30 rounded-full overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <motion.div
                  className="h-full bg-[#00E676]"
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: autoPlayInterval / 1000, ease: 'linear' }}
                  key={`progress-${activeIndex}`}
                />
              </motion.div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

export { AnimatedCardStack };
