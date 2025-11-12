import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthContext";
import toast, { Toaster } from "react-hot-toast";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

const MyProperty = () => {
  const { user } = useContext(AuthContext);
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Fetch properties of logged-in user only
  useEffect(() => {
    if (!user?.email) return;
    const fetchMyProperties = async () => {
      try {
        const res = await fetch("http://localhost:4000/getMyProperty");
        const data = await res.json();

        // Filter only logged-in user's properties
        const userProps = data.filter((item) => item.userEmail === user.email);
        setProperties(userProps);
      } catch (error) {
        console.error(error);
        toast.error("Failed to load your properties!");
      } finally {
        setLoading(false);
      }
    };
    fetchMyProperties();
  }, [user]);

  // Handle Delete
  const handleDelete = async (id) => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "This property will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (confirm.isConfirmed) {
      try {
        const res = await fetch(`http://localhost:4000/properties/${id}`, {
          method: "DELETE",
        });
        const result = await res.json();

        if (result.deletedCount > 0) {
          Swal.fire("Deleted!", "Property has been deleted.", "success");
          // Update UI instantly
          setProperties((prev) => prev.filter((item) => item._id !== id));
        }
      } catch (error) {
        console.error(error);
        toast.error("Failed to delete property!");
      }
    }
  };

  // Handle Update navigation
  const handleUpdate = (id) => {
    navigate(`/updateProperty/${id}`);
  };

  // Handle View Details navigation
  const handleView = (id) => {
    navigate(`/myPropertiesDetails/${id}`);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-xl font-semibold dark:text-gray-200">
        Loading your properties...
      </div>
    );
  }

  return (
    <div className="px-6 md:px-20 py-16 bg-base-100 dark:bg-gray-900 min-h-screen">
      <Toaster position="top-right" />
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100 text-center">
        My Properties
      </h1>

      {properties.length === 0 ? (
        <p className="text-center text-gray-600 dark:text-gray-300">
          You haven’t added any properties yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <div
              key={property._id}
              className="card bg-base-200 dark:bg-gray-800 shadow-xl rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <figure>
                <img
                  src={property.image}
                  alt={property.name}
                  className="h-52 w-full object-cover"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-gray-900 dark:text-gray-100">
                  {property.name}
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  <strong>Category:</strong> {property.category}
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  <strong>Price:</strong> ${property.price}
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  <strong>Location:</strong> {property.location}
                </p>
                <p className="text-gray-500 text-sm">
                  Posted:{" "}
                  {new Date(property.postedDate).toLocaleDateString("en-GB")}
                </p>

                <div className="mt-4 flex flex-wrap gap-3">
                  <button
                    onClick={() => handleView(property._id)}
                    className="btn btn-sm bg-blue-500 hover:bg-blue-600 border-none text-white rounded-xl"
                  >
                    View Details
                  </button>
                  <button
                    onClick={() => handleUpdate(property._id)}
                    className="btn btn-sm bg-yellow-500 hover:bg-yellow-600 border-none text-white rounded-xl"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(property._id)}
                    className="btn btn-sm bg-red-500 hover:bg-red-600 border-none text-white rounded-xl"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyProperty;
