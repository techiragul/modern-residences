import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Projects', href: '#' },
    { name: 'Residences', href: '#' },
    { name: 'Services', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black">
      {/* Top Bar */}
      <div className="bg-white text-black py-3 text-sm h-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row md:space-x-8 space-y-2 md:space-y-0 mb-3 md:mb-0">
            <div className="flex items-center">
              <FaPhone className="mr-2 text-accent" />
              <span>+91 12345 67890</span>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="mr-2 text-accent" />
              <span>info@modernresidences.com</span>
            </div>
          </div>
          <div className="flex space-x-4">
            <button className="bg-accent hover:bg-accent/90 px-6 py-2 text-xs uppercase tracking-wider">
              Enquire Now
            </button>
            <button className="bg-transparent border border-white hover:bg-white/10 px-6 py-2 text-xs uppercase tracking-wider">
              Book a Consultation
            </button>
          </div>
        </div>
      </div>
      
      {/* Main Navigation */}
      <div className="bg-white/10 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            <div className="text-white text-2xl font-bold">
              MODERN <span className="text-accent">RESIDENCES</span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-accent transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </nav>
            
            {/* Mobile menu button */}
            <button
              className="md:hidden text-white focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 w-full z-50">
            <nav className="px-2 pt-2 pb-4 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-white hover:bg-white/10 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
