import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { UserProvider } from '@auth0/nextjs-auth0/client';



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
    <UserProvider>
    <html lang="en">
    <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)"></meta>
    <meta name="theme-color" content="#111827" media="(prefers-color-scheme: dark)"></meta>
      <body>{children}</body>
    </html>
    </UserProvider>
  )
}


