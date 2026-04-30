// components/layout/Footer.tsx
import { motion } from "framer-motion";
import {
  FiHome, FiUser, FiCode, FiBriefcase,
  FiMail, FiPhone, FiArrowUp,
} from "react-icons/fi";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { FaFacebook, FaTelegram, FaInstagram } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";

// ─── Data ─────────────────────────────────────────────────────────────────────
const navLinks = [
  { label: "Home",       href: "#home",       icon: FiHome      },
  { label: "About",      href: "#about",      icon: FiUser      },
  { label: "Skills",     href: "#skills",     icon: HiSparkles  },
  { label: "Projects",   href: "#projects",   icon: FiCode      },
  { label: "Experience", href: "#experience", icon: FiBriefcase },
  { label: "Contact",    href: "#contact",    icon: FiMail      },
];

const socials = [
  { label: "GitHub",    href: "https://github.com/PhornSydeth/",              icon: SiGithub,    color: "#6b7280" },
  { label: "LinkedIn",  href: "https://linkedin.com/",                         icon: SiLinkedin,  color: "#60a5fa" },
  { label: "Facebook",  href: "https://www.facebook.com/share/16oSTDZZWe/",   icon: FaFacebook,  color: "#3b82f6" },
  { label: "Telegram",  href: "https://t.me/your_telegram",                   icon: FaTelegram,  color: "#229ED9" },
  { label: "Instagram", href: "https://instagram.com/your_instagram",         icon: FaInstagram, color: "#DD2A7B" },
];

const contactDetails = [
  { icon: FiMail,  label: "sydethphorn@gmail.com", href: "mailto:sydethphorn@gmail.com" },
  { icon: FiPhone, label: "+855 97 906 0729",       href: "tel:+855979060729"           },
];

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden border-t border-gray-200/60 dark:border-white/10 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md"
    >
      {/* ── Ambient glows ── */}
      <div className="pointer-events-none absolute left-[-100px] top-0 h-[250px] w-[250px] rounded-full bg-blue-500/8 dark:bg-blue-500/10 blur-[80px] -z-10" />
      <div className="pointer-events-none absolute right-[-100px] bottom-0 h-[200px] w-[200px] rounded-full bg-purple-500/8 dark:bg-purple-500/10 blur-[80px] -z-10" />

      {/* ── Grid texture ── */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.025] dark:opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(#888 1px, transparent 1px), linear-gradient(90deg, #888 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* ── Top accent line ── */}
      <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

      <div className="mx-auto max-w-6xl px-6 py-14">

        {/* ── Main grid: 3 columns ── */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 mb-12">

          {/* ── Col 1: Brand ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {/* Logo */}
            <a href="#home" className="inline-flex items-center gap-2.5 mb-4 group">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-shadow">
                <span className="text-sm font-black text-white">PS</span>
              </div>
              <span className="text-base font-extrabold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Phorn Sydeth
              </span>
            </a>

            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-5 max-w-xs">
              Full Stack Developer passionate about crafting clean, scalable, and beautiful
              digital products — from backend APIs to polished UIs.
            </p>

            {/* Availability pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/8 dark:bg-emerald-500/10 px-4 py-1.5">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                Open to opportunities
              </span>
            </div>
          </motion.div>

          {/* ── Col 2: Quick links ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            <h4 className="mb-5 text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
              Quick Links
            </h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5">
              {navLinks.map(({ label, href, icon: Icon }) => (
                <li key={href}>
                  <motion.a
                    href={href}
                    whileHover={{ x: 3 }}
                    className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                  >
                    <Icon className="text-xs shrink-0 opacity-60" />
                    {label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ── Col 3: Contact ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="mb-5 text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
              Contact
            </h4>
            <ul className="space-y-3 mb-6">
              {contactDetails.map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <motion.a
                    href={href}
                    whileHover={{ x: 3 }}
                    className="inline-flex items-center gap-2.5 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                  >
                    <Icon className="text-sm shrink-0 text-blue-500/60" />
                    {label}
                  </motion.a>
                </li>
              ))}
            </ul>

            {/* Social icons */}
            <div className="flex flex-wrap gap-2">
              {socials.map(({ label, href, icon: Icon, color }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.92 }}
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-gray-200/60 dark:border-white/10 bg-white/70 dark:bg-white/5 text-gray-500 dark:text-gray-400 shadow-sm hover:shadow-md transition-shadow"
                  style={{ "--hover-color": color } as React.CSSProperties}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = color)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "")
                  }
                >
                  <Icon className="text-base" />
                </motion.a>
              ))}
            </div>
          </motion.div>

        </div>

        {/* ── Divider ── */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-white/10 to-transparent mb-6" />

        {/* ── Bottom bar ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400 dark:text-gray-500 text-center sm:text-left">
            © {year}{" "}
            <span className="font-semibold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Phorn Sydeth
            </span>
            . All rights reserved. Built with React & ❤️
          </p>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.08, y: -2 }}
            whileTap={{ scale: 0.93 }}
            className="flex items-center gap-2 rounded-full border border-gray-200/60 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-sm px-4 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400 shadow-sm hover:text-blue-500 dark:hover:text-blue-400 hover:border-blue-400/40 transition-all"
          >
            <FiArrowUp className="text-sm" />
            Back to top
          </motion.button>
        </div>

      </div>
    </motion.footer>
  );
}
