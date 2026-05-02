// components/sections/Profile.tsx
import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import profile1 from "../../assets/image.png";
import profile2 from "../../assets/image1.jpg";
import profile3 from "../../assets/image2.jpg";
import myProfile from "../../assets/myprofile.jpg";
import {
  FiMapPin,
  FiMail,
  FiCode,
  FiHeart,
  FiZap,
  FiCoffee,
  FiStar,
} from "react-icons/fi";
import { SiGithub, SiLinkedin } from "react-icons/si";

// ─── Tilt card ────────────────────────────────────────────────────────────────
function TiltCard({
  src,
  alt,
  delay,
  aspect = "square",
}: {
  src: string;
  alt: string;
  delay: number;
  aspect?: "square" | "tall" | "wide";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 250, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 250, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const aspectClass =
    aspect === "tall" ? "aspect-[3/4]" : aspect === "wide" ? "aspect-[4/3]" : "aspect-square";

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay }}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      className={`group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer ${aspectClass}`}
    >
      {/* Hover shimmer overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-tr from-blue-500/0 via-white/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:via-white/5 group-hover:to-purple-500/10 transition-all duration-500" />
      {/* Corner glow */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        className="absolute -inset-1 rounded-2xl z-0 blur-sm"
        style={{
          background: "linear-gradient(135deg, rgba(99,102,241,0.5), rgba(236,72,153,0.4))",
        }}
      />
      <img
        src={src}
        alt={alt}
        className="relative z-[1] h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
    </motion.div>
  );
}

// ─── Info chip ────────────────────────────────────────────────────────────────
function InfoChip({
  icon: Icon,
  label,
  value,
  color,
  delay,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  color: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ x: 4 }}
      className="flex items-center gap-3 rounded-xl border border-gray-200/60 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-sm px-4 py-3 shadow-sm"
    >
      <div
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
        style={{ background: `${color}22`, color }}
      >
        <Icon className="text-lg" />
      </div>
      <div>
        <p className="text-[0.7rem] font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500">
          {label}
        </p>
        <p className="text-sm font-semibold text-gray-800 dark:text-white">{value}</p>
      </div>
    </motion.div>
  );
}

// ─── Floating badge ───────────────────────────────────────────────────────────
function FloatingBadge({
  icon: Icon,
  text,
  className,
  delay,
  color,
}: {
  icon: React.ElementType;
  text: string;
  className: string;
  delay: number;
  color: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      animate={{ y: [0, -6, 0] }}
      transition={{
        opacity: { type: "spring", stiffness: 200, delay },
        scale:   { type: "spring", stiffness: 200, delay },
        y: {
          type: "tween",
          duration: 2.5,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
          delay: delay + 0.6,
        },
      }}
      className={`absolute z-20 flex items-center gap-2 rounded-2xl border border-white/30 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md px-3 py-1.5 shadow-xl ${className}`}
    >
      <Icon className="text-sm" style={{ color }} />
      <span className="text-[0.7rem] font-bold text-gray-800 dark:text-white whitespace-nowrap">
        {text}
      </span>
    </motion.div>
  );
}

// ─── Social button ────────────────────────────────────────────────────────────
function SocialBtn({
  href,
  icon: Icon,
  label,
  gradient,
}: {
  href: string;
  icon: React.ElementType;
  label: string;
  gradient: string;
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.06, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${gradient} px-5 py-2.5 text-sm font-semibold text-white shadow-md`}
    >
      <Icon className="text-base" />
      {label}
    </motion.a>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────
export default function Profile() {
  const [imgActive, setImgActive] = useState(0);
  const galleryImages = [profile2, profile3, profile1];

  return (
    <section id="profile" className="relative py-28 overflow-hidden">
      {/* ── Ambient glows ── */}
      <div className="pointer-events-none absolute left-[-150px] top-20 h-[450px] w-[450px] rounded-full bg-purple-500/15 dark:bg-purple-600/15 blur-[110px] -z-10" />
      <div className="pointer-events-none absolute right-[-150px] bottom-20 h-[350px] w-[350px] rounded-full bg-pink-500/15 dark:bg-pink-600/15 blur-[100px] -z-10" />
      <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-blue-500/5 dark:bg-blue-600/10 blur-[130px] -z-10" />

      {/* ── Grid texture ── */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.035] dark:opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(#888 1px, transparent 1px), linear-gradient(90deg, #888 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle title="Who I Am" subtitle="A glimpse into the person behind the keyboard." />

        {/* ══ Main layout: two columns ══════════════════════════════════════════ */}
        <div className="mt-16 flex flex-col lg:flex-row gap-16 items-start">

          {/* ── LEFT: Image showcase ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.1 }}
            className="flex-1 w-full"
          >
            {/* Hero photo */}
            <div className="relative">
              {/* Rotating gradient ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-[3px] opacity-70"
              />
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl">
                <motion.img
                  key={imgActive}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  src={galleryImages[imgActive]}
                  alt={`Profile photo ${imgActive + 1}`}
                  className="w-full h-full object-contain"
                />
                {/* Bottom gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                {/* Floating badges */}
                <FloatingBadge
                  icon={FiMapPin}
                  text="Krong Kracheh, Cambodia"
                  className="bottom-4 left-4"
                  delay={0.4}
                  color="#60a5fa"
                />
                <FloatingBadge
                  icon={FiZap}
                  text="Open to Work"
                  className="top-4 right-4"
                  delay={0.5}
                  color="#34d399"
                />
              </div>
            </div>

            {/* Thumbnail strip */}
            <div className="mt-4 flex gap-3">
              {galleryImages.map((src, i) => (
                <motion.button
                  key={i}
                  onClick={() => setImgActive(i)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className={`relative flex-1 overflow-hidden rounded-xl aspect-[4/3] transition-all duration-300 ${
                    imgActive === i
                      ? "ring-2 ring-blue-500 ring-offset-2 ring-offset-white dark:ring-offset-gray-950"
                      : "opacity-60 hover:opacity-90"
                  }`}
                >
                  <img src={src} alt={`thumb ${i}`} className="h-full w-full object-contain" />
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* ── RIGHT: Bio & info ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex-1 w-full flex flex-col gap-6"
          >
            {/* Name & title */}
            <div>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-sm font-bold uppercase tracking-[0.2em] text-blue-500 mb-2"
              >
                Full Stack Developer
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25 }}
                className="text-4xl font-extrabold text-gray-900 dark:text-white leading-tight"
              >
                Phorn{" "}
                <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Sydeth
                </span>
              </motion.h2>
            </div>

            {/* Quoted bio */}
            <motion.blockquote
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative border-l-4 border-blue-500 pl-5 py-1 text-gray-600 dark:text-gray-400 leading-relaxed text-[0.97rem]"
            >
              <FiStar className="absolute -top-2 -left-2 text-blue-400 text-lg" />
              I craft digital experiences that balance beautiful design with robust engineering. From
              pixel-perfect UIs to scalable backend systems — I love turning ideas into reality,
              one commit at a time.
            </motion.blockquote>

            {/* Info chips */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <InfoChip icon={FiMapPin} label="Location" value="Krong Kracheh, Cambodia" color="#60a5fa" delay={0.35} />
              <InfoChip icon={FiMail} label="Email" value="sydethphorn@gmail.com" color="#a78bfa" delay={0.4} />
              <InfoChip icon={FiCode} label="Role" value="Full Stack Developer" color="#34d399" delay={0.45} />
              <InfoChip icon={FiCoffee} label="Fuel" value="Coffee & Clean Code" color="#fb923c" delay={0.5} />
            </div>

            {/* Interest tags */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.55 }}
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-3">
                Interests
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  { label: "Open Source", icon: FiCode, color: "#60a5fa" },
                  { label: "UI/UX Design", icon: FiStar, color: "#a78bfa" },
                  { label: "System Design", icon: FiZap, color: "#34d399" },
                  { label: "Mentorship", icon: FiHeart, color: "#f472b6" },
                  { label: "Photography", icon: FiStar, color: "#fb923c" },
                ].map(({ label, icon: Icon, color }, i) => (
                  <motion.span
                    key={label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.55 + i * 0.06 }}
                    whileHover={{ scale: 1.08, y: -2 }}
                    className="flex items-center gap-1.5 rounded-full border border-gray-200/70 dark:border-white/10 bg-white/70 dark:bg-white/5 px-3.5 py-1.5 text-xs font-semibold text-gray-700 dark:text-gray-300 backdrop-blur-sm cursor-default"
                    style={{ borderColor: `${color}44` }}
                  >
                    <Icon className="text-[0.7rem]" style={{ color }} />
                    {label}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Social / CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.65 }}
              className="flex flex-wrap gap-3 pt-2"
            >
              <SocialBtn
                href="https://github.com/PhornSydeth"
                icon={SiGithub}
                label="GitHub"
                gradient="from-gray-700 to-gray-900 dark:from-gray-600 dark:to-gray-800"
              />
              <SocialBtn
                href="https://www.linkedin.com/in/phorn-sydeth-6b9861349/"
                icon={SiLinkedin}
                label="LinkedIn"
                gradient="from-blue-600 to-blue-800"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* ══ Bottom gallery row ════════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-16"
        >
          <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 mb-6">
            Moments
          </p>
          <div className="grid grid-cols-3 gap-4">
            <TiltCard src={profile2} alt="Moment 1" delay={0.1} aspect="tall" />
            <TiltCard src={profile3} alt="Moment 2" delay={0.2} aspect="square" />
            <TiltCard src={myProfile} alt="Moment 3" delay={0.3} aspect="tall" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
