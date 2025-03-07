import React from 'react';
import { Star, GraduationCap, Users, Phone, ChevronDown, Menu, X } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Courses from './components/Courses';
import Faculty from './components/Faculty';
import Results from './components/Results';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Courses />
        <Faculty />
        <Results />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;