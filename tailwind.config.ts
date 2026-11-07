// Cấu hình Tailwind CSS cho Vietnamese with Huyền Hannah
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "Be Vietnam Pro", "Segoe UI", "Arial", "sans-serif"],
        serif: ["var(--font-sans)", "Be Vietnam Pro", "Segoe UI", "Arial", "sans-serif"],
      },
      colors: {
        paper: "var(--paper)",
        navy: "var(--navy)",
        blue: "var(--blue)",
        bright: "var(--bright)",
        yellow: "var(--yellow)",
        ink: "var(--ink)",
        muted: "var(--muted)",
        line: "var(--line)",
        pale: "var(--pale)",
      },
    },
  },
  plugins: [],
};

export default config;

