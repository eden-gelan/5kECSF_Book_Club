/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "white-100": "#fff",
        "blue-100": "#0c2146",
        silver: {
          "100": "#c4c4c4",
          "200": "#bebebe",
          "300": "#bcbcbc",
        },
        lightgray: {
          "100": "#d1d1d1",
          "200": "#ccc",
        },
        tomato: "#ed553b",
        gainsboro: {
          "100": "#e0e0e0",
          "200": "#ddd",
        },
        whitesmoke: {
          "100": "#f6f6f6",
          "200": "#f3f3f7",
        },
        coral: "#f27851",
        darkslategray: "#333",
      
        darkslateblue: {
          "100": "#38426c",
          "200": "#393280",
          "300": "rgba(57, 50, 128, 0.8)",
          "400": "rgba(57, 50, 128, 0.7)",
        },
        gray: {
          "100": "#888",
          "200": "#7a7a7a",
          "300": "#111",
          "400": "rgba(255, 255, 255, 0.52)",
        },
        darkgray: "#a7a7a7",
        dimgray: {
          "100": "#767070",
          "200": "#4d4d4d",
        },
        "primary-purple-dark-10": "rgba(42, 39, 201, 0.1)",
        black: "#000",
        darkslategray: "#173f5f",
        "on-white-grey-100": "#7780a1",
        khaki: "#f6d55c",
        lightgray: {
          "100": "#d1d1d1",
          "200": "#cbcfd0",
          "300": "#cacecf",
        },
        forestgreen: {
          "100": "#42bb4e",
          "200": "#41B64D",
        },
        gainsboro: {
          "100": "#e5e3da",
          "200": "#e0e0e0",
        },
        whitesmoke: {
          "100": "#f6f6f6",
          "200": "#f3f3f7",
        },
        "white-100": "#fff",
        "blue-100": "#0c2146",
        
      },
     
     
      spacing: {},
      fontFamily: {
        inter: "Inter",
        "liberation-sans": "'Liberation Sans'",
        "body-normal-14": "Inter",
        "inria-serif": "'Inria Serif'",
        "red-hat-display": "'Red Hat Display'",
      },
      borderRadius: {
        "3xs": "10px",
        "6xs": "7px",
        "8xs": "5px",
        xl: "20px",
      },
    },
    fontSize: {
      mini :" 0.9375 rems",
      sm: "0.88rem",
      xl: "1.25rem",
      lg: "1.13rem",
      base: "1rem",
      "29xl": "3rem",
      "3xs": "0.63rem",
      xs: "0.75rem",
      "13xl": "2rem",
      "5xl": "1.5rem",
      "41xl": "3.75rem",
      "3xl": "1.38rem",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      sm: {
        max: "420px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
