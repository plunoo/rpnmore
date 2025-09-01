import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "hsl(207.9 87.8% 30.4%)",
        accent: "hsl(42.4 95.7% 54.3%)",
        "accent-foreground": "hsl(240 10% 3.9%)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        dark: "hsl(240 10% 3.9%)",
        "dark-card": "hsl(240 10% 10%)",
        "dark-border": "hsl(240 3.7% 15.9%)",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;