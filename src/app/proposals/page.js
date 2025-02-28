"use client";
import React, { useState, useEffect, useRef } from "react";
import YouTubePlayer from "../../components/MutableYotubePlayer";
import { motion, useInView, useAnimation } from "framer-motion";
import Lightbox from "../../components/Lightbox";

// Wedding imagery from Unsplash
const weddingImages = {
  ceremony: [
    "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1544592732-0208a92a0bf1?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80",
  ],
  reception: [
    "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1470583862768-8d42b234ba75?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80",
  ],
  dinner: [
    "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1508219803418-5f1f89469b54?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1513278974582-3e1b4a4fa485?auto=format&fit=crop&q=80",
  ],
  evening: [
    "https://images.unsplash.com/photo-1470217957101-da7150b9b681?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1533147670608-2a2f9775d3a4?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1478147427282-58a87a120781?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?auto=format&fit=crop&q=80",
  ],
};

// Prestige client logos
const prestigeClients = [
  {
    id: "client1",
    url: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?auto=format&fit=crop&q=80",
    alt: "Luxury Hotel Chain"
  },
  {
    id: "client2",
    url: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&q=80",
    alt: "Celebrity Wedding"
  },
  {
    id: "client3",
    url: "https://images.unsplash.com/photo-1496024840928-4c417adf211d?auto=format&fit=crop&q=80",
    alt: "Royal Event"
  },
  {
    id: "client4",
    url: "https://images.unsplash.com/photo-1541417904950-b855846fe074?auto=format&fit=crop&q=80",
    alt: "Luxury Resort"
  }
];

// Gallery images
const galleryImages = [
  {
    id: "gallery1",
    url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80",
    alt: "String quartet at ceremony"
  },
  {
    id: "gallery2",
    url: "https://images.unsplash.com/photo-1470217957101-da7150b9b681?auto=format&fit=crop&q=80",
    alt: "Evening entertainment"
  },
  {
    id: "gallery3",
    url: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80",
    alt: "Dining music"
  },
  {
    id: "gallery4",
    url: "https://images.unsplash.com/photo-1470583862768-8d42b234ba75?auto=format&fit=crop&q=80",
    alt: "Reception music"
  },
  {
    id: "gallery5",
    url: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80",
    alt: "Wedding ceremony"
  },
  {
    id: "gallery6",
    url: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&q=80",
    alt: "Wedding violin performance"
  },
  {
    id: "gallery7",
    url: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?auto=format&fit=crop&q=80",
    alt: "Live band performance"
  },
  {
    id: "gallery8",
    url: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80",
    alt: "First dance with live music"
  }
];

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.8, 
      ease: "easeOut" 
    }
  }
};

// Enhanced ServiceSection component with image slideshow
const ServiceSection = ({ id, title, isVisible, children, imageUrls = [] }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, threshold: 0.3 });
  
  // Auto-advance the slideshow every 5 seconds
  useEffect(() => {
    console.log(isVisible, 'this is probably pointless plz check')
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [imageUrls.length]);
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <div id={id} ref={ref}>
      <motion.section
        initial="hidden"
        animate={controls}
        variants={fadeInUp}
        className="py-16 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-xl overflow-hidden shadow-2xl h-[400px]">
              {imageUrls.map((url, index) => (
                <motion.div
                  key={`${id}-image-${index}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: index === currentImageIndex ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <img
                    src={url}
                    alt={`${title} image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
              
              {/* Image navigation dots */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                {imageUrls.map((_, index) => (
                  <button
                    key={`${id}-dot-${index}`}
                    className={`w-2 h-2 rounded-full ${
                      index === currentImageIndex ? "bg-white" : "bg-white/50"
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </div>
            </div>
            
            <div>
              <motion.h2
                className="text-3xl font-bold mb-6 text-purple-800"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                  type: "spring",
                  stiffness: 100,
                }}
              >
                {title}
              </motion.h2>
              {children}
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

// Content components for each section
const CeremonyContent = () => (
  <div className="text-gray-700">
    <p className="mb-4 text-lg leading-relaxed">
      Make your wedding day even more memorable with the perfect soundtrack to
      accompany your love story. Our music entertainment services are designed
      to elevate every moment, from the emotional walk down the aisle to the
      joyous celebration afterward.
    </p>
    <p className="mb-4 text-lg leading-relaxed">
      We offer a range of musical options tailored to your style, whether you
      prefer classical elegance, contemporary hits, or a unique blend of
      genres. Our experienced musicians will work closely with you to create the perfect atmosphere.
    </p>
    <div className="mt-6">
      <p className="font-semibold text-lg mb-2 text-purple-800">
        Services Offered:
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
          Vocalists
        </li>
      </ul>
      
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-6 bg-purple-800 text-white py-2 px-6 rounded-md hover:bg-purple-700 transition-colors"
      >
        Learn More
      </motion.button>
    </div>
  </div>
);

const ReceptionContent = () => (
  <div className="text-gray-700">
    <p className="mb-4 text-lg leading-relaxed">
      Set the perfect tone for your wedding drinks reception with live music that
      creates an elegant and relaxed atmosphere. Our entertainment services are designed
      to enhance the mood as your guests mingle and celebrate.
    </p>
    <p className="mb-4 text-lg leading-relaxed">
      Choose from sophisticated acoustic solos, jazz ensembles, light classical pieces
      or contemporary favorites. We tailor each performance to suit your venue, guest list, 
      and wedding theme.
    </p>
    <div className="mt-6">
      <p className="font-semibold text-lg mb-2 text-purple-800">
        Services Offered:
      </p>
      <ul className="grid grid-cols-2 gap-2 mt-3">
        <li className="flex items-center">
          <span className="h-2 w-2 rounded-full bg-purple-500 mr-2"></span>
          Solo performers
        </li>
        <li className="flex items-center">
          <span className="h-2 w-2 rounded-full bg-purple-500 mr-2"></span>
          Jazz bands
        </li>
        <li className="flex items-center">
          <span className="h-2 w-2 rounded-full bg-purple-500 mr-2"></span>
          Acoustic duos/trios
        </li>
        <li className="flex items-center">
          <span className="h-2 w-2 rounded-full bg-purple-500 mr-2"></span>
          Specialty performers
        </li>
        <li className="flex items-center">
          <span className="h-2 w-2 rounded-full bg-purple-500 mr-2"></span>
          Magicians
        </li>
        <li className="flex items-center">
          <span className="h-2 w-2 rounded-full bg-purple-500 mr-2"></span>
          Custom playlists
        </li>
      </ul>
      
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-6 bg-purple-800 text-white py-2 px-6 rounded-md hover:bg-purple-700 transition-colors"
      >
        Learn More
      </motion.button>
    </div>
  </div>
);

const DinnerContent = () => (
  <div className="text-gray-700">
    <p className="mb-4 text-lg leading-relaxed">
      Enhance your wedding dinner with elegant music that complements the celebration,
      providing the perfect backdrop for dining, conversation, and connection,
      making your special evening even more memorable.
    </p>
    <p className="mb-4 text-lg leading-relaxed">
      Choose from soft jazz, classical string quartets, or tasteful acoustic tunes.
      Our performers will set the right mood for your guests while keeping the energy 
      light and enjoyable.
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
          Solo musicians
        </li>
        <li className="flex items-center">
          <span className="h-2 w-2 rounded-full bg-purple-500 mr-2"></span>
          Jazz bands
        </li>
        <li className="flex items-center">
          <span className="h-2 w-2 rounded-full bg-purple-500 mr-2"></span>
          String Quartets
        </li>
        <li className="flex items-center">
          <span className="h-2 w-2 rounded-full bg-purple-500 mr-2"></span>
          Duos/Trios
        </li>
        <li className="flex items-center">
          <span className="h-2 w-2 rounded-full bg-purple-500 mr-2"></span>
          Custom playlists
        </li>
      </ul>
      
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-6 bg-purple-800 text-white py-2 px-6 rounded-md hover:bg-purple-700 transition-colors"
      >
        Learn More
      </motion.button>
    </div>
  </div>
);

const EveningContent = () => (
  <div className="text-gray-700">
    <p className="mb-4 text-lg leading-relaxed">
      As the evening unfolds, let the celebration continue with unforgettable
      entertainment that sets the tone for a night to remember. Our evening
      wedding entertainment is designed to energize your guests and create
      lasting memories.
    </p>
    <p className="mb-4 text-lg leading-relaxed">
      Choose from live bands, DJs, or solo performers, each carefully selected to match 
      your wedding&apos;s vibe. From the first dance to the final song, our entertainers will 
      keep the energy high and your guests on their feet.
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
          Professional DJ
        </li>
        <li className="flex items-center">
          <span className="h-2 w-2 rounded-full bg-purple-500 mr-2"></span>
          Solo musicians
        </li>
        <li className="flex items-center">
          <span className="h-2 w-2 rounded-full bg-purple-500 mr-2"></span>
          Interactive entertainment
        </li>
        <li className="flex items-center">
          <span className="h-2 w-2 rounded-full bg-purple-500 mr-2"></span>
          First dance performance
        </li>
        <li className="flex items-center">
          <span className="h-2 w-2 rounded-full bg-purple-500 mr-2"></span>
          Custom lighting
        </li>
      </ul>
      
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-6 bg-purple-800 text-white py-2 px-6 rounded-md hover:bg-purple-700 transition-colors"
      >
        Learn More
      </motion.button>
    </div>
  </div>
);

export default function WeddingsPage() {
  const [muted, setMuted] = useState("1");
  const [visibleSections, setVisibleSections] = useState({
    ceremony: false,
    reception: false,
    dinner: false,
    evening: false,
    gallery: false,
  });
  const videoId = "CZVKTBY3tNk";
  const galleryRef = useRef(null);
  const galleryControls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const sections = {
        ceremony: document.getElementById("ceremony"),
        reception: document.getElementById("drinks-reception"),
        dinner: document.getElementById("dinner"),
        evening: document.getElementById("evening-party"),
        gallery: document.getElementById("gallery"),
      };

      Object.entries(sections).forEach(([key, section]) => {
        if (section) {
          const rect = section.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight * 0.75;
          setVisibleSections((prev) => ({ ...prev, [key]: isVisible }));
          
          if (key === 'gallery' && isVisible) {
            galleryControls.start("visible");
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [galleryControls]);

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10 flex flex-col items-center justify-center text-center p-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Wedding Music & Entertainment
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto mb-8">
              Create unforgettable moments with our premium live music and entertainment
              services tailored for your special day.
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-purple-800 text-white py-3 px-8 rounded-lg font-semibold hover:bg-purple-700 transition duration-300 mt-4"
            >
              Book a Consultation
            </motion.button>
          </motion.div>
        </div>
        <YouTubePlayer
          videoId={videoId}
          muted={muted}
          onMuteChange={(newMutedState) => setMuted(newMutedState)}
        />
      </section>

      {/* Service Sections with improved content and imagery */}
      <ServiceSection
        id="ceremony"
        title="CEREMONY"
        isVisible={visibleSections.ceremony}
        imageUrls={weddingImages.ceremony}
      >
        <CeremonyContent />
      </ServiceSection>

      <ServiceSection
        id="drinks-reception"
        title="DRINKS RECEPTION"
        isVisible={visibleSections.reception}
        imageUrls={weddingImages.reception}
      >
        <ReceptionContent />
      </ServiceSection>

      <ServiceSection
        id="dinner"
        title="DINNER"
        isVisible={visibleSections.dinner}
        imageUrls={weddingImages.dinner}
      >
        <DinnerContent />
      </ServiceSection>

      <ServiceSection
        id="evening-party"
        title="EVENING PARTY"
        isVisible={visibleSections.evening}
        imageUrls={weddingImages.evening}
      >
        <EveningContent />
      </ServiceSection>

      {/* Gallery Section */}
      <motion.section 
        id="gallery"
        ref={galleryRef}
        initial="hidden"
        animate={galleryControls}
        variants={fadeInUp}
        className="py-20 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-purple-800 mb-4">Our Gallery</h2>
            <div className="w-24 h-1 bg-purple-800 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto mb-8">
              Browse through our collection of wedding performances and see how we help create 
              magical moments on your special day.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            <Lightbox images={galleryImages} />
          </div>
        </div>
      </motion.section>

      {/* Prestige Clients Section with improved images */}
      <section className="py-20 bg-gradient-to-r from-purple-800 to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Our Prestige Clients
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <Lightbox images={prestigeClients} />
          </div>
        </div>
      </section>
      
      {/* Testimonials Section (New) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-purple-800 mb-4">Testimonials</h2>
            <div className="w-24 h-1 bg-purple-800 mx-auto mb-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-gray-50 p-6 rounded-lg shadow-lg"
            >
              <p className="text-gray-600 italic mb-4">
                &quot;The Shade Band made our wedding day absolutely magical. Their string quartet during 
                the ceremony brought tears to everyone&apos;s eyes, and the band had everyone dancing all 
                night long. Truly exceptional musicians!&quot;
              </p>
              <p className="font-semibold">- Sarah & Michael</p>
            </motion.div>
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-gray-50 p-6 rounded-lg shadow-lg"
            >
              <p className="text-gray-600 italic mb-4">
                &quot;We couldn&apos;t have asked for better entertainment. From helping us select the perfect 
                music for each part of our day to the flawless performances, the team went above and 
                beyond to make our wedding unforgettable.&quot;
              </p>
              <p className="font-semibold">- Emma & David</p>
            </motion.div>
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-gray-50 p-6 rounded-lg shadow-lg"
            >
              <p className="text-gray-600 italic mb-4">
                &quot;Our guests are still talking about how amazing the music was at our wedding! The 
                singers were phenomenal, and the band kept the dance floor packed all night. Worth 
                every penny and more!&quot;
              </p>
              <p className="font-semibold">- James & Rebecca</p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Contact Section (New) */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-purple-800 mb-4">Book Our Services</h2>
          <div className="w-24 h-1 bg-purple-800 mx-auto mb-6"></div>
          <p className="text-gray-600 mb-8">
            Ready to create the perfect musical atmosphere for your wedding day? Contact us to discuss
            your vision and how we can make it a reality.
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-purple-800 text-white py-3 px-8 rounded-lg font-semibold hover:bg-purple-700 transition duration-300"
          >
            Request a Quote
          </motion.button>
          <p className="mt-6 text-gray-500">
            For immediate assistance, please call: (555) 123-4567
          </p>
        </div>
      </section>
    </div>
  );
}