import React, { useState } from 'react';
import { Sparkles, Heart, Briefcase, PartyPopper, Check, ArrowRight, Calendar } from 'lucide-react';
import { SERVICE_CATEGORIES } from '../data/portfolioData';

interface EventsServicesProps {
  onOpenBooking: () => void;
}

export const EventsServices: React.FC<EventsServicesProps> = ({ onOpenBooking }) => {
  const [activeTab, setActiveTab] = useState<string>('weddings');

  const iconsMap: Record<string, React.ReactNode> = {
    weddings: <Heart className="w-5 h-5 text-champagne" />,
    corporate: <Briefcase className="w-5 h-5 text-champagne" />,
    other: <PartyPopper className="w-5 h-5 text-champagne" />
  };

  return (
    <section id="services" className="relative py-24 lg:py-32 bg-richblack overflow-hidden select-none">
      {/* Background Ambience */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-champagne/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-burgundy/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-champagne/10 border border-champagne/30 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-champagne" />
            <span className="text-[11px] uppercase tracking-[0.25em] text-champagne-light font-medium">
              Section 05 &bull; Signature Repertoire
            </span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-normal uppercase tracking-tight">
            THE ART OF MAKING <span className="italic text-gold-gradient font-light">EVERY EVENT UNFORGETTABLE</span>.
          </h2>

          <p className="mt-4 text-sm sm:text-base text-ivory/70 font-light leading-relaxed">
            Three distinctive realms of celebration, each curated with bespoke stage choreography, tailored audience interaction, and unforgettable storytelling.
          </p>
        </div>

        {/* Category Navigation Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-16">
          {SERVICE_CATEGORIES.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2.5 px-6 py-3 rounded-full text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-champagne via-champagne-light to-champagne text-richblack shadow-[0_0_25px_rgba(214,183,121,0.4)] scale-105'
                    : 'bg-charcoal/80 text-ivory/70 hover:text-champagne hover:bg-charcoal border border-champagne/20'
                }`}
              >
                <span>{iconsMap[cat.id]}</span>
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Distinctive Category Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {SERVICE_CATEGORIES.map((cat) => {
            const isActive = activeTab === cat.id;

            return (
              <div
                key={cat.id}
                className={`glass-card rounded-2xl overflow-hidden border transition-all duration-500 flex flex-col justify-between group ${
                  isActive
                    ? 'border-champagne/60 shadow-[0_15px_45px_rgba(214,183,121,0.2)] lg:-translate-y-2'
                    : 'border-champagne/15 hover:border-champagne/40 opacity-90 hover:opacity-100'
                }`}
              >
                {/* Visual Header with Real Event Photo */}
                <div className="relative h-60 sm:h-64 overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    loading="lazy"
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />
                  
                  {/* Category Number Badge */}
                  <span className="absolute top-4 left-4 font-editorial text-2xl text-champagne/80 font-bold px-3 py-1 rounded bg-black/60 backdrop-blur-md border border-champagne/30">
                    {cat.number}
                  </span>

                  {/* Category Icon */}
                  <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-champagne/30 flex items-center justify-center">
                    {iconsMap[cat.id]}
                  </div>

                  {/* Category Titles on Image Bottom */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-champagne font-medium block mb-1">
                      {cat.subtitle}
                    </span>
                    <h3 className="font-editorial text-2xl text-white font-medium">
                      {cat.title}
                    </h3>
                  </div>
                </div>

                {/* Content & Event List */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <p className="text-xs sm:text-sm text-ivory/70 font-light leading-relaxed mb-6">
                    {cat.description}
                  </p>

                  {/* Verified Events List from PDF */}
                  <div className="space-y-2.5 mb-8">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-champagne/70 font-semibold block mb-2">
                      Included Ceremonies & Events:
                    </span>
                    {cat.items.map((eventItem, eIdx) => (
                      <div
                        key={eIdx}
                        className="flex items-center gap-2.5 text-xs text-ivory/85 py-1 px-2.5 rounded bg-white/[0.03] border border-white/5 group-hover:border-champagne/20 transition-colors"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-champagne shrink-0" />
                        <span className="font-medium tracking-wide">{eventItem}</span>
                      </div>
                    ))}
                  </div>

                  {/* Card Action Button */}
                  <button
                    onClick={onOpenBooking}
                    className="w-full py-3 rounded-full border border-champagne/30 hover:border-champagne bg-champagne/10 hover:bg-champagne hover:text-richblack text-champagne font-semibold uppercase tracking-[0.2em] text-xs transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                  >
                    <span>Book {cat.title}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Reassurance Banner */}
        <div className="mt-16 p-6 rounded-2xl bg-gradient-to-r from-charcoal via-richblack-surface to-charcoal border border-champagne/20 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-champagne/10 border border-champagne/40 flex items-center justify-center shrink-0 text-champagne">
              <Calendar className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-editorial text-xl text-white font-medium">Planning a Destination Wedding or Corporate Summit?</h4>
              <p className="text-xs text-ivory/70 mt-0.5">
                Anchor Nishi travels across Madhya Pradesh, Rajasthan, and all major Indian cities with complete stage equipment preparedness.
              </p>
            </div>
          </div>
          <button
            onClick={onOpenBooking}
            className="shrink-0 px-6 py-3 rounded-full bg-champagne text-richblack font-bold uppercase tracking-[0.15em] text-xs shadow-md hover:shadow-champagne/30 transition-all"
          >
            Check Availability
          </button>
        </div>

      </div>
    </section>
  );
};

