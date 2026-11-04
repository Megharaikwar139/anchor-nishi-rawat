import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2, Sparkles, Film } from 'lucide-react';

interface VideoReel {
  id: string;
  title: string;
  category: string;
  videoUrl: string;
  poster: string;
  tagline: string;
  duration: string;
}

// Exactly 4 curated signature stage showreels as requested
const VIDEO_REELS: VideoReel[] = [
  {
    id: 'reel-master',
    title: 'Signature Stage Showcase',
    category: 'Master Reel',
    videoUrl: './videos/hero-highlight.mp4',
    poster: './images/hero-stage.jpg',
    tagline: 'High-octane crowd engagement, grand stage entrance, and magnetic microphone authority.',
    duration: '0:45'
  },
  {
    id: 'reel-01',
    title: 'Live Crowd Banter & Wit',
    category: 'Interactive Emcee',
    videoUrl: './videos/stage-reel-01.mp4',
    poster: './images/dandiya-garba-night.jpg',
    tagline: 'Connecting effortlessly with thousands through spontaneous wit, charm, and audience laughter.',
    duration: '0:30'
  },
  {
    id: 'reel-02',
    title: 'Regal Varmala & Sangeet',
    category: 'Luxury Weddings',
    videoUrl: './videos/stage-reel-02.mp4',
    poster: './images/wedding-festive-red.jpg',
    tagline: 'Guiding sacred rituals and festive sangeet celebrations with elegance and heartfelt emotion.',
    duration: '0:28'
  },
  {
    id: 'reel-03',
    title: 'Corporate Conclave & Keynote',
    category: 'Executive Summits',
    videoUrl: './videos/stage-reel-03.mp4',
    poster: './images/stage-full-vertical.jpg',
    tagline: 'Dignified protocol, articulate bilingual cadence, and flawless national summit management.',
    duration: '0:32'
  }
];

export const VideoShowreels: React.FC = () => {
  const [selectedReel, setSelectedReel] = useState<VideoReel>(VIDEO_REELS[0]);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const handleSelectReel = (reel: VideoReel) => {
    setSelectedReel(reel);
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.src = reel.videoUrl;
      videoRef.current.poster = reel.poster;
      videoRef.current.play().catch(() => {});
    }
  };

  const handleFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  return (
    <section id="showreels" className="relative py-24 lg:py-32 bg-richblack-pure overflow-hidden select-none">
      {/* Background Ambience */}
      <div className="absolute top-1/3 right-10 w-[600px] h-[600px] bg-burgundy/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-champagne/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-champagne/10 border border-champagne/30 mb-3">
            <Film className="w-3.5 h-3.5 text-champagne" />
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-champagne-light font-medium">
              Live Stage Showreels &bull; 4 Signature Reels
            </span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-normal uppercase tracking-tight">
            COMMANDING THE STAGE. <span className="italic text-gold-gradient font-light">IN MOTION</span>.
          </h2>

          <p className="mt-4 text-sm sm:text-base text-ivory/70 font-light max-w-2xl mx-auto leading-relaxed">
            Experience the genuine energy, spontaneous crowd banter, and live mic authority that pictures alone cannot fully convey.
          </p>
        </div>

        {/* Master Cinema Video Player & Reel Selector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Cinema Player (Span 8) — Smooth single-decoder performance */}
          <div className="lg:col-span-8 relative">
            <div className="relative rounded-3xl overflow-hidden border-2 border-champagne/40 shadow-[0_20px_60px_rgba(0,0,0,0.9)] bg-black group aspect-video sm:aspect-[16/9] flex items-center justify-center">
              
              {/* Single Master Video Element */}
              <video
                ref={videoRef}
                src={selectedReel.videoUrl}
                poster={selectedReel.poster}
                preload="metadata"
                autoPlay
                loop
                muted={isMuted}
                playsInline
                className="w-full h-full object-cover"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              />

              {/* Dynamic Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40 pointer-events-none opacity-80" />

              {/* Top Video Header */}
              <div className="absolute top-4 sm:top-6 left-4 sm:left-6 right-4 sm:right-6 flex items-center justify-between z-20 pointer-events-none">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
                  <span className="text-[10px] uppercase tracking-[0.2em] font-semibold px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-champagne/30 text-champagne">
                    {selectedReel.category}
                  </span>
                </div>

                <span className="text-xs text-ivory/80 font-mono px-2.5 py-1 rounded bg-black/60 backdrop-blur-md border border-white/10">
                  {selectedReel.duration}
                </span>
              </div>

              {/* Bottom Video Controls & Info */}
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 z-20 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div className="max-w-md">
                  <h3 className="font-editorial text-2xl sm:text-3xl text-white font-medium drop-shadow-md">
                    {selectedReel.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-ivory/80 line-clamp-2 mt-1 font-light drop-shadow">
                    {selectedReel.tagline}
                  </p>
                </div>

                {/* Player Interactive Buttons */}
                <div className="flex items-center gap-2 sm:gap-3 shrink-0 self-end">
                  <button
                    onClick={togglePlay}
                    className="p-3 rounded-full bg-champagne text-richblack hover:bg-white transition-all transform hover:scale-105 shadow-lg"
                    aria-label={isPlaying ? 'Pause video' : 'Play video'}
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
                  </button>

                  <button
                    onClick={toggleMute}
                    className="p-3 rounded-full bg-black/70 border border-champagne/40 text-champagne hover:bg-champagne hover:text-richblack transition-all"
                    aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>

                  <button
                    onClick={handleFullscreen}
                    className="p-3 rounded-full bg-black/70 border border-champagne/40 text-champagne hover:bg-champagne hover:text-richblack transition-all hidden sm:flex"
                    aria-label="Fullscreen video"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* Reel Playlist / Selector (Span 4) — High-Performance Image Thumbnails */}
          <div className="lg:col-span-4 space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-champagne/20 mb-2">
              <span className="text-xs uppercase tracking-[0.2em] text-champagne font-semibold flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Featured Showreels (4)</span>
              </span>
              <span className="text-[11px] text-ivory/50">Click to Play</span>
            </div>

            <div className="space-y-3">
              {VIDEO_REELS.map((reel) => {
                const isActive = reel.id === selectedReel.id;
                return (
                  <button
                    key={reel.id}
                    onClick={() => handleSelectReel(reel)}
                    className={`w-full text-left p-3.5 rounded-2xl border transition-all duration-300 flex items-center gap-4 group ${
                      isActive
                        ? 'bg-champagne/15 border-champagne shadow-[0_0_20px_rgba(214,183,121,0.25)] scale-[1.02]'
                        : 'bg-charcoal/70 border-white/10 hover:border-champagne/40 hover:bg-charcoal'
                    }`}
                  >
                    {/* Lightweight Image Thumbnail Box (No decoding lag) */}
                    <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-black shrink-0 border border-champagne/30">
                      <img
                        src={reel.poster}
                        alt={reel.title}
                        loading="lazy"
                        className="w-full h-full object-cover object-top opacity-75 transform transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                        {isActive ? (
                          <div className="w-7 h-7 rounded-full bg-champagne text-richblack flex items-center justify-center shadow-md">
                            <Pause className="w-3.5 h-3.5" />
                          </div>
                        ) : (
                          <div className="w-7 h-7 rounded-full bg-black/80 border border-champagne/60 text-champagne flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
                            <Play className="w-3 h-3 fill-current ml-0.5" />
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Metadata */}
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[9px] uppercase tracking-wider font-semibold text-champagne">
                          {reel.category}
                        </span>
                        <span className="text-[10px] text-ivory/50 font-mono">
                          {reel.duration}
                        </span>
                      </div>
                      <h4 className="font-editorial text-lg text-white font-medium truncate group-hover:text-champagne transition-colors mt-0.5">
                        {reel.title}
                      </h4>
                      <p className="text-xs text-ivory/60 truncate font-light mt-0.5">
                        {reel.tagline}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
