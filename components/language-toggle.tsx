"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

export function LanguageToggle() {
  const { language, setLanguage, t } = useLanguage()

  return (
    <div className="flex items-center gap-2">
      <Button
        variant={language === 'ko' ? "default" : "outline"}
        size="sm"
        onClick={() => setLanguage('ko')}
        className="text-sm"
      >
        {t('lang.korean')}
      </Button>
      <Button
        variant={language === 'en' ? "default" : "outline"}
        size="sm"
        onClick={() => setLanguage('en')}
        className="text-sm"
      >
        {t('lang.english')}
      </Button>
    </div>
  )
}
