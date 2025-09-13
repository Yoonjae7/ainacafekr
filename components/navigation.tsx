"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { LanguageToggle } from "./language-toggle"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-2xl font-light tracking-wider text-stone-800 transition-all duration-300 hover:tracking-widest cursor-pointer">
              AINA
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            <a href="#home" className="relative text-stone-600 hover:text-stone-800 transition-colors font-light group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-stone-800 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#story"
              className="relative text-stone-600 hover:text-stone-800 transition-colors font-light group"
            >
              Story
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-stone-800 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#space"
              className="relative text-stone-600 hover:text-stone-800 transition-colors font-light group"
            >
              Space
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-stone-800 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#location"
              className="relative text-stone-600 hover:text-stone-800 transition-colors font-light group"
            >
              Visit
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-stone-800 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>

          {/* Language Toggle & Mobile Menu */}
          <div className="flex items-center gap-4">
            <LanguageToggle />
            <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-6 pb-6 border-t border-stone-200 pt-6 animate-in slide-in-from-top-2 duration-300">
            <div className="flex flex-col gap-6">
              <a href="#home" className="text-stone-600 hover:text-stone-800 transition-colors font-light">
                Home
              </a>
              <a href="#story" className="text-stone-600 hover:text-stone-800 transition-colors font-light">
                Story
              </a>
              <a href="#space" className="text-stone-600 hover:text-stone-800 transition-colors font-light">
                Space
              </a>
              <a href="#location" className="text-stone-600 hover:text-stone-800 transition-colors font-light">
                Visit
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
