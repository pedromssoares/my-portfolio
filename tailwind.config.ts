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
        background: "#fdf6e3",  // Tom pastel para o fundo claro
        text: "#3b3a30",        // Cor escura para contraste
        primary: "#ffb6b9",     // Rosa pastel
        secondary: "#a2d5f2",   // Azul pastel
        accent: "#ffdac1",      // Detalhes em tom creme
        darkBackground: "#1a1a1a",  // Fundo escuro para dark mode
        darkText: "#ffffff",         // Texto branco no dark mode
      },
    },
  },
  plugins: [],
} satisfies Config;
