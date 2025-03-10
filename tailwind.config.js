/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slideTopToBottom: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        slideBottomToTop: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        slideLeftToRight: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideRightToLeft: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        expandCircle: {
          '0%': {
            transform: 'scale(0)',
            opacity: '0.5',
          },
          '50%': {
            transform: 'scale(1)',
            opacity: '1',
          },
          '100%': {
            transform: 'scale(1.5)',
            opacity: '0',
          },
        },
        contractCircle: {
          '0%': {
            transform: 'scale(1.5)',
            opacity: '0',
          },
          '50%': {
            transform: 'scale(1)',
            opacity: '1',
          },
          '100%': {
            transform: 'scale(0)',
            opacity: '0.5',
          },
        },
      },
      animation: {
        slideTopToBottom: 'slideTopToBottom 0.5s ease-in-out forwards',
        slideBottomToTop: 'slideBottomToTop 0.5s ease-in-out forwards',
        slideLeftToRight: 'slideLeftToRight 0.5s ease-in-out forwards',
        slideRightToLeft: 'slideRightToLeft 0.5s ease-in-out forwards',
        expandCircle: 'expandCircle 1s ease-in-out forwards',
        contractCircle: 'contractCircle 1s ease-in-out forwards',
      },
    },
    fontFamily: {
      caudex: ['Caudex', 'serif'],
    },
  },
  plugins: [],
};
