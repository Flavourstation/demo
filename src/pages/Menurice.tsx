import React from 'react';
import gajjarhalwa from '../images/gajjarhalwa.jfif';
import gulabjamun from '../images/gulabjamun1.jfif';
import rasmalai from '../images/rasmalai.jfif';
import icecream from '../images/icecream.jfif';



/* <images /> */

const MenuPage = () => {
  const menuCategories = [
    {
      name: '',
      items: [
        {
          name: 'Gajjar Ka Halwa',
          description: 'Grated carrots cooked with milk and sugar ',
          price: 7.99,
          image: gajjarhalwa,
          
        },
        {
          name: 'Gulab Jamun (2Pcs)',
          description: 'Fried Dough balls soaked in sugar syrup',
          price: 7.99,
          image: gulabjamun,
          
        },
        {
          name: 'Ras Malai (2Pcs)',
          description: 'Flavored cheese cake in milk ',
          price: 7.99,
          image: rasmalai,
          
        },
        {
          name: 'Ice Cream',
          description: '7 different flavours of Icecream',
          price: 7.99,
          image: icecream,
          
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