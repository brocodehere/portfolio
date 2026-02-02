'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects } from '@/data/projects'
import { ExternalLink, Github, X, Calendar, Users, Zap } from 'lucide-react'

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null)

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

  const cardVariants = {
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

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut" as const,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.2,
        ease: "easeIn" as const,
      },
    },
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'ecommerce':
        return 'from-green-500 to-emerald-600'
      case 'education':
        return 'from-blue-500 to-indigo-600'
      case 'realestate':
        return 'from-purple-500 to-pink-600'
      default:
        return 'from-gray-500 to-gray-600'
    }
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'ecommerce':
        return <Zap className="h-4 w-4" />
      case 'education':
        return <Users className="h-4 w-4" />
      case 'realestate':
        return <Calendar className="h-4 w-4" />
      default:
        return <Zap className="h-4 w-4" />
    }
  }

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
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
            Featured <span className="gradient-text dark:gradient-text-dark">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A showcase of my recent work building scalable applications and solving complex technical challenges
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project: any, index: number) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                rotateX: 5,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`w-16 h-16 bg-gradient-to-r ${getCategoryColor(project.category)} rounded-xl flex items-center justify-center text-white`}>
                      {getCategoryIcon(project.category)}
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className={`bg-gradient-to-r ${getCategoryColor(project.category)} text-white px-3 py-1 rounded-full text-xs font-medium`}>
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech: string, techIndex: number) => (
                      <span
                        key={techIndex}
                        className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs font-medium">
                        +{project.tech.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Action Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    View Details
                    <ExternalLink className="h-4 w-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="bg-white dark:bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-200 dark:border-gray-700"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="relative h-64 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`w-24 h-24 bg-gradient-to-r ${getCategoryColor(selectedProject.category)} rounded-2xl flex items-center justify-center text-white`}>
                      {getCategoryIcon(selectedProject.category)}
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* Modal Content */}
                <div className="p-8">
                  <div className="mb-6">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                      {selectedProject.title}
                    </h2>
                    <span className={`inline-block bg-gradient-to-r ${getCategoryColor(selectedProject.category)} text-white px-4 py-2 rounded-full text-sm font-medium`}>
                      {selectedProject.category}
                    </span>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Overview</h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {selectedProject.longDescription}
                    </p>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Key Features</h3>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feature: string, index: number) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                          <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((tech: string, index: number) => (
                        <span
                          key={index}
                          className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium border border-blue-200 dark:border-blue-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-4">
                    {selectedProject.live && (
                      <motion.a
                        href={selectedProject.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300 inline-flex items-center gap-2"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </motion.a>
                    )}
                    {selectedProject.github && (
                      <motion.a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gray-900 dark:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300 inline-flex items-center gap-2"
                      >
                        <Github className="h-4 w-4" />
                        View Code
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-semibold mb-4">Interested in My Work?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              These projects represent my passion for building robust, scalable applications. 
              I'm always open to discussing new opportunities and collaborations.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300"
            >
              Let's Connect
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProjectsSection
