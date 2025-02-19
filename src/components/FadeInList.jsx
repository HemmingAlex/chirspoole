import React, { useState, useEffect, useRef } from "react";

const AnimatedClientsList = ({ clients }) => {
  const [visibleClients, setVisibleClients] = useState([]);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          // Start animation sequence
          clients.forEach((_, index) => {
            setTimeout(() => {
              setVisibleClients((prev) => [...prev, index]);
            }, index * 200); // 200ms delay between each client
          });
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.3, // Triggers when 30% of the element is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [clients, hasAnimated]);

  return (
    <div ref={sectionRef} className="max-w-4xl mx-auto text-cente text-black">
      <div className="text-xl leading-relaxed">
        {clients.map((client, index) => (
          <span
            key={index}
            className={`font-semibold transition-opacity duration-500 ${
              visibleClients.includes(index) ? "opacity-100" : "opacity-0"
            }`}
          >
            {index > 0 ? <> &nbsp; &#8226; &nbsp; </> : ""}
            {client}
          </span>
        ))}
      </div>
    </div>
  );
};

export default AnimatedClientsList;
