tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#ff6b6b",
        secondary: "#f9c851",
        accent: "#4ecdc4",
        "background-light": "#fff9f2",
        "background-dark": "#1a1a2e",
        "text-light": "#3d3d3d",
        "text-dark": "#e0e0e0",
      },
      fontFamily: {
        display: ["Balsamiq Sans", "cursive"],
        body: ["Poppins", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "1rem",
        lg: "1.5rem",
        xl: "2.5rem",
        full: "9999px",
      },
      boxShadow: {
        playful: "8px 8px 0px #1a1a2e",
        "playful-dark": "8px 8px 0px #f9c851",
      },
      rotate: {
        2: "2deg",
        "-2": "-2deg",
        3: "3deg",
        "-3": "-3deg",
      },
      animation: {
        float: "float 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
};
