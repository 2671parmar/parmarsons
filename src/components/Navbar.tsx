
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => setIsOpen(!isOpen);
  
  const isActive = (path: string) => {
    return location.pathname === path ? 'text-primary border-b-2 border-primary' : 'text-gray-700 hover:text-primary';
  };

  return (
    <nav className="bg-white/90 backdrop-blur-sm fixed w-full z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-tech-dark">ParmarSons</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`px-3 py-2 text-sm font-medium ${isActive('/')}`}>
              Home
            </Link>
            <Link to="/about" className={`px-3 py-2 text-sm font-medium ${isActive('/about')}`}>
              About
            </Link>
            <Link to="/services" className={`px-3 py-2 text-sm font-medium ${isActive('/services')}`}>
              Services
            </Link>
            <Link to="/portfolio" className={`px-3 py-2 text-sm font-medium ${isActive('/portfolio')}`}>
              Portfolio
            </Link>
            <Link to="/contact" className={`px-3 py-2 text-sm font-medium ${isActive('/contact')}`}>
              Contact
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white">
          <div className="pt-2 pb-3 space-y-1 px-2">
            <Link to="/" 
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium ${location.pathname === '/' ? 'bg-primary/10 text-primary' : 'hover:bg-gray-100'}`}>
              Home
            </Link>
            <Link to="/about" 
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium ${location.pathname === '/about' ? 'bg-primary/10 text-primary' : 'hover:bg-gray-100'}`}>
              About
            </Link>
            <Link to="/services" 
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium ${location.pathname === '/services' ? 'bg-primary/10 text-primary' : 'hover:bg-gray-100'}`}>
              Services
            </Link>
            <Link to="/portfolio" 
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium ${location.pathname === '/portfolio' ? 'bg-primary/10 text-primary' : 'hover:bg-gray-100'}`}>
              Portfolio
            </Link>
            <Link to="/contact" 
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium ${location.pathname === '/contact' ? 'bg-primary/10 text-primary' : 'hover:bg-gray-100'}`}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
