import { X } from "lucide-react";
import Link from "next/link";

const MobileNavigation = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-0 bg-black/95 z-40 transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-end px-4 pt-6">
        <button
          onClick={onClose}
          className="text-white p-2 rounded-md hover:bg-gray-700/50 transition-colors"
          aria-label="Close menu"
        >
          <X className="h-6 w-6" />
        </button>
      </div>

      <div className="h-screen flex items-center justify-center  text-3xl">
        <div className="flex flex-col items-center relative bottom-20 space-y-3">
        <div
            className="text-purple-600 font-semibold px-3 py-2 rounded-md  transition-colors text-[8vw] sm:text-[6vw] md:text-[3vw] lg:text-[2vw] xl:text-[2vw]"
          >
            Menu
          </div>
          
          <Link
            href="/"
            className="text-white font-semibold px-3 py-2 rounded-md hover:bg-gray-700/50 transition-colors text-[8vw] sm:text-[6vw] md:text-[3vw] lg:text-[2vw] xl:text-[2vw]"
            onClick={onClose}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-white font-semibold px-3 py-2 rounded-md hover:bg-gray-700/50 transition-colors text-[8vw] sm:text-[6vw] md:text-[3vw] lg:text-[2vw] xl:text-[2vw]"
            onClick={onClose}
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className="text-white font-semibold px-3 py-2 rounded-md hover:bg-gray-700/50 transition-colors text-[8vw] sm:text-[6vw] md:text-[3vw] lg:text-[2vw] xl:text-[2vw]"
            onClick={onClose}
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileNavigation;