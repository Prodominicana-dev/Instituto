import type { Config } from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT");
const colors = require("tailwindcss/colors");

const config: Config = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        crimsonRed: "#C80F2E",
      },
    },
    colors: {
      ...colors,
    },
  },
  plugins: [],
});
export default config;
