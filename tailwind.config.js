/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1028px",
      xl: "1440px",
    },
    extend: {
      boxShadow: {
        "inset-white": "inset 0 1px 0 0 rgba(255, 255, 255, 0.25)",
      },
      colors: {
        primaryBlack: "#121417",
        primaryGreen: "#85aa9f",
        secondaryGreen: "#a5c0b8",
        primaryWhite: "#fcfcfc",
        secondaryWhite: "#f8f8f8",
        lightGray: "#85AABB",
        lightSecondGray: "#121417",
      },
      width: {
        "card-sm": "max-w-[236px]",
        "card-md": "max-w-[216px",
        "card-lg": "max-w-[271px]",
      },
      lineHeight: {
        oneAndAlmostHalf: "1.45455",
        oneAndHalf: "1.5",
        oneAndThird: "1.33333",
        onePointZeroSix: "1.06667",
        onePointTwo: "1.2",
      },
    },
  },
  plugins: [],
};
