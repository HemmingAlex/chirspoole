"use client";
import React, { useState, useEffect } from "react";
import YouTubePlayer from "../../components/MutableYotubePlayer";
import Lightbox from "../../components/Lightbox";
import { motion } from "framer-motion";

// const testimonialImages = [
//   "/assets/Chris.jpg",
//   "/assets/Jack.jpg",
//   "/assets/Kamil.jpg",
// ];

const ServiceSection = ({ title, isVisible, children }) => (
  <motion.section
    initial={{ opacity: 0, y: 50 }}
    animate={isVisible ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.6 }}
    className="py-16 bg-white"
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="grid grid-cols-2 gap-4">
          <Lightbox />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-6 text-purple-900">{title}</h2>
          {children}
        </div>
      </div>
    </div>
  </motion.section>
);

export default function FuneralServicesPage() {
  const [muted, setMuted] = useState("1");
  const [visibleSections, setVisibleSections] = useState({
    ceremony: false,
    prelude: false,
    tribute: false,
    postlude: false,
  });
  // A more appropriate funeral music video ID
  const videoId = "yK8tQPxzPAU"; // Example classical piano music

  useEffect(() => {
    const handleScroll = () => {
      const sections = {
        ceremony: document.getElementById("ceremony"),
        prelude: document.getElementById("prelude"),
        tribute: document.getElementById("tribute"),
        postlude: document.getElementById("postlude"),
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
        <div className="absolute inset-0 bg-black/50 z-10 flex flex-col items-center justify-center text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Respectful Musical Tributes
          </h1>
          <p className="text-xl text-white max-w-3xl mx-4">
            Our compassionate musicians provide meaningful musical accompaniment to 
            honor and celebrate the life of your loved one.
          </p>
        </div>
        <YouTubePlayer
          videoId={videoId}
          muted={muted}
          onMuteChange={(newMutedState) => setMuted(newMutedState)}
        />
      </section>

      {/* Service Sections */}
      <div id="ceremony">
        <ServiceSection
          title="FUNERAL CEREMONY"
          isVisible={visibleSections.ceremony}
        >
          <p className="text-gray-600 mb-4">
            Our professional musicians provide dignified and moving musical accompaniment 
            for funeral ceremonies. We work closely with you to select appropriate pieces 
            that honor your loved one's memory and provide comfort during this difficult time.
          </p>
          <p className="text-gray-600">
            We offer solo instrumentalists, vocalists, small ensembles, or full choirs 
            to match your preferences and the tone of the service.
          </p>
        </ServiceSection>
      </div>

      <div id="prelude">
        <ServiceSection
          title="PRELUDE MUSIC"
          isVisible={visibleSections.prelude}
        >
          <p className="text-gray-600">
            As guests arrive and gather, our musicians provide gentle, 
            comforting background music to create a reflective atmosphere. 
            Our prelude selections can include classical pieces, hymns, or 
            favorite songs of your loved one, creating a personal and 
            meaningful ambiance.
          </p>
        </ServiceSection>
      </div>

      <div id="tribute">
        <ServiceSection
          title="MUSICAL TRIBUTES"
          isVisible={visibleSections.tribute}
        >
          <p className="text-gray-600">
            A musical tribute can be one of the most touching moments in a funeral service. 
            Whether it's performing a loved one's favorite song, a meaningful hymn, or a 
            classical piece that captures their spirit, our professional musicians deliver 
            heartfelt performances that honor their memory and provide comfort to family and friends.
          </p>
        </ServiceSection>
      </div>

      <div id="postlude">
        <ServiceSection
          title="POSTLUDE & GRAVESIDE"
          isVisible={visibleSections.postlude}
        >
          <p className="text-gray-600">
            We provide appropriate musical accompaniment for the conclusion of the service 
            and at graveside ceremonies. Our musicians can perform traditional pieces, 
            contemporary selections, or cultural music specific to your family's traditions, 
            offering a final musical tribute as you say goodbye.
          </p>
        </ServiceSection>
      </div>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-purple-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Testimonials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-600 italic mb-4">
                "The musicians provided such beautiful music for my father's service. 
                Their rendition of his favorite song brought tears to everyone's eyes and 
                provided a moment of beauty during our grief."
              </p>
              <p className="font-semibold">- Sarah Thompson</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-600 italic mb-4">
                "The quartet was professional, respectful, and played with such emotion. 
                Their music was the perfect tribute to my mother who loved classical music."
              </p>
              <p className="font-semibold">- James Wilson</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-600 italic mb-4">
                "We were at a loss for how to make the service special, but your musicians 
                guided us through selecting meaningful pieces. The music brought comfort to our 
                family during an incredibly difficult day."
              </p>
              <p className="font-semibold">- Maria Rodriguez</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-purple-900 mb-6">
            Request Our Services
          </h2>
          <p className="text-gray-600 mb-8">
            We understand this is a difficult time. Our team is here to assist you with 
            compassion and care in arranging the perfect musical tribute for your loved one.
          </p>
          <button className="bg-purple-900 text-white py-3 px-8 rounded-lg font-semibold hover:bg-purple-800 transition duration-300">
            Contact Us
          </button>
          <p className="mt-6 text-gray-500">
            For immediate assistance, please call: (555) 123-4567
          </p>
        </div>
      </section>
    </div>
  );
}