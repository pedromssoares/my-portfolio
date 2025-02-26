import { Moon, Sun } from "lucide-react";
import useTheme from "@/hooks/useTheme";

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="w-full bg-primary text-white dark:bg-darkPrimary dark:text-darkText py-4 px-6 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Portfolio</h1>
        <nav className="flex items-center gap-6">
          <ul className="flex gap-6">
            <li>
              <a href="#about" className="hover:text-accent dark:hover:text-darkAccent transition">About</a>
            </li>
            <li>
              <a href="#projects" className="hover:text-accent dark:hover:text-darkAccent transition">Projects</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-accent dark:hover:text-darkAccent transition">Contact</a>
            </li>
          </ul>
          {/* Dark Mode Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-primary dark:bg-darkPrimary hover:bg-opacity-80 transition-all"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>
      </div>
    </header>
  );
}