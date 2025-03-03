"use client";
import React, { useState, useEffect } from "react";
import Lightbox from "../../components/Lightbox";
import { motion } from "framer-motion";
import { Mic, Music, Star, Users } from "lucide-react";

// Images for each section - replace with actual corporate event images
const clientImages = [
  "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1496024840928-4c417adf211d?auto=format&fit=crop&q=80",
];

// Slideshow images for each section - replace with appropriate corporate event images
const sectionImages = {
  // Hero slideshow images
  hero: [
    "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80",
  ],
  corporate: [
    "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1560439514-4e9645039924?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&q=80",
  ],
  private: [
    "https://images.unsplash.com/photo-1496843916299-590492c751f4?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80",
  ],
  conclusion: [
    "https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6a3?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&q=80",
  ],
};

const valuesArray = [
  {
    icon: <Mic className="h-8 w-8 text-orange-800" />,
    title: "Tailored Experiences",
    description:
      "Every event is customized to perfectly match your brand, audience, and objectives.",
  },
  {
    icon: <Music className="h-8 w-8 text-orange-800" />,
    title: "Professional Talent",
    description:
      "From DJs to live bands, all our performers are experienced professionals.",
  },
  {
    icon: <Star className="h-8 w-8 text-orange-800" />,
    title: "Seamless Execution",
    description:
      "We handle all the technical and logistical details for stress-free entertainment.",
  },
  {
    icon: <Users className="h-8 w-8 text-orange-800" />,
    title: "Memorable Impact",
    description:
      "Create lasting impressions that will have your guests talking long after the event.",
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

const ServiceSection = ({ id, title, content, images, isVisible }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-advance the slideshow every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="py-0 bg-white"
    >
      <div className="p-0 ">
        <div className="flex flex-wrap px-0">
          {/* Left side - Image slideshow */}
          <div className="w-full py-0 my-0 pr-8 lg:w-1/2">
            <div className="relative aspect-video w-full overflow-hidden shadow-lg h-full">
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

          {/* Right side - Content */}
          <div className="w-full xl:w-1/2 pb-8">
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

export default function CorporatePartiesPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [visibleSections, setVisibleSections] = useState({
    introduction: false,
    corporate: false,
    private: false,
    conclusion: false,
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
        corporate: document.getElementById("corporate"),
        private: document.getElementById("private"),
        conclusion: document.getElementById("conclusion"),
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
        Elevate your next corporate event or private party with unforgettable entertainment
        experiences that captivate and engage your guests. Whether you're hosting a corporate
        conference, gala, team-building event, or a celebratory party, we provide tailored
        entertainment solutions designed to fit any occasion. From live music and DJs to
        interactive games and professional performers, our team works with you to create the
        perfect atmosphere.
      </p>
    </div>
  );

  const CorporateContent = () => (
    <div className="text-gray-700 text-lg">
      <p className="mb-6 text-lg leading-relaxed font-medium">
        For Corporate Events:
      </p>
      <ul className="space-y-4 mb-6">
        <li className="flex">
          <span className="h-2 w-2 rounded-full bg-orange-500 mr-3 mt-2.5"></span>
          <p>
            <span className="font-medium">Engaging Speakers and Hosts:</span> Hire experienced hosts or motivational speakers
            to energize your team or inspire your guests.
          </p>
        </li>
        <li className="flex">
          <span className="h-2 w-2 rounded-full bg-orange-500 mr-3 mt-2.5"></span>
          <p>
            <span className="font-medium">Team-building Activities:</span> Foster collaboration and strengthen relationships with
            fun and innovative team-building exercises.
          </p>
        </li>
        <li className="flex">
          <span className="h-2 w-2 rounded-full bg-orange-500 mr-3 mt-2.5"></span>
          <p>
            <span className="font-medium">Live Entertainment:</span> From bands to magicians and comedians, we bring a variety
            of entertainment options to enhance any business gathering.
          </p>
        </li>
        <li className="flex">
          <span className="h-2 w-2 rounded-full bg-orange-500 mr-3 mt-2.5"></span>
          <p>
            <span className="font-medium">Themed Parties & Awards Ceremonies:</span> Make your corporate event stand out
            with a professionally curated theme, whether it's a black-tie gala or an awards
            ceremony.
          </p>
        </li>
      </ul>
      
      <div className="mt-6">
        <p className="font-semibold text-lg mb-2 text-orange-800">
          Corporate Entertainment Services:
        </p>
        <ul className="grid grid-cols-2 gap-2 mt-3">
          <li className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-orange-500 mr-2"></span>
            Motivational Speakers
          </li>
          <li className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-orange-500 mr-2"></span>
            Live Bands
          </li>
          <li className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-orange-500 mr-2"></span>
            Team-Building Facilitators
          </li>
          <li className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-orange-500 mr-2"></span>
            Professional MCs
          </li>
          <li className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-orange-500 mr-2"></span>
            Award Show Production
          </li>
          <li className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-orange-500 mr-2"></span>
            Magicians & Illusionists
          </li>
          <li className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-orange-500 mr-2"></span>
            Comedians
          </li>
          <li className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-orange-500 mr-2"></span>
            Themed Event Specialists
          </li>
        </ul>
      </div>
    </div>
  );

  const PrivateContent = () => (
    <div className="text-gray-700 text-lg">
      <p className="mb-6 text-lg leading-relaxed font-medium">
        Private Parties:
      </p>
      <ul className="space-y-4 mb-6">
        <li className="flex">
          <span className="h-2 w-2 rounded-full bg-orange-500 mr-3 mt-2.5"></span>
          <p>
            <span className="font-medium">Customized Party Entertainment:</span> Whether it's a birthday, anniversary, or any
            special celebration, we offer bespoke entertainment that fits your theme and
            preferences.
          </p>
        </li>
        <li className="flex">
          <span className="h-2 w-2 rounded-full bg-orange-500 mr-3 mt-2.5"></span>
          <p>
            <span className="font-medium">Interactive Games & Experiences:</span> Add excitement to your event with activities
            like trivia, photo booths, or live art displays that get everyone involved.
          </p>
        </li>
        <li className="flex">
          <span className="h-2 w-2 rounded-full bg-orange-500 mr-3 mt-2.5"></span>
          <p>
            <span className="font-medium">Party DJ & Live Music:</span> Our DJ and live band will keep your guests dancing all
            night long with a wide range of music genres to suit your party vibe.
          </p>
        </li>
        <li className="flex">
          <span className="h-2 w-2 rounded-full bg-orange-500 mr-3 mt-2.5"></span>
          <p>
            <span className="font-medium">Specialty Acts & Performers:</span> From dance troupes to fire breathers and magicians,
            we provide unique entertainment options to wow your guests.
          </p>
        </li>
      </ul>

      <div className="mt-6">
        <p className="font-semibold text-lg mb-2 text-orange-800">
          Private Party Services:
        </p>
        <ul className="grid grid-cols-2 gap-2 mt-3">
          <li className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-orange-500 mr-2"></span>
            Professional DJs
          </li>
          <li className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-orange-500 mr-2"></span>
            Live Bands
          </li>
          <li className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-orange-500 mr-2"></span>
            Photo Booths
          </li>
          <li className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-orange-500 mr-2"></span>
            Dance Performances
          </li>
          <li className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-orange-500 mr-2"></span>
            Fire Breathers
          </li>
          <li className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-orange-500 mr-2"></span>
            Magicians
          </li>
          <li className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-orange-500 mr-2"></span>
            Interactive Games
          </li>
          <li className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-orange-500 mr-2"></span>
            Live Art Displays
          </li>
        </ul>
      </div>
    </div>
  );

  const ConclusionContent = () => (
    <div className="text-gray-700 text-lg">
      <p className="mb-4 text-lg leading-relaxed">
        Let us help you create an event your guests will remember. No matter the occasion, we
        are here to bring energy, fun, and style to your next corporate or private event. Reach out
        today to discover how we can make your event extraordinary!
      </p>
      <div className="mt-6">
        <p className="font-semibold text-lg mb-2 text-orange-800">
          Why Choose Shades Live Music:
        </p>
        <ul className="space-y-3 mt-3">
          <li className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-orange-500 mr-2"></span>
            Years of experience in corporate and private event entertainment
          </li>
          <li className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-orange-500 mr-2"></span>
            Curated selection of professional performers and entertainers
          </li>
          <li className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-orange-500 mr-2"></span>
            Fully customized packages to meet your specific needs and budget
          </li>
          <li className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-orange-500 mr-2"></span>
            Seamless execution from planning to performance
          </li>
          <li className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-orange-500 mr-2"></span>
            Technical expertise to ensure flawless sound and lighting
          </li>
        </ul>
      </div>
    </div>
  );

  return (
    <div>
      {/* Hero Section with Slideshow instead of video */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/30 z-10" />
        
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
                alt={`Corporate Events Showcase ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Introduction Section */}
      <div id="introduction">
        <ServiceSection
          id="introduction"
          title="CORPORATE AND PARTY ENTERTAINMENT"
          content={<IntroductionContent />}
          images={sectionImages.corporate}
          isVisible={visibleSections.introduction}
        />
      </div>

      {/* Service Sections */}
      <div id="corporate">
        <ServiceSection
          id="corporate"
          title="CORPORATE EVENTS"
          content={<CorporateContent />}
          images={sectionImages.corporate}
          isVisible={visibleSections.corporate}
        />
      </div>

      <div id="private">
        <ServiceSection
          id="private"
          title="PRIVATE PARTIES"
          content={<PrivateContent />}
          images={sectionImages.private}
          isVisible={visibleSections.private}
        />
      </div>

      <div id="conclusion">
        <ServiceSection
          id="conclusion"
          title="CREATE MEMORABLE EVENTS"
          content={<ConclusionContent />}
          images={sectionImages.conclusion}
          isVisible={visibleSections.conclusion}
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