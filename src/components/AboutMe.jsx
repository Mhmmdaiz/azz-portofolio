"use client";

import { motion } from "framer-motion";
import { User, CheckCircle2, Cpu } from "lucide-react";

export default function AboutMe() {
  // Fungsi varian animasi masuk dengan stagger delay
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (custom = 0) => ({
      opacity: 1,
      y: 0,
      transition: { 
        delay: custom * 0.15, 
        duration: 0.6, 
        ease: [0.25, 1, 0.5, 1] 
      }
    })
  };

  // Stack Teknologi Riil yang terintegrasi dengan ekosistem Laravel & Next.js Anda
  const skillsList = [
    { name: "Laravel 11", url: "https://laravel.com" },
    { name: "Next.js", url: "https://nextjs.org" },
    { name: "Supabase", url: "https://supabase.com" },
    { name: "React.js", url: "https://react.dev" },
    { name: "Tailwind CSS", url: "https://tailwindcss.com" },
    { name: "Framer Motion", url: "https://framer.com/motion" }
  ];

  return (
    <section id="about" className="w-full bg-zinc-950 border-b-4 border-black select-none">
      <div className="max-w-7xl mx-auto px-6 py-24">
        
        {/* Judul Section */}
        <div className="mb-16 border-b-4 border-zinc-800 pb-8">
          <span className="font-pixel text-xs text-han-green uppercase tracking-widest font-bold">About azz</span>
          <h2 className="font-retro text-5xl md:text-6xl font-black text-white mt-2 uppercase tracking-tighter">Tentang Saya</h2>
        </div>

        {/* Bento Grid Layout - Dibuat Full Width & Seimbang (Eliminasi Dead Space) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          
          {/* Card 1: Perkenalan Profil Utama (Mengambil 2 Kolom di Desktop) */}
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={cardVariants}
            className="lg:col-span-2 flex flex-col justify-between bg-zinc-900 border-4 border-zinc-800 p-8 shadow-[8px_8px_0px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[10px_10px_0px_0px_#000] transition-all"
          >
            <div className="space-y-6">
              <div className="w-12 h-12 bg-han-green border-2 border-black flex items-center justify-center text-black shadow-[4px_4px_0px_0px_#000]">
                <User className="w-6 h-6" />
              </div>
              <h3 className="font-retro text-3xl md:text-4xl font-black text-white uppercase tracking-tight">
                Siapakah azz?
              </h3>
              <p className="font-sans text-sm md:text-base text-zinc-400 leading-relaxed">
                Saya adalah seorang <strong className="text-white font-bold">Full-Stack Software Engineer &amp; Product Thinker</strong>. Fokus utama saya tertuju pada perancangan arsitektur aplikasi web berkinerja tinggi, penulisan kode yang bersih, serta optimalisasi alur konversi pengguna (*user flow*).
              </p>
              <p className="font-sans text-sm md:text-base text-zinc-400 leading-relaxed">
                Saya menjembatani logika backend yang kuat dan aman dengan desain antarmuka berselera brutalist modern. Mulai dari manajemen database relasional, sinkronisasi state, hingga animasi mikro frontend—setiap baris kode dikompilasi secara presisi untuk skala produksi.
              </p>
            </div>
          </motion.div>

          {/* Card 2: Interactive Vinyl Core (Mengambil 1 Kolom Sisa) */}
          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={cardVariants}
            className="flex flex-col justify-between items-center text-center bg-zinc-900 border-4 border-zinc-800 p-8 shadow-[8px_8px_0px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[10px_10px_0px_0px_#000] transition-all group"
          >
            <div className="relative w-full aspect-square border-4 border-black overflow-hidden bg-black flex items-center justify-center rounded-sm">
              {/* Overlay Grid Retro */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] bg-[size:20px_20px] opacity-40" />
              
              {/* Animasi Piringan Hitam Berputar (CSS Hardware Accelerated via Framer) */}
              <motion.svg
                className="w-44 h-44 md:w-48 md:h-48 text-zinc-800 drop-shadow-[0_10px_10px_rgba(0,0,0,0.8)]"
                viewBox="0 0 100 100"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
              >
                <circle cx="50" cy="50" r="45" fill="#141414" stroke="#27272a" strokeWidth="2" />
                <circle cx="50" cy="50" r="35" fill="none" stroke="#1f1f23" strokeWidth="1" strokeDasharray="4,2" />
                <circle cx="50" cy="50" r="25" fill="none" stroke="#1f1f23" strokeWidth="1" />
                <circle cx="50" cy="50" r="12" fill="#449e62" stroke="#000" strokeWidth="1.5" />
                <circle cx="50" cy="50" r="3" fill="#000" />
              </motion.svg>
              <span className="absolute font-pixel text-[9px] text-white tracking-widest font-bold bg-black/80 px-2 py-1 border border-zinc-800 select-none">AZZ CORE</span>
            </div>
            
            <div className="mt-6">
              <h4 className="font-retro text-2xl font-black text-white uppercase tracking-tight">System Core</h4>
              <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest block mt-1">Analog Vinyl Grid Vibe</span>
            </div>
          </motion.div>

          {/* Card 3: Baris Bawah Penuh - Senjata Utama (Mengambil Seluruh 3 Kolom) */}
          <motion.div
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={cardVariants}
            className="lg:col-span-3 flex flex-col justify-between bg-zinc-900 border-4 border-zinc-800 p-8 shadow-[8px_8px_0px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[10px_10px_0px_0px_#000] transition-all"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 bg-han-yellow border-2 border-black flex items-center justify-center text-black shadow-[4px_4px_0px_0px_#000]">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="font-retro text-3xl font-black text-white uppercase tracking-tight">Senjata Utama</h3>
              <p className="font-sans text-sm md:text-base text-zinc-400 leading-relaxed max-w-4xl">
                Kumpulan arsitektur teknologi fundamental yang saya gunakan secara intensif untuk men-deploy aplikasi web interaktif, mengelola penyimpanan database relasional, serta mengoptimalkan performa rendering sisi server (*SSR*):
              </p>
            </div>

            {/* List Tech Stack dengan Hover Effect Brutalist */}
            <div className="flex flex-wrap gap-4 mt-8">
              {skillsList.map((skill, index) => (
                <a
                  key={index}
                  href={skill.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 border-2 border-black bg-zinc-950 px-5 py-3 hover:bg-han-green hover:text-black transition-colors shadow-[4px_4px_0px_0px_#000] font-pixel text-[10px] text-white cursor-pointer font-bold active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_#000]"
                >
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>{skill.name}</span>
                </a>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}