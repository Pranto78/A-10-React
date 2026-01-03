import React, { useEffect, useState } from "react";
import flogo from "../assets/nest.png";
import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { SiX } from "react-icons/si";

const Footer = () => {
  const [theme, setTheme] = useState(
    document.documentElement.getAttribute("data-theme") || "light"
  );

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setTheme(document.documentElement.getAttribute("data-theme"));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <footer
      className={`transition-all duration-500 mt-10 ${
        theme === "light"
          ? "bg-transparent"
          : "bg-transparent"
      } text-base-content`}
    >
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-5 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & Description */}
        <div className="flex flex-col gap-4 items-start">
          <div className="flex items-center gap-3">
            <img
              src={flogo}
              alt="HomeNest Logo"
              className="h-16 w-16 drop-shadow-lg"
            />
            <h2 className="text-2xl font-bold">
              Home <span className="text-purple-600">Nest</span>
            </h2>
          </div>
          <p className="leading-relaxed">
            Providing reliable and modern real estate solutions. Explore your
            dream property with HomeNest.
          </p>
        </div>

        {/* Services */}
        <div>
          <h6 className="font-semibold text-lg mb-3">Services</h6>
          <ul className="flex flex-col gap-2 font-semibold">
            {["Branding", "Design", "Marketing", "Advertisement"].map(
              (item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h6 className="font-semibold text-lg mb-3">Company</h6>
          <ul className="flex flex-col gap-2 font-semibold">
            {["About Us", "Contact", "Jobs", "Press Kit"].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-white transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h6 className="font-semibold text-lg mb-3">Legal</h6>
          <ul className="flex flex-col gap-2 font-semibold">
            {["Terms of Use", "Privacy Policy", "Cookie Policy"].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-white transition-colors">
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
          <span className="text-sm font-semibold">
            &copy; {new Date().getFullYear()}{" "}
            <span className="font-bold">HomeNest</span>. All rights reserved.
          </span>
        </div>

        {/* Right Side - Social Icons */}
        <div className="flex items-center gap-5 text-xl">
          <a
            href="#"
            className="hover:text-white transition-transform transform hover:scale-110"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="hover:text-white transition-transform transform hover:scale-110"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="#"
            className="hover:text-white transition-transform transform hover:scale-110"
          >
            <FaYoutube />
          </a>
          <a
            href="#"
            className="hover:text-white transition-transform transform hover:scale-110"
          >
            <SiX />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
