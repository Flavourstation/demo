import React from 'react';

const Offers = () => {
  const offers = [
    {
      title: 'Weekend Special',
      discount: '20% OFF',
      description: 'Get 20% off on all main course dishes every weekend',
      image: 'https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?auto=format&fit=crop&q=80',
      couponCode: 'WEEKEND20'
    },
    {
      title: 'Family Feast',
      discount: '15% OFF',
      description: 'Special discount on family platters for 4 or more people',
      image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&q=80',
      couponCode: 'FAMILY15'
    },
    {
      title: 'Lunch Special',
      discount: '10% OFF',
      description: 'Weekday lunch special between 11 AM to 3 PM',
      image: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&q=80',
      couponCode: 'LUNCH10'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-12">Special Offers</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {offers.map((offer) => (
          <div key={offer.title} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={offer.image}
              alt={offer.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">{offer.title}</h2>
              <div className="text-3xl font-bold text-amber-800 mb-4">{offer.discount}</div>
              <p className="text-gray-600 mb-4">{offer.description}</p>
              <div className="bg-gray-100 p-3 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">Use Coupon Code:</p>
                <p className="text-lg font-mono font-semibold">{offer.couponCode}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offers;