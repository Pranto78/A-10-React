import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import h1 from "../assets/House1.jpg";
import h2 from "../assets/house2.jpg";
import h3 from "../assets/House3.jpg";
import h4 from "../assets/house4.jpg";

const images = [
  { src: h1, title: "Modern Family Home", desc: "Luxury living with comfort" },
  {
    src: h2,
    title: "Urban Smart House",
    desc: "Eco-friendly and tech integrated",
  },
  { src: h3, title: "Lakeview Villa", desc: "Wake up to breathtaking views" },
  { src: h4, title: "Cozy Cottage", desc: "Peaceful nature retreat" },
];

const Home = () => {
  const [index, setIndex] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-[90vh] flex flex-col md:flex-row overflow-hidden my-6 rounded-3xl">
      {/* Carousel */}
      <div className="relative w-full md:w-2/3 h-[60vh] md:h-full overflow-hidden">
        <AnimatePresence initial={false}>
          <motion.div
            key={index}
            className="absolute top-0 left-0 w-full h-full"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <img
              src={images[index].src}
              alt={images[index].title}
              className="w-full h-full object-cover brightness-75"
            />

            {/* Overlay */}
            <div className="absolute bottom-10 left-5 md:left-10 text-white">
              <h2 className="text-2xl md:text-4xl font-bold drop-shadow-lg">
                {images[index].title}
              </h2>
              <p className="text-md md:text-xl mt-2 text-gray-200">
                {images[index].desc}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Gradient edges */}
        <div className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-black/60 to-transparent pointer-events-none"></div>
        <div className="absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-black/60 to-transparent pointer-events-none"></div>
      </div>

      {/* Text Container */}
      <div className="w-full md:w-1/3 flex items-center justify-center p-10 bg-gray-100">
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Welcome home
          </h1>
          <p className="text-xl md:text-2xl text-gray-700">
            It feels like home again
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
