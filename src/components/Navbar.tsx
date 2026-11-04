import React, { useState, useEffect } from 'react';
import { NRLogo } from './NRLogo';
import { Menu, X, Phone, Calendar, ArrowRight } from 'lucide-react';
import { PERSONAL_DETAILS } from '../data/portfolioData';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Journey', href: '#journey' },
    { label: 'Services', href: '#services' },
    { label: 'Videos', href: '#showreels' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-in-out ${
          isScrolled
            ? 'bg-richblack/90 backdrop-blur-xl border-b border-champagne/15 py-3 shadow-[0_10px_35px_rgba(0,0,0,0.7)]'
            : 'bg-gradient-to-b from-richblack-pure/95 via-richblack-pure/50 to-transparent py-5 lg:py-6'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
          <div className="flex items-center justify-between gap-6">
            
            {/* Brand Lockup: Official Logo + Typography */}
            <a
              href="#home"
              onClick={(e) => handleLinkClick(e, '#home')}
              className="flex items-center gap-3.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-champagne shrink-0"
              aria-label="Anchor Nishi Rawat Home"
            >
              <NRLogo size="sm" variant="badge" className="transition-transform duration-300 group-hover:scale-105" />
              <div className="flex flex-col">
                <span className="font-editorial text-lg sm:text-xl tracking-[0.16em] text-white font-medium group-hover:text-champagne transition-colors leading-tight">
                  NISHI RAWAT
                </span>
                <span className="text-[9px] sm:text-[10px] tracking-[0.26em] uppercase text-champagne/80 font-light mt-0.5">
                  ANCHOR &bull; EMCEE &bull; VOICE ARTIST
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links — Airy, Luxurious Spacing */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8 2xl:gap-10" aria-label="Main Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="relative text-[11px] xl:text-xs uppercase tracking-[0.22em] text-ivory/80 hover:text-champagne transition-colors py-1.5 group font-medium"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gradient-to-r from-champagne to-champagne-light transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Desktop Quick Actions */}
            <div className="hidden lg:flex items-center gap-3 xl:gap-4 shrink-0">
              
              {/* Phone contact: Icon on lg, full number on xl+ */}
              <a
                href={`tel:${PERSONAL_DETAILS.phone}`}
                className="hidden xl:flex items-center gap-2 text-xs uppercase tracking-wider text-ivory/70 hover:text-champagne transition-colors py-2 px-3.5 rounded-full hover:bg-white/5 border border-transparent hover:border-champagne/20"
                title="Call Anchor Nishi Rawat"
              >
                <Phone className="w-3.5 h-3.5 text-champagne shrink-0" />
                <span className="font-sans font-medium">{PERSONAL_DETAILS.formattedPhone}</span>
              </a>

              <a
                href={`tel:${PERSONAL_DETAILS.phone}`}
                className="flex xl:hidden w-9 h-9 rounded-full items-center justify-center bg-charcoal/80 border border-champagne/30 text-champagne hover:bg-champagne hover:text-richblack transition-colors"
                title={`Call ${PERSONAL_DETAILS.formattedPhone}`}
              >
                <Phone className="w-3.5 h-3.5" />
              </a>

              {/* Primary Booking Button */}
              <button
                onClick={onOpenBooking}
                data-cursor="BOOK NOW"
                className="relative group overflow-hidden rounded-full p-[1px] focus:outline-none focus-visible:ring-2 focus-visible:ring-champagne shadow-[0_0_15px_rgba(214,183,121,0.25)]"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-champagne via-[#EAD7A6] to-champagne rounded-full transition-all duration-300 group-hover:opacity-90" />
                <span className="relative flex items-center gap-2 px-5 xl:px-6 py-2.5 rounded-full bg-richblack transition-colors duration-300 group-hover:bg-opacity-80">
                  <span className="text-[11px] xl:text-xs font-semibold uppercase tracking-[0.2em] text-champagne group-hover:text-white transition-colors whitespace-nowrap">
                    BOOK NISHI
                  </span>
                  <Calendar className="w-3.5 h-3.5 text-champagne group-hover:text-white transition-colors shrink-0" />
                </span>
              </button>
            </div>

            {/* Mobile Actions: Compact Book Button & Hamburger */}
            <div className="flex items-center gap-2.5 lg:hidden">
              <button
                onClick={onOpenBooking}
                className="px-3.5 py-1.5 rounded-full bg-gradient-to-r from-champagne to-champagne-light text-richblack text-[11px] font-bold tracking-wider uppercase shadow-md"
              >
                Book
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-ivory hover:text-champagne transition-colors focus:outline-none focus:ring-2 focus:ring-champagne rounded-lg"
                aria-label="Toggle navigation menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Full-Screen Menu Overlay */}
      <div
        className={`fixed inset-0 z-30 bg-richblack-pure/95 backdrop-blur-2xl transition-all duration-500 flex flex-col justify-between p-6 lg:hidden ${
          mobileMenuOpen
            ? 'opacity-100 pointer-events-auto translate-y-0'
            : 'opacity-0 pointer-events-none -translate-y-4'
        }`}
        style={{ top: '68px' }}
      >
        <div className="flex flex-col space-y-5 pt-6">
          {navLinks.map((link, idx) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="font-editorial text-2xl tracking-wider text-ivory hover:text-champagne transition-colors flex items-center justify-between border-b border-white/5 pb-3"
              style={{ transitionDelay: `${idx * 40}ms` }}
            >
              <span>{link.label}</span>
              <ArrowRight className="w-4 h-4 text-champagne opacity-60" />
            </a>
          ))}
        </div>

        <div className="pt-8 border-t border-champagne/20 flex flex-col gap-4 pb-8">
          <div className="flex items-center justify-between text-xs text-ivory/70">
            <span>Direct Enquiries:</span>
            <a href={`tel:${PERSONAL_DETAILS.phone}`} className="text-champagne font-medium">
              {PERSONAL_DETAILS.formattedPhone}
            </a>
          </div>
          <div className="flex items-center justify-between text-xs text-ivory/70">
            <span>Official Email:</span>
            <a href={`mailto:${PERSONAL_DETAILS.email}`} className="text-champagne font-medium">
              {PERSONAL_DETAILS.email}
            </a>
          </div>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenBooking();
            }}
            className="w-full py-4 mt-2 rounded-full bg-gradient-to-r from-champagne to-champagne-light text-richblack font-bold uppercase tracking-[0.2em] text-sm shadow-[0_0_20px_rgba(214,183,121,0.4)]"
          >
            BOOK ANCHOR NISHI
          </button>
        </div>
      </div>
    </>
  );
};
