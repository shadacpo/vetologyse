import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2E7D6F",
        secondary: "#F4F7F6",
        accent: "#4CAF93",
        text: "#2F2F2F",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        cairo: ["Cairo", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;