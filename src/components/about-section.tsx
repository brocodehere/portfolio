'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Code, Database, Globe, Zap, Shield, Users, Target, Award } from 'lucide-react'

const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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

  const skills = [
    { icon: Code, label: 'Full-Stack Development', color: 'text-blue-600 dark:text-blue-400' },
    { icon: Database, label: 'Database Architecture', color: 'text-green-600 dark:text-green-400' },
    { icon: Globe, label: 'Web Performance', color: 'text-purple-600 dark:text-purple-400' },
    { icon: Zap, label: 'API Development', color: 'text-yellow-600 dark:text-yellow-400' },
    { icon: Shield, label: 'Security Implementation', color: 'text-red-600 dark:text-red-400' },
    { icon: Users, label: 'Team Collaboration', color: 'text-indigo-600 dark:text-indigo-400' },
  ]

  const stats = [
    { number: '1+', label: 'Years Experience', icon: Target },
    { number: '10+', label: 'Projects Completed', icon: Award },
    { number: '5+', label: 'Technologies', icon: Code },
    { number: '100%', label: 'Client Satisfaction', icon: Users },
  ]

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden transition-colors duration-300">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-900/10 dark:to-purple-900/10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="gradient-text dark:gradient-text-dark">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 items-center mb-16"
        >
          {/* Left side - About content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                I am a <span className="font-semibold text-blue-600 dark:text-blue-400">Full-Stack Developer</span> with 1+ year of hands-on experience delivering production-grade e-commerce and learning platforms. Skilled in modern web technologies with a focus on performance, security, and scalability.
              </p>
              
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                My expertise spans across the entire development stack, from crafting responsive user interfaces to building robust backend services and optimizing database performance.
              </p>
            </div>

            {/* Skills grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {skills.map((skill, index) => {
                const Icon = skill.icon
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-center card-hover"
                  >
                    <Icon className={`h-8 w-8 mx-auto mb-2 ${skill.color}`} />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {skill.label}
                    </span>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Right side - Stats */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-xl text-center border border-blue-100 dark:border-blue-800"
                  >
                    <Icon className="h-10 w-10 mx-auto mb-3 text-blue-600 dark:text-blue-400" />
                    <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {stat.label}
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Tech stack highlight */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-xl text-white"
            >
              <h3 className="text-xl font-semibold mb-4">Core Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {['Golang', 'React.js', 'Next.js', 'PostgreSQL', 'Redis', 'Node.js', 'TypeScript', 'Tailwind CSS'].map((tech) => (
                  <span
                    key={tech}
                    className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-8 rounded-2xl border border-blue-100 dark:border-blue-800">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Let's Build Something Amazing Together
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              I'm passionate about creating innovative solutions that solve real-world problems. 
              Whether you need a full-stack application, API development, or technical consultation, 
              I'm here to help bring your ideas to life.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300"
            >
              Get In Touch
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection
