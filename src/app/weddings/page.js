"use client";
import React, { useState, useEffect } from "react";
import YouTubePlayer from "../../components/MutableYotubePlayer";
// import { motion } from "framer-motion";
import { Prestigious, Values } from "@/components/RepeatSections";
import WeddingOptions from "@/components/WeddingOptions";
import InstagramSection from "@/components/InstagramSection ";

// Slideshow images for each section
// const sectionImages = {
//   ceremony: [
//     "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80",
//     "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80",
//     "https://images.unsplash.com/photo-1544592732-0208a92a0bf1?auto=format&fit=crop&q=80",
//   ],
//   reception: [
//     "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80",
//     "https://images.unsplash.com/photo-1470583862768-8d42b234ba75?auto=format&fit=crop&q=80",
//     "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&q=80",
//   ],
//   dinner: [
//     "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80",
//     "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&q=80",
//     "https://images.unsplash.com/photo-1508219803418-5f1f89469b54?auto=format&fit=crop&q=80",
//   ],
//   evening: [
//     "https://images.unsplash.com/photo-1470217957101-da7150b9b681?auto=format&fit=crop&q=80",
//     "https://images.unsplash.com/photo-1533147670608-2a2f9775d3a4?auto=format&fit=crop&q=80",
//     "https://images.unsplash.com/photo-1478147427282-58a87a120781?auto=format&fit=crop&q=80",
//   ],
// };

// const AnimatedText = ({ text, isVisible }) => {
//   return (
//     <>
//       {text.split("").map((char, index) => (
//         <motion.span
//           key={`char-${index}`}
//           initial={{ opacity: 0 }}
//           animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
//           transition={{
//             duration: 0.3,
//             delay: index * 0.08, // Staggered delay based on character position
//             ease: "easeOut",
//           }}
//           className="inline-block"
//         >
//           {char}
//         </motion.span>
//       ))}
//     </>
//   );
// };

// const ServiceSection = ({
//   id,
//   title,
//   content,
//   images,
//   isVisible,
//   imageOnRight = false,
// }) => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   // Auto-advance the slideshow every 5 seconds
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 5000);

//     return () => clearInterval(timer);
//   }, [images.length]);

//   return imageOnRight ? (
//     <motion.section
//       id={id}
//       initial={{ opacity: 0, y: 50 }}
//       animate={isVisible ? { opacity: 1, y: 0 } : {}}
//       transition={{ duration: 0.6 }}
//       className=" bg-white"
//     >
//       <div className="">
//         <div className="flex flex-wrap">
//           {/* Left side - Just like original but with slideshow */}
//           <div className="w-full lg:w-1/2 pb-8 px-8">
//             <motion.h2
//               className="text-3xl font-bold mb-6 text-orange-800"
//               initial={{ opacity: 0, x: -20 }}
//               animate={isVisible ? { opacity: 1, x: 0 } : {}}
//               transition={{
//                 duration: 0.8,
//                 delay: 0.2,
//                 type: "spring",
//                 stiffness: 100,
//               }}
//             >
//               <br />
//               <AnimatedText text={title} isVisible={isVisible} />
//             </motion.h2>
//             {content}
//             {/* <Lightbox /> */}
//           </div>

//           {/* Right side - Content */}
//           <div className="w-full xl:w-1/2 ">
//             <div className="relative aspect-video w-full overflow-hidden  shadow-lg h-full ">
//               {images.map((src, index) => (
//                 <motion.div
//                   key={`${id}-image-${index}`}
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: index === currentImageIndex ? 1 : 0 }}
//                   transition={{ duration: 0.5 }}
//                   className="absolute inset-0"
//                 >
//                   <img
//                     src={src}
//                     alt={`${title} image ${index + 1}`}
//                     className="w-full h-full object-cover"
//                   />
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </motion.section>
//   ) : (
//     <motion.section
//       id={id}
//       initial={{ opacity: 0, y: 50 }}
//       animate={isVisible ? { opacity: 1, y: 0 } : {}}
//       transition={{ duration: 0.6 }}
//       className="py-0 bg-white"
//     >
//       <div className="">
//         <div className="flex flex-wrap ">
//           {/* Left side - Just like original but with slideshow */}
//           <div className="w-full lg:w-1/2">
//             <div className="relative aspect-video w-full overflow-hidden  shadow-lg h-full">
//               {images.map((src, index) => (
//                 <motion.div
//                   key={`${id}-image-${index}`}
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: index === currentImageIndex ? 1 : 0 }}
//                   transition={{ duration: 0.5 }}
//                   className="absolute inset-0"
//                 >
//                   <img
//                     src={src}
//                     alt={`${title} image ${index + 1}`}
//                     className="w-full h-full object-cover"
//                   />
//                 </motion.div>
//               ))}
//             </div>
//             {/* <Lightbox /> */}
//           </div>

//           {/* Right side - Content */}
//           <div className="w-full xl:w-1/2 pb-8 px-8">
//             <motion.h2
//               className="text-3xl font-bold mb-6 text-orange-800"
//               initial={{ opacity: 0, x: -20 }}
//               animate={isVisible ? { opacity: 1, x: 0 } : {}}
//               transition={{
//                 duration: 0.8,
//                 delay: 0.2,
//                 type: "spring",
//                 stiffness: 100,
//               }}
//             >
//               <br />
//               <AnimatedText text={title} isVisible={isVisible} />
//             </motion.h2>
//             {content}
//           </div>
//         </div>
//       </div>
//     </motion.section>
//   );
// };

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
    console.log(visibleSections);
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
      {/* <ServiceSection
        id="ceremony"
        title="CEREMONY"
        content={<CeremonyContent />}
        images={sectionImages.ceremony}
        isVisible={visibleSections.ceremony}
        imageOnRight={true}
      />

      <ServiceSection
        id="drinks-reception"
        title="DRINKS RECEPTION"
        content={<ReceptionContent />}
        images={sectionImages.reception}
        isVisible={visibleSections.reception}
        imageOnRight={false}
      />

      <ServiceSection
        id="dinner"
        title="DINNER"
        content={<DinnerContent />}
        images={sectionImages.dinner}
        isVisible={visibleSections.dinner}
        imageOnRight={true}
      />

      <ServiceSection
        id="evening-party"
        title="EVENING PARTY"
        content={<EveningContent />}
        images={sectionImages.evening}
        isVisible={visibleSections.evening}
        imageOnRight={false}
      /> */}
      <WeddingOptions />
      {/* Enhanced Prestigious Clients Section with animations and background */}
      <Prestigious />
      <InstagramSection />
      {/* Enhanced Values Section with animations */}
      <Values />
    </div>
  );
}
