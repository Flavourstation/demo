import React from 'react';
import mangoshake from '../images/mangoshake.jfif';
import lassi from '../images/lassi.jfif';
import coffee from '../images/coffee.jfif';
import pop from '../images/pop.jfif';



/* <images /> */

const MenuPage3 = () => {
  const menuCategories = [
    {
      name: '',
      items: [
        {
          name: 'Mango Shake/Mango Lassi',
          description: 'Milk or Yogurt mixed with Mango Pulp',
          price: 6.99,
          image: mangoshake,
          
        },
        {
          name: 'Sweet Lassi',
          description: 'Sweet and Flavoured Yogurt drink',
          price: 6.99,
          image: lassi,
          
        },
        {
          name: 'Tea/Cofee',
          description: 'Espresso Coffee or Tea ',
          price: 4.99,
          image: coffee,
          
        },
        {
          name: 'Pop/Bottled Water',
          description: 'Soft Drink or Plain Water Bottle',
          price: 1.99,
          image: pop,
          
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

export default MenuPage3;