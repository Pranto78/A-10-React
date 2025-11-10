import React, { useState, useEffect } from "react";
import { NavLink } from "react-router";
import logo from "../assets/nest.png";

const Navbar = () => {
  // ✅ Theme State
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  // ✅ Apply Theme
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // ✅ Toggle Button Handler
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
        <a className="btn btn-ghost text-xl">
          <img src={logo} className="h-[50px] w-[50px]" alt="" /> Home{" "}
          <span className="text-yellow-600 font-bold">Nest</span>
        </a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      <div className="navbar-end flex items-center gap-3">
        {/* ✅ ADDED THEME TOGGLE BUTTON */}
        <div
          onClick={toggleTheme}
          className={`flex items-center cursor-pointer transition-all duration-300 px-3 py-1 rounded-full border 
          ${
            theme === "light"
              ? "bg-gray-200 border-gray-300"
              : "bg-black border-gray-700"
          }`}
        >
          {theme === "light" ? (
            <div className="flex items-center gap-2 text-black font-semibold">
              <span>DAY MODE</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
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
            </div>
          ) : (
            <div className="flex items-center gap-2 text-white font-semibold">
              <span>NIGHT MODE</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
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
            </div>
          )}
        </div>

        <a className="btn">Login</a>
      </div>
    </div>
  );
};

export default Navbar;
