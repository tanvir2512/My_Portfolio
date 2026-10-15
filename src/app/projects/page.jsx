"use client";

import React, { useState } from "react";
import { PROJECTS_DATA } from "@/data/portfolioData";
import { ArrowRight, FolderGit2 } from "lucide-react";

/**
 * 4. PROJECTS PAGE ("/projects")
 * Matches Showcase Panel 4: 6 Featured Project cards with thumbnail preview,
 * neon tech stack subtitle, short description, and "View Project ->" button.
 */
export default function ProjectsPage() {
  const [imgErrors, setImgErrors] = useState({});

  const handleImgError = (id) => {
    setImgErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-8 py-10 animate-fade-up">
      {/* Section Header */}
      <div className="mb-10">
        <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-emerald-600 dark:text-neon-primary font-semibold">
          MY PROJECTS
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-1">
          Featured Projects
        </h1>
        <p className="text-slate-600 dark:text-gray-300 mt-2 max-w-xl font-light">
          A collection of some of the projects I&apos;ve worked on, showcasing my
          skills and problem-solving approach.
        </p>
      </div>

      {/* 3x2 Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS_DATA.map((project) => (
          <div
            key={project.id}
            className="neon-card overflow-hidden flex flex-col justify-between group"
          >
            <div>
              {/* Project Image / Styled Placeholder */}
              <div className="relative h-44 w-full overflow-hidden bg-[#111916] border-b border-emerald-500/20 dark:border-neon-primary/20">
                {!imgErrors[project.id] ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    onError={() => handleImgError(project.id)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center bg-gradient-to-br from-emerald-950/70 via-[#121c17] to-[#0B0D0C]">
                    <FolderGit2 className="w-10 h-10 text-neon-primary mb-2 opacity-80" />
                    <span className="text-xs text-gray-300 font-medium">
                      {project.title}
                    </span>
                    <code className="text-[10px] text-neon-primary/80 mt-1">
                      /public{project.image}
                    </code>
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-5">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-neon-primary transition-colors">
                  {project.title}
                </h2>
                <p className="text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-neon-primary mt-1">
                  {project.techStack}
                </p>
                <p className="text-sm text-slate-600 dark:text-gray-300 mt-3 font-light leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>

            {/* Card Footer Button */}
            <div className="px-5 pb-5 pt-2">
              <a
                href={project.link}
                className="neon-outline-btn text-xs uppercase tracking-wider w-fit"
              >
                <span>View Project</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}