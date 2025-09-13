"use client"

import { MapPin, Clock, Phone } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function LocationSection() {
  const { t } = useLanguage()
  
  return (
    <section id="location" className="py-32 bg-stone-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-stone-800">{t('location.title')}</h2>
          <div className="w-12 h-px bg-stone-300 mx-auto mb-8"></div>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
            {t('location.description')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Google Maps Embed - AINA Cafe Location on Ganghwa Island */}
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3155.6753!2d126.4326!3d37.7056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b94c5f7ad5b4b%3A0x123456!2z6rCV7ZmU64-E!5e0!3m2!1sko!2skr!4v1698765432"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="transition-all duration-500"
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
                  <h3 className="text-xl font-light text-stone-800 mb-2">{t('location.hours')}</h3>
                  <div className="space-y-1 text-stone-600 leading-relaxed">
                    <p>{t('location.address')}</p>
                    <p className="text-sm text-stone-500 mt-2">Ganghwa Island's best ocean view location</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-stone-200 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Clock className="h-5 w-5 text-stone-600" />
                </div>
                <div>
                  <h3 className="text-xl font-light text-stone-800 mb-2">{t('location.hours')}</h3>
                  <div className="space-y-1 text-stone-600 leading-relaxed">
                    <p>{t('location.hours.weekday')}</p>
                    <p>{t('location.hours.weekend')}</p>
                    <p className="text-sm text-stone-500 mt-2">Last order 19:30</p>
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
                    <p>{t('location.phone')}</p>
                    <p>@aina_cafe</p>
                    <p className="text-sm text-stone-500 mt-2">Reservations welcome</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Directions note */}
            <div className="bg-white p-6 rounded-xl border border-stone-200">
              <h4 className="font-light text-stone-800 mb-3">Directions</h4>
              <p className="text-sm text-stone-600 leading-relaxed">
                Cross Ganghwa Bridge and follow the coastal road to see AINA's beautiful building with ocean views. Ample parking space is available.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
