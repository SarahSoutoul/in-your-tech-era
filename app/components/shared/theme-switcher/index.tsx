'use client'

import { useTheme } from 'next-themes'
import { FaSun, FaMoon } from 'react-icons/fa'
import { Button } from '@/src/components/ui/button'

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="rounded-full"
      variant="outline"
      size="icon"
    >
      <FaSun className="absolute h-10 w-10 rotate-0 scale-100 dark:rotate-90 dark:scale-0"></FaSun>
      <FaMoon className="absolute h-10 w-10 rotate-90 scale-0 dark:rotate-0 dark:scale-100"></FaMoon>
    </Button>
  )
}
