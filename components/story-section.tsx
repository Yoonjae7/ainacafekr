import { LuxuryReveal } from "./luxury-reveal"
import { useLanguage } from "@/contexts/language-context"

export function StorySection() {
  const { t } = useLanguage()
  
  return (
    <section className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <LuxuryReveal direction="up" delay={200}>
              <div>
                <h2 className="text-4xl md:text-5xl font-light mb-6 text-stone-800">{t('story.title')}</h2>
                <div className="w-12 h-px bg-stone-300 mb-8"></div>
              </div>
            </LuxuryReveal>

            <div className="space-y-6 text-stone-600 leading-relaxed">
              <LuxuryReveal direction="up" delay={400}>
                <p className="text-lg">
                  {t('story.paragraph1')}
                </p>
              </LuxuryReveal>

              <LuxuryReveal direction="up" delay={600}>
                <p>
                  {t('story.paragraph2')}
                </p>
              </LuxuryReveal>

              <LuxuryReveal direction="up" delay={800}>
                <p>{t('story.paragraph3')}</p>
              </LuxuryReveal>
            </div>
          </div>

          <LuxuryReveal direction="right" delay={300}>
            <div className="relative">
              <img
                src="/images/aina-exterior.png"
                alt="AINA 카페 외관"
                className="w-full h-96 object-cover rounded-sm"
              />
            </div>
          </LuxuryReveal>
        </div>
      </div>
    </section>
  )
}
