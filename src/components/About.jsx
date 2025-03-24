import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="bg-[#130335] text-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <p className="text-gray-300">
              I am a passionate MERN Stack Developer with a strong foundation in building modern web applications.
              My journey in web development started with a curiosity for creating interactive and user-friendly websites.
            </p>
            <p className="text-gray-300">
              I specialize in developing full-stack applications using MongoDB, Express.js, React, and Node.js.
              My expertise includes creating responsive user interfaces, implementing RESTful APIs, and managing databases.
            </p>
            <h4 className='text-gray-300 text-xl'> What I Do:</h4>
            <p className="text-gray-300">
              Develop dynamic React.js applications with Tailwind CSS & DaisyUI
              Build secure and scalable REST APIs using Express.js & Node.js
              Work with MongoDB for efficient database management
              Continuously learn and improve my skills in full-stack web development
              Currently, I am focusing on building a MERN authentication system and improving my backend skills.</p>
            <div className="flex space-x-4 mt-6">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer"
                className="text-2xl hover:text-[#8a6ba3] transition-colors duration-300">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer"
                className="text-2xl hover:text-[#8a6ba3] transition-colors duration-300">
                <FaLinkedin />
              </a>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer"
                className="text-2xl hover:text-[#8a6ba3] transition-colors duration-300">
                <FaTwitter />
              </a>
            </div>
          </div>
          <div className="relative">
            {/* <div className="w-full h-64 bg-[#210d2d] rounded-lg overflow-hidden"> */}
              <img
                src="/img/mjme.svg"
                alt="Profile"
                className="w-full  h-full object-cover"
              />
            {/* </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 