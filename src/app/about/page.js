"use client";

import { useEffect } from "react";
import { Music, Mic, Users, Star } from "lucide-react";
import Socials from "../../components/SocialBar ";
import FadeTransition from "../../components/FadeTransition";
// import AboutUsSphere from "../../components/AboutUsSphere";


import dynamic from 'next/dynamic';

const AboutUsSphere = dynamic(() => import('../../components/AboutUsSphere'), {
  ssr: false,
  loading: () => <div className="w-full h-screen flex items-center justify-center bg-gray-900 text-white">Loading 3D model...</div>
});

export default function AboutPage() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-reveal");
        }
      });
    });

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <FadeTransition>

        <AboutUsSphere/>
        {/* Hero Section */}
        <section className="relative h-[100vh]">
          <div
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1530432999454-016a47c78af3?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
            }}
          />
          <div className="absolute inset-0 bg-black/70 z-10" />
          {/* Content - place it at the top layer */}
          <div className="relative h-full flex items-center justify-center text-white z-20">
            <div className="text-center max-w-3xl mx-auto px-4">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                A Legacy of Live Music Excellence
              </h1>
              <p className="text-xl mb-8">
                25 Years of Creating Unforgettable Musical Experiences
              </p>
            </div>
          </div>
        </section>

        {/* History Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold mb-6 text-orange-500">
                  Our Story
                </h2>
                <p className="text-gray-600 text-lg">
                  The journey of Shades Live Music began 25 years ago in London,
                  England, when Christopher Poole, our Lead Vocalist and
                  Director, assembled a five-piece band with a vision for
                  excellence. What started as a modest ensemble has blossomed
                  into an internationally renowned musical collective.
                </p>
                <p className="text-gray-600 text-lg">
                  Our commitment to authenticity sets us apart - every note you
                  hear at a Shades performance is played live. No backing
                  tracks, no pretending, just pure musical excellence delivered
                  by world-class musicians.
                </p>
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-4xl font-bold text-orange-500">
                      1000+
                    </div>
                    <div className="text-gray-600">Shows Worldwide</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-4xl font-bold text-orange-500">25</div>
                    <div className="text-gray-600">Years of Excellence</div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 reveal overflow-hidden w-0 duration-1000">
                <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                  <img
                    src="/api/placeholder/800/800"
                    alt="Live performance"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                  <img
                    src="/api/placeholder/800/800"
                    alt="Stage setup"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                  <img
                    src="/api/placeholder/800/800"
                    alt="Band performance"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                  <img
                    src="/api/placeholder/800/800"
                    alt="Event atmosphere"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold mb-6 text-orange-500">
                  Experience The Shades
                </h2>
                <p className="text-gray-600 text-lg">
                  The Shades are a dynamic function and party band performing an
                  extensive repertoire spanning from the 50s through to
                  today&apos;s contemporary hits. Our versatility allows us to
                  create the perfect atmosphere for any event, adapting our
                  performance to match your unique vision.
                </p>
                <p className="text-gray-600 text-lg">
                  With a track record of performances at prestigious venues
                  worldwide, including the Emirates Palace in Abu Dhabi, Grand
                  Hyatt in Dubai, and numerous distinguished locations across
                  the UK, we bring international experience and professionalism
                  to every event.
                </p>
                <p className="text-gray-600 text-lg">
                  Whether you&apos;re planning a festival, wedding, corporate
                  function, or private celebration, our comprehensive
                  entertainment package ensures an unforgettable experience for
                  your guests.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg reveal overflow-hidden w-0 duration-1000">
                <h3 className="text-2xl font-bold mb-6 text-orange-500">
                  Performance Options
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-orange-500">
                      Set Durations
                    </h4>
                    <p className="text-gray-600">
                      Choose from flexible performance options:
                    </p>
                    <p className="text-gray-600">• One 60-minute set</p>
                    <p className="text-gray-600">• Two 45-minute sets</p>
                    <p className="text-gray-600">• Two 60-minute sets</p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-orange-500">
                      Technical Excellence
                    </h4>
                    <p className="text-gray-600">
                      Every performance includes our complete professional setup
                      featuring HK audio sound system, custom lighting rig, and
                      special effects.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-orange-500">
                      Additional Services
                    </h4>
                    <p className="text-gray-600">
                      • Piano or saxophone player for drinks reception or church
                      service
                    </p>
                    <p className="text-gray-600">• Professional DJ service</p>
                    <p className="text-gray-600 text-sm italic mt-2">
                      Additional services available at extra cost
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Clients Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-16 text-orange-500">
              Our Prestigious Clients
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Hospitality */}
              <div className="reveal overflow-hidden w-0 duration-1000">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold mb-4 text-orange-500">
                    Luxury Hotels & Resorts
                  </h3>
                  <ul className="space-y-2 text-black">
                    <li>Emirates Palace Abu Dhabi</li>
                    <li>Grand Hyatt Dubai</li>
                    <li>Hilton Abu Dhabi</li>
                    <li>Kempinski Djibouti</li>
                    <li>Hyatt Regency Dubai</li>
                    <li>Belfry Hotel & Resort</li>
                    <li>Moor Hall Hotel & Spa</li>
                  </ul>
                </div>
              </div>

              {/* Sports */}
              <div className="reveal overflow-hidden w-0 duration-1000">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold mb-4 text-orange-500">
                    Sports & Entertainment
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>Aston Villa FC</li>
                    <li>Leicester City FC</li>
                    <li>Manchester United FC</li>
                    <li>Formula 1</li>
                    <li>Melbourne Cup</li>
                    <li>BBC TV</li>
                    <li>ITV</li>
                  </ul>
                </div>
              </div>

              {/* Corporate */}
              <div className="reveal overflow-hidden w-0 duration-1000">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold mb-4 text-orange-500">
                    Corporate & Brands
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>Cadbury World</li>
                    <li>Harley Davidson</li>
                    <li>And many more prestigious</li>
                    <li>organizations worldwide...</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Values Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-16 text-orange-500">
              The Shades Difference
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  icon: <Mic className="h-8 w-8 text-orange-500" />,
                  title: "100% Live Performance",
                  description:
                    "Every note is played live - no backing tracks, no miming, just pure musical talent.",
                },
                {
                  icon: <Music className="h-8 w-8 text-orange-500" />,
                  title: "Custom Experiences",
                  description:
                    "Each performance is tailored to create the perfect atmosphere for your special event.",
                },
                {
                  icon: <Star className="h-8 w-8 text-orange-500" />,
                  title: "World-Class Musicians",
                  description:
                    "We bring together the finest performers to deliver exceptional musical experiences.",
                },
                {
                  icon: <Users className="h-8 w-8 text-orange-500" />,
                  title: "Full-Service Events",
                  description:
                    "From ceremonies to evening parties, we provide comprehensive entertainment solutions.",
                },
              ].map((value, index) => (
                <div
                  key={index}
                  className="reveal overflow-hidden w-0 duration-1000"
                >
                  <div className="bg-white p-6 rounded-lg shadow-lg h-full">
                    <div className="bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-center text-orange-500">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 text-center">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-20 bg-black text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4 text-orange-500">
              Create Your Perfect Event
            </h2>
            <p className="text-xl mb-8">
              Let&apos;s bring your vision to life with world-class live music
              entertainment
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="/contact"
                className="inline-block bg-white text-orange-500 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition"
              >
                Get in Touch
              </a>
              <a
                href="/entertainment"
                className="inline-block border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition"
              >
                View Services
              </a>
            </div>
            <div className="flex justify-center mt-8">
              <Socials />
            </div>
          </div>
        </section>
      </FadeTransition>
    </div>
  );
}
