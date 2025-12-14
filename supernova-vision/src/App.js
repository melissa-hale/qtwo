import React from 'react';
import Hero from './components/Hero';
import StrategicContext from './components/StrategicContext';
import PersonasGrid from './components/PersonasGrid';
import InteractiveRoadmap from './components/InteractiveRoadmap';
import './App.css';

function App() {
  return (
    <div className="App">
      <Hero />
      <StrategicContext />
      <PersonasGrid />
      <InteractiveRoadmap />
      
      <footer className="footer">
        <div className="container">
          <p>Product Vision & Strategy: Q2 Personalization Platform</p>
          <p className="footer-date">December 2025</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
