import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import foodImage from '../images/food.jpg';
import offersimage from '../images/offers.jpg';



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
      <div 
        className="h-[400px] bg-cover bg-center flex items-center"
       
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${foodImage})` }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl font-bold mb-6">WELCOME TO FLAVOUR STATION</h1>
          <h1 className="bg-amber-400 text-black px-2 py-1 rounded-full text-3xl font-bold mb-4">Hop Aboard For a Taste of India!</h1>
         
              
          <p className="text-xl mb-8">Embark on a flavorful journey where tradition meets innovation as you indulge in a delightful fusion of authentic Indian flavors and a unique dining experience—perfect for families, friends, and food lovers alike. 
            At Flavour Station, we bring you the finest Indian cuisine served in a one-of-a-kind
             way—delivered straight to your table by charming miniature trains.</p>
            <h2 className="bg-amber-400 text-black px-2 py-1 rounded-full text-3xl font-bold mb-4">
              Our Mission </h2>
            <p className="text-xl mb-8">Our mission is to create a dining experience where every guest enjoys meals made from the freshest ingredients, cooked to perfection, and served with warmth. From our kitchen to your table, we deliver nothing but the best!</p>
                        
            <p className="text-xl mb-8"> is to bring the heart and soul of Indian food to every plate, connecting people across cultures through the universal language of taste</p>
         
            </div>
        
      </div>

      {/* Feature Widgets */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={offersimage}
              alt="Special Offers"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Special Offers</h3>
              <p className="text-gray-600 mb-4">Discover our latest deals and promotional offers.</p>
              <Link
                to="/offers"
                className="text-amber-800 hover:text-amber-900 font-semibold"
              >
                View Offers →
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&q=80"
              alt="Our Menu"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Our Menu</h3>
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
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80"
              alt="Contact Us"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Contact Us</h3>
              <p className="text-gray-600 mb-4">Get in touch with us for reservations or queries.</p>
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

      {/* Mission & Vision */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Mission & Vision</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We strive to preserve and share the rich culinary heritage of North India
              while providing an exceptional dining experience to our guests.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Slider {...sliderSettings}>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&q=80"
                  alt="Restaurant Interior"
                  className="w-full h-[400px] object-cover rounded-lg"
                />
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1514412076816-d228b5c0973c?auto=format&fit=crop&q=80"
                  alt="Food Preparation"
                  className="w-full h-[400px] object-cover rounded-lg"
                />
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1621871908119-295c8ce5c41e?auto=format&fit=crop&q=80"
                  alt="Dining Experience"
                  className="w-full h-[400px] object-cover rounded-lg"
                />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;