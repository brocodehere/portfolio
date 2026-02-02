'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { experiences } from '@/data/experience'
import { Calendar, MapPin, ExternalLink } from 'lucide-react'

const ExperienceSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  }

  const techBadgeVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut" as const,
      },
    },
  }

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-bl from-blue-50/30 via-purple-50/30 to-pink-50/30 dark:from-blue-900/10 dark:via-purple-900/10 dark:to-pink-900/10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Professional <span className="gradient-text dark:gradient-text-dark">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My journey through building scalable applications and solving complex technical challenges
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-600 to-purple-600" />

          {experiences.map((exp: any, index: number) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className={`relative flex items-start mb-12 px-1 sm:px-2 lg:px-8 flex-col sm:flex-col md:flex-row ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900 z-10" />
              
              {/* Content card */}
              <motion.div
                variants={itemVariants}
                className={`ml-12 sm:ml-0 md:ml-0 md:w-4/12 sm:w-4/12 w-10/12 px-1 sm:px-2 md:px-0 ${
                  index % 2 === 0 ? 'md:pl-8 md:text-left' : 'md:pr-8 md:text-left'
                }`}
              >
                <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-2 sm:p-3 md:p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:scale-105 h-auto min-h-fit">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-left">
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 dark:text-white">
                        {exp.company}
                      </h3>
                      <p className="text-base sm:text-lg text-blue-600 dark:text-blue-400 font-medium">
                        {exp.position}
                      </p>
                    </div>
                  </div>

                  {/* Period and location */}
                  <div className={`flex items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-4 justify-start`}>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement: string, achIndex: number) => (
                        <li
                          key={achIndex}
                          className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2"
                        >
                          <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Technologies Used:</h4>
                    <div className={`flex flex-wrap gap-1 sm:gap-2 justify-start`}>
                      {exp.tech.map((tech: string, techIndex: number) => (
                        <motion.span
                          key={tech}
                          variants={techBadgeVariants}
                          custom={techIndex}
                          className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-300 px-2 py-1 sm:px-3 rounded-full text-xs sm:text-sm font-medium border border-blue-200 dark:border-blue-700"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-semibold mb-4">Ready to Collaborate</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              I'm always excited to take on new challenges and work with innovative teams. 
              Let's discuss how my experience can contribute to your next project.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300 inline-flex items-center gap-2"
            >
              Get In Touch
              <ExternalLink className="h-4 w-4" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ExperienceSection
