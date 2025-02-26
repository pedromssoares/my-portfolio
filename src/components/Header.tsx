import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { Menu, X, Moon, Sun } from "lucide-react"; // Ícones para o Dark Mode e Menu
import useTheme from "@/hooks/useTheme";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const { i18n } = useTranslation();
  const { t } = useTranslation();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false); // Para evitar erros na renderização SSR

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => {
      setIsCollapsed(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleThemeToggle = () => {
    if (!mounted) return;
    toggleTheme();
  };

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "pt" : "en");
  };

  return (
    <header className="p-4 flex items-center justify-between bg-primary text-white shadow-md w-full fixed top-0 left-0 z-50">
      {/* 🔹 Logo à Esquerda */}
      <Link href="/" className="flex items-center">
        <motion.div className="text-xl md:text-3xl font-extrabold tracking-wide flex items-center">
          <AnimatePresence mode="wait">
            {!isCollapsed ? (
              <motion.span
                key="fullName"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5 }}
                className="whitespace-nowrap"
              >
                <span className="text-secondary">Pedro</span>
                <span className="text-accent">Soares</span>
              </motion.span>
            ) : (
              <motion.span
                key="initials"
                className="flex space-x-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5 }}
              >
                <motion.span
                  className="text-secondary"
                  initial={{ x: 0 }}
                  animate={{ x: 6 }}
                  transition={{ duration: 0.5 }}
                >
                  P
                </motion.span>
                <motion.span
                  className="text-accent"
                  initial={{ x: 0 }}
                  animate={{ x: -6 }}
                  transition={{ duration: 0.5 }}
                >
                  S
                </motion.span>
              </motion.span>
            )}
          </AnimatePresence>
        </motion.div>
      </Link>

      {/* 🔹 Menu Desktop e Botões - Alinhados à Direita */}
      <div className="hidden md:flex items-center space-x-6 ml-auto">
        <Link href="/about" className="hover:text-gray-300 transition">
          {t("aboutMenu")}
        </Link>
        <Link href="/projects" className="hover:text-gray-300 transition">
          {t("projectsMenu")}
        </Link>
        <Link href="/contact" className="hover:text-gray-300 transition">
          {t("contactMenu")}
        </Link>

        {/* 🔹 Botão de Troca de Idioma */}
        <button
          onClick={toggleLanguage}
          className="p-2 bg-white text-primary rounded-full hover:bg-gray-200 transition"
        >
          {i18n.language === "en" ? "🇧🇷 PT" : "🇺🇸 EN"}
        </button>

        {/* 🔹 Botão de Dark Mode */}
        {mounted && (
          <button
            onClick={handleThemeToggle}
            className="p-2 bg-white text-primary rounded-full hover:bg-gray-200 transition"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        )}
      </div>

      {/* 🔹 Menu Mobile (Hambúrguer) - Alinhado à Direita */}
      <div className="md:hidden flex items-center space-x-4">
        {/* 🔹 Botão de Troca de Idioma no Mobile */}
        <button
          onClick={toggleLanguage}
          className="p-2 bg-white text-primary rounded-full hover:bg-gray-200 transition"
        >
          {i18n.language === "en" ? "🇧🇷 PT" : "🇺🇸 EN"}
        </button>

        {/* 🔹 Botão de Dark Mode no Mobile */}
        {mounted && (
          <button
            onClick={handleThemeToggle}
            className="p-2 bg-white text-primary rounded-full hover:bg-gray-200 transition"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        )}

        {/* 🔹 Botão de Abrir/Fechar Menu Mobile */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="p-2">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* 🔹 Menu Mobile Dropdown */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-16 left-0 w-full bg-primary text-white shadow-md flex flex-col items-center py-4 space-y-4 md:hidden"
        >
          <Link
            href="/about"
            className="hover:text-gray-300 transition"
            onClick={() => setMenuOpen(false)}
          >
            {t("aboutMenu")}
          </Link>
          <Link
            href="/projects"
            className="hover:text-gray-300 transition"
            onClick={() => setMenuOpen(false)}
          >
            {t("projectsMenu")}
          </Link>
          <Link
            href="/contact"
            className="hover:text-gray-300 transition"
            onClick={() => setMenuOpen(false)}
          >
            {t("contactMenu")}
          </Link>
        </motion.div>
      )}
    </header>
  );
}