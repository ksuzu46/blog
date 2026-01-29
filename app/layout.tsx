import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import '@/scss/styles.global.scss'

export const metadata: Metadata = {
  title: 'blog',
  description: 'my blog powered by next js',
  icons: {
    icon: [
      { url: '/favicon/favicon.png', type: 'image/png' },
      { url: '/favicon/favicon.ico', rel: 'shortcut icon' },
    ],
    apple: { url: '/favicon/apple-touch-icon.png', sizes: '180x180' },
  },
  manifest: '/favicon/site.webmanifest',
  other: {
    'msapplication-TileColor': '#000000',
    'msapplication-config': '/favicon/browserconfig.xml',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#000" />
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#000000" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
