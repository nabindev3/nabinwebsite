'use client';

import { motion } from 'framer-motion';
import { useReveal } from '../hooks/useReveal.js';

// Next's <template> re-mounts on every route change — perfect for transitions
// and for re-running the IntersectionObserver against the new page's .reveal nodes.
export default function Template({ children }) {
  useReveal();
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.18, ease: [0.4, 0, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}
