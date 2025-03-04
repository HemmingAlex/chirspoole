"use client";
import React, { useState, useEffect } from "react";
import YouTubePlayer from "../../components/MutableYotubePlayer";
import Lightbox from "../../components/Lightbox";
import { motion } from "framer-motion";
import { Mic, Music, Star, Users } from "lucide-react";

// Real images for each section - replace with actual Asian wedding images
const clientImages = [
  "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1496024840928-4c417adf211d?auto=format&fit=crop&q=80",
];

// Slideshow images for each section - replace with appropriate Asian wedding images
const sectionImages = {
  traditional: [
    "https://images.unsplash.com/photo-1604608672927-818417f6e05c?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1604608872128-7065e9e7dc3d?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1532615029956-91a3f41d0f4c?auto=format&fit=crop&q=80",
  ],
  modern: [
    "https://images.unsplash.com/photo-1551698618-5d0361ec9009?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1634044582574-1029969471bc?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1530828319451-bcc9eb4a593e?auto=format&fit=crop&q=80",
  ],
  special: [
    "https://images.unsplash.com/photo-1547221054-a36ed2d6cb6e?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1604599943120-7ceb77d839e0?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1546198633-6edfc82c4a39?auto=format&fit=crop&q=80",
  ],
};

const valuesArray = [
  {
    icon: <Mic className="h-8 w-8 text-orange-800" />,
    title: "Cultural Expertise",
    description:
      "We understand and honor the traditions that make Asian weddings unique and special.",
  },
  {
    icon: <Music className="h-8 w-8 text-orange-800" />,
    title: "Custom Experiences",
    description:
      "Each performance is tailored to create the perfect atmosphere for your special event.",
  },
  {
    icon: <Star className="h-8 w-8 text-orange-800" />,
    title: "World-Class Musicians",
    description:
      "We bring together the finest performers to deliver exceptional musical experiences.",
  },
  {
    icon: <Users className="h-8 w-8 text-orange-800" />,
    title: "Full-Service Events",
    description:
      "From traditional ceremonies to modern celebrations, we provide comprehensive entertainment solutions.",
  },
];

const AnimatedText = ({ text, isVisible }) => {
  return (
    <>
      {text.split("").map((char, index) => (
        <motion.span
          key={`char-${index}`}
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{
            duration: 0.3,
            delay: index * 0.08, // Staggered delay based on character position
            ease: "easeOut",
          }}
          className="inline-block"
        >
          {char}
        </motion.span>
      ))}
    </>
  );
};

const ServiceSection = ({
  id,
  title,
  content,
  images,
  isVisible,
  imageOnRight = false ,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-advance the slideshow every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [images.length]);

  return imageOnRight ? (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className=" bg-white"
    >
      <div className="">
        <div className="flex flex-wrap">
          {/* Left side - Just like original but with slideshow */}
          <div className="w-full lg:w-1/2 pb-8 px-8">
            <motion.h2
              className="text-3xl font-bold mb-6 text-orange-800"
              initial={{ opacity: 0, x: -20 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.2,
                type: "spring",
                stiffness: 100,
              }}
            >
              <br />
              <AnimatedText text={title} isVisible={isVisible} />
            </motion.h2>
            {content}
            {/* <Lightbox /> */}
          </div>

          {/* Right side - Content */}
          <div className="w-full xl:w-1/2 ">
            <div className="relative aspect-video w-full overflow-hidden  shadow-lg h-full ">
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
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  ) : (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="py-0 bg-white"
    >
      <div className="">
        <div className="flex flex-wrap ">
          {/* Left side - Just like original but with slideshow */}
          <div className="w-full lg:w-1/2">
            <div className="relative aspect-video w-full overflow-hidden  shadow-lg h-full">
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
            </div>
            {/* <Lightbox /> */}
          </div>

          {/* Right side - Content */}
          <div className="w-full xl:w-1/2 pb-8 px-8">
            <motion.h2
              className="text-3xl font-bold mb-6 text-orange-800"
              initial={{ opacity: 0, x: -20 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.2,
                type: "spring",
                stiffness: 100,
              }}
            >
              <br />
              <AnimatedText text={title} isVisible={isVisible} />
            </motion.h2>
            {content}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default function AsianWeddingsPage() {
  const [muted, setMuted] = useState("1");
  const [visibleSections, setVisibleSections] = useState({
    introduction: false,
    traditional: false,
    modern: false,
    special: false,
  });
  const videoId = "CZVKTBY3tNk"; // Replace with appropriate Asian wedding video ID

  // Define the formatted content components for each section
  const IntroductionContent = () => (
    <div className="text-gray-700 text-lg">
      <p className="mb-4 text-lg leading-relaxed">
        Celebrate your special day with entertainment that reflects the beauty, tradition, and
        excitement of your cultural heritage. Our Asian wedding entertainment services are
        designed to bring joy, vibrancy, and unforgettable moments to your celebration. From
        traditional performances to modern entertainment, we offer a wide range of options to
        suit your unique style and vision.
      </p>
    </div>
  );

  const TraditionalContent = () => (
    <div className="text-gray-700 text-lg">
      <p className="mb-4 text-lg leading-relaxed font-medium">
        Traditional Entertainment:
      </p>
      <p className="mb-4 text-lg leading-relaxed">
        Live Music & Classical Performances: Enhance your wedding with traditional
        music such as classical Indian instruments (like the sitar, tabla, or flute).
      </p>
      <p className="mb-4 text-lg leading-relaxed">
        Bhangra and Bollywood Dance Performances: Energize your guests with colorful
        and lively Bhangra dancers or Bollywood-style performances, guaranteed to bring
        excitement and joy to the dance floor.
      </p>
      <div className="mt-6">
        <p className="font-semibold text-lg mb-2 text-orange-800">
          Traditional Entertainment Services:
        </p>
        <ul className="grid grid-cols-2 gap-2 mt-3">
          <li className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-orange-500 mr-2"></span>
            Classical Indian Instruments
          </li>
          <li className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-orange-500 mr-2"></span>
            Bhangra Dancers
          </li>
          <li className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-orange-500 mr-2"></span>
            Bollywood Performances
          </li>
          <li className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-orange-500 mr-2"></span>
            Cultural Vocalists
          </li>
          <li className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-orange-500 mr-2"></span>
            Tabla Players
          </li>
          <li className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-orange-500 mr-2"></span>
            Sitar Artists
          </li>
          <li className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-orange-500 mr-2"></span>
            Classical Dancers
          </li>
          <li className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-orange-500 mr-2"></span>
            Flute Musicians
          </li>
        </ul>
      </div>
    </div>
  );

  const ModernContent = () => (
    <div className="text-gray-700 text-lg">
      <p className="mb-4 text-lg leading-relaxed font-medium">
        Modern Entertainment:
      </p>
      <p className="mb-4 text-lg leading-relaxed">
        DJs and Fusion Music: Whether you prefer Bollywood beats, K-pop hits, or a mix
        of international and contemporary styles, our DJ will keep the party alive with a
        customized playlist to match your vibe.
      </p>
      <p className="mb-4 text-lg leading-relaxed">
        Live Band & Contemporary Music: Our live band can perform everything from
        modern hits to traditional sounds with a contemporary twist.
      </p>
      <p className="mb-4 text-lg leading-relaxed">
        Interactive Games & Activities: Engage your guests with fun activities like photo
        booths, trivia games, or karaoke that will create memories for years to come.
      </p>
      <div className="mt-6">
        <p className="font-semibold text-lg mb-2 text-orange-800">
          Modern Entertainment Services:
        </p>
        <ul className="grid grid-cols-2 gap-2 mt-3">
          <li className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-orange-500 mr-2"></span>
            Professional DJ Services
          </li>
          <li className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-orange-500 mr-2"></span>
            Fusion Music Bands
          </li>
          <li className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-orange-500 mr-2"></span>
            Interactive Photo Booths
          </li>
          <li className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-orange-500 mr-2"></span>
            Customized Playlists
          </li>
          <li className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-orange-500 mr-2"></span>
            Live Contemporary Music
          </li>
          <li className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-orange-500 mr-2"></span>
            Bollywood & K-Pop DJs
          </li>
          <li className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-orange-500 mr-2"></span>
            Trivia Games & Activities
          </li>
          <li className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-orange-500 mr-2"></span>
            Karaoke Entertainment
          </li>
        </ul>
      </div>
    </div>
  );

  const SpecialContent = () => (
    <div className="text-gray-700 text-lg">
      <p className="mb-4 text-lg leading-relaxed font-medium">
        Special Performances and Shows:
      </p>
      <p className="mb-4 text-lg leading-relaxed">
        Traditional Wedding Ritual Performances: We offer performers who can enact
        traditional wedding rituals to make your ceremony even more meaningful and
        connected to your heritage.
      </p>
      <p className="mb-4 text-lg leading-relaxed">
        At Shades Live Music, we understand how important it is to honour your heritage while
        celebrating love and togetherness. Our entertainment options are designed to blend
        tradition with modern flair, ensuring that your wedding day is nothing short of
        extraordinary. Let us help you create the wedding of your dreams with entertainment
        that will make your day unforgettable.
      </p>
      <div className="mt-6">
        <p className="font-semibold text-lg mb-2 text-orange-800">
          Special Performance Services:
        </p>
        <ul className="grid grid-cols-2 gap-2 mt-3">
          <li className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-orange-500 mr-2"></span>
            Traditional Ritual Performers
          </li>
          <li className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-orange-500 mr-2"></span>
            Cultural Ceremony Specialists
          </li>
          <li className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-orange-500 mr-2"></span>
            Heritage Celebration Acts
          </li>
          <li className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-orange-500 mr-2"></span>
            Specialized Traditional Shows
          </li>
          <li className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-orange-500 mr-2"></span>
            Customized Cultural Performances
          </li>
        </ul>
      </div>
    </div>
  );

  useEffect(() => {
    const handleScroll = () => {
      const sections = {
        introduction: document.getElementById("introduction"),
        traditional: document.getElementById("traditional"),
        modern: document.getElementById("modern"),
        special: document.getElementById("special"),
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

      {/* Introduction Section */}
      <div id="introduction">
        <ServiceSection
          id="introduction"
          title="ASIAN WEDDING ENTERTAINMENT SERVICES"
          content={<IntroductionContent />}
          images={sectionImages.traditional} // Temporarily using traditional images for intro
          isVisible={visibleSections.introduction}
          imageOnRight={true}
        />
      </div>

      {/* Service Sections */}
      <div id="traditional">
        <ServiceSection
          id="traditional"
          title="TRADITIONAL ENTERTAINMENT"
          content={<TraditionalContent />}
          images={sectionImages.traditional}
          isVisible={visibleSections.traditional}
        />
      </div>

      <div id="modern">
        <ServiceSection
          id="modern"
          title="MODERN ENTERTAINMENT"
          content={<ModernContent />}
          images={sectionImages.modern}
          isVisible={visibleSections.modern}
          imageOnRight={true}
        />
      </div>

      <div id="special">
        <ServiceSection
          id="special"
          title="SPECIAL PERFORMANCES AND SHOWS"
          content={<SpecialContent />}
          images={sectionImages.special}
          isVisible={visibleSections.special}
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

      {/* Enhanced Values Section with animations */}
      <section className="py-20 relative overflow-hidden">
        {/* Background image with overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1541439158503-43a5023c6a9b?auto=format&fit=crop&q=80"
            alt="Background"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-orange-900/90 bg-gradient-to-b from-orange-900/90 to-yellow-400/90"></div>
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