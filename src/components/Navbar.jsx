import React, { useState } from 'react';
import { FaBars, FaTimes, FaArrowDown } from 'react-icons/fa';
// import './Navbar.css';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const operCV = () => {
    window.open("/myResume.pdf", "_blank")
  }

 

  const homeScroll = () => {
    window.scroll({
      top:0,
      behavior:'smooth'
    })
  }
    const scroll = () => {
    window.scroll({
      top: 550,
      behavior: "smooth"
    })
  }
   const skillScroll = () => {
    window.scroll({
      top:1350,
      behavior:'smooth'
    })
  }
  const projectScroll = () => {
    window.scroll({
      top:2250,
      behavior:'smooth'
    })
  }
  const conScroll = () => {
    window.scroll({
      top:2800,
      behavior:'smooth'
    })
  }

  return (
    <div className="fixed w-full h-20 flex items-center justify-between px-4 bg-[#1f0458]/80 text-white z-50">
   {/* Mobile Menu Button */}
      <div className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden" onClick={() => setNav(!nav)}>
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      <div>
        <h1 className="text-2xl font-bold text-[#8a6ba3]">Suhail Saifi</h1>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex">
        <li className="px-4 cursor-pointer capitalize hover:text-[#8a6ba3] duration-200" onClick={homeScroll}>
        Home
        </li>
        <li className="px-4 cursor-pointer capitalize hover:text-[#8a6ba3] duration-200" onClick={scroll}>
          About
        </li>
        <li className="px-4 cursor-pointer capitalize hover:text-[#8a6ba3] duration-200" onClick={skillScroll}>
          Skills
        </li>
        <li className="px-4 cursor-pointer capitalize hover:text-[#8a6ba3] duration-200" onClick={projectScroll}>
          Projects
        </li>
        <li className="px-4 cursor-pointer capitalize hover:text-[#8a6ba3] duration-200" onClick={conScroll}>
          Contact
        </li>
      </ul>

    

      {/* Mobile Menu */}
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-[#130335]">
          <li className="px-4 cursor-pointer capitalize py-4 text-4xl hover:text-[#8a6ba3] duration-200">
            <a href="#home" onClick={() => setNav(!nav)}>Home</a>
          </li>
          <li className="px-4 cursor-pointer capitalize py-4 text-4xl hover:text-[#8a6ba3] duration-200">
            <a href="#about" onClick={() => setNav(!nav)}>About</a>
          </li>
          <li className="px-4 cursor-pointer capitalize py-4 text-4xl hover:text-[#8a6ba3] duration-200">
            <a href="#skills" onClick={() => setNav(!nav)}>Skills</a>
          </li>
          <li className="px-4 cursor-pointer capitalize py-4 text-4xl hover:text-[#8a6ba3] duration-200">
            <a href="#projects" onClick={() => setNav(!nav)}>Projects</a>
          </li>
          <li className="px-4 cursor-pointer capitalize py-4 text-4xl hover:text-[#8a6ba3] duration-200">
            <a href="#contact" onClick={() => setNav(!nav)}>Contact</a>
          </li>
        </ul>
      )}

      {/* Download CV Button */}
      <div className="dropdown dropdown-hover">
  <div tabIndex={0} role="button" className="btn text-white bg-[#130335]  m-6">Resume</div>
  <ul tabIndex={0} className="dropdown-content bg-[#4e199e]  menu  rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a download href='myResume.pdf'>Download CV</a></li>
    <li><a onClick={operCV} target='_blank'>Open CV</a></li>
  </ul>
</div>
    </div>
  );
};

export default Navbar;


