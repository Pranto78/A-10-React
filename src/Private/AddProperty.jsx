import React, { useState, useContext } from "react";
import { AuthContext } from "../Provider/AuthContext";
import toast, { Toaster } from "react-hot-toast";

const AddProperty = () => {
  const { user } = useContext(AuthContext);

  const [propertyData, setPropertyData] = useState({
    name: "",
    description: "",
    category: "Rent",
    price: "",
    location: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPropertyData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check required fields
    if (
      !propertyData.name ||
      !propertyData.description ||
      !propertyData.price ||
      !propertyData.location ||
      !propertyData.image
    ) {
      return toast.error("Please fill in all required fields!");
    }

    // Merge user info
    const newProperty = {
      ...propertyData,
      postedBy: user?.displayName || "Anonymous User",
      postedEmail: user?.email || "No email provided",
      postedDate: new Date().toISOString(),
    };

    try {
      const res = await fetch(
        "https://a-10-server-one.vercel.app/createProperties",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newProperty),
        }
      );

      const data = await res.json();
      if (data.insertedId || data.acknowledged) {
        toast.success("Property added successfully!");
        setPropertyData({
          name: "",
          description: "",
          category: "Rent",
          price: "",
          location: "",
          image: "",
        });
      } else {
        toast.error("Failed to add property.");
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to add property.");
    }
  };

  return (
    <div className="px-4 md:px-20 py-16 min-h-screen">
      <Toaster position="top-right" reverseOrder={false} />
      <h1 className="text-3xl md:text-4xl font-bold mb-10 gradient-text text-center ">
        Add New Properties
      </h1>

      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto bg-transparent border border-base-300 dark:bg-gray-800 p-8 md:p-12 rounded-3xl shadow-xl space-y-6"
      >
        {/* Property Name */}
        <div className="flex flex-col">
          <label className="font-semibold text-gray-700 dark:text-gray-200 mb-2">
            Property Name
          </label>
          <input
            type="text"
            name="name"
            value={propertyData.name}
            onChange={handleChange}
            className="input input-bordered w-full rounded-xl shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-500 transition"
            required
          />
        </div>

        {/* Description */}
        <div className="flex flex-col">
          <label className="font-semibold text-gray-700 dark:text-gray-200 mb-2">
            Description
          </label>
          <textarea
            name="description"
            value={propertyData.description}
            onChange={handleChange}
            className="textarea textarea-bordered w-full rounded-xl shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-500 transition resize-none h-28"
            required
          />
        </div>

        {/* Category & Price */}
        <div className="flex flex-col md:flex-row md:space-x-4 gap-4">
          {/* Category */}
          <div className="flex-1 flex flex-col">
            <label className="font-semibold text-gray-700 dark:text-gray-200 mb-2">
              Category
            </label>
            <select
              name="category"
              value={propertyData.category}
              onChange={handleChange}
              className="select select-bordered w-full rounded-xl shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-500 transition"
            >
              <option value="Rent">Rent</option>
              <option value="Sale">Sale</option>
              <option value="Commercial">Commercial</option>
              <option value="Land">Land</option>
            </select>
          </div>

          {/* Price */}
          <div className="flex-1 flex flex-col">
            <label className="font-semibold text-gray-700 dark:text-gray-200 mb-2">
              Price
            </label>
            <input
              type="number"
              name="price"
              value={propertyData.price}
              onChange={handleChange}
              className="input input-bordered w-full rounded-xl shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-500 transition"
              required
            />
          </div>
        </div>

        {/* Location */}
        <div className="flex flex-col">
          <label className="font-semibold text-gray-700 dark:text-gray-200 mb-2">
            Location
          </label>
          <input
            type="text"
            name="location"
            value={propertyData.location}
            onChange={handleChange}
            className="input input-bordered w-full rounded-xl shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-500 transition"
            required
          />
        </div>

        {/* Image Link */}
        <div className="flex flex-col">
          <label className="font-semibold text-gray-700 dark:text-gray-200 mb-2">
            Image Link
          </label>
          <input
            type="text"
            name="image"
            value={propertyData.image}
            onChange={handleChange}
            placeholder="https://example.com/image.jpg"
            className="input input-bordered w-full rounded-xl shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-500 transition"
            required
          />
        </div>

        {/* User Info (read-only) */}
        <div className="flex flex-col md:flex-row md:space-x-4 gap-4">
          <div className="flex-1 flex flex-col">
            <label className="font-semibold text-gray-700 dark:text-gray-300 mb-2">
              User Name
            </label>
            <input
              type="text"
              value={user?.displayName || "Anonymous"}
              readOnly
              className="input input-bordered w-full rounded-xl shadow-sm bg-base-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 cursor-not-allowed"
            />
          </div>

          <div className="flex-1 flex flex-col">
            <label className="font-semibold text-gray-700 dark:text-gray-300 mb-2">
              User Email
            </label>
            <input
              type="email"
              value={user?.email || "No Email"}
              readOnly
              className="input input-bordered w-full rounded-xl shadow-sm bg-base-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 cursor-not-allowed"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="btn w-full text-white font-semibold bg-gradient-to-r from-[#3498db] to-[#9b59b6] border-none hover:opacity-90 transition-all duration-300 py-3 text-lg rounded-xl"
        >
          Add Property
        </button>
      </form>
    </div>
  );
};

export default AddProperty;
