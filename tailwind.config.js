/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        prompt: ["Prompt"],
      },
      animation: {
        "anim-header": "anim-header 2s linear alternate infinite",
        "anim-header-start": "anim-header-start 1s linear",
      },
      keyframes: {
        "anim-header-start": {
          "0%": { opacity: 0.5, transform: "scale(0)" },
          "50%": { opacity: 0.7, transform: "scale(1.2)" },
          "100%": { opacity: 1, transform: "scale(1)" },
        },
        "anim-header": {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-25px)" },
          "100%": { transform: "translateY(25px)" },
        },
      },
    },
  },
  plugins: [],
};
