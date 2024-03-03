/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      height: {
        big_h: "20rem",
        ppa: "100vh",
        more: "30rem",
        less: "20rem",
        sec4: "130vh",
      },
      top: {
        new: "50px",
        pppa: "100px",
      },
      margin: {
        ppaa: "180px",
        force: "100px",
      },
      width: {
        fat: "500px",
        fat2: "350px",
      },
      backgroundColor: {
        nav: " rgba(24, 22, 22, 0.9)  ",
      },

      colors: {
        greyishWhite: "#f5f5f5", // You can adjust the hex value as needed
      },
    },
  },
  plugins: [],
};

// "./**/*.{html,js,jsx,ts,tsx,vue}
