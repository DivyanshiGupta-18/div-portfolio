"use client"

import { motion } from "framer-motion"
import { GraduationCap, Calendar } from "lucide-react"

const education = [
  {
    degree: "Bachelor's of Computer Applications (BCA)",
    institution: "CCS University (Meerut)",
    period: "2022 – PRESENT",
    description:
      "Studying core concepts of web development, programming, and software engineering, with a strong focus on front-end technologies, and responsive web development. Gaining hands-on experience in modern frameworks, performance optimization, and software development best practices to build user-centric digital solutions.",
    subjects: ["Web Development", "Programming", "Software Engineering", "Front-end Technologies", "Responsive Design"],
  },
]

export default function EducationSection() {
  return (
    <section className="py-8 max-w-4xl mx-auto">
      <div className="space-y-8">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="overflow-hidden border-l-4 border-l-pink-500 bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="p-6 pb-2">
                <div className="flex justify-between items-start flex-wrap gap-2">
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold flex items-center">
                      <GraduationCap className="mr-2 h-5 w-5 text-pink-500" />
                      {edu.degree}
                    </h3>
                    <p className="text-gray-500 text-base mt-1">{edu.institution}</p>
                  </div>
                  <span className="inline-flex items-center rounded-full border border-gray-200 px-3 py-1 text-xs font-medium">
                    <Calendar className="mr-1 h-3 w-3" />
                    {edu.period}
                  </span>
                </div>
              </div>
              <div className="px-6 pb-6">
                <p className="mt-2 text-gray-600">{edu.description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {edu.subjects.map((subject) => (
                    <span 
                      key={subject} 
                      className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-800"
                    >
                      {subject}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mt-12"
      >
        <h2 className="text-xl font-semibold mb-6">Activities & Interests</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {["Chess", "Travel", "Hackathons", "Events", "Meet Up", "Games", "Music"].map((activity, index) => (
            <motion.div
              key={activity}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
            >
              <div className="h-full hover:bg-gray-50 transition-colors bg-white rounded-lg border border-gray-200">
                <div className="p-4 flex items-center justify-center text-center h-full">
                  <span>{activity}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}