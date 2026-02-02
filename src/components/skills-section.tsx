'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { skills } from '@/data/skills'

const SkillsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const categoryVariants = {
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

  const skillVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut" as const,
      },
    },
  }

  const getProgressColor = (level: number) => {
    if (level >= 5) return 'bg-gradient-to-r from-green-500 to-green-600'
    if (level >= 4) return 'bg-gradient-to-r from-blue-500 to-blue-600'
    if (level >= 3) return 'bg-gradient-to-r from-yellow-500 to-yellow-600'
    return 'bg-gradient-to-r from-gray-500 to-gray-600'
  }

  const getSkillLevelText = (level: number) => {
    if (level >= 5) return 'Expert'
    if (level >= 4) return 'Advanced'
    if (level >= 3) return 'Intermediate'
    return 'Beginner'
  }

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden transition-colors duration-300">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-50/30 via-purple-50/30 to-pink-50/30 dark:from-blue-900/10 dark:via-purple-900/10 dark:to-pink-900/10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Technical <span className="gradient-text dark:gradient-text-dark">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A comprehensive skill set spanning frontend, backend, databases, and cloud technologies
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-8"
        >
          {skills.map((category: any, categoryIndex: number) => (
            <motion.div
              key={category.name}
              variants={categoryVariants}
              className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center transition-colors duration-300">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3" />
                {category.name}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill: any, skillIndex: number) => (
                  <motion.div
                    key={skill.name}
                    variants={skillVariants}
                    custom={skillIndex}
                    className="group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-all duration-300">
                        {skill.name}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {getSkillLevelText(skill.level)}
                      </span>
                    </div>
                    
                    <div className="relative">
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden transition-colors duration-300">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${(skill.level / 5) * 100}%` }}
                          viewport={{ once: true }}
                          transition={{ 
                            duration: 1, 
                            delay: 0.5 + (categoryIndex * 0.1) + (skillIndex * 0.05),
                            ease: "easeOut" as const
                          }}
                          className={`h-full rounded-full ${getProgressColor(skill.level)} relative overflow-hidden`}
                        >
                          <div className="absolute inset-0 bg-white/20 animate-pulse" />
                        </motion.div>
                      </div>
                      
                      {/* Skill level dots */}
                      <div className="flex gap-1 mt-2">
                        {[1, 2, 3, 4, 5].map((level) => (
                          <div
                            key={level}
                            className={`h-1.5 w-1.5 rounded-full ${
                              level <= skill.level
                                ? 'bg-blue-600 dark:bg-blue-400'
                                : 'bg-gray-300 dark:bg-gray-600'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-semibold mb-4">Always Learning, Always Growing</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Technology evolves rapidly, and I stay committed to continuous learning and adapting to new tools and frameworks. 
              My goal is to deliver modern, efficient, and scalable solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Problem Solving', 'Clean Code', 'Performance Optimization', 'Security Best Practices', 'Agile Development'].map((trait) => (
                <span
                  key={trait}
                  className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium"
                >
                  {trait}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SkillsSection
