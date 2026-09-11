import { Gamepad2, Heart } from 'lucide-react';
import { socialLinks } from '@/data/content';

export function Footer() {
  return (
    <footer className="relative py-10 px-4 border-t border-lilac-100/50">
      <div className="max-w-4xl mx-auto text-center space-y-4">
        {/* Logo */}
        <div className="flex items-center justify-center gap-2">
          <Gamepad2 className="w-5 h-5 text-pink-400" />
          <span className="font-display font-bold text-lg text-ink">Yuktha P</span>
        </div>

        {/* Tagline */}
        <p className="text-sm text-softink font-medium">
          UI/UX Designer · Frontend Developer · Creative Explorer
        </p>

        {/* Mini social links */}
        <div className="flex items-center justify-center gap-2">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="w-9 h-9 rounded-xl bg-white/50 flex items-center justify-center hover:bg-pink-100/50 transition-colors"
                aria-label={link.label}
              >
                <Icon className="w-4 h-4 text-softink" />
              </a>
            );
          })}
        </div>

        {/* Designed with love */}
        <p className="text-sm text-softink flex items-center justify-center gap-1.5 pt-2">
          Designed with curiosity. Built with code.
          <Heart className="w-3.5 h-3.5 text-pink-400" fill="currentColor" />
        </p>

        {/* Copyright */}
        <p className="text-xs text-softink/60 pt-2">© 2026 Yuktha P</p>
      </div>
    </footer>
  );
}
