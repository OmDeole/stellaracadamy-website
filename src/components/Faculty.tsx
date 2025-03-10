import React from 'react';

const Faculty = () => {
  const faculty = [
    {
      name: "Mr.Rahul Jawanjal",
      subject: "Physics",
      experience: "7+ years",
      education: "Bachelor Of Engineering /n MBA in IIM,Pune",
      image: "https://i.im.ge/2025/03/10/p2ql5q.Screenshot-2025-03-10-224849.png"
    },
    {
      name: "Mr.R.B.DIKE",
      subject: "Mathematics",
      experience: "8+ years",
      education: "Btech From Government College OF Engineering, Amravati",
      image: "https://i.im.ge/2025/03/10/p2SYBh.Screenshot-2025-03-10-224823.png"
    },
    {
      name: "Dr.Graheshlata Jaiswal",
      subject: "Chemistry",
      experience: "10+ years",
      education: "PhD in Chemistry",
      image: "https://i.im.ge/2025/03/10/p2S9Ya.Screenshot-2025-03-10-224738.png"
    }
  ];

  return (
    <section id="faculty" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#002147] mb-4">Our Expert Faculty</h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {faculty.map((member, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg transform hover:-translate-y-2 transition duration-300"
            >
              <img 
                src={member.image}
                alt={member.name}
                className="w-70 h-74 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-gray-600 mb-4">{member.subject}</p>
                <div className="space-y-2">
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">Experience:</span> {member.experience}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">Education:</span> {member.education}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faculty;