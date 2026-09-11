import { motion, AnimatePresence } from 'framer-motion';
import { useCallback, useState, type ReactNode } from 'react';

type Burst = { id: number; x: number; y: number };

/**
 * Click sparkle burst effect. Wrap any element to add a cute sparkle
 * confetti burst on click (no sound).
 */
export function SparkleBurst({ children, className = '' }: { children: ReactNode; className?: string }) {
  const [bursts, setBursts] = useState<Burst[]>([]);

  const handleBurst = useCallback((e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now() + Math.random();
    setBursts((prev) => [...prev, { id, x, y }]);
    setTimeout(() => {
      setBursts((prev) => prev.filter((b) => b.id !== id));
    }, 800);
  }, []);

  return (
    <span className={`relative inline-block ${className}`} onClick={handleBurst}>
      {children}
      <AnimatePresence>
        {bursts.map((burst) => (
          <motion.div
            key={burst.id}
            className="pointer-events-none absolute z-50"
            style={{ left: burst.x, top: burst.y }}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {Array.from({ length: 8 }).map((_, i) => {
              const angle = (i / 8) * Math.PI * 2;
              const dist = 30 + Math.random() * 20;
              return (
                <motion.div
                  key={i}
                  className="absolute"
                  initial={{ x: 0, y: 0, scale: 1, opacity: 1 }}
                  animate={{
                    x: Math.cos(angle) * dist,
                    y: Math.sin(angle) * dist,
                    scale: 0,
                    opacity: 0,
                  }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M5 0 L6 4 L10 5 L6 6 L5 10 L4 6 L0 5 L4 4 Z" fill="#FF7BAC" />
                  </svg>
                </motion.div>
              );
            })}
          </motion.div>
        ))}
      </AnimatePresence>
    </span>
  );
}
