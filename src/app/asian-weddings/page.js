"use client";
import React, { useState, useEffect } from "react";
import YouTubePlayer from "../../components/MutableYotubePlayer";
import { motion } from "framer-motion";

const ServiceSection = ({ title, isVisible, children, imageUrls = [] }) => (
  <motion.section
    initial={{ opacity: 0, y: 50 }}
    animate={isVisible ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.6 }}
    className="py-16 bg-white"
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="grid grid-cols-2 gap-4">
          {imageUrls.map((url, index) => (
            <div
              key={index}
              className="aspect-square rounded-lg overflow-hidden"
            >
              <img
                src="/assets/Chris.jpg"
                alt="Wedding service"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-6 text-purple-800">{title}</h2>
          {children}
        </div>
      </div>
    </div>
  </motion.section>
);

export default function WeddingsPage() {
  const [muted, setMuted] = useState("1");
  const [visibleSections, setVisibleSections] = useState({
    ceremony: false,
    reception: false,
    dinner: false,
    evening: false,
  });
  const videoId = "CZVKTBY3tNk";

  useEffect(() => {
    const handleScroll = () => {
      const sections = {
        ceremony: document.getElementById("ceremony"),
        reception: document.getElementById("drinks-reception"),
        dinner: document.getElementById("dinner"),
        evening: document.getElementById("evening-party"),
      };

      Object.entries(sections).forEach(([key, section]) => {
        if (section) {
          const rect = section.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight * 0.75;
          setVisibleSections((prev) => ({ ...prev, [key]: isVisible }));
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/30 z-10" />
        <YouTubePlayer
          videoId={videoId}
          muted={muted}
          onMuteChange={(newMutedState) => setMuted(newMutedState)}
        />
      </section>

      {/* Service Sections */}
      <div id="ceremony">
        <ServiceSection
          title="CEREMONY"
          isVisible={visibleSections.ceremony}
          imageUrls={[1, 2, 3, 4]}
        >
          <p className="text-gray-600">Professional ceremony content here...</p>
        </ServiceSection>
      </div>

      <div id="drinks-reception">
        <ServiceSection
          title="DRINKS RECEPTION"
          isVisible={visibleSections.reception}
          imageUrls={[1, 2, 3, 4]}
        >
          <p className="text-gray-600">Drinks reception content here...</p>
        </ServiceSection>
      </div>

      <div id="dinner">
        <ServiceSection
          title="DINNER"
          isVisible={visibleSections.dinner}
          imageUrls={[1, 2, 3, 4]}
        >
          <p className="text-gray-600">Dinner entertainment content here...</p>
        </ServiceSection>
      </div>

      <div id="evening-party">
        <ServiceSection
          title="EVENING PARTY"
          isVisible={visibleSections.evening}
          imageUrls={[1, 2, 3, 4]}
        >
          <p className="text-gray-600">Evening party content here...</p>
        </ServiceSection>
      </div>

      {/* Prestige Clients Section */}
      <section className="py-20 bg-gradient-to-r from-purple-800 to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Our Prestige Clients
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="aspect-square bg-white rounded-lg shadow-lg p-4"
              >
                <div className="w-full h-full flex items-center justify-center">
                  <img
                    src="/assets/Chris.jpg"
                    alt={`Client ${i}`}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
