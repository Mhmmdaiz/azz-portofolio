/**
 * KOMPONEN: ProjectModal
 * DESKRIPSI: Pop-up modal interaktif untuk menampilkan detail project portofolio.
 * FITUR:
 *   - Tutup dengan tombol ESC atau klik backdrop.
 *   - Menampilkan thumbnail, kategori, judul, deskripsi, dan tech stack chips.
 *   - Link ke project live (bila tersedia).
 *   - Transisi zoom-in + fade-in smooth.
 *
 * PROPS:
 *   - isOpen: Boolean — apakah modal ditampilkan.
 *   - project: Object — data project (title, desc, category, image, tech, link).
 *   - onClose: Function — callback saat modal ditutup.
 */

"use client";

import { useEffect } from "react";
import { ExternalLink, X } from "lucide-react";

export default function ProjectModal({ isOpen, project, onClose }) {
  // Tangkap tombol Escape untuk menutup modal
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Cegah scroll body saat modal terbuka
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  return (
    // Backdrop — klik untuk tutup
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
    >
      {/* Kotak Modal — stop propagasi agar klik di dalam tidak menutup */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-zinc-900 border-4 border-white brutal-shadow-red relative w-full max-w-2xl animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Tombol Tutup (X) */}
        <button
          onClick={onClose}
          aria-label="Tutup modal"
          className="absolute -top-5 -right-5 w-10 h-10 bg-han-red border-2 border-black text-white flex items-center justify-center hover:bg-rose-400 transition-colors z-10"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Thumbnail Project */}
        <div className="w-full aspect-video overflow-hidden border-b-4 border-white bg-black">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
          />
        </div>

        {/* Konten Detail */}
        <div className="p-6 space-y-4">
          {/* Badge Kategori */}
          <span className="font-pixel text-[8px] bg-han-green text-black px-3 py-1.5 uppercase tracking-widest inline-block border-2 border-black">
            {project.category}
          </span>

          {/* Judul */}
          <h3 className="font-retro text-4xl font-extrabold text-white leading-tight">
            {project.title}
          </h3>

          {/* Deskripsi */}
          <p className="font-sans text-sm text-zinc-400 leading-relaxed">
            {project.desc}
          </p>

          {/* Tech Stack */}
          {project.tech && project.tech.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-1">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="font-pixel text-[8px] uppercase tracking-wide px-3 py-1.5 border-2 border-zinc-600 text-zinc-300 bg-zinc-800"
                >
                  {t}
                </span>
              ))}
            </div>
          )}

          {/* Footer: status & link */}
          <div className="pt-4 border-t-2 border-zinc-800 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 bg-han-green rounded-full animate-ping" />
              <span className="font-pixel text-[8px] text-han-green uppercase tracking-widest">
                Available in Catalog
              </span>
            </div>

            {/* Link ke project live */}
            {project.link && project.link !== "#" && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-pixel text-[8px] uppercase tracking-wider px-4 py-2 bg-white text-black border-2 border-black hover:bg-han-green transition-colors"
              >
                <ExternalLink className="w-3 h-3" />
                Lihat Live
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
