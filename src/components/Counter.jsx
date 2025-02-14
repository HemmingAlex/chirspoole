import { motion } from 'framer-motion';
import React, { useState, useRef, useEffect } from 'react';
import { Music, Users, Trophy, Star, Globe, Clock } from 'lucide-react';

const StatCounter = ({ endValue, label, icon: Icon }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef || hasAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          startCounting();
          setHasAnimated(true);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(currentRef);
    return () => observer.unobserve(currentRef);
  }, [hasAnimated, endValue]);

  const startCounting = () => {
    const duration = 1500;
    const startTime = performance.now();

    const updateCount = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const eased = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.floor(eased * endValue);

      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      }
    };

    requestAnimationFrame(updateCount);
  };

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center p-6 rounded-xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-4">
        <Icon className="w-8 h-8 text-purple-300" />
      </div>
      <div className="text-center">
        <div className="inline-flex items-baseline">
          <span className="text-5xl font-bold">{count.toLocaleString()}</span>
          <span className="text-3xl font-bold ml-1">+</span>
        </div>
        <div className="text-lg mt-2 text-gray-200">{label}</div>
      </div>
    </motion.div>
  );
};

const StatsShowcase = () => {
  const stats = [
    {
      value: 1000,
      label: "Live Shows Performed",
      icon: Music
    },
    {
      value: 300,
      label: "Satisfied Clients",
      icon: Trophy
    },
    {
      value: 100,
      label: "Professional Musicians",
      icon: Users
    },
    {
      value: 25,
      label: "Years of Excellence",
      icon: Clock
    },
    {
      value: 50,
      label: "International Venues",
      icon: Globe
    },
    {
      value: 500,
      label: "5-Star Reviews",
      icon: Star
    }
  ];

  return (
    <section className="pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          {/* <h2 className="text-4xl font-bold text-white mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Setting the standard in live music entertainment across the globe
          </p> */}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <StatCounter
              key={index}
              endValue={stat.value}
              label={stat.label}
              icon={stat.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsShowcase;