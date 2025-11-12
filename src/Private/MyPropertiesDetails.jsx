import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { FaMapMarkerAlt, FaTag, FaUserCircle, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const MyPropertiesDetails = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");

  // ✅ Fetch property and reviews
  useEffect(() => {
    if (!id) return;

    fetch(`http://localhost:4000/getMyProperty`)
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item._id === id);
        setProperty(found);
      })
      .catch((err) => console.error("Error fetching property:", err));

    fetch(`http://localhost:4000/reviews?propertyId=${id}`)
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((err) => console.error("Error fetching reviews:", err));
  }, [id]);

  // ✅ Handle review submission
  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (!rating || !reviewText.trim()) {
      alert("Please add rating and review!");
      return;
    }

    const newReview = {
      propertyId: id,
      rating,
      reviewText,
      reviewerName: "Authenticated User", // Replace with actual user later
      date: new Date().toISOString(),
    };

    fetch("http://localhost:4000/reviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newReview),
    })
      .then((res) => res.json())
      .then((saved) => {
        setReviews([saved, ...reviews]);
        setRating(0);
        setReviewText("");
      })
      .catch((err) => console.error("Error posting review:", err));
  };

  if (!property)
    return (
      <div className="text-center py-20 text-gray-500 dark:text-gray-400">
        Loading property details...
      </div>
    );

  // ✅ Use correct DB fields
  const {
    name = "Unnamed Property",
    description = "No description provided.",
    category = "Uncategorized",
    price = 0,
    location = "Unknown",
    image,
    userName = "Anonymous",
    userEmail = "No email provided",
    postedDate,
  } = property;

  const displayImage =
    image && image.startsWith("http")
      ? image
      : "https://via.placeholder.com/800x400?text=No+Image+Available";

  const displayDate = postedDate
    ? new Date(postedDate).toLocaleDateString()
    : "N/A";

  return (
    <div className="px-5 md:px-20 py-16 bg-base-100 dark:bg-gray-900 transition duration-300">
      {/* 🏡 Property Details */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-5xl mx-auto bg-base-200 dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden"
      >
        {/* 📸 Image */}
        <div className="p-4 bg-base-100 dark:bg-gray-900">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 3000 }}
            loop={true}
            className="h-96 w-full rounded-xl overflow-hidden shadow-md"
          >
            <SwiperSlide>
              <img
                src={displayImage}
                alt={name}
                className="h-96 w-full object-contain rounded-xl"
              />
            </SwiperSlide>
          </Swiper>
        </div>

        {/* 🧾 Info */}
        <div className="p-8 space-y-4">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            {name}
          </h1>

          <div className="flex flex-wrap gap-3 text-gray-600 dark:text-gray-300">
            <span className="flex items-center gap-2">
              <FaTag className="text-primary" /> {category}
            </span>
            <span className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-error" /> {location}
            </span>
          </div>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-5">
            <p className="text-2xl font-bold text-[#3498db]">৳{price}</p>

            <div className="flex items-center gap-3 mt-3 sm:mt-0">
              <FaUserCircle className="text-2xl text-gray-400" />
              <div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Posted by: <span className="font-semibold">{userName}</span>
                </p>
                <p className="text-xs text-gray-500">{userEmail}</p>
              </div>
            </div>
          </div>

          <p className="text-sm text-gray-500">Posted on: {displayDate}</p>
        </div>
      </motion.div>

      {/* ⭐ Reviews Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto mt-16 bg-base-200 dark:bg-gray-800 rounded-2xl shadow-lg p-8"
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">
          Ratings & Reviews
        </h2>

        {/* 📝 Add Review */}
        <form
          onSubmit={handleReviewSubmit}
          className="mb-10 flex flex-col gap-4 bg-base-300 dark:bg-gray-700 p-5 rounded-xl"
        >
          <label className="font-semibold text-gray-800 dark:text-gray-100">
            Your Rating:
          </label>
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar
                key={star}
                className={`cursor-pointer text-2xl transition ${
                  star <= rating ? "text-yellow-400" : "text-gray-400"
                }`}
                onClick={() => setRating(star)}
              />
            ))}
          </div>

          <textarea
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            className="textarea textarea-bordered w-full text-gray-800 dark:text-gray-200"
            placeholder="Write your review here..."
            required
          />

          <button
            type="submit"
            className="btn text-white font-semibold bg-gradient-to-r from-[#3498db] to-[#9b59b6] border-none hover:opacity-90 transition-all duration-300"
          >
            Submit Review
          </button>
        </form>

        {/* 💬 Display Reviews */}
        <div className="space-y-6">
          {reviews.length === 0 ? (
            <p className="text-gray-500 dark:text-gray-400">
              No reviews yet. Be the first to review this property!
            </p>
          ) : (
            reviews.map((review, index) => (
              <div
                key={index}
                className="p-5 bg-base-300 dark:bg-gray-700 rounded-xl shadow-sm"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100">
                    {review.reviewerName || "Anonymous"}
                  </h4>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <FaStar
                        key={star}
                        className={`text-sm ${
                          star <= review.rating
                            ? "text-yellow-400"
                            : "text-gray-400"
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  {review.reviewText}
                </p>
                <p className="text-xs text-gray-500 mt-2">
                  {review.date
                    ? new Date(review.date).toLocaleDateString()
                    : "N/A"}
                </p>
              </div>
            ))
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default MyPropertiesDetails;
