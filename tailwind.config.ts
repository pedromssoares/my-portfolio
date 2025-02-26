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
        background: "#F9FAFB",  // Fundo claro moderno
        text: "#1F2937",        // Texto azul acinzentado
        primary: "#6366F1",     // Roxo moderno
        secondary: "#1F2937",   // Vermelho vibrante
        accent: "#A5B4FC",      // Azul pastel
        darkBackground: "#111827", // Fundo escuro clean
        darkText: "#F3F4F6",       // Texto claro para contraste
        darkPrimary: "#8B5CF6",    // Roxo mais vibrante no dark mode
        darkSecondary: "#1F2937",  // Vermelho quente no dark mode
        darkAccent: "#93C5FD",     // Azul suave para harmonia
      },
    },
  },
  plugins: [],
} satisfies Config;
