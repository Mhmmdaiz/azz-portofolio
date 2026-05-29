"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function IntroLoader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("INITIALIZING SYSTEM...");

  // Simulasi progress bar pembacaan data sistem riil
  useEffect(() => {
    const textStages = [
      "LOADING CORE MODULES...",
      "FETCHING DAEMONIUM DATABASE...",
      "RENDERING BRUTALIST UI...",
      "SYSTEM READY."
    ];

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onComplete(); // Trigger halaman utama terbuka
          }, 600);
          return 100;
        }
        
        // Ubah teks status berdasarkan persentase loading
        const stageIndex = Math.min(Math.floor(prev / 25), textStages.length - 1);
        setStatusText(textStages[stageIndex]);
        
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 80);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        y: "-100%", // Efek tirai ditarik ke atas dengan kasar (Brutalist style)
        transition: { duration: 0.6, ease: [0.85, 0, 0.15, 1], delay: 0.2 } 
      }}
      className="fixed inset-0 bg-zinc-950 z-[9999] flex flex-col items-center justify-center p-6 select-none font-mono text-white"
    >
      {/* Glitch & Grain Effect Khusus di Preloader */}
      <div className="absolute inset-0 bg-[url('/grain.png')] opacity-[0.15] pointer-events-none" />

      <div className="w-full max-w-md space-y-4 relative z-10">
        {/* Header Logo Preloader */}
        <div className="flex items-baseline gap-2 border-b-2 border-zinc-800 pb-3">
          <h1 className="font-retro text-3xl font-black tracking-tighter uppercase">
            AIZ<span className="text-han-green font-normal text-2xl">core</span>
          </h1>
          <span className="font-pixel text-[8px] text-zinc-500 animate-pulse">v2.6_PROD</span>
        </div>

        {/* Teks Status Terminal */}
        <div className="space-y-1">
          <p className="font-pixel text-[9px] text-han-green uppercase tracking-widest">Status:</p>
          <p className="text-sm tracking-wide font-bold min-h-[20px]">{statusText}</p>
        </div>

        {/* Brutalist Progress Bar Box */}
        <div className="w-full bg-zinc-900 border-2 border-zinc-700 p-1 shadow-[4px_4px_0px_0px_#000]">
          <motion.div 
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "easeInOut" }}
            className="h-4 bg-han-green border border-black"
          />
        </div>

        {/* Indikator Persentase Digital */}
        <div className="flex justify-between items-center text-[10px] text-zinc-500 font-pixel">
          <span>SYS_INIT</span>
          <span className="text-white text-xs font-bold">{progress}%</span>
        </div>
      </div>
    </motion.div>
  );
}