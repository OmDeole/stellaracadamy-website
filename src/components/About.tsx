import React from 'react';
import { GraduationCap, Users, Star } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#002147] mb-4">About Stellar Academy</h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600">
              Stellar Academy is a premier coaching institute dedicated to nurturing young minds and helping them achieve their academic goals. With our experienced faculty and proven teaching methodology, we prepare students for:
            </p>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <Star className="w-5 h-5 text-yellow-400" />
                <span>8th to 10th Board Examinations</span>
              </li>
              <li className="flex items-center space-x-3">
                <Star className="w-5 h-5 text-yellow-400" />
                <span>MHT-CET Preparation</span>
              </li>
              <li className="flex items-center space-x-3">
                <Star className="w-5 h-5 text-yellow-400" />
                <span>JEE Mains & Advanced</span>
              </li>
            </ul>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg transform hover:-translate-y-2 transition duration-300">
              <GraduationCap className="w-12 h-12 text-[#002147] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Faculty</h3>
              <p className="text-gray-600">Highly qualified and experienced teachers</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg transform hover:-translate-y-2 transition duration-300">
              <Users className="w-12 h-12 text-[#002147] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Small Batches</h3>
              <p className="text-gray-600">Personalized attention to every student</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg transform hover:-translate-y-2 transition duration-300">
              <Star className="w-12 h-12 text-[#002147] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
              <p className="text-gray-600">Consistent top rankings in all exams</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg transform hover:-translate-y-2 transition duration-300">
              <GraduationCap className="w-12 h-12 text-[#002147] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Modern Facilities</h3>
              <p className="text-gray-600">State-of-the-art infrastructure</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;