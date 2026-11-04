import React, { useEffect, useRef, useState } from 'react';
import { Calendar, ChevronDown, ChevronLeft, ChevronRight, Sparkles, MapPin, Award } from 'lucide-react';
import { PERSONAL_DETAILS } from '../data/portfolioData';

interface HeroProps {
  onOpenBooking: () => void;
}

interface HeroSlide {
  image: string;
  title: string;
  category: string;
  tagline: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    image: './images/hero-stage.jpg',
    title: 'The Royal Throne Stage',
    category: 'Luxury Celebrity Galas',
    tagline: 'Flowing scarlet red gown & prime stage emcee authority'
  },
  {
    image: './images/stage-full-vertical.jpg',
    title: 'Concert Stage & Black-Tie Summit',
    category: 'National Conclaves & Galas',
    tagline: 'Sequined stage elegance with concert truss lighting'
  },
  {
    image: './images/dandiya-garba-night.jpg',
    title: 'High-Energy Mega Cultural Fest',
    category: 'Cultural Fests & Dandiya',
    tagline: 'Electrifying thousands with live audience banter'
  }
];

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const heroRef = useRef<HTMLElement | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  // Mouse Parallax
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!window.matchMedia('(pointer: fine)').matches) return;
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 20; // max 20px tilt
      const y = (e.clientY / innerHeight - 0.5) * 20;
      setMouseOffset({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Automatic Background Slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % HERO_SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const handleExploreClick = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-[100svh] w-full flex items-center justify-center overflow-hidden bg-richblack pt-24 pb-16 select-none"
    >
      {/* Background Stage Image Slider with Ken Burns & Parallax */}
      <div
        className="absolute inset-0 z-0 overflow-hidden"
        style={{
          transform: `translate3d(${mouseOffset.x * 0.4}px, ${mouseOffset.y * 0.4}px, 0)`,
          transition: 'transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)'
        }}
      >
        {HERO_SLIDES.map((slide, idx) => {
          const isActive = idx === currentSlide;
          return (
            <div
              key={slide.image}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-85 sm:opacity-90 z-10' : 'opacity-0 z-0'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                fetchPriority={idx === 0 ? 'high' : 'low'}
                className={`w-full h-full object-cover object-top transform transition-transform duration-[8000ms] ease-out ${
                  isActive ? 'scale-108' : 'scale-100'
                }`}
              />
            </div>
          );
        })}
        
        {/* Refined Cinematic Overlays — Vivid Stage Photo Visibility with Luxury Depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-richblack via-richblack/40 to-black/25 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-richblack/60 via-transparent to-richblack/60 z-10" />
        <div className="absolute inset-0 bg-dark-vignette opacity-50 z-10 pointer-events-none" />
        
        {/* Burgundy ambient glow connecting with logo */}
        <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] rounded-full bg-burgundy/20 blur-[120px] pointer-events-none z-10" />
        <div className="absolute bottom-10 left-10 w-[400px] h-[400px] rounded-full bg-champagne/10 blur-[100px] pointer-events-none z-10" />
      </div>

      {/* Manual Slide Navigation Arrows on Sides */}
      <button
        onClick={prevSlide}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/40 hover:bg-champagne hover:text-richblack text-champagne border border-champagne/30 backdrop-blur-md hidden sm:flex items-center justify-center transition-all duration-300 transform hover:scale-105"
        aria-label="Previous Hero Slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/40 hover:bg-champagne hover:text-richblack text-champagne border border-champagne/30 backdrop-blur-md hidden sm:flex items-center justify-center transition-all duration-300 transform hover:scale-105"
        aria-label="Next Hero Slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Hero Content Container */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Live Event Slide Tracker Pill */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-richblack/85 border border-champagne/35 backdrop-blur-md mb-6 shadow-[0_0_20px_rgba(214,183,121,0.2)]">
          <span className="w-2 h-2 rounded-full bg-champagne animate-ping" />
          <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-champagne-light font-medium flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-champagne" />
            <span>Event Spotlight: {HERO_SLIDES[currentSlide].category}</span>
          </span>
        </div>

        {/* Eyebrow Text */}
        <div className="flex items-center gap-3 sm:gap-4 mb-4">
          <span className="h-[1px] w-8 sm:w-16 bg-gradient-to-r from-transparent to-champagne/80" />
          <h2 className="text-xs sm:text-sm uppercase tracking-[0.4em] text-champagne font-light">
            Anchor &bull; Emcee &bull; Voice Artist
          </h2>
          <span className="h-[1px] w-8 sm:w-16 bg-gradient-to-l from-transparent to-champagne/80" />
        </div>

        {/* Giant Editorial Headline */}
        <h1 className="font-editorial text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-[0.04em] font-normal text-white uppercase leading-[0.95] mb-4">
          <span className="block drop-shadow-[0_10px_35px_rgba(0,0,0,0.8)]">Nishi</span>
          <span className="block text-gold-gradient italic font-light drop-shadow-[0_10px_45px_rgba(214,183,121,0.25)]">
            Rawat
          </span>
        </h1>

        {/* Supporting Heading */}
        <p className="font-editorial text-xl sm:text-2xl md:text-3xl italic tracking-wide text-ivory/90 font-light max-w-3xl mb-4">
          &ldquo;{PERSONAL_DETAILS.tagline}.&rdquo;
        </p>

        {/* Description */}
        <p className="text-sm sm:text-base md:text-lg text-ivory/70 font-light max-w-2xl mb-8 leading-relaxed">
          {PERSONAL_DETAILS.subTagline}
        </p>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-10 w-full sm:w-auto">
          {/* Primary CTA: Book Nishi */}
          <button
            onClick={onOpenBooking}
            data-cursor="BOOK NISHI"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-champagne via-[#EAD7A6] to-champagne text-richblack font-bold uppercase tracking-[0.2em] text-xs shadow-[0_0_30px_rgba(214,183,121,0.35)] hover:shadow-[0_0_45px_rgba(214,183,121,0.6)] transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            <span>BOOK NISHI</span>
            <Calendar className="w-4 h-4 transition-transform group-hover:scale-110" />
          </button>

          {/* Secondary CTA: Explore My Journey */}
          <button
            onClick={handleExploreClick}
            data-cursor="EXPLORE"
            className="w-full sm:w-auto px-8 py-4 rounded-full border border-champagne/40 hover:border-champagne bg-richblack/60 hover:bg-champagne/10 text-ivory hover:text-champagne-light uppercase tracking-[0.2em] text-xs transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-2"
          >
            <span>EXPLORE MY JOURNEY</span>
            <ChevronDown className="w-4 h-4 text-champagne" />
          </button>
        </div>

        {/* Slider Indicator Tabs & Progress */}
        <div className="flex items-center gap-2.5 mb-8">
          {HERO_SLIDES.map((slide, idx) => {
            const isActive = idx === currentSlide;
            return (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`relative h-2 rounded-full transition-all duration-500 overflow-hidden ${
                  isActive ? 'w-10 sm:w-14 bg-champagne' : 'w-3 bg-white/20 hover:bg-white/40'
                }`}
                title={slide.title}
                aria-label={`Slide ${idx + 1}: ${slide.title}`}
              />
            );
          })}
        </div>

        {/* Fast Credibility Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 pt-6 border-t border-champagne/15 w-full max-w-3xl text-center">
          <div className="flex flex-col items-center">
            <span className="font-editorial text-2xl sm:text-3xl text-champagne font-semibold">2021</span>
            <span className="text-[10px] uppercase tracking-wider text-ivory/60 mt-0.5">Journey Began (Age 18)</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-editorial text-2xl sm:text-3xl text-champagne font-semibold">10+</span>
            <span className="text-[10px] uppercase tracking-wider text-ivory/60 mt-0.5">Operating Hubs</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-editorial text-2xl sm:text-3xl text-champagne font-semibold">3-in-1</span>
            <span className="text-[10px] uppercase tracking-wider text-ivory/60 mt-0.5">Anchor &bull; Voice &bull; Journalist</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-editorial text-2xl sm:text-3xl text-champagne font-semibold">100%</span>
            <span className="text-[10px] uppercase tracking-wider text-ivory/60 mt-0.5">Original Stage Presence</span>
          </div>
        </div>

      </div>

      {/* Decorative Golden Bottom Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-champagne/30 to-transparent z-20" />
    </section>
  );
};
