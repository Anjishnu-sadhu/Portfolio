import React from 'react';
import { motion } from 'framer-motion';

export const FadeIn = ({ children, delay = 0, className = "", direction = "up" }) => {
  const yOffset = direction === "up" ? 40 : direction === "down" ? -40 : 0;
  const xOffset = direction === "left" ? 40 : direction === "right" ? -40 : 0;
  
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: yOffset, x: xOffset }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
};

export const TextReveal = ({ text, className = "", delay = 0 }) => {
  const words = typeof text === 'string' ? text.split(" ") : [];
  
  return (
    <span className={className} style={{ display: 'inline-flex', flexWrap: 'wrap', overflow: 'hidden' }}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          style={{ display: 'inline-block', marginRight: '0.25em' }}
          initial={{ y: '120%', opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: delay + (i * 0.05),
            ease: [0.16, 1, 0.3, 1]
          }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
};
