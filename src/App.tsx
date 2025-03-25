import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Menu, MapPin, Mail, Phone } from 'lucide-react';
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
        {/* Top Bar */}
        <div className="bg-red-800 text-white py-3 px-2">
          <div className="container mx-auto flex justify-between items-center text-sm">
            <div className="flex items-center gap-2">
              <MapPin size={32} />
              <span>1001 Langs Dr (Hespler & Langs), Cambridge, ON N1R 7K7</span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Phone className="text-white-800" size={24} />
                                
                                  <h3 className="font-semibold">Phone</h3>
                                  <p className="text-white-600">+1 (647) 766-3929</p>
                                
            </div>
            <div className="flex items-center gap-2">
              <Mail size={32} />
              <span>info@flavourstation.ca</span>
            </div>
          </div>

          
        </div>

        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/menuapp" element={<MenuPageapp/>} />
            <Route path="/menumain" element={<MenuPagemain/>} />
            <Route path="/menucombo" element={<MenuPagecombo/>} />
            <Route path="/menudrinks" element={<MenuPagedrinks/>} />
            <Route path="/menuice" element={<MenuPageice/>} />
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