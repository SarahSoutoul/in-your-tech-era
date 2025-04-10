'use client'

import { ClerkProvider } from '@clerk/nextjs'
import { dark } from '@clerk/themes'
import { useTheme } from 'next-themes'

export default function _ClerkProvider({ children }: { children: React.ReactNode }) {
  const { resolvedTheme } = useTheme()
  console.log(resolvedTheme)

  return (
    <ClerkProvider appearance={resolvedTheme === 'dark' ? { baseTheme: dark } : undefined}>{children}</ClerkProvider>
  )
}