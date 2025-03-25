import React from 'react';
import makki from '../images/makki.jpg';
import bhatura from '../images/bhatura.jpg';
import poori from '../images/poori.jfif';
import ricemanchurian from '../images/ricemanchurian.jfif';
import pastacombo from '../images/pastacombo.jpg';
import fingerfries from '../images/fingersfries.jpg';
import kulcha from '../images/kulcha1.jpg';


/* <images /> */

const MenuPage = () => {
  const menuCategories = [
    {
      name: ' ',
      items: [
        {
          name: 'Makki di Roti with Saag and Lassi',
          description: 'Corn flatbread with mashed mustard leaves and spinach ',
          price: 19.99,
          image: makki,
          isSpicy: false,
          isVegetarian: true
        },
        {
          name: 'Poori Chana',
          description: 'Deep-fried bread with chickpeas curry',
          price: 11.99,
          image: poori,
          isSpicy: true,
          isVegetarian: true
        },
        {
          name: 'Chana Bhatura',
          description: 'Fried bread with chickpeas curry ',
          price: 11.99,
          image: bhatura,
          isSpicy: true,
          isVegetarian: true
        },
        {
          name: 'Amritsari Kulcha with Chana',
          description: 'Aloo-paneer stuffed paratha with chickpeas curry ',
          price: 11.99,
          image: kulcha,
          isSpicy: true,
          isVegetarian: true
        },
        {
          name: 'Fried Rice with Veg Manchurian',
          description: 'Rice with vegetables  with tangy vegetable balls in gravy',
          price: 11.99,
          image: ricemanchurian,
          isSpicy: true,
          isVegetarian: true
        },
        {
          name: 'French fries and Chicken fingers',
          description: 'Fried chicken and Fried potatoes',
          price: 11.99,
          image: fingerfries,
          isSpicy: false,
          isVegetarian: false
        },
        {
          name: 'Pasta, fries, chicken fingers and noodles',
          description: 'Flavored Pasta, Veg noodles with fried chicken and potatoes',
          price: 13.99,
          image: pastacombo,
          isSpicy: false,
          isVegetarian: false
        }
      ]
    }
        
      
    
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-12">Our Menu</h1>
      
      {menuCategories.map((category) => (
        <div key={category.name} className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-amber-800">{category.name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {category.items.map((item) => (
              <div key={item.name} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-40 h-40 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">{item.name}</h3>
                    <span className="text-lg font-semibold text-amber-800">${item.price}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="flex gap-2">
                    {item.isSpicy && (
                      <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-sm">
                        Spicy
                      </span>
                    )}
                    <span className={`px-2 py-1 rounded-full text-sm ${
                      item.isVegetarian 
                        ? 'bg-green-100 text-green-800'
                        : 'bg-orange-100 text-orange-800'
                    }`}>
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

export default MenuPage;