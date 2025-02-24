"use client";
import FadeTransition from "../../components/FadeTransition";

import { useEffect, useState } from "react";
import { Mail, Phone, X } from "lucide-react";
import Maps from "../../components/StyledGoogleMap";
// import InstagramSection from "../../components/InstagramSection ";

const Notification = ({ message, type, onClose }) => {
  // The notification will be either green for success or red for error
  const bgColor = type === "success" ? "bg-green-500" : "bg-red-500";

  return (
    <div
      className={`fixed top-32 right-4 ${bgColor} text-white p-4 rounded-lg shadow-lg flex items-center space-x-2 animate-slide-in`}
    >
      <span>{message}</span>
      <button onClick={onClose} className="p-1 hover:bg-white/20 rounded">
        <X size={16} />
      </button>
    </div>
  );
};
export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    eventType: "",
    message: "",
  });

  const showNotification = (message, type) => {
    setNotification({ message, type });
    // Auto-hide notification after 5 seconds
    // setTimeout(() => setNotification(null), 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      // Reset form
      setFormData({
        name: "",
        email: "",
        eventType: "",
        message: "",
      });

      showNotification(
        "Your message has been sent. We'll get back to you soon!",
        "success"
      );
    } catch (error) {
      console.error("Form submission error:", error);
      showNotification(
        "Failed to send message. Please try again later.",
        "error"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
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
        {notification && (
          <Notification
            message={notification.message}
            type={notification.type}
            onClose={() => setNotification(null)}
          />
        )}
        {/* Hero Section - matches your current site style */}
        <section className="relative h-[100vh] md:hidden">
          <div
            className="absolute inset-0 bg-cover z-0"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1566421966482-ad8076104d8e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
              backgroundPosition: "center 65%", // This moves the image up to show more of the bottom
            }}
          />
          <div className="absolute inset-0 bg-black/40 z-10" />
          <div className="relative h-full flex items-center justify-center text-white z-20">
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
        {/* <section className="py-20 flex m-auto">
          <div className="flex max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold mb-16 flex justify-center md:justify-start">
                  Get in Touch
                </h2>
                <div className="space-y-8">
                  <div className="flex items-start justify-center md:justify-start ">
                    <div className="bg-gray-900 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-orange-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                      <p className="text-gray-600">info@shadesband.com</p>
                    </div>
                  </div>

                  <div className="flex items-start justify-center md:justify-start ">
                    <div className="bg-gray-900 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-orange-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                      <p className="text-gray-600">0044-7899-86577</p>
                      <p className="text-gray-600">Mon-Fri: 9am - 6pm</p>
                    </div>
                  </div>

                  <div className="flex items-start justify-center md:justify-start ">
                    <div className="bg-gray-900 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-orange-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
                      <p className="text-gray-600">214-218 Alcester Rd</p>
                      <p className="text-gray-600"> Birmingham B13 8EY</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <a
                    href="#contact-form"
                    className="flex md:inline-block justify-center md:justify-start bg-orange-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-orange-700 transition"
                  >
                    Send Us a Message
                  </a>
                </div>
              </div>
              <InstagramSection href="#contact-form" />
            </div>
          </div>
        </section> */}
        {/* Contact Form Section */}

        <section id="contact-form" className=" bg-black 	">
          <div className="flex flex-wrap 2xl:h-screen">
            <div
              className="md:w-3/5 w-full"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1456421385613-d0666bb96b78?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
                backgroundPosition: "center 40%", // This moves the image up to show more of the bottom
              }}
            >
              <div className="bg-black w-full h-full bg-opacity-70" />
            </div>
            <div
              className="md:w-2/5 w-full  md:pt-0 bg-white 2xl:h-screen "
              style={
                {
                  // backgroundImage: `url('https://images.unsplash.com/photo-1738599778390-af77d7cf10e6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
                  // backgroundPosition: "center 40%", // This moves the image up to show more of the bottom
                }
              }
            >
              <div className="shadow-xl overflow-hidden	bg-purple-800 2xl:h-screen">
                <div className="p-8">
                  <h2 className="text-3xl font-bold mb-12 text-black">
                    Contact
                  </h2>
                  <div className="grid grid-cols-2 gap-x-12 gap-y-8 my-8">
                    {/* Email Section */}
                    <div className="flex items-start space-x-3">
                      <Mail className="w-4 h-4 mt-1 text-black" />
                      <div>
                        <p className="font-medium text-sm mb-1 text-black">
                          Email
                        </p>
                        <p className="text-gray-900 text-sm md:hidden">
                          info@
                          <br />
                          shadesband.com
                        </p>
                        <p className="text-gray-900 text-sm hidden md:block">
                          info@shadesband.com
                        </p>
                      </div>
                    </div>

                    {/* Office Phone Section */}
                    <div className="flex items-start space-x-3">
                      <Phone className="w-4 h-4 mt-1 text-black" />
                      <div>
                        <p className="font-medium text-sm mb-1 text-black">
                          OFFICE
                        </p>
                        <p className="text-gray-900 text-sm">0044-7899-86577</p>
                      </div>
                    </div>
                    {/* Mobile Section */}
                    {/* <div className="flex items-start space-x-3">
                      <Smartphone className="w-4 h-4 mt-1 text-black" />
                      <div>
                        <p className="font-medium text-sm mb-1 text-black">
                          MOBILE
                        </p>
                        <p className="text-gray-900 text-sm">
                          Mon-Fri: 9am - 6pm
                        </p>
                      </div>
                    </div> */}

                    {/* Address Section */}
                    {/* <div className="flex items-start space-x-3">
                      <MapPin className="w-4 h-4 mt-1 text-black" />
                      <div>
                        <p className="font-medium text-sm mb-1 text-black">
                        ADDRESS
                        </p>
                        <p className="text-gray-900 text-sm">
                          214-218 Alcester Rd
                        </p>
                        <p className="text-gray-900 text-sm">
                          Birmingham B13 8EY
                        </p>
                      </div>
                    </div> */}
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-900 mb-2">
                          Your Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          className="w-full px-4 text-gray-900 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-900 mb-2">
                          Your Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your.email@example.com"
                          className="w-full px-4 text-gray-900 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Event Type
                      </label>
                      <select
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleChange}
                        className="w-full px-4 text-gray-900 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                        required
                      >
                        <option value="">Select an event type</option>
                        <option value="wedding">Wedding</option>
                        <option value="corporate">Corporate Event</option>
                        <option value="asian">Asian Wedding</option>
                        <option value="jewish">
                          Jewish Wedding/Bar Mitzva
                        </option>
                        <option value="">Select an event type</option>
                        <option value="funerals">Funerals</option>
                        <option value="proposals">Proposals</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Message
                      </label>
                      <textarea
                        name="message"
                        rows={6}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 text-gray-900 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                        placeholder="Tell us about your event..."
                      />
                    </div>

                    <div className="text-center">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="inline-block bg-orange-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-orange-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className=" text-center m-4 lg:m-8">
          <h2 className="text-3xl font-bold text-center mt-8 mb-12 dark:text-white ">
            Find us here!
          </h2>
          <div className="className='p-8 my-8 rounded flex mx-auto lg:w-2/3">
            <Maps />
          </div>
        </section>
      </FadeTransition>
    </div>
  );
}
