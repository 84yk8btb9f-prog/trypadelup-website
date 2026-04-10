'use client';

import { motion, type Variants } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(6px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
};

function MotionDiv({
  children,
  className,
  delay = 0,
  duration = 0.7,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={fadeUp}
      transition={{ duration, delay, ease: [0.25, 0.4, 0.25, 1] }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

export { MotionDiv, fadeUp };
