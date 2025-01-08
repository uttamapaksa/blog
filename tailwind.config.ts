import type { Config } from "tailwindcss";
import typography from '@tailwindcss/typography';

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx,jpg,webp,svg}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx,jpg,webp,svg}",
    "./src/posts/**/*.{js,ts,jsx,tsx,mdx,jpg,webp,svg}",
  ],
  darkMode: 'selector',
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
