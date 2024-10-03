/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 576px) { ... }

      md: "805px",
      // => @media (min-width: 960px) { ... }
    },
    extend: {
      colors: {
        Orange: "hsl(26, 100%, 55%)",
        PaleOrange: "hsl(25, 100%, 94%)",

        VeryDarkBlue: "hsl(220, 13%, 13%)",
        DarkGrayishBlue: "hsl(219, 9%, 45%)",
        GrayishBlue: "hsl(220, 14%, 75%)",
        LightGrayishBlue: "hsl(223, 64%, 98%)",
        BgWhite: "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        kumbh: ["Kumbh Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
