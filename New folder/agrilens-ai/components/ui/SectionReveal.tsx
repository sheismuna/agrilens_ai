'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { cn } from '@/lib/utils';

interface SectionRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'left' | 'right' | 'none';
}

export default function SectionReveal({
  children,
  className,
  delay = 0,
  direction = 'up',
}: SectionRevealProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px 0px' });

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 24 : 0,
      x: direction === 'left' ? -24 : direction === 'right' ? 24 : 0,
    },
    visible: { opacity: 1, y: 0, x: 0 },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
