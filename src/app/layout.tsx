import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import ThemeProvider from '@/components/ThemeProvider/ThemeProvider'
import './globals.css'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  style: ["italic", "normal"],
  variable: "--font-poppins"
 })

export const metadata: Metadata = {
  title: 'Hotel Management App',
  description: 'Discover the best hotels in Yendi',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ThemeProvider>
        <main className='font-normal'>
          <Header />
          {children}
         <Footer />
        </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
