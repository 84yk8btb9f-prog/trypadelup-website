'use client';
import { ReactNode } from 'react';
import { motion, Variants } from 'framer-motion';
import { cn } from '@/lib/utils';
import React from 'react';

type AnimatedGroupProps = {
  children: ReactNode;
  className?: string;
  variants?: { container?: Variants; item?: Variants };
  preset?: 'fade' | 'slide' | 'scale' | 'blur' | 'blur-slide';
};

const defaultContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const presetVariants = {
  fade: { item: { hidden: { opacity: 0 }, visible: { opacity: 1 } } },
  slide: { item: { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } } },
  scale: { item: { hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } } },
  blur: { item: { hidden: { opacity: 0, filter: 'blur(4px)' }, visible: { opacity: 1, filter: 'blur(0px)' } } },
  'blur-slide': { item: { hidden: { opacity: 0, filter: 'blur(4px)', y: 20 }, visible: { opacity: 1, filter: 'blur(0px)', y: 0 } } },
};

function AnimatedGroup({ children, className, variants, preset = 'blur-slide' }: AnimatedGroupProps) {
  const containerVariants = variants?.container || defaultContainerVariants;
  const itemVariants = variants?.item || presetVariants[preset].item;
  return (
    <motion.div initial='hidden' animate='visible' variants={containerVariants} className={cn(className)}>
      {React.Children.map(children, (child, index) => (
        <motion.div key={index} variants={itemVariants}>{child}</motion.div>
      ))}
    </motion.div>
  );
}

export { AnimatedGroup };
