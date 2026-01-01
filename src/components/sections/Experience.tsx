// components/sections/Experience.tsx
import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import Gradient from "../ui/Gradient";
import { FaSchool } from "react-icons/fa6";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 bg-gray-50 dark:bg-gray-900"
    >
      <div className="mx-auto max-w-4xl px-6">
        <SectionTitle title="Experience" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white">
              Full-Stack Developer
            </h3>
              <FaSchool  className="text-white text-lg"/> 
            <h2 className="text-lg text-gray-600 dark:text-gray-400">
           <Gradient> University Of Management and Economic : 2022-present
           </Gradient>
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
          I am a recent university graduate and an aspiring Full Stack Developer. Although I do not have formal work experience in the tech industry yet, I have been actively learning and building projects using Spring Boot for backend development and React.js for frontend development.

I am passionate about software development, continuously improving my skills, and applying what I learn to real-world problems. I am eager to contribute to a team where I can grow, learn from experienced developers, and deliver meaningful work.

I would love the opportunity to connect and explore how I can contribute with my skills and enthusiasm for full stack development.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
