"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PERSONAL_INFO } from "@/data/portfolioData";
import {
  Download,
  Mail,
  MapPin,
  GraduationCap,
  Briefcase,
  Mouse,
  User,
} from "lucide-react";

/**
 * 1. ABOUT PAGE (Root Route "/")
 * Matches Showcase Panel 1: Hero introduction, Bitcount/Pixel font for Name,
 * modern neon geometric frame underneath the user's transparent PNG photo,
 * and handwritten "Build. Learn. Grow." accent.
 */
export default function AboutPage() {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-8 py-10 lg:py-16 animate-fade-up">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        {/* LEFT COLUMN: Intro Text, CTA Buttons & Quick Info Badges */}
        <div className="lg:col-span-7 space-y-6">
          <p className="text-sm sm:text-base uppercase tracking-[0.25em] text-emerald-600 dark:text-neon-primary font-semibold">
            HELLO, I&apos;M
          </p>

          {/* Name in Bitcount / Pixel Display Font Only */}
          <h1 className="font-bitcount text-3xl sm:text-5xl xl:text-6xl text-emerald-600 dark:text-neon-primary drop-shadow-[0_0_12px_rgba(57,255,20,0.35)] leading-tight">
            {PERSONAL_INFO.name}
          </h1>

          {/* Subtitle */}
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-800 dark:text-white tracking-wide">
            {PERSONAL_INFO.title}
          </h2>

          {/* Description Paragraph */}
          <p className="text-slate-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl font-light">
            {PERSONAL_INFO.bio}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a href={PERSONAL_INFO.cvUrl} download className="neon-btn">
              <span>Download CV</span>
              <Download className="w-4 h-4" />
            </a>

            <Link
              href="/contact"
              className="neon-outline-btn bg-white/70 dark:bg-[#1A1F1E]/80 px-6 py-2.5"
            >
              <Mail className="w-4 h-4" />
              <span>Contact Me</span>
            </Link>
          </div>

          {/* 3 Quick Highlight Badges (Location, Education, Status) */}
          <div className="pt-6 border-t border-emerald-500/20 dark:border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-xl">
            {/* Location */}
           {/* <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-emerald-500/10 dark:bg-neon-primary/10 border border-emerald-500/30 dark:border-neon-primary/30 text-emerald-600 dark:text-neon-primary">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-800 dark:text-white">
                  Chattogram,
                </p>
                <p className="text-xs text-slate-500 dark:text-gray-400">
                  Bangladesh
                </p>
              </div>
            </div> */} 

            {/* Education */}
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-emerald-500/10 dark:bg-neon-primary/10 border border-emerald-500/30 dark:border-neon-primary/30 text-emerald-600 dark:text-neon-primary">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-800 dark:text-white">
                  {PERSONAL_INFO.educationBadge}
                </p>
                <p className="text-xs text-slate-500 dark:text-gray-400">
                  {PERSONAL_INFO.institutionShort}
                </p>
              </div>
            </div>

            {/* Opportunity Status */}
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-emerald-500/10 dark:bg-neon-primary/10 border border-emerald-500/30 dark:border-neon-primary/30 text-emerald-600 dark:text-neon-primary">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-800 dark:text-white">
                  Open to
                </p>
                <p className="text-xs text-slate-500 dark:text-gray-400">
                  Opportunities
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Modern Cyber Frame Design UNDER Transparent PNG Profile Photo */}
        <div className="lg:col-span-5 relative flex items-center justify-center">
          <div className="relative w-72 h-80 sm:w-80 sm:h-96 flex items-end justify-center">
            {/* LAYER 1 (UNDER PNG): Ambient Neon Radial Aura */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-neon-secondary/30 via-neon-primary/20 to-transparent blur-2xl -z-20 animate-pulse" />

            {/* LAYER 2 (UNDER PNG): Tilted Geometric Cyber Frame */}
            <div className="absolute inset-3 rounded-2xl border border-emerald-500/30 dark:border-neon-primary/30 rotate-3 transition-transform duration-500 hover:rotate-6 -z-10" />

            {/* LAYER 3 (UNDER PNG): Main Angled Neon Card Backdrop with Diagonal Tech Lines */}
            <div className="
              absolute inset-x-4 bottom-0 top-6 rounded-2xl 
              bg-gradient-to-b from-emerald-950/60 via-[#121A16] to-[#0B0D0C] 
              border-2 border-neon-secondary dark:border-neon-primary 
              shadow-neon overflow-hidden -z-10
            ">
              {/* Decorative Diagonal Cyber Lines inside the frame */}
              <div className="absolute -top-10 -left-10 w-40 h-40 border border-neon-primary/20 rotate-45" />
              <div className="absolute bottom-6 right-6 w-24 h-24 rounded-full border border-neon-primary/20" />
              <div className="
                absolute inset-0 
                bg-[radial-gradient(circle_at_50%_30%,rgba(57,255,20,0.22),transparent_70%)]
              " />
            </div>

            {/* Corner Neon Brackets */}
            <div className="absolute top-3 left-1 w-6 h-6 border-t-2 border-l-2 border-neon-primary rounded-tl-md" />
            <div className="absolute bottom-2 right-1 w-6 h-6 border-b-2 border-r-2 border-neon-primary rounded-br-md" />

            {/* LAYER 4 (TOP): User's Transparent PNG Photo */}
            {!imgError ? (
              <img
                src="/images/profile.png"
                alt={PERSONAL_INFO.name}
                onError={() => setImgError(true)}
                className="relative z-10 w-64 sm:w-72 h-auto max-h-96 object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.7)] transition-transform duration-500 hover:scale-[1.03]"
              />
            ) : (
              /* Fallback Styled Placeholder until you drop /public/images/profile.png */
              <div className="relative z-10 flex flex-col items-center justify-center w-64 h-80 text-center p-6">
                <div className="w-24 h-24 rounded-full bg-neon-primary/15 border border-neon-primary flex items-center justify-center mb-3 shadow-neon">
                  <User className="w-12 h-12 text-neon-primary" />
                </div>
                <p className="text-sm font-semibold text-white">
                  Transparent PNG Slot
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  Place your photo at:{" "}
                  <code className="text-neon-primary">/public/images/profile.png</code>
                </p>
              </div>
            )}

            {/* Handwritten "Build. Learn. Grow." Accent on Right Edge */}
            <div className="
              absolute -right-4 sm:-right-10 top-12 z-20 
              font-handwritten text-2xl sm:text-3xl leading-tight 
              text-emerald-600 dark:text-neon-primary 
              drop-shadow-[0_0_8px_rgba(57,255,20,0.5)] animate-float-slow
            ">
              <p>Build.</p>
              <p>Learn.</p>
              <p>Grow.</p>
              <span className="block text-lg">⟶</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Mouse Scroll / Page Indicator Icon from Showcase */}
      <div className="mt-12 flex justify-center">
        <Link
          href="/skills"
          title="Explore Skills"
          className="p-2 rounded-full border border-emerald-500/40 dark:border-neon-primary/40 text-emerald-600 dark:text-neon-primary animate-bounce hover:shadow-neon"
        >
          <Mouse className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
}