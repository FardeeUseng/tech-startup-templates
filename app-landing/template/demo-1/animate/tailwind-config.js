tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#b613ec",
        "background-light": "#f8f6f8",
        "background-dark": "#1d1022",
      },
      fontFamily: {
        display: ["Spline Sans"],
      },
      borderRadius: {
        DEFAULT: "0.5rem",
        lg: "1rem",
        xl: "1.5rem",
        full: "9999px",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-glow": {
          "0%, 100%": {
            boxShadow: "0 0 20px 5px rgba(182, 19, 236, 0.4)",
          },
          "50%": { boxShadow: "0 0 30px 10px rgba(182, 19, 236, 0.2)" },
        },
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        "pulse-glow-slow": "pulse-glow 4s ease-in-out infinite",
      },
    },
  },
};
