import React from 'react';
import { Link } from "react-router-dom";
import MenuPageApp from './Menuapp';
import food from '../images/food.jpg';
import paneertikka from '../images/paneertikka.jfif';
import Slider from 'react-slick';
const MenuPage = () => {
  const menuCategories = [
    {
      name: 'Appetizers',
      items: [
        {
          name: '',
          description: '',
          image: paneertikka,
          link:'/menuapp',
         
        }
      ]
    },
    {
      name: 'Main Course',
      items: [
        {
          name: '',
          description: '',
          
          image: food,
          link:'/menumain'
          
        }
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-12">Our Menu</h1>
      
      {menuCategories.map((category) => (
        <div key={category.name} className="mb-12">
          <h2 className="text-4xl font-semibold mb-6 text-amber-800">{category.name}</h2>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-3"> 
            {category.items.map((item) => (
              <div key={item.name} className="bg-white rounded-lg shadow-lg overflow-hidden">
              
                <Link to={item.link}>
            
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-60 object-cover"
                />
                
                </Link>
                
               <div className="p-6"> 
             
                    <h3 className="text-xl font-bold">{item.name}</h3>
                
                  
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