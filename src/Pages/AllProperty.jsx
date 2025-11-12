import React, { useEffect, useState } from "react";
import { FaMapMarkerAlt, FaTag } from "react-icons/fa";
import { motion } from "framer-motion";
import { NavLink } from "react-router";

// Card motion variants
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
  hover: { scale: 1.05, boxShadow: "0px 20px 30px rgba(0,0,0,0.3)" },
};

const AllProperty = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/featured-properties")
      .then((res) => res.json())
      .then((data) => setProperties(data))
      .catch((err) => console.error("Error fetching properties:", err));
  }, []);

  return (
    <div className="py-20 px-5 md:px-16 bg-base-100 transition duration-300">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100">
        All Properties
      </h2>

      {properties.length === 0 ? (
        <div className="text-center text-gray-500 dark:text-gray-400">
          Loading properties...
        </div>
      ) : (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {properties.map((property) => (
            <motion.div
              key={property._id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              whileHover="hover"
              exit="hidden"
              className="card bg-base-200 dark:bg-gray-800 shadow-lg border border-base-300 dark:border-gray-700 rounded-2xl overflow-hidden flex flex-col h-full transition-all duration-300"
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

              {/* Card Body */}
              <div className="card-body p-5 flex flex-col justify-between flex-1 min-h-[220px]">
                <div className="flex flex-col gap-1">
                  <h2 className="card-title text-lg font-semibold text-gray-900 dark:text-gray-100">
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
                  <NavLink
                    to={`/propertyDetails/${property._id}`}
                    className="btn w-full text-white font-semibold bg-gradient-to-r from-[#3498db] to-[#9b59b6] border-none hover:opacity-90 transition-all duration-300"
                  >
                    View Details
                  </NavLink>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllProperty;
