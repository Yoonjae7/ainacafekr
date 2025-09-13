export function Footer() {
  return (
    <footer className="py-16 bg-stone-900 text-stone-300">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center space-y-8">
          <div>
            <h3 className="text-2xl font-light text-white mb-2">AINA</h3>
            <p className="text-stone-400">아이나 브런치 카페</p>
          </div>

          <div className="w-px h-12 bg-stone-700 mx-auto"></div>

          <div className="grid md:grid-cols-3 gap-8 text-sm">
            <div>
              <p>인천 강화군 길상면</p>
              <p>해안동로 116-12</p>
            </div>
            <div>
              <p>평일 10:30 - 20:00</p>
              <p>주말 10:00 - 20:30</p>
            </div>
            <div>
              <p>032-123-4567</p>
              <p>@aina_cafe</p>
            </div>
          </div>

          <div className="pt-8 border-t border-stone-800">
            <p className="text-xs text-stone-500">© 2024 AINA. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
