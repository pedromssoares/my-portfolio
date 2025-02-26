import { Moon, Sun } from "lucide-react";
import useTheme from "@/hooks/useTheme";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  const { i18n } = useTranslation();
  const { t } = useTranslation(); 

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "pt" : "en");
  };

  return (
    <header className="w-full bg-primary text-white dark:bg-darkPrimary dark:text-darkText py-4 px-6 shadow-md">
      <div className="mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">{t("myPortfolio")}</h1>
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
