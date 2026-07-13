/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2563EB',
        secondary: '#1E293B',
        accent: '#3B82F6',
        surface: '#FFFFFF',
        ink: '#111827',
        muted: '#475569',
        soft: '#F8FAFC',
        line: '#E5E7EB',
        dark: {
          bg: '#0B1120',
          surface: '#111827',
          line: '#1F2937',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      maxWidth: {
        content: '1200px',
      },
      borderRadius: {
        xl2: '16px',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(17, 24, 39, 0.04), 0 8px 24px -12px rgba(17, 24, 39, 0.08)',
        softHover: '0 4px 8px rgba(17, 24, 39, 0.06), 0 16px 32px -12px rgba(17, 24, 39, 0.14)',
      },
      keyframes: {
        blink: {
          '0%, 49%': { opacity: 1 },
          '50%, 100%': { opacity: 0 },
        },
      },
      animation: {
        blink: 'blink 1s step-start infinite',
      },
    },
  },
  plugins: [],
}
