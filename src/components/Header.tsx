import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Ícones para menu hambúrguer

export default function Header() {
  const { i18n } = useTranslation();
  const { t } = useTranslation();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // Estado do menu hambúrguer

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsCollapsed(true); // 🔹 Após 2 segundos, reduz para "PS"
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "pt" : "en");
  };

  return (
    <header className="p-4 flex justify-between items-center bg-primary text-white shadow-md w-full fixed top-0 left-0 z-50">
      {/* 🔹 Logo Responsivo */}
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

      {/* 🔹 Navegação para Desktop */}
      <nav className="hidden md:flex space-x-6 ml-auto pr-4">
        <Link href="#about" className="hover:text-gray-300 transition">
          {t("about")}
        </Link>
        <Link href="#projects" className="hover:text-gray-300 transition">
          {t("projects")}
        </Link>
        <Link href="#contact" className="hover:text-gray-300 transition">
          {t("contact")}
        </Link>
      </nav>

      {/* 🔹 Menu Hambúrguer (Mobile) */}
      <div className="md:hidden flex items-center">
        {/* 🔹 Botão de idioma no Mobile */}
        <button
          onClick={toggleLanguage}
          className="bg-white text-primary px-2 py-2 rounded-md hover:bg-gray-200 transition mr-4"
        >
          {i18n.language === "en" ? "🇧🇷 PT" : "🇺🇸 EN"}
        </button>

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
            href="#about"
            className="hover:text-gray-300 transition"
            onClick={() => setMenuOpen(false)}
          >
            {t("about")}
          </Link>
          <Link
            href="#projects"
            className="hover:text-gray-300 transition"
            onClick={() => setMenuOpen(false)}
          >
            {t("projects")}
          </Link>
          <Link
            href="#contact"
            className="hover:text-gray-300 transition"
            onClick={() => setMenuOpen(false)}
          >
            {t("contact")}
          </Link>
        </motion.div>
      )}

      {/* 🔹 Botão Responsivo de Troca de Idioma */}
      <button
        onClick={toggleLanguage}
        className="hidden md:block bg-white text-primary px-4 py-2 rounded-md hover:bg-gray-200 transition text-sm md:text-base"
      >
        {i18n.language === "en" ? "🇧🇷 PT" : "🇺🇸 EN"}
      </button>
    </header>
  );
}
