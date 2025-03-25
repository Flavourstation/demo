import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <MapPin size={20} />
                <span>1001 Langs Dr (Hespler & Langs), Cambridge, ON N1R 7K7</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={20} />
                <span>info@flavourstation.ca</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={20} />
                <span>+1 (647) 766-3929</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={20} />
                <span>Mon-Sun: 11:00 AM - 10:00 PM</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/home" className="hover:text-amber-500 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/menu" className="hover:text-amber-500 transition-colors">Menu</Link>
              </li>
             {/* <li>
                <Link to="/offers" className="hover:text-amber-500 transition-colors">Offers</Link>
              </li> */}
              <li>
                <Link to="/contact" className="hover:text-amber-500 transition-colors">Contact</Link>
              </li> 
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-gray-400">
            Inspired by the warmth of Indian hospitality and the excitement of childhood train journeys, we set out to create a North Indian Restaurant in Cambridge, Ontario that offers more than just great food.Just like vast railway network, that connects cities and people across the country, our trains symbolize unity, adventure, and the joy of discovering new flavors.
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Flavour Station. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;