"use client";

import { motion } from "framer-motion";

// Database keahlian riil tanpa kategori design
const skillCategories = [
  {
    id: "frontend",
    label: "Frontend",
    icon: "⚡",
    colorClass: "bg-han-green",
    borderAccent: "border-han-green",
    skills: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "React", level: 75 },
      { name: "Next.js", level: 70 },
      { name: "Tailwind CSS", level: 85 },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    icon: "🔧",
    colorClass: "bg-han-orange",
    borderAccent: "border-han-orange",
    skills: [
      { name: "Node.js", level: 60 },
      { name: "MySQL", level: 65 },
      { name: "Firebase", level: 70 },
      { name: "Supabase", level: 75 },
    ],
  },
];

// Varian animasi untuk card bento muncul dari bawah secara sekuensial
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
};

// Varian animasi untuk progress bar mengisi dari kiri kaku murni
const barVariants = {
  hidden: { width: 0 },
  visible: (level) => ({
    width: `${level}%`,
    transition: { duration: 1, ease: [0.25, 1, 0.5, 1], delay: 0.3 },
  }),
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="max-w-7xl mx-auto px-6 pt-32 pb-24 md:pt-28 z-10 relative scroll-mt-24"
    >
      {/* Judul Section */}
      <div className="mb-16 border-b-4 border-zinc-800 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="font-pixel text-xs text-han-green uppercase tracking-widest">
            Technical Stack
          </span>
          <h2 className="font-retro text-6xl md:text-7xl font-bold text-white mt-2">
            Keahlian Saya
          </h2>
        </div>
        <p className="font-sans text-sm text-zinc-400 max-w-sm leading-relaxed">
          Arsitektur teknologi tervalidasi yang saya gunakan untuk merekayasa
          antarmuka digital berperforma tinggi dan terkonversi dengan baik.
        </p>
      </div>

      {/* Grid Kategori Keahlian - Menjadi 2 Kolom Secara Otomatis di Layar Medium/Besar */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {skillCategories.map((cat, catIndex) => (
          <motion.div
            key={cat.id}
            custom={catIndex}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={cardVariants}
            className="bento-card border-4 border-zinc-800 p-8 bg-zinc-900/30 flex flex-col gap-6 shadow-[6px_6px_0px_0px_#000]"
          >
            {/* Header Kategori */}
            <div className="flex items-center gap-4">
              <div
                className={`w-14 h-14 ${cat.colorClass} border-4 border-black flex items-center justify-center text-2xl shadow-[4px_4px_0px_0px_#000] text-black`}
              >
                {cat.icon}
              </div>
              <div>
                <span className="font-pixel text-[9px] text-zinc-500 uppercase tracking-widest block">
                  Category
                </span>
                <h3 className="font-retro text-3xl font-extrabold text-white uppercase tracking-tight">
                  {cat.label}
                </h3>
              </div>
            </div>

            {/* Daftar Item Keahlian */}
            <div className="space-y-5 pt-2">
              {cat.skills.map((skill) => (
                <div key={skill.name} className="group">
                  {/* Label */}
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-pixel text-[9px] text-zinc-300 uppercase tracking-wide group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                    <span className="font-mono text-[10px] text-zinc-500 group-hover:text-zinc-300 transition-colors">
                      {skill.level}%
                    </span>
                  </div>

                  {/* Konstruksi Progress Bar Kasar Brutalist */}
                  <div className="w-full h-3 bg-zinc-950 border-2 border-zinc-800 relative overflow-hidden">
                    <motion.div
                      custom={skill.level}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={barVariants}
                      className={`absolute left-0 top-0 h-full border-r-2 border-black ${cat.colorClass}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
