import './globals.css'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import MyHeader from './components/my_header'
import "./theme.css";     
import "./additions.css"
import "./jtbIcons_v1.1/jtbIB.css"
import "./jtbIcons_v1.1/jtbIL.css"
import "primereact/resources/primereact.min.css";
import 'primeicons/primeicons.css';
import ZplFooter from './components/zpl_footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PiotrZPLBuilds',
  description: 'Download custom ROMs made by PiotrZPL',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='relative min-h-screen'>
          <MyHeader/>
          {children}
          <ZplFooter/>
        </div>
      </body>
    </html>
  )
}
