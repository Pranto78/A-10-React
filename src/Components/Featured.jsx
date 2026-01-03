import React, { useEffect, useState, useContext } from "react";
import { FaMapMarkerAlt, FaTag } from "react-icons/fa";
import { motion } from "framer-motion";
import { NavLink, useNavigate } from "react-router";
import toast, { Toaster } from "react-hot-toast";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Swiper CSS
import "swiper/css";

// Auth Context
import { AuthContext } from "../Provider/AuthContext";

const cardVariants = {
  hover: { scale: 1.05, boxShadow: "0px 20px 30px rgba(0,0,0,0.3)" },
};

const Featured = () => {
  const [properties, setProperties] = useState([]);
  const { user } = useContext(AuthContext); // Get logged-in user
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://a-10-server-one.vercel.app/featured-properties")
      .then((res) => res.json())
      .then((data) => setProperties(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="py-16 px-5 md:px-20 transition duration-300">
      {/* Toast container */}
      <Toaster position="top-right" />

      <h2 className="text-3xl font-bold text-center mb-12 gradient-text whitespace-nowrap cursor-pointer">
        Feature Properties
      </h2>

      {properties.length === 0 ? (
        <div className="text-center text-gray-500 dark:text-gray-400">
          <span className="loading loading-spinner text-primary"></span>
        </div>
      ) : (
        <>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
              waitForTransition: true,
            }}
            speed={3000}
            breakpoints={{
              640: { slidesPerView: 1.2 },
              768: { slidesPerView: 2.2 },
              1024: { slidesPerView: 3.2 },
              1280: { slidesPerView: 4.2 },
            }}
            className="py-5"
          >
            {properties.map((property) => (
              <SwiperSlide key={property._id}>
                <motion.div
                  variants={cardVariants}
                  whileHover="hover"
                  className="card bg-transparent shadow-lg border border-base-300  rounded-2xl overflow-hidden transition-all duration-300 flex flex-col h-full"
                >
                  {/* Image */}
                  <figure className="relative h-52">
                    <img
                      src={
                        property.image ||
                        "https://via.placeholder.com/400x250?text=No+Image"
                      }
                      alt={property.name}
                      className="h-full w-full object-cover rounded-t-2xl"
                    />
                    <span className="absolute top-3 right-3 bg-primary text-white text-sm px-3 py-1 rounded-full shadow-lg">
                      ৳{property.price?.toLocaleString() || "N/A"}
                    </span>
                  </figure>

                  {/* Card body */}
                  <div className="card-body p-5 flex flex-col justify-between flex-1 min-h-[220px]">
                    <div className="flex flex-col gap-1">
                      <h2 className="card-title text-lg font-semibold text-base-content">
                        {property.name}
                      </h2>

                      <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1 mt-1">
                        <FaTag className="text-primary" />{" "}
                        {property.category || "N/A"}
                      </p>

                      <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2 mt-2">
                        {property.description ||
                          "No description available for this property."}
                      </p>

                      <p className="text-sm flex items-center gap-1 mt-2 text-gray-600 dark:text-gray-300">
                        <FaMapMarkerAlt className="text-error" />
                        {property.location || "Unknown Location"}
                      </p>
                    </div>

                    {/* View Details Button */}
                    <div className="card-actions justify-end mt-4">
                      <button
                        onClick={() => {
                          if (!user) {
                            toast.error("Please login first to view details!");
                            setTimeout(() => {
                              navigate("/login");
                            }, 1000); // wait 1 second before navigating
                          } else {
                            navigate(`/propertyDetails/${property._id}`);
                          }
                        }}
                        className="btn w-full text-white font-semibold bg-gradient-to-r from-[#3498db] to-[#9b59b6] border-none hover:opacity-90 transition-all duration-300"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Show All Button */}
          <div className="flex justify-center mt-10">
            <NavLink
              to="/allProperties"
              className="btn text-white font-semibold bg-gradient-to-r from-[#3498db] to-[#9b59b6] border-none px-8 py-3 hover:opacity-90 transition-all duration-300"
            >
              Show All
            </NavLink>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
