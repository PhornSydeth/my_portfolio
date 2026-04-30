// components/sections/About.tsx
import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import Gradient from "../ui/Gradient";
import { FiLayout, FiDatabase, FiCoffee } from "react-icons/fi";

const highlights = [
  {
    icon: FiLayout,
    title: "Frontend Engineering",
    description: "Crafting beautiful, responsive user interfaces with React.js and modern CSS frameworks.",
    color: "from-blue-500 to-cyan-400"
  },
  {
    icon: FiDatabase,
    title: "Backend Architecture",
    description: "Designing robust, scalable RESTful APIs and microservices utilizing Spring Boot.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: FiCoffee,
    title: "Problem Solver",
    description: "Writing clean, maintainable code to logically solve complex backend and UI challenges.",
    color: "from-orange-400 to-amber-500"
  }
];

export default function About() {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Subtle Ambient Background Glows */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 dark:bg-blue-600/10 blur-[100px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] bg-purple-500/10 dark:bg-purple-600/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle title="About Me" />

        <div className="mt-16 flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Column: Main text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-6 text-lg leading-relaxed text-gray-600 dark:text-gray-600 font-sans"
          >
            <p>
              I am a <span className="font-bold text-gray-900 dark:text-blue-400"><Gradient>Full Stack Developer</Gradient></span> with experience in building scalable and efficient web applications. My primary tech stack includes <span className="font-semibold text-gray-900 dark:text-blue-400">Spring Boot</span> for robust backend development and <span className="font-semibold text-gray-900 dark:text-blue-400">React.js</span> for frontend architectures. I truly enjoy designing clean, maintainable code and creating absolutely seamless user experiences.
            </p>
            
            <p>
              I am passionate about learning new technologies, solving challenging technical problems, and collaborating closely with teams to deliver high-quality software. I am confident that my blended skills in both frontend polish and backend logic allow me to contribute effectively to any ambitious project.
            </p>
            
            <p>
              I would be incredibly happy to connect and discuss opportunities where I can bring immediate value with my expertise.
            </p>
          </motion.div>

          {/* Right Column: Highlight Feature Cards */}
          <div className="flex-1 w-full grid gap-6 sm:grid-cols-1">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="group relative flex items-start gap-5 rounded-2xl border border-gray-200/60 bg-white/60 p-6 shadow-sm backdrop-blur-md transition-all hover:-translate-y-1 hover:shadow-lg dark:border-gray-800/60 dark:bg-gray-900/60 dark:hover:bg-gray-800/80"
                >
                  {/* Floating Gradient Icon */}
                  <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${item.color} text-white shadow-md`}>
                    <Icon className="text-2xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3" />
                  </div>
                  
                  {/* Card Content Typography */}
                  <div>
                    <h3 className="text-[1.125rem] font-bold text-gray-900 dark:text-white font-sans tracking-wide">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[0.95rem] text-gray-600 dark:text-gray-400 font-sans leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
          
        </div>
      </div>
    </section>
  );
}
