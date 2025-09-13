import { MapPin, Clock, Phone } from "lucide-react"

export function LocationSection() {
  return (
    <section className="py-32 bg-stone-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-stone-800">Visit Us</h2>
          <div className="w-12 h-px bg-stone-300 mx-auto mb-8"></div>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
            강화도 해안가에 자리한 AINA에서 특별한 시간을 보내세요.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Google Maps Embed */}
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3154.123456789!2d126.4123456!3d37.7123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z6rCV7ZmU64-E!5e0!3m2!1sko!2skr!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            ></iframe>
          </div>

          {/* Contact Information */}
          <div className="space-y-12">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-stone-200 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <MapPin className="h-5 w-5 text-stone-600" />
                </div>
                <div>
                  <h3 className="text-xl font-light text-stone-800 mb-2">Location</h3>
                  <div className="space-y-1 text-stone-600 leading-relaxed">
                    <p>인천 강화군 길상면</p>
                    <p>해안동로 116-12</p>
                    <p className="text-sm text-stone-500 mt-2">강화도 해안가 전망 최고의 위치</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-stone-200 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Clock className="h-5 w-5 text-stone-600" />
                </div>
                <div>
                  <h3 className="text-xl font-light text-stone-800 mb-2">Hours</h3>
                  <div className="space-y-1 text-stone-600 leading-relaxed">
                    <p>평일 10:30 - 20:00</p>
                    <p>주말 10:00 - 20:30</p>
                    <p className="text-sm text-stone-500 mt-2">라스트 오더 19:30</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-stone-200 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Phone className="h-5 w-5 text-stone-600" />
                </div>
                <div>
                  <h3 className="text-xl font-light text-stone-800 mb-2">Contact</h3>
                  <div className="space-y-1 text-stone-600 leading-relaxed">
                    <p>032-123-4567</p>
                    <p>@aina_cafe</p>
                    <p className="text-sm text-stone-500 mt-2">예약 문의 환영</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Directions note */}
            <div className="bg-white p-6 rounded-xl border border-stone-200">
              <h4 className="font-light text-stone-800 mb-3">찾아오시는 길</h4>
              <p className="text-sm text-stone-600 leading-relaxed">
                강화대교를 건너 해안도로를 따라 오시면 바다 전망과 함께 AINA의 아름다운 건물을 보실 수 있습니다. 넓은
                주차공간을 준비하고 있습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
