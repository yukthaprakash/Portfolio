import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

type Pose = 'wave' | 'sit' | 'paint' | 'point' | 'bye';

type ChibiAvatarProps = {
  pose?: Pose;
  size?: number;
  className?: string;
  showReaction?: boolean;
};

const reactions = {
  wave: 'Let’s build something cute!',
  sit: 'Good ideas need a little space.',
  paint: 'Casting a design spell!',
  point: 'This way to the good stuff!',
  bye: 'Come back with more ideas!',
} as const;

export function ChibiAvatar({ pose = 'wave', size = 200, className = '', showReaction = true }: ChibiAvatarProps) {
  const [isJumping, setIsJumping] = useState(false);
  const [reaction, setReaction] = useState('');

  const handleClick = () => {
    if (!showReaction) return;
    setIsJumping(true);
    setReaction(reactions[pose]);
    window.setTimeout(() => setIsJumping(false), 500);
    window.setTimeout(() => setReaction(''), 2400);
  };

  return (
    <div className={`relative inline-flex ${className}`}>
      <motion.button
        type="button"
        aria-label={`Yuktha mascot, ${pose} pose. Click for a message.`}
        onClick={handleClick}
        animate={isJumping ? { y: [0, -18, 0], rotate: [0, -3, 3, 0] } : { y: [0, -3, 0] }}
        transition={isJumping ? { duration: 0.5 } : { duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}
        className="relative rounded-full outline-none focus-visible:ring-4 focus-visible:ring-pink-200"
      >
        <svg
          width={size}
          height={size * 1.08}
          viewBox="0 0 240 260"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Polished chibi illustration of Yuktha"
        >
          <defs>
            <linearGradient id="yuktha-hair" x1="55" y1="38" x2="195" y2="190" gradientUnits="userSpaceOnUse">
              <stop stopColor="#4A2C50" />
              <stop offset="0.48" stopColor="#241B32" />
              <stop offset="1" stopColor="#120F21" />
            </linearGradient>
            <linearGradient id="yuktha-hair-shine" x1="75" y1="45" x2="160" y2="180" gradientUnits="userSpaceOnUse">
              <stop stopColor="#8E658B" stopOpacity="0.72" />
              <stop offset="1" stopColor="#3D2747" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="yuktha-top" x1="92" y1="150" x2="150" y2="235" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFB6D5" />
              <stop offset="1" stopColor="#C98BDB" />
            </linearGradient>
            <linearGradient id="yuktha-skin" x1="90" y1="76" x2="150" y2="145" gradientUnits="userSpaceOnUse">
              <stop stopColor="#E7B28E" />
              <stop offset="1" stopColor="#B97661" />
            </linearGradient>
            <filter id="yuktha-shadow" x="20" y="20" width="200" height="230" filterUnits="userSpaceOnUse">
              <feDropShadow dx="0" dy="8" stdDeviation="7" floodColor="#7C5A92" floodOpacity="0.15" />
            </filter>
          </defs>

          <ellipse cx="120" cy="246" rx="57" ry="9" fill="#B388FF" opacity="0.18" />

          <g filter="url(#yuktha-shadow)">
            {/* small body and recurring lilac-pink outfit */}
            <path d="M88 166C89 149 103 143 120 143C137 143 151 149 152 166L163 224C164 235 76 235 77 224L88 166Z" fill="url(#yuktha-top)" />
            <path d="M103 150C107 160 133 160 137 150" stroke="#FFF3C4" strokeWidth="5" strokeLinecap="round" />
            <path d="M98 205C111 210 129 210 143 205" stroke="#A96FC5" strokeOpacity="0.4" strokeWidth="3" strokeLinecap="round" />

            {/* neck */}
            <path d="M108 137V158C112 164 128 164 132 158V137H108Z" fill="url(#yuktha-skin)" />

            {/* soft wavy hair silhouette */}
            <path d="M57 94C52 64 71 33 111 29C153 22 188 51 183 91C187 116 177 151 159 173C151 182 139 170 137 148H103C101 170 87 181 77 169C60 148 52 117 57 94Z" fill="url(#yuktha-hair)" />
            <path d="M68 83C69 48 101 31 128 35C160 39 175 61 168 94C162 72 151 56 133 51C111 45 89 54 68 83Z" fill="url(#yuktha-hair-shine)" opacity="0.62" />
            <path d="M65 89C51 111 59 141 74 157" stroke="#6F4A70" strokeOpacity="0.55" strokeWidth="8" strokeLinecap="round" />
            <path d="M174 86C188 108 180 142 163 161" stroke="#6F4A70" strokeOpacity="0.48" strokeWidth="8" strokeLinecap="round" />

            {/* face */}
            <ellipse cx="120" cy="96" rx="58" ry="57" fill="url(#yuktha-skin)" />
            <path d="M65 80C71 53 94 39 121 41C146 39 168 54 175 80C161 67 153 64 143 64C136 73 130 75 122 67C112 77 101 76 94 67C82 70 74 75 65 80Z" fill="url(#yuktha-hair)" />
            <path d="M92 54C101 45 112 44 122 46" stroke="#B48AAA" strokeOpacity="0.45" strokeWidth="4" strokeLinecap="round" />
            <path d="M151 56C158 61 163 69 166 77" stroke="#B48AAA" strokeOpacity="0.35" strokeWidth="3" strokeLinecap="round" />

            {/* flower/bow hair accessory */}
            <g transform="translate(165 54)">
              <path d="M0 11C-18-5-27 5-16 16C-26 27-14 36 1 21C15 37 28 27 17 16C28 4 17-6 0 11Z" fill="#FFF3C4" />
              <circle cx="0" cy="16" r="7" fill="#FF7BAC" />
              <circle cx="0" cy="16" r="3" fill="#FFF9F5" />
            </g>

            {/* blush */}
            <ellipse cx="78" cy="118" rx="13" ry="7" fill="#FF8FAF" opacity="0.34" />
            <ellipse cx="162" cy="118" rx="13" ry="7" fill="#FF8FAF" opacity="0.34" />
            <path d="M70 118L78 116M80 120L87 118M153 118L161 116M163 120L170 118" stroke="#E97798" strokeOpacity="0.45" strokeWidth="2" strokeLinecap="round" />

            {/* big expressive eyes with multiple highlights */}
            <motion.g animate={{ scaleY: [1, 1, 0.08, 1, 1] }} transition={{ duration: 5.5, repeat: Infinity, times: [0, 0.86, 0.89, 0.93, 1] }} style={{ transformOrigin: '94px 103px' }}>
              <ellipse cx="94" cy="103" rx="14" ry="17" fill="#34203F" />
              <ellipse cx="98" cy="99" rx="6" ry="8" fill="#7B4F86" />
              <ellipse cx="98" cy="97" rx="4.5" ry="6" fill="#FFF" />
              <circle cx="90" cy="110" r="2.5" fill="#FFF" opacity="0.9" />
            </motion.g>
            <motion.g animate={{ scaleY: [1, 1, 0.08, 1, 1] }} transition={{ duration: 5.5, repeat: Infinity, times: [0, 0.86, 0.89, 0.93, 1], delay: 0.05 }} style={{ transformOrigin: '146px 103px' }}>
              <ellipse cx="146" cy="103" rx="14" ry="17" fill="#34203F" />
              <ellipse cx="150" cy="99" rx="6" ry="8" fill="#7B4F86" />
              <ellipse cx="150" cy="97" rx="4.5" ry="6" fill="#FFF" />
              <circle cx="142" cy="110" r="2.5" fill="#FFF" opacity="0.9" />
            </motion.g>
            <path d="M79 80C87 76 95 77 101 81M139 81C146 77 154 77 161 81" stroke="#34203F" strokeWidth="3" strokeLinecap="round" />

            {/* tiny nose and smile */}
            <path d="M120 105L117 112L122 112" stroke="#A96D61" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            {pose === 'point' ? <ellipse cx="120" cy="123" rx="7" ry="5" fill="#D96887" /> : <path d="M108 122C115 130 125 130 133 122" stroke="#5D304D" strokeWidth="3" strokeLinecap="round" />}

            {/* pose-specific arms and props */}
            {pose === 'wave' && <WaveArm side="left" />}
            {pose === 'bye' && <WaveArm side="right" />}
            {pose === 'sit' && (
              <>
                <path d="M90 172C75 185 76 201 92 207" stroke="url(#yuktha-skin)" strokeWidth="13" strokeLinecap="round" />
                <path d="M150 172C165 185 164 201 148 207" stroke="url(#yuktha-skin)" strokeWidth="13" strokeLinecap="round" />
                <path d="M84 204C97 194 108 197 120 208C132 197 143 194 156 204C143 224 97 224 84 204Z" fill="url(#yuktha-top)" />
                <rect x="103" y="177" width="34" height="26" rx="3" transform="rotate(-7 103 177)" fill="#FFF9F5" stroke="#B388FF" strokeWidth="2" />
                <path d="M109 185H130M109 191H125" stroke="#FFB6D5" strokeWidth="2" strokeLinecap="round" />
              </>
            )}
            {pose === 'paint' && (
              <>
                <path d="M90 176C77 162 74 147 82 137" stroke="url(#yuktha-skin)" strokeWidth="13" strokeLinecap="round" />
                <path d="M82 138L57 83" stroke="#8B5E3C" strokeWidth="4" strokeLinecap="round" />
                <path d="M52 85C55 72 63 71 68 83C63 80 57 81 52 85Z" fill="#FF7BAC" />
                <circle cx="49" cy="76" r="4" fill="#FF7BAC" opacity="0.7" />
                <circle cx="75" cy="67" r="3" fill="#B388FF" opacity="0.7" />
              </>
            )}
            {pose === 'point' && (
              <>
                <path d="M151 177C166 158 177 145 190 132" stroke="url(#yuktha-skin)" strokeWidth="13" strokeLinecap="round" />
                <path d="M187 129L204 126" stroke="url(#yuktha-skin)" strokeWidth="8" strokeLinecap="round" />
                <path d="M204 126L215 118M204 126L215 129M204 126L213 136" stroke="#FF7BAC" strokeWidth="3" strokeLinecap="round" />
                <path d="M207 105L209 111L215 113L209 115L207 121L205 115L199 113L205 111Z" fill="#FFF3C4" />
              </>
            )}
            {pose !== 'sit' && pose !== 'paint' && pose !== 'point' && pose !== 'wave' && pose !== 'bye' && null}
          </g>
        </svg>
      </motion.button>

      <AnimatePresence>
        {reaction && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.85 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.9 }}
            className="absolute left-1/2 bottom-full z-20 mb-2 -translate-x-1/2 whitespace-nowrap rounded-2xl rounded-bl-md bg-white px-3 py-2 text-[11px] font-display font-semibold text-ink shadow-soft"
          >
            {reaction}
            <span className="absolute -bottom-1 left-4 h-3 w-3 rotate-45 bg-white" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function WaveArm({ side }: { side: 'left' | 'right' }) {
  const mirrored = side === 'right';
  return (
    <motion.g
      style={{ transformOrigin: mirrored ? '154px 175px' : '86px 175px' }}
      animate={{ rotate: mirrored ? [0, -12, 6, -12, 0] : [0, 12, -6, 12, 0] }}
      transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
    >
      <path d={mirrored ? 'M151 175C168 153 175 134 178 117' : 'M89 175C72 153 65 134 62 117'} stroke="url(#yuktha-skin)" strokeWidth="13" strokeLinecap="round" />
      <circle cx={mirrored ? 180 : 60} cy="113" r="9" fill="url(#yuktha-skin)" />
      <path d={mirrored ? 'M177 105L174 94M181 104L181 91M185 106L188 95' : 'M63 105L66 94M59 104L59 91M55 106L52 95'} stroke="#D89979" strokeWidth="3" strokeLinecap="round" />
    </motion.g>
  );
}

export type { Pose };
