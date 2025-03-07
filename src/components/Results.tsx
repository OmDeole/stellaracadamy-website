// import React from 'react';
import { Star } from 'lucide-react';

const Results = () => {
  const toppers = [
    {
      name: "Abhishek Sonparote",
      achievement: "IIT Jodhpur",
      year: "2024",
      image: "https://i.im.ge/2025/03/06/pX8H5q.abhi1.jpeg"
    },
    {
      name: "Sneha pajai",
      achievement: "MHT-CET 100 percentile",
      year: "2020",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
    },
    {
      name: "Dip Charhate",
      achievement: "12th Board 91.5%",
      year: "2023",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
    }
  ];

  return (
    <section id="results" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#002147] mb-4">Our Achievers</h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {toppers.map((topper, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-lg overflow-hidden shadow-lg transform hover:-translate-y-2 transition duration-300"
            >
              <div className="relative">
                <img 
                  src={topper.image}
                  alt={topper.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Star className="w-0 h-0 text-yellow-400" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{topper.name}</h3>
                <p className="text-[#002147] font-semibold mb-2">{topper.achievement}</p>
                <p className="text-gray-600">Batch of {topper.year}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          {/* <div className="bg-gray-50 p-8 rounded-lg shadow-lg inline-block">
            <h3 className="text-2xl font-bold text-[#002147] mb-4">Our Success Story</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#002147]">2+</div>
                <p className="text-gray-600">Students Selected in IITs</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#002147]">1000+</div>
                <p className="text-gray-600">MHT-CET Top Rankers</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#002147]">95%</div>
                <p className="text-gray-600">Success Rate</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#002147]">10+</div>
                <p className="text-gray-600">Years of Excellence</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Results;