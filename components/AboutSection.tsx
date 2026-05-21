import React from "react"
import { portfolioProfile, portfolioSkills } from "@/data/portfolio"
import CvLinks from "./CvLinks"

const skills = [
  ...portfolioSkills.frontend.map((name) => ({ name, category: "frontend" as const })),
  ...portfolioSkills.backend.map((name) => ({ name, category: "backend" as const })),
  ...portfolioSkills.database.map((name) => ({ name, category: "database" as const })),
  ...portfolioSkills.ai.map((name) => ({ name, category: "ai" as const })),
  ...portfolioSkills.tools.map((name) => ({ name, category: "tools" as const })),
]

const AboutSection = () => {
  return (
    <section id="about" className="bg-slate-100 py-20 text-slate-950 dark:bg-slate-950 dark:text-slate-100">
      <div className="site-container">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-300">
            About
          </p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            {portfolioProfile.aboutTitle}
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-400 sm:text-lg">
            {portfolioProfile.aboutSummary}
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2 lg:items-start">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-2xl shadow-slate-200/40 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/80 dark:shadow-slate-950/30">
            <h3 className="text-2xl font-semibold text-slate-950 dark:text-white">What I do</h3>
            <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
              {portfolioProfile.whatIDo}
            </p>

            <ul className="mt-6 space-y-3">
              {portfolioProfile.whatIDoPoints.map((point) => (
                <li
                  key={point}
                  className="flex gap-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 border-t border-slate-200 pt-8 dark:border-slate-800">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                Resume
              </p>
              <CvLinks size="sm" />
            </div>
          </div>

          <div className="rounded-[2.5rem] border border-slate-200 bg-white p-8 shadow-2xl shadow-slate-200/40 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/80 dark:shadow-slate-950/30">
            <h3 className="text-2xl font-semibold text-slate-950 dark:text-white">
              Skills & technologies
            </h3>
            <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
              Next.js, React, Node.js, PostgreSQL, MongoDB, and AI tooling for production SaaS.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                { title: "Frontend", items: skills.filter((s) => s.category === "frontend") },
                { title: "Backend", items: skills.filter((s) => s.category === "backend") },
                { title: "Database", items: skills.filter((s) => s.category === "database") },
                { title: "AI & ML", items: skills.filter((s) => s.category === "ai") },
                { title: "Tools", items: skills.filter((s) => s.category === "tools") },
              ].map((group) => (
                <div
                  key={group.title}
                  className="rounded-3xl bg-slate-100 p-5 dark:bg-slate-950/75"
                >
                  <h4 className="text-lg font-semibold text-slate-950 dark:text-white">
                    {group.title}
                  </h4>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <span
                        key={skill.name}
                        className="rounded-full border border-slate-300 bg-white px-3 py-2 text-sm text-slate-700 dark:border-slate-700 dark:bg-slate-900/90 dark:text-slate-300"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
