// components/layout/Footer.tsx
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-8 text-center">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} phornsydeth. All rights reserved.
        </p>

        <div className="flex gap-4">
          <a
            href="https://github.com/PhornSydeth/"
            target="_blank"
            className="text-gray-600 transition hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          >
            GitHub
          </a>
          <a
            href='tel:+855979060729'
            target="_blank"
            className="text-gray-600 transition hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          >
           PhoneNumer
          </a>
          <a
            href="https://www.facebook.com/share/16oSTDZZWe/"
            className="text-gray-600 transition hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          >
            Facebook
          </a>
        </div>
      </div>
    </motion.footer>
  );
}
