import React from 'react';
import { MapPin, Plane, Compass, Navigation, Globe2, Sparkles, Building2 } from 'lucide-react';
import { CITY_HUBS, PERSONAL_DETAILS } from '../data/portfolioData';

interface LocationAvailabilityProps {
  onOpenBooking: () => void;
}

export const LocationAvailability: React.FC<LocationAvailabilityProps> = ({ onOpenBooking }) => {
  return (
    <section id="locations" className="relative py-24 lg:py-32 bg-richblack overflow-hidden select-none">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-champagne/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-champagne/10 border border-champagne/30 mb-3">
            <Compass className="w-3.5 h-3.5 text-champagne" />
            <span className="text-[11px] uppercase tracking-[0.25em] text-champagne-light font-medium">
              Section 08 &bull; Geographic Reach
            </span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-normal uppercase tracking-tight">
            READY TO TAKE THE STAGE, <br className="hidden sm:block" />
            <span className="italic text-gold-gradient font-light">WHEREVER THE CELEBRATION IS</span>.
          </h2>

          {/* Prompt Required Statement */}
          <p className="mt-4 text-base sm:text-lg text-champagne-light font-light leading-relaxed max-w-2xl mx-auto">
            &ldquo;Based in Bhopal and open to travelling to different cities for event assignments.&rdquo;
          </p>
        </div>

        {/* Base Location Spotlight Card */}
        <div className="max-w-4xl mx-auto mb-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-charcoal via-[#1a1518] to-charcoal border border-champagne/30 shadow-[0_15px_40px_rgba(0,0,0,0.6)] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-2xl bg-burgundy/80 border border-champagne/40 flex items-center justify-center text-champagne shadow-lg shrink-0">
              <Building2 className="w-8 h-8" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] uppercase tracking-[0.25em] text-champagne font-bold px-2 py-0.5 rounded bg-champagne/10 border border-champagne/20">
                  Headquarters & Primary Hub
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              <h3 className="font-editorial text-2xl sm:text-3xl text-white font-medium mt-1">
                Bhopal, Madhya Pradesh, India
              </h3>
              <p className="text-xs text-ivory/70 mt-1">
                Centralized transit hub with swift air and rail connectivity to destination venues across India.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenBooking}
            className="shrink-0 px-6 py-3 rounded-full bg-gradient-to-r from-champagne to-champagne-light text-richblack font-bold uppercase tracking-[0.15em] text-xs shadow-md hover:shadow-champagne/30 transition-all flex items-center gap-2"
          >
            <Plane className="w-3.5 h-3.5" />
            <span>Book For Your City</span>
          </button>
        </div>

        {/* 10 Verified Working Locations Grid */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <span className="text-xs uppercase tracking-[0.3em] text-champagne/80 font-medium">
              Verified Working Hubs Across Central & North India
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3.5 sm:gap-4">
            {CITY_HUBS.map((hub, idx) => (
              <div
                key={hub.name}
                className={`p-4 rounded-xl border transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 ${
                  hub.isBase
                    ? 'bg-burgundy/30 border-champagne/50 shadow-[0_0_20px_rgba(214,183,121,0.2)]'
                    : 'bg-charcoal/60 border-champagne/15 hover:border-champagne/40 hover:bg-charcoal'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-1.5 text-champagne">
                    <MapPin className="w-3.5 h-3.5" />
                    <span className="text-[10px] uppercase tracking-wider text-ivory/50">
                      {hub.state}
                    </span>
                  </div>
                  {hub.isBase && (
                    <span className="w-2 h-2 rounded-full bg-champagne animate-ping" />
                  )}
                </div>

                <h4 className="font-editorial text-lg sm:text-xl text-white font-medium group-hover:text-champagne transition-colors">
                  {hub.name}
                  {hub.name === 'Chhindwara' && (
                    <span className="text-[10px] text-champagne/70 font-sans block font-normal">
                      (Listed as Chindwada in PDF)
                    </span>
                  )}
                </h4>

                <p className="text-[10px] text-ivory/60 mt-1 line-clamp-1 font-light">
                  {hub.featuredEvent}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Global & Pan-India Travel Note */}
        <div className="text-center p-6 rounded-2xl bg-charcoal/30 border border-white/5 max-w-3xl mx-auto">
          <p className="text-xs text-ivory/60 leading-relaxed">
            <span className="text-champagne font-medium">Note:</span> The cities highlighted above represent recurring event stations. Anchor Nishi is gladly available for international destination events and cross-country tours upon advance scheduling.
          </p>
        </div>

      </div>
    </section>
  );
};

