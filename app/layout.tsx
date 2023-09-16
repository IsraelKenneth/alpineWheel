import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Alpine Wheels',
  description: 'Your Swiss destination for premium car sales and rentals. Explore the Swiss Alps in style with our exquisite fleet of vehicles',
}

export default function RootLayout({children, }: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body> {children}</body>
    </html>
  )
}
