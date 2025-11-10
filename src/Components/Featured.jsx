import React, { useEffect, useState } from "react";
import { FaMapMarkerAlt, FaTag } from "react-icons/fa";
import { motion } from "framer-motion";

const Featured = () => {
  const [properties, setProperties] = useState([]);

  // Fetch featured properties from backend
  useEffect(() => {
    fetch("http://localhost:4000/featured-properties")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched properties:", data);
        setProperties(data);
      })
      .catch((error) =>
        console.error("Error fetching featured properties:", error)
      );
  }, []);

  // Placeholder click action
  const handleViewDetails = (id) => {
    alert(`View details for property ID: ${id}`);
  };

  return (
    <div className="py-10 px-5 md:px-16 bg-base-100 transition duration-300">
      <h2 className="text-3xl font-bold text-center mb-8">
        Featured Properties
      </h2>

      {properties.length === 0 ? (
        <div className="text-center text-gray-500">Loading properties...</div>
      ) : (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {properties.map((property) => (
            <motion.div
              key={property._id}
              whileHover={{ scale: 1.03 }}
              className="card bg-base-200 shadow-xl border border-base-300 transition duration-300"
            >
              <figure className="relative">
                <img
                  src={
                    property.image ||
                    "https://via.placeholder.com/400x250?text=No+Image"
                  }
                  alt={property.name}
                  className="h-52 w-full object-cover rounded-t-2xl"
                />
                <span className="absolute top-3 right-3 bg-primary text-white text-sm px-3 py-1 rounded-full shadow">
                  ৳{property.price?.toLocaleString() || "N/A"}
                </span>
              </figure>

              <div className="card-body p-5">
                <h2 className="card-title text-lg font-semibold">
                  {property.name}
                </h2>

                <p className="text-sm text-gray-500 flex items-center gap-1">
                  <FaTag className="text-primary" />{" "}
                  {property.category || "N/A"}
                </p>

                <p className="text-sm text-gray-600 line-clamp-2">
                  {property.description ||
                    "No description available for this property."}
                </p>

                <p className="text-sm flex items-center gap-1 mt-2 text-gray-600">
                  <FaMapMarkerAlt className="text-error" />
                  {property.location || "Unknown Location"}
                </p>

                <div className="card-actions justify-end mt-4">
                  <button
                    onClick={() => handleViewDetails(property._id)}
                    className="btn btn-primary btn-sm"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Featured;
