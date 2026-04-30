// components/sections/Experience.tsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import {
  FiBookOpen, FiCode, FiAward, FiCalendar,
  FiMapPin, FiChevronDown, FiStar,
} from "react-icons/fi";
import {
  SiSpring, SiReact, SiTypescript, SiDocker, SiPostgresql, SiMysql,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi2";

// ─── Data ─────────────────────────────────────────────────────────────────────
const experiences = [
  {
    id: 1,
    type: "education",
    role: "Bachelor's Degree — Management Information Systems",
    org: "University of Management and Economics (UME)",
    location: "Phnom Penh, Cambodia",
    period: "2022 – Present",
    current: true,
    gradient: "from-blue-500 to-cyan-400",
    accentColor: "#60a5fa",
    icon: HiAcademicCap,
    summary:
      "Studying Management Information Systems with a focus on software engineering, databases, and enterprise systems. Applying academic knowledge through hands-on full-stack projects.",
    highlights: [
      "Core coursework: Data Structures, Database Systems, Software Engineering, OOP",
      "Built full-stack applications using Spring Boot + React.js as part of coursework",
      "Self-studied JWT security, microservice architecture, and REST API design",
      "Active member of the faculty's developer community",
    ],
    tags: ["Java", "Spring Boot", "React", "MySQL", "OOP"],
  },
  {
    id: 2,
    type: "self-learning",
    role: "Self-Taught Full Stack Developer",
    org: "Independent Learning & Personal Projects",
    location: "Remote",
    period: "2022 – Present",
    current: true,
    gradient: "from-purple-500 to-pink-500",
    accentColor: "#a78bfa",
    icon: FiCode,
    summary:
      "Continuously leveling up through online courses, documentation, open-source exploration, and building real projects. Focused on backend engineering with Spring Boot and modern frontend with React + TypeScript.",
    highlights: [
      "Built a banking authentication system with Spring Security, JWT & RBAC",
      "Developed a full portfolio site using React 19, TypeScript, Tailwind v4, Framer Motion",
      "Studied system design, clean architecture, and microservices patterns",
      "Explored Docker containerization and PostgreSQL for production-grade setups",
    ],
    tags: ["Spring Boot", "React", "TypeScript", "Docker", "PostgreSQL"],
  },
  {
    id: 3,
    type: "achievement",
    role: "Open Source Contributor & Builder",
    org: "GitHub Public Repositories",
    location: "Remote",
    period: "2023 – Present",
    current: true,
    gradient: "from-orange-400 to-amber-400",
    accentColor: "#fb923c",
    icon: FiAward,
    summary:
      "Actively sharing projects on GitHub, building in public, and contributing to the developer community through open-source repositories and portfolio-driven development.",
    highlights: [
      "Published secure user authentication & RBAC system on GitHub",
      "Documenting clean, well-structured code with clear README and API documentation",
      "Iterating projects based on community feedback and personal learning goals",
    ],
    tags: ["Git", "GitHub", "Open Source", "Documentation"],
  },
];

// ─── Skill icon map ───────────────────────────────────────────────────────────
const TAG_ICONS: Record<string, React.ElementType> = {
  "Java": FaJava,
  "Spring Boot": SiSpring,
  "React": SiReact,
  "TypeScript": SiTypescript,
  "Docker": SiDocker,
  "PostgreSQL": SiPostgresql,
  "MySQL": SiMysql,
};

// ─── Timeline node ────────────────────────────────────────────────────────────
function TimelineNode({
  color,
  current,
  icon: Icon,
}: {
  color: string;
  current: boolean;
  icon: React.ElementType;
}) {
  return (
    <div className="relative flex flex-col items-center">
      {/* Pulsing ring for current */}
      {current && (
        <motion.div
          animate={{ scale: [1, 1.6, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute h-10 w-10 rounded-full"
          style={{ background: color, opacity: 0.3 }}
        />
      )}
      <div
        className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full text-white shadow-lg"
        style={{ background: color }}
      >
        <Icon className="text-lg" />
      </div>
    </div>
  );
}

// ─── Experience card ──────────────────────────────────────────────────────────
function ExperienceCard({
  exp,
  index,
  isLast,
}: {
  exp: (typeof experiences)[0];
  index: number;
  isLast: boolean;
}) {
  const [open, setOpen] = useState(index === 0);
  const Icon = exp.icon;

  return (
    <div className="flex gap-6">
      {/* Timeline column */}
      <div className="flex flex-col items-center">
        <TimelineNode color={exp.accentColor} current={exp.current} icon={Icon} />
        {!isLast && (
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
            className="mt-2 w-0.5 flex-1 origin-top rounded-full"
            style={{
              background: `linear-gradient(to bottom, ${exp.accentColor}80, transparent)`,
              minHeight: "60px",
            }}
          />
        )}
      </div>

      {/* Card column */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, delay: index * 0.15 }}
        className="flex-1 mb-10"
      >
        <div
          className="group relative overflow-hidden rounded-2xl border border-white/20 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-md shadow-md hover:shadow-xl transition-all duration-300"
        >
          {/* Top accent bar */}
          <div className={`h-1 w-full bg-gradient-to-r ${exp.gradient}`} />

          {/* Glow on hover */}
          <div
            className="pointer-events-none absolute -top-12 -right-12 h-40 w-40 rounded-full blur-[60px] opacity-0 group-hover:opacity-20 transition-opacity duration-500"
            style={{ background: exp.accentColor }}
          />

          <div className="p-6">
            {/* Header */}
            <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
              <div>
                {/* Role */}
                <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-snug">
                  {exp.role}
                </h3>
                {/* Org */}
                <p
                  className="text-sm font-semibold mt-0.5"
                  style={{ color: exp.accentColor }}
                >
                  {exp.org}
                </p>
              </div>

              {/* Current badge */}
              {exp.current && (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-emerald-500 shrink-0">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Current
                </span>
              )}
            </div>

            {/* Meta row */}
            <div className="flex flex-wrap gap-3 mb-4">
              <span className="inline-flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400">
                <FiCalendar className="shrink-0" style={{ color: exp.accentColor }} />
                {exp.period}
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400">
                <FiMapPin className="shrink-0" style={{ color: exp.accentColor }} />
                {exp.location}
              </span>
            </div>

            {/* Summary */}
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              {exp.summary}
            </p>

            {/* Expand toggle */}
            <button
              onClick={() => setOpen((o) => !o)}
              className="mb-4 flex items-center gap-1.5 text-xs font-bold transition-colors"
              style={{ color: exp.accentColor }}
            >
              <motion.span
                animate={{ rotate: open ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <FiChevronDown />
              </motion.span>
              {open ? "Hide highlights" : "Show highlights"}
            </button>

            {/* Expandable highlights */}
            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  key="highlights"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.35 }}
                  className="overflow-hidden"
                >
                  <ul className="space-y-2 mb-5">
                    {exp.highlights.map((h, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.08 }}
                        className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
                      >
                        <FiStar
                          className="mt-0.5 shrink-0 text-xs"
                          style={{ color: exp.accentColor }}
                        />
                        {h}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-2">
              {exp.tags.map((tag) => {
                const TagIcon = TAG_ICONS[tag];
                return (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[0.7rem] font-semibold"
                    style={{
                      color: exp.accentColor,
                      borderColor: `${exp.accentColor}40`,
                      background: `${exp.accentColor}12`,
                    }}
                  >
                    {TagIcon && <TagIcon className="text-xs" />}
                    {tag}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────
export default function Experience() {
  return (
    <section id="experience" className="relative py-28 overflow-hidden">
      {/* ── Ambient glows ── */}
      <div className="pointer-events-none absolute right-[-150px] top-1/4 h-[450px] w-[450px] rounded-full bg-blue-500/10 dark:bg-blue-500/10 blur-[110px] -z-10" />
      <div className="pointer-events-none absolute left-[-150px] bottom-1/4 h-[350px] w-[350px] rounded-full bg-purple-500/10 dark:bg-purple-500/10 blur-[100px] -z-10" />

      {/* ── Grid texture ── */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.03] dark:opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(#888 1px, transparent 1px), linear-gradient(90deg, #888 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="mx-auto max-w-4xl px-6">
        <SectionTitle
          title="Experience & Education"
          subtitle="My journey — academic background, self-learning, and what I've built along the way."
        />

        {/* ── Quick stats ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 mb-16 flex justify-center gap-10"
        >
          {[
            { label: "Years Learning", value: "3+" },
            { label: "Projects Built", value: "5+" },
            { label: "Technologies", value: "15+" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                {s.value}
              </p>
              <p className="text-xs text-gray-400 dark:text-gray-500 font-medium mt-0.5">
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* ── Legend ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="mb-10 flex flex-wrap gap-4 items-center justify-center"
        >
          {[
            { icon: HiAcademicCap, label: "Education",      color: "#60a5fa" },
            { icon: FiCode,        label: "Self-Learning",  color: "#a78bfa" },
            { icon: FiAward,       label: "Achievement",    color: "#fb923c" },
          ].map(({ icon: Icon, label, color }) => (
            <span key={label} className="inline-flex items-center gap-2 text-xs font-semibold text-gray-500 dark:text-gray-400">
              <Icon style={{ color }} />
              {label}
            </span>
          ))}
        </motion.div>

        {/* ── Timeline ── */}
        <div>
          {experiences.map((exp, i) => (
            <ExperienceCard
              key={exp.id}
              exp={exp}
              index={i}
              isLast={i === experiences.length - 1}
            />
          ))}
        </div>

        {/* ── Bottom passion quote ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-6 rounded-2xl border border-blue-200/40 dark:border-blue-500/20 bg-gradient-to-r from-blue-500/5 to-purple-500/5 dark:from-blue-500/10 dark:to-purple-500/10 p-8 text-center backdrop-blur-sm"
        >
          <FiBookOpen className="mx-auto mb-3 text-2xl text-blue-500" />
          <p className="text-base font-medium text-gray-700 dark:text-gray-300 leading-relaxed max-w-lg mx-auto">
            "I am passionate about software development, continuously improving my skills,
            and applying what I learn to real-world problems. Eager to join a team where I
            can grow alongside experienced engineers."
          </p>
          <p className="mt-3 text-xs font-bold text-blue-500 uppercase tracking-widest">
            — Phorn Sydeth
          </p>
        </motion.div>
      </div>
    </section>
  );
}
