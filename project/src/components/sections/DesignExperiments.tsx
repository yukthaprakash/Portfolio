import { motion } from 'framer-motion';
import { experimentCategories } from '@/data/content';
import { ExperimentArtwork } from '@/components/ExperimentArtwork';

const colorMap: Record<string, { bg: string; border: string; tape: string }> = {
  pink: { bg: 'from-pink-50 to-pink-100', border: 'border-pink-200', tape: 'bg-pink-200' },
  lilac: { bg: 'from-lilac-50 to-lilac-100', border: 'border-lilac-200', tape: 'bg-lilac-200' },
  babyblue: { bg: 'from-babyblue-50 to-babyblue-100', border: 'border-babyblue-200', tape: 'bg-babyblue-200' },
  butter: { bg: 'from-butter-50 to-butter-100', border: 'border-butter-200', tape: 'bg-butter-200' },
  mint: { bg: 'from-mint-50 to-mint-100', border: 'border-mint-200', tape: 'bg-mint-200' },
};

export function DesignExperiments() {
  return (
    <section id="experiments" className="relative py-24 px-4 overflow-hidden">
      {/* Corkboard texture background */}
      <div className="absolute inset-0 bg-gradient-to-b from-butter-50/30 via-pink-50/20 to-lilac-50/30" />

      <div className="relative max-w-5xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-3 mb-4"
        >
          <span className="text-xs font-display font-bold text-lilac-400">LV.04</span>
          <span className="h-px w-12 bg-lilac-200" />
          <span className="text-xs font-display font-semibold text-softink uppercase tracking-wider">
            Design Lab
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-ink text-center mb-4"
        >
          Experiments, ideas & <span className="text-gradient-pink">everything in between.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-softink mb-12 max-w-xl mx-auto text-sm leading-relaxed"
        >
          Not everything I design starts as a client brief. Some start with a random idea, a colour
          palette, a late-night thought, or simply the question: "What if this looked better?"
        </motion.p>

        {/* Corkboard / masonry grid */}
        <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4">
          {experimentCategories.map((cat, i) => {
            const colors = colorMap[cat.color] ?? colorMap.pink;
            const heights = ['h-40', 'h-52', 'h-44', 'h-48', 'h-56', 'h-42'];
            const height = heights[i % heights.length];
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
                whileInView={{ opacity: 1, scale: 1, rotate: cat.rotation }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, type: 'spring', stiffness: 200, damping: 18 }}
                whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
                className={`relative break-inside-avoid mb-4 bg-gradient-to-br ${colors.bg} rounded-2xl border-2 ${colors.border} shadow-card p-3 cursor-default`}
              >
                {/* Tape */}
                <div className={`absolute -top-2 left-1/2 -translate-x-1/2 w-14 h-5 ${colors.tape} opacity-70 rotate-1 rounded-sm`} />

                {/* Art-directed design study */}
                <div className={`${height} mb-2 overflow-hidden rounded-xl border border-white/60`}>
                  <ExperimentArtwork title={cat.title} color={cat.color} />
                </div>

                {/* Label */}
                <p className="text-xs font-display font-semibold text-ink text-center leading-tight">
                  {cat.title}
                </p>

                {/* Pin */}
                <div className="absolute -top-1 right-3 w-3 h-3 rounded-full shadow-sm" style={{ background: cat.color === 'pink' ? '#FF7BAC' : cat.color === 'lilac' ? '#B388FF' : cat.color === 'babyblue' ? '#9ADBFF' : cat.color === 'butter' ? '#FFEAA0' : '#8CE9BC' }} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
