"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Eye } from "lucide-react";
import ProjectModal from "./ProjectModal";

const projects = [
  {
    id: "daemonium-store",
    title: "Daemonium Streetwear",
    subtitle: "E-Commerce store dengan brutalist aesthetic.",
    category: "Web Development",
    desc: "Platform toko daring pakaian streetwear kustom bernama DAEMONIUM. Menampilkan desain visual brutal kontemporer, optimasi UX kaku, manajemen inventori produk, dan integrasi checkout cepat.",
    image: "https://api.microlink.io?url=https%3A%2F%2Fdaemonium.vercel.app&screenshot=true&embed=screenshot.url",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    categoryColor: "text-han-green",
    badgeText: "Project 01",
    badgeBg: "bg-han-green",
    link: "https://daemonium.vercel.app",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.215, 0.61, 0.355, 1] },
  }),
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpen = (project, e) => {
    if (e.target.closest(".direct-link")) return;
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    /* UPGRADE LEVEL PRO: 
      - Menambahkan `pt-32 md:pt-28` untuk memberikan ruang aman agar konten tidak terpotong navbar fixed pada resolusi mobile dan desktop.
      - Menambahkan `scroll-mt-24` agar ketika id target di-scroll, posisinya berhenti tepat di bawah navbar Anda.
    */
    <section 
      id="projects" 
      className="max-w-7xl mx-auto px-6 pt-32 pb-24 md:pt-28 z-10 relative scroll-mt-24"
    >
      {/* Judul Section */}
      <div className="mb-16 border-b-4 border-zinc-800 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="font-pixel text-xs text-han-green uppercase tracking-widest">
            Selected Works
          </span>
          <h2 className="font-retro text-6xl md:text-7xl font-bold text-white mt-2">
            Project Saya
          </h2>
        </div>
        <p className="font-sans text-sm text-zinc-400 max-w-sm leading-relaxed">
          Kumpulan karya terpilih — fokus penuh pada rekayasa antarmuka web modern, fungsionalitas murni, dan konversi tinggi.
        </p>
      </div>

      {/* Grid Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={cardVariants}
            className="group bento-card overflow-hidden cursor-pointer border-4 border-zinc-800 bg-zinc-900/30 shadow-[6px_6px_0px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_#000] transition-all"
            onClick={(e) => handleOpen(project, e)}
          >
            {/* Thumbnail Box */}
            <div className="relative w-full aspect-video overflow-hidden bg-zinc-950 border-b-4 border-zinc-800">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-102 opacity-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

              {/* Badge kategori */}
              <span className={`absolute top-3 left-3 font-pixel text-[8px] uppercase tracking-wider px-3 py-1.5 border-2 border-black ${project.badgeBg} text-black font-bold shadow-[2px_2px_0px_0px_#000]`}>
                {project.badgeText}
              </span>

              {/* Hover Actions */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/60 backdrop-blur-xs">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-zinc-950 text-white flex items-center justify-center border-2 border-zinc-700 hover:border-white transition-colors shadow-[3px_3px_0px_0px_#000]">
                    <Eye className="w-5 h-5" />
                  </div>
                  {project.link !== "#" && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="direct-link w-12 h-12 bg-han-green text-black flex items-center justify-center border-2 border-black hover:bg-white transition-colors shadow-[3px_3px_0px_0px_#000]"
                      title="Buka Live Site"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Info Project */}
            <div className="p-6 space-y-3">
              <span className={`font-pixel text-[8px] uppercase tracking-widest block ${project.categoryColor}`}>
                {project.category}
              </span>

              <div className="space-y-1">
                <h3 className="font-retro text-2xl font-bold text-white group-hover:text-han-green transition-colors leading-tight">
                  {project.title}
                </h3>
                <p className="font-sans text-xs text-zinc-400 leading-relaxed line-clamp-2">{project.subtitle}</p>
              </div>

              {/* Tech Stack Chips */}
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="font-pixel text-[8px] uppercase tracking-wide px-2.5 py-1 border-2 border-black text-zinc-300 bg-zinc-950 shadow-[2px_2px_0px_0px_#000]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <ProjectModal
        isOpen={isModalOpen}
        project={selectedProject}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}