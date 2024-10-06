import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import headerImage from './header.png'; 
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ProjectsPage from './components/ProjectsPage'; 


export const App = () => {
  return (
    <Router>
      <div className='bg-slate-950 md:bg-black'>
        <Navbar />
        <Header image={headerImage} />
        <Routes>
          <Route path="/" element={<><About /><Projects /><Contact /></>} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
