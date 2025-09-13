import { LuxuryReveal } from "./luxury-reveal"

export function StorySection() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <LuxuryReveal direction="up" delay={200}>
              <div>
                <h2 className="text-4xl md:text-5xl font-light mb-6 text-stone-800">Our Story</h2>
                <div className="w-12 h-px bg-stone-300 mb-8"></div>
              </div>
            </LuxuryReveal>

            <div className="space-y-6 text-stone-600 leading-relaxed">
              <LuxuryReveal direction="up" delay={400}>
                <p className="text-lg">
                  강화도의 아름다운 해안선을 따라 자리한 AINA는 지중해의 여유로운 분위기와 한국의 정서를 조화롭게 담아낸
                  특별한 공간입니다.
                </p>
              </LuxuryReveal>

              <LuxuryReveal direction="up" delay={600}>
                <p>
                  400평의 넓은 공간에서 탁 트인 바다 전망을 감상하며, 신선한 재료로 정성스럽게 준비한 지중해식 브런치와
                  수제 베이커리를 즐기실 수 있습니다.
                </p>
              </LuxuryReveal>

              <LuxuryReveal direction="up" delay={800}>
                <p>자연과 건축이 만나는 이곳에서 일상의 소중한 순간들을 만들어보세요.</p>
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
