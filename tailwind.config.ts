import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./content/**/*.mdx", "./public/**/*.svg"],
  theme: {
    extend: {
      colors: {
        "custom-pink": "#FF7396",
        "custom-yellow": "#FCCB30",
        "custom-orange": "#FF8048",
        "custom-purple": "#C980DB",
        "custom-green": "#00BEAE",
        "custom-blue": "#00AFC7",
      },
      boxShadow: {
        "custom-black": "2px 2px 0 0 black",
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
} satisfies Config;
