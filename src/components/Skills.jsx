import React from 'react';
import { FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiRedux, SiFirebase } from 'react-icons/si';

const Skills = () => {
  const skills = [
    {
      category: "Frontend",
      items: [
        { name: "React.js", icon: <FaReact className="w-8 h-8" />, level: "Advanced" },
        { name: "HTML5", icon: <FaHtml5 className="w-8 h-8" />, level: "Advanced" },
        { name: "CSS3", icon: <FaCss3Alt className="w-8 h-8" />, level: "Advanced" },
        { name: "JavaScript", icon: <FaJs className="w-8 h-8" />, level: "Advanced" },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="w-8 h-8" />, level: "Advanced" },
        { name: "Redux", icon: <SiRedux className="w-8 h-8" />, level: "Intermediate" },
      ]
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", icon: <FaNodeJs className="w-8 h-8" />, level: "Advanced" },
        { name: "Express.js", icon: <SiExpress className="w-8 h-8" />, level: "Advanced" },
        { name: "MongoDB", icon: <SiMongodb className="w-8 h-8" />, level: "Advanced" },
        { name: "SQL", icon: <FaDatabase className="w-8 h-8" />, level: "Intermediate" },
      ]
    },
    {
      category: "Tools & Others",
      items: [
        { name: "Git", icon: <FaGitAlt className="w-8 h-8" />, level: "Advanced" },
        { name: "GitHub", icon: <FaGithub className="w-8 h-8" />, level: "Advanced" },
        { name: "Firebase", icon: <SiFirebase className="w-8 h-8" />, level: "Intermediate" },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20  bg-[#130335] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-[#915eff]">Skills</span> & Expertise
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            I possess a comprehensive skill set in web development, specializing in the MERN stack and modern web technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((category, index) => (
            <div 
              key={index}
              className="bg-[#210d2d] rounded-lg p-6 shadow-lg hover:shadow-xl hover:shadow-[#8a6ba3] transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-6 text-[#915eff]">{category.category}</h3>
              <div className="space-y-4">
                {category.items.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="flex items-center space-x-4 p-3 rounded-lg bg-[#130335] hover:bg-[#1a0442] transition-colors duration-300"
                  >
                    <div className="text-[#915eff]">
                      {skill.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium">{skill.name}</h4>
                      <p className="text-sm text-gray-400">{skill.level}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 