import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ui/theme-provider'
import Navbar from '@/components/nav/Navbar'
import SessisonProvider from '@/components/ui/SessisonProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <main className='max-w-7xl mx-auto p-10 space-y-5'>
            <Navbar />
            
            {children}
          </main>
        </ThemeProvider>
        <SessisonProvider />
      </body>
    </html>
  )
}
