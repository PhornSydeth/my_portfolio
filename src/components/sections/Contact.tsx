// components/sections/Contact.tsx
import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";
import {
  FiMapPin, FiMail, FiArrowUpRight,
} from "react-icons/fi";
import {
  FaTelegram, FaFacebookMessenger, FaWhatsapp, FaInstagram,
} from "react-icons/fa";
import { SiGithub, SiLinkedin } from "react-icons/si";

// ─── Social platform data  (replace href values with your own links) ──────────
const socialLinks = [
  {
    id: "telegram",
    label: "Telegram",
    handle: "@Phorn_Sydeth",               // ← replace
    href: "https://t.me/Phorn_Sydeth",     // ← replace
    icon: FaTelegram,
    gradient: "from-[#229ED9] to-[#1A7BB5]",
    glow: "rgba(34,158,217,0.35)",
    description: "Fastest way to reach me. I'm usually online.",
  },
  {
    id: "messenger",
    label: "Facebook Messenger",
    handle: "PhornSydeth.facebook",                          // ← replace
    href: "https://www.facebook.com/share/1H6cWWpkwr/",              // ← replace
    icon: FaFacebookMessenger,
    gradient: "from-[#0099FF] to-[#A033FF]",
    glow: "rgba(0,153,255,0.35)",
    description: "Send me a message on Messenger anytime.",
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    handle: "+855 979060729",                             // ← replace
    href: "https://wa.me/855979060729",                   // ← replace
    icon: FaWhatsapp,
    gradient: "from-[#25D366] to-[#128C7E]",
    glow: "rgba(37,211,102,0.35)",
    description: "Available for quick chats and voice calls.",
  },
  {
    id: "instagram",
    label: "Instagram",
    handle: "@sydeth_instagram",                         // ← replace
    href: "https://www.instagram.com/sydeth_ph?igsh=MmwzZTdzbTMzcjIw",     // ← replace
    icon: FaInstagram,
    gradient: "from-[#F58529] via-[#DD2A7B] to-[#8134AF]",
    glow: "rgba(221,42,123,0.35)",
    description: "Follow my journey and DM me anytime.",
  },
];

// ─── Quick contact chips ──────────────────────────────────────────────────────
const quickInfo = [
  { icon: FiMapPin, label: "Location",  value: "Krong Kracheh, Cambodia", color: "#a78bfa" },
  { icon: FiMail,   label: "Email",     value: "phornsydeth6@gmail.com", color: "#60a5fa", href: "mailto:phornsydeth6@gmail.com" },
];

// ─── Platform card ────────────────────────────────────────────────────────────
function PlatformCard({
  link,
  index,
}: {
  link: (typeof socialLinks)[0];
  index: number;
}) {
  const Icon = link.icon;
  return (
    <motion.a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6, scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/20 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-md shadow-md hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
    >
      {/* Glow background on hover */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="pointer-events-none absolute inset-0 rounded-2xl"
        style={{
          background: `radial-gradient(circle at 50% 0%, ${link.glow} 0%, transparent 70%)`,
        }}
      />

      {/* Top gradient bar */}
      <div className={`h-1.5 w-full bg-gradient-to-r ${link.gradient} shrink-0`} />

      <div className="flex flex-col flex-1 p-6">
        {/* Icon + arrow */}
        <div className="flex items-start justify-between mb-5">
          <motion.div
            whileHover={{ rotate: 8, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${link.gradient} text-white shadow-lg text-2xl`}
          >
            <Icon />
          </motion.div>

          <motion.div
            animate={{ x: [0, 3, 0], y: [0, -3, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", type: "tween" }}
            className="text-gray-300 dark:text-gray-600 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors"
          >
            <FiArrowUpRight className="text-xl" />
          </motion.div>
        </div>

        {/* Label */}
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
          {link.label}
        </h3>

        {/* Handle */}
        <p
          className={`text-sm font-semibold mb-2 bg-gradient-to-r ${link.gradient} bg-clip-text text-transparent`}
        >
          {link.handle}
        </p>

        {/* Description */}
        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed flex-1">
          {link.description}
        </p>

        {/* CTA pill */}
        <motion.div
          whileHover={{ scale: 1.04 }}
          className={`mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r ${link.gradient} py-3 text-sm font-bold text-white shadow-md`}
        >
          <Icon className="text-base" />
          Message on {link.label.split(" ")[0]}
        </motion.div>
      </div>
    </motion.a>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────
export default function Contact() {
  return (
    <section id="contact" className="relative py-28 overflow-hidden">
      {/* ── Ambient glows ── */}
      <div className="pointer-events-none absolute left-[-150px] top-1/4 h-[450px] w-[450px] rounded-full bg-blue-500/10 dark:bg-blue-500/10 blur-[110px] -z-10" />
      <div className="pointer-events-none absolute right-[-150px] bottom-1/4 h-[350px] w-[350px] rounded-full bg-purple-500/10 dark:bg-purple-500/10 blur-[100px] -z-10" />
      <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-pink-500/5 dark:bg-pink-500/8 blur-[120px] -z-10" />

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
          title="Get In Touch"
          subtitle="Pick your favourite platform and let's start a conversation."
        />

        {/* ── Availability banner ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-4 mb-14 flex justify-center"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-emerald-500/25 bg-emerald-500/8 dark:bg-emerald-500/10 px-6 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">
              Available for work &amp; collaboration — response within 24 h
            </p>
          </div>
        </motion.div>

        {/* ── Platform cards grid ── */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {socialLinks.map((link, i) => (
            <PlatformCard key={link.id} link={link} index={i} />
          ))}
        </div>

        {/* ── Divider ── */}
        <div className="my-14 flex items-center gap-4">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-white/10 to-transparent" />
          <span className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 shrink-0">
            or find me on
          </span>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent via-gray-200 dark:via-white/10 to-transparent" />
        </div>

        {/* ── Quick info + other socials ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
          {/* Contact info chips */}
          <div className="flex flex-wrap justify-center sm:justify-start gap-4">
            {quickInfo.map(({ icon: Icon, label, value, color, href }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ x: 4 }}
              >
                {href ? (
                  <a href={href} className="flex items-center gap-3 group">
                    <div
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl"
                      style={{ background: `${color}20`, color }}
                    >
                      <Icon className="text-base" />
                    </div>
                    <div>
                      <p className="text-[0.62rem] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">{label}</p>
                      <p className="text-sm font-semibold text-gray-800 dark:text-white group-hover:underline">{value}</p>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-center gap-3">
                    <div
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl"
                      style={{ background: `${color}20`, color }}
                    >
                      <Icon className="text-base" />
                    </div>
                    <div>
                      <p className="text-[0.62rem] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">{label}</p>
                      <p className="text-sm font-semibold text-gray-800 dark:text-white">{value}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* GitHub + LinkedIn */}
          <div className="flex gap-3">
            {[
              { href: "https://github.com/PhornSydeth", icon: SiGithub, label: "GitHub",   color: "#6b7280" },
              { href: "https://www.linkedin.com/in/phorn-sydeth-6b9861349/",          icon: SiLinkedin, label: "LinkedIn", color: "#60a5fa" },
            ].map(({ href, icon: Icon, label, color }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 rounded-full border border-gray-200/60 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-sm px-5 py-2.5 text-sm font-semibold text-gray-700 dark:text-white shadow-sm hover:shadow-md transition-shadow"
              >
                <Icon className="text-base" style={{ color }} />
                {label}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
