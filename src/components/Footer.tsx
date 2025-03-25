

import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-14 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-5 text-amber-500">Contact Us</h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="mt-1" />
                <span>1001 Langs Dr (Hespler & Langs), Cambridge, ON N1R 7K7</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={20} className="mt-1" />
                <span>info@flavourstation.ca</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={20} className="mt-1" />
                <span>+1 (647) 766-3929</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={20} className="mt-1" />
                <span>Mon - Sun: 11:00 AM – 10:00 PM</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-5 text-amber-500">Quick Links</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <Link to="/home" className="hover:text-amber-400 transition-colors duration-200">Home</Link>
              </li>
              <li>
                <Link to="/menu" className="hover:text-amber-400 transition-colors duration-200">Menu</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-amber-400 transition-colors duration-200">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-5 text-amber-500">About Us</h3>
            <p className="text-gray-300 text-sm leading-relaxed text-justify">
              Inspired by the warmth of Indian hospitality and the excitement of childhood train journeys, we set out to create a North Indian restaurant in Cambridge, Ontario that offers more than just great food. Like the vast railway network that connects people across the country, our trains symbolize unity, adventure, and the joy of discovering new flavors.
            </p>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Flavour Station. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;





