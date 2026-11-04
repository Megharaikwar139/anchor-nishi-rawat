import React, { useState, useEffect, useRef } from 'react';
import { Calendar, Radio, Sparkles, CheckCircle2, Award, ChevronLeft, ChevronRight, Compass } from 'lucide-react';
import { TIMELINE_DATA } from '../data/portfolioData';

export const JourneyTimeline: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Track scroll position inside the pinned container
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalScrollable = containerRef.current.offsetHeight - window.innerHeight;
      if (totalScrollable <= 0) return;

      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / totalScrollable));
      setScrollProgress(progress);

      // 3 milestones: split progress into 3 parts
      const step = Math.min(
        TIMELINE_DATA.length - 1,
        Math.floor(progress * TIMELINE_DATA.length)
      );
      setActiveStep(step);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Jump to specific milestone step
  const goToStep = (idx: number) => {
    if (!containerRef.current) return;
    const totalScrollable = containerRef.current.offsetHeight - window.innerHeight;
    const targetScroll = containerRef.current.offsetTop + (idx / (TIMELINE_DATA.length - 1)) * totalScrollable;
    window.scrollTo({ top: targetScroll, behavior: 'smooth' });
  };

  return (
    <section
      id="journey"
      ref={containerRef}
      className="relative bg-richblack-pure select-none"
      style={{ height: '300vh' }}
    >
      {/* Background Ambience */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-b from-burgundy/15 via-champagne/10 to-transparent rounded-full blur-[160px] pointer-events-none" />

      {/* Pinned Sticky 3D Stage Viewport */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between py-8 sm:py-12 px-4 sm:px-6 lg:px-12 overflow-hidden z-20">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto pt-4 sm:pt-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-champagne/10 border border-champagne/30 mb-2 sm:mb-3">
            <Compass className="w-3.5 h-3.5 text-champagne" />
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-champagne-light font-medium">
              Section 04 &bull; 3D Interactive Trajectory
            </span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl text-white font-normal uppercase tracking-tight leading-tight">
            EVERY STAGE <span className="italic text-gold-gradient font-light">HAS A STORY</span>.
          </h2>

          {/* Interactive Milestone Indicator Navigation */}
          <div className="mt-4 sm:mt-6 inline-flex items-center gap-2 sm:gap-4 p-1.5 rounded-full bg-richblack/90 backdrop-blur-md border border-champagne/30 shadow-xl">
            {TIMELINE_DATA.map((milestone, idx) => {
              const isActive = idx === activeStep;
              return (
                <button
                  key={milestone.year}
                  onClick={() => goToStep(idx)}
                  className={`flex items-center gap-2 px-3 sm:px-5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-500 ${
                    isActive
                      ? 'bg-gradient-to-r from-champagne to-champagne-light text-richblack shadow-[0_0_15px_rgba(214,183,121,0.4)] scale-105'
                      : 'text-ivory/60 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-current" />
                  <span>{milestone.year}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 3D Card Stage Stack Container */}
        <div className="relative w-full max-w-5xl mx-auto my-auto py-4" style={{ perspective: '1400px' }}>
          <div className="relative w-full h-[400px] sm:h-[460px] md:h-[480px]">
            {TIMELINE_DATA.map((milestone, idx) => {
              const offset = idx - activeStep;
              const isCurrent = offset === 0;
              const isPast = offset < 0;
              const isFuture = offset > 0;

              // Compute 3D transforms for stacking cards effect
              let transformStyle = '';
              let opacityClass = '';
              let zIndex = 10;

              if (isCurrent) {
                transformStyle = 'translate3d(0, 0, 0) scale(1) rotateX(0deg)';
                opacityClass = 'opacity-100 pointer-events-auto';
                zIndex = 30;
              } else if (isPast) {
                // Card pushed back and floated up
                transformStyle = `translate3d(0, -${Math.abs(offset) * 35}px, -${Math.abs(offset) * 120}px) scale(${1 - Math.abs(offset) * 0.08}) rotateX(${Math.abs(offset) * 8}deg)`;
                opacityClass = 'opacity-0 pointer-events-none';
                zIndex = 10 - Math.abs(offset);
              } else {
                // Future card waiting underneath
                transformStyle = `translate3d(0, ${offset * 35}px, -${offset * 80}px) scale(${1 - offset * 0.06}) rotateX(-${offset * 6}deg)`;
                opacityClass = 'opacity-20 pointer-events-none blur-[1px]';
                zIndex = 20 - offset;
              }

              return (
                <div
                  key={milestone.year}
                  style={{
                    transform: transformStyle,
                    transformStyle: 'preserve-3d',
                    zIndex,
                    transition: 'all 0.7s cubic-bezier(0.2, 0.8, 0.2, 1)'
                  }}
                  className={`absolute inset-0 rounded-3xl overflow-hidden border-2 border-champagne/40 bg-richblack-surface/95 backdrop-blur-xl shadow-[0_25px_60px_rgba(0,0,0,0.9)] p-6 sm:p-8 md:p-10 ${opacityClass}`}
                >
                  {/* Subtle Card Glow */}
                  <div className="absolute top-0 right-0 w-80 h-80 bg-champagne/5 rounded-full blur-3xl pointer-events-none" />
                  
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 h-full items-center relative z-10">
                    
                    {/* Left: Original Verified Stage Photograph */}
                    <div className="md:col-span-5 h-[180px] sm:h-[240px] md:h-full relative rounded-2xl overflow-hidden border border-champagne/30 shadow-2xl group/img">
                      <img
                        src={milestone.image}
                        alt={milestone.title}
                        className="w-full h-full object-cover object-top transform transition-transform duration-700 group-hover/img:scale-108"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                      
                      {/* Floating Inset Badge on Photo */}
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                        <span className="text-[10px] uppercase tracking-widest text-champagne font-semibold px-2.5 py-1 rounded bg-black/75 backdrop-blur-md border border-champagne/30">
                          {milestone.role}
                        </span>
                        <span className="text-[10px] text-ivory/70 px-2 py-0.5 rounded bg-black/60">
                          Verified Record
                        </span>
                      </div>
                    </div>

                    {/* Right: Milestone Story & Highlights */}
                    <div className="md:col-span-7 flex flex-col justify-center h-full">
                      
                      {/* Header row with Year & Tag */}
                      <div className="flex items-center justify-between gap-4 mb-2">
                        <span className="font-editorial text-4xl sm:text-5xl md:text-6xl text-gold-gradient font-bold tracking-tight">
                          {milestone.year}
                        </span>
                        <span className="text-[10px] uppercase tracking-[0.2em] px-3 py-1 rounded-full bg-burgundy/70 border border-champagne/30 text-champagne font-semibold shadow-md">
                          {milestone.tag}
                        </span>
                      </div>

                      <div className="text-xs uppercase tracking-[0.25em] text-champagne-light font-medium mb-3">
                        {milestone.period}
                      </div>

                      <h3 className="font-editorial text-2xl sm:text-3xl text-white font-medium mb-3 leading-snug">
                        {milestone.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-ivory/80 leading-relaxed font-light mb-5">
                        {milestone.description}
                      </p>

                      {/* Verified Highlights */}
                      <ul className="space-y-2 pt-4 border-t border-champagne/20 text-xs text-ivory/75">
                        {milestone.highlights.map((item, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-champagne shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                    </div>

                  </div>

                  {/* Corner Step Counter */}
                  <div className="absolute top-4 right-4 sm:top-6 sm:right-6 text-[10px] uppercase tracking-widest font-mono text-champagne/50">
                    0{idx + 1} / 0{TIMELINE_DATA.length}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Pinned Scroll Prompt & Controls */}
        <div className="flex items-center justify-between max-w-5xl mx-auto w-full pt-2 pb-2 text-xs text-ivory/60 border-t border-champagne/15">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-champagne animate-ping" />
            <span className="tracking-wider uppercase text-[10px] text-champagne">
              Scroll down to navigate cards ({activeStep + 1} of {TIMELINE_DATA.length})
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => goToStep(Math.max(0, activeStep - 1))}
              disabled={activeStep === 0}
              className={`p-2 rounded-full border border-champagne/30 transition-all ${
                activeStep === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-champagne hover:text-richblack text-champagne'
              }`}
              aria-label="Previous milestone"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => goToStep(Math.min(TIMELINE_DATA.length - 1, activeStep + 1))}
              disabled={activeStep === TIMELINE_DATA.length - 1}
              className={`p-2 rounded-full border border-champagne/30 transition-all ${
                activeStep === TIMELINE_DATA.length - 1 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-champagne hover:text-richblack text-champagne'
              }`}
              aria-label="Next milestone"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
