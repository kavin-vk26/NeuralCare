// In your layout.js (or wherever you set up global fonts)
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const montserrat = Montserrat({ subsets: ['latin'], weight: ['400','700'] })

export const metadata = {
  title: 'NeuralCare',
  description: 'Hareeshwar and Team',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Font Awesome CDN will go here (see below) */
        <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        integrity="sha512-pap0bNfQyA+Haqn0T8TpYcS7vmmcGcikYcUioE9eC0aR/y9bIUyhRe6GvtC/fMxeWG+N9z+SeM+XW/4n3jNefg=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
      }
      </head>
      <body className={`${inter.className} ${montserrat.className}`}>
        {children}
      </body>
    </html>
  )
}
