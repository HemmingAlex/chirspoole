"USE CLIENT";
import React from "react";
import { motion } from "framer-motion";
import { Music, Mic, Users, Star } from "lucide-react";
import Socials from "../../components/SocialBar ";
import Link from "next/link";
import { usePathname } from "next/navigation";
import path from "path";

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

export function Prestigious() {
  return (
    <section className="py-20 dark:bg-gray-900 bg-gray-200">
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
            <div className="dark:bg-black p-6 rounded-lg shadow-lg border bg-white border-gray-300 dark:border-gray-800">
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
            <div className="dark:bg-black p-6 rounded-lg shadow-lg border bg-white border-gray-300 dark:border-gray-800">
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
            <div className="dark:bg-black p-6 rounded-lg shadow-lg border bg-white border-gray-300 dark:border-gray-800">
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
  );
}

export function Values() {
  const valuesArray = [
    {
      icon: <Mic className="h-8 w-8 text-orange-600" />,
      title: "Cultural Expertise",
      description:
        "We understand and honor the traditions that make Asian weddings unique and special.",
    },
    {
      icon: <Music className="h-8 w-8 text-orange-600" />,
      title: "Custom Experiences",
      description:
        "Each performance is tailored to create the perfect atmosphere for your special event.",
    },
    {
      icon: <Star className="h-8 w-8 text-orange-600" />,
      title: "World-Class Musicians",
      description:
        "We bring together the finest performers to deliver exceptional musical experiences.",
    },
    {
      icon: <Users className="h-8 w-8 text-orange-600" />,
      title: "Full-Service Events",
      description:
        "From traditional ceremonies to modern celebrations, we provide comprehensive entertainment solutions.",
    },
  ];
  const path = usePathname();

  return (
    <section className="py-20 relative overflow-hidden bg-gray-200">
      <div className="absolute inset-0 z-0">
        {/* <img
          src="https://images.unsplash.com/photo-1556919451-d39f9face7bd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Background"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-opacity-70 bg-gradient-to-b from-transparent to-gray-900/100"></div> */}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2
          className="text-4xl font-bold text-center mb-16 text-orange-600"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          The Shades Difference
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {valuesArray.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <Link href={`${path}/${value?.title?.replace(" ", "-")}`}>
                <div className="bg-white/95 backdrop-blur-sm p-8 rounded-lg shadow-xl h-full">
                  <motion.div
                    className="bg-blue-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6"
                    initial={{ scale: 0, rotate: -30 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      delay: 0.2 + index * 0.1,
                    }}
                    viewport={{ once: true }}
                    whileHover={{
                      scale: 1.1,
                      rotate: 5,
                      transition: { duration: 0.3 },
                    }}
                  >
                    {value?.icon}
                  </motion.div>

                  <motion.h3
                    className="text-xl font-semibold mb-4 text-center text-orange-600"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {value?.title}
                  </motion.h3>

                  <motion.p
                    className="text-gray-600 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {value?.description}
                  </motion.p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CTA() {
  return (
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
          <motion.div variants={fadeIn} className="flex justify-center mt-8">
            <Socials />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
