"use client";
import React, { useState, useEffect } from "react";
// import SocialBar from "../components/SocialBar ";
// import Image from "next/image";
// import useCountUp from '../hooks/useCountUp';
import FadeTransition from "../components/FadeTransition";
import InstagramSection from "../components/InstagramSection ";
import ClientsSection from "../components/ClientsSection";
import StaggeredReveal from "../components/StaggeredReveal";
import YouTubePlayer from "../components/MutableYotubePlayer";
import ParallaxSection from "../components/ParallaxSection"; // Add this import
import StorySection from "../components/StorySection";

export default function Home() {
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [muted, setMuted] = useState("1");

  const videoId = "CZVKTBY3tNk";
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVideoReady(true);
    }, 1000); // Add a small delay to ensure iframe has started loading
    console.log(isVideoReady, "remmebr this");
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {/* Video Hero Section */}
      <FadeTransition>
        <section className="relative h-[100vh] w-full overflow-hidden">
          <div className="absolute inset-0 bg-black/30 z-10 " />
          <YouTubePlayer
            videoId={videoId}
            muted={muted}
            onMuteChange={(newMutedState: any) => setMuted(newMutedState)}
          />
        </section>
        {/* Rest of the content */}
        <div className="relative bg-white text-gray-700">
          {/* Our Story Section */}
          <section className="pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="flex justify-center">
                  <div className="space-y-6 w-4/5">
                    <div className="prose prose-lg items-center flex flex-wrap">
                      <StorySection image={null} />
                    </div>
                  </div>
                </div>

                <div>
                  <StaggeredReveal />
                </div>
              </div>
            </div>
          </section>

          <ParallaxSection />

          <ClientsSection forBrand={false} />
          {/* <ClientsSection forBrand={true} /> */}
        </div>
        <InstagramSection href="/contact" />
      </FadeTransition>
    </div>
  );
}
