"use client"

import { LuxuryReveal } from "./luxury-reveal"
import { useLanguage } from "@/contexts/language-context"

export function ExperienceSection() {
  const { t } = useLanguage()
  
  return (
    <section className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <LuxuryReveal direction="left" delay={300} className="relative order-2 md:order-1">
            <div className="relative overflow-hidden rounded-sm group">
              <img
                src="/images/aina-food.png"
                alt="AINA 지중해식 브런치"
                className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </LuxuryReveal>

          <div className="space-y-8 order-1 md:order-2">
            <LuxuryReveal direction="up" delay={200}>
              <div>
                <h2 className="text-4xl md:text-5xl font-light mb-6 text-stone-800">{t('experience.title')}</h2>
                <div className="w-12 h-px bg-stone-300 mb-8"></div>
              </div>
            </LuxuryReveal>

            <div className="space-y-6 text-stone-600 leading-relaxed">
              <LuxuryReveal direction="up" delay={400}>
                <p className="text-lg">{t('experience.description')}</p>
              </LuxuryReveal>

              <LuxuryReveal direction="up" delay={600}>
                <p>{t('experience.brunch.description')}</p>
              </LuxuryReveal>

              <LuxuryReveal direction="up" delay={800}>
                <p>{t('experience.bakery.description')}</p>
              </LuxuryReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
