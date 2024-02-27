import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import  {ThemeProvider} from "./theme-provider";


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
  return (
  
    <html lang="en" suppressHydrationWarning>
    <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)"></meta>
      <meta name="theme-color" content="#111827" media="(prefers-color-scheme: dark)"></meta>
       <body>
       <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >        
          {children}
       <Analytics />
       </ThemeProvider>
      </body>
    </html>
  )
}


