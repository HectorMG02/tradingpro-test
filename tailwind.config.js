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
        "main-color": "#bfbfbf",
        "main-color-100": "#f0f0f0",
        "main-color-200": "#e3e3e3",
        "main-color-300": "#d1d1d1",
        "main-color-400": "#bfbfbf",
        "main-color-500": "#aaaaaa",
        "main-color-600": "#969696",
        "main-color-700": "#818181",
        "main-color-800": "#6a6a6a",
        "main-color-900": "#585858",
        "main-color-950": "#333333",
      },
    },
  },
  plugins: [],
};
