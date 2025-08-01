import React from 'react';

import { FaArrowDown } from 'react-icons/fa';
import SplineModle from './SplineModle';


const Home = () => {
 


 
  const scroll = () => {
    window.scroll({
      top: 550,
      behavior: "smooth"
    })
  }

  return (
    // <div className=" w-full h-screen   px-4 bg-[#130335] text-white z-50">
  <div className="mb-6  h-[100vh] overflow-hidden w-full">
    <div className="bgdiv w-50 h-50 bg-red-500 top-110 absolute z-9"></div>
    <div className="hidden md:block absolute top-5 left-0 w-full h-full bg-gradient-to-b from-[#130335] to-transparent z-5" >
      <SplineModle/>
    </div>
      <div className="w-6 rounded-2xl mt-22 hidden md:block ml-0 h-6 bg-black" />
      
      <div className="md:hidden absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#130335] to-transparent z-10" >
      <div className="cant flex flex-col md:flex-row h-auto md:h-96">
      
        <div className="w-full  md:w-1/2 flex items-center justify-center order-first md:order-last mb-8  md:mb-0">
          <img 
            src="/img/un.svg" 
            className='w-64 mt-30 sm:w-80 md:w-96 h-auto object-contain' 
            alt="Hero Illustration" 
          />
        </div>

  
        <div className="w-full md:w-1/2 h-96 md:ml-10 px-4 md:px-0">
          <div className="relative">
            <div className="hidden md:block absolute -left-8 top-0 w-2 h-46 bg-gradient-to-b from-[#915eff]" />
            <div className="space-y-4 md:space-y-6">
              <h1 className='text-3xl sm:text-4xl font-bold'>
                <span className='text-[#915eff]'>Suhail Saifi</span>
              </h1>
              <h2 className='text-xl sm:text-2xl font-semibold text-gray-300'>
                Full-Stack MERN Developer | React Enthusiast
              </h2>
              <p className='text-gray-300 leading-relaxed text-base sm:text-lg max-w-2xl'>
                I am a passionate MERN stack developer with a strong foundation in React.js, Express.js, Node.js, and MongoDB. I specialize in building responsive, scalable, and user-friendly web applications. My goal is to create efficient and innovative digital experiences.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="  h-16 items-center justify-center flex">
        <button 
          className='btn rounded-2xl hover:bg-[#120331] hover:text-white text-[#120331] hover:border-2 hover:border-white transition-all duration-300 p-2 sm:p-3' 
          onClick={scroll}
          aria-label="Scroll down"
        >
          <FaArrowDown className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div> 
      </div></div>
  // </div>
  );
}


      export default Home;