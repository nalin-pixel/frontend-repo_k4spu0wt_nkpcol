import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import PricingAbout from './components/PricingAbout.jsx';

function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <PricingAbout />
      </main>
    </div>
  );
}

export default App;
