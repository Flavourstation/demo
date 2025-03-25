
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
import fishpakora from '../images/fishpakora.jfif';

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
          isVegetarian: true,
        },
        {
          name: 'Samosa Chat',
          description: 'Samosas served with yogurt and spices',
          price: 9.99,
          image: samosa,
          isSpicy: true,
          isVegetarian: true,
        },
        {
          name: 'Papdi Chat',
          description: 'Crispy crackers with potatoes, chickpeas, yogurt, and sauces',
          price: 9.99,
          image: papdichat,
          isSpicy: true,
          isVegetarian: true,
        },
        {
          name: 'Aaloo Tikki',
          description: 'Spiced mashed potatoes shallow-fried and served with curd, mint, and tamarind sauce',
          price: 9.99,
          image: aalootikki,
          isSpicy: true,
          isVegetarian: true,
        },
        {
          name: 'Noodles',
          description: 'Noodles stir-fried with vegetables and spices',
          price: 14.99,
          image: noodles,
          isSpicy: false,
          isVegetarian: true,
        },
        {
          name: 'Marinara Pasta',
          description: 'Pasta tossed in a flavorful marinara sauce',
          price: 11.99,
          image: mpasta,
          isSpicy: false,
          isVegetarian: true,
        },
        {
          name: 'Alfredo Pasta',
          description: 'Pasta in a rich and creamy Alfredo sauce',
          price: 11.99,
          image: apasta,
          isSpicy: false,
          isVegetarian: true,
        },
        {
          name: 'Veg Burger',
          description: 'Veggie patty with spices, lettuce, onions, and tomato in a soft bun',
          price: 9.99,
          image: vegburger,
          isSpicy: false,
          isVegetarian: true,
        },
        {
          name: 'French Fries',
          description: 'Fresh potatoes cut into thin strips and perfectly fried',
          price: 7.99,
          image: vegburger,
          isSpicy: false,
          isVegetarian: true,
        },
      ],
    },
    {
      name: 'Non Veg Appetizers',
      items: [
        {
          name: 'Chicken Tikka',
          description: 'Chicken pieces marinated and skewered with bell peppers and onions, grilled to perfection',
          price: 14.99,
          image: ctikka,
          isSpicy: true,
          isVegetarian: false,
        },
        {
          name: 'Chicken Fingers',
          description: 'Tender chicken strips seasoned and deep-fried',
          price: 7.99,
          image: cfingers,
          isSpicy: false,
          isVegetarian: false,
        },
        {
          name: 'Tandoori Chicken (Half)',
          description: 'Marinated chicken cooked in a traditional clay oven',
          price: 14.99,
          image: tchicken,
          isSpicy: true,
          isVegetarian: false,
        },
        {
          name: 'Fish Pakora (8 Pcs)',
          description: 'Crispy, spiced, deep-fried fish bites',
          price: 14.99,
          image: fishpakora,
          isSpicy: true,
          isVegetarian: false,
        },
      ],
    },
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

export default MenuPage1;





