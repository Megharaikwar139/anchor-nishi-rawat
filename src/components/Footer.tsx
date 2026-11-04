import React from 'react';
import { NRLogo } from './NRLogo';
import { Phone, Mail, Instagram, ArrowUp, Heart, Sparkles } from 'lucide-react';
import { PERSONAL_DETAILS } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-richblack-pure text-ivory border-t border-champagne/20 overflow-hidden select-none">
      
      {/* Subtle Gold Shimmer Top Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-champagne to-transparent opacity-60" />

      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        
        {/* Top Closing Statement from Prompt */}
        <div className="text-center max-w-4xl mx-auto mb-16 pb-12 border-b border-champagne/15">
          <p className="font-editorial text-2xl sm:text-3xl md:text-4xl italic text-gold-gradient font-light leading-snug">
            &ldquo;{PERSONAL_DETAILS.closingStatement}&rdquo;
          </p>
          <span className="text-[10px] uppercase tracking-[0.3em] text-champagne/70 font-semibold mt-3 block">
            Anchor Nishi Rawat &bull; Emcee &bull; Voice Artist &bull; Journalist
          </span>
        </div>

        {/* 4 Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16">
          
          {/* Brand Column (Span 4) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-4">
              <NRLogo size="md" variant="badge" />
              <div>
                <h3 className="font-editorial text-2xl text-white font-medium">Anchor Nishi Rawat</h3>
                <p className="text-[11px] uppercase tracking-[0.25em] text-champagne font-light">
                  Anchor &bull; Emcee &bull; Voice Artist
                </p>
              </div>
            </div>

            <p className="text-xs text-ivory/70 leading-relaxed font-light max-w-sm mt-3">
              Bringing charisma, elegance, and extraordinary stage presence to luxury destination weddings, corporate conclaves, and high-energy cultural festivals across India.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={PERSONAL_DETAILS.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-champagne hover:text-richblack text-champagne border border-champagne/30 transition-all flex items-center justify-center"
                title="Instagram Profile"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`tel:${PERSONAL_DETAILS.phone}`}
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-champagne hover:text-richblack text-champagne border border-champagne/30 transition-all flex items-center justify-center"
                title="Phone Call"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_DETAILS.email}`}
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-champagne hover:text-richblack text-champagne border border-champagne/30 transition-all flex items-center justify-center"
                title="Email Desk"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation (Span 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-champagne font-semibold mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-ivory/70">
              <li>
                <a href="#home" className="hover:text-champagne transition-colors">Home Stage</a>
              </li>
              <li>
                <a href="#about" className="hover:text-champagne transition-colors">Behind The Mic</a>
              </li>
              <li>
                <a href="#journey" className="hover:text-champagne transition-colors">Career Journey</a>
              </li>
              <li>
                <a href="#services" className="hover:text-champagne transition-colors">Event Services</a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-champagne transition-colors">Event Portfolio</a>
              </li>
              <li>
                <a href="#locations" className="hover:text-champagne transition-colors">Travel Locations</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-champagne transition-colors">Book Nishi</a>
              </li>
            </ul>
          </div>

          {/* Event Categories (Span 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-champagne font-semibold mb-4">
              Celebrations
            </h4>
            <ul className="space-y-2 text-xs text-ivory/70">
              <li>Haldi & Sangeet</li>
              <li>Varmala & Reception</li>
              <li>Corporate Conclaves</li>
              <li>National Award Galas</li>
              <li>Diamond Exhibitions</li>
              <li>College & Open Mics</li>
              <li>Barat On Wheels</li>
            </ul>
          </div>

          {/* Direct Booking Desk (Span 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-champagne font-semibold mb-4">
              Booking Office
            </h4>
            <div className="space-y-2.5 text-xs text-ivory/75">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-ivory/40 block">Location</span>
                <span className="font-medium text-white">Bhopal, Madhya Pradesh, India</span>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider text-ivory/40 block">Phone Enquiries</span>
                <a href={`tel:${PERSONAL_DETAILS.phone}`} className="hover:text-champagne text-white font-medium">
                  {PERSONAL_DETAILS.formattedPhone}
                </a>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider text-ivory/40 block">Official Email</span>
                <a href={`mailto:${PERSONAL_DETAILS.email}`} className="hover:text-champagne text-white font-medium break-all">
                  {PERSONAL_DETAILS.email}
                </a>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider text-ivory/40 block">Instagram</span>
                <a href={PERSONAL_DETAILS.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-champagne text-white font-medium">
                  {PERSONAL_DETAILS.instagram}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back-to-top */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ivory/50">
          <p>
            &copy; {currentYear} Anchor Nishi Rawat. All Rights Reserved. Designed & Engineered with Cinematic Luxury.
          </p>

          <button
            onClick={scrollToTop}
            data-cursor="TOP"
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-champagne/30 hover:border-champagne text-champagne hover:bg-champagne/10 transition-all text-[11px] uppercase tracking-widest font-medium"
            aria-label="Scroll back to top of page"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

    </footer>
  );
};

