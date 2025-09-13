export function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 font-korean">AINA 소개</h2>
            <div className="space-y-6 text-lg leading-relaxed">
              <p className="font-korean">
                강화도의 아름다운 바다를 바라보며 특별한 브런치를 즐길 수 있는 AINA는 400평 규모의 대형 카페입니다.
              </p>
              <p className="font-korean">
                지중해식 브런치 요리와 매일 아침 구워내는 수제 베이커리로 고객들에게 최고의 맛과 경험을 선사합니다.
              </p>
              <p className="font-korean">
                탁 트인 오션뷰와 모던한 인테리어가 어우러진 공간에서 소중한 사람들과 함께 여유로운 시간을 보내세요.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">400평</div>
                <div className="text-muted-foreground font-korean">넓은 공간</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">오션뷰</div>
                <div className="text-muted-foreground font-korean">바다 전망</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img src="/images/aina-exterior.png" alt="AINA 카페 외관" className="w-full h-64 object-cover rounded-lg" />
            <img src="/images/aina-interior.png" alt="AINA 카페 내부" className="w-full h-64 object-cover rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  )
}
