import { AnimatePresence, motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { navSections } from '@/data/content';
import { useActiveSection } from '@/hooks/useActiveSection';
import { ChibiAvatar, type Pose } from '@/components/ChibiAvatar';

const sectionIds = navSections.map((section) => section.id);
const poseBySection: Record<string, Pose> = {
  home: 'wave',
  about: 'sit',
  skills: 'paint',
  work: 'point',
  experiments: 'point',
  approach: 'paint',
  activity: 'wave',
  interests: 'sit',
  contact: 'bye',
};

const positionBySection: Record<string, { top: string; left?: string; right?: string }> = {
  home: { top: '22%', left: '4%' },
  about: { top: '34%', left: '6%' },
  skills: { top: '46%', right: '5%' },
  work: { top: '58%', left: '4%' },
  experiments: { top: '68%', right: '5%' },
  approach: { top: '76%', left: '5%' },
  activity: { top: '82%', right: '5%' },
  interests: { top: '87%', left: '5%' },
  contact: { top: '82%', right: '6%' },
};

export function GuideAvatar() {
  const activeSection = useActiveSection(sectionIds);
  const pose = poseBySection[activeSection] ?? 'wave';
  const position = positionBySection[activeSection] ?? positionBySection.home;

  return (
    <motion.aside
      aria-label="Yuktha mascot guide"
      className="pointer-events-none fixed z-[70] hidden xl:block"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1, top: position.top, left: position.left, right: position.right }}
      transition={{ type: 'spring', stiffness: 90, damping: 18, mass: 0.8 }}
    >
      <div className="pointer-events-auto relative flex flex-col items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={pose}
            initial={{ opacity: 0, y: 16, scale: 0.85, rotate: -8 }}
            animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, y: -12, scale: 0.85, rotate: 8 }}
            transition={{ duration: 0.35 }}
          >
            <ChibiAvatar pose={pose} size={118} />
          </motion.div>
        </AnimatePresence>
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          className="-mt-1 flex items-center gap-1 rounded-full bg-white/85 px-2.5 py-1 shadow-softer"
        >
          <Sparkles className="h-3 w-3 text-pink-400" />
          <span className="text-[10px] font-display font-semibold text-ink">Guide mode</span>
        </motion.div>
      </div>
    </motion.aside>
  );
}
