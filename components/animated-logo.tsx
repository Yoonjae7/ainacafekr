"use client"

import { useEffect, useState } from "react"

export function AnimatedLogo() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="flex flex-col items-center space-y-8">
      {/* Animated Logo */}
      <div className="relative">
        {/* Top leaf - slides down and rotates */}
        <div
          className={`absolute -top-16 left-1/2 transform -translate-x-1/2 transition-all duration-1500 ease-out ${
            isVisible ? "translate-y-0 rotate-0 opacity-100" : "-translate-y-8 rotate-12 opacity-0"
          }`}
          style={{ transitionDelay: "0.3s" }}
        >
          <div className="w-8 h-12 bg-stone-800 rounded-full transform rotate-12"></div>
        </div>

        {/* Side leaves - slide in from sides */}
        <div
          className={`absolute -top-12 -left-6 transition-all duration-1200 ease-out ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
          }`}
          style={{ transitionDelay: "0.5s" }}
        >
          <div className="w-6 h-10 bg-stone-800 rounded-full transform -rotate-45"></div>
        </div>

        <div
          className={`absolute -top-12 -right-6 transition-all duration-1200 ease-out ${
            isVisible ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
          }`}
          style={{ transitionDelay: "0.5s" }}
        >
          <div className="w-6 h-10 bg-stone-800 rounded-full transform rotate-45"></div>
        </div>

        {/* Main AINA text - letters appear with stagger */}
        <div className="flex space-x-4 text-6xl md:text-8xl font-light tracking-wider text-stone-900">
          {["A", "I", "N", "A"].map((letter, index) => (
            <span
              key={letter}
              className={`inline-block transition-all duration-1000 ease-out ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${0.7 + index * 0.1}s` }}
            >
              {letter}
            </span>
          ))}
        </div>

        {/* Subtitle - fades in */}
        <div
          className={`text-center mt-4 transition-all duration-1000 ease-out ${isVisible ? "opacity-90" : "opacity-0"}`}
          style={{ transitionDelay: "1.2s" }}
        >
          <p className="text-lg md:text-xl font-light tracking-wide text-stone-800">A BRUNCH CAFE</p>
          <p className="text-base font-light tracking-wide text-stone-700 mt-1">아이나 브런치 카페</p>
        </div>

        <div
          className={`flex justify-center mt-8 transition-all duration-1200 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
          style={{ transitionDelay: "1.4s" }}
        >
          <div className="relative">
            {/* Coffee cup body */}
            <div className="w-10 h-8 bg-stone-800 rounded-b-2xl relative">
              {/* Coffee surface */}
              <div className="absolute top-0 left-1 right-1 h-1 bg-stone-600 rounded-full"></div>
              {/* Cup handle */}
              <div className="absolute -right-3 top-2 w-4 h-4 border-2 border-stone-800 rounded-full border-l-0"></div>
            </div>
            {/* Saucer */}
            <div className="absolute -bottom-1 -left-1 w-12 h-2 bg-stone-800 rounded-full opacity-60"></div>
            {/* Steam lines */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 space-y-1">
              <div className="w-px h-2 bg-stone-600 opacity-40 animate-pulse" style={{ animationDelay: "0s" }}></div>
              <div
                className="w-px h-2 bg-stone-600 opacity-40 animate-pulse ml-1"
                style={{ animationDelay: "0.5s" }}
              ></div>
              <div
                className="w-px h-2 bg-stone-600 opacity-40 animate-pulse -ml-1"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Extending lines animation */}
      <div className="relative w-full max-w-md">
        <div
          className={`h-px bg-gradient-to-r from-transparent via-stone-400 to-transparent transition-all duration-2000 ease-out ${
            isVisible ? "w-full opacity-100" : "w-0 opacity-0"
          }`}
          style={{ transitionDelay: "1.6s" }}
        ></div>

        {/* Center dot */}
        <div
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-stone-600 rounded-full transition-all duration-800 ease-out ${
            isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"
          }`}
          style={{ transitionDelay: "2.2s" }}
        ></div>
      </div>

      {/* Final tagline */}
      <div
        className={`text-center transition-all duration-1000 ease-out ${
          isVisible ? "translate-y-0 opacity-80" : "translate-y-4 opacity-0"
        }`}
        style={{ transitionDelay: "2.4s" }}
      >
        <p className="text-base md:text-lg font-light leading-relaxed text-stone-800 max-w-md mx-auto">
          강화도 바다가 내려다보이는
          <br />
          400평 규모의 특별한 공간
        </p>
      </div>
    </div>
  )
}
