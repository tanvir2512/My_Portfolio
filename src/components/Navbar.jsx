"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAVIGATION_LINKS, PERSONAL_INFO } from "@/data/portfolioData";
import { Menu, X, Download } from "lucide-react";

/**
 * Navbar Component
 * Consistent sticky header across all 7 pages.
 * Highlights the active page route in neon green and includes a responsive mobile drawer.
 */
export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/80 dark:bg-[#0B0D0C]/85 border-b border-emerald-500/20 dark:border-neon-primary/20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 pr-14 sm:pr-20 h-20 flex items-center justify-between">
        {/* Brand Logo + Name (Bitcount/Pixel font for Name) */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-lg bg-neon-secondary/15 dark:bg-neon-primary/15 border border-neon-secondary dark:border-neon-primary flex items-center justify-center shadow-neon group-hover:scale-105 transition-transform">
            <span className="font-bitcount text-lg font-bold text-emerald-700 dark:text-neon-primary">
              T
            </span>
          </div>
          <span className="font-bitcount text-sm sm:text-base tracking-tight text-slate-900 dark:text-white group-hover:text-neon-secondary dark:group-hover:text-neon-primary transition-colors">
            {PERSONAL_INFO.name}
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {NAVIGATION_LINKS.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`relative py-1 text-sm uppercase tracking-wider font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-emerald-600 dark:text-neon-primary font-semibold"
                    : "text-slate-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-neon-primary"
                }`}
              >
                {item.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-neon-secondary dark:bg-neon-primary shadow-neon rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Prominent Download CV Button */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href={PERSONAL_INFO.cvUrl}
            download
            className="neon-outline-btn text-xs sm:text-sm uppercase tracking-wider"
          >
            <span>Download CV</span>
            <Download className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          className="lg:hidden p-2 rounded-lg border border-emerald-500/30 dark:border-neon-primary/30 text-slate-800 dark:text-neon-primary"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 dark:bg-[#0B0D0C]/95 border-b border-emerald-500/30 dark:border-neon-primary/30 px-6 py-5 space-y-3 animate-fade-up">
          <div className="flex flex-col space-y-2">
            {NAVIGATION_LINKS.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-2 px-3 rounded-lg text-base uppercase tracking-wider transition-colors ${
                    isActive
                      ? "bg-neon-secondary/15 dark:bg-neon-primary/15 text-emerald-700 dark:text-neon-primary font-semibold"
                      : "text-slate-700 dark:text-gray-300 hover:bg-slate-100 dark:hover:bg-white/5"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
          <div className="pt-3 border-t border-slate-200 dark:border-white/10">
            <a
              href={PERSONAL_INFO.cvUrl}
              download
              className="neon-btn w-full text-sm uppercase"
            >
              <span>Download CV</span>
              <Download className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}