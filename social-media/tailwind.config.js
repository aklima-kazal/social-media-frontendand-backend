/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    colors: {
      main_bg: "var(--main_bg)",
      primary_bg: "var(--primary_bg)",
      secondary_bg: "var(--secondary_bg)",
      input_color: "var(--input_color)",
      hover_color: "var(--hover_color)",
      line_color: "var(--line_color)",
      page_color: "var(--page_color)",
      single_color: "var(--single_color)",
      blur: "var(--blur)",
      text_color: "var(--text_color)",
      primary_color: "var(--primary_color)",
      title_color: "var(--title_color)",
      black_color: "var(--black_color)",
      white_color: "var(--white_color)",
      green: "var(--green)",
      red: "var(--red)",
      blue: "var(--blue)",
      yellow: "var(--yellow)",
      "purple-100": "var(--purple-100)",
      "pink-100": "var(--pink-100)",
      "cyan-100": "var(--cyan-100)",
    },

    fontFamily: {
      blinkerNormal: ["Blinker Regular"],
      blinkerMedium: ["Blinker Medium"],
      blinkerBold: ["Blinker Bold"],
      blinkerLight: ["Blinker Light"],
      blinkerBlack: ["Blinker Black"],
      blinkerSemiBold: ["Blinker SemiBold"],
    },
    extend: {
      screens: {
        xs: "320px",
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1400px",
        "3xl": "1620px",
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
};
