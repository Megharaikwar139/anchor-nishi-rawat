import React from 'react';

interface NRLogoProps {
  className?: string;
  variant?: 'badge' | 'monogram' | 'horizontal';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const NRLogo: React.FC<NRLogoProps> = ({
  className = '',
  variant = 'badge',
  size = 'md'
}) => {
  const sizeMap = {
    sm: 'w-11 h-11 sm:w-12 sm:h-12',
    md: 'w-16 h-16 sm:w-20 sm:h-20',
    lg: 'w-24 h-24 sm:w-28 sm:h-28',
    xl: 'w-32 h-32 sm:w-36 sm:h-36'
  };

  if (variant === 'monogram') {
    return (
      <div className={`relative inline-flex items-center justify-center font-serif select-none ${className}`}>
        <span className="text-champagne font-bold tracking-tighter text-2xl lg:text-3xl relative">
          <span className="font-editorial italic text-white mr-[1px]">N</span>
          <span className="text-champagne-light">R</span>
          <span className="absolute -top-1 -right-2 text-[10px] text-champagne tracking-widest font-sans font-light opacity-80">★</span>
        </span>
      </div>
    );
  }

  if (variant === 'horizontal') {
    return (
      <div className={`flex items-center gap-3 select-none ${className}`}>
        <div className="w-11 h-11 rounded-lg overflow-hidden border border-champagne/40 shadow-lg bg-[#4a0e17] flex-shrink-0">
          <img
            src="./images/logo-nr-official.png"
            alt="Anchor Nishi Rawat Official NR Logo"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex flex-col">
          <span className="text-xs uppercase tracking-[0.25em] text-champagne-light font-medium">Anchor</span>
          <span className="font-editorial text-lg tracking-wider text-ivory font-medium leading-none">Nishi Rawat</span>
        </div>
      </div>
    );
  }

  // Variant: Badge (Using the authentic high-resolution NR logo uploaded by user)
  return (
    <div
      className={`relative inline-flex items-center justify-center select-none transition-transform duration-300 hover:scale-105 group ${sizeMap[size]} ${className}`}
      title="Anchor Nishi Rawat Official Logo"
    >
      <div className="relative w-full h-full rounded-xl overflow-hidden border border-champagne/40 shadow-[0_4px_20px_rgba(100,28,50,0.5)] group-hover:border-champagne group-hover:shadow-[0_0_20px_rgba(214,183,121,0.4)] transition-all duration-300 bg-[#4a0e17]">
        <img
          src="./images/logo-nr-official.png"
          alt="Anchor Nishi Rawat Official NR Logo"
          className="w-full h-full object-contain transform transition-transform duration-500 group-hover:scale-105"
        />
      </div>
    </div>
  );
};
