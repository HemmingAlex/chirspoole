"use client";
import React, { useState } from "react";
import SocialBar from "../components/SocialBar ";
// import Image from "next/image";
// import useCountUp from '../hooks/useCountUp';
import FadeTransition from "../components/FadeTransition";
import Link from "next/link";
import InstagramSection from "../components/InstagramSection ";
import ClientsSection from "../components/ClientsSection";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  // const privateShows = useCountUp(140);
  // const corporateEvents = useCountUp(80);
  // const specialProjects = useCountUp(20);
  // const talents = useCountUp(250);
  // const staff = useCountUp(60);
  // const countries = useCountUp(35);
  const videoId = "CZVKTBY3tNk";
  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  return (
    <div>
      {/* Video Hero Section */}
      <FadeTransition>
        <section className="relative h-[100vh] w-full overflow-hidden">
          <div className="absolute inset-0 bg-black/30 z-10 pointer-events-none" />
          {/* <div className="absolute inset-0 overflow-hidden"> */}
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&playlist=${videoId}&start=6&playsinline=1&enablejsapi=1&modestbranding=1`}
            className="absolute h-screen w-[400%] lg:w-[120%] lg:h-[120%] object-cover lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
            allow="autoplay; encrypted-media"
            frameBorder="0"
            title="Background video"
            onLoad={handleIframeLoad}
          />
          {/* </div> */}
          <div className="relative z-20 h-full flex items-center justify-center text-white">
            <div className="text-center max-w-3xl mx-auto px-4">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                25 Years of Musical Excellence
              </h1>
              <p className="text-xl mb-8">
                Creating unforgettable live music experiences since 1999
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
        {isLoading && (
          <div
            className="absolute inset-0 bg-black z-30 transition-opacity duration-1000"
            style={{ opacity: isLoading ? 1 : 0 }}
          />
        )}
        {/* Rest of the content */}
        <div className="relative bg-white text-gray-700">
          {/* Our Story Section */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h2 className="text-4xl font-bold mb-8 text-orange-500">
                    The Story So Far
                  </h2>
                  <div className="prose prose-lg">
                    <p>
                      Shades Live Music was born in London, England 25 years
                      ago, founded by Christopher Poole, our Lead Vocalist and
                      Director. What began as an ambitious five-piece band
                      quickly evolved into something extraordinary - a
                      collective of exceptional musicians and performers
                      creating bespoke, tailor-made shows for the most
                      prestigious clients worldwide.
                    </p>
                    <p>
                      What truly sets us apart is our unwavering commitment to
                      authentic live music. Unlike others who rely on backing
                      tracks, every note you hear at a Shades performance is
                      played live by our talented musicians. No pretending, no
                      miming - just pure, authentic musical excellence.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                    <img
                      src="https://plus.unsplash.com/premium_photo-1722100465701-e2dc133af13d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Live performance"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1534534502714-2828e7c540d0?q=80&w=1994&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Band performance"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1601182207230-1b165dea2212?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Event atmosphere"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1610159935613-61896c2d1237?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Musicians playing"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <ClientsSection />
          <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                  <div className="text-4xl font-bold text-orange-600 mb-2">
                    1000+
                  </div>
                  <div className="text-xl">Shows Worldwide</div>
                  <p className="mt-4 text-gray-600">
                    Each performance crafted uniquely for our clients
                  </p>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                  <div className="text-4xl font-bold text-orange-600 mb-2">
                    100%
                  </div>
                  <div className="text-xl">Live Music</div>
                  <p className="mt-4 text-gray-600">
                    No backing tracks - pure musical talent
                  </p>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                  <div className="text-4xl font-bold text-orange-600 mb-2">
                    25
                  </div>
                  <div className="text-xl">Years of Excellence</div>
                  <p className="mt-4 text-gray-600">
                    A legacy of musical expertise
                  </p>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                  <div className="text-4xl font-bold text-orange-600 mb-2">
                    Full
                  </div>
                  <div className="text-xl">Event Coverage</div>
                  <p className="mt-4 text-gray-600">
                    From ceremonies to evening parties
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
        <InstagramSection />
      </FadeTransition>
    </div>
  );
}
