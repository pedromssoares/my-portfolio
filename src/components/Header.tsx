import { Moon, Sun } from "lucide-react";
import useTheme from "@/hooks/useTheme";

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="w-full bg-primary text-text dark:bg-gray-900 dark:text-white py-4 px-6 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Portfolio</h1>
        <nav className="flex items-center gap-6">
          <ul className="flex gap-6">
            <li>
              <a href="#about" className="hover:text-accent transition">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-accent transition">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-accent transition">
                Contact
              </a>
            </li>
          </ul>
          {/* Dark Mode Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 transition-all"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>
      </div>
    </header>
  );
}
