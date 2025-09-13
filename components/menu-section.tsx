import { Card, CardContent } from "@/components/ui/card"

const menuItems = [
  {
    category: "시그니처 브런치",
    items: [
      {
        name: "지중해 브런치 플레이트",
        nameEn: "Mediterranean Brunch Plate",
        description: "신선한 샐러드, 부라타 치즈, 수제 빵과 함께",
        price: "18,000원",
        image: "/images/aina-food.png",
      },
      {
        name: "아보카도 토스트",
        nameEn: "Avocado Toast",
        description: "수제 사워도우 빵 위에 신선한 아보카도와 계란",
        price: "14,000원",
        image: "/avocado-toast-on-sourdough-bread.jpg",
      },
      {
        name: "팬케이크 스택",
        nameEn: "Pancake Stack",
        description: "플러피한 팬케이크와 계절 과일, 메이플 시럽",
        price: "16,000원",
        image: "/placeholder-bjzqn.png",
      },
    ],
  },
  {
    category: "수제 베이커리",
    items: [
      {
        name: "크루아상",
        nameEn: "Croissant",
        description: "매일 아침 구워내는 버터 크루아상",
        price: "4,500원",
        image: "/fresh-butter-croissant.png",
      },
      {
        name: "사워도우 브레드",
        nameEn: "Sourdough Bread",
        description: "72시간 발효 사워도우 빵",
        price: "8,000원",
        image: "/artisan-sourdough-loaf.png",
      },
    ],
  },
]

export function MenuSection() {
  return (
    <section id="menu" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 font-korean">메뉴</h2>
          <p className="text-lg text-muted-foreground font-korean">
            신선한 재료로 만든 지중해식 브런치와 수제 베이커리
          </p>
        </div>

        {menuItems.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center font-korean">{category.category}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.items.map((item, itemIndex) => (
                <Card key={itemIndex} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold mb-2 font-korean">{item.name}</h4>
                    <p className="text-sm text-muted-foreground mb-2">{item.nameEn}</p>
                    <p className="text-muted-foreground mb-4 font-korean">{item.description}</p>
                    <p className="text-lg font-bold text-primary">{item.price}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
