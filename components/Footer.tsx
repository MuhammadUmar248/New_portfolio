import React from "react"
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineMail } from "react-icons/ai"
import { portfolioProfile } from "@/data/portfolio"
import CvLinks from "./CvLinks"

const Footer = () => {
  return (
    <footer className="relative z-30 bg-slate-100 dark:bg-slate-950">
      <div className="site-container">
        <hr className="mx-auto mt-8 h-0.5 w-full border-0 bg-neutral-200 dark:bg-slate-800" />
        <div className="mx-auto flex flex-col gap-8 p-6 md:flex-row md:items-start md:justify-between md:text-left">
          <div className="text-center md:text-left">
            <p className="text-sm text-neutral-600 dark:text-neutral-300">
              © {new Date().getFullYear()} {portfolioProfile.fullName}. All rights reserved.
            </p>
            <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
              Built with Next.js & Tailwind CSS
            </p>

            <div className="mt-5 flex items-center justify-center gap-5 md:justify-start">
              <a
                href={portfolioProfile.github}
                rel="noreferrer"
                target="_blank"
                aria-label="GitHub profile"
                className="rounded-full p-2 text-neutral-600 transition hover:-translate-y-0.5 hover:bg-slate-200 hover:text-cyan-600 dark:text-neutral-200 dark:hover:bg-slate-800 dark:hover:text-cyan-400"
              >
                <AiOutlineGithub size={28} />
              </a>
            </div>
          </div>

 
        </div>
      </div>
    </footer>
  )
}

export default Footer
