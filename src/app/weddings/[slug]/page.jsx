"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

// This array should be imported from your main data file
// or fetched from an API in a real application
const valuesArray = [
  {
    title: "Cultural Expertise",
    description:
      "We understand and honor the traditions that make Asian weddings unique and special.",
  },
  {
    title: "Custom Experiences",
    description:
      "Each performance is tailored to create the perfect atmosphere for your special event.",
  },
  {
    title: "World-Class Musicians",
    description:
      "We bring together the finest performers to deliver exceptional musical experiences.",
  },
  {
    title: "Full-Service Events",
    description:
      "From traditional ceremonies to modern celebrations, we provide comprehensive entertainment solutions.",
  },
];

function SlideShow() {
  const images = ["/assets/Jack.jpg", "/assets/Chris.jpg", "/assets/Kamil.jpg"];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate the slideshow every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-96 md:h-screen rounded-lg overflow-hidden">
      {images.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentIndex === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={src}
            alt={`Slide ${index + 1}`}
            fill
            style={{ objectFit: "cover" }}
            priority={index === 0}
          />
        </div>
      ))}

      {/* Navigation dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index
                ? "bg-orange-600"
                : "bg-gray-300 dark:bg-gray-600"
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Page({ params }) {
  const { slug } = params;

  // Find the matching service based on the slug
  const service = valuesArray.find(
    (item) => item.title.replace(" ", "-").toLowerCase() === slug.toLowerCase()
  );

  // Fallback content if the slug doesn't match any service
  const title = service?.title || "Service Not Found";
  const description =
    service?.description ||
    "The requested service information could not be found.";

  return (
    <div className=" mx-auto   bg-white dark:bg-gray-900">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Slideshow on the left */}
        <div className="rounded-lg shadow-md overflow-hidden">
          <SlideShow />
        </div>

        {/* Title and description on the right */}
        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100">
            {title}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
