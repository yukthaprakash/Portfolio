import { motion, useScroll, useSpring } from 'framer-motion';

/**
 * A thin progress bar at the very top of the page showing scroll progress
 * through the "quest map" of the portfolio.
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 20 });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1.5 z-[100] origin-left"
      style={{
        scaleX,
        background: 'linear-gradient(90deg, #FF7BAC 0%, #B388FF 50%, #9ADBFF 100%)',
      }}
    />
  );
}
