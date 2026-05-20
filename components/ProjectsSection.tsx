import React from "react"
import Image from "next/image"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "AutoMind AI",
    description:
      "An AI-powered automation platform for businesses and content creators to streamline workflows and reduce manual effort. Built with Next.js, OpenAI API, and MongoDB for scalable real-time performance. Handles 100+ users simultaneously with fast AI response times and automated task execution.",
    image: "/Screenshot 2026-05-20 at 04.37.26.png",
    link: "https://company-website-inky-psi.vercel.app/",
    tags: ["Artificial Intelligence", "Python", "OpenAI API", "SaaS Development", "Automation"]
  },
  {
    name: "AI-Powered Recruitment Platform",
    description:
      "An intelligent hiring platform that automates candidate screening, manages job pipelines, and improves hiring efficiency. Built with Next.js, React, TypeScript, GraphQL, and modern full-stack architecture. A high-performance SaaS application supporting real-time candidate management, AI-assisted screening, and seamless recruitment workflows.",
    image: "/Screenshot 2026-05-20 at 04.40.56.png",
    link: "https://vettor-bw3z.vercel.app/",
    tags: ["Next.js", "React", "TypeScript", "GraphQL", "Node.js"]
  },
  {
    name: "Automatic GPS Location Tracker",
    description:
      "A smart GPS tracking solution for companies to automate attendance tracking and monitor field employees in real-time. Built with React Native, Node.js, Express.js, Firebase, and scalable API architecture. A real-time tracking system capable of continuous background monitoring, delivering instant location insights and reducing manual tracking efforts by 100%.",
    image: "/Screenshot 2026-05-20 at 04.43.52.png",
    link: "https://attendance-tracker-seven-peach.vercel.app/",
    tags: ["React Native", "Node.js", "ExpressJS", "RESTful API", "Firebase"]
  },
  {
    name: "Daily Drafts AI",
    description:
      "An automated AI tool for creators and marketers to generate SEO-friendly articles and scale content workflows. Built with Next.js, ChatGPT API, Firebase, and Tailwind CSS. A high-performance SaaS capable of generating professional-grade content instantly with a seamless, responsive user experience.",
    image: "/Screenshot 2026-05-20 at 04.51.52.png",
    link: "https://daily-drafits-ai-git-main-muhammad-attiques-projects.vercel.app/",
    tags: ["ChatGPT API Integration", "Next.js", "Firebase", "Tailwind CSS"]
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects" className="bg-slate-100 dark:bg-slate-950 py-20 text-slate-950 dark:text-slate-100">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Projects</p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Recent work built for real users.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            Explore production-ready web applications that showcase clean design, technical depth, and modern frontend workflows.
          </p>
        </div>

        <div className="mt-16 grid gap-10">
          {projects.map((project, idx) => (
            <SlideUp key={idx} offset="-150px 0px -150px 0px">
              <div className="grid gap-8 rounded-[2rem] border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-2xl shadow-slate-200/40 dark:shadow-black/20 transition-transform duration-300 hover:-translate-y-1">
                <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr] lg:items-center">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="group block overflow-hidden rounded-[1.5rem] bg-slate-50 dark:bg-slate-950/5 transition hover:opacity-90">
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
                      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-500">Featured Project</p>
                      <h3 className="mt-3 text-3xl font-bold text-slate-950 dark:text-white">{project.name}</h3>
                    </div>

                    <p className="text-base leading-7 text-slate-600 dark:text-slate-400">{project.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIdx) => (
                        <span key={tagIdx} className="rounded-full border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 px-3 py-1 text-sm text-slate-700 dark:text-slate-300">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-4 pt-4">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-5 py-3 text-sm font-semibold text-slate-950 dark:text-slate-200 transition hover:bg-slate-100 dark:hover:bg-slate-700"
                      >
                        <BsArrowUpRightSquare size={18} />
                        Live Demo
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