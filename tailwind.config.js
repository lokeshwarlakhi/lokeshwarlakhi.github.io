/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0b1020",
        foreground: "#e5e7eb",
        card: "#11152b",
        primary: {
          DEFAULT: "#ffd166",
          foreground: "#0b1020",
        },
        accent: {
          DEFAULT: "#f6d365",
          foreground: "#0b1020",
        },
        muted: {
          DEFAULT: "#141933",
          foreground: "#8f96b2",
        },
        border: "rgba(255, 255, 255, 0.1)",
      },
      animation: {
        'pulse-slow': 'pulse-slow 4s ease-in-out infinite',
      },
      keyframes: {
        'pulse-slow': {
          '0%, 100%': { opacity: 0.4, transform: 'scale(1)' },
          '50%': { opacity: 0.8, transform: 'scale(1.05)' },
        }
      }
    },
  },
  plugins: [],
}
