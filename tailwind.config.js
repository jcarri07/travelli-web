/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Legacy colors kept for backward compat
        color1: "#D7573B",
        color2: "#FA9C0F",
        color3: "#152F37",
        color4: "#35528B",
        // Dark mode design system
        dark: {
          bg: "#000000",
          surface: "#0A0A0A",
          card: "#111111",
          border: "#1C1C1C",
          muted: "#222222",
        },
        orange: {
          electric: "#FF6B00",
          DEFAULT: "#FF7A20",
          sunset: "#FF9500",
          glow: "#FFB84D",
          50: "#FFF3E0",
          100: "#FFE0B2",
          200: "#FFCC80",
          300: "#FFB74D",
          400: "#FFA726",
          500: "#FF9500",
          600: "#FF7A20",
          700: "#FF6B00",
          800: "#E65100",
          900: "#BF360C",
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "orange-gradient": "linear-gradient(135deg, #FF6B00 0%, #FF9500 50%, #FFB84D 100%)",
        "dark-gradient": "linear-gradient(180deg, #000000 0%, #0A0A0A 100%)",
      },
      keyframes: {
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "mesh-move": {
          "0%": { transform: "translate(0%, 0%) scale(1)" },
          "33%": { transform: "translate(5%, -5%) scale(1.05)" },
          "66%": { transform: "translate(-3%, 3%) scale(0.98)" },
          "100%": { transform: "translate(0%, 0%) scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.05)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "gradient-shift": "gradient-shift 8s ease infinite",
        "mesh-move": "mesh-move 12s ease-in-out infinite",
        float: "float 4s ease-in-out infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        "orange-glow": "0 0 30px rgba(255, 107, 0, 0.3)",
        "orange-glow-lg": "0 0 60px rgba(255, 107, 0, 0.25)",
        "card-dark": "0 4px 24px rgba(0, 0, 0, 0.5)",
        glass: "0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255,255,255,0.05)",
      },
    },
  },
  plugins: [],
};
