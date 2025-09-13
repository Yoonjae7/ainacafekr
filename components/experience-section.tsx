import { LuxuryReveal } from "./luxury-reveal"

export function ExperienceSection() {
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
                <h2 className="text-4xl md:text-5xl font-light mb-6 text-stone-800">Mediterranean</h2>
                <div className="w-12 h-px bg-stone-300 mb-8"></div>
              </div>
            </LuxuryReveal>

            <div className="space-y-6 text-stone-600 leading-relaxed">
              <LuxuryReveal direction="up" delay={400}>
                <p className="text-lg">신선한 재료로 정성스럽게 준비한 지중해식 브런치를 선보입니다.</p>
              </LuxuryReveal>

              <LuxuryReveal direction="up" delay={600}>
                <p>엄선된 식재료와 정통 레시피로 만든 아르티잔 브레드, 신선한 샐러드, 그리고 시그니처 음료까지.</p>
              </LuxuryReveal>

              <LuxuryReveal direction="up" delay={800}>
                <p>바다를 바라보며 즐기는 브런치는 일상에서 벗어난 특별한 경험이 될 것입니다.</p>
              </LuxuryReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
