"use client";

import React, { useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import { Sun, Moon } from "lucide-react";

/**
 * PullCordSwitch Component
 * Renders an interactive hanging pull-cord light/dark mode switch on every page.
 * Positioned in the top-right area next to the Download CV button.
 */
export default function PullCordSwitch() {
  const { theme, toggleTheme, mounted } = useTheme();
  const [isPulling, setIsPulling] = useState(false);

  const handlePull = () => {
    setIsPulling(true);
    toggleTheme();
    setTimeout(() => {
      setIsPulling(false);
    }, 300);
  };

  if (!mounted) return null;

  return (
    <div
      className="fixed top-0 right-3 sm:right-6 z-50 flex flex-col items-center select-none"
      title={`Pull cord to switch to ${theme === "dark" ? "Light" : "Dark"} Mode`}
    >
      {/* Ceiling Mount Base */}
      <div className="w-4 h-1.5 rounded-b-full bg-neon-secondary dark:bg-neon-primary shadow-neon" />

      {/* Interactive Cord + Bulb Handle */}
      <button
        onClick={handlePull}
        aria-label="Pull cord to toggle dark and light theme"
        className="group flex flex-col items-center focus:outline-none cursor-pointer"
      >
        {/* Hanging Cord Line (stretches when pulled) */}
        <div
          className={`w-[2px] bg-gradient-to-b from-neon-secondary via-emerald-400 to-neon-primary transition-all duration-300 ease-out ${
            isPulling ? "h-24 sm:h-28" : "h-14 sm:h-16 group-hover:h-20"
          }`}
        />

        {/* Cord Knob / Glowing Pendant */}
        <div
          className={`relative flex items-center justify-center w-8 h-8 rounded-full border-2 transition-all duration-300 ${
            theme === "dark"
              ? "bg-[#1A1F1E] border-neon-primary text-neon-primary shadow-neon"
              : "bg-white border-neon-secondary text-emerald-600 shadow-md"
          } group-hover:scale-110`}
        >
          {theme === "dark" ? (
            <Moon className="w-4 h-4" />
          ) : (
            <Sun className="w-4 h-4 text-amber-500" />
          )}

          {/* Subtle Pull Tooltip on Hover */}
          <span className="hidden md:block absolute right-10 whitespace-nowrap px-2 py-0.5 text-[11px] font-oswald rounded bg-[#1A1F1E] text-neon-primary border border-neon-primary/40 opacity-0 group-hover:opacity-100 transition-opacity">
            Pull Theme ({theme === "dark" ? "Dark" : "Light"})
          </span>
        </div>
      </button>
    </div>
  );
}