import { useMemo } from 'react';

/**
 * Soft floating background elements: clouds, stars, blobs, sparkles.
 * Pure CSS animations, lightweight. Fixed position behind all content.
 */
export function FloatingBackground() {
  const elements = useMemo(() => {
    const clouds = Array.from({ length: 5 }).map((_, i) => ({
      id: `cloud-${i}`,
      top: `${5 + i * 18}%`,
      duration: `${25 + i * 8}s`,
      delay: `${i * 4}s`,
      scale: 0.6 + i * 0.15,
    }));

    const stars = Array.from({ length: 12 }).map((_, i) => ({
      id: `star-${i}`,
      top: `${Math.random() * 90}%`,
      left: `${Math.random() * 90}%`,
      delay: `${Math.random() * 3}s`,
      duration: `${1.5 + Math.random() * 2}s`,
      size: 8 + Math.random() * 8,
    }));

    const blobs = Array.from({ length: 4 }).map((_, i) => ({
      id: `blob-${i}`,
      top: `${10 + i * 22}%`,
      left: `${i % 2 === 0 ? 3 : 85}%`,
      delay: `${i * 2}s`,
      color: ['#FFD6E8', '#E6D6FF', '#D6F0FF', '#FFF3C4'][i],
    }));

    return { clouds, stars, blobs };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Big soft blobs */}
      {elements.blobs.map((blob) => (
        <div
          key={blob.id}
          className="absolute rounded-full blur-3xl opacity-30 animate-floatSlow"
          style={{
            top: blob.top,
            left: blob.left,
            width: '300px',
            height: '300px',
            background: blob.color,
            animationDelay: blob.delay,
          }}
        />
      ))}

      {/* Drifting clouds */}
      {elements.clouds.map((cloud) => (
        <div
          key={cloud.id}
          className="absolute animate-drift"
          style={{ top: cloud.top, animationDuration: cloud.duration, animationDelay: cloud.delay }}
        >
          <svg width={120 * cloud.scale} height={60 * cloud.scale} viewBox="0 0 120 60" fill="none">
            <ellipse cx="30" cy="35" rx="25" ry="20" fill="white" opacity="0.5" />
            <ellipse cx="55" cy="28" rx="28" ry="22" fill="white" opacity="0.5" />
            <ellipse cx="85" cy="35" rx="25" ry="20" fill="white" opacity="0.5" />
            <ellipse cx="60" cy="40" rx="35" ry="15" fill="white" opacity="0.5" />
          </svg>
        </div>
      ))}

      {/* Twinkling stars */}
      {elements.stars.map((star) => (
        <div
          key={star.id}
          className="absolute animate-sparkle"
          style={{
            top: star.top,
            left: star.left,
            animationDelay: star.delay,
            animationDuration: star.duration,
          }}
        >
          <svg width={star.size} height={star.size} viewBox="0 0 16 16" fill="none">
            <path
              d="M8 1 L9.5 6 L14.5 8 L9.5 10 L8 15 L6.5 10 L1.5 8 L6.5 6 Z"
              fill="#FFD6E8"
              opacity="0.7"
            />
          </svg>
        </div>
      ))}
    </div>
  );
}
