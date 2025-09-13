"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

interface LuxuryRevealProps {
  children: React.ReactNode
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "fade"
  className?: string
}

export function LuxuryReveal({ children, delay = 0, direction = "up", className = "" }: LuxuryRevealProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [delay])

  const getTransform = () => {
    if (isVisible) return "translate-x-0 translate-y-0"

    switch (direction) {
      case "up":
        return "translate-y-8"
      case "down":
        return "-translate-y-8"
      case "left":
        return "translate-x-8"
      case "right":
        return "-translate-x-8"
      default:
        return "translate-y-8"
    }
  }

  const getOpacity = () => (isVisible ? "opacity-100" : "opacity-0")

  return (
    <div ref={ref} className={`transition-all duration-1200 ease-out ${getTransform()} ${getOpacity()} ${className}`}>
      {children}
    </div>
  )
}
