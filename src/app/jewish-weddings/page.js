"use client";
import React, { useState, useEffect } from "react";
import Lightbox from "../../components/Lightbox";
import { motion } from "framer-motion";
import { Mic, Music, Star, Users } from "lucide-react";

// Images for each section - replace with actual Jewish wedding images
const clientImages = [
  "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1496024840928-4c417adf211d?auto=format&fit=crop&q=80",
];

// Slideshow images for each section - replace with appropriate Jewish wedding images
const sectionImages = {
  // Hero slideshow images
  hero: [
    "https://images.unsplash.com/photo-1594732832278-abd644401426?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1546316401-76d5c1c449c1?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1596825205286-8e2f7a3c3b56?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1534442756519-3e556fa63be8?auto=format&fit=crop&q=80",
  ],
  traditional: [
    "https://images.unsplash.com/photo-1594732832278-abd644401426?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1596825205286-8e2f7a3c3b56?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1546316401-76d5c1c449c1?auto=format&fit=crop&q=80",
  ],
  barMitzvah: [
    "https://images.unsplash.com/photo-1535193838596-0afb818b3e88?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1592864638954-58ca6e7b24b9?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1610141132639-71ff27140ca8?auto=format&fit=crop&q=80",
  ],
  special: [
    "https://images.unsplash.com/photo-1579019163248-e7761241d85d?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1519009056707-8f3866dd6ddf?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1559225404-d5313e3fab83?auto=format&fit=crop&q=80",
  ],
};

const valuesArray = [
  {
    icon: <Mic className="h-8 w-8 text-orange-800" />,
    title: "Traditional Expertise",
    description:
      "Deep understanding of Jewish customs and traditions to create authentic celebrations.",
  },
  {
    icon: <Music className="h-8 w-8 text-orange-800" />,
    title: "Custom Experiences",
    description:
      "Each performance is tailored to honor tradition while reflecting your personal style.",
  },
  {
    icon: <Star className="h-8 w-8 text-orange-800" />,
    title: "Expert Musicians",
    description:
      "Specialized performers who understand the unique elements of Jewish celebrations.",
  },
  {
    icon: <Users className="h-8 w-8 text-orange-800" />,
    title: "Comprehensive Services",
    description:
      "From traditional ceremonies to contemporary celebrations, we provide complete entertainment solutions.",
  },
];

const AnimatedText = ({ text, isVisible }) => {
  return (
    <>
      {text.split("p").map((char, index) => (
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

export default function JewishWeddingsPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [visibleSections, setVisibleSections] = useState({
    introduction: false,
    traditional: false,
    barMitzvah: false,
    special: false,
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
        traditional: document.getElementById("traditional"),
        barMitzvah: document.getElementById("barMitzvah"),
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

  // Define the formatted content components for each section
  const IntroductionContent = () => (
    <div className="text-gray-700 text-lg">
      <p className="mb-4 text-lg leading-relaxed">
        Make your Jewish wedding or Bar Mitzvah celebration an unforgettable event with
        entertainment that perfectly complements the joy and tradition of your special occasion.
        We offer a range of entertainment options tailored to honor Jewish customs and bring
        excitement and energy to the celebration. Whether you're hosting an intimate ceremony
        or a grand celebration, our entertainment ensures that your event is filled with joy,
        laughter, and unforgettable moments.
      </p>
    </div>
  );

  const TraditionalContent = () => (
    <div className="text-gray-700 text-lg">
      <ul className="space-y-4 mb-6">
        <li className="flex">
          <span className="h-2 w-2 rounded-full bg-orange-500 mr-3 mt-2.5"></span>
          <p>
            <span className="font-medium">Traditional Ceremony Music:</span> Enhance your wedding with classical Jewish music,
            including our beautiful string quartet or traditional instruments such as our
            beautiful Violinists, flute, or harpists. We can also incorporate beloved Jewish
            wedding songs like "Siman Tov u'Mazal Tov" or "Jerusalem of Gold."
          </p>
        </li>
        <li className="flex">
          <span className="h-2 w-2 rounded-full bg-orange-500 mr-3 mt-2.5"></span>
          <p>
            <span className="font-medium">Klezmer Bands & Jewish Folk Music:</span> Klezmer bands bring an authentic touch to
            your reception with lively, energetic music that will have your guests dancing the
            night away. Enjoy the lively melodies of traditional Jewish folk songs mixed with
            modern beats for a unique experience.
          </p>
        </li>
        <li className="flex">
          <span className="h-2 w-2 rounded-full bg-orange-500 mr-3 mt-2.5"></span>
          <p>
            <span className="font-medium">DJ Services:</span> Our experienced DJ is well-versed in blending traditional Jewish
            music with contemporary hits, creating a perfect mix for your wedding. From the
            Hora to your favourite party tunes, we keep the dance floor alive all night long.
          </p>
        </li>
        <li className="flex">
          <span className="h-2 w-2 rounded-full bg-orange-500 mr-3 mt-2.5"></span>
          <p>
            <span className="font-medium">The Hora Dance:</span> The Hora is a cherished tradition at Jewish weddings, and our
            team can lead this joyful and energetic dance, ensuring all your guests are
            involved in this memorable moment.
          </p>
        </li>
      </ul>
      
      <div className="mt-6">
        <p className="font-semibold text-lg mb-2 text-orange-800">
          Jewish Wedding Entertainment Services:
        </p>
        <ul className="grid grid-cols-2 gap-2 mt-3">
          <li className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-orange-500 mr-2"></span>
            String Quartet
          </li>
          <li className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-orange-500 mr-2"></span>
            Klezmer Bands
          </li>
          <li className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-orange-500 mr-2"></span>
            Traditional Violinists
          </li>
          <li className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-orange-500 mr-2"></span>
            Flute & Harp Players
          </li>
          <li className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-orange-500 mr-2"></span>
            Wedding DJ Specialists
          </li>
          <li className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-orange-500 mr-2"></span>
            Hora Dance Leaders
          </li>
          <li className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-orange-500 mr-2"></span>
            Folk Music Performers
          </li>
          <li className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-orange-500 mr-2"></span>
            Vocalists
          </li>
        </ul>
      </div>
    </div>
  );

  const BarMitzvahContent = () => (
    <div className="text-gray-700 text-lg">
      <p className="mb-6 text-lg leading-relaxed font-medium">
        Bar Mitzvah Entertainment:
      </p>
      <ul className="space-y-4 mb-6">
        <li className="flex">
          <span className="h-2 w-2 rounded-full bg-orange-500 mr-3 mt-2.5"></span>
          <p>
            <span className="font-medium">Interactive Games & Activities:</span> From trivia contests and dance-offs to photo
            booths and live video mixing, we offer a variety of interactive games to keep
            guests entertained throughout the event. These activities are designed to engage
            guests of all ages, making sure everyone has a great time.
          </p>
        </li>
        <li className="flex">
          <span className="h-2 w-2 rounded-full bg-orange-500 mr-3 mt-2.5"></span>
          <p>
            <span className="font-medium">DJ and Dance Party:</span> Our professional DJ specialises in creating a high-energy
            atmosphere with a mix of Jewish music and popular hits, perfect for teens and
            adults alike. We'll ensure your Bar Mitzvah party stays lively and exciting with
            customized playlists.
          </p>
        </li>
        <li className="flex">
          <span className="h-2 w-2 rounded-full bg-orange-500 mr-3 mt-2.5"></span>
          <p>
            <span className="font-medium">Live Performances & Entertainment:</span> Consider booking our live band and
            performers to bring additional entertainment to your Bar Mitzvah. We can also
            organize dance performances or even an icebreaker game to make your guests
            feel at ease and involved in the celebration.
          </p>
        </li>
        <li className="flex">
          <span className="h-2 w-2 rounded-full bg-orange-500 mr-3 mt-2.5"></span>
          <p>
            <span className="font-medium">Candle Lighting Ceremony:</span> This important Bar Mitzvah tradition is made even
            more special with music, lighting, and thoughtful choreography. We help make
            this moment memorable and meaningful for your child and your family.
          </p>
        </li>
      </ul>

      <div className="mt-6">
        <p className="font-semibold text-lg mb-2 text-orange-800">
          Bar Mitzvah Entertainment Services:
        </p>
        <ul className="grid grid-cols-2 gap-2 mt-3">
          <li className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-orange-500 mr-2"></span>
            Interactive Game Hosts
          </li>
          <li className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-orange-500 mr-2"></span>
            Youth-Focused DJs
          </li>
          <li className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-orange-500 mr-2"></span>
            Photo Booths
          </li>
          <li className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-orange-500 mr-2"></span>
            Live Video Mixing
          </li>
          <li className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-orange-500 mr-2"></span>
            Dance Performers
          </li>
          <li className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-orange-500 mr-2"></span>
            Candle Lighting Specialists
          </li>
          <li className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-orange-500 mr-2"></span>
            Icebreaker Facilitators
          </li>
          <li className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-orange-500 mr-2"></span>
            Live Bands
          </li>
        </ul>
      </div>
    </div>
  );

  const SpecialContent = () => (
    <div className="text-gray-700 text-lg">
      <p className="mb-6 text-lg leading-relaxed font-medium">
        Special Touches:
      </p>
      <ul className="space-y-4 mb-6">
        <li className="flex">
          <span className="h-2 w-2 rounded-full bg-orange-500 mr-3 mt-2.5"></span>
          <p>
            <span className="font-medium">Customizable Themes:</span> Whether you're envisioning a traditional or modern event,
            we can design entertainment to match your theme and vision. Our services can be
            fully tailored to complement your style, from elegant ballroom weddings to vibrant
            and festive Bar Mitzvahs.
          </p>
        </li>
      </ul>
      
      <p className="mb-4 text-lg leading-relaxed">
        At Shades Live Music, we are committed to making your Jewish wedding or Bar Mitzvah
        an extraordinary event, filled with tradition, joy, and vibrant energy. Our expert
        entertainers are passionate about creating unforgettable experiences that honor your
        heritage while celebrating the milestones of your life.
      </p>
      
      <div className="mt-6">
        <p className="font-semibold text-lg mb-2 text-orange-800">
          Additional Services:
        </p>
        <ul className="grid grid-cols-2 gap-2 mt-3">
          <li className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-orange-500 mr-2"></span>
            Theme Customization
          </li>
          <li className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-orange-500 mr-2"></span>
            Tradition Consultants
          </li>
          <li className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-orange-500 mr-2"></span>
            Custom Music Arrangements
          </li>
          <li className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-orange-500 mr-2"></span>
            Event Planning Support
          </li>
          <li className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-orange-500 mr-2"></span>
            Venue Coordination
          </li>
          <li className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-orange-500 mr-2"></span>
            Sound & Lighting
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
                alt={`Jewish Wedding Showcase ${index + 1}`}
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
          title="JEWISH WEDDING AND BAR MITZVAH ENTERTAINMENT"
          content={<IntroductionContent />}
          images={sectionImages.traditional}
          isVisible={visibleSections.introduction}
        />
      </div>

      {/* Service Sections */}
      <div id="traditional">
        <ServiceSection
          id="traditional"
          title="JEWISH WEDDING ENTERTAINMENT"
          content={<TraditionalContent />}
          images={sectionImages.traditional}
          isVisible={visibleSections.traditional}
        />
      </div>

      <div id="barMitzvah">
        <ServiceSection
          id="barMitzvah"
          title="BAR MITZVAH ENTERTAINMENT"
          content={<BarMitzvahContent />}
          images={sectionImages.barMitzvah}
          isVisible={visibleSections.barMitzvah}
        />
      </div>

      <div id="special">
        <ServiceSection
          id="special"
          title="SPECIAL TOUCHES"
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