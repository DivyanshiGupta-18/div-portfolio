"use client"

import { motion } from "framer-motion"
import { Briefcase, Calendar } from "lucide-react"

const experiences = [
  {
    title: "Software Developer Intern",
    company: "Remote",
    period: "AUG 2024 – NOV 2024",
    description: [
      "Assisted in designing and optimizing responsive web applications, ensuring a seamless user experience.",
      "Collaborated with UI/UX designers and backend developers to create interactive and visually appealing interfaces.",
      "Worked with HTML, CSS, JavaScript, and modern frameworks to enhance website functionality and performance.",
      "Contributed to code debugging, testing, and performance optimization, gaining hands-on experience in industry best practices.",
      "Refined technical skills and deepened understanding of front-end development workflows in a professional setting.",
    ],
    skills: ["HTML", "CSS", "JavaScript", "Responsive Design", "UI/UX", "Debugging"],
  },
]

export default function ExperienceSection() {
  return (
    <section className="py-8 max-w-4xl mx-auto">
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="overflow-hidden border-l-4 border-l-purple-500 bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="p-6 pb-2">
                <div className="flex justify-between items-start flex-wrap gap-2">
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold flex items-center">
                      <Briefcase className="mr-2 h-5 w-5 text-purple-500" />
                      {exp.title}
                    </h3>
                    <p className="text-gray-500 text-base mt-1">{exp.company}</p>
                  </div>
                  <span className="inline-flex items-center rounded-full border border-gray-200 px-3 py-1 text-xs font-medium">
                    <Calendar className="mr-1 h-3 w-3" />
                    {exp.period}
                  </span>
                </div>
              </div>
              <div className="px-6 pb-6">
                <ul className="mt-2 space-y-2 text-gray-600">
                  {exp.description.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * i, duration: 0.4 }}
                      className="flex items-start"
                    >
                      <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-purple-500 flex-shrink-0"></span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span 
                      key={skill} 
                      className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}