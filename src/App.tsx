import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
    <Router> {/* ✅ Wrap everything inside BrowserRouter */}
      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <Routes> {/* ✅ Use Routes to define all pages */}
            <Route path="/" element={
              <>
                <Hero />
                <About />
                <Courses />
                <Faculty />
                <Results />
                <Contact />
              </>
            } />
            <Route path="/contact" element={<Contact />} /> {/* ✅ Contact Page */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
