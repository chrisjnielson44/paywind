import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Amplify } from "aws-amplify";
import awsExports from "./aws-exports";
Amplify.configure({ ...awsExports, ssr: true });

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
    <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)"></meta>
    <meta name="theme-color" content="#111827" media="(prefers-color-scheme: dark)"></meta>
      <body>{children}</body>
    </html>
  )
}



