"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Job-dhundo",
    description: "Job Dhundo is an AI-powered job search platform that helps users find their dream jobs effortlessly. Users can upload their resume to receive personalized job recommendations, track applied positions, and explore opportunities at top companies—all in a seamless, interactive experience.",
    technologies: ["Next.js", "Tailwind CSS", "Node.js" ],
    demoLink: "https://job-dhundo-virid.vercel.app/",
    githubLink: "https://github.com/DivyanshiGupta-18/job-dhundo",
    image: "/images/Job-dhundo.png",
  },
  {
    title: "Instant-Care",
    description: "Instant-Care is a smart, full-stack healthcare platform that combines real-time emergency response, AI-driven diagnosis through LLM, hospital and blood bank locators, and personalized Ayurvedic wellness insights for faster, holistic care.",
    technologies: ["React.js", "Bootstrap", "Node js", "Google Map API", "Typescript"],
    demoLink: "https://instant-care.vercel.app/",
    githubLink: "https://github.com/DivyanshiGupta-18/Instant-Care",
    image: "/images/Instant-Care.png",
  },
  {
    title: "Employee-Todo",
    description: "The Employee Todo App is a web-based task management system that allows employees to create, update, and manage their daily tasks efficiently. This project is built with modern web technologies to ensure a seamless user experience.",
    technologies: ["React.js", "API Integration", "CSS", "Appwrite"],
    demoLink: "https://employee-todo-seven.vercel.app/",
    githubLink: "https://github.com/DivyanshiGupta-18/employee-todo",
    image: "/images/Employee-todo.png",
  },

  {
    title: "Whatsnew",
    description: "Whatsnew fashion e-commerce website designed to showcase and sell trending clothing and accessories for men and women. It features dynamic product listings, category-wise deals, and user interaction elements like add-to-cart and wishlist. The site combines a stylish front-end with a robust back-end for managing inventory, orders, and user accounts.",
    technologies: ["HTML", "CSS", "Javascript"],
    demoLink: "#",
    githubLink: "https://github.com/DivyanshiGupta-18/Whatsnew",
    image: "/images/Whatsnew.png",
  },
  {
    title: "my_food",
    description: "My Food is a vibrant and user-friendly recipe and food inspiration platform that offers curated meal ideas, trending recipes, and healthy eating tips. It features categories like Comfort Food, Quick & Easy meals, Desserts, and more. Users can explore popular dishes, discover ingredient substitutes, and browse healthy or seasonal food options. Perfect for food lovers looking for daily inspiration and nutritious meal choices.",
    technologies: ["HTML", "CSS", "Javascript"],
    demoLink: "https://my-food-six.vercel.app/",
    githubLink: "https://github.com/DivyanshiGupta-18/my_food",
    image: "/images/my_food.png",
  },
  {
    title: "News-Monkey",
    description: "A dynamic news platform built with React that provides real-time updates across various categories like sports, business, politics, entertainment, and daily headlines—all in one place for an informed and engaging experience. Users can filter news by category, explore trending topics, and stay updated with a clean, user-friendly interface.",
    technologies: ["React.js", "Bootstrap" , "News API" ],
    demoLink: "#",
    githubLink: "https://github.com/DivyanshiGupta-18/News-Monkey",
    image: "/images/News-Monkey.png",
  },
  {
    title: "Spoon & Fork",
    description: "Spoon & Fork is an interactive recipe platform that enhances your cooking journey with the power of technology. It integrates Map API to find nearby restaurants, FlavorDB for smart ingredient pairing, and RecipeDB for a wide variety of global recipes. With features like AI assistance, recipe filtering, and ingredient delivery, it’s your go-to destination for discovering, learning, and enjoying food like never before.",
    technologies: ["React.js" , "Tailwind CSS", "Node js"],
    demoLink: "https://spoon-and-fork.vercel.app/",
    githubLink: "https://github.com/DivyanshiGupta-18/spoon-fork",
    image: "/images/Spoon & Fork.png",
  },
  {
    title: "GameVerse",
    description: "This is a responsive gaming website built using HTML, CSS, and JavaScript. Users can buy a variety of gaming products like games, accessories, and merchandise. It also provides updates on upcoming gaming events, tournaments, and new releases.",
    technologies :["Html" , "CSS", "Javascript"],
    demoLink: "https://game-verse-three.vercel.app/",
    githubLink: "https://github.com/DivyanshiGupta-18/GameVerse",
    image: "/images/Gameverse.png",
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