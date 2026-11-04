import React, { useRef, useEffect } from 'react';
import { Sparkles, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';

interface HighlightedEvent {
  image: string;
  title: string;
  category: string;
  location: string;
}

const HIGHLIGHTED_EVENTS: HighlightedEvent[] = [
  {
    image: './images/hero-stage.jpg',
    title: 'The Regal Stage Presence',
    category: 'Royal Stage',
    location: 'Golden Throne Gala'
  },
  {
    image: './images/dandiya-garba-night.jpg',
    title: 'Mega Cultural Fest & Dandiya Night',
    category: 'Cultural & Fest',
    location: 'Grand Cultural Grounds'
  },
  {
    image: './images/stage-full-vertical.jpg',
    title: 'Concert Stage & Black-Tie Gala',
    category: 'National Conclaves',
    location: 'Celebrity Concert Stage'
  },
  {
    image: './images/wedding-festive-red.jpg',
    title: 'Royal Varmala & Sangeet Host',
    category: 'Destination Weddings',
    location: 'Heritage Palace Courtyard'
  },
  {
    image: './images/corporate-awards-vivekananda.jpg',
    title: 'Swami Vivekananda National Awards',
    category: 'Corporate Conclave',
    location: 'Amer Greens, Bhopal'
  },
  {
    image: './images/corporate-diamond-expo.jpg',
    title: 'Luxury Diamond Exhibition',
    category: 'Luxury Brand Launch',
    location: 'Grand Jewelry Pavilion'
  },
  {
    image: './images/wedding-haldi-pool.jpg',
    title: 'Poolside Haldi Celebration',
    category: 'Weddings',
    location: 'Central India Resort'
  },
  {
    image: './images/wedding-varmala.jpg',
    title: 'The Sacred Varmala & Vows',
    category: 'Weddings',
    location: 'Destination Wedding Lawn'
  },
  {
    image: './images/corporate-entrepreneurship-summit.jpg',
    title: 'Youth Entrepreneurship Summit',
    category: 'Academic Conclave',
    location: 'University Auditorium'
  },
  {
    image: './images/wedding-barat.jpg',
    title: 'Leading The Grand Barat On Wheels',
    category: 'Weddings',
    location: 'Wedding Procession'
  },
  {
    image: './images/wedding-glamour.jpg',
    title: 'Floral Ring Glamour Night',
    category: 'Celebrations',
    location: 'Opulent Banquet Hall'
  },
  {
    image: './images/corporate-school-opening.jpg',
    title: 'Play School Grand Inauguration',
    category: 'Community Celebration',
    location: 'Bhopal'
  }
];

export const HighlightedEventsSlider: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const isHoveredRef = useRef(false);

  // Buttery-smooth automatic continuous scrolling
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let animId: number;
    const speed = 0.9; // Smooth continuous pixels per frame

    const step = () => {
      if (!isHoveredRef.current && container) {
        container.scrollLeft += speed;
        // When scrolled past half the duplicated list, reset seamlessly to start
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }
      animId = requestAnimationFrame(step);
    };

    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, []);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -360, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 360, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-20 bg-richblack overflow-hidden border-y border-champagne/15 select-none">
      {/* Background Subtle Luxury Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-burgundy/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-champagne/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10 mb-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-champagne/10 border border-champagne/25 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-champagne" />
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-champagne-light font-medium">
                Live Event Archive &bull; Auto-Streaming Moments
              </span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl text-white font-normal uppercase tracking-tight">
              HIGHLIGHTED <span className="italic text-gold-gradient font-light">STAGE MOMENTS</span>.
            </h2>
            <p className="text-xs sm:text-sm text-ivory/70 font-light mt-1 max-w-xl">
              A continuous visual showcase of celebrations, royal ceremonies, and live audience energy.
            </p>
          </div>

          {/* Manual Scroll Buttons */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={scrollLeft}
              className="w-10 h-10 rounded-full border border-champagne/30 hover:border-champagne bg-charcoal/80 hover:bg-champagne hover:text-richblack text-champagne flex items-center justify-center transition-all duration-300"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollRight}
              className="w-10 h-10 rounded-full border border-champagne/30 hover:border-champagne bg-charcoal/80 hover:bg-champagne hover:text-richblack text-champagne flex items-center justify-center transition-all duration-300"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Infinite Continuous Auto-Sliding Ribbon */}
      <div
        ref={scrollContainerRef}
        onMouseEnter={() => { isHoveredRef.current = true; }}
        onMouseLeave={() => { isHoveredRef.current = false; }}
        onTouchStart={() => { isHoveredRef.current = true; }}
        onTouchEnd={() => { isHoveredRef.current = false; }}
        className="flex gap-6 overflow-x-auto px-4 sm:px-6 lg:px-12 scrollbar-none py-4"
      >
        {/* Doubled list for endless seamless streaming */}
        {[...HIGHLIGHTED_EVENTS, ...HIGHLIGHTED_EVENTS].map((event, idx) => (
          <div
            key={`${event.title}-${idx}`}
            className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[360px] h-[240px] sm:h-[280px] rounded-2xl overflow-hidden border border-champagne/20 hover:border-champagne/70 bg-charcoal relative group shadow-[0_8px_25px_rgba(0,0,0,0.6)] hover:shadow-[0_15px_35px_rgba(214,183,121,0.2)] transition-all duration-500 transform hover:-translate-y-1.5"
          >
            {/* Event Photo */}
            <img
              src={event.image}
              alt={event.title}
              loading="lazy"
              className="w-full h-full object-cover object-top transform transition-transform duration-700 group-hover:scale-110"
            />

            {/* Gradient Scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-richblack-pure via-richblack-pure/40 to-transparent opacity-90 group-hover:opacity-75 transition-opacity" />

            {/* Top Badge */}
            <div className="absolute top-3.5 left-3.5 z-10">
              <span className="text-[9px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full bg-richblack/85 backdrop-blur-md border border-champagne/30 text-champagne">
                {event.category}
              </span>
            </div>

            {/* Bottom Caption */}
            <div className="absolute bottom-3.5 left-3.5 right-3.5 z-10">
              <div className="flex items-center gap-1.5 text-[9px] uppercase tracking-wider text-champagne-light mb-1 font-medium">
                <MapPin className="w-3 h-3 text-champagne" />
                <span className="truncate">{event.location}</span>
              </div>
              <h4 className="font-editorial text-lg sm:text-xl text-white font-medium group-hover:text-champagne transition-colors leading-snug truncate">
                {event.title}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
