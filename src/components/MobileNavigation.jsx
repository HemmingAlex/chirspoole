import { X } from "lucide-react";
import { usePathname } from "next/navigation";
import TL from "../components/NavigationTransition";

const MobileNavigation = ({ isOpen, onClose }) => {
  const pathname = usePathname();

  const menuItems = [
    { href: "/weddings", label: "Wedding" },
    { href: "/corporate-parties", label: "Corporate/Parties" },
    { href: "/asian-weddings", label: "Asian Wedding" },
    { href: "/jewish-weddings", label: "Jewish Wedding/Bar Mitzva" },
    { href: "/funerals", label: "Funerals" },
    { href: "/proposals", label: "Proposals" },
    { href: "/videos", label: "Videos" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

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

      <div className="h-screen flex items-center justify-center">
        <div className="flex flex-col items-center relative bottom-10 space-y-2">
          <div
            onClick={onClose}
            className="text-orange-600 font-semibold px-3 py-2 rounded-md transition-colors text-[7vw] sm:text-[5vw] md:text-[2.5vw] lg:text-[1.8vw] xl:text-[1.8vw] mb-2"
          >
            <TL href="/">Menu</TL>
          </div>

          {menuItems.map((item) => (
            <TL key={item.href} href={item.href}>
              <div
                onClick={onClose}
                className={`font-semibold px-3 py-0.5 rounded-md hover:bg-gray-700/50 transition-colors text-[6vw] sm:text-[4vw] md:text-[2.2vw] lg:text-[1.5vw] xl:text-[1.5vw] w-full text-center ${
                  pathname === item.href ? "text-blue-400" : "text-white"
                }`}
              >
                {item.label}
              </div>
            </TL>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileNavigation;
