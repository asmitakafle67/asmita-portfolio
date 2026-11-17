/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        paper: 'var(--color-paper)',
        background: 'var(--color-paper)',
        surface: 'var(--color-surface)',
        surfaceMuted: 'var(--color-surface-2)',
        ink: 'var(--color-ink)',
        graphite: 'var(--color-graphite)',
        hairline: 'var(--color-hairline)',
        faint: 'var(--color-faint)',
        accent: {
          DEFAULT: 'var(--color-accent)',
          light: 'var(--color-accent-light)',
          soft: 'var(--color-accent-soft)',
          glow: 'var(--color-accent-glow)',
          50: 'rgba(118, 211, 156, 0.05)',
          100: 'rgba(118, 211, 156, 0.1)',
          200: 'rgba(118, 211, 156, 0.2)',
          500: 'var(--color-accent)',
          600: 'var(--color-accent)',
          700: 'var(--color-accent-light)',
          800: '#58a877',
        },
        charcoal: {
          900: '#eaf0eb',
          800: '#d5dfd8',
          700: '#8d9e91',
          600: '#75887a',
          500: '#5a6e60',
          400: '#3d4d42',
          300: '#27342b',
          200: '#1b261e',
          100: '#121814',
          50: '#0a0e0b',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(0, 0, 0, 0.3)',
        'card': '0 4px 20px -2px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.05)',
        'card-hover': '0 16px 36px -6px rgba(0, 0, 0, 0.7), 0 0 0 1px var(--color-accent-glow)',
        'glow': '0 0 25px -5px var(--color-accent-glow)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '0.6', transform: 'scale(1.05)' },
        },
      },
    },
  },
  plugins: [],
}
