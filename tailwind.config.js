/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
module.exports = {
  content: [
    './src/Pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/Components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/App/**/*.{js,ts,jsx,tsx,mdx}',
    './src/Features/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'banner-background': 'https://picsum.photos/seed/picsum/1798/500',
      },
      colors: {
        'black-bg': '#211c1e',
      },
      gridTemplateColumns: {
        'testim-grid': '1fr 2fr',
      },
    },
  },
  plugins: [nextui()],
}
