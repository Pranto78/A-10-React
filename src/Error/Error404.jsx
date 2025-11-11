import React from "react";
import { useNavigate } from "react-router";
import { FaArrowLeft } from "react-icons/fa";

const Error404 = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-4 relative overflow-hidden">
      {/* Background Animated Circles */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute bg-gradient-to-r from-purple-500 to-blue-500 opacity-20 rounded-full w-72 h-72 top-[-10%] left-[-10%] animate-spin-slow"></div>
        <div className="absolute bg-gradient-to-r from-pink-500 to-indigo-500 opacity-20 rounded-full w-96 h-96 bottom-[-20%] right-[-10%] animate-spin-slow-reverse"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <h1 className="text-[10rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 animate-text-flicker">
          404
        </h1>

        <p className="text-3xl font-semibold mt-2 tracking-wide">
          Page Not Found
        </p>

        <p className="text-gray-400 mt-2 max-w-lg">
          Oops! The page you're looking for doesn't exist or has been moved.
          Navigate back or explore new paths.
        </p>

        {/* Futuristic Illustration */}
        <img
          src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
          alt="Lost"
          className="w-72 my-6 border-4 border-gradient-to-r from-purple-400 via-pink-500 to-blue-400 rounded-xl shadow-lg shadow-purple-500/50 animate-pulse"
        />

        {/* Go Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="btn btn-outline text-white border-white hover:bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 hover:text-black mt-2 px-6 py-3 flex items-center gap-2 transition-all duration-500 hover:scale-105"
        >
          <FaArrowLeft />
          Go Back
        </button>
      </div>
    </div>
  );
};

export default Error404;
