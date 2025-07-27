/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        background: '#f0fdf4', // Light greenish background
        foreground: '#1f2937', // Gray-800
        card: {
          DEFAULT: '#ffffff',
          foreground: '#1f2937',
        },
        popover: {
          DEFAULT: '#ffffff',
          foreground: '#1f2937',
        },
        primary: {
          DEFAULT: '#22c55e', // green-500
          foreground: '#ffffff',
        },
        secondary: {
          DEFAULT: '#bbf7d0', // green-100
          foreground: '#166534', // dark green text
        },
        muted: {
          DEFAULT: '#f0fdf4',
          foreground: '#6b7280',
        },
        accent: {
          DEFAULT: '#86efac', // green-300
          foreground: '#14532d',
        },
        destructive: {
          DEFAULT: '#ef4444',
          foreground: '#ffffff',
        },
        border: '#d1fae5',
        input: '#dcfce7',
        ring: '#22c55e',
        chart: {
          '1': '#16a34a', // green-600
          '2': '#22c55e', // green-500
          '3': '#4ade80', // green-400
          '4': '#86efac', // green-300
          '5': '#bbf7d0', // green-200
        }
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
