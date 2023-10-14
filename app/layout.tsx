import { Navbar, Footer } from '@/components'
import './globals.css'
import type { Metadata } from 'next'





export const metadata: Metadata = {
  title: 'Voiture hub',
  description: 'Devouvrir les meilleurs voitures dans le monde!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={'relative'}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
