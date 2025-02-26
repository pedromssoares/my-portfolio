export default function Footer() {
  return (
    <footer className="w-full bg-secondary text-white dark:bg-darkSecondary dark:text-darkText py-4 px-6 text-center mt-auto">
      <p>© {new Date().getFullYear()} Pedro Soares. All rights reserved.</p>
    </footer>
  );
}
