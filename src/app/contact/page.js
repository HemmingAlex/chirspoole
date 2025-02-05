"use client"

import { useEffect } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import Maps from "../../components/StyledGoogleMap"

export default function ContactPage() {
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
      {/* Hero Section - matches your current site style */}
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
              Contact Us
            </h1>
            <p className="text-xl mb-8">
              Let&apos;s create your perfect musical experience together
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-gray-900 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                    <p className="text-gray-600">info@shadesband.com</p>
                    {/* <p className="text-gray-600">bookings@shadesmusicschool.com</p> */}
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gray-900 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                    <p className="text-gray-600">07899865778</p>
                    <p className="text-gray-600">Mon-Fri: 9am - 6pm</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gray-900 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
                    <p className="text-gray-600">123 Music Avenue</p>
                    <p className="text-gray-600">Los Angeles, CA 90001</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <a 
                  href="#contact-form" 
                  className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition"
                >
                  Send Us a Message
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 reveal overflow-hidden w-0 duration-1000">
              <div className="aspect-square bg-gray-200 rounded-lg" />
              <div className="aspect-square bg-gray-200 rounded-lg" />
              <div className="aspect-square bg-gray-200 rounded-lg" />
              <div className="aspect-square bg-gray-200 rounded-lg" />
            </div>
          </div>
        </div>
      </section>
      {/* Contact Form Section */}
      <section id="contact-form" className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="p-8">
              <h2 className="text-3xl font-bold text-center mb-12">Send us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Event Type
                  </label>
                  <select
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  >
                    <option value="">Select an event type</option>
                    <option value="wedding">Wedding</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="entertainment">Entertainment</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={6}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Tell us about your event..."
                  />
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition"
                  >
                    Send Message
                  </button>
                </div>
              </form>
              
            </div>
          </div>
        </div>
      </section>
      <section className=" text-center m-8">

      <h className="text-4xl bold m-8"> Find us here!</h>
<duv className="className='p-8 shadowed bg-white w-2/3 flex mx-auto my-8'">


              <Maps/>
</duv>
      </section>
    </div>
  );
}