import './globals.scss'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Title',
  description: 'Description',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="icon"
          href="/favicon.ico"
          sizes="any"
        />
      </Head>
      <body className={`${inter.className} bg-bg-main p-5 text-text-main`}>
        {children}
      </body>
    </html>
  )
}
