import React from 'react';
import paneertikka from '../images/paneertikka.jfif';
import noodles from '../images/noodles.jpg';
import papdichat from '../images/chatpapri.jfif';
import samosa from '../images/samosachat.jpg';
import vegburger from '../images/vegburger.jfif';
import aalootikki from '../images/aalootikki.jfif';
import apasta from '../images/alfredo.jpg';
import mpasta from '../images/mpasta.jfif';
import ctikka from '../images/chickentikka.jpg';
import cfingers from '../images/chickenfingers.jfif';
import tchicken from '../images/tandoorichicken.jpg';

/* <images /> */

const MenuPage1 = () => {
  const menuCategories = [
    {
      name: 'Veg Appetizers',
      items: [
        {
          name: 'Paneer Tikka',
          description: 'Marinated cottage cheese grilled to perfection',
          price: 14.99,
          image: paneertikka,
          isSpicy: true,
          isVegetarian: true
        },
        {
          name: 'Samosa Chat',
          description: 'Samosas served with yogurt and species',
          price: 9.99,
          image: samosa,
          isSpicy: true,
          isVegetarian: true
        },
        {
          name: 'Papdi Chat',
          description: 'Crispy flour crackers potatoes, chickpeas, yogurt and sauces',
          price: 9.99,
          image: papdichat,
          isSpicy: true,
          isVegetarian: true
        },
        {
          name: 'Aaloo Tikki',
          description: 'Spiced mashed potatoes shallow-fried and served with curd, mint and tamarind sauce',
          price: 9.99,
          image: aalootikki,
          isSpicy: true,
          isVegetarian: true
        },
        {
          name: 'Noodles',
          description: 'Noodles fried with vegetables and spices',
          price: 14.99,
          image: noodles,
          isSpicy: false,
          isVegetarian: true
        },
        {
          name: 'Marinara Pasta',
          description: 'Pasta tossed in a flavorful marinara sauce',
          price: 11.99,
          image: mpasta,
          isSpicy: false,
          isVegetarian: true
        },
        {
          name: 'Alfredo Pasta',
          description: 'Pasta tossed in alfredo sauce',
          price: 11.99,
          image: apasta,
          isSpicy: false,
          isVegetarian: true
        },
        {
          name: 'Veg Burger',
          description: 'Bun served with vegetable patty with spices, lettuce, onions and tomato',
          price: 9.99,
          image: vegburger,
          isSpicy: false,
          isVegetarian: true
        },
        {
          name: 'French Fries',
          description: 'Fresh potatoes  cut into thin strips and fried',
          price: 7.99,
          image: vegburger,
          isSpicy: false,
          isVegetarian: true
        },

      ]
    },
    {
      name: 'Non Veg Appetizers',
      items: [
        {
          name: 'Chicken Tikka',
          description: 'Chicken pieces marinated skewered with bell peppers and onions grilled or roasted',
          price: 14.99,
          image: ctikka,
          isSpicy: true,
          isVegetarian: false
        },
        {
          name: 'Chicken Fingers',
          description: 'Chicken strips seasoned and deep-fried',
          price: 7.99,
          image: cfingers,
          isSpicy: false,
          isVegetarian: false
        },
        {
          name: 'Tandoori Chicken (Half)',
          description: 'Marinated Chicken cooked in a tandoor (clay oven)',
          price: 14.99,
          image: tchicken,
          isSpicy: true,
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

export default MenuPage1;