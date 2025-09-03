import React from 'react'

const Projects = () => {
  return (
    <div>
         <div className="mt-16">
        <h2 className="text-3xl font-bold text-white mb-8 ml-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
            {/* NFT project */}
          <div className="bg-[#210d2d] rounded-lg overflow-hidden shadow-lg border border-white/20 hover:border-[#8a6ba3] transition-all duration-300 group">
            <div className="relative h-48 overflow-hidden">
              <img 
                src="https://img.freepik.com/free-vector/gradient-isometric-nft-concept_52683-62009.jpg?semt=ais_hybrid&w=740&q=80" 
                alt="Todo List App"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <a href="https://nft-zeta-gray-40.vercel.app/" target='_blanck' className="bg-[#8a6ba3] text-white px-4 py-2 rounded-lg hover:bg-[#6b4f8a] transition-colors duration-300">
                  View Project
                </a>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-white mb-2">NFT Bidding</h3>
              <p className="text-gray-300 text-sm mb-4">A modern NFT application with  roles for-example ( admin, user), etc. Indcluded some fetures like (marketplace, wallet, etc</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-[#8a6ba3]/20 text-[#8a6ba3] rounded text-sm">React.js</span>
                <span className="px-2 py-1 bg-[#8a6ba3]/20 text-[#8a6ba3] rounded text-sm">Redux</span>
                <span className="px-2 py-1 bg-[#8a6ba3]/20 text-[#8a6ba3] rounded text-sm">Tailwind CSS</span>
                
              </div>
            </div>
          </div>
          {/* Bookstore App */}
          <div className="bg-[#210d2d] rounded-lg overflow-hidden shadow-lg border border-white/20 hover:border-[#8a6ba3] transition-all duration-300 group">
            <div className="relative h-48 overflow-hidden">
              <img 
                src="https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books_23-2149334862.jpg" 
                alt="Bookstore App"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <a href="https://github.com/hellosuhail/BookStore" className="bg-[#8a6ba3] text-white px-4 py-2 rounded-lg hover:bg-[#6b4f8a] transition-colors duration-300" target='_blank'>
                  View Project
                </a>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-white mb-2">Bookstore App</h3>
              <p className="text-gray-300 text-sm mb-4">A full-featured e-commerce platform for books with user authentication, shopping cart, and admin dashboard.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-[#8a6ba3]/20 text-[#8a6ba3] rounded text-sm">MongoDB</span>
                <span className="px-2 py-1 bg-[#8a6ba3]/20 text-[#8a6ba3] rounded text-sm">Express.js</span>
                <span className="px-2 py-1 bg-[#8a6ba3]/20 text-[#8a6ba3] rounded text-sm">React</span>
                <span className="px-2 py-1 bg-[#8a6ba3]/20 text-[#8a6ba3] rounded text-sm">Node.js</span>
              </div>
            </div>
          </div>

        

          {/* GoFood */}
          <div className="bg-[#210d2d] rounded-lg overflow-hidden shadow-lg border border-white/20 hover:border-[#8a6ba3] transition-all duration-300 group">
            <div className="relative h-48 overflow-hidden">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcWDRfnGaj9faoF7VDNbUgKlBsMgYfySnFag&s" 
                alt="Notepad App"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <a href="https://gofood-gold.vercel.app/" className="bg-[#8a6ba3] text-white px-4 py-2 rounded-lg hover:bg-[#6b4f8a] transition-colors duration-300" target='_blank'>
                  View Project
                </a>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-white mb-2">Food Ordering App</h3>
              <p className="text-gray-300 text-sm mb-4">A feature-rich Food Ordering application with user auth, and cloud synchronization.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-[#8a6ba3]/20 text-[#8a6ba3] rounded text-sm">MongoDB</span>
                <span className="px-2 py-1 bg-[#8a6ba3]/20 text-[#8a6ba3] rounded text-sm">Express.js</span>
                <span className="px-2 py-1 bg-[#8a6ba3]/20 text-[#8a6ba3] rounded text-sm">React</span>
                <span className="px-2 py-1 bg-[#8a6ba3]/20 text-[#8a6ba3] rounded text-sm">Node.js</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects
