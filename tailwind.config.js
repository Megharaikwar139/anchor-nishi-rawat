/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: '#101014',
          light: '#181820',
          dark: '#0c0c0f'
        },
        richblack: {
          DEFAULT: '#08080B',
          pure: '#040406',
          surface: '#121217'
        },
        burgundy: {
          DEFAULT: '#641C32',
          light: '#852442',
          dark: '#451020',
          deep: '#2f0814'
        },
        champagne: {
          DEFAULT: '#D6B779',
          light: '#EAD7A6',
          dark: '#B89654',
          glow: 'rgba(214, 183, 121, 0.35)'
        },
        softgold: {
          DEFAULT: '#BFA16A',
          light: '#D3BA87',
          dark: '#9A7D4A'
        },
        ivory: {
          DEFAULT: '#F7F2E9',
          muted: '#E5DFD3',
          warm: '#FFFDF9'
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', '"Manrope"', 'sans-serif'],
        script: ['"Pinyon Script"', '"Alex Brush"', 'cursive'],
        heading: ['"Playfair Display"', '"Cormorant Garamond"', 'serif']
      },
      backgroundImage: {
        'gold-shimmer': 'linear-gradient(135deg, #FBF4E4 0%, #D6B779 50%, #BFA16A 100%)',
        'dark-vignette': 'radial-gradient(circle at center, transparent 0%, rgba(8,8,11,0.85) 100%)',
        'burgundy-radial': 'radial-gradient(circle at top right, rgba(100, 28, 50, 0.25) 0%, transparent 65%)'
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
}

