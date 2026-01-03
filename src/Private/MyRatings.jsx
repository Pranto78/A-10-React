import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../Provider/AuthContext";
import { FaStar, FaMapMarkerAlt, FaTag } from "react-icons/fa";
import { motion } from "framer-motion";

const MyRatings = () => {
  const { user, loading } = useContext(AuthContext);
  const [myReviews, setMyReviews] = useState([]);

  useEffect(() => {
    const fetchReviewsWithProperties = async () => {
      if (!user) return; // wait until user is loaded
      try {
        const res = await fetch(
          `https://a-10-server-one.vercel.app/reviews/with-property?userId=${user.uid}`
        );
        const data = await res.json();
        const reviews = Array.isArray(data) ? data : [];

        // Fetch property details if needed
        const reviewsWithProps = await Promise.all(
          reviews.map(async (review) => {
            if (review.property && review.property.name) return review;

            if (review.propertyId) {
              try {
                const propRes = await fetch(
                  `https://a-10-server-one.vercel.app/properties/${review.propertyId}`
                );
                if (!propRes.ok) throw new Error("Property not found");
                const propData = await propRes.json();
                return { ...review, property: propData };
              } catch (err) {
                console.warn(
                  `Error fetching property ${review.propertyId}:`,
                  err
                );
                return { ...review, property: null };
              }
            }

            return { ...review, property: null };
          })
        );

        setMyReviews(reviewsWithProps);
      } catch (err) {
        console.error("Error fetching reviews:", err);
      }
    };

    fetchReviewsWithProperties();
  }, [user]);

  if (loading) {
    return (
      <div className="text-center py-20 text-gray-500 dark:text-gray-400">
        <span className="loading loading-spinner text-primary"></span>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="text-center py-20 text-gray-500 dark:text-gray-400">
        Please log in to see your reviews.
      </div>
    );
  }

  return (
    <div className="px-5 md:px-20 py-16 transition duration-300">
      <h1 className="text-3xl font-bold text-base-content mb-10">
        <span className="text-purple-600">My Ratings</span>{" "}
        <span className="text-blue-400">&</span>{" "}
        <span className="text-purple-600">Reviews</span>
      </h1>

      {myReviews.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400">
          You haven't submitted any reviews yet.
        </p>
      ) : (
        <div className="grid gap-8">
          {myReviews.map((review, index) => {
            const property = review.property || {};

            const image =
              property.image && property.image.startsWith("http")
                ? property.image
                : "https://via.placeholder.com/200x150?text=No+Image";

            const propName = property.name || "Unknown Property";
            const category = property.category || "Unknown";
            const location = property.location || "Unknown";

            const reviewerName = review.reviewerName || "Anonymous";
            const reviewerPhoto =
              review.reviewerPhoto ||
              "https://via.placeholder.com/80?text=User";
            const reviewerEmail = review.reviewerEmail || "";

            return (
              <motion.div
                key={review._id || index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col sm:flex-row gap-5 bg-transparent border border-base-300 dark:bg-gray-800 rounded-2xl shadow-lg p-5"
              >
                <img
                  src={image}
                  alt={propName}
                  className="w-full sm:w-48 h-32 object-cover rounded-xl"
                />

                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    {/* Reviewer header */}
                    <div className="flex items-center gap-3 mb-3">
                      <img
                        src={reviewerPhoto}
                        alt={reviewerName}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <div className="font-semibold text-base-400">
                          <span className="text-purple-600">
                            {reviewerName}
                          </span>
                        </div>
                        <div className="text-xs text-gray-400">
                          <span className="text-blue-400">
                            {reviewerEmail || ""}
                          </span>
                        </div>
                      </div>
                    </div>

                    <h2 className="text-xl font-semibold text-base-400">
                      {propName}
                    </h2>
                    <div className="flex flex-wrap gap-3 text-gray-600 dark:text-gray-300 text-sm mb-2">
                      <span className="flex items-center gap-1">
                        <FaTag className="text-primary" /> {category}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaMapMarkerAlt className="text-error" /> {location}
                      </span>
                    </div>
                    <p className="text-base-500">{review.comment}</p>
                  </div>

                  <div className="mt-3 flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <FaStar
                          key={star}
                          className={`${
                            star <= (review.rating || 0)
                              ? "text-yellow-400"
                              : "text-gray-400"
                          }`}
                        />
                      ))}
                    </div>
                    <span>
                      {review.date
                        ? new Date(review.date).toLocaleDateString()
                        : "N/A"}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MyRatings;
