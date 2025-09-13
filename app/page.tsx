import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { StorySection } from "@/components/story-section"
import { SpaceSection } from "@/components/space-section"
import { ExperienceSection } from "@/components/experience-section"
import { LocationSection } from "@/components/location-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen w-full max-w-full overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <StorySection />
      <SpaceSection />
      <ExperienceSection />
      <LocationSection />
      <Footer />
    </main>
  )
}
