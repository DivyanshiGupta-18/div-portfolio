"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "E-commerce Website",
    description: "A responsive e-commerce website with product filtering, cart functionality, and checkout process.",
    technologies: ["React.js", "Tailwind CSS", "Node.js"],
    demoLink: "#",
    githubLink: "#",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    title: "Portfolio Template",
    description: "A customizable portfolio template for developers and designers to showcase their work.",
    technologies: ["HTML", "CSS", "JavaScript"],
    demoLink: "#",
    githubLink: "#",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    title: "Weather Dashboard",
    description: "A weather application that displays current and forecasted weather data based on location.",
    technologies: ["React.js", "API Integration", "CSS"],
    demoLink: "#",
    githubLink: "#",
    image: "/placeholder.svg?height=200&width=400",
  },
]

export default function ProjectsSection() {
  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold mb-8">Featured Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <div className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow bg-white rounded-lg border border-gray-200">
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-auto p-6 pt-0 flex justify-between">
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md border border-gray-300 px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-50"
                >
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </a>
                <a 
                  href={project.demoLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-700"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}