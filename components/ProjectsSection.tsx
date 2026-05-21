import React from "react"
import Image from "next/image"
import SlideUp from "./SlideUp"
import { BsArrowUpRightSquare, BsGithub } from "react-icons/bs"
import { portfolioProjects } from "@/data/portfolio"

const projectImages = [
  "/Screenshot 2026-05-20 at 04.37.26.png",
  "/Screenshot 2026-05-20 at 04.40.56.png",
  "/Screenshot 2026-05-20 at 04.43.52.png",
  "/Screenshot 2026-05-20 at 04.51.52.png",
]

const projects = portfolioProjects.map((project, index) => ({
  ...project,
  image: projectImages[index],
}))

const ProjectsSection = () => {
  const sorted = [...projects].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))

  return (
    <section id="projects" className="bg-slate-100 py-20 text-slate-950 dark:bg-slate-950 dark:text-slate-100">
      <div className="site-container">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-300">
            Projects
          </p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
            Recent work built for real users
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-400 sm:text-lg">
            Production apps with live demos, measurable impact, and modern full-stack architecture.
          </p>
        </div>

        <div className="mt-16 grid gap-10">
          {sorted.map((project, idx) => (
            <SlideUp key={project.name} offset="-150px 0px -150px 0px">
              <div
                className={`grid gap-8 rounded-[2rem] border bg-white p-6 shadow-2xl shadow-slate-200/40 transition-transform duration-300 hover:-translate-y-1 dark:bg-slate-900 dark:shadow-black/20 ${
                  project.featured
                    ? "border-cyan-500/40 ring-1 ring-cyan-500/20 dark:border-cyan-500/30"
                    : "border-slate-200 dark:border-slate-800"
                }`}
              >
                {project.featured && (
                  <span className="inline-flex w-fit rounded-full bg-cyan-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-700 dark:text-cyan-300">
                    Flagship project
                  </span>
                )}
                <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr] lg:items-center">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block overflow-hidden rounded-[1.5rem] bg-slate-50 transition hover:opacity-90 dark:bg-slate-950/5"
                  >
                    <Image
                      src={project.image}
                      alt={project.name}
                      width={1200}
                      height={700}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </a>

                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-500">
                        {project.role}
                      </p>
                      <h3 className="mt-3 text-3xl font-bold text-slate-950 dark:text-white">
                        {project.name}
                      </h3>
                    </div>

                    <p className="text-base leading-7 text-slate-600 dark:text-slate-400">
                      {project.description}
                    </p>

                    <p className="text-sm font-medium text-cyan-800 dark:text-cyan-300">
                      Impact: {project.impact}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-slate-300 bg-slate-100 px-3 py-1 text-sm text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-4 pt-2">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
                      >
                        <BsArrowUpRightSquare size={18} />
                        Live demo
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
                      >
                        <BsGithub size={18} />
                        View code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SlideUp>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
