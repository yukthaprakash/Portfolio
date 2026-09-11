import { motion } from 'framer-motion';
import { creativeInterests } from '@/data/content';

export function CreativeInterests() {
  return (
    <section id="interests" className="relative py-24 px-4 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-3 mb-4"
        >
          <span className="text-xs font-display font-bold text-lilac-400">LV.07</span>
          <span className="h-px w-12 bg-lilac-200" />
          <span className="text-xs font-display font-semibold text-softink uppercase tracking-wider">
            Beyond the Screen
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-ink text-center mb-4"
        >
          Beyond the <span className="text-gradient-pink">screen.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-softink mb-12 max-w-xl mx-auto text-sm leading-relaxed"
        >
          Design isn't the only place I find inspiration. Painting teaches me colour. Travel gives me
          perspective. Dance teaches me movement and rhythm. Technology gives me new ways to bring
          ideas to life.
        </motion.p>

        {/* Horizontal icon strip */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          {creativeInterests.map((interest, i) => {
            const Icon = interest.icon;
            const gradients = [
              'from-pink-100 to-pink-200',
              'from-babyblue-100 to-babyblue-200',
              'from-lilac-100 to-lilac-200',
              'from-mint-100 to-mint-200',
              'from-butter-100 to-butter-200',
            ];
            return (
              <motion.div
                key={interest.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="flex flex-col items-center gap-2"
              >
                <div className={`w-20 h-20 sm:w-24 sm:h-24 rounded-3xl2 bg-gradient-to-br ${gradients[i]} flex items-center justify-center shadow-card border-2 border-white`}>
                  <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-ink" />
                </div>
                <span className="text-sm font-display font-semibold text-ink">{interest.label}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
