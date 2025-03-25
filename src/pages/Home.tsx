import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import foodImage from '../images/food.jpg';
import offersimage from '../images/butterchicken1.jpg';
import menuimage from '../images/butterchicken1.jpg';
import restaurant from '../images/restaurant.jpg';

const Home = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="h-[600px] sm:h-[500px] md:h-[600px] bg-cover bg-center flex items-center"
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${foodImage})` }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">WELCOME TO FLAVOUR STATION</h1>
          <h1 className="bg-amber-600 text-black px-4 py-2 rounded-full text-2xl sm:text-3xl font-bold mb-2">Hop Aboard For a Taste of India!</h1>
          <p className="text-lg sm:text-xl mb-8">Embark on a flavorful journey where tradition meets innovation as you indulge in a delightful fusion of authentic Indian flavors and a unique dining experience—perfect for families, friends, and food lovers alike. At Flavour Station, we bring you the finest Indian cuisine served in a one-of-a-kind way—delivered straight to your table by charming miniature trains.</p>
          <h2 className="bg-amber-600 text-black px-4 py-2 rounded-full text-2xl sm:text-3xl font-bold mb-2">
            Our Mission & Vision
          </h2>
          <p className="text-lg sm:text-xl mb-8"><strong>Our Mission</strong> is to create a dining experience where every guest enjoys meals made from the freshest ingredients, cooked to perfection, and served with warmth. From our kitchen to your table, we deliver nothing but the best!</p>
          <p className="text-lg sm:text-xl mb-8"><strong>Our Vision</strong> is to bring the heart and soul of Indian food to every plate, connecting people across cultures through the universal language of taste.</p>
        </div>
      </div>

      {/* Feature Widgets */}
      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={offersimage}
              alt="Our Menu"
              className="w-full h-56 sm:h-60 md:h-72 object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg sm:text-xl font-bold mb-2">Our Menu</h3>
              <p className="text-gray-600 mb-4">Explore our wide range of authentic North Indian dishes.</p>
              <Link
                to="/menu"
                className="text-amber-800 hover:text-amber-900 font-semibold"
              >
                View Menu →
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={restaurant}
              alt="Contact Us"
              className="w-full h-56 sm:h-60 md:h-72 object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg sm:text-xl font-bold mb-2">Contact Us</h3>
              <p className="text-gray-600 mb-4">Get in touch with us for any queries.</p>
              <Link
                to="/contact"
                className="text-amber-800 hover:text-amber-900 font-semibold"
              >
                Contact Now →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
