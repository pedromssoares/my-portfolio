export default function Header() {
  return (
    <header className="w-full bg-primary text-text dark:bg-gray-900 dark:text-white py-4 px-6 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Portfolio</h1>
        <nav>
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
        </nav>
      </div>
    </header>
  );
}
