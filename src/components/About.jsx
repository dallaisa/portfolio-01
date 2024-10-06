import React from "react";
import bolhasImage from "../bolhas.png"; // Certifique-se de que o caminho está correto
import card1Image from "../card1.jpg"; // Ajuste o caminho conforme a localização real
import card2Image from "../card2.jpg"; // Ajuste o caminho conforme a localização real

const About = () => {
  return (
    <section className="bg-black text-white px-5 py-32" id="about">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-info">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">About Me</h2>
          <p className="pb-5">
            Hi, my name is Isabelle and I am a Software Engineering student at FIAP, focused on front-end development and graphic design.
          </p>
          <p className="pb-5">
            I have experience with HTML, CSS, and JavaScript, and I work with Bootstrap and React to develop responsive and dynamic interfaces.
          </p>
          <p>
            With 3 years of practice using tools like Adobe Photoshop, Illustrator, and After Effects, I create visual identities, logos, animations, and content for social media.
          </p>
          <p>
            I'm always looking to enhance my skills in programming and design, exploring new creative solutions in web development and visual projects.
          </p>
        </div>
        <div className="about-img">
          <img src={bolhasImage} alt="coding illustration" className="lg:w-[100%] md:w-[30%] md:ml-auto" />
        </div>
      </div>
      <div className="flex flex-wrap justify-center mt-10 gap-16"> {/* Aumente o valor do gap aqui */}
        <div className="flex flex-col rounded-lg bg-[#0d041f] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] md:max-w-xl md:flex-row">
          <img className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={card1Image} alt="Design Graphic" />
          <div className="flex flex-col justify-start p-6">
            <h5 className="mb-2 text-2xl font-medium text-white">Design Graphic</h5>
            <p className="mb-4 text-base text-white">
              Experience in Adobe Photoshop, Illustrator, and After Effects, focusing on logo creation, 2D animations, visual identity design, and social media content.
            </p>
            <p className="text-xs text-white"></p>
          </div>
        </div>
        <div className="flex flex-col rounded-lg bg-[#0d041f] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] md:max-w-xl md:flex-row">
          <img className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={card2Image} alt="Programming" />
          <div className="flex flex-col justify-start p-6">
            <h5 className="mb-2 text-2xl font-medium text-white">Programming</h5>
            <p className="mb-4 text-base text-white">
              Knowledge in HTML, CSS, JavaScript, and Bootstrap, focusing on responsive website development and modern interfaces. Currently learning React to enhance front-end development skills.
            </p>
            <p className="text-xs text-white"></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
