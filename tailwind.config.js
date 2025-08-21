/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        primary: {
          DEFAULT: '#1a365d',
          light: '#2c4d7d',
          dark: '#132743',
        },
        // Secondary Colors
        secondary: {
          DEFAULT: '#2c5282',
          light: '#3b6ea5',
        },
        // Accent Colors
        accent: {
          DEFAULT: '#c5a47e',
          light: '#d4b899',
        },
        // Text Colors
        text: '#1f2937',
        'text-light': '#4b5563',
        // Background Colors
        background: '#ffffff',
        'background-alt': '#f9fafb',
        // Border Colors
        border: '#e5e7eb',
        // Additional Colors
        dark: '#0f172a',
        light: '#f8fafc',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          '2xl': '1280px',
        },
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}

