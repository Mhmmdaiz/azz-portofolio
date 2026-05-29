"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("dark"); // Default is dark brutal theme

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Detect system dark mode preference (Auto switch)
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    const savedTheme = localStorage.getItem("theme") || systemTheme;
    
    setTheme(savedTheme);
    applyTheme(savedTheme);
  }, []);

  const applyTheme = (targetTheme) => {
    const root = document.documentElement;
    if (targetTheme === "light") {
      root.classList.add("light");
    } else {
      root.classList.remove("light");
    }
    localStorage.setItem("theme", targetTheme);
  };

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    applyTheme(nextTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-han-yellow text-black border-3 border-black rounded-full flex items-center justify-center brutal-shadow-black hover:scale-110 active:scale-95 transition-all"
    >
      {theme === "dark" ? (
        <Sun className="w-6 h-6 animate-pulse" />
      ) : (
        <Moon className="w-6 h-6" />
      )}
    </button>
  );
}
