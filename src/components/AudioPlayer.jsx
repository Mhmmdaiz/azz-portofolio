/**
 * KOMPONEN: AudioPlayer
 * DESKRIPSI: Tombol play/pause ambient retro lo-fi synthesizer menggunakan Web Audio API.
 * FITUR:
 *   - Oscillator sederhana menghasilkan suara ambient synthwave retro.
 *   - State isPlaying untuk toggle play/pause.
 *   - Dibuat "use client" karena menggunakan API browser (Web Audio API).
 *   - Ikon Play/Pause dari lucide-react.
 */

"use client";

import { useState, useRef, useEffect } from "react";
import { Play, Pause } from "lucide-react";

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef(null);
  const oscillatorsRef = useRef([]);
  const gainNodeRef = useRef(null);

  // Cleanup audio context saat komponen di-unmount
  useEffect(() => {
    return () => {
      if (audioCtxRef.current) {
        audioCtxRef.current.close();
      }
    };
  }, []);

  // Fungsi untuk memulai suara ambient retro
  const startAudio = () => {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    audioCtxRef.current = ctx;

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.07, ctx.currentTime);
    gain.connect(ctx.destination);
    gainNodeRef.current = gain;

    // Buat beberapa oscillator untuk tekstur ambient
    const frequencies = [110, 165, 220, 330];
    const oscs = frequencies.map((freq) => {
      const osc = ctx.createOscillator();
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      osc.connect(gain);
      osc.start();
      return osc;
    });

    oscillatorsRef.current = oscs;
  };

  // Fungsi untuk menghentikan semua oscillator
  const stopAudio = () => {
    oscillatorsRef.current.forEach((osc) => {
      try {
        osc.stop();
      } catch (_) {}
    });
    oscillatorsRef.current = [];
    if (audioCtxRef.current) {
      audioCtxRef.current.close();
      audioCtxRef.current = null;
    }
  };

  // Toggle play/pause
  const handleToggle = () => {
    if (isPlaying) {
      stopAudio();
      setIsPlaying(false);
    } else {
      startAudio();
      setIsPlaying(true);
    }
  };

  return (
    <button
      onClick={handleToggle}
      title={isPlaying ? "Pause ambient audio" : "Play ambient audio"}
      className={`
        flex items-center gap-2 px-4 py-2.5 border-2 border-black
        font-pixel text-[9px] uppercase tracking-wider
        brutal-shadow-black transition-all
        hover:translate-y-[-2px] hover:shadow-[4px_6px_0px_0px_#000]
        active:translate-y-0 active:shadow-[2px_2px_0px_0px_#000]
        ${isPlaying
          ? "bg-han-green text-black"
          : "bg-zinc-800 text-white hover:bg-zinc-700"
        }
      `}
    >
      {isPlaying ? (
        <Pause className="w-3.5 h-3.5" />
      ) : (
        <Play className="w-3.5 h-3.5" />
      )}
      <span>{isPlaying ? "Lo-Fi ON" : "Ambient"}</span>

      {/* Animasi equalizer bar saat playing */}
      {isPlaying && (
        <span className="flex items-end gap-[2px] h-3">
          {[1, 2, 3].map((i) => (
            <span
              key={i}
              className="w-[3px] bg-black rounded-sm animate-pulse"
              style={{
                height: `${40 + i * 20}%`,
                animationDelay: `${i * 0.15}s`,
              }}
            />
          ))}
        </span>
      )}
    </button>
  );
}
