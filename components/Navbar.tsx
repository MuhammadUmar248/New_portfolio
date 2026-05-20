"use client"

import React, { useState, useEffect } from "react"
import { Link } from "react-scroll/modules"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { RiMoonFill, RiSunLine } from "react-icons/ri"
import { IoMdMenu, IoMdClose } from "react-icons/io"
import { MdMenuOpen } from "react-icons/md";


interface NavItem {
  label: string
  page: string
}

const NAV_ITEMS: Array<NavItem> = [
  { label: "Home", page: "home" },
  { label: "About", page: "about" },
  { label: "Projects", page: "projects" },
  { label: "Contact", page: "contact" },
]

export default function Navbar() {
  const [mounted, setMounted] = useState(false)
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === "system" ? systemTheme : theme
  const pathname = usePathname()
  const [navbar, setNavbar] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <header className="w-full mx-auto px-4 sm:px-20 fixed top-0 z-50 shadow-lg bg-white/95 dark:bg-slate-950/95 border-b border-slate-200 dark:border-slate-800 backdrop-blur-xl">
      <div className="flex justify-between items-center py-3 md:py-5">
        {/* Name/Logo on left for all screens */}
        <Link 
          to="home"
          smooth={true}
          duration={500}
          offset={-80}
          className="cursor-pointer"
        >
          <h2 className="text-2xl font-bold text-slate-950 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
            Umar shafeeq
          </h2>
        </Link>

        {/* Desktop navigation items */}
        <div className="hidden md:flex items-center space-x-4">
          {NAV_ITEMS.map((item, idx) => (
            <Link
              key={idx}
              to={item.page}
              smooth={true}
              duration={500}
              offset={-80}
              spy={true}
              activeClass="active"
              className="text-slate-700 dark:text-slate-200 hover:text-cyan-600 dark:hover:text-cyan-400 cursor-pointer transition-colors duration-300 px-3 py-1 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              {item.label}
            </Link>
          ))}


          {/* Theme toggle button */}
          <button
            onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full transition duration-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700"
          >
            {currentTheme === "dark" ? (
              <RiSunLine className="text-yellow-400" size={22} />
            ) : (
              <RiMoonFill className="text-slate-700" size={22} />
            )}
          </button>
        </div>

        {/* Mobile menu button on the right - shows hamburger when closed */}
        <div className="md:hidden">
          <button
            className="p-2 text-gray-700 dark:text-white rounded-md outline-none focus:border-gray-400 focus:border hover:bg-gray-100 dark:hover:bg-stone-800 transition-colors"
            onClick={() => setNavbar(!navbar)}
            aria-label="Toggle menu"
          >
            {navbar ? <MdMenuOpen size={30}/> : <IoMdMenu size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile sidebar that slides from left */}
      <div className={`md:hidden fixed top-0 left-0 h-full w-64 z-40 transform transition-transform duration-300 ease-in-out ${
        navbar ? "translate-x-0" : "-translate-x-full"
      } bg-slate-950 border-r border-slate-800 shadow-xl`}>
        {/* Sidebar header with close button */}
<div className="p-4 border-b border-slate-800 flex items-center justify-between">
            <h2 className="text-xl font-bold text-white">
              Umar shafeeq
            </h2>
            <button
              onClick={() => setNavbar(false)}
              className="p-1 rounded-md hover:bg-slate-800"
              aria-label="Close menu"
            >
              <IoMdClose size={24} className="text-slate-200" />
          </button>
        </div>
        
        {/* Navigation items */}
        <div className="flex flex-col p-4 space-y-2">
          {NAV_ITEMS.map((item, idx) => (
            <Link
              key={idx}
              to={item.page}
              smooth={true}
              duration={500}
              offset={-80}
              spy={true}
              activeClass="active"
              className="px-4 py-3 rounded-md text-slate-200 hover:text-cyan-400 cursor-pointer transition-colors duration-300 hover:bg-slate-800 font-medium"
              onClick={() => setNavbar(false)}
            >
              {item.label}
            </Link>
          ))}

          {/* Theme toggle button in mobile sidebar */}
          <button
            onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
            className="flex items-center px-4 py-3 rounded-md text-neutral-900 dark:text-neutral-100 cursor-pointer transition-colors duration-300 hover:bg-gray-100 dark:hover:bg-stone-800 mt-4"
          >
            {currentTheme === "dark" ? (
              <>
                <RiSunLine className="mr-3" size={20} />
                Light Mode
              </>
            ) : (
              <>
                <RiMoonFill className="mr-3" size={20} />
                Dark Mode
              </>
            )}
          </button>
        </div>
      </div>

      {/* Overlay when sidebar is open */}
      {navbar && (
        <div 
          className="fixed inset-0 z-30 bg-black bg-opacity-50 md:hidden"
          onClick={() => setNavbar(false)}
        />
      )}
    </header>
  )
}