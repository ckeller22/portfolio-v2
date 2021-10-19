module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "earth-gray": {
          900: "#1F2933",
          800: "#323F4B",
          700: "#3E4C59",
          600: "#52606D",
          500: "#616E7C",
          400: "#7B8794",
          300: "#9AA5B1",
          200: "#CBD2D9",
          100: "#E4E7EB",
          50: "#F5F7FA",
        },
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
