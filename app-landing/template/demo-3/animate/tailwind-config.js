tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#3b82f6", // Blue-500
        "primary-light": "#93c5fd", // Blue-300
        "primary-dark": "#1d4ed8", // Blue-700
        "background-light": "#eff6ff", // Blue-50
        "background-dark": "#111827", // Gray-900
      },
      fontFamily: {
        display: ["Spline Sans", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.5rem",
        lg: "1rem",
        xl: "1.5rem",
        full: "9999px",
      },
    },
  },
};
