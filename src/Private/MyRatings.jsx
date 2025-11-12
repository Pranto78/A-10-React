import React, { useEffect, useState } from "react";
import { NavLink } from "react-router";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

// Replace with the real API base if different
const API_BASE = "http://localhost:4000";

const MyRatings = ({ userId }) => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userId) {
      // for dev: you can set a default test user
      console.warn(
        "MyRatings: no userId provided. Provide userId prop from auth."
      );
    }

    const fetchReviews = async () => {
      try {
        // recommended: use /reviews/with-property to get property data alongside reviews
        const url = `${API_BASE}/reviews/with-property?userId=${userId || ""}`;
        const res = await fetch(url);
        const data = await res.json();
        setReviews(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [userId]);

  if (loading) {
    return <div className="text-center py-20">Loading your reviews...</div>;
  }

  if (!reviews.length) {
    return (
      <div className="text-center py-20 text-gray-500">
        You haven't reviewed any properties yet.
      </div>
    );
  }

  return (
    <div className="px-5 md:px-20 py-12">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">
        My Ratings
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reviews.map((r) => {
          // if you used the aggregation, property is available as r.property
          const prop = r.property || r.propertyDoc || {};
          return (
            <motion.div
              key={r._id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.02 }}
              className="bg-base-200 dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden"
            >
              <div className="flex">
                <div className="w-36 h-28 overflow-hidden">
                  <img
                    src={
                      prop.image ||
                      "https://via.placeholder.com/150x100?text=No+Image"
                    }
                    alt={prop.name || "Property thumb"}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                      {prop.name || "Unknown Property"}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      {prop.location || ""}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <FaStar
                          key={s}
                          className={`text-sm ${
                            s <= r.rating ? "text-yellow-400" : "text-gray-300"
                          }`}
                        />
                      ))}
                      <span className="text-sm ml-2 text-gray-500">
                        ({r.rating})
                      </span>
                    </div>

                    <NavLink
                      to={`/propertyDetails/${prop._id || prop._id}`}
                      className="px-4 py-2 rounded-md text-white font-semibold bg-gradient-to-r from-[#3498db] to-[#9b59b6] hover:opacity-90 transition"
                    >
                      View
                    </NavLink>
                  </div>

                  <p className="text-sm text-gray-700 dark:text-gray-300 mt-3 line-clamp-2">
                    {r.reviewText}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {new Date(r.date).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default MyRatings;
