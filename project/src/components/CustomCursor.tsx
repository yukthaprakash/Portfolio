import { useEffect, useState } from 'react';

/**
 * A cute custom star sparkle cursor for desktop.
 * Falls back to default cursor on touch devices.
 */
export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isActive, setIsActive] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on devices with fine pointer (desktop)
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    document.body.classList.add('custom-cursor-active');
    setIsActive(true);

    const move = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const leave = () => setIsVisible(false);
    const enter = () => setIsVisible(true);

    window.addEventListener('mousemove', move);
    document.addEventListener('mouseleave', leave);
    document.addEventListener('mouseenter', enter);

    return () => {
      document.body.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseleave', leave);
      document.removeEventListener('mouseenter', enter);
    };
  }, [isVisible]);

  if (!isActive) return null;

  return (
    <div
      className="pointer-events-none fixed z-[9999] transition-opacity duration-200"
      style={{
        left: position.x,
        top: position.y,
        opacity: isVisible ? 1 : 0,
        transform: 'translate(-50%, -50%)',
      }}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="animate-spin" style={{ animationDuration: '3s' }}>
        <path
          d="M12 2 L14 9 L21 12 L14 15 L12 22 L10 15 L3 12 L10 9 Z"
          fill="#FF7BAC"
          opacity="0.8"
        />
        <path d="M12 2 L14 9 L21 12 L14 15 L12 22 L10 15 L3 12 L10 9 Z" stroke="#B388FF" strokeWidth="0.5" />
      </svg>
    </div>
  );
}
