import type { Metadata } from "next"
import AboutSection from "@/components/about-section"

export const metadata: Metadata = {
  title: "About | Divyanshi Gupta",
  description: "Learn more about Divyanshi Gupta, a passionate Front-End Developer.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">About Me</span>
        </h1>

        <AboutSection />
      </div>
    </main>
  )
}
