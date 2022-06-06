module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        hospitaltheme: {
          primary: "#FF6F00",
          secondary: "#644F9C",
          accent: "#F2F2F2",
          neutral: "#404040",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}