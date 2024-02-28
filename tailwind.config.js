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
        colors: {
            mitzvah: '#212F45',
            darkTeal: '#005874',
            deepTeal: '#008590',
            aquaGreen: '#0CB292',
            paleMint: '#8ADA7F',
            lemonYellow: '#F9F871',
            customWhite: '#FFFFFF',
        },
        fontFamily: {
            customEng: ['TechnoRaceItalic', 'sans'],
        }
    },
  },
  plugins: [],
};
