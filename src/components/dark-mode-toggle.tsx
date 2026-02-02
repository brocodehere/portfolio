'use client'

import * as React from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

export function DarkModeToggle() {
  const { setTheme, theme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <button className="relative h-10 w-10 rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
        <div className="h-[1.2rem] w-[1.2rem]" />
      </button>
    )
  }

  const isDark = theme === 'dark'

  return (
    <button
      className="relative h-10 w-10 rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label="Toggle theme"
    >
      <Sun className={`h-[1.2rem] w-[1.2rem] transition-all absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${isDark ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'}`} />
      <Moon className={`h-[1.2rem] w-[1.2rem] transition-all absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${isDark ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'}`} />
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}
