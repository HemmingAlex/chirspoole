"use client";
import React from "react";

// import Image from "next/image";
// import useCountUp from '../hooks/useCountUp';
import FadeTransition from "../components/FadeTransition";
import Link from "next/link";

export default function Home() {
  // const [isLoading, setIsLoading] = useState(true);

  // const privateShows = useCountUp(140);
  // const corporateEvents = useCountUp(80);
  // const specialProjects = useCountUp(20);
  // const talents = useCountUp(250);
  // const staff = useCountUp(60);
  // const countries = useCountUp(35);
  const videoId = "CZVKTBY3tNk";
  // const handleIframeLoad = () => {
  //   setIsLoading(false);
  // };

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
Shades Music              </h1>
              <p className="text-xl mb-8">
                From intimate weddings to grand corporate events, we bring your
                vision to life
              </p>
              <Link
                href="/contact"
                className="inline-block bg-white text-black px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </section>
        {/* {isLoading && (
        <div 
          className="absolute inset-0 bg-black z-30 transition-opacity duration-1000"
          style={{ opacity: isLoading ? 1 : 0 }}
        />
      )} */}
        {/* Rest of the content */}
        <div className="relative bg-white">
          {/* Services Section */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* <h2 className="text-4xl font-bold text-center mb-12">
                Our Services
              </h2> */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Wedding Service */}
                {/* <div className="rounded-lg overflow-hidden shadow-lg">
                  <div className="h-64 bg-gray-200" />
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold mb-4">Weddings</h3>
                    <p className="text-gray-600 mb-4">
                      Make your special day truly magical with our curated
                      wedding entertainment services.
                    </p>
                    <a
                      href="/weddings"
                      className="text-blue-600 hover:text-blue-800 font-semibold"
                    >
                      Learn More →
                    </a>
                  </div>
                </div> */}

                {/* Corporate Service */}
                {/* <div className="rounded-lg overflow-hidden shadow-lg">
                  <div className="h-64 bg-gray-200" />
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold mb-4">
                      Corporate Events
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Elevate your corporate events with professional
                      entertainment solutions.
                    </p>
                    <a
                      href="/corporate"
                      className="text-blue-600 hover:text-blue-800 font-semibold"
                    >
                      Learn More →
                    </a>
                  </div>
                </div>

                {/* Entertainment Service */}
                {/* <div className="rounded-lg overflow-hidden shadow-lg">
                  <div className="h-64 bg-gray-200" />
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold mb-4">
                      Entertainment
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Discover our diverse range of entertainment options for
                      any occasion.
                    </p>
                    <a
                      href="/entertainment"
                      className="text-blue-600 hover:text-blue-800 font-semibold"
                    >
                      Learn More →
                    </a>
                  </div>
                </div> */}
              </div>
            </div>
          </section>

          {/* Why Choose Us Section */}
          {/* <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl font-bold text-center mb-12">
                Why Choose Us
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl mb-4">🎵</div>
                  <h3 className="text-xl font-semibold mb-2">
                    Professional Musicians
                  </h3>
                  <p className="text-gray-600">
                    Experienced and talented performers
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🎨</div>
                  <h3 className="text-xl font-semibold mb-2">
                    Customized Service
                  </h3>
                  <p className="text-gray-600">
                    Tailored to your specific needs
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">⭐</div>
                  <h3 className="text-xl font-semibold mb-2">
                    Quality Equipment
                  </h3>
                  <p className="text-gray-600">Top-tier sound and lighting</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">💫</div>
                  <h3 className="text-xl font-semibold mb-2">
                    Reliable Service
                  </h3>
                  <p className="text-gray-600">Always on time and prepared</p>
                </div>
              </div>
            </div>
          </section> */}
        </div> 
        {/* Instagram Feed Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-12">
              Follow Us On Instagram
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="aspect-square relative group cursor-pointer overflow-hidden"
                >
                  <a
                    href="https://www.instagram.com/p/COnu9jGjG2j/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full h-full"
                  >
                    <img
                      src="https://www.inspiration-music.com/wp-content/uploads/sb-instagram-feed-images/468804381_18447920413067918_4479337415547441776_nfull.jpg"
                      alt="Instagram post"
                      className="object-cover w-full h-full transition-transform group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <svg
                        className="w-12 h-12 text-white"
                        fill="currentColor"
                        viewBox="0 0 448 512"
                      >
                        <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" />
                      </svg>
                    </div>
                  </a>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <a
                href="https://www.instagram.com/shadesmusicschool/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-md font-semibold hover:from-purple-700 hover:to-pink-700 transition"
              >
                View More on Instagram
              </a>
            </div>
          </div>
        </section>
      </FadeTransition>
    </div>
  );
}
