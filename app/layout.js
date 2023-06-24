

import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/Navbar/Header'
import Navbar from '@/components/Navbar/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Baazar',
  description: 'This is a grocery shopping app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <Navbar />
        {children}
      </body>
    </html>
  )
}
