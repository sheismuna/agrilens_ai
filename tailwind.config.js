/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#2E7D32',
          'deep-green': '#1B5E20',
          gold: '#F9A825',
          'gold-dark': '#F57F17',
          bg: '#FAFAF7',
          text: '#111111',
          'text-muted': '#555555',
          'green-light': '#E8F5E9',
          'green-mid': '#C8E6C9',
          border: '#E8E8E4',
        },
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient':
          'linear-gradient(135deg, #1B5E20 0%, #2E7D32 50%, #1B5E20 100%)',
        'gold-gradient': 'linear-gradient(135deg, #F9A825 0%, #F57F17 100%)',
      },
      animation: {
        'scan-line': 'scanLine 2s linear infinite',
        'pulse-dot': 'pulseDot 2s ease-in-out infinite',
        'wave': 'wave 1.2s ease-in-out infinite',
        'float': 'float 4s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        scanLine: {
          '0%': { top: '0%' },
          '100%': { top: '100%' },
        },
        pulseDot: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(1.4)' },
        },
        wave: {
          '0%, 100%': { transform: 'scaleY(0.4)' },
          '50%': { transform: 'scaleY(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      boxShadow: {
        'card': '0 2px 20px rgba(0,0,0,0.06)',
        'card-hover': '0 8px 40px rgba(46,125,50,0.12)',
        'phone': '0 40px 100px rgba(0,0,0,0.25), 0 0 0 1px rgba(255,255,255,0.05) inset',
        'glow-green': '0 0 60px rgba(46,125,50,0.2)',
        'glow-gold': '0 4px 24px rgba(249,168,37,0.4)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
};
