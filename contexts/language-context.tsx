"use client"

import React, { createContext, useContext, useState, useEffect } from 'react'

type Language = 'ko' | 'en'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Translation data
const translations = {
  ko: {
    // Navigation
    'nav.home': '홈',
    'nav.story': '스토리',
    'nav.space': '공간',
    'nav.visit': '방문하기',
    
    // Hero Section
    'hero.title': 'AINA',
    'hero.subtitle': '강화도 오션뷰 브런치 카페',
    
    // Story Section
    'story.title': 'Our Story',
    'story.paragraph1': '강화도의 아름다운 해안선을 따라 자리한 AINA는 지중해의 여유로운 분위기와 한국의 정서를 조화롭게 담아낸 특별한 공간입니다.',
    'story.paragraph2': '400평의 넓은 공간에서 탁 트인 바다 전망을 감상하며, 신선한 재료로 정성스럽게 준비한 지중해식 브런치와 수제 베이커리를 즐기실 수 있습니다.',
    'story.paragraph3': '자연과 건축이 만나는 이곳에서 일상의 소중한 순간들을 만들어보세요.',
    
    // Space Section
    'space.title': 'The Space',
    'space.description': '현대적인 건축미와 자연이 어우러진 400평 규모의 공간에서 특별한 경험을 선사합니다.',
    'space.oceanView.title': 'Ocean View',
    'space.oceanView.description': '전면 유리창을 통해 펼쳐지는 강화도 바다의 파노라마 뷰를 감상하며 여유로운 시간을 보내세요. 계절마다 변화하는 바다의 모습이 특별한 추억을 만들어드립니다.',
    'space.architecture.title': 'Modern Architecture',
    'space.architecture.description': '깔끔한 콘크리트와 유리로 구성된 현대적 건축물은 미니멀한 아름다움을 추구합니다. 자연광이 가득한 내부 공간에서 편안하고 세련된 분위기를 느껴보세요.',
    
    // Experience Section
    'experience.title': 'Experience',
    'experience.description': '신선한 재료와 정성으로 준비한 특별한 메뉴를 만나보세요.',
    'experience.brunch.title': 'Mediterranean Brunch',
    'experience.brunch.description': '지중해의 신선한 재료로 만든 브런치 메뉴',
    'experience.bakery.title': 'Artisan Bakery',
    'experience.bakery.description': '매일 아침 갓 구운 수제 베이커리',
    'experience.coffee.title': 'Premium Coffee',
    'experience.coffee.description': '정성스럽게 내린 프리미엄 커피',
    
    // Location Section
    'location.title': 'Visit Us',
    'location.description': '강화도의 아름다운 바다를 배경으로 한 특별한 공간에서 만나요.',
    'location.address': '인천광역시 강화군 강화읍 강화대로 123',
    'location.hours': '운영시간',
    'location.hours.weekday': '평일: 09:00 - 22:00',
    'location.hours.weekend': '주말: 08:00 - 23:00',
    'location.phone': '전화: 032-123-4567',
    
    // Footer
    'footer.copyright': '© 2024 AINA. All rights reserved.',
    'footer.description': '강화도 최대 규모 오션뷰 브런치 카페',
    
    // Language Toggle
    'lang.korean': '한국어',
    'lang.english': 'English',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.story': 'Story',
    'nav.space': 'Space',
    'nav.visit': 'Visit',
    
    // Hero Section
    'hero.title': 'AINA',
    'hero.subtitle': 'Ganghwa Island Ocean View Brunch Cafe',
    
    // Story Section
    'story.title': 'Our Story',
    'story.paragraph1': 'Located along the beautiful coastline of Ganghwa Island, AINA is a special space that harmoniously blends the relaxed atmosphere of the Mediterranean with Korean sensibilities.',
    'story.paragraph2': 'In our spacious 400-pyeong space, you can enjoy Mediterranean-style brunch and artisanal bakery items prepared with fresh ingredients while admiring the panoramic ocean view.',
    'story.paragraph3': 'Create precious moments in your daily life in this place where nature and architecture meet.',
    
    // Space Section
    'space.title': 'The Space',
    'space.description': 'Experience something special in our 400-pyeong space where modern architecture meets nature.',
    'space.oceanView.title': 'Ocean View',
    'space.oceanView.description': 'Enjoy leisurely time while admiring the panoramic view of Ganghwa Island\'s ocean through the full glass windows. The changing appearance of the sea throughout the seasons creates special memories.',
    'space.architecture.title': 'Modern Architecture',
    'space.architecture.description': 'The modern building composed of clean concrete and glass pursues minimalist beauty. Feel comfortable and sophisticated in the interior space filled with natural light.',
    
    // Experience Section
    'experience.title': 'Experience',
    'experience.description': 'Discover our special menu prepared with fresh ingredients and care.',
    'experience.brunch.title': 'Mediterranean Brunch',
    'experience.brunch.description': 'Brunch menu made with fresh Mediterranean ingredients',
    'experience.bakery.title': 'Artisan Bakery',
    'experience.bakery.description': 'Freshly baked artisanal bakery items every morning',
    'experience.coffee.title': 'Premium Coffee',
    'experience.coffee.description': 'Carefully brewed premium coffee',
    
    // Location Section
    'location.title': 'Visit Us',
    'location.description': 'Meet us in a special space with the beautiful ocean of Ganghwa Island as the backdrop.',
    'location.address': '123 Ganghwa-daero, Ganghwa-eup, Ganghwa-gun, Incheon',
    'location.hours': 'Hours',
    'location.hours.weekday': 'Weekdays: 09:00 - 22:00',
    'location.hours.weekend': 'Weekends: 08:00 - 23:00',
    'location.phone': 'Phone: 032-123-4567',
    
    // Footer
    'footer.copyright': '© 2024 AINA. All rights reserved.',
    'footer.description': 'Ganghwa Island\'s largest ocean view brunch cafe',
    
    // Language Toggle
    'lang.korean': '한국어',
    'lang.english': 'English',
  }
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('ko')

  // Load language from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language
    if (savedLanguage && (savedLanguage === 'ko' || savedLanguage === 'en')) {
      setLanguage(savedLanguage)
    }
  }, [])

  // Save language to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('language', language)
  }, [language])

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
