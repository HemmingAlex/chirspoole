"use client";
import React, { useState, useEffect, useRef } from "react";
import YouTubePlayer from "../../components/MutableYotubePlayer";
import Lightbox from "../../components/Lightbox";
import { motion, useInView, useAnimation } from "framer-motion";
import Image from "next/image";

// Stock images for band gallery from Unsplash
const bandImages = [
  "https://images.unsplash.com/photo-1544813545-4827b64fcacb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1627850471812-4923a8e5cb77?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1656128851191-c0d3b21aff1c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1606382582874-536a5edef8d3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1677156711227-38bdfa326a11?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1560010954-0ea652c47dff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

// Testimonial images from Unsplash
const testimonialImages = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

// Service types with descriptions and images from Unsplash
const serviceTypes = [
  {
    id: "ceremony",
    title: "FUNERAL CEREMONY",
    description:
      "Our professional musicians provide dignified and moving musical accompaniment for funeral ceremonies. We work closely with you to select appropriate pieces that honor your loved one&apos;s memory and provide comfort during this difficult time.",
    description2:
      "The Shade Band offers solo instrumentalists, vocalists, small ensembles, or full band performances to match your preferences and the tone of the service.",
    image:
      "https://images.unsplash.com/photo-1578701763370-0eecd33a3bba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "prelude",
    title: "PRELUDE MUSIC",
    description:
      "As guests arrive and gather, our musicians provide gentle, comforting background music to create a reflective atmosphere. Our prelude selections can include classical pieces, hymns, or favorite songs of your loved one, creating a personal and meaningful ambiance.",
    image:
      "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "tribute",
    title: "MUSICAL TRIBUTES",
    description:
      "A musical tribute can be one of the most touching moments in a funeral service. Whether it&apos;s performing a loved one&apos;s favorite song, a meaningful hymn, or a classical piece that captures their spirit, The Shade Band delivers heartfelt performances that honor their memory and provide comfort to family and friends.",
    image:
      "https://images.unsplash.com/photo-1507838153414-b4b713384a76?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "postlude",
    title: "POSTLUDE & GRAVESIDE",
    description:
      "We provide appropriate musical accompaniment for the conclusion of the service and at graveside ceremonies. The Shade Band can perform traditional pieces, contemporary selections, or cultural music specific to your family&apos;s traditions, offering a final musical tribute as you say goodbye.",
    image:
      "https://images.unsplash.com/photo-1618365568330-9163739e9400?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

// Enhanced animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Animated service section component with alternating layout
const AnimatedServiceSection = ({ service, index }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, threshold: 0.3 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <div id={service.id} ref={ref}>
      <motion.section
        initial="hidden"
        animate={controls}
        variants={fadeInUp}
        className="py-16 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {index % 2 === 0 ? (
              <>
                <motion.div
                  className="relative h-[400px] rounded-lg overflow-hidden shadow-xl"
                  variants={fadeInUp}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <h2 className="text-3xl font-bold mb-6 text-purple-900">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  {service.description2 && (
                    <p className="text-gray-600">{service.description2}</p>
                  )}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-6 bg-purple-800 text-white py-2 px-6 rounded-md hover:bg-purple-700 transition-colors"
                  >
                    Learn More
                  </motion.button>
                </motion.div>
              </>
            ) : (
              <>
                <motion.div variants={fadeInUp}>
                  <h2 className="text-3xl font-bold mb-6 text-purple-900">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  {service.description2 && (
                    <p className="text-gray-600">{service.description2}</p>
                  )}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-6 bg-purple-800 text-white py-2 px-6 rounded-md hover:bg-purple-700 transition-colors"
                  >
                    Learn More
                  </motion.button>
                </motion.div>
                <motion.div
                  className="relative h-[400px] rounded-lg overflow-hidden shadow-xl"
                  variants={fadeInUp}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </>
            )}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

// Testimonial card component
const TestimonialCard = ({ text, author, image, index }) => (
  <motion.div variants={fadeInUp} className="bg-white p-6 rounded-lg shadow-lg">
    <div className="flex items-center mb-4">
      <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
        <Image src={image} alt={author} fill className="object-cover" />
      </div>
      <p className="font-semibold">{author}</p>
    </div>
    <p className="text-gray-600 italic">{text}</p>
  </motion.div>
);

export default function FuneralServicesPage() {
  const [muted, setMuted] = useState("1");
  const testimonialsRef = useRef(null);
  const testimonialsControls = useAnimation();
  const testimonialsInView = useInView(testimonialsRef, {
    once: false,
    threshold: 0.2,
  });

  // Classical piano music - Beethoven&apos;s Moonlight Sonata
  const videoId = "4Tr0otuiQuU";

  useEffect(() => {
    if (testimonialsInView) {
      testimonialsControls.start("visible");
    }
  }, [testimonialsControls, testimonialsInView]);



  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10 flex flex-col items-center justify-center text-center p-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              The Shade Band
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
              Respectful Musical Tributes
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto mb-8">
              Our compassionate musicians provide meaningful musical
              accompaniment to honor and celebrate the life of your loved one.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-purple-800 text-white py-3 px-8 rounded-lg font-semibold hover:bg-purple-700 transition duration-300 mt-4"
            >
              Book Our Services
            </motion.button>
          </motion.div>
        </div>
        <YouTubePlayer
          videoId={videoId}
          muted={muted}
          onMuteChange={(newMutedState) => setMuted(newMutedState)}
        />
      </section>

      {/* About Us Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-purple-900 mb-4">
              About The Shade Band
            </h2>
            <div className="w-24 h-1 bg-purple-800 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1525201548942-d8732f6617a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="The Shade Band"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-purple-900 mb-4">
                Experienced Musical Professionals
              </h3>
              <p className="text-gray-600 mb-4">
                The Shade Band has been providing respectful and meaningful
                musical tributes for funeral services for over 15 years. Our
                musicians are highly trained professionals who understand the
                importance of creating the right atmosphere during such
                sensitive occasions.
              </p>
              <p className="text-gray-600 mb-4">
                We offer a diverse repertoire that spans classical, religious,
                traditional, and contemporary music to ensure we can honor your
                loved one&apos;s memory in the most fitting way.
              </p>
              <p className="text-gray-600">
                Our approach is always compassionate, respectful, and tailored
                to your specific needs and wishes.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 bg-purple-800 text-white py-2 px-6 rounded-md hover:bg-purple-700 transition-colors"
              >
                Our Story
              </motion.button>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Service Sections */}
      {serviceTypes.map((service, index) => (
        <AnimatedServiceSection
          key={service.id}
          service={service}
          index={index}
        />
      ))}

      {/* Gallery Section */}
      {/* Gallery Section - FIXED */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="py-20 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-purple-900 mb-4">
              Our Gallery
            </h2>
            <div className="w-24 h-1 bg-purple-800 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto mb-8">
              View moments from our performances and see how The Shade Band
              brings comfort and beauty to life celebration services.
            </p>
          </div>

          {/* This is the correct way to use the Lightbox component - it renders both thumbnails and handles popup */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            <Lightbox
              images={[
                {
                  id: 1,
                  url: "https://images.unsplash.com/photo-1544813545-4827b64fcacb?q=80&w=2070&auto=format&fit=crop",
                  alt: "Classical musician performance",
                },
                {
                  id: 2,
                  url: "https://images.unsplash.com/photo-1627850471812-4923a8e5cb77?q=80&w=2076&auto=format&fit=crop",
                  alt: "Funeral service music",
                },
                {
                  id: 3,
                  url: "https://images.unsplash.com/photo-1656128851191-c0d3b21aff1c?q=80&w=1974&auto=format&fit=crop",
                  alt: "String quartet performance",
                },
                {
                  id: 4,
                  url: "https://images.unsplash.com/photo-1606382582874-536a5edef8d3?q=80&w=2070&auto=format&fit=crop",
                  alt: "Solo musician performance",
                },
                {
                  id: 5,
                  url: "https://images.unsplash.com/photo-1677156711227-38bdfa326a11?q=80&w=2070&auto=format&fit=crop",
                  alt: "Memorial service music",
                },
                {
                  id: 6,
                  url: "https://images.unsplash.com/photo-1560010954-0ea652c47dff?q=80&w=2070&auto=format&fit=crop",
                  alt: "Piano performance",
                },
                {
                  id: 7,
                  url: "https://images.unsplash.com/photo-1524779709304-40b5a3560c60?q=80&w=2070&auto=format&fit=crop",
                  alt: "Vocalist performance",
                },
                {
                  id: 8,
                  url: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?q=80&w=2070&auto=format&fit=crop",
                  alt: "Musical tribute",
                },
              ]}
            />
          </div>
        </div>
      </motion.section>
      {/* Testimonials Section */}
      <motion.section
        ref={testimonialsRef}
        initial="hidden"
        animate={testimonialsControls}
        variants={staggerChildren}
        className="py-20 bg-gradient-to-r from-purple-900 to-purple-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Testimonials</h2>
            <div className="w-24 h-1 bg-white mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              text="The musicians from The Shade Band provided such beautiful music for my father&apos;s service. Their rendition of his favorite song brought tears to everyone&apos;s eyes and provided a moment of beauty during our grief."
              author="Sarah Thompson"
              image={testimonialImages[0]}
              index={0}
            />
            <TestimonialCard
              text="The quartet was professional, respectful, and played with such emotion. Their music was the perfect tribute to my mother who loved classical music."
              author="James Wilson"
              image={testimonialImages[1]}
              index={1}
            />
            <TestimonialCard
              text="We were at a loss for how to make the service special, but The Shade Band guided us through selecting meaningful pieces. The music brought comfort to our family during an incredibly difficult day."
              author="Maria Rodriguez"
              image={testimonialImages[2]}
              index={2}
            />
          </div>
        </div>
      </motion.section>

      {/* Our Music Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-purple-900 mb-4">
              Our Music
            </h2>
            <div className="w-24 h-1 bg-purple-800 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              The Shade Band offers a diverse repertoire to suit various
              preferences and cultural traditions. Here are some examples of our
              most requested pieces.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-gray-50 rounded-lg p-6 shadow-md"
            >
              <h3 className="text-xl font-semibold text-purple-900 mb-3">
                Classical Selections
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Ave Maria (Schubert)</li>
                <li>• Moonlight Sonata (Beethoven)</li>
                <li>• Air on the G String (Bach)</li>
                <li>• Canon in D (Pachelbel)</li>
                <li>• Pie Jesu (Fauré)</li>
              </ul>
            </motion.div>
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-gray-50 rounded-lg p-6 shadow-md"
            >
              <h3 className="text-xl font-semibold text-purple-900 mb-3">
                Traditional Hymns
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Amazing Grace</li>
                <li>• How Great Thou Art</li>
                <li>• In the Garden</li>
                <li>• It Is Well With My Soul</li>
                <li>• Abide With Me</li>
              </ul>
            </motion.div>
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-gray-50 rounded-lg p-6 shadow-md"
            >
              <h3 className="text-xl font-semibold text-purple-900 mb-3">
                Contemporary Songs
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Hallelujah (Leonard Cohen)</li>
                <li>• Time to Say Goodbye</li>
                <li>• Wind Beneath My Wings</li>
                <li>• My Way (Frank Sinatra)</li>
                <li>• You Raise Me Up</li>
              </ul>
            </motion.div>
          </div>
          <div className="text-center mt-10">
            <p className="text-gray-600 mb-6">
              Don&apos;t see what you&apos;re looking for? We can learn special requests
              with advance notice.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-purple-800 text-white py-3 px-8 rounded-lg font-semibold hover:bg-purple-700 transition duration-300"
            >
              View Full Repertoire
            </motion.button>
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="py-20 bg-gray-100"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-purple-900 mb-4">
            Request Our Services
          </h2>
          <div className="w-24 h-1 bg-purple-800 mx-auto mb-6"></div>
          <p className="text-gray-600 mb-8">
            We understand this is a difficult time. The Shade Band is here to
            assist you with compassion and care in arranging the perfect musical
            tribute for your loved one.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="text-purple-800 text-3xl mb-3">
                <i className="fas fa-phone"></i>
              </div>
              <h3 className="text-xl font-semibold text-purple-900 mb-2">
                Call Us
              </h3>
              <p className="text-gray-600">(555) 123-4567</p>
              <p className="text-gray-500 text-sm mt-2">
                Available 7 days a week, 8am-8pm
              </p>
            </motion.div>
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="text-purple-800 text-3xl mb-3">
                <i className="fas fa-envelope"></i>
              </div>
              <h3 className="text-xl font-semibold text-purple-900 mb-2">
                Email Us
              </h3>
              <p className="text-gray-600">info@shadesband.com</p>
              <p className="text-gray-500 text-sm mt-2">
                We respond within 24 hours
              </p>
            </motion.div>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-purple-900 text-white py-3 px-8 rounded-lg font-semibold hover:bg-purple-800 transition duration-300"
          >
            Book A Consultation
          </motion.button>
          <p className="mt-6 text-gray-500">
            For immediate assistance, please call our priority line: (555)
            123-4567
          </p>
        </div>
      </motion.section>
    </div>
  );
}
