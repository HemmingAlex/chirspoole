"use client";

import { useEffect } from "react";
import { Music, Mic, Users, Star } from "lucide-react";
import Socials from "../../components/SocialBar ";

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
      {/* Hero Section */}
      <section className="relative h-[70vh]">
        <div className="absolute inset-0 bg-black/40" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/api/placeholder/1920/1080')`,
          }}
        />
        <div className="relative h-full flex items-center justify-center text-white">
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
                England, when Christopher Poole, our Lead Vocalist and Director,
                assembled a five-piece band with a vision for excellence. What
                started as a modest ensemble has blossomed into an
                internationally renowned musical collective.
              </p>
              <p className="text-gray-600 text-lg">
                Our commitment to authenticity sets us apart - every note you
                hear at a Shades performance is played live. No backing tracks,
                no pretending, just pure musical excellence delivered by
                world-class musicians.
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
                <ul className="space-y-2 text-gray-600">
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
    </div>
  );
}
