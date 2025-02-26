export default function Footer() {
  return (
    <footer className="w-full bg-secondary text-text dark:bg-gray-900 dark:text-white py-4 px-6 text-center mt-auto">
      <p>© {new Date().getFullYear()} Pedro Soares. All rights reserved.</p>
    </footer>
  );
}
