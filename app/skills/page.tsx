import type { Metadata } from "next"
import SkillsSection from "@/components/skills-section"
import ProjectsSection from "@/components/projects-section"

export const metadata: Metadata = {
  title: "Skills & Projects | Divyanshi Gupta",
  description: "Explore Divyanshi Gupta's skills and projects in front-end development.",
}

export default function SkillsPage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            Skills & Projects
          </span>
        </h1>

        <SkillsSection />
        <ProjectsSection />
      </div>
    </main>
  )
}
