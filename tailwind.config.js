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
          50: 'rgba(56, 189, 248, 0.05)',
          100: 'rgba(56, 189, 248, 0.1)',
          200: 'rgba(56, 189, 248, 0.2)',
          500: 'var(--color-accent)',
          600: 'var(--color-accent)',
          700: 'var(--color-accent-light)',
          800: '#0284c7',
        },
        charcoal: {
          900: '#f8fafc',
          800: '#e2e8f0',
          700: '#94a3b8',
          600: '#64748b',
          500: '#475569',
          400: '#334155',
          300: '#1e293b',
          200: '#1e2436',
          100: '#161c2e',
          50: '#0e121e',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(0, 0, 0, 0.4)',
        'card': '0 4px 20px -2px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.06)',
        'card-hover': '0 16px 36px -6px rgba(0, 0, 0, 0.8), 0 0 0 1px var(--color-accent-glow)',
        'glow': '0 0 25px -5px var(--color-accent-glow)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.85' },
        },
      },
    },
  },
  plugins: [],
}
