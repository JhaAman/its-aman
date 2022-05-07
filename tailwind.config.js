module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
      },
      colors: {
        fiery_rose: {
          DEFAULT: "#EB6276",
          50: "#FFFFFF",
          100: "#FDF3F4",
          200: "#F9CFD5",
          300: "#F4AAB5",
          400: "#F08696",
          500: "#EB6276",
          600: "#E5304B",
          700: "#C41932",
          800: "#921325",
          900: "#600C19",
        },
      },
    },
  },
  plugins: [],
};
