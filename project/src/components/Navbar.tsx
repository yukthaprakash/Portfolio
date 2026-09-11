import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Gamepad2 } from 'lucide-react';
import { navSections } from '@/data/content';
import { useActiveSection } from '@/hooks/useActiveSection';

const sectionIds: string[] = navSections.map((s) => s.id);

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const activeIndex = sectionIds.indexOf(activeSection);

  return (
    <>
      {/* Desktop nav */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-[90] transition-all duration-300 ${
          scrolled ? 'glass shadow-soft' : 'bg-white/40'
        } rounded-full px-3 py-2.5`}
      >
        <div className="hidden md:flex items-center gap-1">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full hover:bg-pink-100/60 transition-colors"
            aria-label="Go to home"
          >
            <Gamepad2 className="w-5 h-5 text-pink-400" />
            <span className="font-display font-bold text-sm text-ink">Yuktha</span>
          </button>

          <div className="w-px h-5 bg-lilac-200 mx-1" />

          {/* Section pills */}
          <div className="flex items-center gap-0.5">
            {navSections.slice(1).map((section) => {
              const isActive = activeSection === section.id;
              return (
                <button
                  key={section.id}
                  onClick={() => handleNavClick(section.id)}
                  className={`relative px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 hover:scale-105 ${
                    isActive
                      ? 'text-white'
                      : 'text-softink hover:text-pink-400'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-400 to-lilac-400"
                      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                    />
                  )}
                  <span className="relative z-10">{section.label}</span>
                </button>
              );
            })}
          </div>

          {/* Level tracker badge */}
          <div className="w-px h-5 bg-lilac-200 mx-1" />
          <div className="flex items-center gap-1 px-2">
            <span className="text-[10px] font-display font-semibold text-lilac-400">LV</span>
            <span className="text-xs font-display font-bold text-ink">
              {String(Math.min(activeIndex + 1, 9)).padStart(2, '0')}
            </span>
          </div>
        </div>

        {/* Mobile toggle */}
        <div className="flex md:hidden items-center justify-between w-[200px]">
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-1.5"
            aria-label="Go to home"
          >
            <Gamepad2 className="w-5 h-5 text-pink-400" />
            <span className="font-display font-bold text-sm text-ink">Yuktha</span>
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-full hover:bg-pink-100/60 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5 text-ink" /> : <Menu className="w-5 h-5 text-ink" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 left-4 right-4 z-[95] md:hidden glass rounded-3xl shadow-soft p-4"
          >
            <div className="grid grid-cols-2 gap-2">
              {navSections.slice(1).map((section, i) => {
                const isActive = activeSection === section.id;
                return (
                  <button
                    key={section.id}
                    onClick={() => handleNavClick(section.id)}
                    className={`flex items-center gap-2 px-4 py-3 rounded-2xl text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-gradient-to-r from-pink-400 to-lilac-400 text-white'
                        : 'bg-white/50 text-softink hover:bg-pink-100/50'
                    }`}
                  >
                    <span className="text-xs font-display opacity-60">{String(i + 2).padStart(2, '0')}</span>
                    {section.label}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
