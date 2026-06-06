"use client";

import { useEffect } from "react";
import { ExternalLink, X } from "lucide-react";

export default function ProjectModal({ isOpen, project, onClose }) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-zinc-900 border-4 border-white relative w-full max-w-2xl max-h-[90vh] overflow-y-auto brutal-shadow-red animate-in fade-in zoom-in-95 duration-200"
      >
        <button
          onClick={onClose}
          aria-label="Tutup modal"
          className="sticky top-2 float-right mr-2 mt-2 w-10 h-10 bg-han-red border-2 border-black text-white flex items-center justify-center hover:bg-rose-400 transition-colors z-30"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="w-full aspect-video overflow-hidden border-b-4 border-white bg-black">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-6 space-y-6">
          <div className="flex flex-wrap gap-2">
            <span className="font-pixel text-[8px] bg-han-green text-black px-3 py-1.5 uppercase tracking-widest border-2 border-black">
              {project.category}
            </span>
            {project.badgeText && (
              <span className="font-pixel text-[8px] bg-han-orange text-black px-3 py-1.5 uppercase tracking-widest border-2 border-black">
                {project.badgeText}
              </span>
            )}
          </div>

          <div>
            <h3 className="font-retro text-4xl font-extrabold text-white leading-tight">
              {project.title}
            </h3>
            <p className="font-sans text-zinc-400 mt-2">{project.subtitle}</p>
          </div>

          <div>
            <h4 className="font-pixel text-[8px] uppercase tracking-widest text-han-green mb-3">
              Overview
            </h4>
            <p className="font-sans text-sm text-zinc-400 leading-relaxed">
              {project.description}
            </p>
          </div>

          {project.features && (
            <div>
              <h4 className="font-pixel text-[8px] uppercase tracking-widest text-han-green mb-3">
                Main Features
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.features.map((f) => (
                  <div
                    key={f}
                    className="flex items-center gap-2 text-sm text-zinc-300"
                  >
                    <span className="w-2 h-2 bg-han-green rounded-full" />
                    {f}
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="pt-4 border-t-2 border-zinc-800 flex flex-col sm:flex-row gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center font-pixel text-[8px] uppercase px-4 py-3 bg-han-green text-black border-2 border-black hover:bg-emerald-400 transition-colors"
              >
                <ExternalLink className="inline w-3 h-3 mr-2" /> Live Demo
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center font-pixel text-[8px] uppercase px-4 py-3 bg-zinc-950 text-white border-2 border-zinc-700 hover:bg-zinc-800 transition-colors flex items-center justify-center"
              >
                {/* SVG Ikon GitHub sebagai pengganti modul yang error */}
                <svg
                  className="w-3 h-3 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
