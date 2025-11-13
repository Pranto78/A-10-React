import React from "react";
import flogo from "../assets/nest.png";
import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { SiX } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-gray-900 to-gray-800 text-gray-300 mt-10">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-5 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & Description */}
        <div className="flex flex-col gap-4 items-start">
          <div className="flex items-center gap-3">
            <img
              src={flogo}
              alt="HomeNest Logo"
              className="h-16 w-16  drop-shadow-lg"
            />
            <h2 className="text-2xl font-bold text-white">HomeNest</h2>
          </div>
          <p className="text-gray-400 leading-relaxed">
            Providing reliable and modern real estate solutions. Explore your
            dream property with HomeNest.
          </p>
        </div>

        {/* Services */}
        <div>
          <h6 className="text-white font-semibold text-lg mb-3">Services</h6>
          <ul className="flex flex-col gap-2">
            {["Branding", "Design", "Marketing", "Advertisement"].map(
              (item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h6 className="text-white font-semibold text-lg mb-3">Company</h6>
          <ul className="flex flex-col gap-2">
            {["About Us", "Contact", "Jobs", "Press Kit"].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h6 className="text-white font-semibold text-lg mb-3">Legal</h6>
          <ul className="flex flex-col gap-2">
            {["Terms of Use", "Privacy Policy", "Cookie Policy"].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 py-6 px-5 flex flex-col md:flex-row items-center justify-between gap-4 max-w-7xl mx-auto">
        {/* Left Side */}
        <div className="flex items-center gap-3">
          <img
            src={flogo}
            alt="HomeNest Logo"
            className="h-10 w-10 object-contain drop-shadow-md"
          />
          <span className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()}{" "}
            <span className="text-white font-medium">HomeNest</span>. All rights
            reserved.
          </span>
        </div>

        {/* Right Side - Social Icons */}
        <div className="flex items-center gap-5 text-xl">
          <a
            href="#"
            className="hover:text-blue-500 transition-transform transform hover:scale-110"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="hover:text-blue-400 transition-transform transform hover:scale-110"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="#"
            className="hover:text-red-500 transition-transform transform hover:scale-110"
          >
            <FaYoutube />
          </a>
          <a
            href="#"
            className="hover:text-gray-200 transition-transform transform hover:scale-110"
          >
            <SiX />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
