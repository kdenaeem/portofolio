//  Root component of the app
import './globals.css'
import { Inter } from 'next/font/google'
import Header from '../../components/header'
import ActiveSectionContextProvider from '../../context/active_context'

const inter = Inter({ subsets: ['latin'] })

// The 
export const metadata = {
  title: 'Naeem Personal Portofolio',
  description: 'A motivated and creative University Student hoping to create in a world full of consumers',
} 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='!scroll-smooth'>
      <body className={`${inter.className} bg-gray-50 text-gray-950 relative h-[5000px] pt-28 sm:pt-36 ` }>
      <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
      <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
        
        <ActiveSectionContextProvider>
        <Header />
        {children}  
        </ActiveSectionContextProvider>
        </body>
    </html>
  )
}
