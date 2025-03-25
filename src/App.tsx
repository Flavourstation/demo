

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MapPin, Mail, Phone } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import MenuPage from './pages/Menu';
import Offers from './pages/Offers';
import Contact from './pages/Contact';
import MenuPageapp from './pages/Menuapp';
import MenuPagemain from './pages/Menumain';
import MenuPagecombo from './pages/Menucombo';
import MenuPagedrinks from './pages/Menudrinks';
import MenuPageice from './pages/Menurice';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <div className="fixed top-0 left-0 w-full bg-red-800 text-white py-3 px-2 z-50 shadow-md">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-sm gap-2">
            <div className="flex items-center gap-2 flex-wrap">
              <MapPin size={20} />
              <span>1001 Langs Dr (Hespler & Langs), Cambridge, ON N1R 7K7</span>
              <Phone size={20} className="ml-4" />
              <span className="font-semibold">Phone:</span>
              <span>+1 (647) 766-3929</span>
            </div>
            <div className="flex items-center gap-2 mt-2 md:mt-0">
              <Mail size={20} />
              <span>info@flavourstation.ca</span>
            </div>
          </div>
        </div>

        <div className="pt-[72px]">
          <Navbar />
        </div>

        <main className="flex-grow">
          <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/menuapp" element={<MenuPageapp />} />
            <Route path="/menumain" element={<MenuPagemain />} />
            <Route path="/menucombo" element={<MenuPagecombo />} />
            <Route path="/menudrinks" element={<MenuPagedrinks />} />
            <Route path="/menuice" element={<MenuPageice />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;





