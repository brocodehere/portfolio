'use client'

import React, { useState, useEffect } from 'react'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'
import { motion } from 'framer-motion'
import { DarkModeToggle } from './dark-mode-toggle'

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Resume', href: '#resume' },
    { label: 'Contact', href: '#contact' }
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/80 backdrop-blur-md border-b border-border shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.a
            href="#"
            className="text-xl font-bold gradient-text dark:gradient-text-dark"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Piyush Kumar
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.a>
            ))}
          </div>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            {/* Social Links */}
            <div className="hidden lg:flex items-center space-x-3">
              <motion.a
                href="https://github.com/brocodehere"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/piyush-kumar-4b68a7271"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="mailto:piyushkumar61090@gmail.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail className="h-5 w-5" />
              </motion.a>
            </div>

            {/* Dark Mode Toggle */}
            <DarkModeToggle />

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden text-muted-foreground hover:text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.9 }}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: isMobileMenuOpen ? 'auto' : 0,
            opacity: isMobileMenuOpen ? 1 : 0
          }}
          className="md:hidden overflow-hidden bg-background border-b border-border"
        >
          <div className="py-4 space-y-2">
            {navItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="block px-4 py-2 text-muted-foreground hover:text-foreground transition-colors"
                initial={{ x: -50, opacity: 0 }}
                animate={{
                  x: isMobileMenuOpen ? 0 : -50,
                  opacity: isMobileMenuOpen ? 1 : 0
                }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </motion.a>
            ))}
            
            {/* Mobile Social Links */}
            <div className="flex items-center space-x-4 px-4 py-2">
              <motion.a
                href="https://github.com/brocodehere"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/piyush-kumar-4b68a7271"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="mailto:piyushkumar61090@gmail.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail className="h-5 w-5" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}

export default Navigation
