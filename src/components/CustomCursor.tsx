import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only on fine pointers (desktop)
    if (!window.matchMedia('(pointer: fine)').matches) return;

    let targetX = -100;
    let targetY = -100;
    let currentX = -100;
    let currentY = -100;
    let animId: number;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      setPos({ x: targetX, y: targetY });
      if (!isVisible) setIsVisible(true);

      // Check if hovering interactive element
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest('a, button, [data-cursor], input, select, textarea');
      if (interactive) {
        setIsHovered(true);
        const text = interactive.getAttribute('data-cursor') || '';
        setCursorText(text);
      } else {
        setIsHovered(false);
        setCursorText('');
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    const animateTrailing = () => {
      // Smooth interpolation
      currentX += (targetX - currentX) * 0.18;
      currentY += (targetY - currentY) * 0.18;
      setTrailingPos({ x: currentX, y: currentY });
      animId = requestAnimationFrame(animateTrailing);
    };
    animId = requestAnimationFrame(animateTrailing);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animId);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="custom-cursor-element pointer-events-none fixed inset-0 z-50 overflow-hidden" aria-hidden="true">
      {/* Center pinpoint */}
      <div
        className={`fixed top-0 left-0 w-2 h-2 rounded-full bg-champagne transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-150 ${
          cursorText ? 'opacity-0' : 'opacity-100'
        }`}
        style={{ transform: `translate3d(${pos.x}px, ${pos.y}px, 0)` }}
      />

      {/* Trailing Luxury Aura Ring */}
      <div
        className={`fixed top-0 left-0 rounded-full border transition-all duration-200 ease-out flex items-center justify-center ${
          cursorText
            ? 'w-24 h-24 bg-charcoal/90 border-champagne text-champagne text-[10px] uppercase font-semibold tracking-widest shadow-[0_0_25px_rgba(214,183,121,0.35)]'
            : isHovered
            ? 'w-12 h-12 bg-champagne/15 border-champagne shadow-[0_0_15px_rgba(214,183,121,0.25)]'
            : 'w-8 h-8 border-champagne/50'
        }`}
        style={{
          transform: `translate3d(${trailingPos.x}px, ${trailingPos.y}px, 0) translate(-50%, -50%)`
        }}
      >
        {cursorText && (
          <span className="text-center font-sans tracking-wider px-2 scale-90">
            {cursorText}
          </span>
        )}
      </div>
    </div>
  );
};

