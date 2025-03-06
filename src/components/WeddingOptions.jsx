import React, { useState, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';

const WeddingTimeline = () => {
  const [activeSection, setActiveSection] = useState('ceremony');
  const path = usePathname();
  const containerRef = useRef(null);
  
  // Parallax effect with scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const diamondRotate = useTransform(scrollYProgress, [0, 1], [30, 60]);
  const diamondScale = useTransform(scrollYProgress, [0, 1], [0.8, 1.2]);
  const diamondOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.05, 0.1, 0.15]);

  const timelineSections = [
    {
      id: 'CEREMONY',
      title: 'CEREMONY',
      buttonText: 'I CHOOSE YOU',
      href: '/ceremony'
    },
    {
      id: 'DRINKS-RECEPTION',
      title: 'DRINKS RECEPTION',
      buttonText: 'LOVE IS IN THE AIR',
      href: '/cocktail'
    },
    {
      id: 'DINNER',
      title: 'DINNER',
      buttonText: 'FIRST DANCE',
      href: '/dinner'
    },
    {
      id: 'EVENING-PARTY',
      title: 'EVENING PARTY',
      buttonText: 'UNTIL THE END OF THE NIGHT',
      href: '/party'
    }
  ];

  const handleSectionClick = (sectionId) => {
    setActiveSection(sectionId);
    console.log(`Navigating to ${sectionId}`);
  };

  // Animation variants
  const lineVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: { 
      height: 128, // h-32 in pixels
      opacity: 1,
      transition: { 
        duration: 1.2,
        ease: "easeInOut"
      }
    }
  };
  
  // Reset animations when scrolled out of view
  const resetAnimationWhenOutOfView = {
    once: true
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        delay: 0.6 
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1,
      scale: 1,
      transition: { 
        duration: 0.8,
        delay: 1.2
      }
    }
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

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  return (
    <div className="w-full py-16 relative bg-gradient-to-b from-black to-gray-800" ref={containerRef}>
      {/* Parallax diamond background */}
      <motion.div 
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        initial={{ opacity: 0, rotate: 30, scale: 0.8 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        style={{ 
          rotate: diamondRotate,
          scale: diamondScale,
          opacity: diamondOpacity
        }}
        transition={{ duration: 2 }}
      >
        <div className="w-4/5 h-4/5 border-2 border-gray-200 transform rotate-45"></div>
      </motion.div>
      
      <div className="relative z-10">
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center gap-12 md:gap-4 bg-transparent"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {timelineSections.map((section, index) => (
            <motion.div 
              key={section.id} 
              className="flex flex-col items-center w-full md:w-1/4 bg-transparent"
              variants={containerVariants}
            >
              {/* Top vertical line */}
              <div className="flex">
                <motion.div 
                  className="hidden ml-1 md:block w-px bg-white mb-6"
                  variants={lineVariants}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                ></motion.div>
              </div>
              
              {/* Section title with script font */}
              <motion.h3 
                className="bold text-orange-600 text-4xl mb-4"
                style={{ 
                  fontFamily: "'Big Shoulders Stencil', Bold",
                  color: '#FF8C00'
                }}
                variants={titleVariants}
              >
                {section.title}
              </motion.h3>
              
              {/* Navigation button */}
              <motion.div variants={buttonVariants}>
                <Link 
                  href={`${path}/${section?.id}`}
                  className={`border px-6 py-2 text-xs tracking-widest transition-colors duration-300 ${
                    activeSection === section.id 
                      ? 'border-white bg-transparent text-white' 
                      : 'border-gray-300 bg-white text-gray-900'
                  } hover:bg-gray-300`}
                  onClick={() => handleSectionClick(section.id)}
                >
                  {section.buttonText}
                </Link>
              </motion.div>
              
              {/* Bottom vertical line */}
              <motion.div 
                className="hidden md:block w-px bg-white mt-6"
                variants={bottomLineVariants}
                transition={{ 
                  duration: 1.2,
                  delay: 0.8,
                  ease: "easeInOut"
                }}
              ></motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default WeddingTimeline;