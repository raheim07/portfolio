import type { Metadata, Viewport } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _inter = Inter({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: 'Raheim Hoilett | Junior Data Engineer',
  description: 'Portfolio of Raheim Hoilett — Junior Data Engineer specializing in data pipelines, ETL processes, and cloud-based data solutions.',
  generator: 'v0.app',
  icons: {
    icon: "/favicon.ico", // just one favicon
  },
}

export const viewport: Viewport = {
  themeColor: '#33415C',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
