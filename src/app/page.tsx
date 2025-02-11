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

export default function Home() {
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [muted, setMuted] = useState("1");

  const videoId = "CZVKTBY3tNk";
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVideoReady(true);
    }, 1000); // Add a small delay to ensure iframe has started loading
console.log(isVideoReady, "remmebr this")
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
                    <img
                      src="/assets/extract/w/Shades_music_logo_newhat_0225HDfinal_Blktrans.svg"
                      alt="Band performance"
                      className=" relative lg:w-1/3  md:black flex mt-4"
                    />
       
                    <div className="prose prose-lg items-center flex flex-wrap">
                      <div className="h-fit ">

                      <p className="">
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
                </div>

                  <div>

                <h2 className="text-4xl font-bold mt-16 text -black ">
                      THE STORY SO FAR
                    </h2>
                  <StaggeredReveal />
                </div>
              </div>
            </div>
          </section>

          <ClientsSection forBrand={false} />
          {/* <ClientsSection forBrand={true} /> */}
        </div>
        <div className="bg-black">
          <InstagramSection href="/contact" />
        </div>
      </FadeTransition>
    </div>
  );
}
