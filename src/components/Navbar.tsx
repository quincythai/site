import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      {/* Prevent from stretching too much */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center py-4 px-2">
            <img src="/logo.png" alt="Brand" className="h-8 w-auto" />
          </Link>

          {/* Links */}
          <div className="flex items-center space-x-4 ml-auto">
            <Link
              to="/"
              className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
            >
              About
            </Link>
            <Link
              to="/projects"
              className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
            >
              Projects
            </Link>
            <Link
              to="/contact"
              className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;