import React, { useState, useEffect } from "react";
import { NavLink } from "react-router";
import logo from "../assets/nest.png";

const Navbar = () => {
  // Theme state
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  // Apply theme
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Toggle theme
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/allProperties">All Properties</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm fixed top-0 left-0 w-full z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl flex items-center gap-2">
          <img src={logo} className="h-[40px] w-[40px]" alt="Logo" /> Home{" "}
          <span className="text-yellow-600 font-bold">Nest</span>
        </a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      <div className="navbar-end flex items-center gap-3">
        {/* Compact Theme Toggle */}
        <div
          onClick={toggleTheme}
          className={`flex items-center cursor-pointer transition-all duration-300 px-2 py-1 rounded-full border text-xs
          ${
            theme === "light"
              ? "bg-gray-200 border-gray-300 text-gray-800"
              : "bg-gray-900 border-gray-700 text-white"
          }`}
        >
          {theme === "light" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 4.354a8 8 0 110 15.292 8 8 0 010-15.292z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M20 12.354A8 8 0 1111.646 4a8.001 8.001 0 008.354 8.354z"
              />
            </svg>
          )}
          <span>{theme === "light" ? "DAY" : "NIGHT"}</span>
        </div>

        <NavLink to="/login" className="btn btn-sm px-3 py-1">Login</NavLink>
        <NavLink to="/registration" className="btn btn-sm px-3 py-1">SignUp</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
