import Link from "next/link"
import { Github, Linkedin, Mail, Twitter, Code } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-lg font-bold">
              <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                Divyanshi Gupta
              </span>
            </Link>
            <p className="text-sm text-gray-500 mt-1">Front-End Developer</p>
          </div>

          <div className="flex space-x-4">
            <a
              href="https://github.com/DivyanshiGupta-18"
              className="text-gray-500 hover:text-purple-600 transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/divyanshi-gupta-6387782a2/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              className="text-gray-500 hover:text-purple-600 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="https://x.com/Divyanshig2004?t=kOOFK9FhGHJF6g1ne49npA&s=08"
              className="text-gray-500 hover:text-purple-600 transition-colors"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </a>
            <a
              href="mailto:guptadivyanshi756@example.com"
              className="text-gray-500 hover:text-purple-600 transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </a>
            <a
              href="https://leetcode.com/u/divyanshi_k/"
              className="text-gray-500 hover:text-purple-600 transition-colors"
            >
              <Code className="h-5 w-5" />
              <span className="sr-only">LeetCode</span>
            </a>
          </div>
        </div>

        <div className="mt-6 text-center text-sm text-gray-500">
          <p>---Build something helpful together---</p>
          <h6>--CodeDrifter--</h6>
        </div>
      </div>
    </footer>
  )
}
