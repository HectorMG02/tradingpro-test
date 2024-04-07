/** @type {import('tailwindcss').Config} */
module.exports = {
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
      width: {
        "300px": "300px",
      },
      colors: {
        "main-color": "#438e96",
        "main-color-50": "#f2f9f9",
        "main-color-100": "#ddeff0",
        "main-color-200": "#bfe0e2",
        "main-color-300": "#92cace",
        "main-color-400": "#5faab1",
        "main-color-500": "#438e96",
        "main-color-600": "#3b757f",
        "main-color-700": "#356169",
        "main-color-800": "#325158",
        "main-color-900": "#2d464c",
        "main-color-950": "#1a2c32",
      },
    },
  },
  plugins: [],
};
