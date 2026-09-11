import { motion } from 'framer-motion';
import { approachSteps } from '@/data/content';

export function DesignApproach() {
  return (
    <section id="approach" className="relative py-24 px-4 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-3 mb-4"
        >
          <span className="text-xs font-display font-bold text-lilac-400">LV.05</span>
          <span className="h-px w-12 bg-lilac-200" />
          <span className="text-xs font-display font-semibold text-softink uppercase tracking-wider">
            My Approach
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-ink text-center mb-4"
        >
          My <span className="text-gradient-pink">Quest Path</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-softink mb-12 max-w-xl mx-auto text-sm leading-relaxed"
        >
          I don't just make things look good. I like understanding why something should exist, who
          it's for, and how it should feel.
        </motion.p>

        {/* Quest path - alternating zigzag with dotted trail */}
        <div className="relative">
          {/* Vertical dotted trail */}
          <div className="absolute left-8 sm:left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 dotted-path-v opacity-50" />

          <div className="space-y-6 sm:space-y-2">
            {approachSteps.map((step, i) => {
              const Icon = step.icon;
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, x: isLeft ? -30 : 30, y: 20 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`relative flex items-center gap-4 ${
                    isLeft ? 'sm:flex-row' : 'sm:flex-row-reverse'
                  }`}
                >
                  {/* Node dot on trail */}
                  <div className="absolute left-8 sm:left-1/2 -translate-x-1/2 z-10">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="w-5 h-5 rounded-full bg-gradient-to-br from-pink-400 to-lilac-400 border-4 border-cream shadow-soft"
                    />
                  </div>

                  {/* Card */}
                  <div className={`ml-16 sm:ml-0 sm:w-[calc(50%-2rem)] ${isLeft ? 'sm:mr-auto' : 'sm:ml-auto'}`}>
                    <div className="group bg-white/80 rounded-3xl2 p-5 shadow-card border-2 border-white hover:shadow-pop transition-all hover:scale-[1.02]">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-pink-100 to-lilac-100 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-pink-400" />
                        </div>
                        <div>
                          <span className="text-xs font-display font-bold text-lilac-400">
                            LEVEL {step.num}
                          </span>
                          <h3 className="font-display font-bold text-lg text-ink">{step.title}</h3>
                        </div>
                      </div>
                      <p className="text-sm text-softink leading-relaxed">{step.desc}</p>
                    </div>
                  </div>

                  {/* Spacer for the other half */}
                  <div className="hidden sm:block sm:w-[calc(50%-2rem)]" />
                </motion.div>
              );
            })}
          </div>

          {/* End flag */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative flex justify-center mt-8"
          >
            <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-pink-400 to-lilac-400 text-white font-display font-semibold text-sm shadow-pop">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M5 21V4L19 4L17 8L19 12L5 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M5 21V12" stroke="white" strokeWidth="2" strokeLinecap="round" />
              </svg>
              Quest Complete!
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
