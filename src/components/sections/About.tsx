// components/sections/About.tsx
import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-4xl px-6">
        <SectionTitle title="About Me" />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-gray-600 dark:text-gray-400"
        >
         I am a Full Stack Developer with experience in building scalable and efficient web applications. My primary tech stack includes Spring Boot for backend development and React.js for frontend development. I enjoy designing clean, maintainable code and creating seamless user experiences.

I am passionate about learning new technologies, solving challenging problems, and collaborating with teams to deliver high-quality software. I am confident that my skills in both frontend and backend development allow me to contribute effectively to any project.

I would be happy to connect and discuss opportunities where I can bring value with my full stack expertise.
        </motion.p>
      </div>
    </section>
  );
}
