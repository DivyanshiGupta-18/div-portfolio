"use client"

import { motion } from "framer-motion"
import { Briefcase, Calendar } from "lucide-react"

const experiences = [
  {
    title: "DM Trainee – Frontend Developer",
    company: "Stratosphere IT Services Private Limited (Hybrid)",
    period: "Feb 2025 – Present",
    description: [
      "Developing and maintaining EdTech web pages using internal tools and modern front-end technologies.",
      "Building responsive and user-friendly interfaces using HTML5 and CSS3 for seamless cross-device experiences.",
      "Enhancing UI consistency and improving accessibility standards through NVDA testing.",
      "Handling debugging, issue resolution, and bug-fixing tasks using Jira in a collaborative development environment.",
      "Managing version control using Tortoise SVN and contributing to projects for McGraw Hill and Muzzé Lane.",
    ],
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Responsive Design",
      "NVDA",
      "Jira",
      "Bug Fixing",
      "Tortoise SVN",
      "ePUB",
    ],
  },
  {
    title: "Software Developer Intern – Frontend Developer",
    company: "Greenbook Media & Apps (Remote)",
    period: "Aug 2024 – Nov 2024",
    description: [
      "Assisted in designing and optimizing responsive web applications to deliver a smooth user experience.",
      "Collaborated with UI/UX designers and backend developers to create interactive and visually appealing interfaces.",
      "Worked with HTML, CSS, JavaScript, and Bootstrap to improve website functionality and performance.",
      "Contributed to debugging, testing, and performance optimization while following industry best practices.",
      "Strengthened front-end development skills and gained hands-on experience with real-world development workflows.",
    ],
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "Responsive Design",
      "UI/UX",
      "Debugging",
      "Performance Optimization",
    ],
  },
]

export default function ExperienceSection() {
  return (
    <section className="py-10 max-w-5xl mx-auto px-4">
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
              
              <div className="h-1 w-full bg-gradient-to-r from-purple-500 to-pink-500"></div>

              <div className="p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 flex items-center">
                      <Briefcase className="mr-2 h-5 w-5 text-purple-600" />
                      {exp.title}
                    </h3>

                    <p className="mt-1 text-gray-600 font-medium">
                      {exp.company}
                    </p>
                  </div>

                  <div className="inline-flex items-center rounded-full bg-purple-50 border border-purple-200 px-4 py-1.5 text-sm font-medium text-purple-700">
                    <Calendar className="mr-2 h-4 w-4" />
                    {exp.period}
                  </div>
                </div>

                <ul className="mt-6 space-y-3 text-gray-700">
                  {exp.description.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start"
                    >
                      <span className="mt-2 mr-3 h-2 w-2 rounded-full bg-purple-500 flex-shrink-0"></span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 hover:bg-purple-100 hover:text-purple-700 transition-colors duration-200"
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