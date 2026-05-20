"use client"

import React, { useEffect, useRef, ReactNode } from "react"

interface Props {
  offset?: string
  children?: ReactNode
}

export default function SlideUp({ children, offset = "0px" }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const currentRef = ref.current
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0")
            entry.target.classList.add("animate-slideUpCubiBezier")
          }
        })
      },
      { rootMargin: offset }
    )

    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [offset]) // Added offset to dependencies

  return (
    <div ref={ref} className="relative opacity-0">
      {children}
    </div>
  )
}