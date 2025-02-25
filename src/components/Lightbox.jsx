'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram } from 'lucide-react';

const Lightbox = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  
  // If no images are provided, use a default placeholder
  const displayImages = images && images.length > 0 
    ? images 
    : [
        { id: 1, url: '/assets/Chris.jpg', alt: 'Service 1' },
        { id: 2, url: '/assets/Jack.jpg', alt: 'Service 2' },
        { id: 3, url: '/assets/Kamil.jpg', alt: 'Service 3' },
        { id: 4, url: '/assets/Paul.jpg', alt: 'Service 4' },
      ];
  
  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };
  
  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      {/* Grid of images */}
      {displayImages.map((image, index) => (
        <motion.div
          key={image.id || index}
          layoutId={`service-image-${image.id || index}`}
          className="aspect-square rounded-lg overflow-hidden cursor-pointer"
          onClick={() => openLightbox(image)}
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.2 }}
        >
          <img
            src={image.url || image}
            alt={image.alt || `Service ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </motion.div>
      ))}
      
      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.15 } }}
            className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.button
              className="absolute top-4 right-4 text-white p-2 z-10 hover:bg-gray-800 rounded-full"
              onClick={closeLightbox}
              whileHover={{ scale: 1.1 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>
            
            <motion.div
              layoutId={`service-image-${selectedImage.id || displayImages.indexOf(selectedImage)}`}
              className="relative max-w-4xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.url || selectedImage}
                alt={selectedImage.alt || 'Service image'}
                className="w-full h-auto max-h-screen object-contain rounded"
              />
            </motion.div>
            
            {/* Instagram link visible in lightbox */}
            <a 
              href="https://www.instagram.com/shadespartybandofficial/" 
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-6 flex items-center text-white hover:text-blue-300 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <Instagram className="mr-2" size={24} />
              <span className="font-medium">@shadespartybandofficial</span>
            </a>
            
            {/* Navigation arrows */}
            <div className="absolute inset-y-0 inset-x-0 flex items-center justify-between px-4">
              <motion.button
                className="text-white p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70"
                whileHover={{ scale: 1.1 }}
                onClick={(e) => {
                  e.stopPropagation();
                  const currentIndex = displayImages.findIndex(img => 
                    (img.id || displayImages.indexOf(img)) === (selectedImage.id || displayImages.indexOf(selectedImage)));
                  const prevIndex = (currentIndex - 1 + displayImages.length) % displayImages.length;
                  setSelectedImage(displayImages[prevIndex]);
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </motion.button>
              
              <motion.button
                className="text-white p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70"
                whileHover={{ scale: 1.1 }}
                onClick={(e) => {
                  e.stopPropagation();
                  const currentIndex = displayImages.findIndex(img => 
                    (img.id || displayImages.indexOf(img)) === (selectedImage.id || displayImages.indexOf(selectedImage)));
                  const nextIndex = (currentIndex + 1) % displayImages.length;
                  setSelectedImage(displayImages[nextIndex]);
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Lightbox;