import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import { activityBadges, obsessedList } from '@/data/content';

export function Activity() {
  return (
    <section id="activity" className="relative py-24 px-4 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-3 mb-4"
        >
          <span className="text-xs font-display font-bold text-lilac-400">LV.06</span>
          <span className="h-px w-12 bg-lilac-200" />
          <span className="text-xs font-display font-semibold text-softink uppercase tracking-wider">
            Quests & Achievements
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-ink text-center mb-12"
        >
          Things I've been <span className="text-gradient-pink">up to.</span>
        </motion.h2>

        {/* Badge cards */}
        <div className="grid sm:grid-cols-2 gap-5 mb-12">
          {activityBadges.map((badge, i) => {
            const Icon = badge.icon;
            const gradients = [
              'from-pink-100 to-lilac-100',
              'from-lilac-100 to-babyblue-100',
              'from-mint-100 to-babyblue-100',
              'from-butter-100 to-pink-100',
            ];
            return (
              <motion.div
                key={badge.title}
                initial={{ opacity: 0, y: 30, rotate: -2 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.03, rotate: 1 }}
                className="group relative bg-white/80 rounded-3xl2 p-5 shadow-card border-2 border-white overflow-hidden"
              >
                {/* Badge ribbon */}
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${gradients[i]} rounded-bl-3xl2 opacity-60`} />

                <div className="relative flex items-start gap-4">
                  {/* Badge icon */}
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${gradients[i]} flex items-center justify-center flex-shrink-0 shadow-softer`}>
                    <Icon className="w-6 h-6 text-pink-400" />
                  </div>

                  <div>
                    {/* Achievement number */}
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-display font-bold text-lilac-400">
                        ACHIEVEMENT {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="text-[10px]">·</span>
                      <span className="text-[10px] font-display text-pink-400">UNLOCKED</span>
                    </div>
                    <h3 className="font-display font-bold text-base text-ink mb-1.5">
                      {badge.title}
                    </h3>
                    <p className="text-sm text-softink leading-relaxed">{badge.desc}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Currently learning line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 px-6 py-4 rounded-full bg-lilac-50 border-2 border-lilac-100 max-w-2xl mx-auto"
        >
          <span className="text-sm font-display font-semibold text-lilac-400 flex items-center gap-2 whitespace-nowrap">
            <Sparkles className="w-4 h-4" />
            Currently learning
          </span>
          <span className="text-lilac-300 hidden sm:block">→</span>
          <span className="text-sm text-ink text-center sm:text-left">
            Advanced UI/UX · React · Product Design · Creative Frontend
          </span>
        </motion.div>

        {/* Currently obsessed ticker */}
        <div className="mt-16">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-display font-bold text-2xl sm:text-3xl text-ink text-center mb-2"
          >
            Currently obsessed with <ArrowRight className="inline w-6 h-6 text-pink-400" />
          </motion.h3>

          {/* Animated ticker */}
          <div className="relative overflow-hidden py-6 mt-4">
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-cream to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-cream to-transparent z-10" />
            <motion.div
              animate={{ x: ['0%', '-50%'] }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="flex gap-3 whitespace-nowrap"
            >
              {[...obsessedList, ...obsessedList].map((item, i) => (
                <span
                  key={i}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/70 shadow-softer border border-lilac-100 text-sm font-medium text-ink"
                >
                  <span className="w-2 h-2 rounded-full bg-pink-400 animate-pulseSoft" />
                  {item}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
