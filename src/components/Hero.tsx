// import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center bg-[#002147]">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2866&q=80"
          className="w-full h-full object-cover opacity-20"
          alt="Campus"
        />
      </div>
      <div className="relative z-10 text-center px-4">
        <div className="animate-fadeIn">
          <img 
            src="https://i.im.ge/2025/03/06/pXbREr.logofinal.png" 
            alt="Stellar Academy Logo" 
            className="w-24 h-24 mx-auto mb-6"
          />
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">STELLAR ACADEMY</h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">Where Success Begins...</p>
          <div className="space-x-4">
            <a href="#courses" className="bg-white text-[#002147] px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition duration-300">
              Explore Courses
            </a>
            <a href="#contact" className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-[#002147] transition duration-300">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;