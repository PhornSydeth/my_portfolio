// components/sections/Skill.tsx
import { useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";

// ─── React Icons ──────────────────────────────────────────────────────────────
import {
  SiReact, SiTypescript, SiTailwindcss, SiNextdotjs, SiHtml5, SiCss3,
} from "react-icons/si";
import {
  SiSpring, SiJavascript, SiPostgresql, SiMysql, SiMongodb,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import {
  SiDocker, SiGit, SiPostman, SiGithub, SiFigma,
} from "react-icons/si";

// ─── Data ─────────────────────────────────────────────────────────────────────
const categories = [
  {
    id: "frontend",
    label: "Frontend",
    gradient: "from-blue-500 to-cyan-400",
    glow: "rgba(59,130,246,0.25)",
    skills: [
      { name: "React.js",      Icon: SiReact,       level: 90, color: "#61DAFB" },
      { name: "TypeScript",    Icon: SiTypescript,  level: 82, color: "#3178C6" },
      { name: "Next.js",       Icon: SiNextdotjs,   level: 75, color: "#fff"    },
      { name: "Tailwind CSS",  Icon: SiTailwindcss, level: 88, color: "#38BDF8" },
      { name: "JavaScript",    Icon: SiJavascript,  level: 85, color: "#F7DF1E" },
      { name: "HTML / CSS",    Icon: SiHtml5,       level: 92, color: "#E34F26" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    gradient: "from-purple-500 to-pink-500",
    glow: "rgba(168,85,247,0.25)",
    skills: [
      { name: "Java",          Icon: FaJava,        level: 85, color: "#f89820" },
      { name: "Spring Boot",   Icon: SiSpring,      level: 82, color: "#6DB33F" },
      { name: "REST APIs",     Icon: SiPostman,     level: 88, color: "#FF6C37" },
      { name: "PostgreSQL",    Icon: SiPostgresql,  level: 78, color: "#336791" },
      { name: "MySQL",         Icon: SiMysql,       level: 80, color: "#4479A1" },
      { name: "MongoDB",       Icon: SiMongodb,     level: 65, color: "#47A248" },
    ],
  },
  {
    id: "tools",
    label: "Tools & DevOps",
    gradient: "from-orange-400 to-amber-400",
    glow: "rgba(251,146,60,0.25)",
    skills: [
      { name: "Git",           Icon: SiGit,         level: 88, color: "#F05032" },
      { name: "GitHub",        Icon: SiGithub,      level: 90, color: "#fff"    },
      { name: "Docker",        Icon: SiDocker,      level: 70, color: "#2496ED" },
      { name: "Postman",       Icon: SiPostman,     level: 85, color: "#FF6C37" },
      { name: "Figma",         Icon: SiFigma,       level: 72, color: "#F24E1E" },
    ],
  },
];

// ─── Animated Progress Bar ─────────────────────────────────────────────────────
function SkillBar({
  level,
  barColor,
  delay,
}: {
  level: number;
  barColor: string;
  delay: number;
}) {
  return (
    <div className="relative h-1.5 w-full rounded-full bg-gray-200/40 dark:bg-white/10 overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1.2, delay, ease: [0.25, 1, 0.5, 1] }}
        className="absolute inset-y-0 left-0 rounded-full"
        style={{ background: barColor }}
      />
      {/* Shimmer */}
      <motion.div
        initial={{ x: "-100%" }}
        whileInView={{ x: "200%" }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, delay: delay + 0.3, ease: "easeInOut" }}
        className="absolute inset-y-0 w-1/3 rounded-full"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.45) 50%, transparent 100%)",
        }}
      />
    </div>
  );
}

// ─── Skill Card ────────────────────────────────────────────────────────────────
function SkillCard({
  skill,
  index,
  gradientFrom,
}: {
  skill: (typeof categories)[0]["skills"][0];
  index: number;
  gradientFrom: string;
}) {
  const { Icon, name, level, color } = skill;
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative rounded-2xl border border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-md p-5 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl dark:hover:bg-white/10 cursor-default"
    >
      {/* Corner glow on hover */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="pointer-events-none absolute -inset-px rounded-2xl"
        style={{
          background: `radial-gradient(300px circle at 50% 0%, ${color}22 0%, transparent 70%)`,
        }}
      />

      <div className="flex items-center gap-3 mb-4">
        {/* Icon badge */}
        <motion.div
          animate={{ rotate: hovered ? 10 : 0, scale: hovered ? 1.15 : 1 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gray-100 dark:bg-white/10 shadow-inner"
          style={{ color }}
        >
          <Icon className="text-2xl" />
        </motion.div>

        <div className="flex-1 min-w-0">
          <p className="font-semibold text-sm text-gray-900 dark:text-white truncate">
            {name}
          </p>
          <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">
            {level >= 85 ? "Expert" : level >= 75 ? "Advanced" : level >= 60 ? "Intermediate" : "Learning"}
          </p>
        </div>

        {/* Percentage bubble */}
        <motion.span
          animate={{ scale: hovered ? 1.1 : 1 }}
          className="shrink-0 text-xs font-bold px-2 py-0.5 rounded-full"
          style={{
            color,
            background: `${color}1a`,
            border: `1px solid ${color}33`,
          }}
        >
          {level}%
        </motion.span>
      </div>

      <SkillBar level={level} barColor={color} delay={index * 0.08 + 0.3} />
    </motion.div>
  );
}

// ─── Category Tab ──────────────────────────────────────────────────────────────
function CategoryTab({
  cat,
  active,
  onClick,
}: {
  cat: (typeof categories)[0];
  active: boolean;
  onClick: () => void;
}) {
  return (
    <motion.button
      onClick={onClick}
      whileTap={{ scale: 0.95 }}
      className={`relative px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
        active
          ? "text-white shadow-lg"
          : "text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white"
      }`}
    >
      {active && (
        <motion.div
          layoutId="activeTab"
          className={`absolute inset-0 rounded-full bg-gradient-to-r ${cat.gradient}`}
          style={{ zIndex: -1 }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        />
      )}
      {cat.label}
    </motion.button>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────────
export default function Skill() {
  const [activeId, setActiveId] = useState("frontend");
  const activeCat = categories.find((c) => c.id === activeId)!;

  return (
    <section id="skills" className="relative py-28 overflow-hidden">
      {/* ── Ambient background glows ── */}
      <div
        className="pointer-events-none absolute left-[-200px] top-1/4 h-[500px] w-[500px] rounded-full blur-[120px] -z-10 opacity-40 dark:opacity-30"
        style={{ background: activeCat.glow }}
      />
      <div
        className="pointer-events-none absolute right-[-200px] bottom-1/4 h-[400px] w-[400px] rounded-full blur-[120px] -z-10 opacity-30 dark:opacity-20"
        style={{ background: activeCat.glow }}
      />

      {/* ── Subtle grid texture ── */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.03] dark:opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(#888 1px, transparent 1px), linear-gradient(90deg, #888 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="mx-auto max-w-6xl px-6">
        {/* ── Section header ── */}
        <SectionTitle
          title="Skills & Technologies"
          subtitle="Technologies I've worked with and continue to grow in every day."
        />

        {/* ── Summary stats ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 flex justify-center gap-10 mb-12"
        >
          {[
            { label: "Technologies", value: "15+" },
            { label: "Years Coding", value: "3+" },
            { label: "Projects Built", value: "20+" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p
                className={`text-3xl font-extrabold bg-gradient-to-r ${activeCat.gradient} bg-clip-text text-transparent`}
              >
                {stat.value}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* ── Category tabs ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center gap-2 mb-10 p-1 rounded-full bg-gray-100/80 dark:bg-white/5 backdrop-blur-sm border border-gray-200/60 dark:border-white/10 w-fit mx-auto"
        >
          {categories.map((cat) => (
            <CategoryTab
              key={cat.id}
              cat={cat}
              active={activeId === cat.id}
              onClick={() => setActiveId(cat.id)}
            />
          ))}
        </motion.div>

        {/* ── Skill grid ── */}
        <motion.div
          key={activeId}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {activeCat.skills.map((skill, i) => (
            <SkillCard
              key={skill.name}
              skill={skill}
              index={i}
              gradientFrom={activeCat.gradient}
            />
          ))}
        </motion.div>

        {/* ── Bottom floating tag cloud ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 flex flex-wrap justify-center gap-3"
        >
          {[
            "REST API", "Microservices", "CI/CD", "Agile", "OOP",
            "Clean Code", "JWT Auth", "Responsive Design", "Testing",
          ].map((tag, i) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.3 }}
              whileHover={{ scale: 1.08 }}
              className="rounded-full border border-gray-200/70 dark:border-white/10 bg-white/60 dark:bg-white/5 px-4 py-1.5 text-xs font-medium text-gray-600 dark:text-gray-400 backdrop-blur-sm cursor-default hover:border-blue-400/50 dark:hover:border-blue-400/40 transition-colors duration-200"
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
