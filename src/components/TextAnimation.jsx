import { motion, useScroll, useTransform } from 'framer-motion';
import { Music, Globe, Award, Users, MicVocal } from 'lucide-react';
import { useRef } from 'react';
import Luey from "../components/LUEY";

const ParallaxStatsSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  const stats = [
    {
      delay: 0,
      highlight: "COMPLETE ENTERTAINMENT",
      description: "Full Entertainment for Ceremonies, Drinks Reception, Dinner & Evening Parties",
      icon: <Music className="w-6 h-6" />,
      color: "bg-purple-900/80"
    },
    {
      delay: 200,
      highlight: "GLOBAL REACH",
      description: "Over 1000 shows performed worldwide",
      icon: <Globe className="w-6 h-6" />,
      color: "bg-purple-800/80"
    },
    {
      delay: 400,
      highlight: "BESPOKE EXPERIENCES",
      description: "Each Show tailor-made for your special event",
      icon: <Award className="w-6 h-6" />,
      color: "bg-purple-700/80"
    },
    {
      delay: 500,
      highlight: "ELITE TALENT",
      description: "The best musicians and performers in collaboration on the planet",
      icon: <Users className="w-6 h-6" />,
      color: "bg-purple-600/80"
    },
    {
      delay: 600,
      highlight: "100% AUTHENTIC",
      description: "100% Live performances - No pretending or miming",
      icon: <MicVocal className="w-6 h-6" />,
      color: "bg-purple-500/80"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { 
      y: 20,
      opacity: 0,
    },
    visible: i => ({ 
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: i * 0.1,
        duration: 0.6
      }
    })
  };

  return (
    <div ref={ref} className="relative min-h-screen overflow-hidden">
      <motion.div
        className="absolute inset-0 w-full h-[120%]"
        style={{
          y,
          backgroundImage:
            "url('https://images.unsplash.com/photo-1524567248408-cbfd37e65e2d?q=80&w=1728&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-black/50 z-10" />
      
      <div className="relative z-20 container mx-auto px-4 py-16">
        {/* Luey Component at the top */}
        <div className="text-center mb-16">
          <Luey />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xl text-white/90 max-w-2xl mx-auto mt-4"
          >
            Creating unforgettable musical experiences for over 25 years
          </motion.p>
        </div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={itemVariants}
              className={`${stat.color} backdrop-blur-sm rounded-lg shadow-lg overflow-hidden 
                transform transition-all duration-300 hover:scale-105 hover:shadow-xl
                border border-white/10`}
            >
              <div className="p-6 text-white">
                <motion.div className="flex items-center mb-3">
                  {stat.icon}
                  <span className="text-xl font-bold ml-3">{stat.highlight}</span>
                </motion.div>
                <motion.div className="text-white/90 leading-relaxed">
                  {stat.description}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ParallaxStatsSection;