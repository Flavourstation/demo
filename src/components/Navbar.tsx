import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../images/logo.jpg';
import Name from '../images/name1.png';





const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
          <img src={Logo} alt="Company Logo" className="w-40 h-28 mx-auto" />
          <img src={Name} alt="name" className="w-50 h-28 mx-auto" />
         
          </Link>
          
          

          <div className="flex items-center gap-4">
          <Link
              to="/home"
              className="bg-red-800 text-white px-6 py-2 rounded-full hover:bg-amber-900 transition-colors"
            >
              Home
            </Link>
          <Link
              to="/menu"
              className="bg-red-800 text-white px-6 py-2 rounded-full hover:bg-amber-900 transition-colors"
            >
              Menu
            </Link>
            <Link to="/offers" className="bg-red-800 text-white px-6 py-2 rounded-full hover:bg-amber-900 transition-colors">
              Offers
            </Link>
            <Link to="/contact" className="bg-red-800 text-white px-6 py-2 rounded-full hover:bg-amber-900 transition-colors">
              Contact Us
            </Link>
           
          </div>
          
          </div>
      </div>
    </nav>
  );
};

export default Navbar;