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
        "20px": "20px",
        "25px": "25px",
        "30px": "30px",
        "45px": "45px",
        "48px": "48px",
        "50px": "50px",
        "100px": "100px",
        "130px": "130px",
        "525px": "525px",
      },
      width: {
        "1px": "1px",
        "20px": "20px",
        "30px": "30px",
        "45px": "45px",
        "50px": "50px",
        "80px": "80px",
        "100px": "100px",
        "120px": "120px",
        "130px": "130px",
        "200px": "200px",
        "250px": "250px",
        "350px": "350px",
        "400px": "400px",
        "500px": "500px",
        "540px": "540px",
        "800px": "800px",
        "1000px": "1000px",
        "1200px": "1200px",
      },
      fontSize: {
        "8px": "8px",
        "12px": "12px",
        "14px": "14px",
        "16px": "16px",
        "18px": "18px",
        "22px": "22px",
        "24px": "24px",
        "26px": "26px",
        "32px": "32px",
        "38px": "38px",
        "44px": "44px",
        "54px": "54px",
        "64px": "64px",
      },
      minHeight: {
        "525px": "525px",
      },
      colors: {
        transparent: "transparent",
        brandcolor: "#11235A",
        brandbgcolor: "#EFEFEF",
        // brandbgcolor: "#FAFAFA",
      },
    },
  },
  plugins: [],
};
export default config;
