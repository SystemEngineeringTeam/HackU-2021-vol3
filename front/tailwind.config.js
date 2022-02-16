// tailwind.config.js
module.exports = {
  // 追記
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "original-green": "#1B2D3E",
        "original-login-blue": "#F5FAFD",
        "original-deep-gray": "#697288",
        "original-red": "#D76A6A",
        "original-gray": "#ECF1F6",
        "original-red": "#FF0000",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
