module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "colorbrand-brand-bg": "var(--colorbrand-brand-bg)",
        "colorbrand-brand-primary": "var(--colorbrand-brand-primary)",
        "coloricon-icon": "var(--coloricon-icon)",
        "coloricon-icon-white": "var(--coloricon-icon-white)",
        "coloroutline-border": "var(--coloroutline-border)",
        "coloroutline-secondary-border": "var(--coloroutline-secondary-border)",
        "colortext-text-primary": "var(--colortext-text-primary)",
        "colortext-text-tertiary": "var(--colortext-text-tertiary)",
        "colortext-text-white": "var(--colortext-text-white)",
        "colorwhite-base-white": "var(--colorwhite-base-white)",
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
      },
      fontFamily: {
        "cap-c1-medium-24-130": "var(--cap-c1-medium-24-130-font-family)",
        "cap-c2-medium-18-130": "var(--cap-c2-medium-18-130-font-family)",
        "cap-c3-medium-16-130": "var(--cap-c3-medium-16-130-font-family)",
        "heading-h1-bold-64-130": "var(--heading-h1-bold-64-130-font-family)",
        "heading-h2-bold-40-130": "var(--heading-h2-bold-40-130-font-family)",
        "heading-h3-bold-24-130": "var(--heading-h3-bold-24-130-font-family)",
        "heading-h4-bold-20-130": "var(--heading-h4-bold-20-130-font-family)",
        "heading-h5-bold-16-130": "var(--heading-h5-bold-16-130-font-family)",
        "heading-h6-bold-14-130": "var(--heading-h6-bold-14-130-font-family)",
        "para-p2-regular-18-130": "var(--para-p2-regular-18-130-font-family)",
        "para-p3-regular-16-130": "var(--para-p3-regular-16-130-font-family)",
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
  },
  plugins: [],
  darkMode: ["class"],
};
