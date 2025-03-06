"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {valuesArray} from "./details"

// This array should be imported from your main data file

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
    <motion.div
      className="relative w-full h-96 md:h-screen rounded-lg overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      {images.map((src, index) => (
        <motion.div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentIndex === index ? "opacity-100" : "opacity-0"
          }`}
          initial={{ scale: currentIndex === index ? 1.1 : 1 }}
          animate={{ scale: currentIndex === index ? 1 : 1.1 }}
          transition={{ duration: 1 }}
        >
          <Image
            src={src}
            alt={`Slide ${index + 1}`}
            fill
            style={{ objectFit: "cover" }}
            priority={index === 0}
          />
        </motion.div>
      ))}

      {/* Navigation dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <motion.button
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index
                ? "bg-orange-600"
                : "bg-gray-300 dark:bg-gray-600"
            }`}
            onClick={() => setCurrentIndex(index)}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </motion.div>
  );
}

// Animation variants for staggered animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
      duration: 0.8,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
};

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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="mx-auto  bg-white dark:bg-gray-900"
    >
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Slideshow on the left */}
        <motion.div
          className="rounded-lg shadow-md overflow-hidden"
          variants={itemVariants}
        >
          <SlideShow />
        </motion.div>

        {/* Title and description on the right */}
        <motion.div
          className="space-y-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100"
            variants={itemVariants}
          >
            {title}
          </motion.h1>
          <motion.p
            className="text-lg text-gray-600 dark:text-gray-300"
            variants={itemVariants}
          >
            {description}
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
