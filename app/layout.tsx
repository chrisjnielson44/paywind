import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { getServerSession } from 'next-auth';
import { Analytics } from '@vercel/analytics/react';



const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Paywind',
  description: 'Personal Finance Done Right',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)"></meta>
      <meta name="theme-color" content="#111827" media="(prefers-color-scheme: dark)"></meta>
       <body>
        {children}
       <Analytics />
      </body>
    </html>
  )
}


