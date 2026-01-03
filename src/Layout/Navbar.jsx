import React, { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../Provider/AuthContext";
import logo from "../assets/nest.png";

// Icons
import { IoMdLogIn } from "react-icons/io";
import { FaHome, FaHouseUser, FaUserPlus } from "react-icons/fa";
import { BsFillHouseAddFill, BsHousesFill } from "react-icons/bs";
import { MdOutlineStarRate } from "react-icons/md";
import { FaHouseCircleExclamation } from "react-icons/fa6";
import { BsSunFill, BsMoonStarsFill } from "react-icons/bs";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Apply theme
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  // Detect Scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Links
  const links = (
    <>
      <li>
        <NavLink className="nav-item font-bold " to="/">
          <FaHome /> Home
        </NavLink>
      </li>

      <li>
        <NavLink className="nav-item font-bold " to="/allProperties">
          <BsHousesFill /> All Properties
        </NavLink>
      </li>

      <li>
        <NavLink className="nav-item font-bold " to="/aboutUs">
          <FaHouseCircleExclamation /> About Us
        </NavLink>
      </li>

      {user && (
        <>
          <li>
            <NavLink className="nav-item font-bold " to="/addProperty">
              <BsFillHouseAddFill /> Add Property
            </NavLink>
          </li>

          <li>
            <NavLink className="nav-item font-bold " to="/myProperties">
              <FaHouseUser /> My Properties
            </NavLink>
          </li>

          <li>
            <NavLink className="nav-item font-bold " to="/myRatings">
              <MdOutlineStarRate /> My Ratings
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  const MobileLink = ({ to, icon: Icon, label, onClick }) => (
    <NavLink
      to={to}
      onClick={onClick}
      className="flex flex-col items-center justify-center gap-2 text-white"
    >
      <Icon className="text-3xl" />
      <span className="text-lg">{label}</span>
    </NavLink>
  );


  return (
    <>
      {/* NAVBAR */}
      <div
        className={`navbar fixed top-2 left-1/2 -translate-x-1/2 z-50 transition-all duration-500
    ${
      scrolled ? "nav-scrolled max-w-6xl" : "bg-transparent w-full rounded-none"
    }`}
      >
        {/* Left */}
        <div className="navbar-start flex items-center gap-2">
          {/* Mobile Menu Button */}
          <button
            className="btn btn-ghost lg:hidden"
            onClick={() => setMobileMenu(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2">
            <img src={logo} className="h-[40px] w-[40px]" alt="Logo" />
            <span className="font-bold  text-lg sm:text-xl whitespace-nowrap gradient-text-hover">
              Home <span className="text-purple-500">Nest</span>
            </span>
          </NavLink>
        </div>

        {/* Center (PC) */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-3">{links}</ul>
        </div>

        {/* Right (PC) */}
        <div className="navbar-end hidden lg:flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="w-12 h-12 flex items-center justify-center rounded-full 
                     bg-white/10 dark:bg-black/20 backdrop-blur-xl shadow-md"
          >
            {theme === "light" ? (
              <BsSunFill className="text-yellow-400 text-xl" />
            ) : (
              <BsMoonStarsFill className="text-blue-300 text-xl" />
            )}
          </button>

          {/* Auth Buttons */}
          {!user ? (
            <>
              <NavLink
                className="btn rounded-2xl btn-sm gradient-bg text-white cursor-pointer"
                to="/login"
              >
                <IoMdLogIn size={20} /> Login
              </NavLink>

              <NavLink
                className="btn btn-sm rounded-2xl cursor-pointer hover:gradient-bg duration-150"
                to="/registration"
              >
                <FaUserPlus size={20} /> Sign Up
              </NavLink>
            </>
          ) : (
            <div className="relative">
              <img
                src={user?.photoURL}
                className="h-10 w-10 rounded-full cursor-pointer border-2 border-gray-300"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              />

              {dropdownOpen && (
                <ul className="absolute right-0 mt-3 w-56 bg-base-200 dark:bg-base-300 rounded-xl shadow-xl p-3">
                  <li className="border-b p-3">
                    <p className="font-bold ">{user.displayName}</p>
                    <p className="text-xs opacity-60">{user.email}</p>
                  </li>
                  <li className="p-2">
                    <button
                      onClick={signOutUser}
                      className="w-full gradient-bg text-white py-2 rounded-lg"
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

      {/* ⭐ FULLSCREEN GLASS MOBILE MENU ⭐ */}
      {mobileMenu && (
        <div className="fixed inset-0 bg-white/20 dark:bg-black/30 backdrop-blur-2xl z-[60] flex flex-col items-center px-6 py-8">
          {/* Close */}
          <button
            onClick={() => setMobileMenu(false)}
            className="text-4xl font-bold  text-white absolute top-6 right-6"
          >
            ✕
          </button>

          {/* Links */}
          <ul className="flex flex-col items-center gap-8 mt-16">
            <li>
              <MobileLink
                to="/"
                icon={FaHome}
                label="Home"
                onClick={() => setMobileMenu(false)}
              />
            </li>

            <li>
              <MobileLink
                to="/allProperties"
                icon={BsHousesFill}
                label="All Properties"
                onClick={() => setMobileMenu(false)}
              />
            </li>

            <li>
              <MobileLink
                to="/aboutUs"
                icon={FaHouseCircleExclamation}
                label="About Us"
                onClick={() => setMobileMenu(false)}
              />
            </li>

            {user && (
              <>
                <li>
                  <MobileLink
                    to="/addProperty"
                    icon={BsFillHouseAddFill}
                    label="Add Property"
                    onClick={() => setMobileMenu(false)}
                  />
                </li>
                <li>
                  <MobileLink
                    to="/myProperties"
                    icon={FaHouseUser}
                    label="My Properties"
                    onClick={() => setMobileMenu(false)}
                  />
                </li>
                <li>
                  <MobileLink
                    to="/myRatings"
                    icon={MdOutlineStarRate}
                    label="My Ratings"
                    onClick={() => setMobileMenu(false)}
                  />
                </li>
              </>
            )}
          </ul>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="mt-10 w-20 h-20 flex items-center justify-center rounded-full 
                       bg-white/10 dark:bg-black/20 backdrop-blur-xl shadow-xl"
          >
            {theme === "light" ? (
              <BsSunFill className="text-yellow-400 text-3xl" />
            ) : (
              <BsMoonStarsFill className="text-blue-300 text-3xl" />
            )}
          </button>

          {/* Login / Signup */}
          {!user && (
            <div className="flex flex-col gap-4 mt-10 w-full">
              <NavLink className="btn gradient-bg rounded-2xl text-white" to="/login">
                <IoMdLogIn size={20} />
                Login
              </NavLink>
              <NavLink
                className="btn border rounded-2xl hover:gradient-bg"
                to="/registration"
              >
                <FaUserPlus size={20}/>Sign Up
              </NavLink>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Navbar;
