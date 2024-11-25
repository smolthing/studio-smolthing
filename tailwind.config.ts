import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./content/**/*.mdx", "./public/**/*.svg"],
  theme: {
    extend: {
      colors: {
        "custom-pink": "#FF7396",
        "custom-yellow": "#e6c355",
        "custom-orange": "#FF8048",
        "custom-purple": "#C980DB",
        "custom-green": "#00BEAE",
        "custom-blue": "#00AFC7",
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
} satisfies Config;
