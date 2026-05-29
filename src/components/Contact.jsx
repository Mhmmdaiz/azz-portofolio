"use client";

import { motion } from "framer-motion";
import { Mail, Link2, AtSign } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "nmuhammadaiz@gmail.com",
    href: "mailto:nmuhammadaiz@gmail.com",
    color: "bg-han-green",
  },
  {
    icon: AtSign,
    label: "Instagram",
    value: "@mhmmdazziizz_",
    href: "https://www.instagram.com/mhmmdazziizz_/",
    color: "bg-han-orange",
  },
  {
    icon: Link2,
    label: "GitHub",
    value: "github.com/Mhmmdaiz",
    href: "https://github.com/Mhmmdaiz",
    color: "bg-han-blue",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="max-w-5xl mx-auto px-6 py-32 z-10 relative scroll-mt-24">
      
      {/* Header Section — Fixed Text Alignment */}
      <div className="mb-16 border-b-4 border-zinc-800 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="max-w-xl">
          <span className="font-pixel text-xs text-han-green uppercase tracking-widest block mb-2">
            Get In Touch
          </span>
          <h2 className="font-retro text-6xl md:text-7xl font-bold text-white uppercase tracking-tight">
            Hubungi Saya
          </h2>
        </div>
        <p className="font-sans text-sm text-zinc-400 max-w-sm leading-relaxed md:text-right">
          Silakan hubungi saya secara langsung melalui salah satu platform diverifikasi di bawah ini.
        </p>
      </div>

      {/* Main Container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        {/* Bento Main Wrapper */}
        <div className="border-4 border-zinc-800 p-8 md:p-10 bg-zinc-900/20 shadow-[8px_8px_0px_0px_#000] space-y-8">
          <p className="font-sans text-base text-zinc-400 leading-relaxed text-center md:text-left max-w-3xl">
            Saya terbuka untuk ruang kolaborasi teknis, project freelance skala production, maupun peluang kerja full-time sebagai software engineer. Klik salah satu kartu di bawah untuk membuka koneksi langsung.
          </p>

          {/* Symmetrical 3-Column Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-4">
            {contactInfo.map((info) => {
              const Icon = info.icon;
              return (
                <a
                  key={info.label}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center text-center p-8 border-4 border-zinc-800 hover:border-han-green bg-zinc-950/40 hover:bg-zinc-900 transition-all duration-300 group shadow-[4px_4px_0px_0px_#000] hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[10px_10px_0px_0px_#000]"
                >
                  {/* Icon Frame */}
                  <div className={`w-14 h-14 ${info.color} border-2 border-black flex items-center justify-center text-black mb-5 shadow-[3px_3px_0px_0px_#000] transition-transform group-hover:scale-105`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  
                  {/* Text Data */}
                  <span className="font-pixel text-[9px] text-zinc-500 uppercase tracking-widest block mb-2">
                    {info.label}
                  </span>
                  <span className="font-mono text-sm font-bold text-white group-hover:text-han-green transition-colors break-all max-w-full px-2">
                    {info.value}
                  </span>
                </a>
              );
            })}
          </div>
        </div>

       
      </motion.div>

    </section>
  );
}