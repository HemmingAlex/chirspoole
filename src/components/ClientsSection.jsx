import { useState, useRef, useEffect } from "react";
import FadeInList from "./FadeInList";
import Link from "next/link";
const CombinedClientsSection = ({ forBrand }) => {
  // State and refs for the sliding functionality
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const scrollRef = useRef(null);
  //phone
  const [touchX, setTouchX] = useState(0);

  //auto function
  const [autoScrollEnabled, setAutoScrollEnabled] = useState(true);
  const scrollSpeed = 1.7; // Pixels per frame - adjust this to control speed
  const animationFrameRef = useRef();

  const handleMouseEnter = () => setAutoScrollEnabled(true);
  const handleMouseLeave = () => setAutoScrollEnabled(true);

  useEffect(() => {
    const scroll = () => {
      if (scrollRef.current && autoScrollEnabled) {
        scrollRef.current.scrollLeft += scrollSpeed;

        // Reset scroll position when reaching the end to create infinite scroll effect
        if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth / 2) {
          scrollRef.current.scrollLeft = 0;
        }

        animationFrameRef.current = requestAnimationFrame(scroll);
      }
    };

    animationFrameRef.current = requestAnimationFrame(scroll);

    // Cleanup function
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [autoScrollEnabled]);

  // Our comprehensive client list
  const clients = [
    {
      name: "Emirates Palace Abu Dhabi",
      url: "https://www.mandarinoriental.com/abu-dhabi/emirates-palace",
      size: null,
      logo: "/EmiratesPalace.svg",
    },
    {
      name: "Grand Hyatt Dubai",
      url: "https://www.hyatt.com/grand-hyatt/en-US/dxbgh-grand-hyatt-dubai",
      size: null,
      logo: "/Hyatt_Logo.png",
    },
    {
      name: "Formula 1",
      url: "https://www.formula1.com",
      size: null,
      logo: "/F1.svg",
    },
    {
      name: "Hilton Abu Dhabi",
      url: "https://www.hilton.com/en/hotels/auhyihi-hilton-abu-dhabi-yas-island/",
      size: null,
      logo: "/HiltonHotelsLogo.png",
    },
    {
      name: "Kempinski Djibouti",
      url: "https://www.kempinski.com/djibouti",
      size: null,
      logo: "/Kempinski_Logo_2015.png",
    },
    {
      name: "Aston Villa FC",
      url: "https://www.avfc.co.uk",
      size: null,
      logo: "/aston-villa.svg",
    },
    {
      name: "Cadbury World",
      url: "https://www.cadburyworld.co.uk",
      size: null,
      logo: "/cadbury-logo.svg",
    },
    {
      name: "BBC TV",
      url: "https://www.bbc.co.uk/tv",
      size: null,
      logo: "/BBC.svg",
    },
    {
      name: "ITV",
      url: "https://www.itv.com",
      size: null,
      logo: "/ITV.svg",
    },
    {
      name: "Melbourne Cup",
      url: "https://www.vrc.com.au/",
      size: null,
      logo: null,
    },
    {
      name: "Leicester City FC",
      url: "https://www.lcfc.com",
      size: null,
      logo: "/LeicesterCity.svg",
    },
    {
      name: "Manchester United FC",
      url: "https://www.manutd.com",
      size: null,
      logo: "/ManchesterUnited.svg",
    },
    {
      name: "Hyatt Regency Dubai",
      url: "https://www.hyatt.com/regency/dubai",
      size: null,
      logo: "/hyatt-regency-1.svg",
    },
    {
      name: "Belfry Hotel & Resort",
      url: "https://www.thebelfry.com",
      size: null,
      logo: "/belfry-hotel-logo.png",
    },
    {
      name: "Moor Hall Hotel & Spa",
      url: "https://www.moorhallhotel.co.uk",
      size: null,
      logo: null,
    },
    {
      name: "Harley Davidson",
      url: "https://www.harley-davidson.com",
      size: null,
      logo: "/harley-davidson-9.svg",
    },
  ];

  console.log(JSON.stringify(clients, null, 2));
  // Double the list for smooth infinite scrolling
  const repeatedClients = [...clients, ...clients];

  // Drag handlers for the sliding bar
  const handleMouseDown = (e) => {
    setAutoScrollEnabled(false);
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = x - startX;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setAutoScrollEnabled(true);
  };
  const handleTouchStart = (e) => {
    setAutoScrollEnabled(false);
    setIsDragging(true);
    setTouchX(e.touches[0].pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    if (e.cancelable) {
      e.preventDefault();
    }
    e.preventDefault();
    const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
    const walk = x - touchX;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    setAutoScrollEnabled(true);
  };
  return (
    <section className={`${forBrand ? "bg-white" : "bg-white"}`}>
      <div className={`w-full py-20 ${forBrand ? "bg-white" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black">OUR CLIENTS:</h2>
          </div>

          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="text-xl leading-relaxed">
              <FadeInList clients={clients.map((client) => client.name)} />
            </div>
            <p className="text-gray-600 italic mt-4">To Name a few...</p>
          </div>

          <div className="relative bg-gray-400">
            <div
              className={`absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r ${"from-white"} to-transparent z-10`}
            />
            <div
              className={`absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l ${"from-white"} to-transparent z-10`}
            />

            <div
              ref={scrollRef}
              className={`overflow-x-scroll scrollbar-hide cursor-grab border-y-2 ${
                forBrand ? "border-gray-200" : "border-gray-700"
              } border-double pt-1`}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{
                WebkitOverflowScrolling: "touch",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              <div
                className={`inline-flex items-center space-x-8 py-4 ${
                  isDragging ? "cursor-grabbing" : ""
                }`}
              >
                {repeatedClients.map((client, index) =>
                  forBrand ? (
                    <Link
                      target="_blank"
                      href={client?.url}
                      key={index}
                      className="flex-shrink-0 text-xl text-gray-600 hover:text-purple-900 transition-colors whitespace-nowrap px-4"
                    >
                      {client?.name}
                    </Link>
                  ) : client.logo ? (
                    <Link
                      target="_blank"
                      href={client?.url}
                      key={index}
                      className="flex flex-col items-center justify-between h-72 px-4 flex-shrink-0"
                    >
                      <div className="flex items-center justify-center h-72">
                        <img
                          src={`/assets/ClientBrands${client.logo}`}
                          alt={client.name}
                          className={`max-h-72 w-auto object-contain min-w-[220px] ${
                            client.size === "small"
                              ? "max-w-[220px]"
                              : "max-w-[260px]"
                          }`}
                        />
                      </div>
                      <div className="text-lg text-center text-gray-600 mt-2">
                        {client.name}
                      </div>
                    </Link>
                  ) : null
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CombinedClientsSection;
