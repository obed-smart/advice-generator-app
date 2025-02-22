/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"], // Corrected glob pattern
  theme: {
    extend: {
      colors: {
        // ### Primary
        lightCyan: "hsl(193, 38%, 86%)",
        neonGreen: "hsl(150, 100%, 66%)",

        // ### Neutral

        grayishBlue: "hsl(217, 19%, 38%)",
        darkGrayishBlue: "hsl(217, 19%, 24%)",
        darkBlue: "hsl(218, 23%, 16%)",
      },
    },
  },
  plugins: [],
};
