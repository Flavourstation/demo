import React from 'react';
import dal from '../images/dal.jpg';
import chanamasala from '../images/chanamasala.jfif';
import karahichicken from '../images/karahichicken.jfif';
import  butterchicken from '../images/butterchicken1.jpg';
import manchurian from '../images/manchurian1.jpg';
import shahipaneer from '../images/shahipaneer.jpeg';
import karahipaneer from '../images/karahipaneer.jfif';
import chickenbriyani from '../images/chickenbriyani.jpeg';
import eggbriyani from '../images/eggbriyani.jfif';
import vegbriyani from '../images/vegbriyani.jfif';
import friedrice from '../images/friedrice.jpg';
import jeerarice from '../images/jeerarice.jfif';
import plainrice from '../images/plainrice.jfif';
import chillychicken from '../images/chillychicken.jpg';
import chickentikkamasala from '../images/chickentikkamasala.jfif';
import chillypaneer from '../images/chillypaneer.jfif';
import butternan from '../images/butternaan.jfif';
import garlicnan from '../images/garlicnan.jfif';
import plainnan from '../images/plainnan.jfif';
import lachhaparantha from '../images/lachhaparantha.jfif';
import tawaroti from '../images/tawaroti.jfif';



/* <images /> */

const MenuPage4 = () => {
  const menuCategories = [
    {
      name: 'Vegetarian',
      items: [
        {
          name: 'Dal Makhni',
          description: 'Black lentils and kidney beans slow-cooked and enriched with cream',
          price: 17.99,
          image: dal,
          isSpicy: false,
          isVegetarian: true
        },
        {
          name: 'Chana Masala',
          description: 'Chickpeas cooked with gravy and spices',
          price: 17.99,
          image: chanamasala,
          isSpicy: true,
          isVegetarian: true
        },
        {
          name: 'Karahi Paneer',
          description: 'Indian cottage cheese with gravy, onions and bell peppers ',
          price: 19.99,
          image: karahipaneer,
          isSpicy: true,
          isVegetarian: true
        },
        {
          name: 'Shahi Paneer',
          description: 'Indian cottage cheese cooked in a creamy gravy with  tomatoes and onions',
          price: 19.99,
          image: shahipaneer,
          isSpicy: false,
          isVegetarian: true
        },
        {
          name: 'Chilli Paneer',
          description: 'Paneer with bell peppers and onions in spicy sauces',
          price: 19.99,
          image: chillypaneer,
          isSpicy: true,
          isVegetarian: true
        },
        {
          name: 'Veg Manchurian',
          description: 'Deep-fried vegetable balls immered in a tangy, spicy sauce.',
          price: 17.99,
          image: manchurian,
          isSpicy: true,
          isVegetarian: true
        }
      ]
    },
      {
      name: 'Non Vegetarian',
      items: [
        {
          name: 'Butter Chicken',
          description: 'Boneless chicken cooked in a buttery tomato-based sauce',
          price: 19.99,
          image: butterchicken,
          isSpicy: false,
          isVegetarian: false
        },
        {
          name: 'Karahi Chicken',
          description: 'Boneless Chicken cooked with onions, bell peppers and tomato sauce',
          price: 19.99,
          image: karahichicken,
          isSpicy: true,
          isVegetarian: false
        },
        {
          name: 'Chilly Chicken',
          description: ' Chicken cooked with bell peppers and onion in spicy sauces',
          price: 19.99,
          image: chillychicken,
          isSpicy: true,
          isVegetarian: false
        },
        {
          name: 'Chicken Tikka Masala',
          description: 'Roasted Chicken with Gravy',
          price: 19.99,
          image: chickentikkamasala,
          isSpicy: true,
          isVegetarian: false
        }
        
      ]
    },
    {
      name: 'Rice',
      items: [
        {
          name: 'Chicken Briyani',
          description: 'Rice cooked with chicken & spices',
          price: 15.99,
          image: chickenbriyani,
         
        },
        {
          name: 'Egg Briyani',
          description: 'Rice cooked with boiled eggs and spices',
          price: 15.99,
          image: eggbriyani,
         
        },
        {
          name: 'Veg Briyani',
          description: 'Rice cooked with vegetables',
          price: 15.99,
          image: vegbriyani,
        
        },
        {
          name: 'Fried rice',
          description: 'Rice cooked with carrots and beans',
          price: 11.99,
          image: friedrice,
         
        },
        {
          name: 'Jeera Rice',
          description: 'Rice cooked with cumin seeds',
          price: 9.99,
          image: jeerarice,
          
        },
        {
          name: 'Plain Rice',
          description: 'Bioled Rice',
          price: 9.99,
          image: plainrice,
         
        }
        
      ]
    },
    {
      name: 'Breads',
      items: [
        {
          name: 'Butter Naan',
          description: 'Butter bread baked in tandoor',
          price: 4.99,
          image: butternan,
          
        },
        {
          name: 'Lachha Parantha',
          description: 'Crispy layered Indian flatbread',
          price: 4.99,
          image: lachhaparantha,
         
        },
        {
          name: 'Garlic Naan',
          description: 'Garlic tandoori flatbread )',
          price: 4.99,
          image: garlicnan,
       
        },
        {
          name: 'Plain Naan',
          description: 'Plain tandoori flatbread',
          price: 3.99,
          image: plainnan,
          
        },
        {
          name: 'Tawa Roti',
          description: 'Flat bread cooked on Pan',
          price: 2.99,
          image: tawaroti,
          
        }
        
        
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Menu</h1>
      {menuCategories.map((category) => (
        <div key={category.name} className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-amber-800">{category.name}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {category.items.map((item) => (
              <div
                key={item.name}
                className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:-translate-y-1 hover:shadow-xl duration-300"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
                    <span className="text-lg font-semibold text-amber-800">${item.price.toFixed(2)}</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                  <div className="flex gap-2">
                    {item.isSpicy && (
                      <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs">
                        Spicy
                      </span>
                    )}
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        item.isVegetarian
                          ? 'bg-green-100 text-green-800'
                          : 'bg-orange-100 text-orange-800'
                      }`}
                    >
                      {item.isVegetarian ? 'Veg' : 'Non-Veg'}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
export default MenuPage4;