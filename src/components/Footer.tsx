import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="w-full bg-secondary text-white dark:bg-darkSecondary dark:text-darkText py-4 px-6 text-center mt-auto">
      <p>
        © {new Date().getFullYear()} {t("footer")}
      </p>
    </footer>
  );
}
