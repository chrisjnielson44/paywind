import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { UserProvider } from '@auth0/nextjs-auth0/client';


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PayWind',
  description: 'Personal Finance Done Right',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <UserProvider>
      <body>{children}</body>
    </UserProvider>
    </html>
  )
}



