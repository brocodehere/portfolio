'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Download, ArrowRight, Code, Database, Globe, Zap, Shield } from 'lucide-react'

const HeroSection = () => {
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const techIcons = [
    { icon: Code, delay: 0 },
    { icon: Database, delay: 0.2 },
    { icon: Globe, delay: 0.4 },
    { icon: Zap, delay: 0.6 },
    { icon: Shield, delay: 0.8 }
  ]

  const handleDownloadResume = () => {
    // Create a placeholder resume download
    const link = document.createElement('a')
    link.href = '/resume.pdf'
    link.download = 'Piyush_Kumar_Resume.pdf'
    link.click()
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900 transition-colors duration-300">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-blue-300 dark:bg-blue-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70 animate-float"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-72 h-72 bg-purple-300 dark:bg-purple-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70 animate-float-delayed"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-300 dark:bg-pink-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70 animate-float-delayed-2"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>

      {/* Floating Tech Icons */}
      {mounted && techIcons.map((tech, index) => {
        const Icon = tech.icon
        return (
          <motion.div
            key={index}
            className="absolute hidden lg:block"
            style={{
              top: `${20 + (index * 15)}%`,
              left: index % 2 === 0 ? '5%' : '90%',
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.6, scale: 1 }}
            transition={{ delay: tech.delay, duration: 0.5 }}
          >
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 3 + index,
                repeat: Infinity,
                delay: tech.delay,
              }}
              className="bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg"
            >
              <Icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </motion.div>
          </motion.div>
        )
      })}

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Floating Profile Photo */}
          {mounted && (
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <motion.div
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 3, -3, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative inline-block"
              >
                <div className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800">
                  <img
                    src="/profile.jpg"
                    alt="Piyush Kumar"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-30 blur-xl -z-10" />
              </motion.div>
            </motion.div>
          )}

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
            <span className="block">Piyush Kumar</span>
            <span className="block text-2xl sm:text-3xl lg:text-4xl mt-2 text-blue-600 dark:text-blue-400 transition-colors duration-300">
              Full-Stack Developer
            </span>
          </h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto transition-colors duration-300"
          >
            <span className="font-medium">Golang | React | PostgreSQL | Redis</span>
            <p className="mt-4 text-base sm:text-lg">
              Building scalable e-commerce and secure learning platforms with modern web technologies.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={handleDownloadResume}
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              <Download className="inline mr-2 h-5 w-5" />
              Download Resume
            </button>

            <button
              onClick={() => scrollToSection('projects')}
              className="w-full sm:w-auto border-2 border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              View Projects
              <ArrowRight className="inline ml-2 h-5 w-5" />
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              Contact Me
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
