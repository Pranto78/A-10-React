import React, { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../Provider/AuthContext";
import logo from "../assets/nest.png";
import { IoMdLogIn } from "react-icons/io";
import { FaUserPlus } from "react-icons/fa";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  console.log("User in Navbar:", user);

  // Apply theme
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  const links = (
    <>
      <li>
        <NavLink className="text-base-400 font-bold" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="text-base-400 font-bold" to="/allProperties">
          All Properties
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink className="text-base-400 font-bold" to="/addProperty">
              Add Property
            </NavLink>
          </li>
          <li>
            <NavLink className="text-base-400 font-bold" to="/myProperties">
              My Properties
            </NavLink>
          </li>
          <li>
            <NavLink className="text-base-400 font-bold" to="/myRatings">
              My Ratings
            </NavLink>
          </li>
        </>
      )}
    </>
  );

return (
  <div
    className={`navbar shadow-sm fixed top-0 left-0 w-full z-50 transition-all duration-500
    ${
      theme === "light"
        ? "bg-gradient-to-r from-[#3498db] to-[#9b59b6]"
        : "bg-transparent"
    }`}
  >
    {/* Start */}
    <div className="navbar-start">
      {/* Mobile Dropdown */}
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

        {/* Dropdown Menu (Mobile) */}
        <ul
          tabIndex="-1"
          className={`menu menu-sm dropdown-content rounded-box z-10 mt-3 w-52 p-2 transition-all duration-300 ${
            theme === "light"
              ? "bg-base-100 text-base-content shadow-none"
              : "bg-base-100 text-base-content shadow-lg"
          }`}
        >
          {links}

          {/* 🌙 Mobile Theme Toggle */}
          <li className="mt-3">
            <div
              onClick={toggleTheme}
              className="relative w-14 h-8 flex items-center bg-gray-400 dark:bg-gray-700 rounded-full p-1 cursor-pointer transition-colors duration-500 mx-auto"
            >
              <div
                className={`absolute left-1 top-1 w-6 h-6 rounded-full bg-white transition-transform duration-500 ${
                  theme === "dark" ? "translate-x-6" : ""
                }`}
              ></div>
              {theme === "light" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute left-2 w-4 h-4 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15a5 5 0 100-10 5 5 0 000 10z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute right-2 w-4 h-4 text-gray-200"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </div>
          </li>
        </ul>
      </div>

      {/* Logo */}
      <NavLink
        className="btn btn-ghost lg:text-xl flex items-center gap-2"
        to="/"
      >
        <img src={logo} className="h-[40px] w-[40px]" alt="Logo" />
        Home <span className="text-purple-600 font-bold">Nest</span>
      </NavLink>
    </div>

    {/* Center (Desktop links only) */}
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">{links}</ul>
    </div>

    {/* End (Right side - Desktop & Mobile) */}
    <div className="navbar-end flex items-center gap-3">
      {/* 🌙 Desktop Theme Toggle (hidden on mobile) */}
      <div
        onClick={toggleTheme}
        className="relative w-14 h-8 hidden lg:flex items-center bg-gray-400 dark:bg-gray-700 rounded-full p-1 cursor-pointer transition-colors duration-500"
      >
        <div
          className={`absolute left-1 top-1 w-6 h-6 rounded-full bg-white transition-transform duration-500 ${
            theme === "dark" ? "translate-x-6" : ""
          }`}
        ></div>
        {theme === "light" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-2 w-4 h-4 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 15a5 5 0 100-10 5 5 0 000 10z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute right-2 w-4 h-4 text-gray-200"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        )}
      </div>

      {/* 👤 User Section */}
      {!user ? (
        <>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              `btn btn-sm px-3 py-1 text-base-400  rounded-full font-bold border-none transition-all duration-300 flex items-center gap-1 ${
                isActive
                  ? "bg-gradient-to-r from-[#3498db] to-[#9b59b6] text-white"
                  : "bg-gradient-to-r from-[#3498db] to-[#9b59b6] text-base-400"
              }`
            }
          >
            <IoMdLogIn size={20} /> Login
          </NavLink>
          <NavLink
            to="/registration"
            className="btn btn-sm px-4 py-1 text-base-400 rounded-full border border-[#3498db]  font-medium 
             bg-transparent transition-all duration-300
             hover:text-white hover:bg-gradient-to-r hover:from-[#3498db] hover:to-[#9b59b6]"
          >
            <FaUserPlus size={20} />
            SignUp
          </NavLink>
        </>
      ) : (
        <div className="relative">
          <img
            src={
              user?.photoURL ? user.photoURL : "https://via.placeholder.com/40"
            }
            alt={user?.displayName || "User"}
            referrerPolicy="no-referrer"
            className="h-10 w-10 rounded-full cursor-pointer object-cover border-2 border-gray-300 hover:border-purple-800 transition-all duration-300"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          />
          {dropdownOpen && (
            <ul className="absolute right-0 mt-2 w-56 bg-base-300 border rounded-xl shadow-xl p-3 z-50 transition-all duration-300">
              <li className="p-3 border-b">
                <p className="font-semibold text-base-400">
                  {user.displayName}
                </p>
                <p className="text-xs text-gray-500">{user.email}</p>
              </li>

              <li className="p-2">
                <button
                  onClick={() => signOutUser()}
                  className="w-full py-2 rounded-lg font-semibold text-white
             bg-gradient-to-r from-[#3498db] to-[#9b59b6]
             transition-all duration-300 hover:opacity-90 hover:shadow-lg"
                >
                  Log Out
                </button>
              </li>
            </ul>
          )}
        </div>
      )}
    </div>
  </div>
);

};

export default Navbar;
