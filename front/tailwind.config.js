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
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
