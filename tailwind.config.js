/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'soft-orange': 'var(--soft-orange)',
        'soft-red': 'var(--soft-red)',
        'grayish-blue': 'var(--grayish-blue)',
        'dark-grayish-blue': 'var(--dark-grayish-blue)',
        'dark-blue': 'var(--dark-blue)',
        ofWhite: 'var(--ofWhite)',
      },
    },
  },
  plugins: [],
};
