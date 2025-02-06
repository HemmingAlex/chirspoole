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
      src: "https://plus.unsplash.com/premium_photo-1722100465701-e2dc133af13d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Live performance",
      delay: 0,
      text: "Over 1000 shows performed worldwide",
    },
    {
      src: "https://images.unsplash.com/photo-1534534502714-2828e7c540d0?q=80&w=1994&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Band performance",
      delay: 200,
      text: "Each Show tailor-made for your special event",
    },
    {
      src: "https://images.unsplash.com/photo-1601182207230-1b165dea2212?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Event atmosphere",
      delay: 400,
      text: "The best musicians and performers in collaboration on the planet",
    },
    {
      src: "https://images.unsplash.com/photo-1610159935613-61896c2d1237?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Musicians playing",
      delay: 600,
      text: "100% Live No pretending or miming",
    },
  ];

  return (
    <div className="relative">
      <StaggeredReveal delay={500}>
        <div className="aspect-square  absolute bottom-1/4 left-1/4 w-1/2 rounded-lg ">
          {/* <img
            src="https://images.unsplash.com/photo-1618967784217-b45e5ee5b57f?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Live performance"
            className="w-full h-full object-cover"
          /> */}
          {/* Text overlay for the centered image */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-orange-600 shadow-lg w-96 h-36 flex items-center  z-10 px-4 py-2 rounded-lg">
              <span className="text-center flex font-bold text-white">
                Full Entertainment for Ceremonies/Drinks
                Reception/Dinner/Evening Parties
              </span>
            </div>
          </div>
        </div>
      </StaggeredReveal>
      <div className="grid grid-cols-2 gap-4">
        {images.map((image, index) => (
          <StaggeredReveal key={index} delay={image.delay}>
            <div className="aspect-square m-10  rounded-lg  relative">
              {/* Image layer */}
              {/* <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              /> */}
              {/* Text overlay layer */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-orange-600 shadow-lg w-96 h-36 flex items-center z-10 px-4 py-2 rounded-lg ">
                  <span className="text-center flex font-bold text-white">
                    {image.text}
                  </span>
                </div>
              </div>
            </div>
          </StaggeredReveal>
        ))}
      </div>
    </div>
  );
};

export default StaggeredImageGrid;
