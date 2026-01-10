// components/sections/Skill.tsx
import { motion } from "framer-motion";
import Card from "../ui/Card";
import SectionTitle from "../ui/SectionTitle";
import { useTheme } from "../layout/ThemeProvider";

const skills = [
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Java",
  "Spring Boot",
  "REST APIs",
];

export default function Skill() {
    const {theme}=useTheme()
    const componentStyle={
        backgroundColor:theme==='dark' ?'#333' :'#fff',
        color:theme==='dark'?'#fff':'#000',
        padding:'20px'
    }
  return (
    <section id="skills" style={componentStyle}>
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle title="Skills" />

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {skills.map((skill) => (
            <Card key={skill} className="text-center font-medium">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                {skill}
              </motion.span>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
