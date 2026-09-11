import { motion } from 'framer-motion';
import { ArrowRight, Gift } from 'lucide-react';
import { socialLinks } from '@/data/content';
import { ChibiAvatar } from '@/components/ChibiAvatar';
import { SparkleBurst } from '@/components/SparkleBurst';

export function Contact() {
  return (
    <section id="contact" className="relative py-24 px-4 overflow-hidden">
      {/* Treasure chest / final level theme */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-butter-50/30 to-pink-50/40" />

      {/* Decorative sparkles */}
      <div className="absolute top-12 left-10 w-3 h-3 rounded-full bg-butter-200 animate-sparkle" />
      <div className="absolute top-20 right-16 w-2 h-2 rounded-full bg-pink-200 animate-sparkle" style={{ animationDelay: '0.5s' }} />
      <div className="absolute bottom-32 left-20 w-2.5 h-2.5 rounded-full bg-lilac-200 animate-sparkle" style={{ animationDelay: '1s' }} />

      <div className="relative max-w-3xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-3 mb-4"
        >
          <span className="text-xs font-display font-bold text-pink-400">FINAL LEVEL</span>
          <span className="h-px w-12 bg-pink-200" />
          <span className="text-xs font-display font-semibold text-softink uppercase tracking-wider">
            Contact
          </span>
        </motion.div>

        {/* Treasure chest card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-white/80 rounded-4xl2 shadow-pop border-4 border-white overflow-hidden"
        >
          {/* Top decoration */}
          <div className="h-3 bg-gradient-to-r from-pink-400 via-lilac-400 to-babyblue-300" />

          <div className="p-8 sm:p-12 text-center">
            {/* Treasure chest icon */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="inline-flex w-20 h-20 rounded-3xl2 bg-gradient-to-br from-butter-100 to-pink-100 items-center justify-center mb-6 shadow-soft border-2 border-white"
            >
              <Gift className="w-10 h-10 text-pink-400" />
            </motion.div>

            {/* Headings */}
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-ink mb-2">
              Have an <span className="text-gradient-pink">idea?</span>
            </h2>
            <p className="font-display text-xl sm:text-2xl text-softink mb-4">
              Let's make something interesting.
            </p>
            <p className="text-sm text-softink leading-relaxed max-w-lg mx-auto mb-8">
              Whether it's a product idea, a design collaboration, a website, or simply a
              conversation about design and technology — I'd love to hear from you.
            </p>

            {/* CTA button */}
            <SparkleBurst>
              <a
                href="mailto:hello@yukthap.com"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-pink-400 to-lilac-400 text-white font-display font-bold text-lg shadow-pop transition-all duration-200 hover:scale-105 active:scale-95"
              >
                Let's Talk
                <ArrowRight className="w-5 h-5" />
              </a>
            </SparkleBurst>

            {/* Social links */}
            <div className="mt-10">
              <p className="text-xs font-display font-semibold text-softink uppercase tracking-wider mb-4">
                Find me here
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      className="group w-12 h-12 rounded-2xl bg-white/70 border-2 border-lilac-100 flex items-center justify-center shadow-softer hover:border-pink-300 hover:shadow-soft transition-all"
                      aria-label={link.label}
                    >
                      <Icon className="w-5 h-5 text-softink group-hover:text-pink-400 transition-colors" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Bottom decoration */}
          <div className="h-3 bg-gradient-to-r from-babyblue-300 via-lilac-400 to-pink-400" />
        </motion.div>

        {/* Chibi waving goodbye */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center mt-8"
        >
          <ChibiAvatar pose="bye" size={160} className="animate-float" />
          <p className="font-display text-sm text-softink mt-2">See you soon!</p>
        </motion.div>
      </div>
    </section>
  );
}
