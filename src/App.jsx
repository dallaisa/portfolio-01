// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import headerImage from './header.png'; 
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

export const App = () => {
  return (
    <div className='bg-slate-950 md:bg-black'>
      <Navbar />
      <Header image={headerImage} />
      <About />
      <Projects />
      <Contact />

    </div>
  );
};

export default App;
