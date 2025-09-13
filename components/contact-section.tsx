import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Instagram, Phone, MessageCircle } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 font-korean">연락처</h2>
          <p className="text-lg text-muted-foreground font-korean">예약 및 문의는 언제든지 연락주세요</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2 font-korean">전화 예약</h3>
              <p className="text-muted-foreground mb-4 font-korean">전화로 간편하게 예약하세요</p>
              <Button className="w-full font-korean">032-123-4567</Button>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <MessageCircle className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2 font-korean">카카오톡</h3>
              <p className="text-muted-foreground mb-4 font-korean">카카오톡으로 편리하게 문의</p>
              <Button variant="outline" className="w-full font-korean bg-transparent">
                카톡 문의하기
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <Instagram className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2 font-korean">인스타그램</h3>
              <p className="text-muted-foreground mb-4 font-korean">최신 소식과 사진을 확인하세요</p>
              <Button variant="outline" className="w-full font-korean bg-transparent">
                @aina_cafe
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Instagram Gallery Preview */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8 font-korean">인스타그램 갤러리</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <img
              src="/images/aina-food.png"
              alt="AINA 음식 사진"
              className="aspect-square object-cover rounded-lg hover:scale-105 transition-transform cursor-pointer"
            />
            <img
              src="/images/aina-interior.png"
              alt="AINA 인테리어"
              className="aspect-square object-cover rounded-lg hover:scale-105 transition-transform cursor-pointer"
            />
            <img
              src="/ocean-view-from-cafe-window.jpg"
              alt="바다 전망"
              className="aspect-square object-cover rounded-lg hover:scale-105 transition-transform cursor-pointer"
            />
            <img
              src="/coffee-and-pastry-on-table.jpg"
              alt="커피와 페이스트리"
              className="aspect-square object-cover rounded-lg hover:scale-105 transition-transform cursor-pointer"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
