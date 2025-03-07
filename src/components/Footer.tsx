// import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#002147] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="logo.png" 
                alt="Stellar Academy Logo" 
                className="h-10 w-auto mr-3"
              />
              <h3 className="text-xl font-bold">Stellar Academy</h3>
            </div>
            <p className="text-gray-300">
              Where success begins and excellence never ends. Join us in your journey towards academic excellence.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-300 hover:text-white">About Us</a></li>
              <li><a href="#courses" className="text-gray-300 hover:text-white">Courses</a></li>
              <li><a href="#faculty" className="text-gray-300 hover:text-white">Faculty</a></li>
              <li><a href="#results" className="text-gray-300 hover:text-white">Results</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-300">
              <li>123 Education Street</li>
              <li>Mumbai, Maharashtra 400001</li>
              <li>Phone: +91 1234567890</li>
              <li>Email: info@stellaracademy.com</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Stellar Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;