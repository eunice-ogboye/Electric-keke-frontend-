/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: "true",
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      boxShadow: {
        DEFAULT: "0 5px 4px  rgba(0, 0, 0, 0.1)",
        flex: "0 6px 12px rgba(0, 0, 0, 0.25)",
        service:
          "0 44px 26px rgba(0, 0, 0, 0.05), 0 79px 32px 30px rgba(0, 0, 0, 0.01)",
      },
      dropShadow: {
        DEFAULT: "0 35px 35px rgba(0, 0, 0, 0.25)",
        service: ",",
      },
      screens: {
        mobile: "480px",
        tablet: "834px",
        laptop: "1440px",
      },
      fontFamily: {
        josefin: ["Josefin Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        inter: ["Inter", "system-ui"],
        nunito: ["Nunito", "system-ui"],
      },
      fontSize: {
        eiteen: "1.125rem",
        xxs: "0.625rem",
      },
      colors: {
        primary: {
          100: "#E8F4E8",
          200: "#D2E8D2",
          300: "#BBDDBB",
          400: "#A4D2A4",
          500: "#8EC68E",
          600: "#5CAE5C",
          700: "#4B974B",
          800: "#3E7C3E",
          900: "#316131",
          1000: "#234623",
        },
        secondary: {
          100: "#E7EBEF",
          200: "#DAE1E7",
          300: "#CED7DE",
          400: "#C2CDD6",
          500: "#B6C3CD",
          600: "#92A5B5",
          700: "#7991A4",
          800: "#637D92",
          900: "#323F49",
          1000: "#323F49",
        },
        neutral: {
          DEFAULT: "#FAFAFA",
          100: "#E3E3E3",
          200: "#CCCBCB",
          300: "#B5B3B3",
          400: "#9F9C9C",
          500: "#898483",
          600: "#726C6C",
          700: "#5A5555",
          800: "#433F3E",
          900: "#2B2928",
          1000: "#0A0B0A",
        },
        success: {
          100: "#A4F4E7",
          200: "#15B097",
          300: "#0B7B69",
        },
        warning: {
          100: "#F4C790",
          200: "#EDA145",
          300: "#CC7914",
        },
        error: {
          100: "#E4626F",
          200: "#C03744",
          300: "#8C1823",
        },
        "eco-green": {
          DEFAULT: "#77BB77",
          prime: "#8EC68E",
          dark: "#234623",
          faint: "#E8F4E8",
          faint2: "#A2C7A2",
          social: "#F4F6F9",
          agile: "#D2E8D2",
        },
        "eco-white": {
          DEFAULT: "#FAFAFA",
        },
        "eco-neutral": {
          DEFAULT: "#151413",
          thick: "#101828",
          thick2: "#9F9C9C",
          input: "#B5B3B3",
          prime: "#898483",
          border: "#CCCBCB",
          faint: "#9F9C9C",
          bg: "#B5B3B3",
          driver: "#F2F2F2",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          1: "#696F79",
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        tblack: {
          DEFAULT: "#494949",
        },
        "base-white": "#FAFAFA",
        head: "#5CAE5C",
        error: "#C03744",
        warning: "#EDA145",
        peach: "#EDA14580",
        info: "#0A0B0A",
        tertiary: "#F5F5F5",
        silver: "#768EA9",
        modal: "#DEE5ED",
        clear: "#E7E7E7",
        connect: "#F2F4F5",
      },
      borderRadius: {
        20: "20px",
        normal: "36px",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
