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
          "primary": "#ff0000",
          "secondary": "#dddbff",
          "accent": "#f6ff00",
          "neutral": "#0f0f3d",
          "base-100": "#fbfbfe",
        },
        myDark: {
          "primary": "#ff0000",
          "secondary": "#020024",
          "accent": "#f6ff00",
          "neutral": "#0f0f3d",
          "base-100": "#010104",
        },
      },
    ],
  },
};
export default config;
