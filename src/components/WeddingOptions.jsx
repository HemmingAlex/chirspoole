import React, { useState, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, useScroll, useTransform } from 'framer-motion';
import ParticleOverlay from "./ParticleOverlay";

const WeddingTimeline = () => {
  const [activeSection, setActiveSection] = useState("ceremony");
  const path = usePathname();
  
  // Parallax effect with scroll


  const timelineSections = [
    {
      id: "CEREMONY",
      title: "CEREMONY",
      buttonText: "CELEBRATE WITH STYLE",
      href: "/ceremony",
    },
    {
      id: "DRINKS-RECEPTION",
      title: "DRINKS RECEPTION",
      buttonText: "CELEBRATE WITH STYLE",
      href: "/cocktail",
    },
    {
      id: "DINNER",
      title: "DINNER",
      buttonText: "CELEBRATE WITH STYLE",
      href: "/dinner",
    },
    {
      id: "EVENING-PARTY",
      title: "EVENING PARTY",
      buttonText: "CELEBRATE WITH STYLE",
      href: "/party",
    },
  ];

  const handleSectionClick = (sectionId) => {
    setActiveSection(sectionId);
    console.log(`Navigating to ${sectionId}`);
  };

  // Title variants for simple fade in
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  // Button variants with grow effect
  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
      },
    },
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.2,
      },
    },
  };
  const bottomLineVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: { 
      height: 128, // h-32 in pixels
      opacity: 1,
      transition: { 
        duration: 1.2,
        delay: 1.8,
        ease: "easeInOut"
      }
    }
  };


  // Container variants for staggered children animations
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <ParticleOverlay>
      <div className="w-full py-16 relative">
        <h1
          className="bold text-4xl mb-16 mt-8 relative z-10 flex justify-center"
          style={{
            fontFamily: "'Big Shoulders Stencil', Bold",
            color: "#FF8C00",
          }}
        >
          CATERING
        </h1>
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-12 md:gap-4 bg-transparent"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {timelineSections.map((section) => (
            <motion.div
              key={section.id}
              className="flex flex-col items-center w-full md:w-1/4 bg-transparent"
              variants={containerVariants}
            >
              {/* Section title */}
              <motion.h3
                className="bold text-4xl mb-4 relative z-10"
                style={{
                  fontFamily: "'Big Shoulders Stencil', Bold",
                  color: "#FF8C00",
                }}
                variants={titleVariants}
              >
                {section.title}
              </motion.h3>

              {/* Navigation button with grow effect */}
              <motion.div variants={buttonVariants} whileHover="hover">
                <Link
                  href={`${path}/${section?.id}`}
                  className={`border px-6 py-2 text-xs tracking-widest transition-colors duration-300 ${
                    activeSection === section.id
                      ? "border-white bg-transparent text-white"
                      : "border-gray-300 bg-white text-gray-900"
                  } hover:bg-gray-300`}
                  onClick={() => handleSectionClick(section.id)}
                >
                  {section.buttonText}
                </Link>
              </motion.div>
              <motion.div 
                className="hidden md:block w-px bg-white mt-6"
                variants={bottomLineVariants}
                transition={{ 
                  duration: 1.2,
                  delay: 0.8,
                  ease: "easeInOut"
                }}
              ></motion.div> </motion.div>
          ))}
        </motion.div>
      </div>
    </ParticleOverlay>
  );
};

export default WeddingTimeline;
