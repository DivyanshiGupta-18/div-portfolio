import type { Metadata } from "next"
import EducationSection from "@/components/education-section"

export const metadata: Metadata = {
  title: "Education | Divyanshi Gupta",
  description: "Educational background of Divyanshi Gupta, Front-End Developer.",
}

export default function EducationPage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Education</span>
        </h1>

        <EducationSection />
      </div>
    </main>
  )
}
