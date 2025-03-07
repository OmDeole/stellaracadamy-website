import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-[#002147] text-white z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <img 
                src="https://i.im.ge/2025/03/06/pXbREr.logofinal.png" 
                alt="Stellar Academy Logo" 
                className="h-10 w-auto mr-3"
              />
              <span className="text-2xl font-bold">STELLAR ACADEMY</span>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#home" className="hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">Home</a>
              <a href="#about" className="hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">About</a>
              <a href="#courses" className="hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">Courses</a>
              <a href="#faculty" className="hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">Faculty</a>
              <a href="#results" className="hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">Results</a>
              <a href="#contact" className="hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block hover:text-gray-300 px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a href="#about" className="block hover:text-gray-300 px-3 py-2 rounded-md text-base font-medium">About</a>
            <a href="#courses" className="block hover:text-gray-300 px-3 py-2 rounded-md text-base font-medium">Courses</a>
            <a href="#faculty" className="block hover:text-gray-300 px-3 py-2 rounded-md text-base font-medium">Faculty</a>
            <a href="#results" className="block hover:text-gray-300 px-3 py-2 rounded-md text-base font-medium">Results</a>
            <a href="#contact" className="block hover:text-gray-300 px-3 py-2 rounded-md text-base font-medium">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;