"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const titles = ["Front-End Developer", "UI/UX Enthusiast", "React.js Developer", "Web Designer", "Java Developer"]

export default function AnimatedText() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="h-full flex items-center">
      <AnimatePresence mode="wait">
        <motion.h2
          key={currentIndex}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent"
        >
          {titles[currentIndex]}
        </motion.h2>
      </AnimatePresence>
    </div>
  )
}
