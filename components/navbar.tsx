"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Code, Briefcase, GraduationCap, User } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  const navLinks = [
    { href: "/skills", label: "Skills & Projects", icon: <Code className="h-4 w-4 mr-1" /> },
    { href: "/experience", label: "Experience", icon: <Briefcase className="h-4 w-4 mr-1" /> },
    { href: "/education", label: "Education", icon: <GraduationCap className="h-4 w-4 mr-1" /> },
    { href: "/about", label: "About", icon: <User className="h-4 w-4 mr-1" /> },
  ]

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 py-4 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              Divyanshi Gupta
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-purple-100 hover:text-purple-700 transition-colors"
              >
                {link.icon}
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              aria-label="Toggle Menu"
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-md p-4 rounded-b-lg">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-purple-100 hover:text-purple-700 transition-colors"
                >
                  {link.icon}
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}