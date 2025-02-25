"use client";
import React from "react";
import VideoGallery from "../../components/VideoGallery";
import FadeTransition from "../../components/FadeTransition";

export default function GalleryPage() {
  // You could fetch your videos from an API or CMS here
  const galleryVideos = [
    {
      id: 1,
      title: "Wedding Performance at The Savoy",
      description:
        "Full band performance featuring our signature cocktail hour set",
      thumbnailUrl: "/assets/Chris.jpg",

      youtubeId: "CZVKTBY3tNk",
      duration: "3:45",
      category: "Weddings",
    },
    {
      id: 2,
      title: "Goldman Sachs Annual Party",
      description: "Corporate entertainment for 500+ guests",
      thumbnailUrl: "/assets/Chris.jpg",

      youtubeId: "VYOjWnS4cMY",
      duration: "4:20",
      category: "Corporate",
    },
    {
      id: 3,
      title: "Sir Richards 60th Birthday",
      description:
        "Special birthday celebration with full band and brass section",
      thumbnailUrl: "/assets/Chris.jpg",

      youtubeId: "dQw4w9WgXcQ",
      duration: "8:15",
      category: "Birthdays",
    },
    {
      id: 4,
      title: "Bar Mitzvah Celebration",
      description: "Energetic performance for Jacobs special day",
      thumbnailUrl: "/assets/Chris.jpg",

      youtubeId: "jNQXAC9IVRw",
      duration: "5:30",
      category: "Jewish Events",
    },
    {
      id: 5,
      title: "Asian Wedding at Grosvenor House",
      description:
        "Fusion performance combining traditional and modern elements",
      thumbnailUrl: "/assets/Chris.jpg",

      youtubeId: "RubBzkZzpUA",
      duration: "6:15",
      category: "Asian Weddings",
    },
    {
      id: 6,
      title: "Summer Wedding at Claridges",
      description: "Elegant summer wedding performance",
      thumbnailUrl: "/assets/Chris.jpg",

      youtubeId: "LXb3EKWsInQ",
      duration: "7:20",
      category: "Weddings",
    },
    {
      id: 7,
      title: "Microsoft Product Launch",
      description: "High-energy corporate entertainment",
      thumbnailUrl: "/assets/Chris.jpg",

      youtubeId: "XsD0F-NhJ4A",
      duration: "4:45",
      category: "Corporate",
    },
    {
      id: 8,
      title: "Anniversary Celebration",
      description: "25th wedding anniversary special performance",
      thumbnailUrl: "/assets/Chris.jpg",

      youtubeId: "YykjpeuMNEk",
      duration: "5:10",
      category: "Weddings",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      <FadeTransition>
        <div className="py-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">
                Our Performances
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Browse our collection of performances at weddings, corporate
                events, birthdays, and other special occasions.
              </p>
            </div>

            <VideoGallery videos={galleryVideos} />

            <div className="mt-20 text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Want to see us live?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Contact our team to discuss how we can make your event
                unforgettable
              </p>
              <a
                href="/contact"
                className="inline-block bg-purple-800 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </FadeTransition>
    </div>
  );
}
