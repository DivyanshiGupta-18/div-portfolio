import HeroSection from "@/components/hero-section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Divyanshi Gupta | Front-End Developer",
  description:
    "Portfolio of Divyanshi Gupta, a passionate Front-End Developer specializing in building responsive, user-friendly interfaces.",
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
    </main>
  )
}

