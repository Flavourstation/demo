import React from 'react';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>
      
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="text-amber-800" size={24} />
                  <div>
                    <h3 className="font-semibold">Address</h3>
                    <p className="text-gray-600">1001 Langs Dr (Hespler & Langs), Cambridge, ON, N1R 7K7 </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Mail className="text-amber-800" size={24} />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-600">info@flavourstation.ca</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Phone className="text-amber-800" size={24} />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-gray-600">+1 (647) 766-3929</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Clock className="text-amber-800" size={24} />
                  <div>
                    <h3 className="font-semibold">Hours</h3>
                    <p className="text-gray-600">Mon-Sun: 11:00 AM - 10:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="h-[400px] w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2242.052828000311!2d-80.33096732483601!3d43.401779771115095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b89b66a07e4b7%3A0x1fcd527fba572def!2s1001%20Langs%20Dr%2C%20Cambridge%2C%20ON%20N1R%207K7!5e1!3m2!1sen!2sca!4v1742926527348!5m2!1sen!2sca" 
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;