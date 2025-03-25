
import React from 'react';
import { Link } from "react-router-dom";
import food from '../images/food.jpg';
import paneertikka from '../images/paneertikka.jfif';
import combo from '../images/kulcha.jfif';
import drinks from '../images/drinks.jfif';
import ice from '../images/gulabjamun.jpeg';

const MenuPage = () => {
  const menuCategories = [
    {
      name: 'Appetizers',
      image: paneertikka,
      link: '/menuapp',
    },
    {
      name: 'Main Course',
      image: food,
      link: '/menumain',
    },
    {
      name: 'Combos',
      image: combo,
      link: '/menucombo',
    },
    {
      name: 'Drinks',
      image: drinks,
      link: '/menudrinks',
    },
    {
      name: 'Desserts',
      image: ice,
      link: '/menuice',
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
        Explore Our Menu
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {menuCategories.map((category) => (
          <Link
            key={category.name}
            to={category.link}
            className="group block bg-white rounded-xl overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300"
          >
            <div className="h-64 overflow-hidden">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover group-hover:opacity-90 transition-opacity duration-300"
              />
            </div>
            <div className="p-6 text-center">
              <h2 className="text-2xl font-semibold text-amber-700 group-hover:text-amber-500 transition-colors duration-300">
                {category.name}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;





