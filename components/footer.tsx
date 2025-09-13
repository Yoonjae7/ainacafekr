import { useLanguage } from "@/contexts/language-context"

export function Footer() {
  const { t } = useLanguage()
  
  return (
    <footer className="py-16 bg-stone-900 text-stone-300">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center space-y-8">
          <div>
            <h3 className="text-2xl font-light text-white mb-2">AINA</h3>
            <p className="text-stone-400">{t('footer.description')}</p>
          </div>

          <div className="w-px h-12 bg-stone-700 mx-auto"></div>

          <div className="grid md:grid-cols-3 gap-8 text-sm">
            <div>
              <p>{t('location.address')}</p>
            </div>
            <div>
              <p>{t('location.hours.weekday')}</p>
              <p>{t('location.hours.weekend')}</p>
            </div>
            <div>
              <p>{t('location.phone')}</p>
              <p>@aina_cafe</p>
            </div>
          </div>

          <div className="pt-8 border-t border-stone-800">
            <p className="text-xs text-stone-500">{t('footer.copyright')}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
