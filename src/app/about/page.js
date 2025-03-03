"use client";

import { motion } from "framer-motion";
import { Music, Mic, Users, Star } from "lucide-react";
import Socials from "../../components/SocialBar ";
import dynamic from "next/dynamic";

// Dynamically import the 3D component to avoid SSR issues
const AboutUsSphere = dynamic(() => import("../../components/AboutUsSphere"), {
  ssr: false,
});

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section with 3D animation overlay */}
      <section className="relative h-[100vh]">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `url(&apos;https://images.unsplash.com/photo-1543047280-397967875ea9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&apos;)`,
          }}
        />
        <div className="absolute inset-0 bg-black/75 z-10" />

        {/* 3D Sphere component */}
        <AboutUsSphere />

        {/* Content overlay */}
        <div className="relative h-full flex items-center justify-center text-white z-30">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto px-4"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              A Legacy of Live Music Excellence
            </h1>
            <p className="text-xl mb-8">
              25 Years of Creating Unforgettable Musical Experiences
            </p>
          </motion.div>
        </div>
      </section>

      <div className="bg-black">
        {/* About Section with exact content from word document */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            >
              <motion.div variants={fadeIn} className="space-y-6">
                <h2 className="text-3xl font-bold mb-6 text-orange-500">
                  About Us
                </h2>
                <p className="text-gray-300 text-lg">
                  At Shades Live Music, we believe that every event is an
                  opportunity to create unforgettable memories. Whether it&apos;s a
                  wedding, corporate gathering, private party, or special
                  celebration, our team is dedicated to delivering exceptional
                  entertainment that brings people together and elevates any
                  occasion.
                </p>
                <p className="text-gray-300 text-lg">
                  Founded with a passion for bringing joy and excitement to
                  every event, we specialize in providing customized
                  entertainment experiences that are as unique as our clients.
                  From live music and DJs to interactive performances and
                  full-scale production services, we work with you to design the
                  perfect entertainment package for your specific needs and
                  vision.
                </p>
              </motion.div>

              <motion.div variants={fadeIn} className="grid grid-cols-2 gap-4">
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
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="py-20 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="text-center mb-16"
            >
              <motion.h2
                variants={fadeIn}
                className="text-3xl font-bold text-orange-500 mb-4"
              >
                What We Do
              </motion.h2>
              <motion.p
                variants={fadeIn}
                className="text-gray-300 text-lg max-w-3xl mx-auto"
              >
                We offer a wide range of services to suit any event, including:
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {[
                {
                  title: "Live Music & DJs",
                  description:
                    "Our talented musicians and DJs cater to all tastes, from classical ensembles to contemporary beats, ensuring your guests stay engaged and entertained.",
                  icon: <Music className="h-8 w-8 text-orange-500" />,
                },
                {
                  title: "Interactive Experiences",
                  description:
                    "We specialize in fun, engaging activities like games, photo booths, and custom performances that allow your guests to interact and make lasting memories.",
                  icon: <Users className="h-8 w-8 text-orange-500" />,
                },
                {
                  title: "Themed Events & Custom Shows",
                  description:
                    "Whether you're planning a corporate gala, wedding, or themed party, we craft personalized entertainment experiences that reflect your vision and exceed expectations.",
                  icon: <Star className="h-8 w-8 text-orange-500" />,
                },
                {
                  title: "Full Event Production",
                  description:
                    "From sound and lighting to staging and coordination, we provide full-service production to ensure every detail is taken care of, so you can enjoy your event stress-free.",
                  icon: <Mic className="h-8 w-8 text-orange-500" />,
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                >
                  <div className="bg-black p-6 rounded-lg shadow-lg h-full">
                    <div className="bg-orange-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-center text-orange-500">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 text-center">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Our Philosophy Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            >
              <motion.div variants={fadeIn} className="space-y-6">
                <h2 className="text-3xl font-bold mb-6 text-orange-500">
                  Our Philosophy
                </h2>
                <p className="text-gray-300 text-lg">
                  At Shades Live Music, we understand that entertainment is more
                  than just filling time—it&apos;s about creating moments that
                  resonate. We work closely with you to ensure that every
                  element of your event is tailored to match your style,
                  preferences, and goals. Our team of experienced professionals
                  is committed to delivering exceptional service, offering
                  creativity and expertise to every event we take part in.
                </p>
                <p className="text-gray-300 text-lg">
                  Whether it&apos;s an intimate celebration or a large-scale affair,
                  we are dedicated to providing entertainment that captures the
                  heart of every occasion. Let us help you transform your next
                  event into something extraordinary.
                </p>
              </motion.div>

              <motion.div
                variants={fadeIn}
                className="bg-black p-8 rounded-lg shadow-lg border border-gray-800"
              >
                <h3 className="text-2xl font-bold mb-6 text-orange-500">
                  Why Choose Us?
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-orange-500">
                      Expertise
                    </h4>
                    <p className="text-gray-300">
                      With 25 years of experience in the entertainment industry,
                      we understand the intricacies of creating events that are
                      not only fun but meaningful.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-orange-500">
                      Customization
                    </h4>
                    <p className="text-gray-300">
                      We offer personalized entertainment options to ensure your
                      event is truly one-of-a-kind.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-orange-500">
                      Passion
                    </h4>
                    <p className="text-gray-300">
                      We love what we do, and it shows in every event we
                      produce. Our passion for creating memorable experiences
                      drives us to exceed expectations every time.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
        {/* Clients Section */}
        <section className="py-20 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-center mb-16 text-orange-500"
            >
              Our Prestigious Clients
            </motion.h2>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {/* Hospitality */}
              <motion.div variants={fadeIn}>
                <div className="bg-black p-6 rounded-lg shadow-lg border border-gray-800">
                  <h3 className="text-xl font-semibold mb-4 text-orange-500">
                    Luxury Hotels & Resorts
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>Emirates Palace Abu Dhabi</li>
                    <li>Grand Hyatt Dubai</li>
                    <li>Hilton Abu Dhabi</li>
                    <li>Kempinski Djibouti</li>
                    <li>Hyatt Regency Dubai</li>
                    <li>Belfry Hotel & Resort</li>
                    <li>Moor Hall Hotel & Spa</li>
                  </ul>
                </div>
              </motion.div>

              {/* Sports */}
              <motion.div variants={fadeIn}>
                <div className="bg-black p-6 rounded-lg shadow-lg border border-gray-800">
                  <h3 className="text-xl font-semibold mb-4 text-orange-500">
                    Sports & Entertainment
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>Aston Villa FC</li>
                    <li>Leicester City FC</li>
                    <li>Manchester United FC</li>
                    <li>Formula 1</li>
                    <li>Melbourne Cup</li>
                    <li>BBC TV</li>
                    <li>ITV</li>
                  </ul>
                </div>
              </motion.div>

              {/* Corporate */}
              <motion.div variants={fadeIn}>
                <div className="bg-black p-6 rounded-lg shadow-lg border border-gray-800">
                  <h3 className="text-xl font-semibold mb-4 text-orange-500">
                    Corporate & Brands
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>Cadbury World</li>
                    <li>Harley Davidson</li>
                    <li>Mercedes-Benz</li>
                    <li>Jaguar Land Rover</li>
                    <li>And many more prestigious</li>
                    <li>organizations worldwide...</li>
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-center mb-16 text-orange-500"
            >
              The Shades Difference
            </motion.h2>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-4 gap-8"
            >
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
                <motion.div
                  key={index}
                  variants={fadeIn}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                >
                  <div className="bg-black p-6 rounded-lg shadow-lg h-full border border-gray-800">
                    <div className="bg-orange-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-center text-orange-500">
                      {value.title}
                    </h3>
                    <p className="text-gray-300 text-center">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-black text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2
                variants={fadeIn}
                className="text-3xl font-bold mb-4 text-orange-500"
              >
                Create Your Perfect Event
              </motion.h2>
              <motion.p variants={fadeIn} className="text-xl mb-8">
                Let&apos;s bring your vision to life. Whether you&apos;re planning a
                wedding, corporate event, private party, or special celebration,
                Shades Live Music is here to make your event an unforgettable
                experience.
              </motion.p>
              <motion.div
                variants={fadeIn}
                className="flex justify-center space-x-4"
              >
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
              </motion.div>
              <motion.div
                variants={fadeIn}
                className="flex justify-center mt-8"
              >
                <Socials />
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
