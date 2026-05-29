"use client";

import { Mail, Link2, AtSign } from "lucide-react";

// Basis Data Sosial Media Riil Anda
const socialLinks = [
  {
    icon: Mail,
    label: "Email",
    href: "mailto:nmuhammadaiz@gmail.com",
    hoverColor: "hover:text-han-green",
  },
  {
    icon: AtSign,
    label: "Instagram",
    href: "https://www.instagram.com/mhmmdazziizz_/",
    hoverColor: "hover:text-han-orange",
  },
  {
    icon: Link2,
    label: "GitHub",
    href: "https://github.com/Mhmmdaiz",
    hoverColor: "hover:text-han-blue",
  },
];

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t-4 border-zinc-800 py-12 px-6 md:px-12 select-none relative z-10">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* ─── SEKTOR KIRI: Copyright & Identitas Resmi ─── */}
        <div className="text-center sm:text-left space-y-1">
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <h3 className="font-retro text-2xl font-black text-white tracking-tighter uppercase">
              AIZ<span className="text-han-green font-normal text-xl">file</span>
            </h3>
            <span className="font-pixel text-[8px] text-zinc-500">® © 2026</span>
          </div>
          <p className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider">
            MUHAMMAD AIZ NUR AZIZ &bull; ALL RIGHTS RESERVED
          </p>
        </div>

        {/* ─── SEKTOR KANAN: Navigasi Tautan Sosial Media ─── */}
        <div className="flex items-center gap-5">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className={`p-3 border-2 border-zinc-800 bg-zinc-900/50 text-zinc-400 transition-all duration-200 shadow-[3px_3px_0px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_0px_#000] hover:border-white ${social.hoverColor}`}
              >
                <Icon className="w-5 h-5" />
              </a>
            );
          })}
        </div>

      </div>
    </footer>
  );
}