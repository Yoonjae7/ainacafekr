"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export function LanguageToggle() {
  const [isKorean, setIsKorean] = useState(true)

  return (
    <div className="flex items-center gap-2">
      <Button
        variant={isKorean ? "default" : "outline"}
        size="sm"
        onClick={() => setIsKorean(true)}
        className="text-sm"
      >
        한국어
      </Button>
      <Button
        variant={!isKorean ? "default" : "outline"}
        size="sm"
        onClick={() => setIsKorean(false)}
        className="text-sm"
      >
        English
      </Button>
    </div>
  )
}
