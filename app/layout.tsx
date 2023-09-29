import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Paywind',
  description: 'Personal Finance Done Right',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <meta name="theme-color" content="#22c55e"></meta>
      <body>{children}</body>
    </html>
  )
}



