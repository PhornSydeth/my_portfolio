// components/layout/Navbar.tsx
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Gradient from "../ui/Gradient";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // Apply the theme globally
  useEffect(() => {
    const stored = localStorage.getItem("theme") as "light" | "dark" | null;
    const initialTheme = stored ?? "light";
    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    localStorage.setItem("theme", next);
  };

  return (
    <motion.header
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur dark:border-gray-800 dark:bg-gray-950/80"
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Gradient className="text-lg font-bold tracking-tight">
          Phorn Sydeth
        </Gradient>

        <ul className="hidden gap-6 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm font-medium text-gray-700 transition hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={toggleTheme}
          className="rounded-lg p-2 transition hover:bg-gray-100 dark:hover:bg-gray-800"
          aria-label="Toggle theme"
        >
          <motion.span
            key={theme}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="text-lg"
          >
          
          </motion.span>
        </button>
      </nav>
    </motion.header>
  );
}
