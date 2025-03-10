import React from 'react';
import { GraduationCap } from 'lucide-react';

const Courses = () => {
  const courses = [
    {
      title: "8th-10th Board Excellence",
      description: "Comprehensive preparation for board examinations with focus on all subjects",
      features: ["Regular Tests", "Doubt Solving Sessions", "Study Material", "Parent Updates"]
    },
    {
      title: "MHT-CET",
      description: "Specialized coaching for Maharashtra Common Entrance Test",
      features: ["Topic-wise Practice", "Mock Tests", "Previous Year Papers", "Performance Analysis"]
    },
    {
      title: "JEE Mains",
      description: "Intensive preparation for JEE Mains examination",
      features: ["Concept Building", "Problem Solving", "Weekly Tests", "Online Resources"]
    },
    {
      title: "JEE Advanced",
      description: "Advanced level preparation for JEE Advanced",
      features: ["Advanced Concepts", "Expert Guidance", "Mock Tests", "Personal Mentoring"]
    }
  ];

  return (
    <section id="courses" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#002147] mb-4">Our Courses</h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-lg p-6 shadow-lg transform hover:-translate-y-2 transition duration-300"
            >
              <GraduationCap className="w-12 h-12 text-[#002147] mb-4" />
              <h3 className="text-xl font-semibold mb-3">{course.title}</h3>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <ul className="space-y-2">
                {course.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;