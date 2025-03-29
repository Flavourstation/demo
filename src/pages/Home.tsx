import React from 'react';
import { Link } from 'react-router-dom';
import foodImage from '../images/food.jpg';
import offersImage from '../images/butterchicken1.jpg';
import restaurantImage from '../images/restaurant.jpg';

const Home = () => {
  return (
    <div className="flex flex-col">
      <div
        className="bg-cover bg-center flex items-center justify-center text-center text-white py-20 md:py-32 px-4"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${foodImage})`,
        }}
      >
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            WELCOME TO FLAVOUR STATION
          </h1>
          <h2 className="inline-block bg-amber-600 text-black px-4 py-2 rounded-full text-2xl md:text-3xl font-bold mb-4">
            Hop Aboard For a Taste of India!
          </h2>
          <p className="text-lg md:text-xl mb-8">
            Embark on a flavorful journey where tradition meets innovation as you indulge in a delightful fusion of authentic Indian flavors and a unique dining experience—perfect for families, friends, and food lovers alike. At Flavour Station, we bring you the finest Indian cuisine served in a one-of-a-kind way—delivered straight to your table by charming miniature trains.
          </p>

          <h2 className="inline-block bg-amber-600 text-black px-4 py-2 rounded-full text-2xl md:text-3xl font-bold mb-4">
            Our Mission &amp; Vision
          </h2>
          <p className="text-lg md:text-xl mb-4">
            Our Mission is to create a dining experience where every guest enjoys meals made from the freshest ingredients, cooked to perfection, and served with warmth. From our kitchen to your table, we deliver nothing but the best!
          </p>
          <p className="text-lg md:text-xl">
            Our Vision is to bring the heart and soul of Indian food to every plate, connecting people across cultures through the universal language of taste.
          </p>
        </div>
      </div>
      <div className="mx-auto px-4 py-16 max-w-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-xl shadow-xl overflow-hidden bg-white transition-transform hover:scale-105 duration-300">
            <img
              src={offersImage}
              alt="Our Menu"
              className="w-full h-64 object-contain bg-gray-100"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Our Menu</h3>
              <p className="text-gray-600 mb-4">
                Explore our wide range of authentic North Indian dishes.
              </p>
              <Link
                to="/menu"
                className="text-amber-700 hover:text-amber-900 font-semibold"
              >
                View Menu &rarr;
              </Link>
            </div>
          </div>
          <div className="rounded-xl shadow-xl overflow-hidden bg-white transition-transform hover:scale-105 duration-300">
            <img
              src={restaurantImage}
              alt="Contact Us"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Contact Us</h3>
              <p className="text-gray-600 mb-4">
                Reach out to us for reservations, queries, or feedback.
              </p>
              <Link
                to="/contact"
                className="text-amber-700 hover:text-amber-900 font-semibold"
              >
                Contact Now &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
