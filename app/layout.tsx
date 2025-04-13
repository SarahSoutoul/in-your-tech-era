import type { Metadata } from 'next'
import { ThemeProvider } from './providers/theme-provider'
import ClerkProvider from '@/app/providers/clerk-provider'
import { Geist, Geist_Mono } from 'next/font/google'
import { Header, Footer } from '@/app/components'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'In Your Tech Era',
  description: 'Coaching and mentorship for the next generation of women in tech',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ClerkProvider>
            <Header />
            {children}
            <Footer />
          </ClerkProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
