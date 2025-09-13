"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { LanguageToggle } from "./language-toggle"
import { useLanguage } from "@/contexts/language-context"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { t } = useLanguage()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false) // Close mobile menu after clicking
  }

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
            <img 
              src="/transparent-logo.png" 
              alt="AINA Cafe Logo" 
              className="h-12 w-auto transition-all duration-300 hover:scale-105 cursor-pointer"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            <button onClick={() => scrollToSection('home')} className="relative text-stone-600 hover:text-stone-800 transition-colors font-light group">
              {t('nav.home')}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-stone-800 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection('story')}
              className="relative text-stone-600 hover:text-stone-800 transition-colors font-light group"
            >
              {t('nav.story')}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-stone-800 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection('space')}
              className="relative text-stone-600 hover:text-stone-800 transition-colors font-light group"
            >
              {t('nav.space')}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-stone-800 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection('location')}
              className="relative text-stone-600 hover:text-stone-800 transition-colors font-light group"
            >
              {t('nav.visit')}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-stone-800 transition-all duration-300 group-hover:w-full"></span>
            </button>
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
              <button onClick={() => scrollToSection('home')} className="text-stone-600 hover:text-stone-800 transition-colors font-light text-left">
                {t('nav.home')}
              </button>
              <button onClick={() => scrollToSection('story')} className="text-stone-600 hover:text-stone-800 transition-colors font-light text-left">
                {t('nav.story')}
              </button>
              <button onClick={() => scrollToSection('space')} className="text-stone-600 hover:text-stone-800 transition-colors font-light text-left">
                {t('nav.space')}
              </button>
              <button onClick={() => scrollToSection('location')} className="text-stone-600 hover:text-stone-800 transition-colors font-light text-left">
                {t('nav.visit')}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
