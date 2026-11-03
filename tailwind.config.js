/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FAF9F6',
        surface: '#FFFFFF',
        surfaceMuted: '#F4F4F2',
        charcoal: {
          900: '#121316',
          800: '#1D1E22',
          700: '#2E3036',
          600: '#4B4D54',
          500: '#6E717B',
          400: '#9598A2',
          300: '#C4C6CE',
          200: '#E4E5EB',
          100: '#F0F1F5',
        },
        accent: {
          50: '#EEF4FF',
          100: '#DDE9FF',
          200: '#C2D7FF',
          500: '#2B6CB0',
          600: '#1D4ED8',
          700: '#1E40AF',
          800: '#1E3A8A',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'subtle': '0 1px 2px 0 rgba(0, 0, 0, 0.04), 0 1px 3px 0 rgba(0, 0, 0, 0.02)',
        'card': '0 2px 8px -2px rgba(18, 19, 22, 0.05), 0 1px 3px -1px rgba(18, 19, 22, 0.03)',
        'card-hover': '0 12px 24px -6px rgba(18, 19, 22, 0.08), 0 4px 8px -2px rgba(18, 19, 22, 0.03)',
      },
    },
  },
  plugins: [],
}

