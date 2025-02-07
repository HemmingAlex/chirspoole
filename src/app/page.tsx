"use client";
import React, { useState, useEffect } from "react";
import SocialBar from "../components/SocialBar ";
// import Image from "next/image";
// import useCountUp from '../hooks/useCountUp';
import FadeTransition from "../components/FadeTransition";
import Link from "next/link";
import InstagramSection from "../components/InstagramSection ";
import ClientsSection from "../components/ClientsSection";
import StaggeredReveal from "../components/StaggeredReveal";

export default function Home() {
  const [isVideoReady, setIsVideoReady] = useState(false);

  const videoId = "CZVKTBY3tNk";
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVideoReady(true);
    }, 1000); // Add a small delay to ensure iframe has started loading

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {/* Video Hero Section */}
      <FadeTransition>
        <section className="relative h-[100vh] w-full overflow-hidden">
          <div className="absolute inset-0 bg-black/30 z-10 pointer-events-none " />
          {/* <div className="absolute inset-0 overflow-hidden"> */}
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&playlist=${videoId}&start=6&playsinline=1&enablejsapi=1&modestbranding=1`}
            className={`absolute h-screen w-[400%] lg:w-[120%] lg:h-[120%] transition-opacity duration-500 ease-out ${
              isVideoReady ? "opacity-100" : "opacity-0"
            }`}
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
            allow="autoplay; encrypted-media"
            frameBorder="0"
            title="Background video"
          />
          {/* </div> */}
          <div className="relative z-20 h-full flex items-center justify-center text-white">
            <div className="text-center max-w-3xl mx-auto px-4">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                {/* 25 Years of Musical Excellence */}
              </h1>
              <p className="text-xl mb-8">
                {/* Creating unforgettable live music experiences since 1999 */}
              </p>
              <SocialBar className="justify-center mb-8" />
              <Link
                href="/contact"
                className="inline-block bg-white text-black px-8 py-3 rounded-md font-semibold hover:bg-orange-100 transition"
              >
                Book Your Event
              </Link>
            </div>
          </div>
        </section>
        {/* Rest of the content */}
        <div className="relative bg-white text-gray-700">
          {/* Our Story Section */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="flex justify-center">
                  <div className="space-y-6 w-4/5">
                    <img
                      src="/assets/logos/White.jpg"
                      alt="Band performance"
                      className="md:w-1/4 w-1/2 relative md:bottom-28 md:-mb-32 -mb-16 bottom-12 md:black"
                    />
                    <h2 className="text-4xl font-bold mb-8 text-orange-500 ">
                      THE STORY SO FAR
                    </h2>
                    <div className="prose prose-lg">
                      <p>
                        Shades Live Music was invented in London, England 25
                        years ago by Christopher Poole, Lead Vocalist and
                        Director.
                      </p>
                      <br />
                      <p>
                        What started out as a five-piece band quickly emerged
                        into multiple musicians and performers, creating bespoke
                        tailor-made shows for the most prestige clients, such as
                        the Emirates Palace and Grand Hyatt
                      </p>
                      <br />
                      <p>
                        What makes this show truly amazing is being 100% live
                        compared to other companies who have musicians
                        pretending to play to backing tracks. What you hear from
                        Shades is what is truly played from our musicians.
                        <br />
                      </p>
                    </div>
                  </div>
                </div>

                <div className=" ">
                  <StaggeredReveal />
                </div>
              </div>
            </div>
          </section>

          <ClientsSection />
        </div>
        <div className="bg-black">

        <InstagramSection href="/contact" />
        </div>
      </FadeTransition>
    </div>
  );
}
