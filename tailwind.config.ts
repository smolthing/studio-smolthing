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
      animation: {
        "expand-shrink": "expandShrink 1s infinite ease-in-out",
        "bounce-drop": "bounceDrop 0.5s ease-out",
      },
      keyframes: {
        expandShrink: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(2)" },
        },
        bounceDrop: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "50%": { transform: "translateY(0)", opacity: "1" },
          "70%": { transform: "translateY(-10%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
} satisfies Config;
