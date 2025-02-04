"use client"
// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SocialIcons from '../components/SocialIocons'
import Link from "next/link";
import { useState, useEffect } from 'react'

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });



// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isScrolled, setIsScrolled] = useState(false)


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])



  return (
    <html lang="en">
      <body className="min-h-screen">
        <SocialIcons />
        <nav className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
          isScrolled ? 'bg-gray-400 text-black shadow-md' : 'bg-transparent'
        }`}>          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-20 items-center">
              <div className="flex-shrink-0">
                <Link href="/" className="text-xl font-bold text-white">
                  <img src="/assets/shades.svg" alt="Shades Music School" className="h-8" />
                </Link>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-center space-x-4">
                  <Link href="/" className="text-white hover:text-gray-300 px-3 py-2 rounded-md">
                    Home
                  </Link>
                  <Link href="/weddings" className="text-white hover:text-gray-300 px-3 py-2 rounded-md">
                    Weddings
                  </Link>
                  <Link href="/corporate" className="text-white hover:text-gray-300 px-3 py-2 rounded-md">
                    Corporate
                  </Link>
                  <Link href="/entertainment" className="text-white hover:text-gray-300 px-3 py-2 rounded-md">
                    Entertainment
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
        
        <main>
          {children}
        </main>
        
        <footer className="bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                <p>Email: info@yourbrand.com</p>
                <p>Phone: (123) 456-7890</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><Link href="/weddings" className="hover:text-gray-300">Weddings</Link></li>
                  <li><Link href="/corporate" className="hover:text-gray-300">Corporate Events</Link></li>
                  <li><Link href="/entertainment" className="hover:text-gray-300">Entertainment</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <Link href="#" className="hover:text-gray-300">Facebook</Link>
                  <Link href="#" className="hover:text-gray-300">Instagram</Link>
                  <Link href="#" className="hover:text-gray-300">Twitter</Link>
                </div>
              </div>
            </div>
            <div className="mt-8 border-t border-gray-800 pt-8 text-center">
              <p>&copy; {new Date().getFullYear()} Your Brand. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}