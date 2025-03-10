// import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#002147] mb-4">Contact Us</h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002147]"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002147]"
                    placeholder="Your Email"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Message</label>
                  <textarea
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002147] h-32"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#002147] text-white py-3 rounded-lg hover:bg-[#003166] transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-[#002147]" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-gray-600">+91 9579325376</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-[#002147]" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-600">info@stellaracademy.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-[#002147]" />
                  <div>
                    <p className="font-semibold">Address</p>
                    <p className="text-gray-600">
                    65, MH MSH 6, Vidarbha Housing Board Colony, Harde Nagar,<br />
                    Paratwada, Maharashtra 444806
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-6">Visit Our Campus</h3>
              <img
                src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2866&q=80"
                alt="Campus"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <p className="text-gray-600">
                Experience our state-of-the-art facilities and meet our expert faculty. Schedule a visit today!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;