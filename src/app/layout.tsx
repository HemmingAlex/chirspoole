"use client";
import "./globals.css";
import SocialIcons from "../components/SocialIocons";
import Link from "next/link";
import { useState, useEffect } from "react";
import Socials from "../components/SocialBar ";
import { Goudy_Bookletter_1911 } from 'next/font/google';
import { Menu, X } from "lucide-react";
import MobileNavigation from "../components/MobileNavigation"

const goudyFont = Goudy_Bookletter_1911({
  subsets: ['latin'],  // This is required
  weight: '400',
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when changing route
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [children]);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <html lang="en" className={goudyFont.className}>
      <body className="min-h-screen">
        <SocialIcons />
        <nav
          className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
            isScrolled ? "bg-black text-white shadow-md" : "bg-transparent"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-20 items-center">
              <div className="flex-shrink-0">
                <Link href="/" className="text-xl font-bold ">
                  <h1>logo</h1>

                </Link>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden 3xl:block">
                <div className="ml-10 flex items-center space-x-4">
                  <Link
                    href="/"
                    className=" hover:text-gray-300 px-3 py-2 rounded-md"
                  >
                    Home
                  </Link>
                  <Link
                    href="/about"
                    className=" hover:text-gray-300 px-3 py-2 rounded-md"
                  >
                    About Us
                  </Link>
                  {/* <Link
                    href="/weddings"
                    className=" hover:text-gray-300 px-3 py-2 rounded-md"
                  >
                    Weddings
                  </Link>
                  <Link
                    href="/corporate"
                    className=" hover:text-gray-300 px-3 py-2 rounded-md"
                  >
                    Corporate
                  </Link>
                  <Link
                    href="/entertainment"
                    className=" hover:text-gray-300 px-3 py-2 rounded-md"
                  >
                    Entertainment
                  </Link> */}

                  <Link
                    href="/contact"
                    className=" hover:text-gray-300 px-3 py-2 rounded-md"
                  >
                    Contact
                  </Link>
                </div>
              </div>

              {/* Mobile menu button */}
              <div className="">
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="text-white p-2 rounded-md hover:bg-gray-700/50 transition-colors"
                  aria-label="Toggle menu"
                >
                  {isMobileMenuOpen ? <div /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <MobileNavigation isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />

        </nav>
        <main>{children}</main>
        <footer className="bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                <p>Email: info@shadesband.com</p>
                <p>Phone: 07899865778</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/weddings" className="hover:text-gray-300">
                      Weddings
                    </Link>
                  </li>
                  <li>
                    <Link href="/corporate" className="hover:text-gray-300">
                      Corporate Events
                    </Link>
                  </li>
                  <li>
                    <Link href="/entertainment" className="hover:text-gray-300">
                      Entertainment
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <Socials />
                </div>
              </div>
            </div>
            <div className="mt-8 border-t border-gray-800 pt-8 text-center">
              <p>
                &copy; {new Date().getFullYear()} Shades Music. All rights
                reserved.
              </p>
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}
