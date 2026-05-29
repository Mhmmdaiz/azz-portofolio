/**
 * KOMPONEN: Hero
 * DESKRIPSI: Bagian Header/Hero utama portofolio azz.
 * FITUR:
 *   - Nama besar "azz" dengan subtitle dan deskripsi singkat.
 *   - 3 CTA Button: Lihat Project, Hubungi Saya, Download CV.
 *   - Floating stickers animasi melayang.
 *   - AudioPlayer retro ambient terintegrasi.
 *   - Background vinyl shelf estetik.
 */

"use client";

import { Home, ArrowDown, Mail, Download, FolderOpen } from "lucide-react";
import { motion } from "framer-motion";
import AudioPlayer from "./AudioPlayer";

export default function Hero() {
  // Definisi varian animasi masuk untuk teks dan tombol utama
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] } 
    }
  };

  // Varian khusus untuk stiker agar tidak merusak loop CSS "sticker-float"
  const stickerEntryVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { type: "spring", stiffness: 100, damping: 10 } 
    }
  };

  return (
    <header className="relative w-full min-h-screen flex flex-col items-center justify-center px-4 md:px-12 py-12 bg-zinc-900 border-b-4 border-zinc-800 overflow-hidden">
      
      {/* Latar Belakang Vinyl */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none mix-blend-color-dodge bg-cover bg-center"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1539635278303-d4002c07eae3?auto=format&fit=crop&w=1200&q=80")`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-900/60 to-transparent" />

      {/* Hiasan Garis Kontur */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30" xmlns="http://www.w3.org/2000/svg">
        <path d="M-100,200 C300,50 400,600 800,300 C1200,50 1400,700 1800,200" fill="none" stroke="white" strokeWidth="2" strokeDasharray="10 5" />
        <path d="M-50,450 C250,600 650,200 1000,500 C1350,800 1550,150 1900,650" fill="none" stroke="rgba(68, 158, 98, 0.5)" strokeWidth="3" />
      </svg>

      {/* ─── FLOATING STICKERS (Entry Motion Terintegrasi dengan Loop CSS) ─── */}
      {/* Sticker ME */}
      <motion.div initial="hidden" animate="visible" variants={stickerEntryVariants} className="absolute top-24 left-[10%] z-30 sticker-float" style={{ animationDelay: "0s" }}>
        <div className="bg-han-green text-black px-4 py-2 rounded-full border-2 border-black font-retro text-2xl font-bold tracking-wider hover:scale-110 transition-transform shadow-[3px_3px_0px_0px_#000]">
          ME
        </div>
      </motion.div>

      {/* Sticker @ */}
      <motion.div initial="hidden" animate="visible" variants={stickerEntryVariants} className="absolute top-48 left-[4%] z-30 sticker-float" style={{ animationDelay: "1s" }}>
        <div className="w-12 h-12 bg-han-orange rounded-full border-2 border-black flex items-center justify-center text-black font-pixel text-lg font-bold shadow-[3px_3px_0px_0px_#000]">
          @
        </div>
      </motion.div>

      {/* Sticker Files */}
      <motion.div initial="hidden" animate="visible" variants={stickerEntryVariants} className="absolute bottom-32 left-[12%] z-30 sticker-float hidden md:block" style={{ animationDelay: "2s" }}>
        <div className="bg-amber-400 text-black px-6 py-2.5 rounded-full border-2 border-black font-retro text-3xl font-extrabold tracking-widest shadow-[4px_4px_0px_0px_#000] rotate-[-5deg] hover:rotate-3 transition-all">
          FILES
        </div>
      </motion.div>

      {/* Sticker AIZ */}
      <motion.div initial="hidden" animate="visible" variants={stickerEntryVariants} className="absolute top-1/3 right-[28%] z-30 sticker-float" style={{ animationDelay: "3.5s" }}>
        <div className="bg-han-red text-white px-3 py-1 rounded-md border-2 border-black font-pixel text-[10px] tracking-wide uppercase shadow-[2px_2px_0px_0px_#000]">
          AzZ
        </div>
      </motion.div>

      {/* Sticker NEWEST */}
      <motion.div initial="hidden" animate="visible" variants={stickerEntryVariants} className="absolute top-36 right-[20%] z-30 sticker-float hidden md:block" style={{ animationDelay: "1.5s" }}>
        <div className="bg-amber-500 text-black px-5 py-1.5 rounded-full border-2 border-black font-pixel text-[9px] font-black uppercase tracking-wider rotate-[6deg] hover:scale-105 transition-transform shadow-[3px_3px_0px_0px_#000]">
          NEWEST
        </div>
      </motion.div>

      {/* Sticker Catalogue */}
      <motion.div initial="hidden" animate="visible" variants={stickerEntryVariants} className="absolute bottom-36 left-[3%] z-30 sticker-float hidden md:block" style={{ animationDelay: "4s" }}>
        <div className="bg-rose-500 text-white px-4 py-1.5 rounded-full border-2 border-black font-pixel text-[8px] uppercase tracking-widest rotate-[-8deg] shadow-[3px_3px_0px_0px_#000]">
          Catalogue
        </div>
      </motion.div>

      {/* Sticker Home */}
      <motion.div initial="hidden" animate="visible" variants={stickerEntryVariants} className="absolute top-1/2 right-[8%] z-30 sticker-float" style={{ animationDelay: "2.5s" }}>
        <div className="w-12 h-12 bg-lime-500 rounded-lg border-2 border-black flex items-center justify-center text-black shadow-[3px_3px_0px_0px_#000] hover:bg-lime-400 transition-colors">
          <Home className="w-6 h-6" />
        </div>
      </motion.div>

      {/* Sticker Smiley berputar */}
      <motion.div initial="hidden" animate="visible" variants={stickerEntryVariants} className="absolute top-20 right-[12%] z-30 sticker-float" style={{ animationDelay: "5s" }}>
        <div className="w-14 h-14 bg-white rounded-full border-2 border-black flex items-center justify-center text-black shadow-[4px_4px_0px_0px_#000]">
          <svg className="w-10 h-10 animate-spin" style={{ animationDuration: "10s" }} viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="45" stroke="black" strokeWidth="4" fill="white" />
            <circle cx="35" cy="40" r="5" fill="black" />
            <circle cx="65" cy="40" r="5" fill="black" />
            <path d="M 30,65 Q 50,85 70,65" stroke="black" strokeWidth="4" fill="none" strokeLinecap="round" />
          </svg>
        </div>
      </motion.div>


      {/* ─── KONTEN UTAMA HERO (Staggered Entry Animation) ─── */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="z-20 text-center select-none max-w-5xl flex flex-col items-center gap-6"
      >
        {/* Label status */}
        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-han-green/10 border border-han-green/30 px-4 py-1.5 rounded-full">
          <span className="w-2 h-2 bg-han-green rounded-full animate-pulse" />
          <span className="font-pixel text-[9px] text-han-green uppercase tracking-widest font-bold">Available for Work</span>
        </motion.div>

        {/* Nama Besar */}
        <motion.h1 
          variants={itemVariants}
          className="font-retro text-[22vw] md:text-[15vw] leading-none text-white tracking-tight drop-shadow-[8px_8px_0px_#121212] select-none uppercase font-black"
        >
          azz
        </motion.h1>

        {/* Subtitle & Deskripsi */}
        <motion.div variants={itemVariants} className="space-y-3">
          <p className="font-pixel text-[11px] md:text-sm text-han-green uppercase tracking-widest font-bold">
            Full-Stack Software Engineer &amp; Product Thinker
          </p>
          <p className="font-sans text-sm md:text-base text-zinc-400 max-w-xl leading-relaxed mx-auto">
            Membangun sistem web performa tinggi, interaktif, dan berarsitektur bersih. Berfokus pada konversi, logika solid, dan performa level produksi.
          </p>
        </motion.div>

        {/* ─── CTA BUTTONS GROUP ─── */}
        <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-4 mt-2">
          {/* Lihat Project */}
          <a
            href="#projects"
            className="group flex items-center gap-2 bg-han-green text-black border-2 border-black px-6 py-3 font-pixel text-[10px] uppercase tracking-wider font-bold shadow-[4px_4px_0px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_#000] transition-all active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_0px_0px_#000]"
          >
            <FolderOpen className="w-4 h-4" />
            Lihat Project
          </a>

          {/* Hubungi Saya */}
          <a
            href="#contact"
            className="group flex items-center gap-2 bg-transparent text-white border-2 border-white px-6 py-3 font-pixel text-[10px] uppercase tracking-wider font-bold shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)] hover:bg-white hover:text-black hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_#000] transition-all"
          >
            <Mail className="w-4 h-4" />
            Hubungi Saya
          </a>

          {/* Download CV */}
          <a
            href="/cv-aiz.pdf"
            download
            className="group flex items-center gap-2 bg-han-yellow text-black border-2 border-black px-6 py-3 font-pixel text-[10px] uppercase tracking-wider font-bold shadow-[4px_4px_0px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_#000] transition-all"
          >
            <Download className="w-4 h-4" />
            Download CV
          </a>
        </motion.div>

        {/* Scroll Hint */}
        <motion.div variants={itemVariants} className="mt-6 flex flex-col items-center gap-2 opacity-50">
          <span className="font-pixel text-[8px] text-zinc-500 uppercase tracking-widest font-bold">Scroll Down</span>
          <ArrowDown className="w-4 h-4 text-zinc-500 animate-bounce" />
        </motion.div>
      </motion.div>

      {/* AudioPlayer */}
      <div className="absolute bottom-6 right-6 z-40">
        <AudioPlayer />
      </div>
    </header>
  );
}