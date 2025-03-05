"use client";
import "./globals.css";
import SocialIcons from "../components/SocialIocons";
import { useState, useEffect } from "react";
import Socials from "../components/SocialBar ";
import { Lato } from "next/font/google";
// import { Menu } from "lucide-react";
import MobileNavigation from "../components/MobileNavigation";
// import { usePathname } from "next/navigation";
import TL from "../components/NavigationTransition"

const lato = Lato({
  subsets: ["latin"],
  weight: ["400"], // Note: weight should be in an array
  display: "swap",
  variable: "--font-lato", // Add this to use as a CSS variable
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // const pathname = usePathname();
  // const isHomePage = pathname === "/";
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
    <html lang="en" className={`${lato.className} ${lato.variable}`}>

      <body className="min-h-screen">
        <SocialIcons />
        <nav
          className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
            isScrolled
              ? "bg-white wblack shadow-md"
              : "bg-transparent wwhite"
          }`}
          >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-20 items-center">
              <div className="flex-shrink-0">
                <TL href="/" className="wxl font-bold ">
                  {!isScrolled ? (
                    <><img
                    src="/assets/extract/w/Shades_music_logo_newhat_0225HD_12.svg"
                    alt="Band performance"
                    className="h-24 py-2"
                    /></>
                  ) : (
                    // <img
                    //   src="/assets/extract/w/Shades_music_logo_newhat_0225HDfinal_whitetrans.svg"
                    //   alt="Band performance"
                    //   className="h-24 py-2"
                    // />
                    <img
                    src="/assets/extract/w/Shades_music_logo_newhat_0225HDfinal4.png"
                    alt="Band performance"
                    className="h-24 py-2"
                    />
                  )}
                </TL>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden 3xl:block">
                <div className="ml-10 flex items-center space-x-4">
                  <TL
                    href="/"
                    className=" hover:text-gray-300 px-3 py-2 rounded-md"
                    >
                    Home
                  </TL>
                  <TL
                    href="/about"
                    className=" hover:text-gray-300 px-3 py-2 rounded-md"
                    >
                    About Us
                  </TL>
                  {/* <TL
                    href="/weddings"
                    className=" hover:text-gray-300 px-3 py-2 rounded-md"
                    >
                    Weddings
                    </TL>
                    <TL
                    href="/corporate"
                    className=" hover:text-gray-300 px-3 py-2 rounded-md"
                    >
                    Corporate
                    </TL>
                    <TL
                    href="/entertainment"
                    className=" hover:text-gray-300 px-3 py-2 rounded-md"
                    >
                    Entertainment
                    </TL> */}

                  <TL
                    href="/contact"
                    className=" hover:text-gray-300 px-3 py-2 rounded-md"
                    >
                    Contact
                  </TL>
                </div>
              </div>

              {/* Mobile menu button */}
              <div className="">
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className={` ${
                    isScrolled ? "text-black" : "text-white"
                  } p-2 rounded-md hover:bg-gray-700/50 transition-colors`}
                  aria-label="Toggle menu"
                  >
                  {
                    isMobileMenuOpen ? <div /> : <>Menu</>
                    // #<Menu className="h-6 w-6" />
                  }
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <MobileNavigation
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
            />
        </nav>
        <main>
          {children}

        </main>
        <footer className="bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                <p>Email: info@shadesband.com</p>
                <p>Phone: 0044-7899-86577</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick TLs</h3>
                <ul className="space-y-2">
                  <li>
                    <TL href="/weddings" className="hover:text-gray-300">
                      Weddings
                    </TL>
                  </li>
                  <li>
                    <TL href="/corporate" className="hover:text-gray-300">
                      Corporate Events
                    </TL>
                  </li>
                  <li>
                    <TL href="/entertainment" className="hover:text-gray-300">
                      Entertainment
                    </TL>
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
