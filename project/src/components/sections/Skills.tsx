import { motion } from 'framer-motion';
import { skillGroups } from '@/data/content';
import { ChibiAvatar } from '@/components/ChibiAvatar';

const colorMap: Record<string, { bg: string; border: string; text: string; iconBg: string }> = {
  pink: { bg: 'bg-pink-50', border: 'border-pink-200', text: 'text-pink-400', iconBg: 'bg-pink-100' },
  lilac: { bg: 'bg-lilac-50', border: 'border-lilac-200', text: 'text-lilac-400', iconBg: 'bg-lilac-100' },
  mint: { bg: 'bg-mint-50', border: 'border-mint-200', text: 'text-mint-300', iconBg: 'bg-mint-100' },
};

export function Skills() {
  return (
    <section id="skills" className="relative py-24 px-4 overflow-hidden">
      {/* Chibi with paintbrush */}
      <div className="absolute top-8 right-4 hidden lg:block opacity-90">
        <ChibiAvatar pose="paint" size={120} className="animate-float" />
      </div>

      <div className="max-w-5xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-3 mb-4"
        >
          <span className="text-xs font-display font-bold text-lilac-400">LV.02</span>
          <span className="h-px w-12 bg-lilac-200" />
          <span className="text-xs font-display font-semibold text-softink uppercase tracking-wider">
            Skills
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-ink text-center mb-4"
        >
          My <span className="text-gradient-pink">Collection</span>
        </motion.h2>
        <p className="text-center text-softink mb-12 max-w-md mx-auto text-sm">
          Skill cards collected along the way — grouped by how I use them, not by percentages.
        </p>

        <div className="space-y-8">
          {skillGroups.map((group, gi) => {
            const colors = colorMap[group.color] ?? colorMap.pink;
            const GroupIcon = group.icon;
            return (
              <motion.div
                key={group.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: gi * 0.1 }}
                className={`rounded-3xl2 border-2 ${colors.border} ${colors.bg} p-6 shadow-softer`}
              >
                {/* Group header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-10 h-10 rounded-2xl ${colors.iconBg} flex items-center justify-center`}>
                    <GroupIcon className={`w-5 h-5 ${colors.text}`} />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-ink">{group.label}</h3>
                  <span className="ml-auto text-xs font-display text-softink">
                    {group.skills.length} cards
                  </span>
                </div>

                {/* Skill cards grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {group.skills.map((skill, si) => {
                    const SkillIcon = skill.icon;
                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: si * 0.04 }}
                        whileHover={{ scale: 1.06, rotate: -2 }}
                        className="group relative bg-white/80 rounded-2xl p-3 shadow-softer border border-white cursor-default transition-all"
                      >
                        {/* Corner shine */}
                        <div className="absolute top-1 right-1 w-2 h-2 rounded-full bg-butter-200 opacity-60 group-hover:opacity-100 transition-opacity" />

                        <div className={`w-8 h-8 rounded-xl ${colors.iconBg} flex items-center justify-center mb-2`}>
                          <SkillIcon className={`w-4 h-4 ${colors.text}`} />
                        </div>
                        <p className="text-xs font-medium text-ink leading-tight">{skill.name}</p>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
