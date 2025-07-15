import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'backdrop-blur-md bg-black/10 border-b border-white/20 shadow-2xl' 
          : 'bg-transparent'
      }`}
    >
      <div className='max-w-7xl mx-auto px-4 flex justify-between items-center'>
        {/* Logo */}
        <div className='text-white text-3xl cursor-pointer hover:scale-110 transition-transform duration-200'>
          <img 
            src={logo} 
            alt="Logo" 
            className='h-12 w-auto w-20 h-20 object-contain transition-all duration-300 ease-in-out drop-shadow-lg' 
          />
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden cursor-pointer z-50" onClick={toggle}>
          <div className="space-y-1">
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </div>
        </div>

        {/* Navigation Links */}
        <nav
          className={`
            ${isOpen ? 'flex' : 'hidden'}
            flex-col items-center md:flex md:flex-row md:items-center md:space-x-8
            md:justify-center
            absolute md:static top-full left-0 w-full md:w-auto
            bg-black/60
            backdrop-blur-md md:bg-transparent px-4 md:px-0 py-6 md:py-0
            border-t border-white/10 md:border-none
          `}
        >
          {['hero', 'about', 'education', 'projects', 'skills', 'contact'].map((section) => (
            <div key={section}>
              <Link
                to={section}
                smooth={true}
                duration={500}
                offset={-80}
                onClick={() => setIsOpen(false)}
                className="relative group text-white hover:text-pink-500 font-medium px-4 py-3 md:py-2 transition-all duration-300 cursor-pointer block md:inline-block"
                activeClass="text-cyan-400"
                spy={true}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
                <span className="absolute inset-0 rounded-md bg-gradient-to-r from-purple-600/0 to-cyan-600/0 group-hover:from-purple-600/10 group-hover:to-cyan-600/10 transition-all duration-300 -z-10"></span>
              </Link>
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
