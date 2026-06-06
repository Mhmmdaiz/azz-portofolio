"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { User, CheckCircle2, Cpu, Play, Pause } from "lucide-react";

export default function AboutMe() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // Inisialisasi audio di sisi client untuk mencegah error server-side
  useEffect(() => {
    audioRef.current = new Audio("/audio/track.mp3");
    audioRef.current.loop = true;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const togglePlayback = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current
        .play()
        .catch((e) => console.error("Playback restricted:", e));
    }
    setIsPlaying(!isPlaying);
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (custom = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.15,
        duration: 0.6,
        ease: [0.25, 1, 0.5, 1],
      },
    }),
  };

  const skillsList = [
    { name: "Laravel 11", url: "https://laravel.com" },
    { name: "Next.js", url: "https://nextjs.org" },
    { name: "Supabase", url: "https://supabase.com" },
    { name: "React.js", url: "https://react.dev" },
    { name: "Tailwind CSS", url: "https://tailwindcss.com" },
    { name: "Framer Motion", url: "https://framer.com/motion" },
  ];

  return (
    <section
      id="about"
      className="w-full bg-zinc-950 border-b-4 border-black select-none"
    >
      <div className="max-w-7xl mx-auto px-6 py-24">
        {/* Header Section */}
        <div className="mb-16 border-b-4 border-zinc-800 pb-8">
          <span className="font-pixel text-xs text-han-green uppercase tracking-widest font-bold">
            About azz
          </span>
          <h2 className="font-retro text-5xl md:text-6xl font-black text-white mt-2 uppercase tracking-tighter">
            Tentang Saya
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* Card 1: Profil */}
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            variants={cardVariants}
            className="lg:col-span-2 flex flex-col justify-between bg-zinc-900 border-4 border-zinc-800 p-8 shadow-[8px_8px_0px_0px_#000]"
          >
            <div className="space-y-6">
              <div className="w-12 h-12 bg-han-green border-2 border-black flex items-center justify-center text-black shadow-[4px_4px_0px_0px_#000]">
                <User className="w-6 h-6" />
              </div>
              <p className="font-retro text-sm md:text-base text-zinc-400 leading-relaxed">
                Halo, saya Muhammad A'iz Nur Aziz. Saya seorang Frontend
                Developer yang tertarik pada pengembangan website modern dengan
                tampilan aesthetic, animasi smooth, dan pengalaman pengguna yang
                interaktif. Saya senang mengeksplorasi desain UI modern seperti
                Bento Grid, Glassmorphism, dan interactive web experience untuk
                menciptakan website yang tidak hanya indah dilihat, tetapi juga
                terasa hidup saat digunakan. Saat ini saya terus mengembangkan
                kemampuan di bidang web development, UI/UX, dan creative
                technology untuk membangun project digital yang unik dan
                impactful.
              </p>
            </div>
          </motion.div>

          {/* Card 2: Interactive Vinyl System */}
          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            variants={cardVariants}
            className="flex flex-col justify-between items-center text-center bg-zinc-900 border-4 border-zinc-800 p-8 shadow-[8px_8px_0px_0px_#000]"
          >
            <div
              onClick={togglePlayback}
              className="relative w-full aspect-square border-4 border-black overflow-hidden bg-black flex items-center justify-center rounded-sm cursor-pointer group"
            >
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] bg-[size:20px_20px] opacity-40" />

              <motion.div
                animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
                transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                className="w-40 h-40 rounded-full border-[15px] border-zinc-950 flex items-center justify-center bg-zinc-800"
              >
                <div className="w-10 h-10 rounded-full bg-han-green border-2 border-black flex items-center justify-center">
                  <span className="font-pixel text-[6px] font-bold text-black">
                    AZZ
                  </span>
                </div>
              </motion.div>

              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                {isPlaying ? (
                  <Pause className="text-white w-10 h-10" />
                ) : (
                  <Play className="text-white w-10 h-10" />
                )}
              </div>
            </div>
            <div className="mt-6">
              <h4 className="font-retro text-2xl font-black text-white uppercase">
                Disco 2000 (Extended Version)
              </h4>
              <span className="font-mono text-xs text-zinc-500">
                {isPlaying ? "STATUS: LIVE" : "STATUS: STANDBY"}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
