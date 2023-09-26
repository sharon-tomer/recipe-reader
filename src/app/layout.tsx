import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Recipe Reader',
  description: 'Step-by-Step recipe text-to-speech',
  applicationName: 'Recipe Reader',
  appleWebApp: true,
  formatDetection: { telephone: false },
  themeColor: '#000000'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="manifest.json" />      
      </head>

      <body className={inter.className}>{children}</body>
    </html>
  )
}
