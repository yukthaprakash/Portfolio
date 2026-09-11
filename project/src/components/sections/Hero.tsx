import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, Heart } from 'lucide-react';
import { ChibiAvatar } from '@/components/ChibiAvatar';
import { SparkleBurst } from '@/components/SparkleBurst';

export function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 pt-24 pb-12 overflow-hidden"
    >
      {/* Decorative game-map path start */}
      <div className="absolute top-20 right-8 hidden lg:block opacity-30">
        <div className="dotted-path w-32 h-32 rounded-full" />
      </div>

      <div className="relative z-10 max-w-6xl w-full grid lg:grid-cols-2 gap-8 items-center">
        {/* Left: text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-center lg:text-left order-2 lg:order-1"
        >
          {/* Identity pill */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 shadow-softer mb-6"
          >
            <Sparkles className="w-4 h-4 text-pink-400" />
            <span className="text-xs font-medium text-softink">
              UI/UX Designer · Frontend Developer · Creative Explorer
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl text-ink mb-4"
          >
            Yuktha <span className="text-gradient-pink">P</span>
          </motion.h1>

          {/* Headline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="font-display text-xl sm:text-2xl text-ink mb-4 max-w-lg mx-auto lg:mx-0"
          >
            Designing ideas into experiences.
          </motion.p>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-sm sm:text-base text-softink mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed"
          >
            I'm a 2nd-year engineering student at CMRIT who loves turning ideas into thoughtful
            interfaces, visual stories, and digital experiences. I explore the space between design
            and technology — creating interfaces that look good, feel intuitive, and can actually be
            built.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start"
          >
            <SparkleBurst>
              <button
                onClick={() => scrollTo('work')}
                className="group relative px-8 py-3.5 rounded-full bg-gradient-to-r from-pink-400 to-lilac-400 text-white font-display font-semibold shadow-pop transition-all duration-200 hover:scale-105 active:scale-95"
              >
                <span className="flex items-center gap-2">
                  View My Work
                  <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                </span>
              </button>
            </SparkleBurst>

            <SparkleBurst>
              <button
                onClick={() => scrollTo('contact')}
                className="px-8 py-3.5 rounded-full bg-white/80 text-ink font-display font-semibold shadow-softer border-2 border-lilac-200 transition-all duration-200 hover:scale-105 hover:border-pink-300 active:scale-95"
              >
                <span className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-pink-400" />
                  Let's Connect
                </span>
              </button>
            </SparkleBurst>
          </motion.div>
        </motion.div>

        {/* Right: chibi avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
          className="order-1 lg:order-2 flex justify-center"
        >
          <div className="relative">
            {/* Platform / pedestal */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-12 bg-lilac-200/50 rounded-full blur-md" />

            {/* Decorative ring */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-56 h-56 rounded-full border-2 border-dashed border-pink-200 animate-spin" style={{ animationDuration: '20s' }} />
            </div>

            <ChibiAvatar pose="wave" size={280} className="relative z-10 animate-float" />

            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-2 -right-4 px-3 py-1.5 rounded-full bg-white/90 shadow-softer"
            >
              <span className="text-xs font-display font-semibold text-pink-400">Hi there!</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute bottom-8 -left-8 px-3 py-1.5 rounded-full bg-butter-100 shadow-softer"
            >
              <span className="text-xs font-display font-semibold text-ink">Welcome!</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <span className="text-xs text-softink font-medium">Scroll to explore</span>
        <ArrowDown className="w-4 h-4 text-lilac-300" />
      </motion.div>
    </section>
  );
}
