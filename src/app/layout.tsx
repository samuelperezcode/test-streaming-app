import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import Header from '@/components/header/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Telenique',
  description: 'Developed by NTSprint',
  icons: '/images/favicon.ico'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <html lang='en'>
      <body className={`${inter.className} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
