import { AnimatedLogo } from "./animated-logo"

export function HeroSection() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-stone-50 via-stone-100 to-stone-200">
        {/* Subtle texture overlay */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(0,0,0,0.02) 0%, transparent 50%), 
                           radial-gradient(circle at 75% 75%, rgba(0,0,0,0.02) 0%, transparent 50%)`,
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
        <AnimatedLogo />
      </div>
    </section>
  )
}
