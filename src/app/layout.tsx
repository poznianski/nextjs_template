import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from 'react'

import './globals.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Viacheslav Miasoiedov',
  description: 'Some description',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-bg-main text-text-main p-5`}>
        {children}
      </body>
    </html>
  )
}
