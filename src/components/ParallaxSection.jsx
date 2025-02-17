import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Luey from "../components/LUEY";
import Link from "next/link";

const ParallaxSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  return (
    <div ref={ref} className="relative h-[50vh] overflow-hidden">
      <motion.div
        className="absolute inset-0 w-full h-[120%]"
        style={{
          y,
          backgroundImage:
            "url('https://images.unsplash.com/photo-1548457701-c6a5aa364f49?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-purple-500/30 z-10" />
      <div className="relative z-20 flex items-center justify-center h-full">
        <div className="w-full">
          <div className="text-center text-white">
            <Luey />
            <p className="text-xl max-w-2xl mx-auto py-4 px-4">
              Creating unforgettable musical experiences for over 25 years
            </p>
            <div className="space-y-2 text-white py-8">
              <Link href="/contact" className="text-xl ">
                <span className="text-purple-400 hover:text-white transition-all">
                  CONTACT OUR TEAM
                </span>
              </Link>

              <p className="text-xl">
                <span className="text-white">
                  FOR YOUR BESPOKE TAILOR-MADE SPECIAL SHOW
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParallaxSection;
