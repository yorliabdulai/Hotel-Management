import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Header from '@/app/components/Header/Header';
import Footer from '@/app/components/Footer/Footer';
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
        <main className='font-normal'>
          <Header />
          {children}
         <Footer />
        </main>
      </body>
    </html>
  )
}
