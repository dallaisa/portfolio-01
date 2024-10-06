import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <nav className="bg-black w-full fixed top-0 z-50">
            <div className="h-[10vh] flex justify-between items-center px-6 lg:px-20 py-4">
                {/* Logo ou nome */}
                <div className="text-2xl font-bold text-white">
                    Isabelle Dallabeneta
                </div>

                {/* Menu para telas grandes */}
                <div className="hidden lg:flex space-x-8 text-white text-[18px]">
                    <ul className="flex gap-8 mr-16 list-none"> {/* Adicionado 'list-none' */}
                        <Link spy={true} smooth={true} to="Home">
                            <li className="hover:text-fuchsia-600 transition border-b-2 border-transparent hover:border-fuchsia-600 cursor-pointer">Home</li>
                        </Link>
                        <Link spy={true} smooth={true} to="About">
                            <li className="hover:text-fuchsia-600 transition border-b-2 border-transparent hover:border-fuchsia-600 cursor-pointer">About me</li>
                        </Link>
                        <Link spy={true} smooth={true} to="Projects">
                            <li className="hover:text-fuchsia-600 transition border-b-2 border-transparent hover:border-fuchsia-600 cursor-pointer">Projects</li>
                        </Link>
                        <Link spy={true} smooth={true} to="Certificates">
                            <li className="hover:text-fuchsia-600 transition border-b-2 border-transparent hover:border-fuchsia-600 cursor-pointer">Certificates</li>
                        </Link>
                        <Link spy={true} smooth={true} to="Contact">
                            <li className="hover:text-fuchsia-600 transition border-b-2 border-transparent hover:border-fuchsia-600 cursor-pointer">Contact</li>
                        </Link>
                    </ul>
                </div>

                {/* Ícone do menu para telas pequenas */}
                <div className="lg:hidden text-white cursor-pointer" onClick={handleClick}>
                    {click ? <FaTimes size={28} /> : <CiMenuFries size={28} />}
                </div>

                {/* Menu para telas pequenas */}
                <div
                    className={`absolute top-16 left-0 w-full bg-slate-950 text-white text-center transition-all duration-300 ${
                        click ? "block" : "hidden"
                    }`}
                >
                    <ul className="text-xl py-8 space-y-6 list-none"> {/* Adicionado 'list-none' */}
                        <Link spy={true} smooth={true} to="Home" onClick={handleClick}>
                            <li className="hover:bg-slate-900 py-4 rounded">Home</li>
                        </Link>
                        <Link spy={true} smooth={true} to="About" onClick={handleClick}>
                            <li className="hover:bg-slate-900 py-4 rounded">About me</li>
                        </Link>
                        <Link spy={true} smooth={true} to="Projects" onClick={handleClick}>
                            <li className="hover:bg-slate-900 py-4 rounded">Projects</li>
                        </Link>
                        <Link spy={true} smooth={true} to="Certificates" onClick={handleClick}>
                            <li className="hover:bg-slate-900 py-4 rounded">Certificates</li>
                        </Link>
                        <Link spy={true} smooth={true} to="Contact" onClick={handleClick}>
                            <li className="hover:bg-slate-900 py-4 rounded">Contact</li>
                        </Link>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
