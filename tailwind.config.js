const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./lib/**/*.{js,jsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        lg: "1.75rem",
        xl: "2rem",
        "2xl": "2.5rem",
      },
      screens: {
        "2xl": "1320px",
      },
    },
    extend: {
      screens: {
        "3xl": "1920px",
      },
      colors: {
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
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        brand: {
          ink: "#07111f",
          navy: "#0c2340",
          blue: "#1277ff",
          cyan: "#38c6ff",
          mist: "#e8f0ff",
          slate: "#6b7a90",
        },
      },
      fontFamily: {
        sans: ["var(--font-body)", ...defaultTheme.fontFamily.sans],
        display: ["var(--font-display)", ...defaultTheme.fontFamily.sans],
      },
      borderRadius: {
        xl: "calc(var(--radius) + 0.25rem)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 0.125rem)",
        sm: "calc(var(--radius) - 0.375rem)",
      },
      boxShadow: {
        premium:
          "0 20px 50px -24px rgba(9, 24, 44, 0.34), 0 20px 80px -40px rgba(18, 119, 255, 0.35)",
        soft: "0 15px 45px -30px rgba(13, 25, 46, 0.22)",
        glow: "0 0 0 1px rgba(255,255,255,0.1), 0 18px 60px -24px rgba(56, 198, 255, 0.4)",
        cyanGlow: "0 0 25px rgba(56, 198, 255, 0.45), 0 0 50px rgba(18, 119, 255, 0.2)",
      },
      backgroundImage: {
        "hero-grid":
          "linear-gradient(to right, rgba(12,35,64,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(12,35,64,0.08) 1px, transparent 1px)",
        "brand-radial":
          "radial-gradient(circle at top, rgba(18,119,255,0.18), transparent 42%), radial-gradient(circle at bottom right, rgba(56,198,255,0.16), transparent 38%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.55", transform: "scale(1)" },
          "50%": { opacity: "0.85", transform: "scale(1.05)" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        // --- Added Animations ---
        marqueeLeft: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        marqueeRight: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        scanline: {
          "0%": { top: "-2px", opacity: "0" },
          "15%": { opacity: "1" },
          "85%": { opacity: "1" },
          "100%": { top: "100%", opacity: "0" },
        },
        rotateSlow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        livePulse: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.35", transform: "scale(0.85)" },
        },
        ribbonShine: {
          "0%": { left: "-100%" },
          "40%, 100%": { left: "200%" },
        },
        laserFlow: {
          "0%": { strokeDashoffset: "325" },
          "100%": { strokeDashoffset: "0" },
        },
        tabProgress: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        smokeDrift: {
          "0%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(35px, -25px) scale(1.08)" },
          "100%": { transform: "translate(-25px, 30px) scale(0.95)" },
        },
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        "float-slow": "floatSlow 11s ease-in-out infinite",
        "pulse-glow": "pulseGlow 8s ease-in-out infinite",
        "slide-up": "slideUp 0.7s ease-out both",
        // --- Added Utility Classes ---
        "marquee-left": "marqueeLeft 32s linear infinite",
        "marquee-right": "marqueeRight 34s linear infinite",
        "scanline": "scanline 4s linear infinite",
        "spin-slow": "rotateSlow 14s linear infinite",
        "live-pulse": "livePulse 1.8s infinite",
        "ribbon-shine": "ribbonShine 4.5s infinite linear",
        "laser-stream": "laserFlow 3s linear infinite",
        "tab-progress": "tabProgress 5.5s linear forwards",
        "smoke-drift": "smokeDrift 20s ease-in-out infinite alternate",
      },
    },
  },
  plugins: [],
};