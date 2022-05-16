module.exports = {
  content: ['./src/pages/**/*.tsx', './src/components/**/*.tsx'],
  theme: {
    extend: {
      keyframes: {
        appear: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        disappear: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
      },
      animation: {
        appear: 'appear 150ms ease 0s 1 forwards',
        disappear: 'disappear 150ms ease 0s 1 forwards',
      },
    },
  },
  plugins: [],
};
