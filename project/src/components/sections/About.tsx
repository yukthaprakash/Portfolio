import { motion } from 'framer-motion';
import { Quote, MapPin, GraduationCap } from 'lucide-react';
import { ChibiAvatar } from '@/components/ChibiAvatar';

export function About() {
  return (
    <section id="about" className="relative py-24 px-4 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Section label */}
        <SectionLabel num="01" label="About Me" />

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-ink text-center mb-12"
        >
          Designing with curiosity.
          <br />
          <span className="text-gradient-pink">Building with purpose.</span>
        </motion.h2>

        <div className="grid lg:grid-cols-[1fr_320px] gap-8 items-start">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4 text-softink leading-relaxed"
          >
            <p>
              I'm Yuktha — an engineering student who found myself equally drawn to the creative and
              technical sides of technology. I enjoy taking an idea from a rough thought or sketch
              and turning it into something people can actually interact with.
            </p>

            <div className="flex flex-wrap gap-2 py-2">
              {['UI/UX', 'Visual Design', 'Branding', 'Frontend Development', 'Creative Technology'].map(
                (tag, i) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="px-3 py-1.5 rounded-full bg-lilac-100 text-sm font-medium text-ink"
                  >
                    {tag}
                  </motion.span>
                )
              )}
            </div>

            <p>
              Whether I'm designing an interface in Figma, creating a visual identity, experimenting
              with layouts, or building a frontend with React, I enjoy figuring out how design and
              technology can work together.
            </p>

            <p>
              I'm currently in my 2nd year of engineering at{' '}
              <span className="font-semibold text-ink">CMR Institute of Technology (CMRIT)</span>,
              constantly learning, experimenting, and building projects that help me become a better
              designer and developer.
            </p>

            {/* Location / education badges */}
            <div className="flex flex-wrap gap-3 pt-2">
              <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/60 shadow-softer">
                <GraduationCap className="w-4 h-4 text-lilac-400" />
                <span className="text-sm font-medium text-ink">2nd Year · CMRIT</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/60 shadow-softer">
                <MapPin className="w-4 h-4 text-pink-400" />
                <span className="text-sm font-medium text-ink">Bengaluru, India</span>
              </div>
            </div>
          </motion.div>

          {/* Right: chibi portrait + quote */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {/* Chibi portrait card */}
            <motion.div
              initial={{ opacity: 0, y: 12, rotate: 1 }}
              whileInView={{ opacity: 1, y: 0, rotate: -2 }}
              viewport={{ once: true }}
              animate={{ y: [0, -5, 0] }}
              transition={{ y: { duration: 5, repeat: Infinity, ease: 'easeInOut' }, opacity: { duration: 0.6 }, rotate: { duration: 0.6 } }}
              className="relative group"
            >
              <motion.div
                animate={{ rotate: [0, 4, 0, -4, 0], scale: [1, 1.02, 1] }}
                transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -inset-2 rounded-[2rem] bg-gradient-to-br from-pink-200/70 via-lilac-200/50 to-babyblue-200/70 blur-sm"
              />
              <div className="relative aspect-[3/4] rounded-3xl2 overflow-hidden border-4 border-white shadow-pop bg-gradient-to-br from-pink-100 via-lilac-50 to-babyblue-100 flex items-center justify-center">
                {/* Soft pastel overlay frame */}
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-pink-200/30 via-transparent to-lilac-200/20 pointer-events-none" />
                <ChibiAvatar pose="sit" size={180} className="animate-bobble relative z-0" />
                {/* Decorative corner sparkles */}
                <div className="absolute top-3 right-3 z-20">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="animate-sparkle">
                    <path d="M9 1L10.5 7L16.5 9L10.5 11L9 17L7.5 11L1.5 9L7.5 7Z" fill="#FFF3C4" opacity="0.9" />
                  </svg>
                </div>
              </div>
              {/* Decorative tape */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-butter-200/70 rotate-2 rounded-sm" />
              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-3 -right-3 px-3 py-1.5 rounded-full bg-white/90 shadow-softer"
              >
                <span className="text-xs font-display font-semibold text-pink-400">Hi there!</span>
              </motion.div>
            </motion.div>

            {/* Sticky note quote */}
            <motion.div
              initial={{ opacity: 0, rotate: 0 }}
              whileInView={{ opacity: 1, rotate: -3 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative p-5 rounded-3xl2 bg-butter-100 shadow-card"
            >
              <Quote className="w-6 h-6 text-pink-300 mb-2" fill="currentColor" />
              <p className="text-sm font-display text-ink leading-relaxed">
                I like good design, interesting ideas, and making things that don't feel boring.
              </p>
              <div className="absolute -top-2 right-4 w-12 h-5 bg-pink-200/60 -rotate-3 rounded-sm" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SectionLabel({ num, label }: { num: string; label: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex items-center justify-center gap-3 mb-4"
    >
      <span className="text-xs font-display font-bold text-lilac-400">LV.{num}</span>
      <span className="h-px w-12 bg-lilac-200" />
      <span className="text-xs font-display font-semibold text-softink uppercase tracking-wider">
        {label}
      </span>
    </motion.div>
  );
}
