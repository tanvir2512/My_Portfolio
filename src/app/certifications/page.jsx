import React from "react";
import { CERTIFICATIONS_DATA } from "@/data/portfolioData";
import { ArrowRight } from "lucide-react";

/**
 * 5. CERTIFICATIONS PAGE ("/certifications")
 * Matches Showcase Panel 5: 3x2 grid of professional certifications with
 * issuer badge, title, year, and "View Certificate ->" CTA.
 */
export default function CertificationsPage() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-8 py-10 animate-fade-up">
      {/* Section Header */}
      <div className="mb-10">
        <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-emerald-600 dark:text-neon-primary font-semibold">
          MY CERTIFICATIONS
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mt-1">
          Professional Certifications
        </h1>
        <p className="text-slate-600 dark:text-gray-300 mt-2 max-w-xl font-light">
          Certifications that validate my skills and commitment to continuous
          learning.
        </p>
      </div>

      {/* 3x2 Certifications Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CERTIFICATIONS_DATA.map((cert) => (
          <div
            key={cert.id}
            className="neon-card p-6 flex flex-col justify-between"
          >
            <div>
              {/* Issuer Badge Icon */}
              <div
                className={`w-11 h-11 rounded-xl border flex items-center justify-center font-bold text-sm mb-5 ${cert.badgeColor}`}
              >
                {cert.badgeText}
              </div>

              {/* Certificate Title & Details */}
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                {cert.title}
              </h2>
              <p className="text-sm text-slate-600 dark:text-gray-300 mt-1">
                {cert.issuer}
              </p>
              <p className="text-xs text-slate-500 dark:text-gray-400 mt-1">
                {cert.year}
              </p>
            </div>

            {/* View Certificate Button */}
            <div className="mt-6">
              <a
                href={cert.link}
                target="_blank"
                rel="noreferrer"
                className="neon-outline-btn text-xs uppercase tracking-wider"
              >
                <span>View Certificate</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}