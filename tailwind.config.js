/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        midnight: {
          50: '#e8eaf2',
          100: '#c5cade',
          200: '#9fa8c8',
          300: '#7986b3',
          400: '#5c6ba3',
          500: '#3f5193',
          600: '#334386',
          700: '#253475',
          800: '#172564',
          900: '#0a0f1e',
          950: '#060b16',
        },
        aurora: {
          teal: '#0d9488',
          turquoise: '#06b6d4',
          emerald: '#059669',
          sky: '#7dd3fc',
          green: '#10b981',
          cyan: '#22d3ee',
          mint: '#6ee7b7',
        },
        nordic: {
          orange: '#f97316',
          amber: '#f59e0b',
          rose: '#f43f5e',
          snow: '#f0f9ff',
          ice: '#e0f7fa',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'aurora-gradient': 'linear-gradient(135deg, #0a0f1e 0%, #0d2137 30%, #0d4a3a 60%, #0a0f1e 100%)',
        'aurora-glow': 'radial-gradient(ellipse at center, rgba(6,182,212,0.15) 0%, transparent 70%)',
      },
      animation: {
        'aurora-flow': 'auroraFlow 8s ease-in-out infinite',
        'star-twinkle': 'twinkle 3s ease-in-out infinite',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'pulse-soft': 'pulseSoft 4s ease-in-out infinite',
      },
      keyframes: {
        auroraFlow: {
          '0%, 100%': { transform: 'translateX(-5%) scaleY(1)', opacity: '0.6' },
          '50%': { transform: 'translateX(5%) scaleY(1.1)', opacity: '0.8' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.2' },
          '50%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
      },
    },
  },
  plugins: [],
};
