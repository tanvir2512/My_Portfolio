"use client";

import React from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { Mail, Globe } from "lucide-react";

/**
 * Custom Inline SVG Icons for GitHub, LinkedIn & YouTube
 * (Compatible with lucide-react v1+ which removed brand logos)
 */
function GithubIcon({ className = "w-4 h-4" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ className = "w-4 h-4" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function YoutubeIcon({ className = "w-4 h-4" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3v6Z" fill="currentColor" />
    </svg>
  );
}

/**
 * Footer Component
 * Displays social media links, handwritten signature accent, and copyright notice.
 * Uses a static year (2026) to avoid Next.js 16 static prerender build errors on Vercel.
 */
export default function Footer() {
  return (
    <footer className="w-full border-t border-emerald-500/20 dark:border-neon-primary/15 bg-white/60 dark:bg-[#0B0D0C]/80 backdrop-blur-sm py-6 px-4 sm:px-8 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left: Follow Me Icons */}
        <div className="flex items-center gap-4">
          <span className="text-xs uppercase tracking-widest text-slate-500 dark:text-gray-400">
            Follow Me
          </span>
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="p-2 rounded-lg border border-emerald-500/30 dark:border-neon-primary/30 text-slate-700 dark:text-gray-300 hover:text-neon-secondary dark:hover:text-neon-primary hover:shadow-neon transition-all"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="p-2 rounded-lg border border-emerald-500/30 dark:border-neon-primary/30 text-slate-700 dark:text-gray-300 hover:text-neon-secondary dark:hover:text-neon-primary hover:shadow-neon transition-all"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_INFO.youtube || "https://www.youtube.com/@SolvewithTanvir"}
            target="_blank"
            rel="noreferrer"
            aria-label="YouTube"
            className="p-2 rounded-lg border border-emerald-500/30 dark:border-neon-primary/30 text-slate-700 dark:text-gray-300 hover:text-neon-secondary dark:hover:text-neon-primary hover:shadow-neon transition-all"
          >
            <YoutubeIcon className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            aria-label="Email"
            className="p-2 rounded-lg border border-emerald-500/30 dark:border-neon-primary/30 text-slate-700 dark:text-gray-300 hover:text-neon-secondary dark:hover:text-neon-primary hover:shadow-neon transition-all"
          >
            <Mail className="w-4 h-4" />
          </a>
          <a
            href="/"
            aria-label="Website"
            className="p-2 rounded-lg border border-emerald-500/30 dark:border-neon-primary/30 text-slate-700 dark:text-gray-300 hover:text-neon-secondary dark:hover:text-neon-primary hover:shadow-neon transition-all"
          >
            <Globe className="w-4 h-4" />
          </a>
        </div>

        {/* Center: Handwritten Signature Accent from Showcase */}
        <div className="text-center">
          <p className="font-handwritten text-2xl text-emerald-600 dark:text-neon-primary">
            {PERSONAL_INFO.name}
          </p>
          <p className="text-[11px] tracking-wider text-slate-500 dark:text-gray-400">
            CSE Graduate | Problem Solver | Lifelong Learner
          </p>
        </div>

        {/* Right: Copyright */}
        <p className="text-xs text-slate-500 dark:text-gray-400">
          © 2026 {PERSONAL_INFO.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}