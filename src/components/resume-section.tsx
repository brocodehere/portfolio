'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Download, FileText, Calendar, MapPin, Mail, Phone, Award, Briefcase } from 'lucide-react'

const ResumeSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  }

  const handleDownloadResume = () => {
    // Create a placeholder resume download
    const link = document.createElement('a')
    link.href = '/Piyush Kumar_JAN_26.pdf'
    link.download = 'Piyush_Kumar_Resume.pdf'
    link.click()
  }

  const resumeHighlights = [
    {
      icon: Briefcase,
      title: 'Professional Experience',
      description: '1+ years of hands-on experience in full-stack development',
    },
    {
      icon: Award,
      title: 'Technical Expertise',
      description: 'Proficient in Golang, React, PostgreSQL, Redis, and modern web technologies',
    },
    {
      icon: Calendar,
      title: 'Education',
      description: 'Bachelor\'s degree in Computer Science with focus on software engineering',
    },
    {
      icon: FileText,
      title: 'Certifications',
      description: 'Multiple certifications in cloud technologies and web development',
    },
  ]

  return (
    <section id="resume" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-purple-50/30 to-pink-50/30 dark:from-blue-900/10 dark:via-purple-900/10 dark:to-pink-900/10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="gradient-text dark:gradient-text-dark">Resume</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A comprehensive overview of my professional journey, skills, and accomplishments
          </p>
        </motion.div>

        {/* Resume Preview Card */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 items-center mb-16"
        >
          {/* Left side - Resume Preview */}
          <motion.div variants={itemVariants} className="relative">
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-1 rounded-2xl">
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-8">
                {/* Resume Header */}
                <div className="text-center mb-8">
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-3xl font-bold">PK</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Piyush Kumar
                  </h3>
                  <p className="text-lg text-blue-600 dark:text-blue-400 font-medium mb-4">
                    Full-Stack Developer
                  </p>
                  <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-1">
                      <Mail className="h-4 w-4" />
                      <span>piyushkumar61090@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Phone className="h-4 w-4" />
                      <span>+91 7667517759</span>
                    </div>
                  </div>
                </div>

                {/* Resume Content Preview */}
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Professional Summary</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Full-Stack Developer with 1+ year of experience building scalable e-commerce platforms and learning management systems. Skilled in Golang, React, PostgreSQL, and modern web technologies.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {['Golang', 'React.js', 'Next.js', 'PostgreSQL', 'Redis', 'Node.js', 'TypeScript'].map((skill) => (
                        <span
                          key={skill}
                          className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Experience</h4>
                    <div className="space-y-3">
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">Web Developer - JUSTPOLYMERSOLUTIONS</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Sep 2025 – Present</p>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">Software Engineer - MOBILOITTE TECHNOLOGIES</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Jan 2025 – Jun 2025</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg"
            >
              <FileText className="h-6 w-6" />
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              className="absolute -bottom-4 -left-4 bg-purple-600 text-white p-3 rounded-full shadow-lg"
            >
              <Award className="h-6 w-6" />
            </motion.div>
          </motion.div>

          {/* Right side - Highlights and Download */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {resumeHighlights.map((highlight, index) => {
                const Icon = highlight.icon
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
                  >
                    <Icon className="h-8 w-8 text-blue-600 dark:text-blue-400 mb-3" />
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      {highlight.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {highlight.description}
                    </p>
                  </motion.div>
                )
              })}
            </div>

            {/* Download Button */}
            <motion.div
              variants={itemVariants}
              className="text-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownloadResume}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 inline-flex items-center gap-3 text-lg"
              >
                <Download className="h-6 w-6" />
                Download Full Resume
              </motion.button>
              <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                Available in PDF format • Updated January 2025
              </p>
            </motion.div>

            {/* Additional Info */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-xl border border-blue-100 dark:border-blue-800"
            >
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                Why Hire Me?
              </h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                  <span>Proven track record of delivering production-ready applications</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                  <span>Strong problem-solving skills and attention to detail</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                  <span>Experience with modern development practices and tools</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                  <span>Excellent communication and collaboration skills</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ResumeSection
