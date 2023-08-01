import { ThemeProvider } from '../context/ThemeContext'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import './globals.css'
import { Inter, Dela_Gothic_One, Bodoni_Moda, Praise } from 'next/font/google'
import AuthProvider from './components/AuthProvider/AuthProvider'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Nai Blog',
  description: 'Practise Next Js 13.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <ThemeProvider>
            <div className='container'>
              <Navbar/>
              {children}
              <Footer/>
            </div>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
