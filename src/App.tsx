import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { Preloader } from './components/Preloader';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HighlightedEventsSlider } from './components/HighlightedEventsSlider';
import { About } from './components/About';
import { JourneyTimeline } from './components/JourneyTimeline';
import { EventsServices } from './components/EventsServices';
import { VideoShowreels } from './components/VideoShowreels';
import { GalleryPortfolio } from './components/GalleryPortfolio';
import { FeaturedStage } from './components/FeaturedStage';
import { LocationAvailability } from './components/LocationAvailability';
import { BookingContact } from './components/BookingContact';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { ParticlesBackground } from './components/ParticlesBackground';
import { Phone, Calendar } from 'lucide-react';
import { PERSONAL_DETAILS } from './data/portfolioData';

export const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [showFloatingCta, setShowFloatingCta] = useState(false);

  useEffect(() => {
    // Check if user already saw preloader in this session
    const seen = sessionStorage.getItem('nr_preloader_seen');
    if (seen) {
      setLoading(false);
    }

    // Initialize Lenis Smooth Scroll
    let lenis: Lenis | null = null;
    try {
      lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        smoothWheel: true,
      });

      function raf(time: number) {
        lenis?.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    } catch (e) {
      console.warn('Lenis smooth scroll fallback to native smooth scroll');
    }

    // Show floating quick-contact pill after scrolling down
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setShowFloatingCta(true);
      } else {
        setShowFloatingCta(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      lenis?.destroy();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleOpenBooking = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        const input = document.getElementById('fullName') as HTMLInputElement | null;
        input?.focus();
      }, 500);
    }
  };

  return (
    <div className="relative min-h-screen bg-richblack text-ivory selection:bg-champagne/30 selection:text-white">
      {/* Luxury Stardust Background Particles */}
      <ParticlesBackground />

      {/* Desktop Custom Luxury Cursor */}
      <CustomCursor />

      {/* Cinematic Introductory Preloader */}
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      {/* Navigation Header */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content Area */}
      <main id="main-content">
        {/* Section 02: Cinematic Hero Experience with 3-Slide Event Background */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* Continuous Stream: Highlighted Events Image Slider */}
        <HighlightedEventsSlider />

        {/* Section 03: About Nishi — The Woman Behind The Mic */}
        <About onOpenBooking={handleOpenBooking} />

        {/* Section 04: Professional Journey — Every Stage Has A Story */}
        <JourneyTimeline />

        {/* Section 05: Events & Services — The Art of Making Every Event Unforgettable */}
        <EventsServices onOpenBooking={handleOpenBooking} />

        {/* Live Action: Video Showreels & Master Cinema Player */}
        <VideoShowreels />

        {/* Section 06: Signature Event Portfolio — Gap-Free Balanced Event Grid & Lightbox */}
        <GalleryPortfolio />

        {/* Section 07: Cinematic Featured Photographic Stage */}
        <FeaturedStage />

        {/* Section 08: Location & Working Hubs Availability */}
        <LocationAvailability onOpenBooking={handleOpenBooking} />

        {/* Section 09: Contact & Booking Experience Form */}
        <BookingContact />
      </main>

      {/* Section 10: Final Footer */}
      <Footer />

      {/* Floating Quick Action CTA Bar for Mobile & Desktop when scrolled */}
      <aside
        aria-label="Quick Actions"
        className={`fixed bottom-6 right-6 z-30 transition-all duration-500 flex items-center gap-3 ${
          showFloatingCta ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'
        }`}
      >
        <a
          href={`tel:${PERSONAL_DETAILS.phone}`}
          className="w-12 h-12 rounded-full bg-burgundy hover:bg-burgundy-light text-champagne border border-champagne/40 flex items-center justify-center shadow-[0_4px_20px_rgba(100,28,50,0.6)] transform hover:scale-110 transition-transform"
          title="Direct Phone Call"
          aria-label="Direct Phone Call to Anchor Nishi Rawat"
        >
          <Phone className="w-5 h-5" />
        </a>

        <button
          onClick={handleOpenBooking}
          className="px-5 py-3 rounded-full bg-gradient-to-r from-champagne via-[#EAD7A6] to-champagne text-richblack font-bold uppercase tracking-widest text-xs shadow-[0_4px_25px_rgba(214,183,121,0.5)] transform hover:scale-105 transition-all flex items-center gap-2"
        >
          <Calendar className="w-4 h-4" />
          <span>Book Nishi</span>
        </button>
      </aside>
    </div>
  );
};

export default App;
