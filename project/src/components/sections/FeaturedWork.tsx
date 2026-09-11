import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import {
  ArrowRight,
  X,
  ExternalLink,
  Github,
  Star,
  ChevronRight,
} from 'lucide-react';
import { projects, type Project } from '@/data/content';
import { ProjectArtwork } from '@/components/ProjectArtwork';

const accentMap: Record<string, { ring: string; text: string; bg: string; badge: string }> = {
  pink: { ring: 'ring-pink-200', text: 'text-pink-400', bg: 'bg-pink-100', badge: 'bg-pink-400' },
  lilac: { ring: 'ring-lilac-200', text: 'text-lilac-400', bg: 'bg-lilac-100', badge: 'bg-lilac-400' },
  butter: { ring: 'ring-butter-200', text: 'text-ink', bg: 'bg-butter-100', badge: 'bg-butter-200' },
  mint: { ring: 'ring-mint-200', text: 'text-mint-300', bg: 'bg-mint-100', badge: 'bg-mint-300' },
  babyblue: { ring: 'ring-babyblue-200', text: 'text-babyblue-300', bg: 'bg-babyblue-100', badge: 'bg-babyblue-300' },
};

export function FeaturedWork() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="work" className="relative py-24 px-4 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-3 mb-4"
        >
          <span className="text-xs font-display font-bold text-lilac-400">LV.03</span>
          <span className="h-px w-12 bg-lilac-200" />
          <span className="text-xs font-display font-semibold text-softink uppercase tracking-wider">
            Featured Work
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-ink text-center mb-4"
        >
          A little bit of what I've been <span className="text-gradient-pink">creating.</span>
        </motion.h2>
        <p className="text-center text-softink mb-12 max-w-lg mx-auto text-sm">
          A mix of interfaces, experiments, frontend projects, and visual design work.
        </p>

        {/* Project cards */}
        <div className="space-y-6">
          {projects.map((project, i) => {
            const accent = accentMap[project.accent] ?? accentMap.pink;
            const isReversed = i % 2 === 1;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`group relative ${isReversed ? 'lg:ml-auto' : ''}`}
              >
                <button
                  onClick={() => setSelected(project)}
                  className={`w-full lg:w-[85%] ${isReversed ? 'lg:ml-auto' : ''} text-left`}
                >
                  <div className={`relative bg-white/80 rounded-3xl2 shadow-card border-2 border-white overflow-hidden ring-2 ${accent.ring} transition-all duration-300 group-hover:shadow-pop group-hover:scale-[1.01]`}>
                    {/* Game-card top bar */}
                    <div className={`flex items-center gap-2 px-4 py-2 ${accent.bg} border-b border-white/60`}>
                      <span className={`text-xs font-display font-bold ${accent.text}`}>
                        PROJECT {project.number}
                      </span>
                      <div className="ml-auto flex items-center gap-1">
                        <Star className={`w-3 h-3 ${accent.text}`} fill="currentColor" />
                        <Star className={`w-3 h-3 ${accent.text}`} fill="currentColor" />
                        <Star className={`w-3 h-3 ${accent.text}`} fill="currentColor" />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-[200px_1fr] gap-0">
                      {/* Artwork */}
                      <div className="relative aspect-video sm:aspect-auto overflow-hidden">
                        <ProjectArtwork projectId={project.id} compact />
                      </div>

                      {/* Text content */}
                      <div className="p-5">
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <h3 className="font-display font-bold text-xl text-ink">{project.title}</h3>
                          <ChevronRight className="w-5 h-5 text-lilac-300 group-hover:translate-x-1 transition-transform flex-shrink-0 mt-1" />
                        </div>
                        <p className={`text-xs font-medium ${accent.text} mb-3`}>{project.category}</p>
                        <p className="text-sm text-softink leading-relaxed line-clamp-3 mb-3">
                          {project.description}
                        </p>
                        {/* Highlight tag */}
                        <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full ${accent.bg} ${accent.text}`}>
                          <Star className="w-3 h-3" fill="currentColor" />
                          <span className="text-xs font-display font-medium">{project.highlight}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Project detail modal */}
      <AnimatePresence>
        {selected && (
          <ProjectModal project={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const accent = accentMap[project.accent] ?? accentMap.pink;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-ink/30 backdrop-blur-sm"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0, y: 30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.8, opacity: 0, y: 30 }}
        transition={{ type: 'spring', stiffness: 200, damping: 22 }}
        onClick={(e) => e.stopPropagation()}
        className="relative bg-cream rounded-3xl2 shadow-pop max-w-2xl w-full max-h-[85vh] overflow-y-auto scrollbar-hide"
      >
        {/* Header */}
        <div className={`relative bg-gradient-to-br ${project.bg} p-6 rounded-t-3xl2`}>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/70 hover:bg-white flex items-center justify-center transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5 text-ink" />
          </button>

          <div className="flex items-center gap-2 mb-3">
            <span className={`text-xs font-display font-bold ${accent.text}`}>
              PROJECT {project.number}
            </span>
          </div>
          <h3 className="font-display font-bold text-2xl sm:text-3xl text-ink mb-1">
            {project.title}
          </h3>
          <p className={`text-sm font-medium ${accent.text}`}>{project.category}</p>
        </div>

        {/* Body */}
        <div className="p-6 space-y-5">
          {/* Large artwork */}
          <div className="aspect-video rounded-2xl overflow-hidden border-2 border-white">
            <ProjectArtwork projectId={project.id} />
          </div>

          <p className="text-sm text-softink leading-relaxed">{project.description}</p>

          {/* Highlight */}
          <div className={`p-4 rounded-2xl ${accent.bg}`}>
            <div className="flex items-center gap-2 mb-1">
              <Star className={`w-4 h-4 ${accent.text}`} fill="currentColor" />
              <span className={`text-xs font-display font-bold ${accent.text} uppercase tracking-wider`}>Highlight</span>
            </div>
            <p className={`font-display font-semibold ${accent.text}`}>{project.highlight}</p>
          </div>

          {/* Sub-items (Bento Café) */}
          {project.subItems && (
            <div>
              <p className="text-xs font-display font-semibold text-softink uppercase tracking-wider mb-3">
                Project includes
              </p>
              <div className="flex flex-wrap gap-2">
                {project.subItems.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 rounded-full bg-white/70 border border-lilac-100 text-sm font-medium text-ink"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Links */}
          {(project.liveDemo || project.github) && (
            <div className="flex flex-wrap gap-3 pt-2">
              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-pink-400 to-lilac-400 text-white text-sm font-display font-semibold shadow-soft hover:scale-105 transition-transform"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/80 border-2 border-lilac-200 text-ink text-sm font-display font-semibold hover:scale-105 transition-transform"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              )}
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
