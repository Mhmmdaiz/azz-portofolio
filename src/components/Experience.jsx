"use client";

import { motion } from "framer-motion";
import { GraduationCap, Wifi } from "lucide-react";

const experienceData = [
  {
    year: "2025 - Sekarang",
    icon: GraduationCap,
    label: "Kuliah",
    labelColor: "bg-han-orange text-black",
    title: "S1 Teknik Informatika",
    company: "Universitas Muhammadiyah Cirebon (Kampus 1)",
    mapsLink: "https://maps.google.com/?q=Universitas+Muhammadiyah+Cirebon+Kampus+1",
    desc: "Mengembangkan kompetensi mendalam di Fakultas Teknik, program studi Teknik Informatika. Fokus pada rekayasa perangkat lunak, arsitektur data, dan pengembangan fullstack application.",
  },
  {
    year: "2024",
    icon: Wifi,
    label: "Prakerin",
    labelColor: "bg-han-yellow text-black",
    title: "Network Infrastructure Intern",
    company: "PT Fastama (Fiqran Solusindo Mediatama)",
    mapsLink: "https://maps.google.com/?q=PT+Fastama+Fiqran+Solusindo+Mediatama",
    desc: "Melaksanakan Praktik Kerja Industri pada perusahaan penyedia infrastruktur jaringan. Terlibat dalam instalasi, pemeliharaan, serta troubleshooting sistem jaringan WiFi dan konektivitas.",
  },
  {
    year: "2022 - 2025",
    icon: GraduationCap,
    label: "Pendidikan",
    labelColor: "bg-han-blue text-white",
    title: "Rekayasa Perangkat Lunak",
    company: "SMK Muhammadiyah Gebang, Cirebon",
    mapsLink: "https://maps.google.com/?q=SMK+Muhammadiyah+Gebang+Cirebon",
    desc: "Mempelajari pondasi krusial pemrograman web, algoritma dasar, manajemen basis data relasional, serta ekosistem pengembangan aplikasi desktop dan mobile.",
  },
  {
    year: "2019 - 2022",
    icon: GraduationCap,
    label: "Pendidikan",
    labelColor: "bg-zinc-800 text-zinc-400",
    title: "Pendidikan Menengah Pertama",
    company: "SMP Mu'allimin Mu'allimat Pesantren Gedongan",
    mapsLink: "https://maps.google.com/?q=SMP+Muallimin+Muallimat+Pesantren+Gedongan",
    desc: "Membangun karakter dasar disiplin, logika berpikir terstruktur, dan soft skills awal yang mendukung proses pembelajaran akademis lanjutan.",
  },
  {
    year: "2013 - 2019",
    icon: GraduationCap,
    label: "Pendidikan",
    labelColor: "bg-zinc-800 text-zinc-400",
    title: "Pendidikan Dasar",
    company: "SDN 1 Serang Wetan",
    mapsLink: "https://maps.google.com/?q=SDN+1+Serang+Wetan",
    desc: "Pendidikan dasar formal pertama. Tempat pertama kali mengasah minat awal pada logika matematika mendasar dan dunia teknologi informasi.",
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1] }
  }
};

export default function Experience() {
  return (
    <section id="experience" className="max-w-5xl mx-auto px-6 pt-32 pb-24 md:pt-28 z-10 relative scroll-mt-24">
      
      {/* Header Section — Full Width Layout */}
      <div className="mb-20 border-b-4 border-zinc-800 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="max-w-xl">
          <span className="font-pixel text-xs text-han-green uppercase tracking-widest block mb-2">
            Track Record & History
          </span>
          <h2 className="font-retro text-6xl md:text-7xl font-bold text-white tracking-tight uppercase">
            Perjalanan
          </h2>
        </div>
        <p className="font-sans text-sm text-zinc-400 max-w-sm leading-relaxed md:text-right">
          Eksplorasi rekam jejak linimasa perjalanan akademik resmi serta keterlibatan praktik nyata saya di industri.
        </p>
      </div>

      {/* Timeline Layout — Centered & Expanded Row */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative pl-8 md:pl-16 border-l-4 border-zinc-850 space-y-12 max-w-4xl mx-auto"
      >
        {experienceData.map((exp, idx) => {
          const Icon = exp.icon;
          return (
            <motion.div key={idx} variants={itemVariants} className="relative group">
              
              {/* Icon Node Penanda Timeline */}
              <div className="absolute -left-[58px] md:-left-[94px] top-0 w-12 h-12 bg-zinc-950 border-4 border-zinc-800 flex items-center justify-center text-han-orange shadow-[3px_3px_0px_0px_#000] z-10 transition-colors group-hover:border-han-orange">
                <Icon className="w-5 h-5" />
              </div>

              {/* Konten Card Brutalist — Full Width Row */}
              <div className="border-4 border-zinc-800 p-6 md:p-8 bg-zinc-900/20 shadow-[8px_8px_0px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[10px_10px_0px_0px_#000] hover:border-han-orange transition-all duration-300">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <span className={`font-pixel text-[9px] uppercase tracking-widest px-3 py-1.5 border-2 border-black font-bold ${exp.labelColor}`}>
                      {exp.label}
                    </span>
                    <span className="font-mono text-sm font-bold text-zinc-500">{exp.year}</span>
                  </div>
                </div>
                
                <h3 className="font-retro text-2xl md:text-3xl font-bold text-white group-hover:text-han-orange transition-colors">
                  {exp.title}
                </h3>
                
                {/* Tautan Lokasi Map */}
                <a 
                  href={exp.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-pixel text-[10px] text-zinc-400 hover:text-han-orange uppercase tracking-wider mt-2 mb-4 underline decoration-2 decoration-zinc-700 hover:decoration-han-orange transition-all"
                >
                  {exp.company} <span className="font-sans text-xs">↗</span>
                </a>

                <p className="font-sans text-sm md:text-base text-zinc-400 leading-relaxed border-t border-zinc-800/60 pt-4">
                  {exp.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

    </section>
  );
}