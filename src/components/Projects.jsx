import React from 'react';
import { Link } from 'react-router-dom'; 
import { TERipple } from 'tw-elements-react';
import { FaGithub, FaYoutube } from "react-icons/fa6";

const CardWithRippleExample = ({ title, content, image, youtubeLink, githubLink }) => {
  return (
    <div className="block rounded-lg bg-black text-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
      <TERipple>
        <div className="relative overflow-hidden bg-cover bg-no-repeat">
          <img className="rounded-t-lg" src={image} alt={title} />
          <a href="#!">
            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
          </a>
        </div>
      </TERipple>
      <div className="p-6">
        <h5 className="mb-2 text-xl font-medium leading-tight">{title}</h5>
        <p className="mb-4 text-base">{content}</p>
        {/* Ícones de GitHub e YouTube */}
        <div className="flex justify-start space-x-4 mt-4">
          {youtubeLink && (
            <a href={youtubeLink} target="_blank" rel="noopener noreferrer">
              <FaYoutube className="text-white text-2xl hover:text-red-500 transition duration-300" />
            </a>
          )}
          {githubLink && (
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-white text-2xl hover:text-gray-400 transition duration-300" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section className="bg-[#0d041f] py-20" id="projects">
      <div className="container mx-auto flex items-center justify-between px-5">
        <h2 className="text-5xl font-bold text-white">My recent Projects</h2>
        <Link to="/projects">
          <button className="px-12 py-2 border border-white text-white font-bold rounded-full bg-transparent hover:bg-white hover:text-purple-950 transition duration-300 text-lg">
            See more
          </button>
        </Link>
      </div>
      <div className="container mx-auto flex flex-wrap justify-center gap-4 p-5">
        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
          <CardWithRippleExample 
            title="EcoTrend" 
            content="Sustainable products store website." 
            image="https://i.pinimg.com/564x/64/b5/b9/64b5b90fb3c1a1b1e219d504a1bf7824.jpg" 
            youtubeLink="https://youtu.be/M92Cf6heNMs" 
          />
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
          <CardWithRippleExample 
            title="Melodia" 
            content="Music app promotion website." 
            image="https://i.pinimg.com/564x/4c/9f/af/4c9faf54c98ebc2b6475b38e8223e47c.jpg" 
            githubLink="https://github.com/camipzcunha/CPFR-Melodia" 
          />
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
          <CardWithRippleExample 
            title="E-Teens" 
            content="Formula-e website for teenagers and children." 
            image="https://i.pinimg.com/564x/db/c4/ad/dbc4ad149d219f7b9ff58147807ed618.jpg" 
            githubLink="https://github.com/camipzcunha/E-Teen" 
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
