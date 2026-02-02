'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Github, Linkedin, CheckCircle } from 'lucide-react'

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const validateForm = () => {
    return formData.name.trim() !== '' && 
           formData.email.trim() !== '' && 
           formData.message.trim() !== '' &&
           formData.email.includes('@')
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'piyushkumar61090@gmail.com',
      href: 'mailto:piyushkumar61090@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 7667517759',
      href: 'tel:+917667517759'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'India',
      href: '#'
    }
  ]

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/brocodehere',
      color: 'hover:bg-gray-900 dark:hover:bg-gray-700'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com',
      color: 'hover:bg-blue-600'
    }
  ]

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
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
            Get In <span className="gradient-text dark:gradient-text-dark">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            I'm always interested in hearing about new opportunities and exciting projects. 
            Feel free to reach out if you'd like to collaborate or just say hello!
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12"
        >
          {/* Left side - Contact Info */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Let's Connect
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Whether you have a project in mind, want to discuss potential collaborations, 
                or just want to chat about technology, I'd love to hear from you.
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                return (
                  <motion.a
                    key={index}
                    href={info.href}
                    variants={itemVariants}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4 p-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-lg text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{info.label}</p>
                      <p className="text-gray-900 dark:text-white font-medium">{info.value}</p>
                    </div>
                  </motion.a>
                )
              })}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Connect on Social Media
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      variants={itemVariants}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className={`bg-white dark:bg-gray-900 p-3 rounded-xl border border-gray-200 dark:border-gray-700 ${social.color} text-gray-900 dark:text-white transition-all duration-300`}
                    >
                      <Icon className="h-6 w-6" />
                    </motion.a>
                  )
                })}
              </div>
            </div>

            {/* Availability */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-xl border border-blue-100 dark:border-blue-800"
            >
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                Current Availability
              </h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                I'm currently open to freelance opportunities and full-time positions. 
                Response time is typically within 24-48 hours.
              </p>
            </motion.div>
          </motion.div>

          {/* Right side - Contact Form */}
          <motion.div variants={itemVariants}>
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Send Me a Message
              </h3>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Thank you for reaching out. I'll get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-all duration-300"
                      placeholder="Your Name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-all duration-300 resize-none"
                      placeholder="Tell me about your project or inquiry..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={!validateForm() || isSubmitting}
                    whileHover={{ scale: validateForm() && !isSubmitting ? 1.02 : 1 }}
                    whileTap={{ scale: validateForm() && !isSubmitting ? 0.98 : 1 }}
                    className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
                      validateForm() && !isSubmitting
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg'
                        : 'bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              )}

              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                  Your information is kept confidential and will never be shared with third parties.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactSection
