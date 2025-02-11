"use client";
import React, { useState, useRef, useEffect } from "react";

const StaggeredReveal = ({ children, delay }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const scrollObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          setIsVisible(true);
        }, delay);
        scrollObserver.unobserve(entry.target);
      }
    });

    if (ref.current) {
      scrollObserver.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        scrollObserver.unobserve(ref.current);
      }
    };
  }, [delay]);

  const classes = `transition-opacity duration-1000 ${
    isVisible ? "opacity-100" : "opacity-0"
  }`;

  return (
    <div ref={ref} className={classes}>
      {children}
    </div>
  );
};

const StaggeredImageGrid = () => {
  const images = [
    {
      delay: 0,
      text: "Over 1000 shows performed worldwide",
    },
    {
      delay: 200,
      text: "Each Show tailor-made for your special event",
    },
    {
      delay: 400,
      text: "The best musicians and performers in collaboration on the planet",
    },
    {
      delay: 600,
      text: "100% Live No pretending or miming",
    },
  ];

  return (
    <div className="container mx-auto px-4">
      {/* Desktop Layout */}
      <div className="hidden md:block relative py-12">
        <div className="relative">
              {/* Centered box */}
              <StaggeredReveal delay={400}>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="bg-white shadow-lg border-2 border-black border-solid w-64 h-32 flex items-center justify-center rounded-lg">
                <span className="text-center font-bold text-black px-4">
                  Full Entertainment for Ceremonies/Drinks
                  Reception/Dinner/Evening Parties
                </span>
              </div>
            </div>
          </StaggeredReveal>
          {/* Grid layout for corner boxes */}
          <div className="grid grid-cols-2 gap-16">
            {images.map((image, index) => (
              <StaggeredReveal key={index} delay={image.delay}>
                <div className="aspect-square flex items-center justify-center">
                  <div className="bg-white shadow-lg border-2 border-black border-solid w-64 h-32 flex items-center justify-center rounded-lg">
                    <span className="text-center font-bold text-black px-4">
                      {image.text}
                    </span>
                  </div>
                </div>
              </StaggeredReveal>
            ))}
          </div>
          
      
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden py-8 space-y-6">
        <div className="flex justify-center px-4 mb-8">
          <div className="bg-white shadow-lg border-2 border-black border-solid px-4 py-3 rounded-lg">
            <span className="text-center font-bold text-black block">
              Full Entertainment for Ceremonies/Drinks
              Reception/Dinner/Evening Parties
            </span>
          </div>
        </div>

        <div className="space-y-4 px-4">
          {images.map((image, index) => (
            <div key={index} className="flex justify-center">
              <div className="bg-white shadow-lg border-2 border-black border-solid w-64 h-32 flex items-center justify-center rounded-lg">
                <span className="text-center font-bold text-black px-4">
                  {image.text}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StaggeredImageGrid;