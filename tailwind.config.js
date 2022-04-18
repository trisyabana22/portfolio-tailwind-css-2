module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        "green-tri": "#138D77",
      },
      borderWidth: {
        3: "3px",
        1: "0.4px",
      },
      fontFamily: {
        poppins: ["Poppins"],
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};
