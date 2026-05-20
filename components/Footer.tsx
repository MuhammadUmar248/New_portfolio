import React from "react"
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
} from "react-icons/ai"

const Footer = () => {
  return (
    <footer className="bg-slate-100 dark:bg-slate-950">
    <div className="mx-auto max-w-7xl px-6">
      <hr className="w-full h-0.5 mx-auto mt-8 bg-neutral-200 dark:bg-slate-800 border-0" />
      <div className="mx-auto p-4 flex flex-col text-center text-neutral-900 md:flex-row md:justify-between md:text-left">
        <div className="mb-4 md:mb-0">
          <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-300">© {new Date().getFullYear()} Umar Shafeeq. All rights reserved.</p>
        </div>
        <div className="flex items-center justify-center gap-4 text-neutral-500 dark:text-neutral-100">
          <a href="https://github.com/MuhammadUmar248" rel="noreferrer" target="_blank">
            <AiOutlineGithub
              className="hover:-translate-y-1 transition-transform cursor-pointer"
              size={28}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/umer-shafeeq-42b892316/"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineLinkedin
              className="hover:-translate-y-1 transition-transform cursor-pointer"
              size={28}
            />
          </a>
        </div>
      </div>
    </div>
    </footer>
  )
}

export default Footer
