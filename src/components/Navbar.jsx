import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="shadow-md p-4 bg-gray-800">
      <div className="container mx-auto flex flex-col lg:flex-row items-start lg:items-center lg:justify-between">
        {/* Brand */}
        <div className="flex justify-between items-center w-full lg:w-auto">
          <NavLink
            className="flex items-center text-lg font-semibold text-white font-serif"
            to="/"
          >
            <img
              src="/logo.jpg"
              alt="Logo"
              className="w-8 h-8 rounded-full mr-2"
            />
            EliteCA
          </NavLink>

          {/* Toggle Button for Mobile */}
          <button
            className="lg:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Collapsible Menu */}
        <div
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } flex-col items-center justify-center lg:flex lg:space-x-6 mt-4 lg:mt-0 w-full lg:w-auto`}
        >
          <ul className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-4">
            {/* Navigation Links */}
            <li>
              <NavLink
                className={({ isActive }) =>
                  `text-white hover:text-blue-400 transition duration-300 ease-in-out ${
                    isActive ? "font-bold border-b-2 border-blue-400" : ""
                  }`
                }
                to="/"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `text-white hover:text-blue-400 transition duration-300 ease-in-out ${
                    isActive ? "font-bold border-b-2 border-blue-400" : ""
                  }`
                }
                to="/profile"
                onClick={() => setIsMenuOpen(false)}
              >
                Profiles
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `text-white hover:text-blue-400 transition duration-300 ease-in-out ${
                    isActive ? "font-bold border-b-2 border-blue-400" : ""
                  }`
                }
                to="/about"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `text-white hover:text-blue-400 transition duration-300 ease-in-out ${
                    isActive ? "font-bold border-b-2 border-blue-400" : ""
                  }`
                }
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
