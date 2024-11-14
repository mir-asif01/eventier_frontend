import HeroSection from "@/components/HeroSection"
import Pricing from "@/components/Pricing"
import ProblemsWeSolve from "@/components/ProblemsWeSolve"

export default function Home() {
  return (
    <main className="mt-16">
      <HeroSection />
      <Pricing />
      <ProblemsWeSolve />
    </main>
  )
}
