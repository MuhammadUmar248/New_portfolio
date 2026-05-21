"use client"
import Image from "next/image"
import { Link as ScrollLink } from "react-scroll"
import { portfolioProfile } from "@/data/portfolio"
import CvLinks from "./CvLinks"

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white text-slate-950 dark:bg-slate-950 dark:text-slate-100"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.08),_transparent_30%),radial-gradient(circle_at_20%_20%,_rgba(59,130,246,0.08),_transparent_25%),linear-gradient(180deg,_rgba(248,250,252,0.95),_rgba(241,245,249,0.9))] dark:bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_30%),radial-gradient(circle_at_20%_20%,_rgba(59,130,246,0.18),_transparent_25%),linear-gradient(180deg,_rgba(15,23,42,0.95),_rgba(15,23,42,0.9))]" />

      <div className="site-container relative py-10 md:py-14 lg:py-16">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-14">
          <div className="w-full flex-1 text-center lg:max-w-xl lg:text-left">
            <span className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-700 dark:text-cyan-200 shadow-sm shadow-cyan-500/20">
              {portfolioProfile.headline}
            </span>

            <h1 className="mt-6 text-4xl font-black tracking-tight text-slate-950 dark:text-white sm:text-5xl lg:mt-8 lg:text-6xl xl:text-7xl">
              {portfolioProfile.tagline}
            </h1>

            <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg lg:mt-6 lg:text-xl">
              {portfolioProfile.summary}
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
              <ScrollLink
                to="projects"
                smooth={true}
                duration={700}
                offset={-80}
                className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-8 py-3 text-base font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:-translate-y-0.5 hover:bg-cyan-400"
              >
                See my work
              </ScrollLink>
              <CvLinks size="md" />

            </div>
          </div>

          <div className="w-full shrink-0 lg:w-[min(100%,520px)] lg:flex-none xl:w-[560px]">
            <div className="rounded-[3rem] border border-slate-200 bg-white p-4 shadow-2xl shadow-slate-200/40 backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/80 dark:shadow-slate-950/40 md:p-6">
              <div className="relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-slate-50 p-6 dark:border-white/10 dark:bg-slate-950/80">
                <div className="absolute -right-12 top-0 h-52 w-52 rounded-full bg-cyan-500/10 blur-3xl dark:bg-cyan-500/20" />
                <div className="relative flex items-center justify-center py-4">
                  <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-slate-200 bg-slate-100 shadow-xl dark:border-cyan-400/20 dark:bg-slate-800 sm:h-72 sm:w-72 lg:h-80 lg:w-80">
                    <Image
                      src="/github_profile_under_1mb.jpg"
                      alt="Umar Shafeeq"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
                <p className="pb-2 text-center text-sm font-medium text-cyan-700 dark:text-cyan-400">
                  {portfolioProfile.availability}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-14">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl shadow-slate-200/40 backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-600 dark:text-cyan-300">
              Projects
            </p>
            <p className="mt-4 text-3xl font-bold text-slate-950 dark:text-white">
              {portfolioProfile.projectCount}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
              {portfolioProfile.projectCountNote}
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl shadow-slate-200/40 backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-600 dark:text-cyan-300">
              Core Stack
            </p>
            <p className="mt-4 text-3xl font-bold text-slate-950 dark:text-white">
              Full-Stack + AI
            </p>
            <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
              {portfolioProfile.focus}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
