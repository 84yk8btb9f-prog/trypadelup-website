'use client';

import React, { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

type ContainerScrollProps = {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
};

export function ContainerScroll({ titleComponent, children }: ContainerScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const scaleDimensions = useTransform(scrollYProgress, [0.05, 0.3], [0.85, 1]);
  const rotate = useTransform(scrollYProgress, [0.05, 0.3], [20, 0]);
  const translateY = useTransform(scrollYProgress, [0.05, 0.3], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.15], [0, 1]);

  return (
    <div
      className="flex items-center justify-center relative py-10 md:py-32"
      ref={containerRef}
    >
      <div
        className="w-full relative"
        style={{
          perspective: '1000px',
        }}
      >
        <motion.div style={{ opacity }} className="div max-w-5xl mx-auto text-center">
          {titleComponent}
        </motion.div>
        <motion.div
          style={{
            rotateX: rotate,
            scale: scaleDimensions,
            y: translateY,
          }}
          className="max-w-5xl -mt-4 mx-auto h-[30rem] md:h-[40rem] w-full rounded-[30px] shadow-2xl overflow-hidden border-4 border-white/[0.08]"
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
}
