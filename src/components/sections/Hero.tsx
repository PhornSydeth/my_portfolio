// components/sections/Hero.tsx (refactored)
import { motion } from "framer-motion";
import Button from "../ui/Button";
import Gradient from "../ui/Gradient";

export default function Hero() {
  return (
    <section id="home" className="flex min-h-screen items-center">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white md:text-6xl"
        >
          <Gradient>Hi, I’m  </Gradient><Gradient>Phorn Sydeth</Gradient>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mx-auto mt-6 max-w-2xl text-gray-600 dark:text-gray-400"
        >
          Full-stack developer building clean, scalable and modern web
          applications with great user experience.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-10 flex justify-center gap-4"
        >
          <Button>View Projects</Button>
          <Button variant="ghost">Contact Me</Button>
        </motion.div>
      </div>
    </section>
  );
}
