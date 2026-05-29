/**
 * KOMPONEN: VinylGrid
 * DESKRIPSI: Container utama yang mengelola rak/krat piringan hitam (crates showcase).
 * FITUR:
 *   - Menyimpan database proyek karya dalam array `projects` (kategori, gambar, badge warna).
 *   - Mengelola state terpilih `selectedProject` untuk melihat detail karya.
 *   - Mengontrol penampilan dialog inspeksi `isModalOpen` lewat callback props.
 *   - Merender deretan kartu `VinylCard` secara dinamis.
 */

"use client";

import { useState } from "react";
import VinylCard from "./VinylCard";
import ProjectModal from "./ProjectModal";

export default function VinylGrid() {
  // State untuk menyimpan data proyek yang sedang diperiksa/diklik oleh user
  const [selectedProject, setSelectedProject] = useState(null);
  // State untuk mengontrol visibilitas dialog detail modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Database lokal berformat array object yang berisi informasi karya portofolio
  const projects = [
    {
      id: "Sepultura",
      title: "Sepultura Catalogue",
      subtitle: "Identitas Visual & Kemasan Piringan Hitam Kontemporer.",
      category: "Branding & Typography",
      desc: "Katalog visual lengkap untuk band rock/metal legendaris dengan pendekatan modernis. Menggabungkan grid brutal, palet warna berani, dan kemasan karton piringan hitam daur ulang.",
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
      badgeText: "Vinyl 01 / Brand",
      badgeBg: "bg-han-yellow",
      discLabel: "SEPULTURA",
      discLabelBg: "bg-han-yellow",
    },
    {
      id: "Black",
      title: "Black Vinyl Series",
      subtitle: "Ilustrasi Eksklusif Berbasis Vektor Kasar & Monokromatik.",
      category: "Illustration & Printmaking",
      desc: "Seri poster musik dan ilustrasi fiksi ilmiah retro yang terinspirasi oleh manga 80-an dan seni monokrom bertekstur kasar. Dicetak terbatas di atas kertas bertekstur tebal 300Gsm.",
      image: "https://images.unsplash.com/photo-1550184658-ff6132a71714?auto=format&fit=crop&w=800&q=80",
      badgeText: "Vinyl 02 / Art",
      badgeBg: "bg-han-orange",
      discLabel: "BLACK",
      discLabelBg: "bg-han-orange",
    },
    {
      id: "Roihan",
      title: "Daffa Brand Box",
      subtitle: "Desain Kemasan Struktural & Label Ramah Lingkungan.",
      category: "Packaging Structure",
      desc: "Desain kemasan boks minimalis dengan kunci pengait mekanis mandiri tanpa perekat plastik kimia. Menggunakan bahan kertas daur ulang bertekstur organik yang ramah bumi.",
      image: "https://images.unsplash.com/photo-1502224562085-639556652f33?auto=format&fit=crop&w=800&q=80",
      badgeText: "Vinyl 03 / Packaging",
      badgeBg: "bg-han-red",
      discLabel: "ROIHAN",
      discLabelBg: "bg-han-red",
      discTextColor: "text-white",
    },
  ];

  // Fungsi pengontrol yang dijalankan saat tombol "Inspect Sleeve" di salah satu kartu diklik
  const handleInspect = (project) => {
    setSelectedProject(project); // Menyimpan objek karya yang diklik ke state
    setIsModalOpen(true);        // Menampilkan modal
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-24 z-10 relative">
      {/* Bagian Judul Pameran Rak Vinyl */}
      <div className="mb-16 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-4 border-zinc-800 pb-8 select-none">
        <div>
          <span className="font-pixel text-xs text-han-green uppercase tracking-widest">
            Interactive Exhibition
          </span>
          <h2 className="font-retro text-6xl md:text-7xl font-bold text-white mt-2">
            Daftar Piringan Karya
          </h2>
        </div>
        <p className="font-sans text-sm text-zinc-400 max-w-sm leading-relaxed">
          Posisikan kursor atau sentuh piringan hitam di bawah untuk **menarik
          jaket album (album sleeve)** dan mengeksplorasi isi proyek desain
          kemasan, branding, serta seni ilustrasi.
        </p>
      </div>

      {/* Rak Vinyl Grid Item */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {projects.map((proj) => (
          <VinylCard
            key={proj.id}
            title={proj.title}
            subtitle={proj.subtitle}
            image={proj.image}
            badgeText={proj.badgeText}
            badgeBg={proj.badgeBg}
            discLabel={proj.discLabel}
            discLabelBg={proj.discLabelBg}
            discTextColor={proj.discTextColor}
            onInspect={() => handleInspect(proj)} // Mengirim data proyek ke handler klik induk
          />
        ))}
      </div>

      {/* Dialog Pop-up Detail Sleeve Album */}
      <ProjectModal
        isOpen={isModalOpen}
        project={selectedProject}
        onClose={() => setIsModalOpen(false)} // Callback untuk menutup modal
      />
    </section>
  );
}
