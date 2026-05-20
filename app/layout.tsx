import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Kan Kaewkamol — UX/UI Designer & Developer',
  description: 'Portfolio of Kan Kaewkamol — UX/UI Designer and Developer specializing in interface design, mobile apps, chatbot UI, and AI-assisted content.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}