"use client";
import React, { useState, useEffect } from "react";
import YouTubePlayer from "../../components/MutableYotubePlayer";
import Lightbox from "../../components/Lightbox";
import { motion } from "framer-motion";
import { Mic, Music, Star, Users } from "lucide-react";

// Real images for each section
const clientImages = [
  "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1496024840928-4c417adf211d?auto=format&fit=crop&q=80",
];

// Slideshow images for each section
const sectionImages = {
  ceremony: [
    "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1544592732-0208a92a0bf1?auto=format&fit=crop&q=80",
  ],
  reception: [
    "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1470583862768-8d42b234ba75?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&q=80",
  ],
  dinner: [
    "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1508219803418-5f1f89469b54?auto=format&fit=crop&q=80",
  ],
  evening: [
    "https://images.unsplash.com/photo-1470217957101-da7150b9b681?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1533147670608-2a2f9775d3a4?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1478147427282-58a87a120781?auto=format&fit=crop&q=80",
  ],
};

const valuesArray = [
  {
    icon: <Mic className="h-8 w-8 text-purple-800" />,
    title: "100% Live Performance",
    description:
      "Every note is played live - no backing tracks, no miming, just pure musical talent.",
  },
  {
    icon: <Music className="h-8 w-8 text-purple-800" />,
    title: "Custom Experiences",
    description:
      "Each performance is tailored to create the perfect atmosphere for your special event.",
  },
  {
    icon: <Star className="h-8 w-8 text-purple-800" />,
    title: "World-Class Musicians",
    description:
      "We bring together the finest performers to deliver exceptional musical experiences.",
  },
  {
    icon: <Users className="h-8 w-8 text-purple-800" />,
    title: "Full-Service Events",
    description:
      "From ceremonies to evening parties, we provide comprehensive entertainment solutions.",
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
          {/* Left side - Just like original but with slideshow */}
          <div className="w-full py-0 my-0 pr-8 lg:w-1/2">
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
          <div className="w-full xl:w-1/2">
            <motion.h2
              className="text-3xl font-bold mb-6 text-purple-800"
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

export default function WeddingsPage() {
  const [muted, setMuted] = useState("1");
  const [visibleSections, setVisibleSections] = useState({
    ceremony: false,
    reception: false,
    dinner: false,
    evening: false,
  });
  const videoId = "CZVKTBY3tNk";

  // Define the formatted content components for each section
  const CeremonyContent = () => (
    <div className="text-gray-700 text-lg">
      <p className="mb-4 text-lg leading-relaxed">
        Make your wedding day even more memorable with the perfect soundtrack to
        accompany your love story. Our music entertainment services are designed
        to elevate every moment, from the emotional walk down the aisle to the
        joyous celebration afterward.
      </p>
      <p className="mb-4 text-lg leading-relaxed">
        We offer a range of musical options tailored to your style, whether you
        prefer classical elegance, contemporary hits, or a unique blend of
        genres. Our experienced musicians, DJs, and vocalists will work closely
        with you to create the perfect atmosphere, ensuring every part of your
        wedding ceremony is accompanied by the ideal musical ambience you have
        dreamt of.
      </p>
      <p className="mb-4 text-lg leading-relaxed">
        Let us provide the music that will help you celebrate your love in a way
        that feels as special and unique as your relationship.
      </p>
      <p className="mb-4 text-lg leading-relaxed font-medium">
        Walk Down the Isle - Ceremony - The Kiss
      </p>
      <div className="mt-6">
        <p className="font-semibold text-lg mb-2 text-purple-800">
          Services Offered for The Ceremony:
        </p>
        <ul className="grid grid-cols-2 gap-2 mt-3">
          <li className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-purple-500 mr-2"></span>
            Choir
          </li>
          <li className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-purple-500 mr-2"></span>
            Violinist
          </li>
          <li className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-purple-500 mr-2"></span>
            String quartet
          </li>
          <li className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-purple-500 mr-2"></span>
            Harpist
          </li>
          <li className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-purple-500 mr-2"></span>
            Organist/Pianist
          </li>
          <li className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-purple-500 mr-2"></span>
            Guitarist
          </li>
          <li className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-purple-500 mr-2"></span>
            Vocalists
          </li>
          <li className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-purple-500 mr-2"></span>
            Duos
          </li>
          <li className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-purple-500 mr-2"></span>
            Trios
          </li>
          <li className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-purple-500 mr-2"></span>
            Ensembles
          </li>
          <li className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-purple-500 mr-2"></span>
            Orchestra
          </li>
          <li className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-purple-500 mr-2"></span>
            Performers & Animal releases
          </li>
          <li className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-purple-500 mr-2"></span>
            Customized Playlists
          </li>
        </ul>
      </div>
    </div>
  );

  const ReceptionContent = () => (
    <div className="text-gray-700 text-lg">
      <p className="mb-4 text-lg leading-relaxed">
        Set the perfect tone for your wedding drinks reception with live music &
        performances that creates an elegant and relaxed atmosphere. Our music
        entertainment services are designed to enhance the mood of your special
        day, giving your guests a memorable experience as they mingle and
        celebrate.
      </p>
      <p className="mb-4 text-lg leading-relaxed">
        Choose from a variety of musical styles, from sophisticated acoustic
        solos and jazz ensembles to light classical pieces or contemporary
        favourites. Whether you prefer smooth background music or something a
        little more lively to get everyone talking, our talented musicians will
        provide the perfect entertainment that complements the ambiance and your
        personal style.
      </p>
      <p className="mb-4 text-lg leading-relaxed">
        We tailor each performance to suit your venue, guest list, and wedding
        theme, ensuring that the music flows seamlessly with the flow of your
        event. From the first toast to the last laugh, Allow us to help you set
        the perfect backdrop for your wedding drinks reception, ensuring a chic
        and unforgettable start to the celebration.
      </p>
      <div className="mt-6">
        <p className="font-semibold text-lg mb-2 text-purple-800">
          Services Offered:
        </p>
        <ul className="grid grid-cols-2 gap-2 mt-3">
          <li className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-purple-500 mr-2"></span>
            Solo performers (Guitarist, Pianist, Violinist, etc.)
          </li>
          <li className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-purple-500 mr-2"></span>
            Jazz bands or ensembles
          </li>
          <li className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-purple-500 mr-2"></span>
            Acoustic duos or trios
          </li>
          <li className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-purple-500 mr-2"></span>
            Performers/Fire /Statues
          </li>
          <li className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-purple-500 mr-2"></span>
            Magicians
          </li>
          <li className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-purple-500 mr-2"></span>
            Children&lsquo;s Entertainment
          </li>
          <li className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-purple-500 mr-2"></span>
            Giant Garden Games
          </li>
          <li className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-purple-500 mr-2"></span>
            Cocktail flair bartending
          </li>
          <li className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-purple-500 mr-2"></span>
            Custom playlists for a relaxed vibe
          </li>
        </ul>
      </div>
    </div>
  );

  const DinnerContent = () => (
    <div className="text-gray-700 text-lg">
      <p className="mb-4 text-lg leading-relaxed">
        Enhance your wedding dinner with elegant and engaging music that
        complements your celebration, for dining, conversation, and connection,
        making your special evening even more memorable.
      </p>
      <p className="mb-4 text-lg leading-relaxed">
        Choose from a variety of musical styles to suit the tone of your
        event—whether it&lsquo;s soft jazz, classical string quartets, or
        tasteful acoustic tunes, our performers will set the right mood for your
        guests. The music will gently fill the air, allowing for an intimate
        dining experience while keeping the energy light and enjoyable.
      </p>
      <p className="mb-4 text-lg leading-relaxed">
        We offer flexible options that can transition seamlessly throughout the
        evening, from a subtle background soundtrack during the meal to more
        upbeat tunes for when it&lsquo;s time to get the party started.
      </p>
      <div className="mt-6">
        <p className="font-semibold text-lg mb-2 text-purple-800">
          Services Offered:
        </p>
        <ul className="grid grid-cols-2 gap-2 mt-3">
          <li className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-purple-500 mr-2"></span>
            Singing Waiters
          </li>
          <li className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-purple-500 mr-2"></span>
            Solo musicians (Pianist, Guitarist, Harpist, etc.)
          </li>
          <li className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-purple-500 mr-2"></span>
            Jazz bands or String Quartets
          </li>
          <li className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-purple-500 mr-2"></span>
            Speciality performers
          </li>
          <li className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-purple-500 mr-2"></span>
            Duos/Trios
          </li>
          <li className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-purple-500 mr-2"></span>
            Full Party Band in-between Courses
          </li>
          <li className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-purple-500 mr-2"></span>
            Classical or Contemporary Ensembles
          </li>
          <li className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-purple-500 mr-2"></span>
            Custom playlists for the dinner mood
          </li>
        </ul>
      </div>
    </div>
  );

  const EveningContent = () => (
    <div className="text-gray-700 text-lg">
      <p className="mb-4 text-lg leading-relaxed">
        As the evening unfolds, let the celebration continue with unforgettable
        entertainment that sets the tone for a night to remember. Our evening
        wedding entertainment is designed to energize your guests and create
        lasting memories, whether you want to kick off the party with lively
        tunes or keep the atmosphere elegant and sophisticated.
      </p>
      <p className="mb-4 text-lg leading-relaxed">
        Choose from a variety of musical acts, including live bands, DJs, or
        solo performers, each carefully selected to match your wedding&lsquo;s
        vibe and your personal preferences. From the first dance to the final
        song, our entertainers will keep the energy high, ensuring everyone is
        on their feet and enjoying every moment.
      </p>
      <p className="mb-4 text-lg leading-relaxed">
        With seamless transitions between dinner and dancing, we ensure that the
        music flows effortlessly, creating a dynamic experience that keeps your
        guests engaged and the celebration going all night long.
      </p>
      <div className="mt-6">
        <p className="font-semibold text-lg mb-2 text-purple-800">
          Services Offered:
        </p>
        <ul className="grid grid-cols-2 gap-2 mt-3">
          <li className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-purple-500 mr-2"></span>
            5–36-piece Live band
          </li>
          <li className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-purple-500 mr-2"></span>
            Professional DJ with customized playlists
          </li>
          <li className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-purple-500 mr-2"></span>
            Solo musicians for more intimate vibes
          </li>
          <li className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-purple-500 mr-2"></span>
            Interactive entertainment (live karaoke, photo booths, etc.)
          </li>
          <li className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-purple-500 mr-2"></span>
            First dance with Live Band or Musicians
          </li>
        </ul>
      </div>
    </div>
  );

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
      <ServiceSection
        id="ceremony"
        title="CEREMONY"
        content={<CeremonyContent />}
        images={sectionImages.ceremony}
        isVisible={visibleSections.ceremony}
      />

      <ServiceSection
        id="drinks-reception"
        title="DRINKS RECEPTION"
        content={<ReceptionContent />}
        images={sectionImages.reception}
        isVisible={visibleSections.reception}
      />

      <ServiceSection
        id="dinner"
        title="DINNER"
        content={<DinnerContent />}
        images={sectionImages.dinner}
        isVisible={visibleSections.dinner}
      />

      <ServiceSection
        id="evening-party"
        title="EVENING PARTY"
        content={<EveningContent />}
        images={sectionImages.evening}
        isVisible={visibleSections.evening}
      />

      {/* Enhanced Prestigious Clients Section with animations and background */}
      <section className="py-20 relative overflow-hidden">
        {/* Background image with overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80"
            alt="Background"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gray-900/80"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.h2
            className="text-4xl font-bold text-center mb-16 text-white"
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
                    className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-purple-700"
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
                  <h3 className="text-2xl font-semibold text-purple-700">
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
                      <span className="h-2 w-2 rounded-full bg-purple-500 mr-2"></span>
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
                    className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-purple-700"
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
                  <h3 className="text-2xl font-semibold text-purple-700">
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
                      <span className="h-2 w-2 rounded-full bg-purple-500 mr-2"></span>
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
                    className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-purple-700"
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
                  <h3 className="text-2xl font-semibold text-purple-700">
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
                      <span className="h-2 w-2 rounded-full bg-purple-500 mr-2"></span>
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
          <div className="absolute inset-0 bg-purple-900/90 bg-gradient-to-b from-purple-900/90 to-indigo-900/90"></div>
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
                    className="text-xl font-semibold mb-4 text-center text-purple-800"
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
