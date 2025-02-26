import { Moon, Sun } from "lucide-react";
import useTheme from "@/hooks/useTheme";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsCollapsed(true); // 🔹 Após 2 segundos, reduz para "PS"
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const { i18n } = useTranslation();
  const { t } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "pt" : "en");
  };

  return (
    <header className="w-full bg-primary text-white dark:bg-darkPrimary dark:text-darkText py-4 px-6 shadow-md">
      <div className="mx-auto flex justify-between items-center">
        {/* 🔹 Logo Animado */}
        <Link href="/">
          <motion.div className="text-3xl md:text-4xl font-extrabold tracking-wide flex items-center">
            <AnimatePresence mode="wait">
              {!isCollapsed ? (
                <motion.span
                  key="fullName"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="text-secondary">Pedro</span>
                  <span className="text-accent">Soares</span>
                </motion.span>
              ) : (
                <motion.span
                  key="initials"
                  className="flex space-x-1" // 🔹 Adicionamos espaçamento fixo entre "P" e "S"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.span
                    className="text-secondary"
                    initial={{ x: 0 }}
                    animate={{ x: 6 }} // 🔹 Ajustamos a distância final para não sobrepor
                    transition={{ duration: 0.5 }}
                  >
                    P
                  </motion.span>
                  <motion.span
                    className="text-accent"
                    initial={{ x: 0 }}
                    animate={{ x: -1 }} // 🔹 Ajustamos a distância final para não sobrepor
                    transition={{ duration: 0.5 }}
                  >
                    S
                  </motion.span>
                </motion.span>
              )}
            </AnimatePresence>
          </motion.div>
        </Link>
        <nav className="flex items-center gap-6">
          <ul className="flex gap-6">
            <li>
              <a
                href="#about"
                className="hover:text-accent dark:hover:text-darkAccent transition"
              >
                {t("about")}
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-accent dark:hover:text-darkAccent transition"
              >
                {t("projects")}
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-accent dark:hover:text-darkAccent transition"
              >
                {t("contact")}
              </a>
            </li>
          </ul>
          {/* Dark Mode Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-primary dark:bg-darkPrimary hover:bg-opacity-80 transition-all"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/*Language Toggle Button*/}
          <button
            onClick={toggleLanguage}
            className="bg-white text-primary px-4 py-2 rounded"
          >
            {i18n.language === "en" ? "🇧🇷 PT" : "🇺🇸 EN"}
          </button>
        </nav>
      </div>
    </header>
  );
}
