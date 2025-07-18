"use client"

import { motion } from "framer-motion"
import { Download, Mail, MapPin, Phone } from "lucide-react"
import Image from "next/image"

export default function AboutSection() {
  return (
    <section className="py-8 max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="md:col-span-1"
        >
          <div className="overflow-hidden bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="relative h-80 w-full">
              <Image src="/images/D pic.jpeg" alt="Divyanshi Gupta" fill className="object-cover" />
            </div>
            <div className="p-4">
              <div className="space-y-4 mt-2">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2 text-gray-500" />
                  <span className="text-sm">New Defense Colony Murad Nagar, Ghaziabad, Uttar Pradesh 201206</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2 text-gray-500" />
                  <span className="text-sm">91+ 8954191650</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2 text-gray-500" />
                  <span className="text-sm">guptadivyanshi756@example.com</span>
                </div>
              </div>

              <a
                href="/images/Divyanshi-Gup.pdf"
                download
                className="w-full mt-6 inline-flex items-center justify-center rounded-md border border-gray-300 px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-50"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </a>

            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:col-span-2"
        >
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-4">About Me</h2>

              <div className="space-y-4 text-gray-600">
                <p>
                  I am Divyanshi Gupta, a passionate Front-End Developer currently pursuing my MCA in Cloud Computing from Manipal University, Jaipur. I specialize in building responsive, user-friendly interfaces with a strong focus on UI/UX and modern web technologies.
                </p>
                <p>
                  Having completed my BCA from Modern Degree College, I have built a solid academic foundation and am now deepening my understanding of cloud technologies and scalable systems through my postgraduate studies.
                </p>
                <p>
                  I thrive on learning, adapting to new trends, and crafting seamless digital experiences. Committed to innovation and continuous growth, I aim to contribute meaningfully to both front-end development and cloud-based applications.
                </p>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-medium mb-3">My Approach</h3>
                <ul className="space-y-2">
                  <motion.li
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.4 }}
                    className="flex items-start"
                  >
                    <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-purple-500 flex-shrink-0"></span>
                    <span>Creating responsive designs that work across all devices </span>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.4 }}
                    className="flex items-start"
                  >
                    <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-purple-500 flex-shrink-0"></span>
                    <span>Building intuitive user interfaces with modern frameworks</span>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.4 }}
                    className="flex items-start"
                  >
                    <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-purple-500 flex-shrink-0"></span>
                    <span>Focusing on performance optimization and clean code</span>
                  </motion.li>
                   <motion.li
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6, duration: 0.4 }}
                    className="flex items-start"
                  >
                    <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-purple-500 flex-shrink-0"></span>
                    <span>Exploring cloud technologies to build efficient and secure applications</span>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6, duration: 0.4 }}
                    className="flex items-start"
                  >
                    <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-purple-500 flex-shrink-0"></span>
                    <span>Continuously learning new technologies and best practices</span>
                  </motion.li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}