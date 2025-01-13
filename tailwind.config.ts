import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/screens/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // keyframes: {
      //   "border-spin": {
      //     "100%": {
      //       transform: "rotate(-360deg)",
      //     },
      //   },
      // },
      animation: {
        "spin-slow": "spin 3s linear infinite",
        "border-spin": "border-spin 7s linear infinite",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
