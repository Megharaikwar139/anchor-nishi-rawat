import React, { useState, useEffect } from 'react';
import { Quote, Sparkles, Mic2, Radio, HeartHandshake, Award, ChevronRight } from 'lucide-react';

interface AboutProps {
  onOpenBooking: () => void;
}

interface Persona {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  image: string;
  objectPosition: string;
  description: string;
}

const PERSONAS: Persona[] = [
  {
    id: 'stage',
    badge: 'ORIGINAL STAGE IDENTITY',
    title: 'Commanding Stage Presence',
    subtitle: 'Bhopal • Pan-India Host',
    image: './images/about-full-standing.jpg',
    objectPosition: 'center 10%',
    description: 'Natural command over audiences with witty spontaneity, humor, and commanding stage poise.',
  },
  {
    id: 'cultural',
    badge: 'LIVE CROWD CELEBRATION',
    title: 'High-Energy Festive Emcee',
    subtitle: 'Mega Cultural Fests & Dandiya Nights',
    image: './images/dandiya-garba-night.jpg',
    objectPosition: 'center top',
    description: 'Electrifying thousands with lively audience banter, traditional warmth, and infectious energy.',
  },
  {
    id: 'gala',
    badge: 'BLACK-TIE CONCLAVES',
    title: 'Red Carpet & Corporate Grace',
    subtitle: 'Conclaves • Summits • Award Galas',
    image: './images/stage-full-vertical.jpg',
    objectPosition: 'center 20%',
    description: 'Seamless corporate protocol, distinguished guest introductions, and articulate bilingual cadence.',
  },
  {
    id: 'wedding',
    badge: 'DESTINATION CELEBRATIONS',
    title: 'Radiant Varmala & Sangeet',
    subtitle: 'Luxury Destination Weddings',
    image: './images/wedding-festive-red.jpg',
    objectPosition: 'center top',
    description: 'Infusing royal ceremonies, Sangeet galas, and Baraat celebrations with warmth, emotion, and joy.',
  },
];

export const About: React.FC<AboutProps> = ({ onOpenBooking }) => {
  const [activePersonaIndex, setActivePersonaIndex] = useState(0);
  const activePersona = PERSONAS[activePersonaIndex];
  const nextPersonaIndex = (activePersonaIndex + 1) % PERSONAS.length;
  const nextPersona = PERSONAS[nextPersonaIndex];

  // Auto-slide images every 3.8 seconds as requested
  useEffect(() => {
    const timer = setInterval(() => {
      setActivePersonaIndex(prev => (prev + 1) % PERSONAS.length);
    }, 3800);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="about" className="relative py-24 lg:py-32 bg-richblack overflow-hidden select-none">
      {/* Background Subtle Luxury Patterns */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-burgundy/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-champagne/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Pre-title */}
        <div className="flex items-center gap-3 mb-3">
          <span className="w-8 h-[1px] bg-champagne" />
          <span className="text-xs uppercase tracking-[0.3em] text-champagne font-medium">
            Section 03 &bull; Biography
          </span>
        </div>

        {/* Section Heading */}
        <div className="mb-12 lg:mb-16">
          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-normal uppercase tracking-tight">
            THE WOMAN <span className="italic text-gold-gradient font-light">BEHIND THE MIC</span>.
          </h2>
          <div className="mt-3 flex items-center gap-2 flex-wrap">
            <span className="text-[11px] uppercase tracking-[0.3em] text-champagne/90 font-semibold px-3 py-1 rounded bg-champagne/10 border border-champagne/20">
              ANCHOR | EMCEE | VOICE ARTIST | JOURNALIST
            </span>
          </div>
        </div>

        {/* Asymmetric Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Clean Auto-Sliding Stage Portrait Card (Tabs Removed) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Decorative Gold Frame with Offset */}
              <div className="absolute -inset-4 rounded-2xl border border-champagne/30 transform -rotate-1 pointer-events-none transition-transform duration-500 hover:rotate-0" />
              <div className="absolute -inset-2 rounded-xl border border-burgundy/40 transform rotate-1 pointer-events-none" />

              {/* Primary Stage Portrait Card with Auto-Slide */}
              <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.85)] border border-champagne/35 group bg-charcoal">
                
                {/* Auto-sliding image stack */}
                <div className="relative w-full h-[500px] sm:h-[560px] overflow-hidden">
                  {PERSONAS.map((persona, idx) => {
                    const isActive = idx === activePersonaIndex;
                    return (
                      <div
                        key={persona.id}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                          isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
                        }`}
                      >
                        <img
                          src={persona.image}
                          alt={`Anchor Nishi Rawat - ${persona.title}`}
                          loading={idx === 0 ? 'eager' : 'lazy'}
                          style={{ objectPosition: persona.objectPosition }}
                          className={`w-full h-full object-cover transform transition-transform duration-[6000ms] ease-out ${
                            isActive ? 'scale-105' : 'scale-100'
                          }`}
                        />
                      </div>
                    );
                  })}
                </div>
                
                {/* Subtle dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-richblack-pure via-richblack-pure/30 to-transparent opacity-90 pointer-events-none z-10" />

                {/* Slide Progress Indicator Dots (Subtle Top-Right) */}
                <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-champagne/30">
                  {PERSONAS.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActivePersonaIndex(idx)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        idx === activePersonaIndex ? 'w-5 bg-champagne' : 'w-1.5 bg-white/40 hover:bg-white/70'
                      }`}
                      aria-label={`Show avatar ${idx + 1}`}
                    />
                  ))}
                </div>

                {/* Floating Inset Badge: Real Stage Details Automatically Synchronized */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-richblack/90 backdrop-blur-md border border-champagne/30 shadow-xl z-20">
                  <div className="flex items-center justify-between gap-3">
                    <div className="min-w-0">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-champagne font-semibold truncate">
                        {activePersona.badge}
                      </p>
                      <p className="font-editorial text-lg text-white font-medium truncate">
                        {activePersona.title}
                      </p>
                      <p className="text-xs text-ivory/70 truncate">
                        {activePersona.subtitle}
                      </p>
                    </div>

                    {/* Quick Manual Next Button */}
                    <button
                      onClick={() => setActivePersonaIndex(nextPersonaIndex)}
                      title={`Next Look: ${nextPersona.title}`}
                      className="flex-shrink-0 flex items-center gap-1.5 pl-2 border-l border-champagne/20 group/btn"
                    >
                      <div className="relative w-10 h-10 rounded-full overflow-hidden border border-champagne/60 group-hover/btn:border-champagne transition-all">
                        <img
                          src={nextPersona.image}
                          alt={nextPersona.title}
                          style={{ objectPosition: nextPersona.objectPosition }}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <ChevronRight className="w-4 h-4 text-champagne group-hover/btn:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Animated Handwritten Signature */}
              <div className="mt-8 text-center sm:text-left flex items-center justify-center sm:justify-start gap-4">
                <div className="font-script text-4xl sm:text-5xl text-champagne-light tracking-wide -rotate-3 select-none">
                  Nishi Rawat
                </div>
                <span className="text-xs tracking-widest uppercase text-ivory/50 font-light border-l border-champagne/30 pl-3">
                  Verified Stage Identity
                </span>
              </div>

            </div>
          </div>

          {/* Right Column: Source-Based Introduction & Philosophy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Oversized Quote Mark */}
            <div className="relative mb-4">
              <Quote className="w-14 h-14 text-champagne/20 -mb-6" />
            </div>

            {/* Source-based Verified Introduction Text */}
            <blockquote className="space-y-5 text-base sm:text-lg md:text-xl text-ivory/90 font-light leading-relaxed">
              <p className="font-editorial text-xl sm:text-2xl text-white italic font-normal leading-relaxed text-gold-subtle">
                &ldquo;I'm Anchor Nishi Rawat, your go-to host for events that leave a lasting impression! With years of experience in the art of engaging audiences, I specialize in creating unforgettable moments filled with energy, fun, and entertainment.&rdquo;
              </p>

              <p className="text-sm sm:text-base text-ivory/80 leading-relaxed">
                From the grandest weddings to corporate galas, award ceremonies, and cultural fests, I bring charisma, creativity, and a lively vibe that captivates every audience.
              </p>

              <p className="text-sm sm:text-base text-ivory/80 leading-relaxed">
                My events are more than just shows; they're experiences loved and cherished by clients and guests alike. Let's make your special day extraordinary together!
              </p>
            </blockquote>

            {/* Core Professional Pillars */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-champagne/20">
              <div className="p-4 rounded-xl bg-charcoal/50 border border-champagne/15 hover:border-champagne/40 transition-colors">
                <Mic2 className="w-5 h-5 text-champagne mb-2" />
                <h4 className="font-editorial text-lg text-white font-medium">Stage Magnetism</h4>
                <p className="text-xs text-ivory/60 mt-1 leading-normal">
                  Natural command over audiences with witty spontaneity, humor, and poise.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-charcoal/50 border border-champagne/15 hover:border-champagne/40 transition-colors">
                <Radio className="w-5 h-5 text-champagne mb-2" />
                <h4 className="font-editorial text-lg text-white font-medium">Broadcast Diction</h4>
                <p className="text-xs text-ivory/60 mt-1 leading-normal">
                  Journalistic precision and articulate modulation in Hindi and English.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-charcoal/50 border border-champagne/15 hover:border-champagne/40 transition-colors">
                <HeartHandshake className="w-5 h-5 text-champagne mb-2" />
                <h4 className="font-editorial text-lg text-white font-medium">Audience Empathy</h4>
                <p className="text-xs text-ivory/60 mt-1 leading-normal">
                  Connecting effortlessly across age groups—from children to family elders.
                </p>
              </div>
            </div>

            {/* CTA action */}
            <div className="mt-8 flex items-center gap-4 flex-wrap">
              <button
                onClick={onOpenBooking}
                data-cursor="CONNECT"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-champagne to-champagne-light text-richblack text-xs font-bold uppercase tracking-[0.2em] shadow-lg hover:shadow-champagne/30 transition-all"
              >
                Let&apos;s Host Together
              </button>
              <a
                href="#portfolio"
                className="text-xs uppercase tracking-wider text-champagne hover:text-white transition-colors flex items-center gap-1.5"
              >
                <span>View Real Stage Moments &rarr;</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
