import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/logo.jpg';
import Name from '../images/name1.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <img
              src={Logo}
              alt="Company Logo"
              className="w-12 h-12 object-contain md:w-14 md:h-14"
            />
            <img
              src={Name}
              alt="Company Name"
              className="w-36 md:w-48 h-auto object-contain"
            />
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Link
            to="/home"
            className="bg-red-800 text-white px-5 py-2 rounded-full hover:bg-amber-900 transition-colors"
          >
            Home
          </Link>
          <Link
            to="/menu"
            className="bg-red-800 text-white px-5 py-2 rounded-full hover:bg-amber-900 transition-colors"
          >
            Menu
          </Link>
          <Link
            to="/contact"
            className="bg-red-800 text-white px-5 py-2 rounded-full hover:bg-amber-900 transition-colors"
          >
            Contact Us
          </Link>
        </div>

        <button
          className="md:hidden flex items-center text-red-800"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="flex flex-col p-4 space-y-2">
            <Link
              to="/home"
              className="bg-red-800 text-white px-4 py-2 rounded-full hover:bg-amber-900 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/menu"
              className="bg-red-800 text-white px-4 py-2 rounded-full hover:bg-amber-900 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Menu
            </Link>
            <Link
              to="/contact"
              className="bg-red-800 text-white px-4 py-2 rounded-full hover:bg-amber-900 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
