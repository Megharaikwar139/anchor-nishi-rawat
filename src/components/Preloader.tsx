import React, { useEffect, useState } from 'react';
import { NRLogo } from './NRLogo';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState<number>(1); // 1: Black screen, 2: Logo reveal, 3: Spotlight & Title, 4: Transition out
  const [isSkipped, setIsSkipped] = useState(false);

  useEffect(() => {
    // Check if user already saw the preloader in this session
    const hasSeen = sessionStorage.getItem('nr_preloader_seen');
    if (hasSeen) {
      onComplete();
      return;
    }

    const t1 = setTimeout(() => setPhase(2), 400);   // Logo outline reveal
    const t2 = setTimeout(() => setPhase(3), 1300);  // Spotlight beam + text
    const t3 = setTimeout(() => setPhase(4), 2600);  // Curtain wipe
    const t4 = setTimeout(() => {
      sessionStorage.setItem('nr_preloader_seen', 'true');
      onComplete();
    }, 3300);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [onComplete]);

  const handleSkip = () => {
    setIsSkipped(true);
    sessionStorage.setItem('nr_preloader_seen', 'true');
    setTimeout(() => {
      onComplete();
    }, 200);
  };

  if (isSkipped) return null;

  return (
    <aside
      aria-label="Loading Experience"
      className={`fixed inset-0 z-50 flex items-center justify-center bg-richblack-pure transition-all duration-1000 ease-in-out select-none ${
        phase === 4 ? 'opacity-0 -translate-y-full pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Cinematic Spotlight Beam */}
      <div
        className={`pointer-events-none absolute inset-0 transition-opacity duration-1000 ${
          phase >= 3 ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          background: 'radial-gradient(circle at 50% 45%, rgba(214, 183, 121, 0.18) 0%, rgba(100, 28, 50, 0.12) 35%, transparent 70%)'
        }}
      />

      {/* Subtle Gold Rays */}
      <div
        className={`pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-b from-champagne/10 via-transparent to-transparent blur-3xl transition-transform duration-1000 ${
          phase >= 3 ? 'scale-100 opacity-60' : 'scale-50 opacity-0'
        }`}
      />

      <div className="relative z-10 flex flex-col items-center justify-center px-4 text-center">
        {/* Animated NR Logo Badge */}
        <div
          className={`transform transition-all duration-1000 ease-out ${
            phase >= 2
              ? 'scale-100 opacity-100 translate-y-0'
              : 'scale-90 opacity-0 translate-y-4'
          }`}
        >
          <NRLogo size="xl" variant="badge" />
        </div>

        {/* Anchor Nishi Rawat Title with staggered reveal */}
        <div className="mt-8 overflow-hidden">
          <h1
            className={`font-editorial text-2xl sm:text-3xl lg:text-4xl tracking-[0.3em] uppercase text-gold-gradient transition-all duration-1000 delay-200 ${
              phase >= 3 ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
            }`}
          >
            Anchor Nishi Rawat
          </h1>
        </div>

        {/* Subtitle tag */}
        <div className="mt-3 overflow-hidden">
          <p
            className={`font-sans text-xs sm:text-sm tracking-[0.35em] uppercase text-champagne/80 font-light transition-all duration-1000 delay-300 ${
              phase >= 3 ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
            }`}
          >
            Anchor &bull; Emcee &bull; Voice Artist
          </p>
        </div>

        {/* Progress Line */}
        <div className="mt-8 w-40 h-[1px] bg-white/10 relative overflow-hidden">
          <div
            className={`absolute top-0 left-0 h-full bg-gradient-to-r from-transparent via-champagne to-transparent transition-all duration-1500 ease-out ${
              phase >= 2 ? 'w-full translate-x-0' : 'w-0 -translate-x-full'
            }`}
          />
        </div>
      </div>

      {/* Discreet Skip Button */}
      <button
        onClick={handleSkip}
        className="absolute bottom-8 right-8 text-[11px] tracking-widest uppercase text-champagne/60 hover:text-champagne transition-colors duration-200 border border-champagne/20 hover:border-champagne/50 px-4 py-2 rounded-full backdrop-blur-sm"
      >
        Skip Intro
      </button>
    </aside>
  );
};

