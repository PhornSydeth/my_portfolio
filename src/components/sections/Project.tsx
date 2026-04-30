// components/sections/Project.tsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import { projects, type ProjectCategory } from "../data/Project";
import { SiGithub } from "react-icons/si";
import { FiExternalLink, FiCode, FiLayers, FiMonitor, FiGrid } from "react-icons/fi";
import { HiSparkles } from "react-icons/hi2";

// ─── Category filter tabs ─────────────────────────────────────────────────────
const TABS: { id: ProjectCategory; label: string; icon: React.ElementType }[] = [
  { id: "all",      label: "All",        icon: FiGrid    },
  { id: "backend",  label: "Backend",    icon: FiCode    },
  { id: "fullstack",label: "Full Stack", icon: FiLayers  },
  { id: "frontend", label: "Frontend",   icon: FiMonitor },
];

// ─── Status badge ─────────────────────────────────────────────────────────────
function StatusBadge({ status }: { status: "completed" | "in-progress" }) {
  return status === "completed" ? (
    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 px-2.5 py-0.5 text-[0.65rem] font-bold uppercase tracking-wider text-emerald-500">
      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
      Completed
    </span>
  ) : (
    <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/15 border border-amber-500/30 px-2.5 py-0.5 text-[0.65rem] font-bold uppercase tracking-wider text-amber-500">
      <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
      In Progress
    </span>
  );
}

// ─── Featured Hero Card ───────────────────────────────────────────────────────
function FeaturedCard({ project }: { project: (typeof projects)[0] }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7 }}
      className="group relative overflow-hidden rounded-3xl border border-white/20 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-md shadow-xl"
    >
      {/* Accent glow strip */}
      <div
        className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${project.gradient}`}
      />

      {/* Background blurred glow */}
      <div
        className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full blur-[80px] opacity-20"
        style={{ background: project.accentColor }}
      />

      <div className="p-8 md:p-10">
        {/* Header row */}
        <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <div
              className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${project.gradient} text-white shadow-lg`}
            >
              <HiSparkles className="text-xl" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest mb-0.5"
                style={{ color: project.accentColor }}>
                Featured Project
              </p>
              <StatusBadge status={project.status} />
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex gap-2 shrink-0">
            <motion.a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.06, y: -1 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-2 rounded-full border border-gray-300/60 dark:border-white/15 bg-white/80 dark:bg-white/10 px-4 py-2 text-sm font-semibold text-gray-700 dark:text-white shadow-sm hover:shadow-md transition-shadow"
            >
              <SiGithub className="text-base" /> GitHub
            </motion.a>
            {project.demoLink && (
              <motion.a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.06, y: -1 }}
                whileTap={{ scale: 0.96 }}
                className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${project.gradient} px-4 py-2 text-sm font-semibold text-white shadow-md`}
              >
                <FiExternalLink className="text-base" /> Live Demo
              </motion.a>
            )}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white leading-snug mb-3">
          {project.title}
        </h3>

        {/* Description with expand */}
        <div className="relative">
          <p className={`text-gray-600 dark:text-gray-400 leading-relaxed text-[0.95rem] transition-all duration-300 ${!expanded ? "line-clamp-3" : ""}`}>
            {project.description}
          </p>
          <button
            onClick={() => setExpanded((e) => !e)}
            className="mt-2 text-xs font-semibold transition-colors"
            style={{ color: project.accentColor }}
          >
            {expanded ? "Show less ↑" : "Read more ↓"}
          </button>
        </div>

        {/* Tech stack badges */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border px-3 py-1 text-xs font-semibold"
              style={{
                color: project.accentColor,
                borderColor: `${project.accentColor}40`,
                background: `${project.accentColor}12`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// ─── Regular Project Card ─────────────────────────────────────────────────────
function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/20 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-md shadow-md hover:shadow-xl transition-shadow duration-300"
    >
      {/* Top gradient stripe */}
      <div className={`h-1 w-full bg-gradient-to-r ${project.gradient} shrink-0`} />

      {/* Glow on hover */}
      <div
        className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full blur-[70px] opacity-0 group-hover:opacity-20 transition-opacity duration-500"
        style={{ background: project.accentColor }}
      />

      <div className="flex flex-col flex-1 p-6">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${project.gradient} text-white shadow-md`}
          >
            <FiCode className="text-lg" />
          </div>
          <StatusBadge status={project.status} />
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-snug mb-2">
          {project.title}
        </h3>

        {/* Short description */}
        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-1">
          {project.shortDesc}
        </p>

        {/* Expandable full description */}
        <AnimatePresence>
          {expanded && (
            <motion.p
              key="desc"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mt-1 overflow-hidden"
            >
              {project.description}
            </motion.p>
          )}
        </AnimatePresence>

        <button
          onClick={() => setExpanded((e) => !e)}
          className="mt-1 mb-4 self-start text-xs font-semibold transition-colors"
          style={{ color: project.accentColor }}
        >
          {expanded ? "Show less ↑" : "Details ↓"}
        </button>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="rounded-full border px-2.5 py-0.5 text-[0.65rem] font-semibold"
              style={{
                color: project.accentColor,
                borderColor: `${project.accentColor}40`,
                background: `${project.accentColor}12`,
              }}
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="rounded-full border border-gray-300/50 dark:border-white/10 px-2.5 py-0.5 text-[0.65rem] font-semibold text-gray-400 dark:text-gray-500">
              +{project.tags.length - 4} more
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="mt-auto flex gap-2">
          <motion.a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200/70 dark:border-white/10 bg-white/80 dark:bg-white/10 py-2.5 text-sm font-semibold text-gray-700 dark:text-white hover:shadow-md transition-shadow"
          >
            <SiGithub /> GitHub
          </motion.a>
          {project.demoLink && (
            <motion.a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className={`flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r ${project.gradient} py-2.5 text-sm font-semibold text-white shadow-md`}
            >
              <FiExternalLink /> Demo
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────
export default function ProjectSection() {
  const [activeTab, setActiveTab] = useState<ProjectCategory>("all");

  const featured = projects.find((p) => p.featured);
  const filtered = projects
    .filter((p) => !p.featured)
    .filter((p) => activeTab === "all" || p.category === activeTab);

  return (
    <section id="projects" className="relative py-28 overflow-hidden">
      {/* ── Ambient glows ── */}
      <div className="pointer-events-none absolute left-[-180px] top-1/3 h-[500px] w-[500px] rounded-full bg-blue-500/10 dark:bg-blue-600/10 blur-[120px] -z-10" />
      <div className="pointer-events-none absolute right-[-180px] bottom-1/4 h-[400px] w-[400px] rounded-full bg-purple-500/10 dark:bg-purple-600/10 blur-[100px] -z-10" />

      {/* ── Grid texture ── */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.03] dark:opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(#888 1px, transparent 1px), linear-gradient(90deg, #888 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          title="My Projects"
          subtitle="Things I've built — from backend systems to full-stack web apps."
        />

        {/* ── Stats bar ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 mb-12 flex justify-center gap-10"
        >
          {[
            { label: "Projects", value: `${projects.length}` },
            { label: "Completed", value: `${projects.filter((p) => p.status === "completed").length}` },
            { label: "In Progress", value: `${projects.filter((p) => p.status === "in-progress").length}` },
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

        {/* ── Featured project ── */}
        {featured && <FeaturedCard project={featured} />}

        {/* ── Filter tabs ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-14 mb-8 flex justify-center"
        >
          <div className="flex gap-1.5 rounded-full border border-gray-200/60 dark:border-white/10 bg-gray-100/80 dark:bg-white/5 backdrop-blur-sm p-1">
            {TABS.map((tab) => {
              const Icon = tab.icon;
              const active = activeTab === tab.id;
              return (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  whileTap={{ scale: 0.95 }}
                  className={`relative inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold transition-colors duration-200 ${
                    active
                      ? "text-white"
                      : "text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white"
                  }`}
                >
                  {active && (
                    <motion.div
                      layoutId="projectTab"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                      style={{ zIndex: -1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <Icon className="text-base" />
                  {tab.label}
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* ── Project grid ── */}
        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filtered.length > 0 ? (
              filtered.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="col-span-full py-20 text-center text-gray-400 dark:text-gray-600 text-sm font-medium"
              >
                No projects in this category yet — stay tuned! 🚧
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* ── Bottom CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-14 text-center"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            More projects coming soon. Follow my journey on GitHub.
          </p>
          <motion.a
            href="https://github.com/PhornSydeth"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-700 dark:to-gray-800 px-6 py-3 text-sm font-semibold text-white shadow-lg"
          >
            <SiGithub className="text-base" /> View All on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
