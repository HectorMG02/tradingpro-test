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
        "blue-chill": "#438e96",
        "blue-chill-50": "#f2f9f9",
        "blue-chill-100": "#ddeff0",
        "blue-chill-200": "#bfe0e2",
        "blue-chill-300": "#92cace",
        "blue-chill-400": "#5faab1",
        "blue-chill-500": "#438e96",
        "blue-chill-600": "#3b757f",
        "blue-chill-700": "#356169",
        "blue-chill-800": "#325158",
        "blue-chill-900": "#2d464c",
        "blue-chill-950": "#1a2c32",
      },
    },
  },
  plugins: [],
};
