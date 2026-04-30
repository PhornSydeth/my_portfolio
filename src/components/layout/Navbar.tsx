// components/layout/Navbar.tsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Gradient from "../ui/Gradient";
import { useTheme } from "./ThemeProvider";
import {
  FiHome, FiUser, FiCode, FiBriefcase,
  FiMail, FiMenu, FiX, FiSun, FiMoon,
} from "react-icons/fi";
import { HiSparkles } from "react-icons/hi2";

// ─── Nav items ────────────────────────────────────────────────────────────────
const navItems = [
  { label: "Home",       href: "#home",       icon: FiHome      },
  { label: "About",      href: "#about",      icon: FiUser      },
  { label: "Skills",     href: "#skills",     icon: HiSparkles  },
  { label: "Projects",   href: "#projects",   icon: FiCode      },
  { label: "Experience", href: "#experience", icon: FiBriefcase },
  { label: "Contact",    href: "#contact",    icon: FiMail      },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [activeItem, setActiveItem] = useState("#home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // ── Shrink navbar on scroll ──────────────────────────────────────────────────
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ── Active section via IntersectionObserver ──────────────────────────────────
  useEffect(() => {
    const sectionIds = navItems.map((n) => n.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveItem(`#${id}`);
        },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // ── Close mobile menu on resize ──────────────────────────────────────────────
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setIsMobileMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/85 dark:bg-gray-950/85 backdrop-blur-xl border-b border-gray-200/60 dark:border-white/10 shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between px-6 transition-all duration-300 ${
          scrolled ? "h-14" : "h-18"
        }`}
      >
        {/* ── Logo ── */}
        <motion.a
          href="#home"
          onClick={() => setActiveItem("#home")}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center gap-2 select-none"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg shadow-blue-500/20">
            <span className="text-sm font-black text-white">PS</span>
          </div>
          <Gradient className="text-base font-extrabold tracking-tight hidden sm:block">
            Phorn Sydeth
          </Gradient>
        </motion.a>

        {/* ── Desktop nav pill ── */}
        <ul className="hidden md:flex items-center gap-0.5 rounded-full border border-gray-200/60 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-md p-1 shadow-sm">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeItem === item.href;
            return (
              <li key={item.href} className="relative">
                <a
                  href={item.href}
                  onClick={() => setActiveItem(item.href)}
                  className={`relative z-10 flex items-center gap-1.5 px-3.5 py-2 text-[0.8rem] font-semibold rounded-full transition-colors duration-200 ${
                    isActive
                      ? "text-white"
                      : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="nav-active-pill"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg shadow-blue-500/25"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <Icon className="relative z-10 text-[0.9rem] shrink-0" />
                  <span className="relative z-10">{item.label}</span>
                </a>
              </li>
            );
          })}
        </ul>

        {/* ── Right controls ── */}
        <div className="flex items-center gap-2">
          {/* Theme toggle */}
          <motion.button
            onClick={toggleTheme}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.93 }}
            aria-label="Toggle theme"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200/60 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-sm shadow-sm text-gray-600 dark:text-gray-300 transition-colors hover:border-blue-400/50"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={theme}
                initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                animate={{ rotate: 0,   opacity: 1, scale: 1   }}
                exit={{   rotate:  90, opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.25 }}
                className="flex items-center justify-center text-base"
              >
                {theme === "light" ? <FiMoon /> : <FiSun />}
              </motion.span>
            </AnimatePresence>
          </motion.button>

          {/* Mobile hamburger */}
          <motion.button
            onClick={() => setIsMobileMenuOpen((o) => !o)}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.93 }}
            aria-label="Toggle mobile menu"
            className="md:hidden flex h-9 w-9 items-center justify-center rounded-full border border-gray-200/60 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-sm shadow-sm text-gray-600 dark:text-gray-300"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={isMobileMenuOpen ? "x" : "menu"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0,   opacity: 1 }}
                exit={{   rotate:  90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center text-lg"
              >
                {isMobileMenuOpen ? <FiX /> : <FiMenu />}
              </motion.span>
            </AnimatePresence>
          </motion.button>
        </div>
      </nav>

      {/* ── Mobile drawer ──────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 top-14 z-40 bg-black/20 dark:bg-black/40 backdrop-blur-sm md:hidden"
            />

            {/* Drawer panel */}
            <motion.div
              key="drawer"
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0,   scale: 1    }}
              exit={{   opacity: 0, y: -12, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 320, damping: 28 }}
              className="absolute left-4 right-4 top-[calc(100%+8px)] z-50 md:hidden overflow-hidden rounded-2xl border border-gray-200/60 dark:border-white/10 bg-white/95 dark:bg-gray-950/95 backdrop-blur-xl shadow-2xl"
            >
              <ul className="flex flex-col gap-1 p-3">
                {navItems.map((item, i) => {
                  const Icon = item.icon;
                  const isActive = activeItem === item.href;
                  return (
                    <motion.li
                      key={item.href}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <a
                        href={item.href}
                        onClick={() => {
                          setActiveItem(item.href);
                          setIsMobileMenuOpen(false);
                        }}
                        className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-200 ${
                          isActive
                            ? "bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-600 dark:text-blue-400 border border-blue-200/50 dark:border-blue-500/20"
                            : "text-gray-600 dark:text-gray-400 hover:bg-gray-100/70 dark:hover:bg-white/5 hover:text-gray-900 dark:hover:text-white"
                        }`}
                      >
                        <span
                          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-base ${
                            isActive
                              ? "bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-sm"
                              : "bg-gray-100 dark:bg-white/8 text-gray-500 dark:text-gray-400"
                          }`}
                        >
                          <Icon />
                        </span>
                        {item.label}
                        {isActive && (
                          <motion.span
                            layoutId="mobile-active-dot"
                            className="ml-auto h-1.5 w-1.5 rounded-full bg-blue-500"
                          />
                        )}
                      </a>
                    </motion.li>
                  );
                })}
              </ul>

              {/* Mobile footer strip */}
              <div className="border-t border-gray-100 dark:border-white/8 px-4 py-3 flex items-center justify-between">
                <span className="text-xs text-gray-400 dark:text-gray-500 font-medium">
                  Phorn Sydeth © 2025
                </span>
                <button
                  onClick={toggleTheme}
                  className="flex items-center gap-1.5 rounded-full border border-gray-200/60 dark:border-white/10 bg-gray-50 dark:bg-white/5 px-3 py-1.5 text-xs font-semibold text-gray-500 dark:text-gray-400"
                >
                  {theme === "light" ? <FiMoon className="text-sm" /> : <FiSun className="text-sm" />}
                  {theme === "light" ? "Dark" : "Light"}
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
