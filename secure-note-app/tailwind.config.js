/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        headerColor: "#242530",
        textColor: "#ffffff",
        textColorDark: "#e5e5e5", // Darker text color for dark mode
        btnColor: "#0172F4",
        btnColorDark: "#0056b3", // Dark variant for button color
        noteColor: "#FFCF7C",
        headerColorDark: "#1e1e1e", // Darker background for dark mode
        customRed: '#e53935', // Custom red color
      },
      fontWeight: {
        customWeight: 500,
      },
      height: {
        headerHeight: "74px",
      },
      maxHeight: {
        navbarHeight: "420px",
      },
      minHeight: {
        customHeight: "530px",
      },
      fontFamily: {
        dancingScript: ["Dancing Script"],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      fontSize: {
        logoText: "30px",
        customText: "15px",
        tableHeaderText: "16px",
        headerText: ["50px", "60px"], // Responsive header text
        tableHeader: "15px", // Uniform table header text size
      },
      backgroundColor: {
        customRed: "rgba(172, 30, 35, 1)",
        testimonialCard: "#F9F9F9",
        btnColorDark: "#006aff", // Dark variant for button background
      },
      boxShadow: {
        custom: "0 0 15px rgba(0, 0, 0, 0.3)",
        light: "0 0 10px rgba(255, 255, 255, 0.1)", // Light shadow for dark mode
        dark: "0 0 20px rgba(0, 0, 0, 0.5)", // Dark shadow for darker themes
        custom: '0 0 10px rgba(0, 0, 0, 0.1)', // Custom shadow utility
      },
      spacing: {
        customSpacing: "16px", // Custom spacing utility
        customPadding: "20px", // Custom padding utility
      },
    },
  },
  plugins: [],
}
