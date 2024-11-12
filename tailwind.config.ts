import type { Config } from "tailwindcss";
import typography from '@tailwindcss/typography';

const config: Config = {
  darkMode: 'selector',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx,jpg,svg}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx,jpg,svg}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx,jpg,svg}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [typography],
};
export default config;
