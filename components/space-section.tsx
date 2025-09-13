"use client"

import { LuxuryReveal } from "./luxury-reveal"
import { useLanguage } from "@/contexts/language-context"

export function SpaceSection() {
  const { t } = useLanguage()
  
  return (
    <section id="space" className="py-32 bg-stone-50">
      <div className="max-w-6xl mx-auto px-6">
        <LuxuryReveal direction="up" delay={100}>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light mb-6 text-stone-800">{t('space.title')}</h2>
            <div className="w-12 h-px bg-stone-300 mx-auto mb-8"></div>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
              {t('space.description')}
            </p>
          </div>
        </LuxuryReveal>

        <div className="grid gap-8">
          <LuxuryReveal
            direction="fade"
            delay={300}
            className="transform hover:scale-[1.02] transition-transform duration-700"
          >
            <div className="relative h-96 md:h-[500px] overflow-hidden rounded-sm">
              <img src="/highshot1.jpg" alt="AINA 카페 내부 전경" className="w-full h-full object-cover" />
            </div>
          </LuxuryReveal>

          <div className="grid md:grid-cols-2 gap-8 mt-16">
            <LuxuryReveal direction="left" delay={500}>
              <div className="space-y-6">
                <h3 className="text-2xl font-light text-stone-800">{t('space.oceanView.title')}</h3>
                <p className="text-stone-600 leading-relaxed">
                  {t('space.oceanView.description')}
                </p>
              </div>
            </LuxuryReveal>

            <LuxuryReveal direction="right" delay={700}>
              <div className="space-y-6">
                <h3 className="text-2xl font-light text-stone-800">{t('space.architecture.title')}</h3>
                <p className="text-stone-600 leading-relaxed">
                  {t('space.architecture.description')}
                </p>
              </div>
            </LuxuryReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
