"use client"

import { useEffect } from 'react';

export default function CorporatePage() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-reveal');
        }
      });
    });

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <section className="relative h-[70vh]">
        <div className="absolute inset-0 bg-black/40" />
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/api/placeholder/1920/1080')`
          }}
        />
        <div className="relative h-full flex items-center justify-center text-white">
          <div className="text-center max-w-3xl mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Corporate Entertainment
            </h1>
            <p className="text-xl mb-8">
              Elevate your corporate events with professional entertainment
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="reveal overflow-hidden w-0 duration-1000">
              <img 
                src="https://images.unsplash.com/photo-1615191466863-dad6c9ce3bed?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Corporate Event"
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">CORPORATE</h2>
              <p className="text-gray-600">
                We understand the importance of making a true professional impact that creates memorable memories with your employees and guests.
              </p>
              <p className="text-gray-600">
                Thanks to creative branding entertainment solutions, flawless logistics and an overall technical expertise, we deliver unique and &quot;tailor-made&quot; corporate events.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>PUBLIC EVENT</li>
                <li>IMMERSIVE EXPERIENCE</li>
                <li>PRODUCT LAUNCH</li>
                <li>SPORTING EVENT</li>
                <li>CHRISTMAS EVENT</li>
                <li>SPECIAL PROJECT</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Corporate Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="h-48 bg-gray-200 rounded-lg mb-4" />
              <h3 className="text-xl font-semibold mb-2">Award Ceremonies</h3>
              <p className="text-gray-600 mb-4">
                Professional entertainment for corporate awards and recognition events.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="h-48 bg-gray-200 rounded-lg mb-4" />
              <h3 className="text-xl font-semibold mb-2">Product Launches</h3>
              <p className="text-gray-600 mb-4">
                Make your product launch memorable with carefully curated entertainment.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="h-48 bg-gray-200 rounded-lg mb-4" />
              <h3 className="text-xl font-semibold mb-2">Team Building</h3>
              <p className="text-gray-600 mb-4">
                Interactive musical experiences that bring your team together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Elevate Your Corporate Event?</h2>
          <p className="text-xl mb-8">Contact us today to discuss your entertainment needs</p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition"
          >
            Get a Quote
          </a>
        </div>
      </section>
    </div>
  );
}