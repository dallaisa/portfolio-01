import React from 'react';
import headerImage from '../header.png'; 

const Header = () => {

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' }); 
    }
  };


  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' }); 
    }
  };

  return (
    <div
      id="home" 
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${headerImage})` }} 
    >
      {/* Texto centralizado */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold bg-gradient-to-b from-white to-purple-600 bg-clip-text text-transparent animate-fade-in tracking-widest">My</h1>
        <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold bg-gradient-to-b from-white to-purple-600 bg-clip-text text-transparent animate-fade-in tracking-widest">Portfolio</h2>

        {/* Botões */}
        <div className="mt-8 flex space-x-6">
          <button 
            className="px-12 py-2 text-white font-bold rounded-full bg-gradient-to-b from-purple-400 to-purple-600 hover:opacity-90 transition duration-300 text-lg animate-fade-in delay-200"
            onClick={scrollToProjects} 
          >
            See now
          </button>
          <button 
            className="px-12 py-2 border border-white text-white font-bold rounded-full bg-transparent hover:bg-white hover:text-purple-600 transition duration-300 text-lg animate-fade-in delay-200"
            onClick={scrollToAbout} 
          >
            About me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
