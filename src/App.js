import React from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Fireworks from './components/Fireworks';
import ParticleBackground from './components/ParticleBackground';
import FloatingElements from './components/FloatingElements';
import GeometricBackground from './components/GeometricBackground';
import GlowingShapes from './components/GlowingShapes';
import BinaryRain from './components/BinaryRain';
import './App.css';

function App() {
  return (
    <div className="App">
      <BinaryRain />
      <GeometricBackground />
      <GlowingShapes />
      <Fireworks />
      <ParticleBackground />
      <FloatingElements />
      <Header />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </motion.main>
    </div>
  );
}

export default App;