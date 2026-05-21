"use client"

import React, { useState, useEffect } from "react"
import { Link } from "react-scroll/modules"
import { useTheme } from "next-themes"
import { RiMoonFill, RiSunLine } from "react-icons/ri"
import { IoMdMenu, IoMdClose } from "react-icons/io"
import { portfolioProfile } from "@/data/portfolio"

interface NavItem {
  label: string
  page: string
}

const NAV_ITEMS: Array<NavItem> = [
  { label: "Home", page: "home" },
  { label: "Projects", page: "projects" },
  { label: "About", page: "about" },
  { label: "Contact", page: "contact" },
]

export default function Navbar() {
  const [mounted, setMounted] = useState(false)
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === "system" ? systemTheme : theme
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [menuOpen])

  const isDark = mounted && currentTheme === "dark"

  return (
    <header className="fixed top-0 left-0 right-0 z-[60] w-full border-b border-slate-200/80 bg-white shadow-md shadow-slate-200/50 dark:border-slate-800 dark:bg-slate-950 dark:shadow-slate-950/50">
      <div className="site-container flex h-[4.5rem] items-center justify-between md:h-20">
        <Link
          to="home"
          smooth={true}
          duration={500}
          offset={-80}
          className="cursor-pointer"
        >
          <h2 className="text-xl font-bold text-slate-950 transition-colors hover:text-cyan-600 dark:text-white dark:hover:text-cyan-400 md:text-2xl">
            {portfolioProfile.fullName}
          </h2>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.page}
              to={item.page}
              smooth={true}
              duration={500}
              offset={-80}
              spy={true}
              activeClass="nav-link-active"
              className="nav-link cursor-pointer rounded-lg px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-cyan-600 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-cyan-400"
            >
              {item.label}
            </Link>
          ))}


          <button
            type="button"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="ml-2 rounded-full bg-slate-100 p-2.5 transition hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700"
            aria-label="Toggle theme"
          >
            {mounted ? (
              isDark ? (
                <RiSunLine className="text-yellow-400" size={22} />
              ) : (
                <RiMoonFill className="text-slate-700" size={22} />
              )
            ) : (
              <span className="block h-[22px] w-[22px]" />
            )}
          </button>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <a
            href={portfolioProfile.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg px-2 py-2 text-sm font-medium text-cyan-700 dark:text-cyan-400"
          >
            CV
          </a>
          <button
            type="button"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="rounded-full bg-slate-100 p-2 dark:bg-slate-800"
            aria-label="Toggle theme"
          >
            {mounted ? (
              isDark ? (
                <RiSunLine className="text-yellow-400" size={20} />
              ) : (
                <RiMoonFill className="text-slate-700" size={20} />
              )
            ) : null}
          </button>
          <button
            type="button"
            className="rounded-lg p-2 text-slate-800 transition hover:bg-slate-100 dark:text-white dark:hover:bg-slate-800"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <IoMdClose size={28} /> : <IoMdMenu size={28} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          className="fixed inset-0 top-[4.5rem] z-[55] bg-slate-950/40 backdrop-blur-sm md:hidden"
          onClick={() => setMenuOpen(false)}
          aria-hidden
        />
      )}

      <div
        className={`fixed left-0 top-[4.5rem] z-[58] h-[calc(100vh-4.5rem)] w-72 border-r border-slate-800 bg-slate-950 shadow-2xl transition-transform duration-300 ease-in-out md:hidden ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="flex flex-col gap-1 p-4">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.page}
              to={item.page}
              smooth={true}
              duration={500}
              offset={-80}
              spy={true}
              activeClass="!text-cyan-400 !bg-slate-800"
              className="cursor-pointer rounded-lg px-4 py-3 font-medium text-slate-200 transition-colors hover:bg-slate-800 hover:text-cyan-400"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={portfolioProfile.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg px-4 py-3 font-medium text-slate-200 hover:bg-slate-800 hover:text-cyan-400"
            onClick={() => setMenuOpen(false)}
          >
            View CV
          </a>
          <a
            href={portfolioProfile.cvUrl}
            download={portfolioProfile.cvDownloadName}
            className="rounded-lg px-4 py-3 font-medium text-slate-200 hover:bg-slate-800 hover:text-cyan-400"
            onClick={() => setMenuOpen(false)}
          >
            Download CV
          </a>
        </nav>
      </div>
    </header>
  )
}
