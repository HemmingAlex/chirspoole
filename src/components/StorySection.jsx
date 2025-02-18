import { motion } from "framer-motion";
import React from "react";

const StorySection = ({ image }) => {
  return (
    <section className=" pb-16 bg-white overflow-hidden">
      <div
        className={`${image ? "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" : ""}`}
      >
        <div
          className={`${
            image ? "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" : ""
          }`}
        >
          {/* Left side - Story text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <img
              src="/assets/extract/w/Shades_music_logo_newhat_0225HDfinal4.png"
              alt="Band performance"
              className="max-h-96 mx-auto"
            />
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl text-center font-bold text-black mt-[101px]"
            >
              OUR STORY SO FAR
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-gray-700 space-y-6"
            >
              <p className="mt-4 text-center">
                Shades Live Music was formed in London, England 25 years ago by
                Christopher Poole, Lead Vocalist and Director.
              </p>

              <p className="text-center">
                What started out as a five-piece band quickly emerged into
                multiple musicians and performers, creating bespoke tailor-made
                shows for the most prestige clients, such as the Emirates
                Palace, and The Grand Hyatt Dubai.
              </p>

              <p className="text-center">
                What makes our shows truly amazing, is every note played by our
                musicians is live. We bring together the finest performers to
                deliver exceptional musical experiences and to create the
                perfect atmosphere for any events.
              </p>
            </motion.div>
          </motion.div>

          {/* Right side - Image */}
          {image ? (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <motion.div
                initial={{ scale: 1.2 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 1.2 }}
                className="absolute inset-0"
              >
                <img
                  src={image} // Replace with your image path
                  alt="Shades Live Music Performance"
                  className="w-full h-full object-cover"
                />
                {/* Optional overlay for better text contrast if needed */}
                <div className="absolute inset-0 bg-black/10" />
              </motion.div>
            </motion.div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </section>
  );
};

export default StorySection;
