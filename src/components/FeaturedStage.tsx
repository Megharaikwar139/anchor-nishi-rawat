import React from 'react';
import { Mic, Sparkles } from 'lucide-react';

export const FeaturedStage: React.FC = () => {
  return (
    <section className="relative min-h-[85vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-richblack-pure select-none">
      
      {/* Background Image with Fixed/Parallax Feel */}
      <div className="absolute inset-0 z-0">
        <img
          src="./images/featured-royal-stage.jpg"
          alt="Anchor Nishi Rawat commanding the golden royal stage"
          loading="lazy"
          className="w-full h-full object-cover object-center brightness-75 scale-105 transform hover:scale-110 transition-transform duration-1000 ease-out"
        />

        {/* Cinematic Vignette and Spotlight Darkening */}
        <div className="absolute inset-0 bg-gradient-to-t from-richblack-pure via-black/40 to-richblack-pure opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-r from-richblack-pure via-transparent to-richblack-pure opacity-80" />
        
        {/* Subtle Warm Spotlight Beam */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(214,183,121,0.22)_0%,transparent_60%)] pointer-events-none" />
      </div>

      {/* Center Cinematic Typography & Animated Gold Line */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Stage Icon */}
        <div className="w-12 h-12 rounded-full bg-richblack/80 backdrop-blur-md border border-champagne/40 flex items-center justify-center text-champagne mb-6 shadow-[0_0_30px_rgba(214,183,121,0.3)] animate-float-slow">
          <Mic className="w-5 h-5" />
        </div>

        {/* Animated Gold Divider Line */}
        <div className="w-24 sm:w-36 h-[2px] bg-gradient-to-r from-transparent via-champagne to-transparent mb-8" />

        {/* Master Statement from Prompt */}
        <h2 className="font-editorial text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-white uppercase tracking-tight leading-[1.08] max-w-4xl drop-shadow-[0_10px_30px_rgba(0,0,0,0.9)]">
          &ldquo;THE STAGE IS WHERE <br className="hidden sm:block" />
          <span className="italic text-gold-gradient font-light">MY STORY COMES ALIVE</span>.&rdquo;
        </h2>

        {/* Animated Gold Bottom Line */}
        <div className="w-24 sm:w-36 h-[2px] bg-gradient-to-r from-transparent via-champagne to-transparent mt-8 mb-6" />

        <p className="font-editorial text-lg sm:text-xl italic text-champagne-light/90 tracking-widest font-light">
          Anchor Nishi Rawat &bull; Emcee &bull; Voice Artist &bull; Journalist
        </p>

      </div>

    </section>
  );
};

