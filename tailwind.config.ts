import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        background: "#F8F5F3",
        backgroundSecondary: "#E5D9D2",
        primary: "#E78258",
        textPrimary: "#2D2D2D",
      },
      fontFamily: {
        primary: ["var(--font-poppins)"],
        secondary: ["var(--font-caveat)"],
        heading: ["var(--font-owners-text)"],
      },
      screens: {
        "2xl": "1920px",
        tall: { raw: "(min-height: 1024px)" },
      },
    },
  },
  plugins: [],
};
export default config;
