"use client"
import Image from "next/image"
import { Link as ScrollLink } from "react-scroll"

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-white dark:bg-slate-950 text-slate-950 dark:text-slate-100"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.08),_transparent_30%),radial-gradient(circle_at_20%_20%,_rgba(59,130,246,0.08),_transparent_25%),linear-gradient(180deg,_rgba(248,250,252,0.95),_rgba(241,245,249,0.9))] dark:bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_30%),radial-gradient(circle_at_20%_20%,_rgba(59,130,246,0.18),_transparent_25%),linear-gradient(180deg,_rgba(15,23,42,0.95),_rgba(15,23,42,0.9))]" />
      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col-reverse items-start justify-start gap-y-12 px-6 py-24 md:flex-row md:gap-x-36 md:px-12 mt-10">
        <div className="w-full max-w-xl text-center md:text-left ">
          <span className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-700 dark:text-cyan-200 shadow-sm shadow-cyan-500/20">
            AI-Powered SaaS · Next.js & OpenAI 
          </span>

          <h1 className="mt-8 text-5xl font-black tracking-tight text-slate-950 dark:text-white sm:text-6xl lg:text-7xl">
            Turning AI Concepts into Scalable SaaS Reality.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300 sm:text-xl">
            I&apos;m Umar, a Full-Stack AI Engineer specializing in building production-ready SaaS platforms. I combine modern web architecture with cutting-edge AI to create solutions that scale.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <ScrollLink
              to="projects"
              smooth={true}
              duration={700}
              offset={-80}
              className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-8 py-3 text-base font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:-translate-y-0.5 hover:bg-cyan-400"
            >
              See projects
            </ScrollLink>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 p-6 shadow-2xl shadow-slate-200/40 dark:shadow-cyan-500/10 backdrop-blur-xl">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-600 dark:text-cyan-300">Projects</p>
              <p className="mt-4 text-3xl font-bold text-slate-950 dark:text-white">4+</p>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Live apps and premium deployments</p>
            </div>
            <div className="rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 p-6 shadow-2xl shadow-slate-900/10 dark:shadow-slate-900/10 backdrop-blur-xl">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-600 dark:text-cyan-300">Focus</p>
              <p className="mt-4 text-3xl font-bold text-slate-950 dark:text-white">Frontend-first</p>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Fast UX, accessible interfaces, and polished interactions</p>
            </div>
          </div>
        </div>

        <div className="w-full max-w-md rounded-[3rem] border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900/80 p-4 shadow-2xl shadow-slate-200/40 dark:shadow-slate-950/40 backdrop-blur-xl md:p-6">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-950/80 p-6">
            <div className="absolute -right-12 top-0 h-52 w-52 rounded-full bg-cyan-500/10 dark:bg-cyan-500/20 blur-3xl" />
            <div className="absolute -left-12 bottom-0 h-40 w-40 rounded-full bg-sky-500/5 dark:bg-sky-500/10 blur-3xl" />
            <div className="relative flex h-[360px] items-center justify-center">
              <div className="relative h-80 w-80 overflow-hidden rounded-full border-4 border-slate-200 dark:border-cyan-400/20 bg-slate-100 dark:bg-slate-800 shadow-xl shadow-slate-300/20 dark:shadow-cyan-500/20">
                <Image
                  src="/github_profile_under_1mb.jpg"
                  alt="Profile photo of Umar"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <div className="mt-8 space-y-3 text-center text-slate-600 dark:text-slate-300">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-cyan-300">Professional Profile</p>
              <h2 className="text-2xl font-bold text-slate-950 dark:text-white">Umar Shafeeq</h2>
              <p className="mx-auto max-w-xs text-sm leading-6 text-slate-500 dark:text-slate-400">
                Crafting responsive web applications, polished landing pages, and intuitive digital experiences for modern brands.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
