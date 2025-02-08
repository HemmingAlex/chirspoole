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
  const scrollSpeed = 4; // Pixels per frame - adjust this to control speed
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
      logo: "/EmiratesPalace.svg",
    },
    {
      name: "Grand Hyatt Dubai",
      url: "https://www.hyatt.com/grand/dubai",
      logo: "/Hyatt_Logo.PNG",
    },
    {
      name: "Formula 1",
      url: "https://www.formula1.com",
      logo: "/F1.svg",
    },
    {
      name: "Hilton Abu Dhabi",
      url: "https://www.hilton.com/en/hotels/auhyihi-hilton-abu-dhabi-yas-island/",
      logo: "/HiltonHotelsLogo.PNG",
    },
    {
      name: "Kempinski Djibouti",
      url: "https://www.kempinski.com/djibouti",
      logo: "/Kempinski_Logo_2015.PNG",
    },
    {
      name: "Aston Villa FC",
      url: "https://www.avfc.co.uk",
      logo: "/aston-villa.svg",
    },
    {
      name: "Cadbury World",
      url: "https://www.cadburyworld.co.uk",
      logo: "/cadbury-logo.svg",
    },
    {
      name: "BBC TV",
      url: "https://www.bbc.co.uk/tv",
      logo: "/BBC.svg",
    },
    {
      name: "ITV",
      url: "https://www.itv.com",
      logo: "/ITV.svg",
    },
    {
      name: "Melbourne Cup",
      url: "https://www.vrc.com.au/",
      logo: null,
    },
    {
      name: "Leicester City FC",
      url: "https://www.lcfc.com",
      logo: "/LeicesterCity.svg",
    },
    {
      name: "Manchester United FC",
      url: "https://www.manutd.com",
      logo: "/ManchesterUnited.svg",
    },
    {
      name: "Hyatt Regency Dubai",
      url: "https://www.hyatt.com/regency/dubai",
      logo: "/hyatt-regency-1.svg",
    },
    {
      name: "Belfry Hotel & Resort",
      url: "https://www.thebelfry.com",
      logo: "/belfry-hotel-logo.PNG",
    },
    {
      name: "Moor Hall Hotel & Spa",
      url: "https://www.moorhallhotel.co.uk",
      logo: null,
    },
    {
      name: "Harley Davidson",
      url: "https://www.harley-davidson.com",
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
    <section
      className={`${forBrand ? "bg-white" : "bg-gray-300"}`}
      // style={{
      //   backgroundImage: `url('https://images.unsplash.com/photo-1530432999454-016a47c78af3?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
      // }}
    >
      <div
        className={`w-full py-20  h-ful  ${
          forBrand ? "bg-white" : "bg-gray-300"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          {/* <div className="text-center mb-12">
          <img
            src="/assets/logos/BlackL.jpg"
            alt="Shades Music School"
            className="h-96 mx-auto mb-8"
          />
        </div> */}
          {/* Clients Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-orange-500">OUR CLIENTS:</h2>
          </div>
          {/* Static Client List */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-xl leading-relaxed">
              <FadeInList clients={clients.map((client) => client.name)} />
            </p>
            <p className="text-gray-600 italic mt-4">To Name a few...</p>
          </div>
          {/* Decorative Divider */}
          {/* <div className="flex justify-center items-center space-x-4 mb-16">
          <div className="w-16 h-0.5 bg-gray-300"></div>
          <div className="w-16 h-0.5 bg-blue-600"></div>
          <div className="w-16 h-0.5 bg-gray-300"></div>
        </div> */}
          {/* Interactive Sliding Bar */}
          <div className="relative">
            {/* Left gradient overlay */}
            {/* <div
              className={`absolute left-0 top-0 bottom-0 w-32 z-10`}
              style={{
                background: `linear-gradient(to right, ${
                  !forBrand
                    ? "rgba(107, 114, 128, 0.9)" // gray-300 with 90% opacity
                    : "rgba(255, 255, 255, 0.9)" // white with 90% opacity
                }, transparent)`,
              }}
            ></div> */}

<div
  className={`absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r ${
    !forBrand ? "from-gray-300" : "from-white"
  } to-transparent z-10`}
></div>

            {/* Right gradient overlay */}
            {/* <div
              className={`absolute right-0 top-0 bottom-0 w-32 z-10`}
              style={{
                background: `linear-gradient(to left, ${
                  !forBrand
                    ? "rgba(107, 114, 128, 0.9)" // gray-300 with 90% opacity
                    : "rgba(255, 255, 255, 0.9)" // white with 90% opacity
                }, transparent)`,
              }}
            ></div> */}

<div
  className={`absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l ${
    !forBrand ? "from-gray-300" : "from-white"
  } to-transparent z-10`}
></div>

            {/* Draggable content */}
            <div
              ref={scrollRef}
              className={`overflow-x-scroll scrollbar-hide cursor-grab border-y-2 ${
                forBrand ? "border-gray-200 " : "border-gray-700 "
              } border-double pt-1 mt-2`}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              // onMouseLeave={handleMouseUp}
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
                className={`inline-flex space-x-8 py-4 ${
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
                  ) : (
                    <Link
                      target="_blank"
                      href={client?.url}
                      key={index}
                      className={`flex-shrink-0 text-xl text-gray-600 hover:text-purple-900 transition-colors whitespace-nowrap ${
                        client?.logo ? "w-fit h-32 px-4" : "hidden w-0" 
                      }text-black`}
                    >
                      <img
                        src={`/assets/ClientBrands${client.logo}`}
                        className={client?.logo ? "w-fit h-32 text-black fill-black " : "hidden"}
                      />
                    </Link>
                  )
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
