"use client"

import { motion } from "framer-motion"
import {
  Code,
  Layout,
  Palette,
  FileJson,
  Server,
  Layers,
  Wind,
  Coffee,
  Globe,
  GitBranch,
  Github,
  Figma,
  TerminalSquare,
  Braces,
  Terminal,
} from "lucide-react"

const skills = [
  { name: "HTML", icon: <Layout className="h-6 w-6" />, color: "bg-orange-100 text-orange-600" },
  { name: "CSS", icon: <Palette className="h-6 w-6" />, color: "bg-blue-100 text-blue-600" },
  { name: "Bootstrap", icon: <Layers className="h-6 w-6" />, color: "bg-purple-100 text-purple-600" },
  { name: "JavaScript", icon: <FileJson className="h-6 w-6" />, color: "bg-yellow-100 text-yellow-600" },
  { name: "Node.js", icon: <Server className="h-6 w-6" />, color: "bg-green-100 text-green-600" },
  { name: "Express.js", icon: <Terminal className="h-6 w-6" />, color: "bg-gray-100 text-gray-800" }, 
  { name: "React.js", icon: <Code className="h-6 w-6" />, color: "bg-cyan-100 text-cyan-600" },
  { name: "Next.js", icon: <Braces className="h-6 w-6" />, color: "bg-black text-white" },
  { name: "Tailwind CSS", icon: <Wind className="h-6 w-6" />, color: "bg-teal-100 text-teal-600" },
  { name: "GitHub", icon: <Github className="h-6 w-6" />, color: "bg-gray-200 text-gray-800" },
  { name: "Git", icon: <GitBranch className="h-6 w-6" />, color: "bg-orange-50 text-orange-500" },
  { name: "Figma", icon: <Figma className="h-6 w-6" />, color: "bg-pink-100 text-pink-600" },
  { name: "VS Code", icon: <TerminalSquare className="h-6 w-6" />, color: "bg-blue-100 text-blue-700" },
  { name: "Java", icon: <Coffee className="h-6 w-6" />, color: "bg-red-100 text-red-600" },
  { name: "API Handler", icon: <Globe className="h-6 w-6" />, color: "bg-violet-100 text-violet-600" },
]

export default function SkillsSection() {
  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold mb-8">Technical Skills</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <div className="h-full hover:shadow-md transition-shadow bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="p-4 flex flex-col items-center justify-center text-center">
                <div className={`p-3 rounded-full ${skill.color} mb-3`}>{skill.icon}</div>
                <h3 className="font-medium">{skill.name}</h3>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
