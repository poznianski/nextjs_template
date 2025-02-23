import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from 'react'

import { CONSTANTS } from '@/app/utils/constants'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(CONSTANTS.SITE_URL),
  title: {
    default: 'Example Title',
    template: '%s | Addition',
  },
  description: 'example description',
  icons: {
    icon: '/images/icons/favicon.ico',
  },
  openGraph: {
    type: 'website',
    url: CONSTANTS.SITE_URL,
    siteName: 'Example',
    images: [
      {
        url: `${CONSTANTS.SITE_URL}/images/opengraph-image.png`,
        alt: CONSTANTS.SITE_URL,
      },
    ],
  },
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${inter.className} min-h-screen`}
    >
      <body className="theme-modern mb-10 overflow-y-scroll text-text-primary">
        {children}
      </body>
    </html>
  )
}
