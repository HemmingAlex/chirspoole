import { useState, useRef } from "react";

const CombinedClientsSection = () => {
  // State and refs for the sliding functionality
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const scrollRef = useRef(null);

  // Our comprehensive client list
  const clients = [
    "Emirates Palace Abu Dhabi",
    "Grand Hyatt Dubai",
    "Formula 1",
    "Hilton Abu Dhabi",
    "Kempinski Djibouti",
    "Aston Villa FC",
    "Cadbury World",
    "BBC TV",
    "ITV",
    "Melbourne Cup",
    "Leicester City FC",
    "Manchester United FC",
    "Hyatt Regency Dubai",
    "Belfry Hotel & Resort",
    "Moor Hall Hotel & Spa",
    "Harley Davidson",
  ];

  // Double the list for smooth infinite scrolling
  const repeatedClients = [...clients, ...clients];

  // Drag handlers for the sliding bar
  const handleMouseDown = (e) => {
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
  };

  return (
    <section className="py-20 bg-purple-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="text-center mb-12">
          <img
            src="/assets/shades.svg"
            alt="Shades Music School"
            className="h-12 mx-auto mb-8"
          />
        </div>
        {/* Clients Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-orange-500">OUR CLIENTS:</h2>
        </div>
        {/* Static Client List */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-xl leading-relaxed">{clients.join(", ")}</p>
          <p className="text-gray-600 italic mt-4">To Name a few...</p>
        </div>
        {/* Decorative Divider */}
        {/* <div className="flex justify-center items-center space-x-4 mb-16">
          <div className="w-16 h-0.5 bg-gray-300"></div>
          <div className="w-16 h-0.5 bg-blue-600"></div>
          <div className="w-16 h-0.5 bg-gray-300"></div>
        </div> */}
        {/* Interactive Sliding Bar */}
        sliding bar thingy made yesterday
        <div className="relative">
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-purple-500 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-purple-500 to-transparent z-10"></div>

          {/* Draggable content */}
          <div
            ref={scrollRef}
            className="overflow-x-scroll scrollbar-hide cursor-grab"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
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
              {repeatedClients.map((client, index) => (
                <span
                  key={index}
                  className="flex-shrink-0 text-xl text-gray-600 hover:text-blue-600 transition-colors whitespace-nowrap px-4"
                >
                  {client}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CombinedClientsSection;
