"use client";
import React, { useState, useEffect } from "react";
import Lightbox from "../../components/Lightbox";
import { motion } from "framer-motion";
import { Mic, Music, Star, Heart } from "lucide-react";

// Images for each section - replace with actual proposal images
const clientImages = [
  "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1496024840928-4c417adf211d?auto=format&fit=crop&q=80",
];

// Slideshow images for each section - replace with appropriate proposal images
const sectionImages = {
  // Hero slideshow images
  hero: [
    "https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1518156677180-95a2893f3499?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1488116538499-30c9c144aca3?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80",
  ],
  customized: [
    "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80",
  ],
  unique: [
    "https://images.unsplash.com/photo-1501901609772-df0848060b33?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1517263904808-5dc91e3e7044?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1508219803418-5f1f89469b54?auto=format&fit=crop&q=80",
  ],
  celebration: [
    "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1470217957101-da7150b9b681?auto=format&fit=crop&q=80",
  ],
};

const valuesArray = [
  {
    icon: <Mic className="h-8 w-8 text-orange-800" />,
    title: "Personalized Experience",
    description:
      "Every proposal is tailored to tell your unique love story in the most meaningful way.",
  },
  {
    icon: <Music className="h-8 w-8 text-orange-800" />,
    title: "Expert Planning",
    description:
      "Our experienced team handles all the details so you can focus on the moment.",
  },
  {
    icon: <Star className="h-8 w-8 text-orange-800" />,
    title: "Professional Performers",
    description:
      "From musicians to dancers, we bring in the best talent to make your proposal perfect.",
  },
  {
    icon: <Heart className="h-8 w-8 text-orange-800" />,
    title: "Memorable Moments",
    description:
      "We create an unforgettable experience that becomes part of your love story forever.",
  },
];

const AnimatedText = ({ text, isVisible }) => {
  // Convert text to words for better animation
  const words = text.split(" ");
  
  return (
    <>
      {words.map((word, wordIndex) => (
        <React.Fragment key={`word-${wordIndex}`}>
          {wordIndex > 0 && (
            <motion.span
              className="inline-block"
              style={{ width: '0.5em' }} // Explicit space width
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.08 * (wordIndex * word.length) }}
            >&nbsp;</motion.span>
          )}
          {word.split("").map((char, charIndex) => (
            <motion.span
              key={`char-${wordIndex}-${charIndex}`}
              initial={{ opacity: 0, y: 10 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{
                duration: 0.3,
                delay: 0.08 * (wordIndex * word.length + charIndex),
                ease: "easeOut",
              }}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
        </React.Fragment>
      ))}
    </>
  );
};

const ServiceSection = ({ id, title, content, images, isVisible, imageOnRight = false }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-advance the slideshow every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [images.length]);

  // Image slideshow component - reused for both left and right layouts
  const ImageSlideshow = () => (
    <div className="w-full py-0 my-0 lg:w-1/2 px-4">
      <div className="relative aspect-video w-full overflow-hidden shadow-lg h-full rounded-xl">
        {images.map((src, index) => (
          <motion.div
            key={`${id}-image-${index}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentImageIndex ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <img
              src={src}
              alt={`${title} image ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
        
        {/* Image navigation dots */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {images.map((_, index) => (
            <button
              key={`${id}-dot-${index}`}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentImageIndex 
                  ? "bg-orange-500 scale-125" 
                  : "bg-white/70 hover:bg-white"
              }`}
              aria-label={`View image ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );

  // Content component - reused for both left and right layouts
  const ContentSection = () => (
    <div className="w-full xl:w-1/2 pb-8 px-4">
      <motion.h2
        className="text-3xl font-bold mb-6 text-orange-800"
        initial={{ opacity: 0, x: imageOnRight ? 20 : -20 }}
        animate={isVisible ? { opacity: 1, x: 0 } : {}}
        transition={{
          duration: 0.8,
          delay: 0.2,
          type: "spring",
          stiffness: 100,
        }}
      >
        <AnimatedText text={title} isVisible={isVisible} />
      </motion.h2>
      {content}
    </div>
  );

  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="py-16 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap">
          {imageOnRight ? (
            <>
              <ContentSection />
              <ImageSlideshow />
            </>
          ) : (
            <>
              <ImageSlideshow />
              <ContentSection />
            </>
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default function ProposalsPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [visibleSections, setVisibleSections] = useState({
    introduction: false,
    customized: false,
    unique: false,
    celebration: false,
  });

  // Auto-advance the hero slideshow every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % sectionImages.hero.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = {
        introduction: document.getElementById("introduction"),
        customized: document.getElementById("customized"),
        unique: document.getElementById("unique"),
        celebration: document.getElementById("celebration"),
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

  // Define the formatted content components for each section
  const IntroductionContent = () => (
    <div className="text-gray-700 text-lg">
      <p className="mb-4 text-lg leading-relaxed">
        Make your proposal an unforgettable moment with entertainment that perfectly
        complements the magic of your special day. At Shades Live Music, we specialize in
        creating personalized, romantic, and memorable experiences that will leave your partner
        in awe. Whether you're planning an intimate proposal or a grand gesture, we offer
        entertainment services to set the perfect tone and make the moment truly extraordinary.
      </p>
    </div>
  );

  const CustomizedContent = () => (
    <div className="text-gray-700 text-lg">
      <p className="mb-6 text-lg leading-relaxed font-medium">
        Customized Proposal Experiences:
      </p>
      <ul className="space-y-4 mb-6">
        <li className="flex">
          <span className="h-2 w-2 rounded-full bg-orange-500 mr-3 mt-2.5"></span>
          <p>
            <span className="font-medium">Live Music or Musicians:</span> Set the mood with live performances from talented
            musicians. Whether it's our solo guitarist playing your favourite love songs, our
            string quartet for a classic feel, or our jazz band for an elegant touch, we curate the
            perfect soundtrack for your proposal.
          </p>
        </li>
        <li className="flex">
          <span className="h-2 w-2 rounded-full bg-orange-500 mr-3 mt-2.5"></span>
          <p>
            <span className="font-medium">Flash Mob Proposals:</span> Create a fun and unforgettable moment with a surprise
            flash mob performance! Our professional dancers can coordinate a flash mob that
            leads to the big question, offering an exciting and lively proposal experience.
          </p>
        </li>
        <li className="flex">
          <span className="h-2 w-2 rounded-full bg-orange-500 mr-3 mt-2.5"></span>
          <p>
            <span className="font-medium">Private Serenades:</span> Nothing says romance like a private serenade. Surprise your
            partner with a live serenade by our vocalists or instrumentalists in a setting that's
            meaningful to you both, whether it's in a park, on a rooftop, or at a private event.
          </p>
        </li>
      </ul>
      
      <div className="mt-6">
        <p className="font-semibold text-lg mb-2 text-orange-800">
          Live Music Options:
        </p>
        <ul className="grid grid-cols-2 gap-2 mt-3">
          <li className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-orange-500 mr-2"></span>
            Solo Guitarist
          </li>
          <li className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-orange-500 mr-2"></span>
            String Quartet
          </li>
          <li className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-orange-500 mr-2"></span>
            Jazz Band
          </li>
          <li className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-orange-500 mr-2"></span>
            Vocalist
          </li>
          <li className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-orange-500 mr-2"></span>
            Pianist
          </li>
          <li className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-orange-500 mr-2"></span>
            Flash Mob Dancers
          </li>
        </ul>
      </div>
    </div>
  );

  const UniqueContent = () => (
    <div className="text-gray-700 text-lg">
      <p className="mb-6 text-lg leading-relaxed font-medium">
        Unique Proposal Ideas:
      </p>
      <ul className="space-y-4 mb-6">
        <li className="flex">
          <span className="h-2 w-2 rounded-full bg-orange-500 mr-3 mt-2.5"></span>
          <p>
            <span className="font-medium">Custom Video Messages:</span> Capture the essence of your relationship with a
            personalized video montage. From the beginning of your journey together to the
            moment you ask, this heartfelt tribute will add a special touch to your proposal.
          </p>
        </li>
        <li className="flex">
          <span className="h-2 w-2 rounded-full bg-orange-500 mr-3 mt-2.5"></span>
          <p>
            <span className="font-medium">Themed Experiences:</span> Bring your vision to life with a themed proposal. Whether
            it's a vintage-inspired gathering or a destination-themed setup, we can provide
            entertainment that ties seamlessly into your theme, including props, performers,
            and music.
          </p>
        </li>
        <li className="flex">
          <span className="h-2 w-2 rounded-full bg-orange-500 mr-3 mt-2.5"></span>
          <p>
            <span className="font-medium">Interactive Games or Challenges:</span> Add an element of surprise with a scavenger
            hunt or puzzle that leads your partner to the proposal location. Incorporating fun
            and interactive activities will make the moment even more memorable and
            personal.
          </p>
        </li>
      </ul>

      <div className="mt-6">
        <p className="font-semibold text-lg mb-2 text-orange-800">
          Our Unique Services:
        </p>
        <ul className="grid grid-cols-2 gap-2 mt-3">
          <li className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-orange-500 mr-2"></span>
            Video Production
          </li>
          <li className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-orange-500 mr-2"></span>
            Themed Decor & Props
          </li>
          <li className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-orange-500 mr-2"></span>
            Scavenger Hunt Design
          </li>
          <li className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-orange-500 mr-2"></span>
            Personalized Puzzles
          </li>
          <li className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-orange-500 mr-2"></span>
            Custom Performances
          </li>
          <li className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-orange-500 mr-2"></span>
            Location Coordination
          </li>
        </ul>
      </div>
    </div>
  );

  const CelebrationContent = () => (
    <div className="text-gray-700 text-lg">
      <p className="mb-6 text-lg leading-relaxed font-medium">
        Post-Proposal Celebration:
      </p>
      <ul className="space-y-4 mb-6">
        <li className="flex">
          <span className="h-2 w-2 rounded-full bg-orange-500 mr-3 mt-2.5"></span>
          <p>
            <span className="font-medium">Private Party Entertainment:</span> After the proposal, celebrate with an intimate
            gathering. We offer our DJ, live band, and even entertainers like magicians or
            comedians to keep the fun going as you and your guests revel in the moment.
          </p>
        </li>
        <li className="flex">
          <span className="h-2 w-2 rounded-full bg-orange-500 mr-3 mt-2.5"></span>
          <p>
            <span className="font-medium">Romantic Dance Floor:</span> After you pop the question, share your first dance with a
            professional dance performance, whether it's a slow, romantic waltz or a
            choreographed routine to a special song.
          </p>
        </li>
      </ul>
      
      <p className="mb-4 text-lg leading-relaxed">
        Our team is dedicated to helping you create a proposal that reflects your love story, and
        we work closely with you to make your vision a reality. Let us help you plan an
        unforgettable proposal that will create lifelong memories for you and your partner.
      </p>
      
      <div className="mt-6">
        <p className="font-semibold text-lg mb-2 text-orange-800">
          Celebration Services:
        </p>
        <ul className="grid grid-cols-2 gap-2 mt-3">
          <li className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-orange-500 mr-2"></span>
            DJ Services
          </li>
          <li className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-orange-500 mr-2"></span>
            Live Band
          </li>
          <li className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-orange-500 mr-2"></span>
            Specialty Performers
          </li>
          <li className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-orange-500 mr-2"></span>
            Dance Instruction
          </li>
          <li className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-orange-500 mr-2"></span>
            Champagne & Toast Setup
          </li>
          <li className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-orange-500 mr-2"></span>
            Custom First Dance
          </li>
        </ul>
      </div>
    </div>
  );

  return (
    <div>
      {/* Hero Section with Slideshow instead of video */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />
        
        {/* Slideshow for hero section */}
        <div className="relative h-full w-full">
          {sectionImages.hero.map((src, index) => (
            <motion.div
              key={`hero-image-${index}`}
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: index === currentImageIndex ? 1 : 0 
              }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0"
            >
              <img
                src={src}
                alt={`Proposal Moment ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
        
        {/* Title Overlay */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-center px-4"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              Perfect Proposal Moments
            </h1>
            <p className="text-xl text-white max-w-2xl mx-auto mb-8 drop-shadow-md">
              Create an unforgettable proposal experience with our bespoke entertainment services
            </p>
            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: "#f97316" }}
              whileTap={{ scale: 0.95 }}
              className="bg-orange-500 text-white py-3 px-8 rounded-lg font-semibold transition duration-300 shadow-lg"
            >
              Plan Your Perfect Proposal
            </motion.button>
          </motion.div>
        </div>
        
        {/* Navigation dots for hero slideshow */}
        <div className="absolute bottom-10 left-0 right-0 z-20 flex justify-center gap-3">
          {sectionImages.hero.map((_, index) => (
            <button
              key={`hero-dot-${index}`}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentImageIndex 
                  ? "bg-orange-500 scale-125" 
                  : "bg-white/70 hover:bg-white"
              }`}
              aria-label={`View hero image ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Introduction Section */}
      <div id="introduction">
        <ServiceSection
          id="introduction"
          title="PROPOSAL ENTERTAINMENT"
          content={<IntroductionContent />}
          images={sectionImages.customized}
          isVisible={visibleSections.introduction}
          imageOnRight={false}
        />
      </div>

      {/* Service Sections - alternating left and right layouts */}
      <div id="customized">
        <ServiceSection
          id="customized"
          title="CUSTOMIZED PROPOSAL EXPERIENCES"
          content={<CustomizedContent />}
          images={sectionImages.customized}
          isVisible={visibleSections.customized}
          imageOnRight={true}
        />
      </div>

      <div id="unique">
        <ServiceSection
          id="unique"
          title="UNIQUE PROPOSAL IDEAS"
          content={<UniqueContent />}
          images={sectionImages.unique}
          isVisible={visibleSections.unique}
          imageOnRight={false}
        />
      </div>

      <div id="celebration">
        <ServiceSection
          id="celebration"
          title="POST-PROPOSAL CELEBRATION"
          content={<CelebrationContent />}
          images={sectionImages.celebration}
          isVisible={visibleSections.celebration}
          imageOnRight={true}
        />
      </div>

      {/* Enhanced Prestigious Clients Section with animations and background */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gray-900/80"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.h2
            className="text-4xl font-bold text-center mb-16 text-orange-500"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            Our Prestigious Clients
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Hospitality */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-xl">
                <div className="flex items-center mb-6">
                  <motion.div
                    className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-orange-700"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </motion.div>
                  <h3 className="text-2xl font-semibold text-orange-700">
                    Luxury Hotels & Resorts
                  </h3>
                </div>
                <ul className="space-y-3 text-gray-800">
                  {[
                    "Emirates Palace Abu Dhabi",
                    "Grand Hyatt Dubai",
                    "Hilton Abu Dhabi",
                    "Kempinski Djibouti",
                    "Hyatt Regency Dubai",
                    "Belfry Hotel & Resort",
                    "Moor Hall Hotel & Spa",
                  ].map((client, index) => (
                    <motion.li
                      key={index}
                      className="flex items-center"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <span className="h-2 w-2 rounded-full bg-orange-500 mr-2"></span>
                      {client}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Sports */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-xl">
                <div className="flex items-center mb-6">
                  <motion.div
                    className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-orange-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </motion.div>
                  <h3 className="text-2xl font-semibold text-orange-500">
                    Sports & Entertainment
                  </h3>
                </div>
                <ul className="space-y-3 text-gray-800">
                  {[
                    "Aston Villa FC",
                    "Leicester City FC",
                    "Manchester United FC",
                    "Formula 1",
                    "Melbourne Cup",
                    "BBC TV",
                    "ITV",
                  ].map((client, index) => (
                    <motion.li
                      key={index}
                      className="flex items-center"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <span className="h-2 w-2 rounded-full bg-orange-500 mr-2"></span>
                      {client}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Corporate */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-xl">
                <div className="flex items-center mb-6">
                  <motion.div
                    className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-orange-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </motion.div>
                  <h3 className="text-2xl font-semibold text-orange-700">
                    Corporate & Brands
                  </h3>
                </div>
                <ul className="space-y-3 text-gray-800">
                  {[
                    "Cadbury World",
                    "Harley Davidson",
                    "Mercedes-Benz",
                    "Jaguar Land Rover",
                    "And many more prestigious",
                    "organizations worldwide...",
                  ].map((client, index) => (
                    <motion.li
                      key={index}
                      className="flex items-center"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <span className="h-2 w-2 rounded-full bg-orange-500 mr-2"></span>
                      {client}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <Lightbox images={clientImages} />
          </motion.div>
        </div>
      </section>

      {/* Enhanced Values Section with animations - using a romantic proposal background */}
      <section className="py-20 relative overflow-hidden">
        {/* Background image with overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80"
            alt="Romantic Proposal Background"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-orange-900/80 bg-gradient-to-b from-orange-900/80 to-rose-500/80"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.h2
            className="text-4xl font-bold text-center mb-16 text-white"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            The Shades Difference
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {valuesArray.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <div className="bg-white/95 backdrop-blur-sm p-8 rounded-lg shadow-xl h-full">
                  <motion.div
                    className="bg-blue-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6"
                    initial={{ scale: 0, rotate: -30 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      delay: 0.2 + index * 0.1,
                    }}
                    viewport={{ once: true }}
                    whileHover={{
                      scale: 1.1,
                      rotate: 5,
                      transition: { duration: 0.3 },
                    }}
                  >
                    {value?.icon}
                  </motion.div>

                  <motion.h3
                    className="text-xl font-semibold mb-4 text-center text-orange-800"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {value?.title}
                  </motion.h3>

                  <motion.p
                    className="text-gray-600 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {value?.description}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}