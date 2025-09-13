import { LuxuryReveal } from "./luxury-reveal"

export function SpaceSection() {
  return (
    <section className="py-32 bg-stone-50">
      <div className="max-w-6xl mx-auto px-6">
        <LuxuryReveal direction="up" delay={100}>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light mb-6 text-stone-800">The Space</h2>
            <div className="w-12 h-px bg-stone-300 mx-auto mb-8"></div>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
              현대적인 건축미와 자연이 어우러진 400평 규모의 공간에서 특별한 경험을 선사합니다.
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
              <img src="/images/aina-interior.png" alt="AINA 카페 내부 전경" className="w-full h-full object-cover" />
            </div>
          </LuxuryReveal>

          <div className="grid md:grid-cols-2 gap-8 mt-16">
            <LuxuryReveal direction="left" delay={500}>
              <div className="space-y-6">
                <h3 className="text-2xl font-light text-stone-800">Ocean View</h3>
                <p className="text-stone-600 leading-relaxed">
                  전면 유리창을 통해 펼쳐지는 강화도 바다의 파노라마 뷰를 감상하며 여유로운 시간을 보내세요. 계절마다
                  변화하는 바다의 모습이 특별한 추억을 만들어드립니다.
                </p>
              </div>
            </LuxuryReveal>

            <LuxuryReveal direction="right" delay={700}>
              <div className="space-y-6">
                <h3 className="text-2xl font-light text-stone-800">Modern Architecture</h3>
                <p className="text-stone-600 leading-relaxed">
                  깔끔한 콘크리트와 유리로 구성된 현대적 건축물은 미니멀한 아름다움을 추구합니다. 자연광이 가득한 내부
                  공간에서 편안하고 세련된 분위기를 느껴보세요.
                </p>
              </div>
            </LuxuryReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
