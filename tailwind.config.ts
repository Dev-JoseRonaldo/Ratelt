import type { Config } from "tailwindcss";

const defaultTheme = require('tailwindcss/defaultTheme')

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xxs: '320px',
        xs: '400px',
        ...defaultTheme .screens,
      },
      colors: {
        primary: '#1F64FF',
        red: '#EA5050',
        yellow: '#FFD130',
        orange: '#FFB36C',
        blue: {
          400: '#1A3EC1',
          500: '#072AC8',
          900: '#000022',
        },
        green: {
          300: '#30F2F2',
          400: '#73FBD3',
          500: '#15D6B3',
          600: '#35D5C3',
        }
      },
    },
  },
  plugins: [],
};
export default config;
