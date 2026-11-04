import React, { useState, useRef, useEffect } from 'react';
import { Camera, X, ChevronLeft, ChevronRight, Maximize2, Sparkles, MapPin, Tag } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/portfolioData';
import { GalleryItem, EventCategory } from '../types';

export const GalleryPortfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<EventCategory>('all');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number>(0);
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  const categories: { id: EventCategory; label: string }[] = [
    { id: 'all', label: 'All Moments' },
    { id: 'weddings', label: 'Weddings & Rituals' },
    { id: 'corporate', label: 'Corporate & Summits' },
    { id: 'celebrations', label: 'Celebrations & Fest' },
    { id: 'stage', label: 'Stage & Media' }
  ];

  const filteredItems = selectedCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === selectedCategory);

  const openLightbox = (item: GalleryItem) => {
    const idx = filteredItems.findIndex(i => i.id === item.id);
    setLightboxIndex(idx !== -1 ? idx : 0);
    setActiveItem(item);
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  };

  const closeLightbox = () => {
    if (dialogRef.current) {
      dialogRef.current.close();
    }
    setActiveItem(null);
  };

  const showNext = () => {
    const nextIdx = (lightboxIndex + 1) % filteredItems.length;
    setLightboxIndex(nextIdx);
    setActiveItem(filteredItems[nextIdx]);
  };

  const showPrev = () => {
    const prevIdx = (lightboxIndex - 1 + filteredItems.length) % filteredItems.length;
    setLightboxIndex(prevIdx);
    setActiveItem(filteredItems[prevIdx]);
  };

  // Keyboard controls for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeItem) return;
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeItem, lightboxIndex, filteredItems]);

  // Modern Web Guidance: Light-dismiss outside click detection on <dialog>
  const handleDialogClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const rect = dialog.getBoundingClientRect();
    const isOutside = (
      e.clientX < rect.left ||
      e.clientX > rect.right ||
      e.clientY < rect.top ||
      e.clientY > rect.bottom
    );
    if (isOutside) {
      closeLightbox();
    }
  };

  return (
    <section id="portfolio" className="relative py-24 lg:py-32 bg-richblack-pure overflow-hidden select-none">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-burgundy/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-champagne/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-champagne/10 border border-champagne/30 mb-3">
            <Camera className="w-3.5 h-3.5 text-champagne" />
            <span className="text-[11px] uppercase tracking-[0.25em] text-champagne-light font-medium">
              Section 06 &bull; Signature Portfolio
            </span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-normal uppercase tracking-tight">
            EVERY EVENT. <span className="italic text-gold-gradient font-light">A DIFFERENT STORY</span>.
          </h2>

          <p className="mt-4 text-sm sm:text-base text-ivory/70 font-light leading-relaxed">
            A glimpse into the moments, celebrations and experiences I&apos;ve had the privilege to host. Captured live on stage.
          </p>
        </div>

        {/* Animated Filter Category Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-14">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-[0.15em] font-medium transition-all duration-300 ${
                  isSelected
                    ? 'bg-champagne text-richblack font-bold shadow-[0_0_20px_rgba(214,183,121,0.35)] scale-105'
                    : 'bg-charcoal/80 text-ivory/70 hover:text-champagne hover:bg-charcoal border border-champagne/15'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Gap-Free Balanced Event Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openLightbox(item)}
              data-cursor="VIEW MOMENT"
              className="relative h-[380px] sm:h-[420px] rounded-2xl overflow-hidden border border-champagne/25 hover:border-champagne/70 bg-charcoal group cursor-pointer shadow-[0_10px_30px_rgba(0,0,0,0.6)] hover:shadow-[0_20px_45px_rgba(214,183,121,0.2)] transition-all duration-500 transform hover:-translate-y-1.5 flex flex-col justify-end p-6"
            >
              {/* Photo with zoom effect */}
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover object-top transform transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Dynamic Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-richblack-pure via-richblack-pure/50 to-transparent opacity-85 group-hover:opacity-75 transition-opacity duration-300" />
              <div className="absolute inset-0 bg-dark-vignette opacity-50 pointer-events-none" />

              {/* Top Badges */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                <span className="text-[10px] uppercase tracking-wider font-semibold px-3 py-1 rounded-full bg-richblack/85 backdrop-blur-md border border-champagne/35 text-champagne shadow-md">
                  {item.categoryLabel}
                </span>

                <div className="w-9 h-9 rounded-full bg-richblack/85 backdrop-blur-md border border-champagne/40 flex items-center justify-center text-champagne opacity-80 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100 shadow-md">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>

              {/* Bottom Metadata & Title */}
              <div className="relative z-10 transform transition-transform duration-300">
                {item.location && (
                  <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-champagne-light font-medium mb-1.5">
                    <MapPin className="w-3.5 h-3.5 text-champagne shrink-0" />
                    <span>{item.location}</span>
                  </div>
                )}
                <h3 className="font-editorial text-2xl text-white font-medium group-hover:text-champagne transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-ivory/75 line-clamp-2 mt-2 font-light leading-relaxed">
                  {item.description}
                </p>

                <div className="mt-4 pt-3 border-t border-champagne/20 flex items-center justify-between text-[11px] text-champagne font-medium uppercase tracking-wider">
                  <span>View Details</span>
                  <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Modern Web Guidance: Native <dialog> Modal Lightbox */}
      <dialog
        ref={dialogRef}
        onClick={handleDialogClick}
        aria-labelledby="lightbox-title"
        className="w-[95vw] max-w-5xl rounded-3xl bg-richblack-pure border border-champagne/40 p-0 text-ivory shadow-[0_25px_80px_rgba(0,0,0,0.9)] overflow-hidden m-auto"
      >
        {activeItem && (
          <div className="relative flex flex-col lg:flex-row max-h-[90vh]">
            
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-black/70 hover:bg-champagne hover:text-richblack text-white border border-champagne/40 transition-colors focus:outline-none"
              aria-label="Close lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Prev / Next Navigation Arrows */}
            <button
              onClick={showPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/70 hover:bg-champagne hover:text-richblack text-white border border-champagne/40 transition-colors focus:outline-none hidden sm:flex items-center justify-center"
              aria-label="Previous moment"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={showNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/70 hover:bg-champagne hover:text-richblack text-white border border-champagne/40 transition-colors focus:outline-none hidden sm:flex items-center justify-center"
              aria-label="Next moment"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Image Preview Box */}
            <div className="w-full lg:w-3/5 bg-black flex items-center justify-center p-2 sm:p-4 overflow-hidden max-h-[60vh] lg:max-h-[85vh]">
              <img
                src={activeItem.image}
                alt={activeItem.title}
                className="max-w-full max-h-[55vh] lg:max-h-[80vh] object-contain rounded-lg shadow-2xl"
              />
            </div>

            {/* Sidebar Details Box */}
            <div className="w-full lg:w-2/5 p-6 sm:p-8 flex flex-col justify-between bg-charcoal/90 border-t lg:border-t-0 lg:border-l border-champagne/20 overflow-y-auto">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[10px] uppercase tracking-widest font-semibold px-2.5 py-1 rounded bg-champagne/15 text-champagne border border-champagne/30">
                    {activeItem.categoryLabel}
                  </span>
                  <span className="text-xs text-ivory/50">
                    {lightboxIndex + 1} of {filteredItems.length}
                  </span>
                </div>

                <h3 id="lightbox-title" className="font-editorial text-2xl sm:text-3xl text-white font-medium mb-3">
                  {activeItem.title}
                </h3>

                {activeItem.location && (
                  <div className="flex items-center gap-2 text-xs text-champagne-light mb-4">
                    <MapPin className="w-3.5 h-3.5 text-champagne" />
                    <span>{activeItem.location}</span>
                  </div>
                )}

                <p className="text-sm text-ivory/80 leading-relaxed font-light mb-6">
                  {activeItem.description}
                </p>

                {activeItem.highlights && activeItem.highlights.length > 0 && (
                  <div className="space-y-2 mb-6">
                    <span className="text-[10px] uppercase tracking-widest text-champagne font-semibold block">
                      Event Highlights
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {activeItem.highlights.map((hl, hIdx) => (
                        <span
                          key={hIdx}
                          className="text-[11px] px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-ivory/80"
                        >
                          {hl}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Lightbox Controls */}
              <div className="pt-6 border-t border-champagne/20 flex items-center justify-between">
                <span className="text-[11px] text-ivory/60">
                  Anchor Nishi Rawat Official Portfolio
                </span>
                <div className="flex sm:hidden items-center gap-2">
                  <button
                    onClick={showPrev}
                    className="p-2 rounded-full border border-champagne/30 text-champagne"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={showNext}
                    className="p-2 rounded-full border border-champagne/30 text-champagne"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>

          </div>
        )}
      </dialog>
    </section>
  );
};

