import React, { useState, useEffect } from 'react';

const TransitionWrapper = ({ children }) => {
  // Start with the overlay visible
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Small delay before starting the fade out
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      {/* The main content */}
      {children}

      {/* The overlay that fades out */}
      <div 
        className={`fixed inset-0 bg-black z-50 transition-opacity duration-1000 ease-out pointer-events-none ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
};

export default TransitionWrapper;