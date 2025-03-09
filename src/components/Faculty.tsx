import React from 'react';

const Faculty = () => {
  const faculty = [
    {
      name: "Mr.Rahul Jawanjal",
      subject: "Physics",
      experience: "7+ years",
      education: "Bachelor Of Engineering /n MBA in IIM,Pune",
      image: "https://i.im.ge/2025/03/06/pX8REh.rj1.jpeg"
    },
    {
      name: "Mr.R.B.DIKE",
      subject: "Mathematics",
      experience: "12+ years",
      education: "Btech",
      image: "https://i.im.ge/2025/03/06/pX8EV6.rbd1.jpeg"
    },
    {
      name: "Dr.Graheshlata Jaiswal",
      subject: "Chemistry",
      experience: "10+ years",
      education: "PhD in Chemistry",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
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
                className="w-full h-64 object-cover"
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