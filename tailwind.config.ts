import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "src/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-pretendard)"],
      },
      height: {
        "screen-1/2": "50vh",
        "screen-1/3": "33.333333vh",
        "screen-2/3": "66.666667vh",
        "screen-1/4": "25vh",
        "screen-3/4": "75vh",
        "525px": "525px",
      },
      width: {
        "1px": "1px",
        "540px": "540px",
        "1200px": "1200px",
      },
      fontSize: {
        "32px": "32px",
        "64px": "64px",
      },
      colors: {
        transparent: "transparent",
        brandcolor: "#11235A",
      },
    },
  },
  plugins: [],
};
export default config;
