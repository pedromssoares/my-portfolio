import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#fdf6e3",  // Tom pastel para o fundo claro
        text: "#3b3a30",        // Cor escura para contraste
        primary: "#ffdac1",     // Tom creme
        secondary: "#a2d5f2",   // Azul pastel
        accent: "#ffb6b9",      // Detalhes em rosa pastel
        darkBackground: "#1a1a1a",  // Fundo escuro para dark mode
        darkText: "#ffffff",         // Texto branco no dark mode
      },
    },
  },
  plugins: [],
} satisfies Config;
