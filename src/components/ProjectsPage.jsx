import React from 'react';
import { TERipple } from 'tw-elements-react';
import { FaGithub, FaYoutube, FaRegFilePdf } from "react-icons/fa6"; // Importação dos ícones

const CardWithRippleExample = ({ title, content, image, youtubeLink, githubLink, pdfLink }) => {
  return (
    <div className="block rounded-lg bg-black text-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
      <TERipple>
        <div className="relative overflow-hidden bg-cover bg-no-repeat">
          <img className="rounded-t-lg" src={image} alt={title} />
          <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full bg-[hsla(0,0%,98%,0.15)] opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
        </div>
      </TERipple>
      <div className="p-6">
        <h5 className="mb-2 text-xl font-medium leading-tight">{title}</h5>
        <p className="mb-4 text-base">{content}</p>
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
          {pdfLink && (
            <a href={pdfLink} target="_blank" rel="noopener noreferrer">
              <FaRegFilePdf className="text-white text-2xl hover:text-red-600 transition duration-300" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const ProjectsPage = () => {
  return (
    <div className="bg-[#0d041f] text-white min-h-screen p-10">
      <h1 className="text-4xl font-bold mb-6">Projects</h1>
      <p className="text-lg mb-6">All my programming and graphic design projects.</p>
      
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
        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
          <CardWithRippleExample 
            title="Demo reel projects logos" 
            content="Video of my logo projects 2023." 
            image="https://i.pinimg.com/564x/66/b7/c3/66b7c392eff5cef2ab54d7268c6505d5.jpg" 
            youtubeLink="https://youtu.be/oPXEs7WceHM" 
          />
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
          <CardWithRippleExample 
            title="responsive registration 01" 
            content="Responsive registration for Mahindra E-Teens." 
            image="https://i.pinimg.com/564x/3b/55/19/3b55190045d9130acabb5f7e1c9f2a18.jpg" 
            githubLink="https://github.com/dallaisa/responsivoCadastro" 
          />
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
          <CardWithRippleExample 
            title="registration exemple" 
            content="Old registration for Mahindra E-Kids." 
            image="https://i.pinimg.com/736x/6d/b7/c9/6db7c9883f854ef5b3a0bb8f35c26b40.jpg" 
            youtubeLink="https://youtu.be/bUaIru7VILA" 
          />
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
          <CardWithRippleExample 
            title="Prototype Melodia Design" 
            content="Banner design for the Melodia website." 
            image="https://i.pinimg.com/736x/3f/bc/a7/3fbca76f29a04267d81c86452ef6770d.jpg" 
            pdfLink="https://drive.google.com/file/d/1p_cJ9Fnw9esSAEHBOc7RsWlTCRbYLaT1/view?usp=sharing"
          />
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
          <CardWithRippleExample 
            title="BlissWear brand prototype" 
            content="Visual identity of the virtual store of chic lingerie, pajamas and bathrobes." 
            image="https://i.pinimg.com/736x/c3/7a/f4/c37af4c21e14afe11c25bfa43244da44.jpg" 
            pdfLink="https://drive.google.com/file/d/1Dn1BKmJTqNpzKtBHWzfhmRTy8kHYiex-/view?usp=sharing"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
