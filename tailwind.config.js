/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "image-cover": "url('/../public/images/landingPageCover.jpg')",
      },
      fontFamily: {
        cairo: ["Cairo", "sans-serif"],
      },
      spacing: {
        152: "38rem",
        124: "31rem",
        112: "28rem",
      },
    },
    colors: {
      primary: "#b38e55",
      basic: "#f7f7f7",
      secondary: "#132d46",
      shade: "#e7e9ec",
      success: "#00800a",
      warning: "#f6b12d",
      danger: "#d11317",
      tint: "#ffffff",
      darkTint: "#babec0",
    },
  },
  plugins: [],
};
