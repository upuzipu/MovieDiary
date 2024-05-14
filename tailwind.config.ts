import type { Config } from "tailwindcss";
import daisyui from "daisyui";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {

    },
  },
  plugins: [
    daisyui,
  ],
  daisyui: {
    themes: [
      {
        myLight: {
          "primary": "#FF1F1F",
          "secondary": "#dddbff",
          "accent": "#FF1F1F",
          "neutral": "#565657",
          "base-100": "#fbfbfe",
        },
        myDark: {
          "primary": "#E00000",
          "secondary": "#020024",
          "accent": "#E00000",
          "neutral": "#565657",
          "base-100": "#010104",
        },
      },
    ],
  },
};
export default config;
