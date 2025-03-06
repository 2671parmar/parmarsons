
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMenu = () => setIsOpen(!isOpen);
  
  const isActive = (path: string) => {
    return location.pathname === path ? 'text-primary border-b-2 border-primary' : 'text-foreground hover:text-primary';
  };

  const navbarClasses = `bg-background/90 backdrop-blur-sm fixed w-full z-50 transition-shadow ${
    scrolled ? 'shadow-md' : 'shadow-sm'
  }`;

  return (
    <nav className={navbarClasses}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-foreground">ParmarSons</span>
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
            <ThemeToggle />
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <ThemeToggle className="mr-2" />
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:bg-secondary"
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
        <div className="md:hidden bg-background">
          <div className="pt-2 pb-3 space-y-1 px-2">
            <Link to="/" 
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium ${location.pathname === '/' ? 'bg-primary/10 text-primary' : 'hover:bg-secondary'}`}>
              Home
            </Link>
            <Link to="/about" 
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium ${location.pathname === '/about' ? 'bg-primary/10 text-primary' : 'hover:bg-secondary'}`}>
              About
            </Link>
            <Link to="/services" 
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium ${location.pathname === '/services' ? 'bg-primary/10 text-primary' : 'hover:bg-secondary'}`}>
              Services
            </Link>
            <Link to="/portfolio" 
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium ${location.pathname === '/portfolio' ? 'bg-primary/10 text-primary' : 'hover:bg-secondary'}`}>
              Portfolio
            </Link>
            <Link to="/contact" 
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium ${location.pathname === '/contact' ? 'bg-primary/10 text-primary' : 'hover:bg-secondary'}`}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
