/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#D71920',
        'primary-dark': '#A50E14',
        'primary-soft': '#F6E2DE',
        cream: {
          DEFAULT: '#F4EFE7',
          surface: '#ECE4D6',
          card: '#FBF8F2',
        },
        ink: {
          DEFAULT: '#111111',
          soft: '#403C34',
          muted: '#6E685C',
          faint: '#9C9485',
          line: '#D8D0C0',
        },
        night: {
          DEFAULT: '#0D0D0C',
          card: '#161512',
          line: '#2A2823',
          muted: '#A6A092',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Bebas Neue"', 'Oswald', 'Futura', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      maxWidth: {
        content: '1200px',
      },
      borderRadius: {
        xl2: '10px',
      },
      boxShadow: {
        card: '0 1px 2px rgba(24, 20, 10, 0.06), 0 3px 10px rgba(24, 20, 10, 0.05)',
        'card-hover': '0 8px 24px rgba(24, 20, 10, 0.12), 0 2px 6px rgba(24, 20, 10, 0.07)',
      },
      keyframes: {
        blink: {
          '0%, 49%': { opacity: 1 },
          '50%, 100%': { opacity: 0 },
        },
        scrollDot: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(36px)' },
        },
      },
      animation: {
        blink: 'blink 1s step-start infinite',
        'scroll-dot': 'scrollDot 1.8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}