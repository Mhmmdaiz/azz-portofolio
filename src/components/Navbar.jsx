/**
 * KOMPONEN: Navbar
 * DESKRIPSI: Navigasi sticky di bagian atas halaman dengan efek blur glassmorphism.
 * FITUR:
 *   - Link navigasi ke tiap section (smooth scroll).
 *   - Logo "azz" di kiri.
 *   - ThemeToggle di kanan.
 *   - Menyembunyikan diri saat scroll ke bawah, muncul kembali saat scroll ke atas.
 *   - Mobile hamburger menu.
 */

"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setIsScrolled(currentY > 50);
      
      // Sembunyikan navbar saat scroll turun, tampilkan saat scroll naik
      setIsVisible(currentY < lastScrollY.current || currentY < 100);
      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => setIsMenuOpen(false);

  return (
    <motion.nav
      // Animasi entry pertama kali & respon saat di-scroll
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
      className={`
        fixed top-0 left-0 right-0 z-50 border-b-2 border-zinc-800 transition-colors duration-300
        ${isScrolled ? "bg-zinc-950/90 backdrop-blur-md" : "bg-transparent"}
      `}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <a href="#" className="font-retro text-3xl text-white hover:text-han-green transition-colors select-none uppercase tracking-tighter">
          aiz<span className="text-han-green">.</span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-pixel text-[9px] uppercase tracking-widest text-zinc-400 hover:text-white px-4 py-2 hover:bg-zinc-800 transition-all border border-transparent hover:border-zinc-700"
            >
              {link.label}
            </a>
          ))}
          
          <a
            href="#contact"
            className="ml-4 font-pixel text-[9px] uppercase tracking-widest bg-han-green text-black px-4 py-2 border-2 border-black hover:bg-green-400 transition-all brutal-shadow-black active:translate-y-0.5"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden w-10 h-10 border-2 border-zinc-700 flex items-center justify-center text-white hover:border-han-green hover:text-han-green transition-colors bg-zinc-950"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* ─── UPGRADE LEVEL PRO: Animasi Dropdown Mobile Berurutan ─── */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
            className="md:hidden bg-zinc-950 border-t-2 border-zinc-800 px-6 py-4 flex flex-col gap-1 overflow-hidden"
          >
            {navLinks.map((link, idx) => (
              <motion.a
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }} // Efek stagger masuk satu per satu
                key={link.label}
                href={link.href}
                onClick={handleLinkClick}
                className="font-pixel text-[9px] uppercase tracking-widest text-zinc-400 hover:text-white py-3 border-b border-zinc-900 hover:text-han-green transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
            
            <motion.a
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.05 }}
              href="#contact"
              onClick={handleLinkClick}
              className="mt-4 font-pixel text-[9px] uppercase tracking-widest bg-han-green text-black px-4 py-3.5 border-2 border-black text-center font-bold tracking-wider hover:bg-green-400 transition-colors block shadow-[4px_4px_0px_0px_#000]"
            >
              Hire Me
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}