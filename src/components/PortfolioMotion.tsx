import React from 'react';
import { motion, useReducedMotion, useScroll, useSpring } from 'motion/react';

export default function PortfolioMotion() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 28, restDelta: 0.001 });

  if (reduceMotion) return null;

  return (
    <div className="motion-system" aria-hidden="true">
      <motion.div className="scroll-progress" style={{ scaleX: progress }} />
      <motion.div
        className="orb orb-one"
        animate={{ x: [0, 46, -28, 0], y: [0, -26, 20, 0], rotate: [0, 30, -20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="orb orb-two"
        animate={{ x: [0, -70, 34, 0], y: [0, 30, -45, 0], rotate: [0, -45, 32, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      />
      <motion.div
        className="cursor-signal"
        animate={{ opacity: [0.18, 0.78, 0.18], scale: [0.85, 1.14, 0.85] }}
        transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
}
