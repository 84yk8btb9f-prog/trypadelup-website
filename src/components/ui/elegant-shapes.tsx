'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

type ElegantShapeProps = {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  gradient?: string;
};

function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 12,
  gradient = 'from-[#00E676]/[0.08]',
}: ElegantShapeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -30, rotate: rotate - 5 }}
      animate={{
        opacity: 1,
        y: [0, -15, 0],
        rotate: [rotate, rotate + 2, rotate],
      }}
      transition={{
        opacity: { duration: 1.2, delay },
        y: { duration: 8, repeat: Infinity, ease: 'easeInOut', delay },
        rotate: { duration: 10, repeat: Infinity, ease: 'easeInOut', delay },
      }}
      className={cn('absolute pointer-events-none', className)}
      style={{ width, height }}
    >
      <div
        className={cn(
          'w-full h-full rounded-full bg-gradient-to-r to-transparent',
          'border border-white/[0.06] backdrop-blur-[2px]',
          gradient
        )}
      />
    </motion.div>
  );
}

export { ElegantShape };
